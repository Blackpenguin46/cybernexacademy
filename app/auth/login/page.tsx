"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase, checkSupabaseConnection } from "@/lib/supabase"
import Link from "next/link"
import { Shield } from "lucide-react"
import ErrorBoundary from "@/app/components/ErrorBoundary"

export default function LoginPageWrapper() {
  return (
    <ErrorBoundary>
      <LoginPage />
    </ErrorBoundary>
  )
}

function LoginPage() {
  console.log("LoginPage component rendering")

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isSupabaseConnected, setIsSupabaseConnected] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    console.log("LoginPage useEffect running")
    const checkConnection = async () => {
      try {
        const result = await checkSupabaseConnection()
        console.log("Supabase connection check result:", result)
        setIsSupabaseConnected(result.success)
      } catch (error) {
        console.error("Error checking Supabase connection:", error)
        setIsSupabaseConnected(false)
      }
    }
    checkConnection()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (isSupabaseConnected === false) {
      setError("Unable to connect to the server. Please try again later.")
      setLoading(false)
      return
    }

    try {
      console.log("Attempting to sign in")
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        throw error
      }

      if (data?.user) {
        console.log("Sign in successful, redirecting to dashboard")
        router.push("/dashboard")
      }
    } catch (err) {
      console.error("Login error:", err)
      if (err && typeof err === "object" && "name" in err) {
        switch (err.name) {
          case "AuthApiError":
            setError("Invalid email or password. Please try again.")
            break
          case "AuthRetryableFetchError":
            setError("Network error. Please check your internet connection and try again.")
            break
          default:
            setError("An unexpected error occurred. Please try again later.")
        }
      } else {
        setError("An unexpected error occurred. Please try again later.")
      }
    } finally {
      setLoading(false)
    }
  }

  if (isSupabaseConnected === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Checking connection...</h2>
        </div>
      </div>
    )
  }

  if (isSupabaseConnected === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Unable to connect to the server</h2>
          <p>Please check your internet connection and try again later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-xl">
        <div className="flex justify-center mb-8">
          <Shield className="h-12 w-12 text-blue-500" />
        </div>

        <h2 className="text-3xl font-bold text-center text-white mb-8">Sign in to CyberNex</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/auth/register"
              className="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create an account
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          <Link href="/auth/forgot-password" className="text-blue-500 hover:text-blue-400">
            Forgot your password?
          </Link>
        </p>
      </div>
    </div>
  )
}

