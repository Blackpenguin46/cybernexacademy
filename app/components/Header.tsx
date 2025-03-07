"use client"

import Link from "next/link"
import { Shield, ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

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

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
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
          <span className="text-xl font-bold text-white">CyberNex</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
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
                <ul className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-50 border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300">
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
                      href="/academy/labs"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Hands-On Labs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/academy/certifications"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Certifications
                    </Link>
                  </li>
                </ul>
              )}
            </li>
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
                <ul className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-50 border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300">
                  <li>
                    <Link
                      href="/community/forum"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Forum
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/community/events"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/community/mentorship"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Mentorship
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
                <ul className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg z-50 border border-gray-800 animate-in fade-in slide-in-from-top-5 duration-300">
                  <li>
                    <Link
                      href="/insights/blog"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/research"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/reports"
                      className="block px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white"
                    >
                      Threat Reports
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
          <Link href="/dashboard" className="text-gray-300 hover:text-blue-500">
            Dashboard
          </Link>
          <Link href="/login">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-950">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
          </Link>
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
                      <Link href="/academy/courses" className="block py-1 text-gray-400 hover:text-white">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/labs" className="block py-1 text-gray-400 hover:text-white">
                        Hands-On Labs
                      </Link>
                    </li>
                    <li>
                      <Link href="/academy/certifications" className="block py-1 text-gray-400 hover:text-white">
                        Certifications
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
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
                      <Link href="/community/forum" className="block py-1 text-gray-400 hover:text-white">
                        Forum
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/events" className="block py-1 text-gray-400 hover:text-white">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/mentorship" className="block py-1 text-gray-400 hover:text-white">
                        Mentorship
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
                      <Link href="/insights/blog" className="block py-1 text-gray-400 hover:text-white">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/research" className="block py-1 text-gray-400 hover:text-white">
                        Research
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/reports" className="block py-1 text-gray-400 hover:text-white">
                        Threat Reports
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
                <Link href="/dashboard" className="block py-2 text-gray-300 hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/login" className="block py-2 text-gray-300 hover:text-white">
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="block py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-center text-white"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

