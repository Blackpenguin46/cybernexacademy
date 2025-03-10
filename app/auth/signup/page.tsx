"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Shield, User, Mail, Lock, AtSign } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SignupPage() {
  const router = useRouter()
  
  // Form fields
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  
  // UI state
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // Validate signup form
      if (password !== confirmPassword) {
        setError("Passwords do not match")
        setLoading(false)
        return
      }
      
      if (password.length < 8) {
        setError("Password must be at least 8 characters long")
        setLoading(false)
        return
      }
      
      if (!fullName.trim()) {
        setError("Full name is required")
        setLoading(false)
        return
      }
      
      if (!username.trim()) {
        setError("Username is required")
        setLoading(false)
        return
      }
      
      // Check if username is already taken
      const { data: existingUser, error: usernameError } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', username)
        .single()
        
      if (existingUser) {
        setError("Username is already taken")
        setLoading(false)
        return
      }
      
      // Sign up new user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/auth/verify-email`,
          data: {
            full_name: fullName,
            username: username
          }
        }
      })
      
      if (error) {
        setError(error.message || 'Failed to sign up')
        setLoading(false)
        return
      }
      
      // Create profile with additional data
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            { 
              user_id: data.user.id,
              email: email,
              full_name: fullName,
              username: username,
              onboarding_completed: false,
              interests: [],
              created_at: new Date().toISOString()
            }
          ])
          
        if (profileError) {
          console.error('Error creating profile:', profileError)
          // Continue anyway as the user is created
        }
      }
      
      setSuccessMessage('Registration successful! Please check your email to verify your account.')
      
      // After successful sign-up, redirect to verify email page
      setTimeout(() => {
        router.push("/auth/verify-email")
      }, 2000)
    } catch (error) {
      console.error("Authentication error:", error)
      setError("An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 pt-32 pb-16">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <Shield className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold text-white text-center">
            Create Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Join the CyberNex community
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
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-200 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-200 flex items-center">
                <AtSign className="w-4 h-4 mr-2" />
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                placeholder="johndoe"
              />
              <p className="mt-1 text-xs text-gray-500">
                This will be your unique identifier on the platform
              </p>
            </div>
            
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
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Min. 8 characters"
              />
              <p className="mt-1 text-xs text-gray-500">
                Must be at least 8 characters long
              </p>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200 flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Re-enter your password"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Create Account'}
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
                Already have an account?{' '}
                <Link 
                  href="/auth/login"
                  className="text-blue-500 hover:text-blue-400"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 