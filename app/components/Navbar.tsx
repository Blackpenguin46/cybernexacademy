"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X, Terminal, Zap, Home, Heart, ChevronDown, MessageSquare, Code, Award, BookOpen, AlertTriangle, Newspaper, LineChart, ArrowRight, Linkedin, Users, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Main navigation sections with dropdown content
  const navSections = [
    {
      id: "community",
      title: "Community",
      href: "/community",
      icon: User,
      description: "Connect with cybersecurity professionals and enthusiasts through our community platforms.",
      items: [
        { title: "Discord Servers", desc: "Join active cybersecurity discussion servers", icon: MessageSquare, href: "/community/discord" },
        { title: "GitHub Projects", desc: "Collaborate on open-source security tools", icon: Code, href: "/community/github" },
        { title: "Substack", desc: "Subscribe to our cybersecurity newsletter", icon: Terminal, href: "/community/substack" },
        { title: "LinkedIn", desc: "Connect with professionals in the industry", icon: Linkedin, href: "/community/linkedin" },
        { title: "Skool", desc: "Join our learning community", icon: Users, href: "/community/skool" },
        { title: "Forums", desc: "Discuss cybersecurity topics", icon: MessageCircle, href: "/community/forums" }
      ]
    },
    {
      id: "insights",
      title: "Insights",
      href: "/insights",
      icon: Zap,
      description: "Explore the latest cybersecurity news, threats, and industry trends to stay informed.",
      items: [
        { title: "Cybersecurity News", desc: "Stay updated with cybersecurity events", icon: Newspaper, href: "/insights/news" },
        { title: "Threat Reports", desc: "Analyses of emerging threats", icon: AlertTriangle, href: "/insights/threats" },
        { title: "Industry Trends", desc: "Current developments in cybersecurity", icon: LineChart, href: "/insights/industry" },
        { title: "Research", desc: "Latest cybersecurity research findings", icon: BookOpen, href: "/insights/research" },
        { title: "Cases", desc: "Real-world cybersecurity incident analyses", icon: Users, href: "/insights/cases" },
        { title: "Practices", desc: "Best practices for security", icon: Code, href: "/insights/practices" }
      ]
    },
    {
      id: "academy",
      title: "Academy",
      href: "/academy",
      icon: Terminal,
      description: "Build your cybersecurity skills with structured learning paths, courses, and certifications.",
      items: [
        { title: "Beginner Path", desc: "Start your cybersecurity journey", icon: BookOpen, href: "/academy/beginner" },
        { title: "Advanced Path", desc: "Enhance your technical skills", icon: Code, href: "/academy/advanced" },
        { title: "Certifications", desc: "Prepare for industry certifications", icon: Award, href: "/academy/certifications" },
        { title: "Courses", desc: "Focused cybersecurity learning modules", icon: Users, href: "/academy/courses" },
        { title: "Labs", desc: "Hands-on practical environments", icon: Terminal, href: "/academy/labs" },
        { title: "YouTube", desc: "Free educational video content", icon: Zap, href: "/academy/youtube" }
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

  // Function to determine dropdown position
  const getDropdownPosition = (sectionId: string) => {
    const index = navSections.findIndex(section => section.id === sectionId);
    
    if (index === 0) return "left-0";
    if (index === 1) return "left-[calc(50%-425px)]";
    if (index === 2) return "right-0";
    
    return "left-0";
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
          <div className="flex items-center h-16 px-4">
            {/* Logo */}
            <div className="flex-none">
              <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                <div className="relative">
                  <Terminal className="w-6 h-6 text-blue-400" />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  CyberNex Academy
                </span>
              </Link>
            </div>

            {/* Desktop navbar links - centered on the page */}
            <div className="hidden lg:flex items-center justify-center mx-auto space-x-10 lg:space-x-16">
              {navSections.map((section) => (
                <div 
                  key={section.id} 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(section.id)}
                  onMouseLeave={handleMouseLeave}
                  ref={el => navRefs.current[section.id] = el}
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

                  {/* Desktop Dropdown Menu - Position-aware */}
                  <AnimatePresence>
                    {activeDropdown === section.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute ${getDropdownPosition(section.id)} mt-2 w-[850px] max-w-[95vw] bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-blue-500/20 overflow-hidden z-50 transform-origin-top`}
                      >
                        <div className="flex">
                          {/* Section overview - left side (increased padding) */}
                          <div className="w-1/4 p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/95 border-r border-blue-500/10">
                            <div className="flex items-center gap-2 mb-2">
                              <section.icon className="w-5 h-5 text-blue-400" />
                              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                            </div>
                            <p className="text-sm text-gray-300 mb-3">{section.description}</p>
                            <Link 
                              href={section.href} 
                              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 group"
                            >
                              Explore all {section.title.toLowerCase()}
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                          
                          {/* Unified links grid - right side (increased padding) */}
                          <div className="w-3/4 p-5">
                            <div className="grid grid-cols-3 gap-3">
                              {section.items.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-center p-3 rounded-md hover:bg-blue-500/10 transition-colors group"
                                >
                                  <div className="flex-shrink-0 w-6 h-6 mr-2 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                                  </div>
                                  <span className="text-sm font-medium text-white group-hover:text-blue-300">{item.title}</span>
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
            <div className="flex-none flex items-center ml-auto space-x-4">
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
                            <p className="px-3 py-2 text-sm text-gray-400">{section.description}</p>
                            
                            <div className="grid grid-cols-2 gap-2">
                              {section.items.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-center p-2 rounded-md hover:bg-blue-500/10 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <div className="flex-shrink-0 w-6 h-6 mr-2 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                  </div>
                                  <span className="text-sm font-medium text-white">{item.title}</span>
                                </Link>
                              ))}
                            </div>
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
