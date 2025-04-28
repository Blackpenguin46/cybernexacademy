"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X, Terminal, Zap, Home, Heart, ChevronDown, MessageSquare, Code, Award, BookOpen, AlertTriangle, Newspaper, LineChart, ArrowRight, Linkedin, Users, MessageCircle, Server, Building, Target, TrendingUp, Lightbulb, PenTool, FileText, GraduationCap, Youtube, Database } from 'lucide-react';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { FaDiscord, FaReddit, FaGithub } from 'react-icons/fa';
import { createClient } from '@/lib/supabase/client';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';

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
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const supabase = createClient();
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null); // State for mobile accordion
  
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

  // Fetch user session on mount
  useEffect(() => {
    const fetchUser = async () => {
      setLoadingUser(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("Error fetching user session:", error);
        setUser(null);
      } finally {
        setLoadingUser(false);
      }
    };

    fetchUser();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoadingUser(false); // Update loading state on change
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase]);

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

  // Active link detection - highlight section if on sub-page
  const isActive = (href: string) => {
    // Handle homepage separately
    if (href === '/') {
      return pathname === '/';
    }
    // Check if the current pathname starts with the link's base path
    // Ensure a trailing slash for base path comparison if necessary, 
    // or handle specific base paths more robustly if needed.
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
              {navSections.map((section) => {
                const active = isActive(section.href);
                return (
                  <div 
                    key={section.id} 
                    onMouseEnter={() => handleMouseEnter(section.id)}
                    onMouseLeave={handleMouseLeave}
                    ref={el => navRefs.current[section.id] = el}
                    className="relative" // Needed for absolute positioning of border
                  >
                    <Link 
                      href={section.href}
                      className={`flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors duration-200 ${
                        active
                          ? `${section.themeClasses.text} font-semibold` // Use theme color for active link
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      <span>{section.title}</span>
                    </Link>
                    {/* Active link indicator (bottom border) */}
                    {active && (
                      <motion.div 
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${section.themeClasses.icon.replace('text-', 'bg-')}`}
                        layoutId="activeLinkBorder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

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
                );
              })}
            </div>

            {/* User Auth Section (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4 ml-auto">
              {loadingUser ? (
                <div className="h-8 w-20 bg-gray-700 rounded animate-pulse"></div> // Placeholder
              ) : user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-gray-700/50">
                      {/* Basic user icon for now, could use profile avatar later */}
                      <User className="h-5 w-5 text-gray-300" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700 text-white" align="end" forceMount>
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-800 focus:bg-gray-800">
                      <Link href="/dashboard">Dashboard</Link> {/* Assuming /dashboard exists */}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-800 focus:bg-gray-800">
                      <button onClick={async () => { await supabase.auth.signOut(); setUser(null); }} className="w-full text-left">
                        Log out
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Log In
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */} 
            <div className="lg:hidden flex items-center ml-auto">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */} 
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                id="mobile-menu"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="lg:hidden bg-gray-900/95 backdrop-blur-md overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
                  {/* Mobile Nav Links with Accordion */}
                  {navSections.map((section) => {
                    const isSectionActive = isActive(section.href); // Check if the main section path is active
                    const isAccordionOpen = openMobileSection === section.id;
                    return (
                      <div key={section.id} className="mb-1">
                        {/* Button to toggle accordion */}
                        <button
                          onClick={() => setOpenMobileSection(isAccordionOpen ? null : section.id)}
                          className={`flex items-center justify-between w-full gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${ 
                            isSectionActive && !isAccordionOpen // Highlight only if section active AND accordion closed
                              ? `bg-gray-800 ${section.themeClasses.text}`
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          }`}
                          aria-expanded={isAccordionOpen}
                          aria-controls={`mobile-submenu-${section.id}`}
                        >
                          <div className="flex items-center gap-2">
                            <section.icon className="w-5 h-5" />
                            <span>{section.title}</span>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 transition-transform duration-200 ${isAccordionOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        {/* Submenu Items */}
                        <AnimatePresence initial={false}>
                          {isAccordionOpen && (
                            <motion.div
                              id={`mobile-submenu-${section.id}`}
                              key="content"
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] } },
                                collapsed: { opacity: 0, height: 0, transition: { duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] } }
                              }}
                              className="overflow-hidden pl-6 mt-1 space-y-1"
                            >
                              {/* Link to main section page first */}
                              <Link
                                href={section.href}
                                className={`block pl-5 pr-3 py-2 rounded-md text-sm font-medium transition-colors ${ 
                                  pathname === section.href // Exact match for section index
                                    ? `${section.themeClasses.text} bg-gray-700/50`
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                                onClick={() => setMobileMenuOpen(false)} // Close main menu on click
                              >
                                All {section.title}
                              </Link>
                              {/* Sub-item links */}
                              {section.items.map((item) => {
                                const subItemActive = pathname === item.href;
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-2 pl-5 pr-3 py-2 rounded-md text-sm font-medium transition-colors ${ 
                                      subItemActive
                                        ? `${section.themeClasses.text} bg-gray-700/50`
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)} // Close main menu on click
                                  >
                                    <item.icon className={`w-4 h-4 ${subItemActive ? section.themeClasses.text : 'text-gray-500'}`} />
                                    {item.title}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                  
                  {/* Mobile User Auth Section */}
                  <div className="border-t border-gray-700 pt-4 mt-4">
                    {loadingUser ? (
                      <div className="h-8 w-full bg-gray-700 rounded animate-pulse mb-2"></div> // Placeholder
                    ) : user ? (
                      <div className="px-3 py-2">
                        <p className="text-sm text-gray-400 mb-2">Signed in as {user.email}</p>
                        <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</Link>
                        <button 
                          onClick={async () => { await supabase.auth.signOut(); setUser(null); }} 
                          className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Log out
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2 px-3">
                        <Link href="/auth/login">
                          <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                            Log In
                          </Button>
                        </Link>
                        <Link href="/auth/signup">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Sign Up
                          </Button>
                        </Link>
                      </div>
                    )}
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
