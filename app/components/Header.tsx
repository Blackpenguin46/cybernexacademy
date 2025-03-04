"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, ChevronDown } from "lucide-react"

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navigationItems = [
    {
      title: "Academy",
      items: [
        { name: "Courses", href: "/academy/courses" },
        { name: "Learning Paths", href: "/academy/learning-paths" },
        { name: "Certifications", href: "/academy/certifications" },
        { name: "Workshops", href: "/academy/workshops" },
      ],
    },
    {
      title: "Community",
      items: [
        { name: "Forums", href: "/community/forums" },
        { name: "Events", href: "/community/events" },
        { name: "Mentorship", href: "/community/mentorship" },
        { name: "Study Groups", href: "/community/study-groups" },
      ],
    },
    {
      title: "Careers",
      items: [
        { name: "Job Board", href: "/careers/jobs" },
        { name: "Resume Builder", href: "/careers/resume" },
        { name: "Career Paths", href: "/careers/paths" },
        { name: "Interview Prep", href: "/careers/interview-prep" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Tools", href: "/resources/tools" },
        { name: "Documentation", href: "/resources/docs" },
        { name: "Blog", href: "/resources/blog" },
        { name: "Research", href: "/resources/research" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "Help Center", href: "/support/help" },
        { name: "Contact Us", href: "/support/contact" },
        { name: "FAQ", href: "/support/faq" },
        { name: "Feedback", href: "/support/feedback" },
      ],
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-white">CyberNex</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {openDropdown === item.title && (
                  <div className="absolute top-full left-0 w-48 py-2 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 