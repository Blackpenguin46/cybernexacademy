import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  if (country === 'CN') {
    return new Response('Access Denied - Region Blocked', { status: 403 });
  }

  // NOTE: Removed OS blocking for now (can break deployment/testing)
  // const userAgent = request.headers.get('user-agent') || '';
  // const blockedOSPatterns = [/Linux/i, /Ubuntu/i, /GNU/i];
  // if (blockedOSPatterns.some(pattern => pattern.test(userAgent))) {
  //   return new Response('Access Denied - OS Blocked', { status: 403 });
  // }

  const response = NextResponse.next();

  const securityHeaders = new Map<string, string>([
    ['Content-Security-Policy',
      "default-src 'self'; " +
      "img-src 'self' data: https:; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "connect-src 'self' https://*.vercel.app https://*.supabase.co wss://*.supabase.co; " +
      "font-src 'self' data: https://fonts.gstatic.com; " +
      "frame-ancestors 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'; " +
      "upgrade-insecure-requests;"
    ],
    ['X-XSS-Protection', '1; mode=block'],
    ['X-Content-Type-Options', 'nosniff'],
    ['Referrer-Policy', 'strict-origin-when-cross-origin'],
    ['Permissions-Policy',
      'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()'
    ],
    ['Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload'],
    ['X-Frame-Options', 'DENY'],
    ['Cross-Origin-Resource-Policy', 'same-origin'],
    ['Cross-Origin-Opener-Policy', 'same-origin'],
  ]);

  // Apply headers
  for (const [key, value] of securityHeaders.entries()) {
    response.headers.set(key, value);
  }

  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|public/).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};