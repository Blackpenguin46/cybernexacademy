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

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          <ul className="flex space-x-8">
            <li className="relative">
              <button
                className={`flex items-center text-gray-300 hover:text-blue-500 py-2 ${
                  activeDropdown === "community" ? "text-blue-500" : ""
                }`}
                onClick={() => toggleDropdown("community")}
              >
                Community{" "}
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "community" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "community" && (
                <ul className="absolute left-0 mt-2 w-72 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-[100] border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300">
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
                      href="/community/instagram"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/community/twitter"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Twitter/X
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/community/youtube"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      YouTube
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/community/telegram"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Telegram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/community/mastodon"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Mastodon
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/community/facebook"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Facebook Groups
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
            </li>
            <li className="relative">
              <button
                className={`flex items-center text-gray-300 hover:text-blue-500 py-2 ${
                  activeDropdown === "insights" ? "text-blue-500" : ""
                }`}
                onClick={() => toggleDropdown("insights")}
              >
                Insights{" "}
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "insights" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "insights" && (
                <ul className="absolute left-0 mt-2 w-72 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-[100] border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300">
                  <li>
                    <Link
                      href="/insights/job-market"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Job Market
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/research-innovations"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Research & Innovations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/emerging-trends"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Emerging Trends
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/breaches-threats"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Breaches & Threats
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/policy-regulations"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Cyber Policy & Regulations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/threat-intelligence"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Threat Intelligence & APT Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/tools-techniques"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Cybersecurity Tools & Techniques
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/industry-specific"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Industry-Specific Cybersecurity
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button
                className={`flex items-center text-gray-300 hover:text-blue-500 py-2 ${
                  activeDropdown === "academy" ? "text-blue-500" : ""
                }`}
                onClick={() => toggleDropdown("academy")}
              >
                Academy{" "}
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "academy" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "academy" && (
                <ul className="absolute left-0 mt-2 w-72 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-[100] border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300">
                  <li>
                    <Link
                      href="/academy/roadmaps"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Learning Roadmaps & Career Paths
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy/youtube"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      YouTube Creators & Video Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy/foundational"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Foundational Learning (Beginner)
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
                      href="/academy/college"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      College Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy/ctf"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      CTFs & Hands-on Labs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy/scripting"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Scripting & Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy/certifications"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Certifications & Study Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy/tools"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Cybersecurity Tools & Platforms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy/platforms"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Learning Platforms & Free Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy/career"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Career Development & Job Prep
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy/projects"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Cybersecurity Projects & Labs
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-blue-500">
                About
              </Link>
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
                  onClick={() => toggleDropdown("user")}
                >
                  <User className="w-5 h-5 mr-1" />
                  <span className="max-w-32 truncate">
                    {user.email?.split('@')[0] || 'User'}
                  </span>
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === "user" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "user" && (
                  <ul className="absolute right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-[100] border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300">
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
                  onClick={() => toggleDropdown("community-mobile")}
                >
                  <span>Community</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === "community-mobile" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "community-mobile" && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-800">
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
                      <Link href="/community/instagram" className="block py-1 text-gray-400 hover:text-white">
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/twitter" className="block py-1 text-gray-400 hover:text-white">
                        Twitter/X
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/youtube" className="block py-1 text-gray-400 hover:text-white">
                        YouTube
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/telegram" className="block py-1 text-gray-400 hover:text-white">
                        Telegram
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/mastodon" className="block py-1 text-gray-400 hover:text-white">
                        Mastodon
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/facebook" className="block py-1 text-gray-400 hover:text-white">
                        Facebook Groups
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
                  onClick={() => toggleDropdown("insights-mobile")}
                >
                  <span>Insights</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === "insights-mobile" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "insights-mobile" && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-800">
                    <li>
                      <Link href="/insights/job-market" className="block py-1 text-gray-400 hover:text-white">
                        Job Market
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/research-innovations" className="block py-1 text-gray-400 hover:text-white">
                        Research & Innovations
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/emerging-trends" className="block py-1 text-gray-400 hover:text-white">
                        Emerging Trends
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/breaches-threats" className="block py-1 text-gray-400 hover:text-white">
                        Breaches & Threats
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/policy-regulations" className="block py-1 text-gray-400 hover:text-white">
                        Cyber Policy & Regulations
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/threat-intelligence" className="block py-1 text-gray-400 hover:text-white">
                        Threat Intelligence & APT Groups
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/tools-techniques" className="block py-1 text-gray-400 hover:text-white">
                        Cybersecurity Tools & Techniques
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/industry-specific" className="block py-1 text-gray-400 hover:text-white">
                        Industry-Specific Cybersecurity
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-300"
                  onClick={() => toggleDropdown("academy-mobile")}
                >
                  <span>Academy</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === "academy-mobile" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "academy-mobile" && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-800">
                    <li>
                      <Link href="/academy/roadmaps" className="block py-1 text-gray-400 hover:text-white">
                        Learning Roadmaps & Career Paths
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/youtube" className="block py-1 text-gray-400 hover:text-white">
                        YouTube Creators & Video Courses
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/foundational" className="block py-1 text-gray-400 hover:text-white">
                        Foundational Learning (Beginner)
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
                      <Link href="/academy/college" className="block py-1 text-gray-400 hover:text-white">
                        College Students
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/ctf" className="block py-1 text-gray-400 hover:text-white">
                        CTFs & Hands-on Labs
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/scripting" className="block py-1 text-gray-400 hover:text-white">
                        Scripting & Automation
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/certifications" className="block py-1 text-gray-400 hover:text-white">
                        Certifications & Study Resources
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/tools" className="block py-1 text-gray-400 hover:text-white">
                        Cybersecurity Tools & Platforms
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/platforms" className="block py-1 text-gray-400 hover:text-white">
                        Learning Platforms & Free Resources
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/career" className="block py-1 text-gray-400 hover:text-white">
                        Career Development & Job Prep
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/projects" className="block py-1 text-gray-400 hover:text-white">
                        Cybersecurity Projects & Labs
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/about" className="block py-2 text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-800">
                {user ? (
                  <>
                    <Link href="/dashboard" className="block py-2 text-gray-300 hover:text-white">
                      Dashboard
                    </Link>
                    <Link href="/profile" className="block py-2 text-gray-300 hover:text-white">
                      Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full py-2 text-gray-300 hover:text-white"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login" className="block py-2 text-gray-300 hover:text-white">
                      Log In
                    </Link>
                    <Link
                      href="/auth/register"
                      className="block py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-center text-white"
                    >
                      Sign Up
                    </Link>
                  </>
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

