"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

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
    <nav className="fixed top-16 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left Section */}
          <div className="flex-1 flex items-center space-x-8">
            <Link href="/featured" className="text-gray-300 hover:text-cyan-400 text-sm font-medium">
              Featured
            </Link>
            <Link href="/trending" className="text-gray-300 hover:text-cyan-400 text-sm font-medium">
              Trending
            </Link>
          </div>

          {/* Center Section - Main Navigation */}
          <div className="flex-1 hidden md:flex items-center justify-center space-x-8">
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-900 ring-1 ring-black ring-opacity-5">
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

          {/* Right Section */}
          <div className="flex-1 flex items-center justify-end space-x-8">
            <Link href="/search" className="text-gray-300 hover:text-cyan-400 text-sm font-medium">
              Search
            </Link>
            <Link href="/help" className="text-gray-300 hover:text-cyan-400 text-sm font-medium">
              Help Center
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
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="grid grid-cols-2 gap-4 px-4 py-2 border-b border-gray-800">
              <Link href="/featured" className="text-gray-300 hover:text-cyan-400 text-sm font-medium">
                Featured
              </Link>
              <Link href="/trending" className="text-gray-300 hover:text-cyan-400 text-sm font-medium">
                Trending
              </Link>
            </div>
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
            <div className="grid grid-cols-2 gap-4 px-4 py-2 border-t border-gray-800">
              <Link href="/search" className="text-gray-300 hover:text-cyan-400 text-sm font-medium">
                Search
              </Link>
              <Link href="/help" className="text-gray-300 hover:text-cyan-400 text-sm font-medium">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 