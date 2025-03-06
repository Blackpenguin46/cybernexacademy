"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, Lock, User, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Navigation sections
  const navSections = [
    {
      title: "Academy",
      links: [
        { name: "Courses", href: "/academy" },
        { name: "Learning Paths", href: "/academy/paths" },
        { name: "Resources", href: "/learning/courses" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Forums", href: "/community" },
        { name: "Creators", href: "/community/creators" },
        { name: "Events", href: "/community/events" }
      ]
    },
    {
      title: "Insights",
      links: [
        { name: "News", href: "/insights" },
        { name: "Articles", href: "/insights/articles" },
        { name: "Research", href: "/insights/research" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Mission", href: "/about" },
        { name: "Team", href: "/about/team" },
        { name: "Contact", href: "/about/contact" }
      ]
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Active link detection
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Main navbar */}
        <div className="px-4 lg:px-8 py-4 flex justify-between items-center border-b border-dark-border">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-neon-blue">Cyber</span>Nex
          </Link>

          {/* Desktop - Center section with nav sections */}
          <div className="hidden lg:flex space-x-8">
            {navSections.map((section) => (
              <div key={section.title} className="relative group">
                <button className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors">
                  {section.title}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 left-0 mt-1 bg-dark-card border border-dark-border rounded-lg shadow-xl p-2 min-w-[200px]"
                >
                  {section.links.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href} 
                      className={`block px-4 py-2 rounded-md hover:bg-neon-blue/10 ${
                        isActive(link.href) ? 'text-neon-blue' : 'text-gray-300'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Desktop - Right section with user actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-gray-400 hover:text-white p-2 rounded-md transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            <Link href="/dashboard" 
              className={`px-4 py-2 rounded-md transition-colors ${
                isActive('/dashboard') 
                  ? 'bg-neon-blue/20 text-neon-blue' 
                  : 'text-gray-300 hover:bg-dark-card'
              }`}
            >
              Dashboard
            </Link>
            
            <Link href="/auth/login" className="flex items-center gap-2 text-neon-blue border border-neon-blue/50 hover:bg-neon-blue/10 px-4 py-2 rounded-md transition-colors">
              <Lock className="w-4 h-4" />
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-background border-b border-dark-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-6">
              {/* Mobile nav sections */}
              {navSections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h3 className="text-neon-blue font-medium">{section.title}</h3>
                  <div className="pl-2 space-y-1 border-l border-dark-border">
                    {section.links.map((link) => (
                      <Link 
                        key={link.name}
                        href={link.href} 
                        className={`block py-2 ${
                          isActive(link.href) ? 'text-neon-blue' : 'text-gray-300'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile user actions */}
              <div className="pt-4 border-t border-dark-border space-y-3">
                <Link 
                  href="/dashboard" 
                  className="flex items-center gap-2 px-4 py-3 bg-dark-card rounded-md w-full"
                >
                  <User className="w-5 h-5 text-neon-blue" />
                  <span className="text-gray-300">Dashboard</span>
                </Link>
                
                <Link 
                  href="/auth/login" 
                  className="flex items-center justify-center gap-2 bg-neon-blue/20 text-neon-blue px-4 py-3 rounded-md w-full"
                >
                  <Lock className="w-5 h-5" />
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
} 