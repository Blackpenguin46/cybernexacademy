"use client";

import Link from "next/link";
import { Shield, LogIn, UserPlus } from 'lucide-react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { mainNavigation } from '../config/navigation';

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
              {mainNavigation.map((item) => (
                <motion.li key={item.name} className="relative" variants={itemVariants}>
                  <button
                    className={`flex items-center py-2 px-1 hover:text-neon-blue transition-colors duration-300 border-b-2 ${
                      activeDropdown === item.name ? "border-neon-blue text-neon-blue" : "border-transparent"
                    }`}
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={activeDropdown === item.name}
                  >
                    <span className="mr-1">{item.name}</span> 
                    {item.items && (
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    )}
                  </button>
                  <AnimatePresence>
                    {item.items && activeDropdown === item.name && (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute left-0 mt-2 w-56 bg-dark-card/90 backdrop-blur-sm rounded-md shadow-lg border border-dark-border z-50 overflow-hidden"
                      >
                        {item.items.map((link) => (
                          <li key={link.href}>
                            <Link 
                              href={link.href} 
                              className="block px-4 py-3 hover:bg-neon-blue/10 hover:text-neon-blue transition-colors duration-200"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
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
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
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
                {mainNavigation.map((item) => (
                  <motion.li key={item.name} variants={itemVariants}>
                    <button
                      className="flex items-center justify-between w-full py-3 px-2 rounded-md hover:bg-dark-lighter/50"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.items && (
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="w-5 h-5 text-neon-blue/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      )}
                    </button>
                    <AnimatePresence>
                      {item.items && activeDropdown === item.name && (
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="pl-4 mt-1 mb-2 space-y-1 border-l border-dark-border"
                        >
                          {item.items.map((link) => (
                            <motion.li key={link.href} variants={itemVariants}>
                              <Link href={link.href} className="block py-2 px-2 rounded-md hover:bg-dark-lighter/50">
                                {link.name}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
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