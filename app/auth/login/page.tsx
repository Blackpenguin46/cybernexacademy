"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase, signIn } from '@/lib/supabase'
import { Shield, Mail, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ErrorBoundary from '@/app/components/ErrorBoundary'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        router.push(callbackUrl)
      }
    }
    
    checkAuth()
  }, [router, callbackUrl])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // Sign in existing user
      const result = await signIn(email, password)
      
      if (!result.success) {
        setError(result.error || "Failed to sign in")
        setLoading(false)
        return
      }
      
      // Check if user has completed onboarding
      if (result.user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("onboarding_completed")
          .eq("user_id", result.user.id)
          .single()
        
        if (profile && !profile.onboarding_completed) {
          // Redirect to onboarding if not completed
          router.push("/onboarding")
          return
        }
      }
      
      // Otherwise redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      console.error("Authentication error:", error)
      setError("An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-3xl font-bold text-white text-center">
              Sign In
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Access your CyberNex account
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            {successMessage && (
              <div className="mb-4 p-3 bg-green-900/50 border border-green-800 rounded text-green-400 text-sm">
                {successMessage}
              </div>
            )}
            
            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-800 rounded text-red-400 text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-200 flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your password"
                />
              </div>

              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <Link href="/auth/forgot-password" className="text-blue-500 hover:text-blue-400">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6"
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900/50 text-gray-400">Or</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Don't have an account?{' '}
                  <Link 
                    href="/auth/signup"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

