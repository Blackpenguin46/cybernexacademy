import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>CyberNex</title>
        <meta name="description" content="Your central hub for all things cybersecurity" />
      </Head>

      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-colors duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white text-xl font-bold">CyberNex</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white px-3 py-2">
                  Home
                </Link>
                <Link href="/learn" className="text-gray-300 hover:text-white px-3 py-2">
                  Learn
                </Link>
                <Link href="/community" className="text-gray-300 hover:text-white px-3 py-2">
                  Community
                </Link>
                <Link href="/tools" className="text-gray-300 hover:text-white px-3 py-2">
                  Tools
                </Link>
                <Link href="/career" className="text-gray-300 hover:text-white px-3 py-2">
                  Career
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div 
            className="md:hidden bg-gray-900 overflow-hidden transition-all duration-300"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2">
                Home
              </Link>
              <Link href="/learn" className="text-gray-300 hover:text-white block px-3 py-2">
                Learn
              </Link>
              <Link href="/community" className="text-gray-300 hover:text-white block px-3 py-2">
                Community
              </Link>
              <Link href="/tools" className="text-gray-300 hover:text-white block px-3 py-2">
                Tools
              </Link>
              <Link href="/career" className="text-gray-300 hover:text-white block px-3 py-2">
                Career
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-400">Your central hub for all things cybersecurity, from beginner to professional.</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/learn" className="text-gray-400 hover:text-white">
                    Learning Resources
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="text-gray-400 hover:text-white">
                    Tools & Utilities
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-400 hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-400 hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/certifications" className="text-gray-400 hover:text-white">
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/cybernex" className="text-gray-400 hover:text-white">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/cybernex" className="text-gray-400 hover:text-white">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-center">
              © {new Date().getFullYear()} CyberNex. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 