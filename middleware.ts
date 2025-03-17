import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware runs for all requests
export function middleware(request: NextRequest) {
  // Get response
  const response = NextResponse.next();

  // Add security headers
  const securityHeaders = new Headers(response.headers);
  
  // Content Security Policy
  securityHeaders.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://analytics.example.com; style-src 'self' 'unsafe-inline'; connect-src 'self' https://*.vercel.app https://supabase.co https://*.supabase.co; font-src 'self' data:; frame-ancestors 'none';"
  );
  
  // XSS Protection
  securityHeaders.set('X-XSS-Protection', '1; mode=block');
  
  // Prevent MIME type sniffing
  securityHeaders.set('X-Content-Type-Options', 'nosniff');
  
  // Referrer Policy
  securityHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions Policy
  securityHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  
  // Strict Transport Security
  securityHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  
  // X-Frame-Options (prevents clickjacking)
  securityHeaders.set('X-Frame-Options', 'DENY');
  
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
    headers: securityHeaders,
  });
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
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};