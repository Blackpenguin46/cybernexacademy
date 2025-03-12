"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Shield, Mail, RefreshCw, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VerifyEmailPage() {
  const [verificationStatus, setVerificationStatus] = useState<"loading" | "success" | "error" | "waiting">("loading")
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string>("")
  const [newEmail, setNewEmail] = useState<string>("")
  const [isChangingEmail, setIsChangingEmail] = useState(false)
  const [resendCooldown, setResendCooldown] = useState(0)
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        // Get the token and type from URL
        const token = searchParams.get("token")
        const type = searchParams.get("type")

        // If we have token and type, try to verify
        if (token && type === "email") {
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
        } else {
          // No token, assume user just signed up and is waiting for verification
          const { data } = await supabase.auth.getSession()
          if (data.session) {
            // User is logged in but not verified
            const userEmail = data.session.user.email
            if (userEmail) {
              setEmail(userEmail)
            }
            setVerificationStatus("waiting")
          } else {
            // User is not logged in, redirect to login
            router.push("/auth/login")
          }
        }
      } catch (err) {
        console.error("Verification error:", err)
        setError("An unexpected error occurred")
        setVerificationStatus("error")
      }
    }

    handleEmailConfirmation()
  }, [router, searchParams])

  // Handle resend verification email
  const handleResendVerification = async () => {
    if (resendCooldown > 0) return
    
    try {
      setMessage(null)
      setError(null)
      
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/verify-email`
        }
      })
      
      if (error) {
        setError(error.message)
        return
      }
      
      setMessage("Verification email has been resent. Please check your inbox.")
      
      // Set cooldown timer (60 seconds)
      setResendCooldown(60)
      const timer = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } catch (err) {
      console.error("Error resending verification:", err)
      setError("Failed to resend verification email")
    }
  }
  
  // Handle change email
  const handleChangeEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newEmail) return
    
    try {
      setMessage(null)
      setError(null)
      
      const { error } = await supabase.auth.updateUser({ 
        email: newEmail
      })
      
      if (error) {
        setError(error.message)
        return
      }
      
      setEmail(newEmail)
      setNewEmail("")
      setIsChangingEmail(false)
      setMessage("Email updated. Please check your new email for a verification link.")
      
      // Reset cooldown timer after email change
      setResendCooldown(0)
    } catch (err) {
      console.error("Error changing email:", err)
      setError("Failed to update email address")
    }
  }

  // Countdown display
  const formatCooldown = () => {
    return `${resendCooldown}s`
  }

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

          {verificationStatus === "waiting" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Mail className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-white">Verify Your Email</h3>
                <p className="text-gray-400 mt-2">
                  We&apos;ve sent a verification link to <span className="text-blue-400 font-medium">{email}</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Please check your inbox and click the link to complete your registration.
                </p>
              </div>
              
              {message && (
                <div className="p-3 bg-green-900/50 border border-green-800 rounded text-green-400 text-sm">
                  {message}
                </div>
              )}
              
              {error && (
                <div className="p-3 bg-red-900/50 border border-red-800 rounded text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-4">
                {!isChangingEmail ? (
                  <>
                    <Button
                      onClick={handleResendVerification}
                      disabled={resendCooldown > 0}
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      {resendCooldown > 0 ? `Resend in ${formatCooldown()}` : "Resend Verification Email"}
                    </Button>
                    
                    <Button
                      onClick={() => setIsChangingEmail(true)}
                      className="w-full bg-transparent border border-gray-700 hover:bg-gray-800 text-gray-300 flex items-center justify-center gap-2"
                    >
                      <Edit className="w-4 h-4" />
                      Change Email Address
                    </Button>
                  </>
                ) : (
                  <form onSubmit={handleChangeEmail} className="space-y-4">
                    <div>
                      <label htmlFor="newEmail" className="block text-sm font-medium text-gray-300">
                        New Email Address
                      </label>
                      <input
                        id="newEmail"
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your new email"
                        required
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Update Email
                      </Button>
                      
                      <Button
                        type="button"
                        onClick={() => setIsChangingEmail(false)}
                        className="flex-1 bg-gray-800 hover:bg-gray-700 text-white"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-800 text-center">
                <Button
                  onClick={() => router.push("/auth/login")}
                  variant="link"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Back to Login
                </Button>
              </div>
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

