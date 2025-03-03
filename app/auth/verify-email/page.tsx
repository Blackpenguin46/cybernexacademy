"use client"

import { Shield, Mail } from "lucide-react"
import Link from "next/link"

export default function VerifyEmailPage() {
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
            We sent you an email with a link to verify your account. Please check your inbox and follow the
            instructions.
          </p>
        </div>

        <div className="mt-8">
          <p className="text-center text-sm text-gray-400">
            Didn&apos;t receive an email?{" "}
            <button className="text-blue-500 hover:text-blue-400" onClick={() => window.location.reload()}>
              Click to resend
            </button>
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

