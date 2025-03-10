"use client"

import Link from "next/link"
import { Shield, ChevronDown, Menu, X, User, LogOut } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Check if user is authenticated
    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getSession()
        setUser(data.session?.user || null)
        setLoading(false)
        
        // Setup auth state change listener
        const { data: authListener } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            setUser(session?.user || null)
          }
        )
        
        return () => {
          if (authListener && authListener.subscription) {
            authListener.subscription.unsubscribe()
          }
        }
      } catch (error) {
        console.error('Auth check error:', error)
        setLoading(false)
      }
    }

    checkUser()
  }, [])

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      setActiveDropdown(null)
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Shield className="w-8 h-8 mr-2 text-blue-500" />
          <span className="text-xl font-bold text-white">CyberNex Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li className="relative group">
              <button
                className={`flex items-center text-gray-300 hover:text-blue-500 py-2 ${
                  activeDropdown === "community" ? "text-blue-500" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("community")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Community{" "}
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "community" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className="absolute left-0 mt-2"
                onMouseEnter={() => setActiveDropdown("community")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {activeDropdown === "community" && (
                  <ul className="w-72 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-[200] border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300 py-2">
                    <li>
                      <Link
                        href="/community/feedback"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Submit Feedback
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community/reddit"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Reddit
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community/discord"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Discord
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community/substack"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Substack
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community/linkedin"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community/skool"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Skool
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community/forums"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Forums & Blogs
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="relative group">
              <button
                className={`flex items-center text-gray-300 hover:text-blue-500 py-2 ${
                  activeDropdown === "insights" ? "text-blue-500" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("insights")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Insights{" "}
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "insights" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className="absolute left-0 mt-2"
                onMouseEnter={() => setActiveDropdown("insights")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {activeDropdown === "insights" && (
                  <ul className="w-72 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-[200] border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300 py-2">
                    <li>
                      <Link
                        href="/insights/news"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        News & Updates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/insights/research"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Research Papers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/insights/cases"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/insights/threats"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Threat Reports
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/insights/industry"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Industry Trends
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/insights/practices"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Best Practices
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="relative group">
              <button
                className={`flex items-center text-gray-300 hover:text-blue-500 py-2 ${
                  activeDropdown === "academy" ? "text-blue-500" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("academy")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Academy{" "}
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "academy" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className="absolute left-0 mt-2"
                onMouseEnter={() => setActiveDropdown("academy")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {activeDropdown === "academy" && (
                  <ul className="w-72 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-[200] border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300 py-2">
                    <li>
                      <Link
                        href="/academy/foundational"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Foundational Learning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/academy/intermediate"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Intermediate Learning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/academy/advanced"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Advanced Learning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/academy/roadmaps"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Learning Roadmaps
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/academy/courses"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/academy/research"
                        className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                      >
                        Research Projects
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {loading ? (
            // Loading state
            <div className="h-9 w-20 bg-gray-800 rounded animate-pulse"></div>
          ) : user ? (
            // Authenticated user
            <>
              <Link href="/dashboard" className="text-gray-300 hover:text-blue-500">
                Dashboard
              </Link>
              <div className="relative">
                <button
                  className={`flex items-center text-gray-300 hover:text-blue-500 py-2 ${
                    activeDropdown === "user" ? "text-blue-500" : ""
                  }`}
                  onMouseEnter={() => setActiveDropdown("user")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <User className="w-5 h-5 mr-1" />
                  <span className="max-w-32 truncate">
                    {user.email?.split('@')[0] || 'User'}
                  </span>
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "user" ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="absolute right-0 mt-2"
                  onMouseEnter={() => setActiveDropdown("user")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {activeDropdown === "user" && (
                    <ul className="w-56 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-[200] border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300 py-2">
                      <li>
                        <Link
                          href="/profile"
                          className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="flex items-center w-full px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </>
          ) : (
            // Not authenticated
            <>
              <Link href="/auth/login">
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-950">
                  Log In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 py-4 animate-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              <li>
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-300"
                  onClick={() => setActiveDropdown(activeDropdown === "community-mobile" ? null : "community-mobile")}
                >
                  <span>Community</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === "community-mobile" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "community-mobile" && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-800">
                    <li>
                      <Link href="/community/feedback" className="block py-1 text-gray-400 hover:text-white">
                        Submit Feedback
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/reddit" className="block py-1 text-gray-400 hover:text-white">
                        Reddit
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/discord" className="block py-1 text-gray-400 hover:text-white">
                        Discord
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/substack" className="block py-1 text-gray-400 hover:text-white">
                        Substack
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/linkedin" className="block py-1 text-gray-400 hover:text-white">
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/skool" className="block py-1 text-gray-400 hover:text-white">
                        Skool
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/forums" className="block py-1 text-gray-400 hover:text-white">
                        Forums & Blogs
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-300"
                  onClick={() => setActiveDropdown(activeDropdown === "insights-mobile" ? null : "insights-mobile")}
                >
                  <span>Insights</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === "insights-mobile" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "insights-mobile" && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-800">
                    <li>
                      <Link href="/insights/news" className="block py-1 text-gray-400 hover:text-white">
                        News & Updates
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/research" className="block py-1 text-gray-400 hover:text-white">
                        Research Papers
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/cases" className="block py-1 text-gray-400 hover:text-white">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/threats" className="block py-1 text-gray-400 hover:text-white">
                        Threat Reports
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/industry" className="block py-1 text-gray-400 hover:text-white">
                        Industry Trends
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/practices" className="block py-1 text-gray-400 hover:text-white">
                        Best Practices
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-300"
                  onClick={() => setActiveDropdown(activeDropdown === "academy-mobile" ? null : "academy-mobile")}
                >
                  <span>Academy</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === "academy-mobile" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "academy-mobile" && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-800">
                    <li>
                      <Link href="/academy/foundational" className="block py-1 text-gray-400 hover:text-white">
                        Foundational Learning
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/intermediate" className="block py-1 text-gray-400 hover:text-white">
                        Intermediate Learning
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/advanced" className="block py-1 text-gray-400 hover:text-white">
                        Advanced Learning
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/roadmaps" className="block py-1 text-gray-400 hover:text-white">
                        Learning Roadmaps
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/courses" className="block py-1 text-gray-400 hover:text-white">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/research" className="block py-1 text-gray-400 hover:text-white">
                        Research Projects
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

