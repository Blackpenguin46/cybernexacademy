import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req: request, res })
    const { data: { session } } = await supabase.auth.getSession()

    // Redirect logged-in users from auth pages
    if (session && (
      request.nextUrl.pathname === '/login' ||
      request.nextUrl.pathname === '/signup'
    )) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // Check subscription for premium content
    if (session && 
        (request.nextUrl.pathname.startsWith('/cybernex-plus') || 
         request.nextUrl.pathname.startsWith('/cybernex-pro'))) {
      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('plan_type, status')
        .eq('user_id', session.user.id)
        .eq('status', 'active')
        .single()

      if (!subscription) {
        return NextResponse.redirect(new URL('/pricing', request.url))
      }

      if (request.nextUrl.pathname.startsWith('/cybernex-pro') && 
          subscription.plan_type !== 'pro') {
        return NextResponse.redirect(new URL('/pricing', request.url))
      }
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    '/login',
    '/signup',
    '/cybernex-plus/:path*',
    '/cybernex-pro/:path*',
  ]
}

