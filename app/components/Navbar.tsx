"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X, Terminal, Zap, Home, Heart, ChevronDown, MessageSquare, Code, Award, BookOpen, AlertTriangle, Newspaper, LineChart, ArrowRight, Linkedin, Users, MessageCircle, Server, Building, Target, TrendingUp, Lightbulb, PenTool, FileText, GraduationCap, Youtube, Database } from 'lucide-react';
import Image from 'next/image';
import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { FaDiscord, FaReddit, FaGithub } from 'react-icons/fa';

// Define interface for theme classes
interface ThemeClasses {
  border: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
  text: string;
  hoverBg: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Main navigation sections with updated content to match pages
  const navSections = [
    {
      id: "community",
      title: "Community",
      href: "/community",
      icon: User,
      description: "Connect with cybersecurity professionals and enthusiasts through our community platforms.",
      themeClasses: {
        border: "border-purple-500/20",
        gradientFrom: "from-purple-800/30",
        gradientTo: "to-gray-900/90",
        icon: "text-purple-400",
        text: "text-purple-400", // For section title/links if needed
        hoverBg: "hover:bg-purple-500/15",
        hoverText: "group-hover:text-purple-300"
      },
      items: [
        { title: "Discord Servers", desc: "Active discussion servers", icon: MessageSquare, href: "/community/discord" },
        { title: "Reddit Communities", desc: "Popular cybersecurity subreddits", icon: Users, href: "/community/reddit" },
        { title: "GitHub Resources", desc: "Open-source tools & projects", icon: Code, href: "/community/github" },
        { title: "Skool Communities", desc: "Structured learning groups", icon: Database, href: "/community/skool" },
      ]
    },
    {
      id: "insights",
      title: "Insights",
      href: "/insights",
      icon: Zap,
      description: "Explore the latest cybersecurity news, threats, and industry trends to stay informed.",
      themeClasses: {
        border: "border-cyan-500/20",
        gradientFrom: "from-cyan-800/30",
        gradientTo: "to-gray-900/90",
        icon: "text-cyan-400",
        text: "text-cyan-400",
        hoverBg: "hover:bg-cyan-500/15",
        hoverText: "group-hover:text-cyan-300"
      },
      items: [
        { title: "Cybersecurity News", desc: "Live feed and news sources", icon: Newspaper, href: "/insights/news" },
        { title: "Industry Insights", desc: "Sector-specific analysis", icon: Building, href: "/insights/industries" }, // Added
        { title: "Threat Intelligence", desc: "Current threats & attack vectors", icon: AlertTriangle, href: "/insights/threats" }, // Renamed from Threat Reports
        { title: "Security Breaches", desc: "Learn from past incidents", icon: Target, href: "/insights/breaches" }, // Added
        { title: "Emerging Trends", desc: "Future predictions & tech", icon: TrendingUp, href: "/insights/trends" }, // Added
        { title: "Research & Reports", desc: "Industry analysis & key reports", icon: FileText, href: "/insights/research" }, // Changed title here
      ]
    },
    {
      id: "academy",
      title: "Academy",
      href: "/academy",
      icon: Terminal,
      description: "Build your cybersecurity skills with structured learning paths, courses, and certifications.",
      themeClasses: {
        border: "border-green-500/20",
        gradientFrom: "from-green-800/30",
        gradientTo: "to-gray-900/90",
        icon: "text-green-400",
        text: "text-green-400",
        hoverBg: "hover:bg-green-500/15",
        hoverText: "group-hover:text-green-300"
      },
      items: [
        { title: "Learning Paths", desc: "Structured skill journeys", icon: GraduationCap, href: "/academy/paths" }, // Changed icon
        { title: "Tutorials", desc: "Step-by-step skill guides", icon: PenTool, href: "/academy/tutorials" }, // Added
        { title: "Labs & Exercises", desc: "Hands-on practice environments", icon: Code, href: "/academy/labs" }, // Changed icon, kept link
        { title: "YouTube Resources", desc: "Curated expert videos", icon: Youtube, href: "/academy/youtube" }, // Changed icon, kept link
        { title: "Documentation", desc: "Comprehensive guides & references", icon: FileText, href: "/academy/docs" }, // Added
        { title: "Cheatsheets", desc: "Quick reference guides", icon: BookOpen, href: "/academy/cheatsheets" }, // Added
        { title: "Learning Forums", desc: "Knowledge exchange forums", icon: Server, href: "/academy/forums" },
        { title: "Security Tools", desc: "Curated tools & resources", icon: Terminal, href: "/academy/tools" }
      ]
    }
  ];

  // Find the current section data based on activeDropdown
  const currentSection = navSections.find(sec => sec.id === activeDropdown);

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

  // Function to determine dropdown position - using page center calc
  const getDropdownPosition = (sectionId: string) => {
    return "left-[calc(50%-350px)]"; // Centers the 700px dropdown
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
        {/* Use theme color for accent line? Maybe later */} 
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

            {/* Desktop navbar links */} 
            <div className="hidden lg:flex items-center justify-center mx-auto space-x-10 lg:space-x-16">
              {navSections.map((section) => (
                <div 
                  key={section.id} 
                  onMouseEnter={() => handleMouseEnter(section.id)}
                  onMouseLeave={handleMouseLeave}
                  ref={el => navRefs.current[section.id] = el}
                >
                  <Link 
                    href={section.href}
                    className={`flex items-center gap-2 px-3 py-2 cursor-pointer ${
                      isActive(section.href)
                        ? `${section.themeClasses.text} font-semibold` // Use theme color for active link
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <section.icon className="w-4 h-4" />
                    <span>{section.title}</span>
                  </Link>

                  {/* Desktop Dropdown Menu - Themed */}
                  <AnimatePresence>
                    {currentSection && activeDropdown === section.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        // Use theme border color
                        className={`absolute ${getDropdownPosition(section.id)} mt-2 w-[700px] max-w-[95vw] bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl shadow-inner ${currentSection.themeClasses.border} overflow-hidden z-50 transform-origin-top`}
                      >
                        <div className="flex">
                          {/* Section overview - Use theme gradient and border */}
                          <div className={`w-1/4 p-6 bg-gradient-to-br ${currentSection.themeClasses.gradientFrom} ${currentSection.themeClasses.gradientTo} border-r ${currentSection.themeClasses.border}`}>
                            <div className="flex items-center gap-2 mb-2">
                              {/* Use theme icon color */}
                              <section.icon className={`w-5 h-5 ${currentSection.themeClasses.icon}`} /> 
                              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                            </div>
                            <p className="text-sm text-gray-300 mb-3">{section.description}</p>
                            <Link 
                              href={section.href} 
                              // Use theme text color and hover color
                              className={`inline-flex items-center text-sm ${currentSection.themeClasses.text} ${currentSection.themeClasses.hoverText} group`}
                            >
                              Explore all {section.title.toLowerCase()}
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                          
                          {/* Unified links grid - Use theme hover colors */}
                          <div className="w-3/4 p-5">
                            <div className="grid grid-cols-3 gap-4">
                              {section.items.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  // Use theme hover background and text color
                                  className={`flex items-center p-3 rounded-md ${currentSection.themeClasses.hoverBg} transition-all duration-150 group transform hover:scale-[1.02]`}
                                >
                                  <div className="flex-shrink-0 w-6 h-6 mr-2 flex items-center justify-center">
                                    {/* Use theme icon color and hover color */}
                                    <item.icon className={`w-5 h-5 ${currentSection.themeClasses.icon} ${currentSection.themeClasses.hoverText} transition-colors`} />
                                  </div>
                                  {/* Use theme hover text color */}
                                  <span className={`text-sm font-medium text-white ${currentSection.themeClasses.hoverText} transition-colors`}>{item.title}</span>
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
          {/* Mobile menu themeing can be added similarly if desired */} 
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
