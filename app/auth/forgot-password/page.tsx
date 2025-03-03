"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Shield, Mail } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email)

      if (error) {
        throw error
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-xl">
          <div className="flex justify-center mb-8">
            <Shield className="h-12 w-12 text-blue-500" />
          </div>

          <div className="text-center">
            <Mail className="mx-auto h-12 w-12 text-blue-500" />
            <h2 className="mt-6 text-3xl font-bold text-white">Check your email</h2>
            <p className="mt-2 text-sm text-gray-400">
              We sent you an email with password reset instructions. Please check your inbox.
            </p>
          </div>

          <div className="mt-6">
            <Link href="/auth/login" className="block text-center text-sm text-blue-500 hover:text-blue-400">
              Return to sign in
            </Link>
          </div>
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

        <h2 className="text-3xl font-bold text-center text-white mb-8">Reset your password</h2>

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

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send reset instructions"}
          </button>
        </form>

        <div className="mt-6">
          <Link href="/auth/login" className="block text-center text-sm text-blue-500 hover:text-blue-400">
            Return to sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

