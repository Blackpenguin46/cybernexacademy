import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children, title = 'CyberNex Academy' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title} - CyberNex Academy</title>
        <meta name="description" content="Your gateway to cybersecurity education and training" />
      </Head>

      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-900">CyberNex Academy</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="/free-resources" className="text-gray-700 hover:text-blue-900">
                Free Resources
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-900">
                  Learning Resources
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md">
                  <Link href="/fundamentals" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Cybersecurity Fundamentals
                  </Link>
                  <Link href="/labs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Technical Labs
                  </Link>
                  <Link href="/certifications" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Certification Guides
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-900">
                  Student Resources
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md">
                  <Link href="/scholarships" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Scholarships
                  </Link>
                  <Link href="/internships" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Internships
                  </Link>
                  <Link href="/ctf" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    CTF Competitions
                  </Link>
                </div>
              </div>
              <Link href="/premium" className="text-gray-700 hover:text-blue-900">
                Premium Platform
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900">
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu icon */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/free-resources" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              Free Resources
            </Link>
            <Link href="/fundamentals" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              Learning Resources
            </Link>
            <Link href="/scholarships" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              Student Resources
            </Link>
            <Link href="/premium" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              Premium Platform
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">Your gateway to cybersecurity education and training</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/free-resources" className="text-gray-300 hover:text-white">Free Resources</Link></li>
                <li><Link href="/premium" className="text-gray-300 hover:text-white">Premium Platform</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><Link href="/forums" className="text-gray-300 hover:text-white">Forums</Link></li>
                <li><Link href="/events" className="text-gray-300 hover:text-white">Events</Link></li>
                <li><Link href="/mentorship" className="text-gray-300 hover:text-white">Mentorship</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                <li><Link href="/support" className="text-gray-300 hover:text-white">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} CyberNex Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 