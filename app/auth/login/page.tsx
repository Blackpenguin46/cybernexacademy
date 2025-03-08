"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ErrorBoundary from '@/app/components/ErrorBoundary'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callback') || '/dashboard'

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        router.push(callbackUrl)
      }
    }
    checkAuth()
  }, [callbackUrl, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccessMessage(null)
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) {
        setError(error.message || 'Failed to sign in')
        setLoading(false)
        return
      }

      if (data.session) {
        setSuccessMessage('Login successful! Redirecting...')
        
        // Redirect after successful login
        setTimeout(() => {
          router.push(callbackUrl)
        }, 1000)
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('An unexpected error occurred')
      setLoading(false)
    }
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center justify-center mb-4">
              <Shield className="w-10 h-10 text-blue-500" />
            </Link>
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="mt-2 text-gray-400">Sign in to your CyberNex Academy account</p>
          </div>

          {error && (
            <div className="bg-red-900/50 border border-red-800 text-red-300 px-4 py-3 rounded-lg relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {successMessage && (
            <div className="bg-green-900/50 border border-green-800 text-green-300 px-4 py-3 rounded-lg relative" role="alert">
              <span className="block sm:inline">{successMessage}</span>
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="text-sm">
                    <Link href="/auth/forgot-password" className="text-blue-400 hover:text-blue-300">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don&apos;t have an account?{' '}
              <Link href="/auth/register" className="text-blue-400 hover:text-blue-300">
                Create an account
              </Link>
            </p>
          </div>
          
          <div className="pt-4 text-center">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-400">
              ← Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

