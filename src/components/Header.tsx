import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Header: React.FC = () => {
  const { user, signOut } = useAuth()

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          CyberNex
        </Link>
        <div className="space-x-4">
          <Link to="/learn" className="hover:text-gray-300">
            Learn
          </Link>
          <Link to="/certifications-careers" className="hover:text-gray-300">
            Certifications & Careers
          </Link>
          <Link to="/tools-utilities" className="hover:text-gray-300">
            Tools & Utilities
          </Link>
          <Link to="/community" className="hover:text-gray-300">
            Community
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
              <button onClick={signOut} className="hover:text-gray-300">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link to="/signup" className="hover:text-gray-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header

