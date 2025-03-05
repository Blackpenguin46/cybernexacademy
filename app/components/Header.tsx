"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    {
      title: "Academy",
      submenu: [
        { title: "Learning Paths", href: "/academy/paths" },
        { title: "Hands-on Labs", href: "/academy/labs" },
        { title: "Certification Guides", href: "/academy/certifications" },
        { title: "Challenges", href: "/academy/challenges" },
      ],
    },
    {
      title: "Community",
      submenu: [
        { title: "Discussion Forum", href: "/community/forum" },
        { title: "Events & Webinars", href: "/community/events" },
        { title: "Mentorship", href: "/community/mentorship" },
        { title: "Leaderboard", href: "/community/leaderboard" },
      ],
    },
    {
      title: "Insights",
      submenu: [
        { title: "Threat Intelligence", href: "/insights/threats" },
        { title: "Security News", href: "/insights/news" },
        { title: "Tools Repository", href: "/insights/tools" },
        { title: "Case Studies", href: "/insights/cases" },
      ],
    },
    {
      title: "Resources",
      href: "/resources",
    },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-opacity-90 backdrop-blur-md" : "bg-opacity-0"
      } bg-darker-bg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold neon-text">CyberNex</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  className="nav-link flex items-center space-x-1"
                  onClick={() => item.href && window.location.assign(item.href)}
                >
                  <span>{item.title}</span>
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </button>

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="cyber-card py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 hover:text-neon-blue transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login" className="nav-link">
              Login
            </Link>
            <Link href="/auth/register" className="cyber-button">
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neon-blue" />
            ) : (
              <Menu className="w-6 h-6 text-neon-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden cyber-gradient">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.title} className="py-2">
                <button
                  className="text-lg font-medium w-full text-left"
                  onClick={() => item.href && window.location.assign(item.href)}
                >
                  {item.title}
                </button>
                {item.submenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block py-2 text-text-secondary hover:text-neon-blue"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-4">
              <Link
                href="/auth/login"
                className="block w-full text-center py-2 nav-link"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="block w-full text-center cyber-button"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 