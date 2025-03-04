import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware function runs on every request
export function middleware(request: NextRequest) {
  // Simply pass through all requests to be handled by the Next.js router
  return NextResponse.next();
}

// See: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    /*
     * Skip all internal paths (_next, api)
     * Skip all static files (images, media)
     */
    '/((?!_next|api|.*\\.[\\w]+$).*)',
  ],
}