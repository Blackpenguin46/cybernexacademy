"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavigation, featuredLinks, utilityLinks } from '../config/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
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
        duration: 0.15
      }
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`fixed top-16 md:top-20 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-card/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-12">
          {/* Left Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex-1 flex items-center space-x-6"
          >
            {featuredLinks.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link 
                  href={link.href} 
                  className={`flex items-center px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href) 
                      ? 'text-neon-blue bg-neon-blue/10' 
                      : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
                  }`}
                >
                  {link.icon && <link.icon className="w-4 h-4 mr-1.5" />}
                  <span>{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Section - Main Navigation */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex-1 hidden md:flex items-center justify-center space-x-8"
          >
            {mainNavigation.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center px-1 py-1 text-sm font-medium border-b-2 transition-colors ${
                    isActive(item.href)
                      ? 'text-neon-blue border-neon-blue' 
                      : 'text-gray-300 border-transparent hover:text-neon-blue hover:border-neon-blue/30'
                  }`}
                >
                  {item.name}
                  {item.items && (
                    <motion.div
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-1"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  )}
                </Link>

                <AnimatePresence>
                  {item.items && activeDropdown === item.name && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-52 rounded-md overflow-hidden shadow-cyber bg-dark-card/90 backdrop-blur-sm border border-dark-border"
                    >
                      <div className="py-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`flex items-center px-4 py-2 text-sm transition-colors ${
                              isActive(subItem.href)
                                ? 'text-neon-blue bg-neon-blue/10'
                                : 'text-gray-300 hover:bg-dark-lighter hover:text-neon-blue'
                            }`}
                          >
                            {subItem.icon && <span className="mr-2 text-neon-blue/70"><subItem.icon className="w-4 h-4" /></span>}
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex-1 flex items-center justify-end space-x-6"
          >
            {utilityLinks.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link 
                  href={link.href} 
                  className={`flex items-center px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href) 
                      ? 'text-neon-blue bg-neon-blue/10' 
                      : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
                  }`}
                >
                  {link.icon && <link.icon className="w-4 h-4 mr-1.5" />}
                  <span>{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-card/90 backdrop-blur-md border-t border-dark-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-3">
              <div className="grid grid-cols-2 gap-3 p-2 border-b border-dark-border">
                {featuredLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-dark-lighter/50 hover:bg-dark-lighter transition-colors"
                  >
                    {link.icon && <link.icon className="w-4 h-4 mr-2 text-neon-blue/70" />}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
              
              {mainNavigation.map((item) => (
                <div key={item.name} className="px-2">
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md font-medium transition-colors ${
                      isActive(item.href) 
                        ? 'text-neon-blue bg-neon-blue/10' 
                        : 'text-gray-200 hover:bg-dark-lighter/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.items && (
                    <div className="mt-1 pl-4 space-y-1 border-l border-dark-border">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive(subItem.href) 
                              ? 'text-neon-blue bg-neon-blue/10' 
                              : 'text-gray-400 hover:text-gray-200 hover:bg-dark-lighter/50'
                          }`}
                        >
                          {subItem.icon && <span className="mr-2 text-neon-blue/70"><subItem.icon className="w-4 h-4" /></span>}
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="grid grid-cols-2 gap-3 p-2 border-t border-dark-border">
                {utilityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium bg-dark-lighter/50 hover:bg-dark-lighter transition-colors"
                  >
                    {link.icon && <link.icon className="w-4 h-4 mr-2 text-neon-blue/70" />}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Bottom accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-dark-border to-transparent"></div>
    </nav>
  );
} 