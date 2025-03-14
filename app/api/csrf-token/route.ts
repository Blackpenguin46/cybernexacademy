import { NextRequest, NextResponse } from 'next/server';
import { generateCsrfToken } from '../lib/csrf';
import { handleRateLimit } from '../lib/rate-limit';

export async function GET(request: NextRequest): Promise<Response> {
  try {
    // Apply rate limiting - 10 requests per minute per IP
    const rateLimitResult = await handleRateLimit(request, { limit: 10, windowMs: 60000 });
    if (!rateLimitResult.success) {
      // Return the rate limit response if exceeded
      return rateLimitResult.response as NextResponse;
    }
    
    // Get the action from query params
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action') || 'default';
    
    // Generate a token for the action
    const { token, expires } = generateCsrfToken(action);
    
    // Set security headers for the response
    const headers = new Headers();
    headers.set('Cache-Control', 'no-store, max-age=0');
    headers.set('Content-Type', 'application/json');
    
    // Return the token in the response
    return NextResponse.json({ token, expires }, { 
      status: 200,
      headers 
    });
  } catch (error) {
    console.error('Error generating CSRF token:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500 }
    );
  }
} 