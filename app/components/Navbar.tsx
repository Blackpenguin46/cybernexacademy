"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Lock, User, Menu, X, ChevronDown, Shield, Terminal, Zap, Server, Database, Code, Settings, Home } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Navigation sections with cybersecurity icons
  const navSections = [
    {
      id: "academy",
      title: "Academy",
      icon: Terminal,
      links: [
        { name: "Overview", href: "/academy" },
        { name: "Foundational", href: "/academy/foundational" },
        { name: "Projects & Labs", href: "/academy/labs" },
        { name: "Career Roadmaps", href: "/academy/roadmaps" }
      ]
    },
    {
      id: "community",
      title: "Community",
      icon: User,
      links: [
        { name: "Overview", href: "/community" },
        { name: "Discord", href: "/community/discord" },
        { name: "Events", href: "/community/events" },
        { name: "GitHub", href: "/community/github" }
      ]
    },
    {
      id: "insights",
      title: "Insights",
      icon: Zap,
      links: [
        { name: "Overview", href: "/insights" },
        { name: "News", href: "/insights/news" },
        { name: "Trends", href: "/insights/trends" },
        { name: "Research", href: "/insights/research" }
      ]
    },
    {
      id: "tools",
      title: "Tools",
      icon: Database,
      links: [
        { name: "Overview", href: "/tools" },
        { name: "Security Scanner", href: "/tools/scanner" },
        { name: "Password Checker", href: "/tools/password" },
        { name: "Security Assessment", href: "/tools/assessment" }
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
    setActiveDropdown(null);
  }, [pathname]);

  // Active link detection
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -5,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-neon-blue/10' : 'bg-transparent'
      }`}
    >
      {/* Top accent line for cyber feel */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-80"></div>
      
      <div className="max-w-[1920px] mx-auto">
        <div className="px-4 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo with cybersecurity styling */}
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2 relative group">
            <div className="p-2 rounded bg-neon-blue/10 border border-neon-blue/20 group-hover:border-neon-blue/40 transition-colors duration-300">
              <Shield className="w-5 h-5 text-neon-blue" />
            </div>
            <div className="flex flex-col">
              <span className="text-neon-blue font-mono tracking-tight leading-none">CYBER</span>
              <span className="text-neon-green font-mono tracking-tight leading-none">NEX</span>
            </div>
          </Link>

          {/* Desktop - Center section with nav sections */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className={`px-3 py-2 rounded-md transition-all duration-300 ${
              isActive('/') && pathname === '/' 
                ? 'text-neon-blue bg-neon-blue/5' 
                : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
            }`}>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </div>
            </Link>
            
            {navSections.map((section) => (
              <div key={section.title} className="relative group">
                <div className="flex items-center">
                  <Link
                    href={`/${section.id}`}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
                      isActive(`/${section.id}`)
                        ? 'text-neon-blue bg-neon-blue/5' 
                        : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
                    }`}
                  >
                    <section.icon className="w-4 h-4" />
                    <span>{section.title}</span>
                  </Link>
                  <button 
                    className={`ml-1 p-1 rounded-md transition-all duration-300 ${
                      activeDropdown === section.id 
                        ? 'text-neon-blue bg-neon-blue/5' 
                        : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(activeDropdown === section.id ? null : section.id);
                    }}
                  >
                    <motion.div 
                      animate={{ rotate: activeDropdown === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                </div>
                
                <AnimatePresence>
                  {activeDropdown === section.id && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute z-10 left-0 mt-1 w-56 bg-black/90 backdrop-blur-md border border-neon-blue/20 rounded-md overflow-hidden shadow-xl shadow-neon-blue/10"
                    >
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent"></div>
                      
                      <div className="py-2">
                        {section.links.map((link) => (
                          <Link 
                            key={link.name}
                            href={link.href} 
                            className={`flex items-center px-4 py-2 hover:bg-neon-blue/10 ${
                              isActive(link.href) 
                                ? 'text-neon-blue bg-neon-blue/5' 
                                : 'text-gray-300'
                            } transition-colors duration-200`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="ml-2">{link.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop - Right section with user actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-gray-400 hover:text-neon-blue p-2 rounded-md transition-colors relative group">
              <div className="absolute inset-0 border border-neon-blue/0 group-hover:border-neon-blue/30 rounded-md transition-colors"></div>
              <Search className="w-5 h-5" />
            </button>
            
            <Link href="/dashboard" 
              className={`px-4 py-2 rounded-md transition-all duration-300 relative group overflow-hidden ${
                isActive('/dashboard') 
                  ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/30' 
                  : 'text-gray-300 hover:text-neon-blue border border-transparent hover:border-neon-blue/20 hover:bg-neon-blue/5'
              }`}
            >
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span>Dashboard</span>
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-neon-blue/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
            
            <Link 
              href="/auth/login" 
              className="flex items-center gap-2 text-black bg-neon-blue hover:bg-neon-blue/90 px-4 py-2 rounded-md transition-all duration-300 group"
            >
              <Lock className="w-4 h-4" />
              <span>Access Portal</span>
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
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="lg:hidden bg-black/95 backdrop-blur-md border-t border-neon-blue/20 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-6">
                <Link
                  href="/"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                    isActive('/') && pathname === '/'
                      ? 'text-neon-blue bg-neon-blue/10'
                      : 'text-gray-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </Link>
                
                {/* Mobile nav sections */}
                {navSections.map((section) => (
                  <div key={section.title} className="space-y-2">
                    <h3 className="flex items-center text-neon-blue font-medium px-4">
                      <section.icon className="w-5 h-5 mr-2" />
                      {section.title}
                    </h3>
                    <div className="pl-4 space-y-1 border-l border-neon-blue/20">
                      {section.links.map((link) => (
                        <Link 
                          key={link.name}
                          href={link.href} 
                          className={`block py-2 px-4 rounded-md ${
                            isActive(link.href) 
                              ? 'text-neon-green bg-neon-blue/5' 
                              : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
                          } transition-colors`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Mobile user actions */}
                <div className="pt-4 border-t border-neon-blue/20 space-y-3">
                  <Link 
                    href="/dashboard" 
                    className="flex items-center gap-2 px-4 py-3 bg-black/50 border border-neon-blue/20 rounded-md w-full hover:bg-neon-blue/10 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Settings className="w-5 h-5 text-neon-blue" />
                    <span className="text-gray-300">Dashboard</span>
                  </Link>
                  
                  <Link 
                    href="/auth/login" 
                    className="flex items-center justify-center gap-2 bg-neon-blue text-black px-4 py-3 rounded-md w-full hover:bg-neon-blue/90 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Lock className="w-5 h-5" />
                    <span>Access Portal</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 