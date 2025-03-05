"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Terminal, Shield, Book, Users, Menu, X } from 'lucide-react';

const navigation = [
  {
    name: 'Learning',
    href: '/learning',
    items: [
      { name: 'Courses', href: '/learning/courses' },
      { name: 'Labs', href: '/learning/labs' },
      { name: 'Certifications', href: '/learning/certifications' },
    ],
  },
  {
    name: 'Community',
    href: '/community',
    items: [
      { name: 'Forums', href: '/community/forums' },
      { name: 'Events', href: '/community/events' },
      { name: 'Blog', href: '/community/blog' },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    items: [
      { name: 'Tools', href: '/resources/tools' },
      { name: 'Documentation', href: '/resources/docs' },
      { name: 'Support', href: '/resources/support' },
    ],
  },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold cyber-gradient-text">CyberNex</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                  {item.items && (
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-400 group-hover:text-cyan-400" />
                  )}
                </Link>

                {item.items && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-900 ring-1 ring-black ring-opacity-5">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/login"
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                >
                  {item.name}
                </Link>
                {item.items && (
                  <div className="pl-4 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                href="/login"
                className="block w-full px-4 py-2 text-center text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="block w-full px-4 py-2 text-center text-base font-medium bg-cyan-500 hover:bg-cyan-600 text-white rounded-md"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 