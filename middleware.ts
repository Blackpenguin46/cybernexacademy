import { NextResponse, type NextRequest } from 'next/server';

// This middleware runs for all requests
export function middleware(request: NextRequest) {
  // Clone the response
  const response = NextResponse.next();

  // Add security headers
  const securityHeaders = new Headers(response.headers);
  
  // Content Security Policy - restricts what resources can be loaded
  securityHeaders.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://vxxpwaloyrtwvpmatzpc.supabase.co https://api.resend.com;"
  );
  
  // XSS Protection - stops pages from loading when they detect cross-site scripting attacks
  securityHeaders.set('X-XSS-Protection', '1; mode=block');
  
  // No Sniff - prevents the browser from trying to guess the MIME type
  securityHeaders.set('X-Content-Type-Options', 'nosniff');
  
  // Frame Options - controls whether your site can be framed
  securityHeaders.set('X-Frame-Options', 'DENY');
  
  // Strict Transport Security - forces HTTPS
  securityHeaders.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  
  // Referrer Policy - controls what information is sent in the Referer header
  securityHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions Policy - controls which browser features can be used
  securityHeaders.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
    headers: securityHeaders,
  });
}

// This matcher ensures the middleware runs for all HTML responses
export const config = {
  matcher: [
    // Apply to all paths except for API routes, static files, or other predefined paths
    '/((?!api/|_next/|favicon.ico).*)',
  ],
};