'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useState, useEffect } from 'react'
import { User, Crown, ChevronDown, Menu, X, Moon, Sun } from 'lucide-react'
import AuthModal from '@/components/AuthModal'
import { usePathname } from "next/navigation"
import { useTheme } from "@/contexts/ThemeContext"

export default function Navigation() {
  const { user, loading, signOut } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    console.log('Auth State:', { 
      isLoading: loading, 
      isLoggedIn: !!user,
      userData: user 
    })
  }, [user, loading])

  useEffect(() => {
    // Check if user prefers dark mode
    if (typeof window !== "undefined") {
      const isDark = localStorage.getItem("darkMode") === "true" || 
        window.matchMedia("(prefers-color-scheme: dark)").matches
      
      setIsDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navigationItems = {
    'Learn': {
      href: '/learning-resources',
      items: [
        { name: 'Learning Roadmaps', href: '/learning-resources/roadmaps' },
        { name: 'Online Courses', href: '/learning-resources/courses' },
        { name: 'Books', href: '/learning-resources/books' },
        { name: 'Content Creators', href: '/learning-resources/content-creators' },
        { name: 'Learning Communities', href: '/learning-resources/communities' },
        { name: 'Learning Tools', href: '/learning-resources/tools' },
        { name: 'Research Publications', href: '/learning-resources/research-publications' },
      ]
    },
    'College Students': {
      href: '/college',
      items: [
        { name: 'Student Resources', href: '/college/resources' },
        { name: 'Student Internships', href: '/college/internships' },
        { name: 'Learning Paths', href: '/college/learning-paths' },
        { name: 'Student Discounts', href: '/college/discounts' },
        { name: 'Academic Programs', href: '/college/programs' },
      ]
    },
    'Community': {
      href: '/community',
      items: [
        { name: 'Discussion Forums', href: '/community/forums' },
        { name: 'Study Groups', href: '/community/study-groups' },
        { name: 'Events', href: '/community/events' },
      ]
    },
    'Career': {
      href: '/careers',
      items: [
        { name: 'Internships', href: '/careers/internships' },
        { name: 'Resume Guide', href: '/careers/resume-guide' },
        { name: 'Job Board', href: '/careers/jobs' },
        { name: 'Career Resources', href: '/careers/resources' },
      ]
    }
  }

  const handleMouseLeave = (title: string) => {
    const timeoutId = setTimeout(() => {
      const dropdown = document.querySelector(`.dropdown-${title}`)
      const dropdownButton = document.querySelector(`.dropdown-button-${title}`)
      
      const isDropdownHovered = dropdown?.matches(':hover')
      const isButtonHovered = dropdownButton?.matches(':hover')
      
      if (!isDropdownHovered && !isButtonHovered) {
        setActiveDropdown(null)
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }

  const handleClick = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  const toggleDropdown = (key: string) => {
    if (activeDropdown === key) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(key)
    }
  }

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", (!isDarkMode).toString())
      document.documentElement.classList.toggle("dark")
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const openAuthModal = (mode: "signin" | "signup") => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <>
      <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center items-center relative">
            <Link href="/" className="absolute left-0 text-xl font-bold text-blue-600">
              CyberNex
            </Link>

            <div className="flex items-center space-x-8">
              {Object.entries(navigationItems).map(([title, { href, items }]) => (
                <div 
                  key={title}
                  className={`relative group dropdown-${title}`}
                  onMouseEnter={() => setActiveDropdown(title)}
                  onMouseLeave={() => handleMouseLeave(title)}
                >
                  <button
                    className={`dropdown-button-${title} flex items-center space-x-1 text-gray-700 hover:text-blue-600 
                      dark:text-gray-300 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 
                      focus:ring-opacity-50 rounded-md px-2`}
                    onClick={() => handleClick(title)}
                    aria-expanded={activeDropdown === title}
                    aria-haspopup="true"
                  >
                    <Link 
                      href={href}
                      className="text-gray-700 hover:text-blue-600 dark:text-gray-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {title}
                    </Link>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === title ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  <div 
                    className={`absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 
                      transition-all duration-300 ease-in-out transform
                      ${activeDropdown === title 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-2 invisible'}`}
                    onMouseEnter={() => setActiveDropdown(title)}
                    onMouseLeave={() => handleMouseLeave(title)}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`dropdown-${title}`}
                  >
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 
                          dark:hover:bg-gray-700 transition-colors duration-150"
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute right-0 flex items-center space-x-4">
              <Link 
                href="/pricing" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300"
              >
                <Crown className="w-5 h-5" />
                <span>Premium</span>
              </Link>
              
              {loading ? (
                <div className="animate-spin">
                  <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"/>
                </div>
              ) : user ? (
                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('profile')}
                  onMouseLeave={() => handleMouseLeave('profile')}
                >
                  <button 
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300"
                  >
                    <div className="bg-gray-700 p-1 rounded-full">
                      <User className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-sm font-medium">
                      {user.email?.split('@')[0]}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === 'profile' ? 'rotate-180' : ''
                    }`} />
                  </button>

                  <div 
                    className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50
                      transition-all duration-200 transform origin-top dropdown-profile
                      ${activeDropdown === 'profile' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
                    `}
                    onMouseEnter={() => setActiveDropdown('profile')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.email}</p>
                    </div>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => openAuthModal('signin')}
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => openAuthModal('signup')}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        mode={authMode}
      />
    </>
  )
} 