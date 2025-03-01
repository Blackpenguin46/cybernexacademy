// Empty middleware file to prevent Next.js from trying to use edge functions
export { middleware } from 'next/server'

export const config = {
  matcher: [], // No routes matched means this middleware won't be used
} 