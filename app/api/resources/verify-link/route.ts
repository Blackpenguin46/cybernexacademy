import { NextRequest, NextResponse } from 'next/server';

// Verify a single link
export async function GET(request: NextRequest) {
  // Check for API key for security
  const { searchParams } = new URL(request.url);
  const apiKey = searchParams.get('key');
  const url = searchParams.get('url');
  
  if (apiKey !== process.env.NEXT_PUBLIC_LINK_VERIFICATION_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }
  
  try {
    const isValid = await isValidUrl(url);
    return NextResponse.json({ isValid });
  } catch (error) {
    console.error('Link verification error:', error);
    return NextResponse.json({ error: 'Verification failed', isValid: false }, { status: 500 });
  }
}

// Helper to check if a URL is still valid
async function isValidUrl(url: string): Promise<boolean> {
  if (!url) return false;
  
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      headers: {
        'User-Agent': 'Cybernex-Link-Verifier/1.0'
      }
    });
    
    // Valid responses are 2xx or 3xx (redirects)
    return response.status >= 200 && response.status < 400;
  } catch (error) {
    console.error(`Failed to validate URL ${url}:`, error);
    return false;
  }
} 