"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Shield, Menu, X, LogOut, ChevronDown } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<{ name?: string; email: string } | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Learn",
      href: "/learning-resources",
      dropdown: [
        { name: "Learning Resources", href: "/learning-resources" },
        { name: "Fundamentals", href: "/fundamentals" },
        { name: "Projects", href: "/projects" },
        { name: "Certifications", href: "/certifications" },
        { name: "Emerging Trends", href: "/emerging-trends" },
        { name: "CTF", href: "/ctf" },
      ],
    },
    {
      name: "College Students",
      href: "/college-students",
      dropdown: [
        { name: "Resources", href: "/college-students/resources" },
        { name: "Internships", href: "/college-students/internships" },
        { name: "Learning Paths", href: "/college-students/learning-paths" },
      ],
    },
    {
      name: "Community",
      href: "/community",
      dropdown: [
        { name: "Events and CTFs", href: "/events-and-ctfs" },
        { name: "Community Forum", href: "/community" },
      ],
    },
    {
      name: "Career",
      href: "/career",
      dropdown: [
        { name: "Job Opportunities", href: "/career/job-opportunities" },
        { name: "Career Resources", href: "/career/resources" },
        { name: "Professional Development", href: "/career/professional-development" },
        { name: "Industry Trends", href: "/career/industry-trends" },
      ],
    },
    { name: "CyberNex+", href: "/cybernex-plus" },
  ]

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownEnter = (itemName: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setActiveDropdown(itemName)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // 300ms delay before closing
    setCloseTimeout(timeout)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      if (closeTimeout) {
        clearTimeout(closeTimeout)
      }
    }
  }, [closeTimeout])

  return (
    <header className="bg-background/80 backdrop-blur-sm fixed w-full z-10 top-0 border-b border-border">
      <nav className="max-w-[1800px] mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 mr-4">
          <Link href="/" className="flex items-center text-2xl font-bold text-foreground">
            <Shield className="w-8 h-8 mr-2" />
            CyberNex
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
              onMouseLeave={() => item.dropdown && handleDropdownLeave()}
            >
              <Link
                href={item.href}
                className={`${
                  pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center`}
                onClick={() => item.dropdown && setActiveDropdown(item.name)}
              >
                {item.name}
                {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
              {item.dropdown && activeDropdown === item.name && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border"
                >
                  <div className="py-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm font-medium text-muted-foreground">Welcome, {user.name || user.email}</span>
              <Link
                href="/cybernex-plus"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-700"
              >
                CyberNex+
              </Link>
              <button
                onClick={handleLogout}
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground hover:text-foreground focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden mt-4 bg-background border-t border-border">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`${
                  pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => {
                  setIsOpen(false)
                  !item.dropdown && setActiveDropdown(null)
                }}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-6">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 space-y-2">
            {user ? (
              <>
                <span className="block px-3 py-2 text-sm font-medium text-muted-foreground">
                  Welcome, {user.name || user.email}
                </span>
                <Link
                  href="/cybernex-plus"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  CyberNex+
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="block w-full text-left text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

