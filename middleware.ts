import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware runs for all requests
export function middleware(request: NextRequest) {
  // Get response
  const response = NextResponse.next();

  // Add security headers
  const securityHeaders = new Headers(response.headers);
  
  // Content Security Policy - Updated to allow necessary resources
  securityHeaders.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "img-src 'self' data: https:; " +
    // Removed 'strict-dynamic', relying on 'unsafe-inline' for now
    "script-src 'self' 'unsafe-inline' https:; " + 
    // Added Google Fonts to style-src
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "connect-src 'self' https://*.vercel.app https://*.supabase.co wss://*.supabase.co; " +
    // Added Google Fonts to font-src 
    "font-src 'self' data: https://fonts.gstatic.com; " +
    "frame-ancestors 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'; " +
    "upgrade-insecure-requests;"
  );
  
  // XSS Protection
  securityHeaders.set('X-XSS-Protection', '1; mode=block');
  
  // Prevent MIME type sniffing
  securityHeaders.set('X-Content-Type-Options', 'nosniff');
  
  // Referrer Policy - Updated to be more strict
  securityHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions Policy - Updated with more restrictions
  securityHeaders.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()'
  );
  
  // Strict Transport Security with longer max age
  securityHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  
  // X-Frame-Options
  securityHeaders.set('X-Frame-Options', 'DENY');

  // Cross-Origin Resource Policy
  securityHeaders.set('Cross-Origin-Resource-Policy', 'same-origin');

  // Cross-Origin Opener Policy
  securityHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');

  // Cross-Origin Embedder Policy
  securityHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
  
  // Return response with security headers
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
    headers: securityHeaders,
  });
}

// Updated matcher configuration to protect against recent vulnerabilities
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
      source: '/((?!api|_next/static|_next/image|favicon.ico|public/).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};