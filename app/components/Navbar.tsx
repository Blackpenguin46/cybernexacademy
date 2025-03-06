"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, Lock, User, Menu, X, ChevronDown, Shield, Terminal, Zap, Server } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Navigation sections with cybersecurity icons
  const navSections = [
    {
      title: "Academy",
      icon: Terminal,
      links: [
        { name: "Courses", href: "/academy" },
        { name: "Learning Paths", href: "/academy/paths" },
        { name: "Resources", href: "/learning/courses" }
      ]
    },
    {
      title: "Community",
      icon: User,
      links: [
        { name: "Forums", href: "/community" },
        { name: "Creators", href: "/community/creators" },
        { name: "Events", href: "/community/events" }
      ]
    },
    {
      title: "Insights",
      icon: Zap,
      links: [
        { name: "News", href: "/insights" },
        { name: "Articles", href: "/insights/articles" },
        { name: "Research", href: "/insights/research" }
      ]
    },
    {
      title: "About",
      icon: Shield,
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
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-neon-blue/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1920px] mx-auto">
        {/* HUD-like horizontal lines for cyber feel */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent"></div>
        <div className="absolute bottom-[-4px] left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-neon-green/30 to-transparent"></div>
        
        {/* Main navbar */}
        <div className="px-4 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo with cybersecurity styling */}
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2 relative group">
            <div className="absolute -left-3 -top-3 w-10 h-10 border-t-2 border-l-2 border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-1.5 rounded bg-neon-blue/10 border border-neon-blue/20">
              <Shield className="w-5 h-5 text-neon-blue" />
            </div>
            <span className="text-neon-blue font-mono tracking-tight">Cyber</span>
            <span className="text-neon-green font-mono tracking-tight">Nex</span>
            <div className="absolute -right-3 -bottom-3 w-10 h-10 border-b-2 border-r-2 border-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {/* Desktop - Center section with nav sections */}
          <div className="hidden lg:flex space-x-8">
            {navSections.map((section) => (
              <div key={section.title} className="relative group">
                <button className="flex items-center gap-2 text-gray-300 hover:text-neon-blue group-hover:text-neon-blue px-3 py-2 rounded-md transition-colors">
                  <section.icon className="w-4 h-4" />
                  <span>{section.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 left-0 mt-1 bg-black/90 backdrop-blur-md border border-neon-blue/20 rounded-md overflow-hidden shadow-xl shadow-neon-blue/10 min-w-[200px]"
                >
                  {/* Cyber accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
                  
                  <div className="p-2">
                    {section.links.map((link) => (
                      <Link 
                        key={link.name}
                        href={link.href} 
                        className={`block px-4 py-2 rounded-md hover:bg-neon-blue/10 ${
                          isActive(link.href) 
                            ? 'text-neon-blue bg-neon-blue/5' 
                            : 'text-gray-300'
                        } transition-colors duration-200`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Desktop - Right section with user actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-gray-400 hover:text-neon-blue p-2 rounded-md transition-colors relative group">
              <div className="absolute inset-0 border border-neon-blue/0 group-hover:border-neon-blue/30 rounded-md transition-colors"></div>
              <Search className="w-5 h-5" />
            </button>
            
            <Link href="/dashboard" 
              className={`px-4 py-2 rounded-md transition-all duration-300 relative overflow-hidden group ${
                isActive('/dashboard') 
                  ? 'bg-neon-blue/20 text-neon-blue' 
                  : 'text-gray-300 hover:text-neon-blue'
              }`}
            >
              <span className="relative z-10">Dashboard</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/0 to-neon-blue/0 group-hover:via-neon-blue/10 transition-colors duration-300"></div>
              {isActive('/dashboard') && (
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neon-blue"></div>
              )}
            </Link>
            
            <Link href="/auth/login" className="flex items-center gap-2 text-neon-blue border border-neon-blue/30 hover:border-neon-blue hover:bg-neon-blue/10 px-4 py-2 rounded-md transition-all duration-300 group">
              <Lock className="w-4 h-4" />
              <span>Access</span>
              <div className="absolute -z-10 inset-0 bg-neon-blue/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-neon-blue border border-transparent hover:border-neon-blue/30 rounded-md transition-all"
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
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-neon-blue/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-6">
              {/* Mobile nav sections */}
              {navSections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h3 className="flex items-center text-neon-blue font-medium">
                    <section.icon className="w-4 h-4 mr-2" />
                    {section.title}
                  </h3>
                  <div className="pl-2 space-y-1 border-l border-neon-blue/20">
                    {section.links.map((link) => (
                      <Link 
                        key={link.name}
                        href={link.href} 
                        className={`block py-2 ${
                          isActive(link.href) ? 'text-neon-green' : 'text-gray-300 hover:text-neon-blue'
                        } transition-colors`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile user actions */}
              <div className="pt-4 border-t border-neon-blue/10 space-y-3">
                <Link 
                  href="/dashboard" 
                  className="flex items-center gap-2 px-4 py-3 bg-black/50 border border-neon-blue/20 rounded-md w-full hover:bg-neon-blue/10 transition-colors"
                >
                  <Server className="w-5 h-5 text-neon-blue" />
                  <span className="text-gray-300">Dashboard</span>
                </Link>
                
                <Link 
                  href="/auth/login" 
                  className="flex items-center justify-center gap-2 bg-neon-blue/20 text-neon-blue px-4 py-3 rounded-md w-full hover:bg-neon-blue/30 transition-colors"
                >
                  <Lock className="w-5 h-5" />
                  <span>Access Portal</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
} 