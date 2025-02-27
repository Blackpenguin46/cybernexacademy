import type React from "react"
import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

const Header: React.FC = () => {
  const { currentUser } = useAuth()

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            CyberNex
          </Link>
          
          <div className="flex space-x-4">
            <Link href="/about-fundamentals" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/careers/jobs" className="hover:text-gray-300">
              Careers
            </Link>
            {currentUser ? (
              <Link href="/cybernex-plus" className="hover:text-gray-300">
                CyberNex Plus
              </Link>
            ) : (
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

