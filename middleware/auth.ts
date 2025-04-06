import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function authMiddleware(request: NextRequest) {
  try {
    // Initialize Supabase client
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookies().get(name)?.value;
          },
          set(name: string, value: string, options: any) {
            cookies().set({ name, value, ...options });
          },
          remove(name: string, options: any) {
            cookies().set({ name, value: '', ...options });
          },
        },
      }
    );

    // Verify session
    const { data: { session }, error } = await supabase.auth.getSession();

    // Get the current path
    const path = request.nextUrl.pathname;

    // List of paths that require authentication
    const protectedPaths = [
      '/dashboard',
      '/profile',
      '/settings',
      '/academy',
      '/community/create',
      '/insights/create'
    ];

    // Check if the current path requires authentication
    const requiresAuth = protectedPaths.some(protectedPath => 
      path.startsWith(protectedPath)
    );

    if (requiresAuth && !session) {
      // Redirect to login page with callback URL
      const redirectUrl = new URL('/auth/login', request.url);
      redirectUrl.searchParams.set('callbackUrl', path);
      return NextResponse.redirect(redirectUrl);
    }

    // Special handling for auth pages when user is already logged in
    const authPaths = ['/auth/login', '/auth/signup', '/auth/register'];
    if (session && authPaths.some(authPath => path.startsWith(authPath))) {
      // Redirect to dashboard if trying to access auth pages while logged in
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // Continue with the request if everything is fine
    return NextResponse.next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    
    // In case of error, redirect to error page
    return NextResponse.redirect(new URL('/error', request.url));
  }
}

// Configure which routes use this middleware
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
    '/((?!api|_next/static|_next/image|favicon.ico|public/).*)',
  ],
};

// Middleware for handling authentication
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res }, {
    supabaseUrl: process.env.SUPABASE_URL!,
    supabaseKey: process.env.SUPABASE_SERVICE_KEY!,
  });

  // ... rest of the middleware code ...
} 