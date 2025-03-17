"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, Menu, X, ChevronDown, Shield, Terminal, Zap, Server, Database, Code, Settings, Home, Heart, LogIn, UserPlus } from 'lucide-react';
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showDonateInfo, setShowDonateInfo] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Navigation sections with cybersecurity icons
  const navSections = [
    {
      id: "community",
      title: "Community",
      icon: User,
      description: "Connect with fellow cybersecurity enthusiasts, share knowledge, and participate in events. Build your network in the security community.",
      links: [
        { name: "GitHub Repositories", href: "/community/github" },
        { name: "Reddit", href: "/community/reddit" },
        { name: "Discord", href: "/community/discord" },
        { name: "Substack", href: "/community/substack" },
        { name: "LinkedIn", href: "/community/linkedin" },
        { name: "Skool", href: "/community/skool" },
        { name: "Forums & Blogs", href: "/community/forums" },
        { name: "Events", href: "/community/events" }
      ]
    },
    {
      id: "insights",
      title: "Insights",
      icon: Zap,
      description: "Stay informed with the latest cybersecurity news, trends, and research. Get expert analysis on emerging threats and industry developments.",
      links: [
        { name: "News & Updates", href: "/insights/news" },
        { name: "Research Papers", href: "/insights/research" },
        { name: "Case Studies", href: "/insights/cases" },
        { name: "Threat Reports", href: "/insights/threats" },
        { name: "Industry Trends", href: "/insights/industry" },
        { name: "Best Practices", href: "/insights/practices" },
        { name: "Threat Intelligence", href: "/insights/threats" }
      ]
    },
    {
      id: "academy",
      title: "Academy",
      icon: Terminal,
      description: "Learn cybersecurity through structured courses, hands-on labs, and guided career paths. Perfect for beginners and experienced professionals alike.",
      links: [
        { name: "Foundational", href: "/academy/foundational" },
        { name: "Intermediate", href: "/academy/intermediate" },
        { name: "Advanced", href: "/academy/advanced" },
        { name: "Courses", href: "/academy/courses" },
        { name: "YouTube", href: "/academy/youtube" },
        { name: "Projects & Labs", href: "/academy/labs" },
        { name: "Certifications", href: "/academy/certifications" },
        { name: "General", href: "/academy/general" }
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

  // Check if user is authenticated
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setUser(data.session?.user || null);
        setLoading(false);
        
        // Setup auth state change listener
        const { data: authListener } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            setUser(session?.user || null);
          }
        );
        
        return () => {
          if (authListener && authListener.subscription) {
            authListener.subscription.unsubscribe();
          }
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setActiveDropdown(null);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

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
        <div className="px-4 lg:px-8 py-4 flex justify-center items-center relative">
          {/* Logo with cybersecurity styling */}
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2 absolute left-4 lg:left-8 hover:opacity-80 transition-opacity" onClick={() => setActiveDropdown(null)}>
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Shield className="w-8 h-8 text-neon-blue absolute" />
              <div className="w-3 h-3 bg-neon-green absolute rounded-full blur-[2px] animate-pulse" />
              <Terminal className="w-4 h-4 text-white absolute" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-blue-400 drop-shadow-[0_0_2px_rgba(0,157,255,0.5)]">CYBERNEX</span>
              <span className="text-neon-green text-sm font-bold tracking-wide leading-none drop-shadow-[0_0_2px_rgba(80,255,170,0.5)]">ACADEMY</span>
            </div>
          </Link>

          {/* Desktop - Center section with nav sections */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className={`px-3 py-2 rounded-md transition-all duration-300 flex items-center gap-2 ${
              pathname === '/' 
                ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/40' 
                : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5 hover:border border-neon-blue/30'
            }`} onClick={() => setActiveDropdown(null)}>
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            {navSections.map((section) => (
              <div key={section.title} className="relative group">
                <button 
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
                    activeDropdown === section.id 
                      ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/40' 
                      : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5 hover:border border-neon-blue/30'
                  }`}
                  onClick={() => setActiveDropdown(activeDropdown === section.id ? null : section.id)}
                  onMouseEnter={() => setActiveDropdown(section.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  aria-expanded={activeDropdown === section.id}
                  aria-haspopup="true"
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
                      className="absolute z-10 left-0 mt-2 bg-black/90 backdrop-blur-md border border-neon-blue/30 rounded-md overflow-hidden shadow-xl shadow-neon-blue/20"
                      style={{ 
                        width: '800px', 
                        left: section.id === 'academy' ? 'auto' : 
                             section.id === 'insights' ? '-150px' : '0',
                        right: section.id === 'academy' ? '0' : 'auto'
                      }}
                      onMouseEnter={() => setActiveDropdown(section.id)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="flex p-6">
                        {/* Section Overview */}
                        <div className="w-1/3 border-r border-neon-blue/30 pr-6">
                          <h3 className="text-lg font-semibold text-neon-blue mb-2 flex items-center gap-2">
                            <section.icon className="w-5 h-5" />
                            {section.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {section.description}
                          </p>
                        </div>
                        
                        {/* Links */}
                        <div className="w-2/3 pl-6">
                          <div className="grid grid-cols-2 gap-4">
                            {section.links.map((link) => (
                              <Link 
                                key={link.name}
                                href={link.href} 
                                className={`flex items-center px-4 py-3 rounded-md ${
                                  isActive(link.href) 
                                    ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/40 font-medium' 
                                    : 'text-gray-300 border border-transparent hover:text-white hover:border-neon-blue/30 hover:bg-neon-blue/5'
                                } transition-all duration-200 relative group overflow-hidden`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {/* Animated highlight effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/5 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%] pointer-events-none"></div>
                                
                                {/* Icon based on link name */}
                                <div className="mr-3 text-neon-blue">
                                  {link.name.includes("GitHub") && <Code className="w-4 h-4" />}
                                  {link.name.includes("Reddit") && <User className="w-4 h-4" />}
                                  {link.name.includes("Discord") && <Zap className="w-4 h-4" />}
                                  {link.name.includes("Substack") && <Server className="w-4 h-4" />}
                                  {link.name.includes("LinkedIn") && <User className="w-4 h-4" />}
                                  {link.name.includes("Skool") && <Database className="w-4 h-4" />}
                                  {link.name.includes("Forums") && <User className="w-4 h-4" />}
                                  {link.name.includes("Events") && <Zap className="w-4 h-4" />}
                                  
                                  {link.name.includes("News") && <Zap className="w-4 h-4" />}
                                  {link.name.includes("Research") && <Code className="w-4 h-4" />}
                                  {link.name.includes("Case") && <Server className="w-4 h-4" />}
                                  {link.name.includes("Threat") && <Shield className="w-4 h-4" />}
                                  {link.name.includes("Industry") && <Database className="w-4 h-4" />}
                                  {link.name.includes("Practices") && <Terminal className="w-4 h-4" />}
                                  
                                  {link.name.includes("Foundational") && <Shield className="w-4 h-4" />}
                                  {link.name.includes("Intermediate") && <Server className="w-4 h-4" />}
                                  {link.name.includes("Advanced") && <Terminal className="w-4 h-4" />}
                                  {link.name.includes("Courses") && <Code className="w-4 h-4" />}
                                  {link.name.includes("YouTube") && <Zap className="w-4 h-4" />}
                                  {link.name.includes("Paths") && <Database className="w-4 h-4" />}
                                  {link.name.includes("Labs") && <Terminal className="w-4 h-4" />}
                                  {link.name.includes("Roadmaps") && <Zap className="w-4 h-4" />}
                                  {link.name.includes("Certifications") && <Lock className="w-4 h-4" />}
                                  {link.name.includes("General") && <Shield className="w-4 h-4" />}
                                </div>
                                
                                <div className="flex flex-col">
                                  <span className="text-base font-medium">{link.name}</span>
                                  
                                  {/* Add subtle description based on section and link name */}
                                  <span className="text-xs text-gray-400 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity">
                                    {section.id === 'community' && link.name.includes("GitHub") && "Open source security tools"}
                                    {section.id === 'community' && link.name.includes("Reddit") && "Cybersecurity discussions"}
                                    {section.id === 'community' && link.name.includes("Discord") && "Cybersecurity communities"}
                                    {section.id === 'community' && link.name.includes("Substack") && "Weekly newsletters"}
                                    {section.id === 'community' && link.name.includes("LinkedIn") && "Professional networking"}
                                    {section.id === 'community' && link.name.includes("Skool") && "Learning community"}
                                    {section.id === 'community' && link.name.includes("Forums") && "Q&A discussions"}
                                    {section.id === 'community' && link.name.includes("Events") && "Online/in-person meetings"}
                                    
                                    {section.id === 'insights' && link.name.includes("News") && "Latest security updates"}
                                    {section.id === 'insights' && link.name.includes("Research") && "Academic publications"}
                                    {section.id === 'insights' && link.name.includes("Case") && "Real-world scenarios"}
                                    {section.id === 'insights' && link.name.includes("Threat") && "Current security threats"}
                                    {section.id === 'insights' && link.name.includes("Industry") && "Market developments"}
                                    {section.id === 'insights' && link.name.includes("Practices") && "Security guidelines"}
                                    
                                    {section.id === 'academy' && link.name.includes("Foundational") && "Beginner-friendly courses"}
                                    {section.id === 'academy' && link.name.includes("Intermediate") && "Build on basics"}
                                    {section.id === 'academy' && link.name.includes("Advanced") && "Expert-level training"}
                                    {section.id === 'academy' && link.name.includes("Courses") && "Structured learning"}
                                    {section.id === 'academy' && link.name.includes("YouTube") && "Video tutorials and demos"}
                                    {section.id === 'academy' && link.name.includes("Labs") && "Hands-on exercises"}
                                    {section.id === 'academy' && link.name.includes("Certifications") && "Industry credentials"}
                                    {section.id === 'academy' && link.name.includes("General") && "Essential resources"}
                                  </span>
                                </div>
                                
                                {/* Active indicator dot */}
                                {isActive(link.href) && (
                                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-blue animate-pulse"></div>
                                )}
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

          {/* Desktop - Right section with user actions */}
          <div className="hidden lg:flex items-center gap-3 absolute right-4 lg:right-8">
            <div className="relative">
              <button 
                className="flex items-center gap-2 text-white px-4 py-2 rounded-md transition-all duration-300 border border-transparent hover:border-pink-500/50 hover:bg-pink-500/10 group"
                onMouseEnter={() => setShowDonateInfo(true)}
                onMouseLeave={() => setShowDonateInfo(false)}
              >
                <Heart className="w-4 h-4 text-pink-400 group-hover:text-pink-300" />
                <span className="group-hover:text-pink-300">Donate</span>
              </button>

              <AnimatePresence>
                {showDonateInfo && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute right-0 mt-2 w-80 p-4 bg-black/90 backdrop-blur-md border border-pink-500/30 rounded-md shadow-xl shadow-pink-500/10"
                    onMouseEnter={() => setShowDonateInfo(true)}
                    onMouseLeave={() => setShowDonateInfo(false)}
                  >
                    <h4 className="text-pink-400 font-semibold mb-2 flex items-center gap-2">
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
                    <div className="flex flex-col space-y-2">
                      <Link 
                        href="https://buy.stripe.com/9AQ5lrdly9Dg3Oo28b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-3 rounded-md transition-colors"
                      >
                        <Heart className="w-5 h-5" />
                        <span>Donate</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Conditional navigation based on auth state */}
            {loading ? (
              <div className="w-20 h-10 bg-gray-800/50 animate-pulse rounded-md"></div>
            ) : user ? (
              <div className="flex items-center gap-3">
                <Link href="/dashboard" 
                  className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 rounded-md transition-all duration-300 border border-neon-blue/30 hover:border-neon-blue/50 hover:bg-neon-blue/10"
                >
                  <Settings className="w-4 h-4 text-neon-blue" />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 rounded-md transition-all duration-300 border border-red-500/30 hover:border-red-500/50 hover:bg-red-500/10"
                >
                  <LogIn className="w-4 h-4 rotate-180 text-red-400" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link 
                  href="/auth/login" 
                  className="flex items-center gap-2 text-white font-medium px-4 py-2 rounded-md transition-all duration-300 border-2 border-neon-blue/70 hover:border-neon-blue hover:bg-neon-blue/10"
                >
                  <LogIn className="w-4 h-4 text-neon-blue" />
                  <span>Login</span>
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="flex items-center gap-2 text-white font-medium px-4 py-2 rounded-md transition-all duration-300 bg-neon-blue/20 border-2 border-neon-blue/70 hover:border-neon-blue hover:bg-neon-blue/30"
                >
                  <UserPlus className="w-4 h-4 text-neon-blue" />
                  <span>Sign Up</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-neon-blue border border-transparent hover:border-neon-blue/30 rounded-md transition-all bg-black/30"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
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
              className="lg:hidden bg-black/95 backdrop-blur-md border-t border-neon-blue/30 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-6">
                <Link
                  href="/"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                    pathname === '/'
                      ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/40'
                      : 'text-gray-300 border border-transparent hover:text-neon-blue hover:border-neon-blue/30 hover:bg-neon-blue/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </Link>
                
                {/* Mobile nav sections */}
                {navSections.map((section) => (
                  <div key={section.title} className="space-y-2">
                    <h3 className="flex items-center text-neon-blue font-medium px-4 py-2 bg-neon-blue/5 rounded-md border border-neon-blue/20">
                      <section.icon className="w-5 h-5 mr-2" />
                      {section.title}
                    </h3>
                    <div className="pl-4 space-y-1 border-l border-neon-blue/30">
                      {section.links.map((link) => (
                        <Link 
                          key={link.name}
                          href={link.href} 
                          className={`block py-2 px-4 rounded-md ${
                            isActive(link.href) 
                              ? 'text-neon-green bg-neon-blue/10 border border-neon-blue/30 font-medium' 
                              : 'text-gray-300 hover:text-white hover:bg-neon-blue/5 hover:border border-neon-blue/20'
                          } transition-colors flex items-center`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {/* Icon based on link name */}
                          <div className="mr-3 text-neon-blue">
                            {link.name.includes("GitHub") && <Code className="w-4 h-4" />}
                            {link.name.includes("Reddit") && <User className="w-4 h-4" />}
                            {link.name.includes("Discord") && <Zap className="w-4 h-4" />}
                            {link.name.includes("Substack") && <Server className="w-4 h-4" />}
                            {link.name.includes("LinkedIn") && <User className="w-4 h-4" />}
                            {link.name.includes("Skool") && <Database className="w-4 h-4" />}
                            {link.name.includes("Forums") && <User className="w-4 h-4" />}
                            {link.name.includes("Events") && <Zap className="w-4 h-4" />}
                            
                            {link.name.includes("News") && <Zap className="w-4 h-4" />}
                            {link.name.includes("Research") && <Code className="w-4 h-4" />}
                            {link.name.includes("Case") && <Server className="w-4 h-4" />}
                            {link.name.includes("Threat") && <Shield className="w-4 h-4" />}
                            {link.name.includes("Industry") && <Database className="w-4 h-4" />}
                            {link.name.includes("Practices") && <Terminal className="w-4 h-4" />}
                            
                            {link.name.includes("Foundational") && <Shield className="w-4 h-4" />}
                            {link.name.includes("Intermediate") && <Server className="w-4 h-4" />}
                            {link.name.includes("Advanced") && <Terminal className="w-4 h-4" />}
                            {link.name.includes("Courses") && <Code className="w-4 h-4" />}
                            {link.name.includes("YouTube") && <Zap className="w-4 h-4" />}
                            {link.name.includes("Paths") && <Database className="w-4 h-4" />}
                            {link.name.includes("Labs") && <Terminal className="w-4 h-4" />}
                            {link.name.includes("Roadmaps") && <Zap className="w-4 h-4" />}
                            {link.name.includes("Certifications") && <Lock className="w-4 h-4" />}
                            {link.name.includes("General") && <Shield className="w-4 h-4" />}
                          </div>
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Update Mobile auth section based on auth state */}
                <div className="pt-4 border-t border-neon-blue/30 space-y-3">
                  {loading ? (
                    <div className="w-full h-12 bg-gray-800/50 animate-pulse rounded-md"></div>
                  ) : user ? (
                    <>
                      <Link 
                        href="/dashboard" 
                        className="flex items-center gap-2 px-4 py-3 bg-black/50 border-2 border-neon-blue/50 rounded-md w-full hover:bg-neon-blue/10 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Settings className="w-5 h-5 text-neon-blue" />
                        <span className="text-white">Dashboard</span>
                      </Link>
                      
                      <button 
                        onClick={() => {
                          handleSignOut();
                          setMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-2 px-4 py-3 bg-black/50 border-2 border-red-500/40 rounded-md w-full hover:bg-red-500/10 transition-colors"
                      >
                        <LogIn className="w-5 h-5 text-red-400 rotate-180" />
                        <span className="text-white">Sign Out</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link 
                        href="/auth/login" 
                        className="flex items-center gap-2 px-4 py-3 bg-black/50 border-2 border-neon-blue/50 rounded-md w-full hover:bg-neon-blue/10 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <LogIn className="w-5 h-5 text-neon-blue" />
                        <span className="text-white font-medium">Login</span>
                      </Link>
                      
                      <Link 
                        href="/auth/signup" 
                        className="flex items-center justify-center gap-2 bg-neon-blue/20 border-2 border-neon-blue/50 text-white font-medium px-4 py-3 rounded-md w-full hover:bg-neon-blue/30 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <UserPlus className="w-5 h-5 text-neon-blue" />
                        <span>Sign Up</span>
                      </Link>
                    </>
                  )}
                </div>

                {/* Add donation section to mobile menu */}
                <div className="pt-4 border-t border-pink-500/30">
                  <div className="px-4 py-3 bg-black/30 rounded-md border border-pink-500/20">
                    <h4 className="text-pink-400 font-semibold mb-2 flex items-center gap-2">
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
                    <div className="flex flex-col space-y-2">
                      <Link 
                        href="https://buy.stripe.com/9AQ5lrdly9Dg3Oo28b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-3 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Heart className="w-5 h-5" />
                        <span>Donate</span>
                      </Link>
                    </div>
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