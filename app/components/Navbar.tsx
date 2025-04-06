"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X, Terminal, Zap, Home, Heart, ChevronDown, MessageSquare, Code, Award, BookOpen, AlertTriangle, Newspaper, LineChart } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Main navigation sections with dropdown content
  const navSections = [
    {
      id: "community",
      title: "Community",
      href: "/community",
      icon: User,
      featured: [
        { title: "Discord Servers", desc: "Join active cybersecurity discussion servers", icon: MessageSquare, href: "/community/discord" },
        { title: "GitHub Projects", desc: "Collaborate on open-source security tools", icon: Code, href: "/community/github" },
        { title: "Substack", desc: "Subscribe to our cybersecurity newsletter", icon: Terminal, href: "/community/substack" }
      ],
      links: [
        { name: "LinkedIn", href: "/community/linkedin" },
        { name: "Skool", href: "/community/skool" },
        { name: "Forums", href: "/community/forums" }
      ]
    },
    {
      id: "insights",
      title: "Insights",
      href: "/insights",
      icon: Zap,
      featured: [
        { title: "Cybersecurity News", desc: "Stay updated with cybersecurity events", icon: Newspaper, href: "/insights/news" },
        { title: "Threat Reports", desc: "Analyses of emerging threats", icon: AlertTriangle, href: "/insights/threats" },
        { title: "Industry Trends", desc: "Current developments in cybersecurity", icon: LineChart, href: "/insights/industry" }
      ],
      links: [
        { name: "Research", href: "/insights/research" },
        { name: "Cases", href: "/insights/cases" },
        { name: "Practices", href: "/insights/practices" }
      ]
    },
    {
      id: "academy",
      title: "Academy",
      href: "/academy",
      icon: Terminal,
      featured: [
        { title: "Beginner Path", desc: "Start your cybersecurity journey", icon: BookOpen, href: "/academy/beginner" },
        { title: "Advanced Path", desc: "Enhance your technical skills", icon: Code, href: "/academy/advanced" },
        { title: "Certifications", desc: "Prepare for industry certifications", icon: Award, href: "/academy/certifications" }
      ],
      links: [
        { name: "Courses", href: "/academy/courses" },
        { name: "Labs", href: "/academy/labs" },
        { name: "YouTube", href: "/academy/youtube" }
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
    return pathname?.startsWith(href);
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

  // Function to handle dropdown visibility
  const handleMouseEnter = (sectionId: string) => {
    setActiveDropdown(sectionId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Add custom animation
  const globalStyles = `
  @keyframes blink {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.7; }
  }
  `;

  return (
    <>
      <style jsx global>{globalStyles}</style>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-gray-900/80 backdrop-blur-sm'
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80"></div>
        
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center h-16 px-0">
            {/* Logo - ensure it's at the very left edge with no margin */}
            <div className="flex-none ml-0">
              <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                <div className="relative">
                  <Terminal className="w-6 h-6 text-blue-400" />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  CyberNex Academy
                </span>
              </Link>
            </div>

            {/* Desktop navbar links - absolutely centered on the page */}
            <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-16">
              {navSections.map((section) => (
                <div 
                  key={section.id} 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(section.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link 
                    href={section.href}
                    className={`flex items-center gap-2 px-3 py-2 cursor-pointer ${
                      isActive(section.href) ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <section.icon className="w-4 h-4" />
                    <span>{section.title}</span>
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === section.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg border border-blue-500/20 overflow-hidden"
                      >
                        <div className="p-4 grid gap-4">
                          {section.featured.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="flex items-start p-3 rounded-md hover:bg-blue-500/10 transition-colors group"
                            >
                              <item.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 mr-3" />
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-blue-300">{item.title}</div>
                                <div className="text-xs text-gray-400 group-hover:text-gray-300">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                          
                          <div className="border-t border-blue-500/20 pt-3 mt-2">
                            <div className="grid grid-cols-2 gap-2">
                              {section.links.map((link) => (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="text-sm text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-blue-500/10 transition-colors"
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right actions section */}
            <div className="flex-none flex items-center ml-auto mr-4 lg:mr-8 space-x-4">
              {/* Donate button */}
              <Link 
                href="https://buy.stripe.com/9AQ5lrdly9Dg3Oo28b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white px-4 py-2 rounded-md transition-all duration-300 border border-pink-500/50 hover:bg-pink-500/10 group"
              >
                <Heart className="w-4 h-4 text-pink-400 group-hover:text-pink-300" />
                <span className="group-hover:text-pink-300">Donate</span>
              </Link>

              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-blue-500 border border-transparent hover:border-blue-500/30 rounded-md transition-all bg-black/30"
              >
                {mobileMenuOpen ? 
                  <X className="w-6 h-6" /> : 
                  <Menu className="w-6 h-6" />
                }
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mobileMenuVariants}
                className="lg:hidden bg-black/95 backdrop-blur-md border-t border-blue-500/30 overflow-hidden"
              >
                <div className="px-4 py-6 space-y-4">
                  <Link
                    href="/"
                    className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                      pathname === '/' ? 'text-blue-500 bg-blue-500/10 border border-blue-500/40' : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                  </Link>
                  
                  {navSections.map((section) => (
                    <div key={section.id} className="space-y-2">
                      <div
                        className={`flex items-center justify-between px-4 py-2 rounded-md ${
                          isActive(section.href) ? 'text-blue-500 bg-blue-500/10 border border-blue-500/40' : 'text-gray-300'
                        }`}
                        onClick={() => setActiveDropdown(activeDropdown === section.id ? null : section.id)}
                      >
                        <div className="flex items-center gap-2">
                          <section.icon className="w-5 h-5" />
                          <span>{section.title}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === section.id ? 'rotate-180' : ''
                        }`} />
                      </div>

                      <AnimatePresence>
                        {activeDropdown === section.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-2"
                          >
                            {section.featured.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start p-2 rounded-md hover:bg-blue-500/10"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <item.icon className="w-5 h-5 text-blue-400 mr-3" />
                                <div>
                                  <div className="text-sm font-medium text-white">{item.title}</div>
                                  <div className="text-xs text-gray-400">{item.desc}</div>
                                </div>
                              </Link>
                            ))}
                            
                            {section.links.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* Mobile donate section */}
                  <div className="pt-4 border-t border-pink-500/30">
                    <Link 
                      href="https://buy.stripe.com/9AQ5lrdly9Dg3Oo28b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 bg-black/50 border-2 border-pink-500/40 rounded-md w-full hover:bg-pink-500/10 transition-colors"
                    >
                      <Heart className="w-5 h-5 text-pink-400" />
                      <span className="text-white">Support Our Mission</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
