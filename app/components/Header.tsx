"use client";

import Link from "next/link";
import { Shield, ChevronDown, Menu, X, User, LogIn, UserPlus, Lock } from 'lucide-react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdownLinks = {
    learning: [
      { href: "/learning/courses", label: "Courses" },
      { href: "/learning/paths", label: "Learning Paths" },
      { href: "/learning/labs", label: "Hands-On Labs" },
      { href: "/learning/certifications", label: "Certifications" },
    ],
    community: [
      { href: "/community/forum", label: "Discussion Forum" },
      { href: "/community/events", label: "Events" },
      { href: "/community/mentorship", label: "Mentorship" },
    ],
    resources: [
      { href: "/resources/tools", label: "Tools" },
      { href: "/resources/blog", label: "Blog" },
      { href: "/resources/help", label: "Help Center" },
    ]
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: 'auto',
      transition: {
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-dark/80 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Shield className="w-8 h-8 text-neon-blue mr-2 transition-all group-hover:shadow-neon-blue" />
              <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-display font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-primary-500">
              CyberNex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav 
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="hidden md:block"
          >
            <ul className="flex space-x-8">
              {Object.entries(dropdownLinks).map(([key, links]) => (
                <motion.li key={key} className="relative" variants={itemVariants}>
                  <button
                    className={`flex items-center py-2 px-1 hover:text-neon-blue transition-colors duration-300 border-b-2 ${
                      activeDropdown === key ? "border-neon-blue text-neon-blue" : "border-transparent"
                    }`}
                    onClick={() => toggleDropdown(key)}
                    aria-expanded={activeDropdown === key}
                  >
                    <span className="mr-1 first-letter:uppercase">{key}</span> 
                    <motion.div
                      animate={{ rotate: activeDropdown === key ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === key && (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute left-0 mt-2 w-56 bg-dark-card/90 backdrop-blur-sm rounded-md shadow-lg border border-dark-border z-50 overflow-hidden"
                      >
                        {links.map((link) => (
                          <li key={link.href}>
                            <Link 
                              href={link.href} 
                              className="block px-4 py-3 hover:bg-neon-blue/10 hover:text-neon-blue transition-colors duration-200"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
              <motion.li variants={itemVariants}>
                <Link 
                  href="/about" 
                  className={`block py-2 px-1 hover:text-neon-blue transition-colors duration-300 border-b-2 ${
                    pathname === '/about' ? "border-neon-blue text-neon-blue" : "border-transparent"
                  }`}
                >
                  About
                </Link>
              </motion.li>
            </ul>
          </motion.nav>

          {/* Auth buttons for desktop */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="hidden md:flex items-center space-x-2"
          >
            <motion.div variants={itemVariants}>
              <Link 
                href="/auth/login" 
                className="flex items-center py-2 px-4 rounded-md border border-neon-blue/30 hover:border-neon-blue/80 hover:text-neon-blue transition-all duration-300"
              >
                <LogIn className="w-4 h-4 mr-2" />
                <span>Log In</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="/auth/register"
                className="cyber-btn"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                <span>Sign Up</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-dark-lighter transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-card/95 backdrop-blur-md border-t border-dark-border shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <motion.ul 
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className="space-y-1"
              >
                {Object.entries(dropdownLinks).map(([key, links]) => (
                  <motion.li key={key} variants={itemVariants}>
                    <button
                      className="flex items-center justify-between w-full py-3 px-2 rounded-md hover:bg-dark-lighter/50"
                      onClick={() => toggleDropdown(key)}
                    >
                      <span className="font-medium first-letter:uppercase">{key}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === key ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-neon-blue/70" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === key && (
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="pl-4 mt-1 mb-2 space-y-1 border-l border-dark-border"
                        >
                          {links.map((link) => (
                            <motion.li key={link.href} variants={itemVariants}>
                              <Link href={link.href} className="block py-2 px-2 rounded-md hover:bg-dark-lighter/50">
                                {link.label}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
                <motion.li variants={itemVariants}>
                  <Link href="/about" className="block py-3 px-2 rounded-md hover:bg-dark-lighter/50">
                    About
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants} className="pt-4">
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <Link href="/auth/login" className="flex items-center justify-center py-2 px-4 rounded-md bg-dark-lighter hover:bg-dark-lighter/70 border border-dark-border transition-colors">
                      <LogIn className="w-4 h-4 mr-2" />
                      <span>Log In</span>
                    </Link>
                    <Link
                      href="/auth/register"
                      className="flex items-center justify-center py-2 px-4 bg-primary-600 hover:bg-primary-500 text-white rounded-md transition-colors"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      <span>Sign Up</span>
                    </Link>
                  </div>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom border/glow effect */}
      <div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-neon-blue to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
    </header>
  );
};

export default Header;