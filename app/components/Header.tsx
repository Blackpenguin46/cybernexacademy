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
  }, [pathname]);

  // Animation variants
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg' : 'bg-dark'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group"
          >
            <div className="relative">
              <Shield className="w-7 h-7 mr-2.5 text-neon-blue group-hover:text-primary-400 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full blur-md opacity-0 bg-neon-blue/20 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-xl font-display font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-primary-500">
              CyberNex Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {mainNavLinks.map((item: NavItem) => (
                <li key={item.name} className="relative">
                  {item.children ? (
                    <div className="relative">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className={`flex items-center px-4 py-2 rounded-md text-base font-medium transition-colors 
                          ${pathname.startsWith(item.href) ? 'text-neon-blue' : 'text-gray-300 hover:text-white hover:bg-dark-lighter'}`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="absolute mt-1 right-0 w-56 rounded-md shadow-xl bg-dark-card border border-dark-border origin-top-right z-50"
                          >
                            <div className="py-2 px-1">
                              {item.children.map((child: NavChild) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className={`group flex items-center px-4 py-3 rounded-md text-sm transition-colors ${
                                    pathname === child.href 
                                      ? 'bg-neon-blue/10 text-neon-blue' 
                                      : 'text-gray-300 hover:text-white hover:bg-dark-lighter'
                                  }`}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {child.icon && (
                                    <span className={`mr-3 ${pathname === child.href ? 'text-neon-blue' : 'text-gray-400 group-hover:text-neon-blue'}`}>
                                      <child.icon className="w-5 h-5" />
                                    </span>
                                  )}
                                  <span>{child.name}</span>
                                  {child.isExternal && (
                                    <ExternalLink className="ml-1.5 w-3 h-3 opacity-70" />
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className={`flex items-center px-4 py-2 rounded-md text-base font-medium transition-colors ${
                        pathname === item.href 
                          ? 'text-neon-blue' 
                          : 'text-gray-300 hover:text-white hover:bg-dark-lighter'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.isExternal && (
                        <ExternalLink className="ml-1.5 w-3 h-3 opacity-70" />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Authentication Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="https://discord.gg/cybernex" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 bg-[#5865F2]/20 hover:bg-[#5865F2]/30 rounded-md transition-colors duration-300 border border-[#5865F2]/30 hover:border-[#5865F2]/50"
            >
              <span className="font-medium">Discord</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <Link 
              href="https://instagram.com/cybernexacademy" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 bg-[#E1306C]/20 hover:bg-[#E1306C]/30 rounded-md transition-colors duration-300 border border-[#E1306C]/30 hover:border-[#E1306C]/50"
            >
              <span className="font-medium">Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-dark-lighter transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden bg-dark-card/95 backdrop-blur-md border-t border-dark-border shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-1">
                {mainNavLinks.map((item: NavItem) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium transition-colors ${
                            pathname.startsWith(item.href) ? 'text-neon-blue bg-dark-lighter' : 'text-gray-300 hover:bg-dark-lighter hover:text-white'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-1 space-y-1"
                            >
                              {item.children.map((child: NavChild) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  target={child.isExternal ? "_blank" : undefined}
                                  rel={child.isExternal ? "noopener noreferrer" : undefined}
                                  className={`flex items-center px-4 py-3 rounded-md text-sm transition-colors ${
                                    pathname === child.href 
                                      ? 'bg-neon-blue/10 text-neon-blue' 
                                      : 'text-gray-300 hover:text-white hover:bg-dark-lighter'
                                  }`}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {child.icon && (
                                    <span className={`mr-3 ${pathname === child.href ? 'text-neon-blue' : 'text-gray-400'}`}>
                                      <child.icon className="w-5 h-5" />
                                    </span>
                                  )}
                                  <span>{child.name}</span>
                                  {child.isExternal && (
                                    <ExternalLink className="ml-1.5 w-3 h-3 opacity-70" />
                                  )}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        className={`flex items-center px-4 py-3 rounded-md text-base font-medium transition-colors ${
                          pathname === item.href 
                            ? 'text-neon-blue bg-dark-lighter' 
                            : 'text-gray-300 hover:text-white hover:bg-dark-lighter'
                        }`}
                      >
                        <span>{item.name}</span>
                        {item.isExternal && (
                          <ExternalLink className="ml-1.5 w-3 h-3 opacity-70" />
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Social media buttons */}
              <div className="mt-6 grid grid-cols-2 gap-2 px-4">
                <Link 
                  href="https://discord.gg/cybernex" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#5865F2]/20 hover:bg-[#5865F2]/30 rounded-md transition-colors duration-300 border border-[#5865F2]/30 hover:border-[#5865F2]/50"
                >
                  <span className="font-medium">Discord</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <Link 
                  href="https://instagram.com/cybernexacademy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#E1306C]/20 hover:bg-[#E1306C]/30 rounded-md transition-colors duration-300 border border-[#E1306C]/30 hover:border-[#E1306C]/50"
                >
                  <span className="font-medium">Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
              
              {/* Featured Links (Mobile) */}
              {featuredLinks.length > 0 && (
                <div className="mt-6 px-4">
                  <div className="text-sm font-medium text-gray-400 mb-3">Featured Resources</div>
                  <div className="space-y-2">
                    {featuredLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-center px-4 py-3 bg-dark-lighter hover:bg-dark-light rounded-md text-sm transition-colors"
                      >
                        {link.icon && (
                          <span className="mr-3 text-neon-blue">
                            <link.icon className="w-5 h-5" />
                          </span>
                        )}
                        <span className="flex-1">{link.name}</span>
                        {link.isExternal && (
                          <ExternalLink className="w-3 h-3 opacity-70" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Bottom border with gradient effect */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent transition-opacity duration-300 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </header>
  );
}