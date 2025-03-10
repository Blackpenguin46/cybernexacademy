"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Lock, User, Menu, X, ChevronDown, Shield, Terminal, Zap, Server, Database, Code, Settings, Home, Heart } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showDonateInfo, setShowDonateInfo] = useState(false);
  
  // Navigation sections with cybersecurity icons
  const navSections = [
    {
      id: "academy",
      title: "Academy",
      icon: Terminal,
      description: "Learn cybersecurity through structured courses, hands-on labs, and guided career paths. Perfect for beginners and experienced professionals alike.",
      links: [
        { name: "Foundational", href: "/academy/foundational" },
        { name: "Projects & Labs", href: "/academy/labs" },
        { name: "Career Roadmaps", href: "/academy/roadmaps" }
      ]
    },
    {
      id: "community",
      title: "Community",
      icon: User,
      description: "Connect with fellow cybersecurity enthusiasts, share knowledge, and participate in events. Build your network in the security community.",
      links: [
        { name: "Discord", href: "/community/discord" },
        { name: "Events", href: "/community/events" },
        { name: "GitHub", href: "/community/github" }
      ]
    },
    {
      id: "insights",
      title: "Insights",
      icon: Zap,
      description: "Stay informed with the latest cybersecurity news, trends, and research. Get expert analysis on emerging threats and industry developments.",
      links: [
        { name: "News", href: "/insights/news" },
        { name: "Trends", href: "/insights/trends" },
        { name: "Research", href: "/insights/research" }
      ]
    },
    {
      id: "tools",
      title: "Tools",
      icon: Database,
      description: "Access powerful cybersecurity tools for testing, analysis, and assessment. Essential utilities for security professionals.",
      links: [
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
          <div className="hidden lg:flex items-center space-x-6">
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
                <button 
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
                    activeDropdown === section.id 
                      ? 'text-neon-blue bg-neon-blue/5' 
                      : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
                  }`}
                  onClick={() => setActiveDropdown(activeDropdown === section.id ? null : section.id)}
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.title}</span>
                  <motion.div 
                    animate={{ rotate: activeDropdown === section.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeDropdown === section.id && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute z-10 left-0 mt-2 bg-black/90 backdrop-blur-md border border-neon-blue/20 rounded-md overflow-hidden shadow-xl shadow-neon-blue/10"
                      style={{ width: '600px' }}
                    >
                      <div className="grid grid-cols-5 gap-4 p-6">
                        {/* Section Overview */}
                        <div className="col-span-2 border-r border-neon-blue/20 pr-6">
                          <h3 className="text-lg font-semibold text-neon-blue mb-2 flex items-center gap-2">
                            <section.icon className="w-5 h-5" />
                            {section.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {section.description}
                          </p>
                        </div>
                        
                        {/* Links */}
                        <div className="col-span-3 flex flex-wrap gap-2">
                          {section.links.map((link) => (
                            <Link 
                              key={link.name}
                              href={link.href} 
                              className={`flex items-center px-4 py-2 rounded-md hover:bg-neon-blue/10 ${
                                isActive(link.href) 
                                  ? 'text-neon-blue bg-neon-blue/5' 
                                  : 'text-gray-300'
                              } transition-colors duration-200 w-full`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span>{link.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop - Right section with user actions */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button 
                className="flex items-center gap-2 text-gray-300 hover:text-neon-blue px-4 py-2 rounded-md transition-all duration-300 border border-transparent hover:border-neon-blue/20 hover:bg-neon-blue/5"
                onMouseEnter={() => setShowDonateInfo(true)}
                onMouseLeave={() => setShowDonateInfo(false)}
              >
                <Heart className="w-4 h-4" />
                <span>Donate</span>
              </button>

              <AnimatePresence>
                {showDonateInfo && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute right-0 mt-2 w-80 p-4 bg-black/90 backdrop-blur-md border border-neon-blue/20 rounded-md shadow-xl shadow-neon-blue/10"
                  >
                    <h4 className="text-neon-blue font-semibold mb-2 flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Support Our Mission
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      While all our resources are freely available, your donations help us:
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1 mb-3">
                      <li>• Maintain and improve the platform</li>
                      <li>• Create new educational content</li>
                      <li>• Fund scholarships for cybersecurity students</li>
                    </ul>
                    <Link 
                      href="https://buy.stripe.com/fZeg051CQ9Dg84E7su"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-neon-blue hover:bg-neon-blue/90 text-black px-4 py-2 rounded-md transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Support Us</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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

                {/* Add donation section to mobile menu */}
                <div className="pt-4 border-t border-neon-blue/20">
                  <div className="px-4 py-3">
                    <h4 className="text-neon-blue font-semibold mb-2 flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Support Our Mission
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      Your donations help maintain the platform and fund cybersecurity education.
                    </p>
                    <Link 
                      href="https://buy.stripe.com/fZeg051CQ9Dg84E7su"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-neon-blue hover:bg-neon-blue/90 text-black px-4 py-2 rounded-md transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Support Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 