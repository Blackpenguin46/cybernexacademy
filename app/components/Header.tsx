"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavigation as mainNavLinks, featuredLinks } from '../config/navigation';
import { LucideIcon } from 'lucide-react';

// Define types for navigation items
interface NavChild {
  name: string;
  href: string;
  icon?: LucideIcon;
  isExternal?: boolean;
}

interface NavItem {
  name: string;
  href: string;
  children?: NavChild[];
  isExternal?: boolean;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on pathname change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.2 } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      transition: { duration: 0.1 } 
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      transition: { duration: 0.3 } 
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      transition: { duration: 0.3 } 
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Shield className="w-8 h-8 text-neon-blue mr-2" />
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
              CyberNex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {mainNavLinks.map((item) => (
              <div key={item.name} className="relative group">
                {item.items ? (
                  // Dropdown menu
                  <>
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                        pathname.startsWith(item.href) || activeDropdown === item.name
                          ? 'text-neon-blue'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg bg-dark-card border border-dark-border overflow-hidden z-50"
                        >
                          <div className="py-2">
                            {item.items.map((subItem) => (
                              <div key={subItem.name}>
                                {subItem.isExternal ? (
                                  // External link
                                  <a
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-dark-lighter hover:text-white transition-colors"
                                  >
                                    {subItem.icon && (
                                      <subItem.icon className="mr-3 h-5 w-5 text-neon-blue" />
                                    )}
                                    <span>{subItem.name}</span>
                                    <ExternalLink className="ml-auto h-4 w-4" />
                                  </a>
                                ) : (
                                  // Internal link
                                  <Link
                                    href={subItem.href}
                                    className={`flex items-center px-4 py-3 text-sm hover:bg-dark-lighter transition-colors ${
                                      pathname === subItem.href
                                        ? 'text-neon-blue'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {subItem.icon && (
                                      <subItem.icon className="mr-3 h-5 w-5 text-neon-blue" />
                                    )}
                                    <span>{subItem.name}</span>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  // Regular link
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-neon-blue'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center">
            <Link
              href="/auth/login"
              className="mr-3 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/auth/register"
              className="cyber-btn-secondary py-2 px-4 text-sm rounded-md"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-dark-card border-t border-dark-border overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
              {mainNavLinks.map((item) => (
                <div key={item.name} className="py-2">
                  {item.items ? (
                    <>
                      <button
                        className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium ${
                          pathname.startsWith(item.href)
                            ? 'text-neon-blue'
                            : 'text-gray-300'
                        }`}
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1 w-4 h-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 ml-4 border-l border-dark-border"
                          >
                            {item.items.map((subItem) => (
                              <div key={subItem.name} className="pl-4">
                                {subItem.isExternal ? (
                                  <a
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center py-2 text-sm text-gray-300 hover:text-white transition-colors"
                                  >
                                    {subItem.icon && (
                                      <subItem.icon className="mr-3 h-5 w-5 text-neon-blue" />
                                    )}
                                    <span>{subItem.name}</span>
                                    <ExternalLink className="ml-auto h-4 w-4" />
                                  </a>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className={`flex items-center py-2 text-sm hover:text-white transition-colors ${
                                      pathname === subItem.href
                                        ? 'text-neon-blue'
                                        : 'text-gray-300'
                                    }`}
                                  >
                                    {subItem.icon && (
                                      <subItem.icon className="mr-3 h-5 w-5 text-neon-blue" />
                                    )}
                                    <span>{subItem.name}</span>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${
                        pathname === item.href ? 'text-neon-blue' : 'text-gray-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 pb-3 border-t border-dark-border">
                <Link
                  href="/auth/login"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/auth/register"
                  className="block mt-2 px-3 py-2 rounded-md text-sm font-medium bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom border effect that changes opacity based on scroll */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-30'
        }`}
      ></div>
    </div>
  );
}