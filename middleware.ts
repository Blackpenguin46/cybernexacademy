import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers
  const headers = response.headers;
  
  // HSTS
  headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  
  // Prevent clickjacking
  headers.set('X-Frame-Options', 'DENY');
  
  // Prevent MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff');
  
  // XSS protection
  headers.set('X-XSS-Protection', '1; mode=block');
  
  // Referrer policy
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Content Security Policy
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://analytics.vercel.app https://va.vercel-scripts.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' blob: data: https://*.vercel.app; " +
    "font-src 'self'; " +
    "connect-src 'self' https://*.supabase.co https://*.vercel.app; " +
    "frame-ancestors 'none';"
  );

  // Permissions policy
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt)
     */
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};