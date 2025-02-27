import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Check if the request is for a protected route
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard') || 
                          req.nextUrl.pathname.startsWith('/cybernex-plus') ||
                          req.nextUrl.pathname.startsWith('/profile')
  
  // Check if it's an API route
  const isApiRoute = req.nextUrl.pathname.startsWith('/api')
  
  // If it's a protected route and user is not authenticated, redirect to login
  if (isProtectedRoute && !session && !isApiRoute) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('redirect', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }
  
  return res
}

// Specify which routes this middleware should run on
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/cybernex-plus/:path*',
    '/profile/:path*',
    '/api/:path*',
  ],
}

