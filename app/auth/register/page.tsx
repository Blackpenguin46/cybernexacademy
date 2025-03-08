"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Shield, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ErrorBoundary from '@/app/components/ErrorBoundary'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
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
    
    // Password validation
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }
    
    // Check for password strength (optional)
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumbers = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    
    if (!(hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar)) {
      setError('Password must include uppercase, lowercase, numbers, and special characters')
      return
    }
    
    setLoading(true)

    try {
      // Register the user with Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { 
            full_name: name,
          },
        }
      })
      
      if (error) {
        setError(error.message || 'Failed to create account')
        setLoading(false)
        return
      }

      // Handle email confirmation requirement
      if (data.user && !data.user.confirmed_at) {
        setSuccessMessage('Registration successful! Please check your email to confirm your account.')
        
        // Clear the form
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setName('')
        
        // Redirect to login after a delay
        setTimeout(() => {
          router.push('/auth/login')
        }, 5000)
      } else if (data.user) {
        // User is already confirmed or auto-confirmed (depends on Supabase settings)
        setSuccessMessage('Account created successfully! Redirecting to login...')
        
        setTimeout(() => {
          router.push('/auth/login')
        }, 3000)
      }
      
      setLoading(false)
    } catch (err) {
      console.error('Registration error:', err)
      setError('An unexpected error occurred')
      setLoading(false)
    }
  }

  const getPasswordStrength = () => {
    if (!password) return 0
    
    let strength = 0
    if (password.length >= 8) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[a-z]/.test(password)) strength += 25
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 25
    
    return strength
  }

  const passwordStrength = getPasswordStrength()
  
  const getStrengthColor = () => {
    if (passwordStrength < 50) return 'bg-red-500'
    if (passwordStrength < 75) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center justify-center mb-4">
              <Shield className="w-10 h-10 text-blue-500" />
            </Link>
            <h1 className="text-3xl font-bold text-white">Create Account</h1>
            <p className="mt-2 text-gray-400">Join CyberNex Academy today</p>
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your full name"
                />
              </div>
              
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
                
                {/* Password strength indicator */}
                {password && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getStrengthColor()}`} 
                        style={{ width: `${passwordStrength}%` }}
                      ></div>
                    </div>
                    <div className="flex mt-1 text-xs">
                      <span className="text-gray-400">Password strength: </span>
                      <span className={`ml-1 ${
                        passwordStrength < 50 ? 'text-red-400' : 
                        passwordStrength < 75 ? 'text-yellow-400' : 
                        'text-green-400'
                      }`}>
                        {passwordStrength < 50 ? 'Weak' : 
                         passwordStrength < 75 ? 'Medium' : 
                         'Strong'}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="mt-2 grid grid-cols-1 gap-1">
                  <div className="flex items-center text-xs">
                    <div className={`w-4 h-4 flex items-center justify-center rounded-full mr-2 ${password.length >= 8 ? 'bg-green-500 text-white' : 'bg-gray-600'}`}>
                      {password.length >= 8 && <Check className="w-3 h-3" />}
                    </div>
                    <span className={password.length >= 8 ? 'text-green-400' : 'text-gray-400'}>At least 8 characters</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className={`w-4 h-4 flex items-center justify-center rounded-full mr-2 ${/[A-Z]/.test(password) ? 'bg-green-500 text-white' : 'bg-gray-600'}`}>
                      {/[A-Z]/.test(password) && <Check className="w-3 h-3" />}
                    </div>
                    <span className={/[A-Z]/.test(password) ? 'text-green-400' : 'text-gray-400'}>At least one uppercase letter</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className={`w-4 h-4 flex items-center justify-center rounded-full mr-2 ${/[a-z]/.test(password) ? 'bg-green-500 text-white' : 'bg-gray-600'}`}>
                      {/[a-z]/.test(password) && <Check className="w-3 h-3" />}
                    </div>
                    <span className={/[a-z]/.test(password) ? 'text-green-400' : 'text-gray-400'}>At least one lowercase letter</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className={`w-4 h-4 flex items-center justify-center rounded-full mr-2 ${/[0-9!@#$%^&*(),.?":{}|<>]/.test(password) ? 'bg-green-500 text-white' : 'bg-gray-600'}`}>
                      {/[0-9!@#$%^&*(),.?":{}|<>]/.test(password) && <Check className="w-3 h-3" />}
                    </div>
                    <span className={/[0-9!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-400' : 'text-gray-400'}>At least one number or special character</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`mt-1 block w-full px-3 py-2 bg-gray-700 border rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    confirmPassword && password !== confirmPassword 
                      ? 'border-red-500' 
                      : confirmPassword 
                        ? 'border-green-500' 
                        : 'border-gray-600'
                  }`}
                  placeholder="••••••••"
                />
                
                {confirmPassword && password !== confirmPassword && (
                  <p className="mt-1 text-xs text-red-400">Passwords do not match</p>
                )}
              </div>
            </div>

            <div className="text-sm text-gray-400">
              By creating an account, you agree to our{' '}
              <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                Privacy Policy
              </Link>
            </div>

            <div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
              >
                {loading ? 'Creating account...' : 'Create account'}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-blue-400 hover:text-blue-300">
                Sign in
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

