import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export function useUser({ redirectTo = '', redirectIfFound = false } = {}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!redirectTo || loading) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user)
    ) {
      router.push(redirectTo)
    }
  }, [user, redirectTo, redirectIfFound, loading, router])

  return { user, loading }
} 