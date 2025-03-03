import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // If the page doesn't exist and it's not an API route, redirect to the homepage
  if (url.pathname !== '/' && 
      !url.pathname.startsWith('/api/') && 
      !url.pathname.startsWith('/_next/') && 
      !url.pathname.includes('.')) {
    
    // Check if it's one of the predefined routes in your app
    const knownRoutes = [
      '/learning-resources',
      '/community',
      '/careers',
      '/college-students',
      '/tools-utilities',
      '/cybernex-plus',
      '/auth/login',
      '/auth/register',
      '/auth/forgot-password',
      '/auth/reset-password',
      '/auth/verify-email'
    ];
    
    // For known routes, redirect to home for now 
    // (you can implement actual pages for these later)
    if (knownRoutes.includes(url.pathname)) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
    
    // For unknown routes, serve the not-found page
    url.pathname = '/not-found';
    return NextResponse.rewrite(url);
  }
  
  return NextResponse.next();
}

// See: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next/static (static files)
     * 3. /_next/image (image optimization files)
     * 4. /favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 