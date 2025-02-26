'use client'

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname() || '/'
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    if (!loading) {
      // If not logged in and not on a public page, redirect to login
      if (!user && !isPublicPage(pathname)) {
        router.push(`/login?redirect=${encodeURIComponent(pathname)}`)
      } else {
        setIsAuthorized(true)
      }
    }
  }, [user, loading, pathname, router])

  if (loading || !isAuthorized) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return <>{children}</>
}

function isPublicPage(pathname: string): boolean {
  const publicPaths = [
    '/',
    '/login',
    '/signup',
    '/about',
    '/contact',
    '/pricing',
    '/blog',
    '/terms',
    '/privacy',
  ]
  
  return publicPaths.includes(pathname) || pathname.startsWith('/blog/')
} 