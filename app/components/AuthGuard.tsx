'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/contexts/AuthContext'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, subscription } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }

    // Check subscription for protected routes
    if (window.location.pathname.includes('cybernex-plus') && !subscription) {
      router.push('/pricing')
      return
    }

    if (window.location.pathname.includes('cybernex-pro') && subscription !== 'pro') {
      router.push('/pricing')
      return
    }
  }, [user, subscription, router])

  return <>{children}</>
} 