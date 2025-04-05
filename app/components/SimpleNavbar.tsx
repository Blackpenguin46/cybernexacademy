"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X, Terminal, Zap, Settings, Home, Heart, LogIn, UserPlus } from 'lucide-react';
import { supabase } from "@/lib/supabase";

export default function SimpleNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Main navigation sections
  const navSections = [
    {
      id: "community",
      title: "Community",
      href: "/community",
      icon: User,
    },
    {
      id: "insights",
      title: "Insights",
      href: "/insights",
      icon: Zap,
    },
    {
      id: "academy",
      title: "Academy",
      href: "/academy",
      icon: Terminal,
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
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80"></div>
      
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-white flex items-center gap-2">
            <div className="bg-blue-500/20 rounded-full p-1.5">
              <Terminal className="w-5 h-5 text-blue-500" />
            </div>
            <span className="hidden md:inline">CyberNex</span>
          </a>

          {/* Desktop navbar links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className={`px-3 py-2 ${isActive('/') ? 'text-blue-500' : 'text-gray-300 hover:text-white'}`}>
              <span className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Home
              </span>
            </a>
            
            {navSections.map((section) => (
              <a 
                key={section.id}
                href={section.href}
                className={`px-3 py-2 ${isActive(section.href) ? 'text-blue-500' : 'text-gray-300 hover:text-white'}`}
              >
                <span className="flex items-center">
                  <section.icon className="w-4 h-4 mr-2" />
                  {section.title}
                </span>
              </a>
            ))}
          </div>

          {/* Right actions section */}
          <div className="flex items-center space-x-4">
            {/* Donate button */}
            <a 
              href="https://buy.stripe.com/9AQ5lrdly9Dg3Oo28b"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-white px-4 py-2 rounded-md transition-all duration-300 border border-pink-500/50 hover:bg-pink-500/10 group"
            >
              <Heart className="w-4 h-4 text-pink-400 group-hover:text-pink-300" />
              <span className="group-hover:text-pink-300">Donate</span>
            </a>

            {/* Authentication buttons */}
            {loading ? (
              <div className="w-20 h-10 bg-gray-800/50 animate-pulse rounded-md"></div>
            ) : user ? (
              <div className="flex items-center gap-3">
                <a href="/dashboard" 
                  className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 rounded-md transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/10"
                >
                  <Settings className="w-4 h-4 text-blue-500" />
                  <span>Dashboard</span>
                </a>
                
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 rounded-md transition-all duration-300 border border-red-500/30 hover:border-red-500/50 hover:bg-red-500/10"
                >
                  <LogIn className="w-4 h-4 rotate-180 text-red-400" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <a 
                href="/auth/signup" 
                className="flex items-center gap-2 text-white font-medium px-5 py-2.5 rounded-md transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
              >
                <UserPlus className="w-4 h-4 text-white" />
                <span>Join Now</span>
              </a>
            )}

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-blue-500 border border-transparent hover:border-blue-500/30 rounded-md transition-all bg-black/30"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? 
                <X className="w-6 h-6" aria-hidden="true" /> : 
                <Menu className="w-6 h-6" aria-hidden="true" />
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
              id="mobile-menu"
            >
              <div className="px-4 py-6 space-y-4">
                <a
                  href="/"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                    pathname === '/' ? 'text-blue-500 bg-blue-500/10 border border-blue-500/40' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </a>
                
                {/* Mobile nav sections */}
                {navSections.map((section) => (
                  <a
                    key={section.id}
                    href={section.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                      isActive(section.href) ? 'text-blue-500 bg-blue-500/10 border border-blue-500/40' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    <span>{section.title}</span>
                  </a>
                ))}

                {/* Mobile auth section */}
                <div className="pt-4 border-t border-blue-500/30 space-y-3">
                  {loading ? (
                    <div className="w-full h-12 bg-gray-800/50 animate-pulse rounded-md"></div>
                  ) : user ? (
                    <>
                      <a 
                        href="/dashboard" 
                        className="flex items-center gap-2 px-4 py-3 bg-black/50 border-2 border-blue-500/50 rounded-md w-full hover:bg-blue-500/10 transition-colors"
                      >
                        <Settings className="w-5 h-5 text-blue-500" />
                        <span className="text-white">Dashboard</span>
                      </a>
                      
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
                    <a 
                      href="/auth/signup" 
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-2 border-transparent text-white font-medium px-4 py-3 rounded-md w-full transition-colors shadow-lg"
                    >
                      <UserPlus className="w-5 h-5 text-white" />
                      <span>Join Now</span>
                    </a>
                  )}
                </div>

                {/* Mobile donate section */}
                <div className="pt-4 border-t border-pink-500/30">
                  <a 
                    href="https://buy.stripe.com/9AQ5lrdly9Dg3Oo28b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-black/50 border-2 border-pink-500/40 rounded-md w-full hover:bg-pink-500/10 transition-colors"
                  >
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-white">Support Our Mission</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 