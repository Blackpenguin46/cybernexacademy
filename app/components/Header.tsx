"use client"

import Link from "next/link"
import { Shield } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-500" />
            <span className="text-2xl font-bold cyber-gradient-text">CyberNex</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

