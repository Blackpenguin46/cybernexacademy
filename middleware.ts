import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware runs for all requests
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Force dynamic rendering by setting a Cache-Control header
  response.headers.set('Cache-Control', 'no-store, max-age=0');
  
  // Set additional headers to ensure dynamic content
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  return response;
}

// This matcher ensures the middleware runs for all HTML responses
export const config = {
  matcher: [
    // Apply to all pages except api routes and static files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};