import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { securityMiddleware } from './app/lib/security';

// This middleware runs for all requests
export async function middleware(request: NextRequest) {
  // Apply security middleware
  const response = await securityMiddleware(request);
  
  // Add CSRF protection for mutations
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
    const csrfToken = request.headers.get('X-CSRF-Token');
    const storedToken = request.cookies.get('csrf-token')?.value;
    
    if (!csrfToken || !storedToken || csrfToken !== storedToken) {
      return new NextResponse('Invalid CSRF token', { status: 403 });
    }
  }
  
  return response;
}

// Only run on specific paths to avoid interfering with API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};