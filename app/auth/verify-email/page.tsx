"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Users, MessageSquare, Github, Twitter, Linkedin, Globe, ExternalLink, User, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function VerifyEmailPage() {
  const [verificationStatus, setVerificationStatus] = useState<"loading" | "success" | "error">("loading")
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        // Get the token and type from URL
        const token = searchParams.get("token")
        const type = searchParams.get("type")

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
              <p className="text-gray-300">Verifying your email...</p>
            </div>
          )}

          {verificationStatus === "success" && (
            <div className="text-center space-y-4">
              <div className="text-green-500 text-xl">✓</div>
              <p className="text-gray-300">Email verified successfully!</p>
              <p className="text-gray-400 text-sm">
                Redirecting you to the dashboard...
              </p>
            </div>
          )}

          {verificationStatus === "error" && (
            <div className="text-center space-y-4">
              <div className="text-red-500 text-xl">✗</div>
              <p className="text-gray-300">Verification failed</p>
              <p className="text-red-400 text-sm">{error}</p>
              <Button
                onClick={() => router.push("/auth/login")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Back to Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

