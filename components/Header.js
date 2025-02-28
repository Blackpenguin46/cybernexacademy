import Link from 'next/link'
import { useAuth } from '../lib/auth'

export default function Header() {
  const { user, signOut } = useAuth()

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">CyberNex Academy</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/learn" className="hover:text-blue-600">Learn</Link>
            <Link href="/college" className="hover:text-blue-600">College</Link>
            <Link href="/career" className="hover:text-blue-600">Career</Link>
            <Link href="/communities" className="hover:text-blue-600">Communities</Link>
            {user ? (
              <>
                <Link href="/premium" className="text-primary-600">Premium</Link>
                <button onClick={signOut} className="hover:text-blue-600">Sign Out</button>
              </>
            ) : (
              <Link href="/login" className="text-primary-600">Sign In</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
} 