"use client"

import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

export function Navigation() {
  const { user, signOut } = useAuth()

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          CyberNex
        </Link>
        
        <div className="flex space-x-4">
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/careers" className="text-white hover:text-gray-300">
            Careers
          </Link>
          {user ? (
            <>
              <Link href="/dashboard" className="text-white hover:text-gray-300">
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="text-white hover:text-gray-300"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
} 