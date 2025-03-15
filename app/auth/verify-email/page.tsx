"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Shield, Mail, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VerifyEmailPage() {
  const [verificationStatus, setVerificationStatus] = useState<"loading" | "waiting" | "success" | "error">("loading")
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        // User is already signed in - they might have verified in another tab
        router.push('/dashboard')
        return
      }
    }
    
    getSession()
  }, [router])

  useEffect(() => {
    const token = searchParams.get("token")
    const type = searchParams.get("type")
    const emailParam = searchParams.get("email")
    
    if (emailParam) {
      setEmail(emailParam)
    }
    
    // If there's no token in the URL, show the waiting for verification screen
    if (!token) {
      setVerificationStatus("waiting")
      return
    }

    const handleEmailConfirmation = async () => {
      try {
        if (!token || type !== "email") {
          setError("Invalid verification link")
          setVerificationStatus("error")
          return
        }

        // Verify the email
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: "email",
        })

        if (error) {
          setError(error.message)
          setVerificationStatus("error")
          return
        }

        setVerificationStatus("success")
        
        // Redirect to dashboard after 3 seconds
        setTimeout(() => {
          router.push("/dashboard")
        }, 3000)
      } catch (err) {
        console.error("Verification error:", err)
        setError("An unexpected error occurred")
        setVerificationStatus("error")
      }
    }

    handleEmailConfirmation()
  }, [router, searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <Shield className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold text-white text-center">
            Email Verification
          </h2>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
          {verificationStatus === "loading" && (
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-gray-300">Processing verification...</p>
            </div>
          )}

          {verificationStatus === "waiting" && (
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20 mb-4">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-white text-lg font-medium">Check your email</h3>
              <p className="text-gray-400">
                We've sent a verification link to {email ? <span className="font-medium">{email}</span> : "your email"}. 
                Please check your inbox and click the link to verify your account.
              </p>
              <div className="pt-4 pb-2">
                <p className="text-sm text-gray-500">Didn't receive an email?</p>
                <Button 
                  className="mt-2 bg-transparent hover:bg-gray-800 text-blue-500 border border-blue-500/30"
                  onClick={() => router.push('/auth/login')}
                >
                  Try logging in instead
                </Button>
              </div>
            </div>
          )}

          {verificationStatus === "success" && (
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-green-500/20 mb-4">
                <div className="text-green-500 text-xl">✓</div>
              </div>
              <h3 className="text-white text-lg font-medium">Verification successful!</h3>
              <p className="text-gray-400">
                Your email has been successfully verified.
              </p>
              <p className="text-gray-400 text-sm">
                Redirecting you to the dashboard...
              </p>
              <Link 
                href="/dashboard" 
                className="mt-2 inline-flex items-center text-blue-500 hover:text-blue-400"
              >
                Go to dashboard
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          )}

          {verificationStatus === "error" && (
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-red-500/20 mb-4">
                <div className="text-red-500 text-xl">✗</div>
              </div>
              <h3 className="text-white text-lg font-medium">Verification failed</h3>
              <p className="text-red-400 text-sm">{error}</p>
              <p className="text-gray-400 mt-4 mb-2">
                You can still try to log in if you've previously verified your account.
              </p>
              <Button
                onClick={() => router.push("/auth/login")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Go to Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

