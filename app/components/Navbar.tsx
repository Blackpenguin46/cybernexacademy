"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, HelpCircle, Zap, TrendingUp, FileText } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  {
    name: 'Learning',
    href: '/learning',
    items: [
      { name: 'Courses', href: '/learning/courses', icon: <FileText className="w-4 h-4" /> },
      { name: 'Labs', href: '/learning/labs', icon: <Zap className="w-4 h-4" /> },
      { name: 'Certifications', href: '/learning/certifications', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    name: 'Community',
    href: '/community',
    items: [
      { name: 'Forums', href: '/community/forums', icon: <FileText className="w-4 h-4" /> },
      { name: 'Events', href: '/community/events', icon: <FileText className="w-4 h-4" /> },
      { name: 'Blog', href: '/community/blog', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    items: [
      { name: 'Tools', href: '/resources/tools', icon: <FileText className="w-4 h-4" /> },
      { name: 'Documentation', href: '/resources/docs', icon: <FileText className="w-4 h-4" /> },
      { name: 'Support', href: '/resources/support', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  { name: 'About', href: '/about' },
];

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
            <motion.div variants={itemVariants}>
              <Link 
                href="/featured" 
                className={`flex items-center px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                  isActive('/featured') 
                    ? 'text-neon-blue bg-neon-blue/10' 
                    : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
                }`}
              >
                <Zap className="w-4 h-4 mr-1.5" />
                <span>Featured</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link 
                href="/trending" 
                className={`flex items-center px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                  isActive('/trending') 
                    ? 'text-neon-blue bg-neon-blue/10' 
                    : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
                }`}
              >
                <TrendingUp className="w-4 h-4 mr-1.5" />
                <span>Trending</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Center Section - Main Navigation */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex-1 hidden md:flex items-center justify-center space-x-8"
          >
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
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
                            key={subItem.name}
                            href={subItem.href}
                            className={`flex items-center px-4 py-2 text-sm transition-colors ${
                              isActive(subItem.href)
                                ? 'text-neon-blue bg-neon-blue/10'
                                : 'text-gray-300 hover:bg-dark-lighter hover:text-neon-blue'
                            }`}
                          >
                            <span className="mr-2 text-neon-blue/70">{subItem.icon}</span>
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
            <motion.div variants={itemVariants}>
              <Link 
                href="/search" 
                className={`flex items-center px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                  isActive('/search') 
                    ? 'text-neon-blue bg-neon-blue/10' 
                    : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
                }`}
              >
                <Search className="w-4 h-4 mr-1.5" />
                <span>Search</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link 
                href="/help" 
                className={`flex items-center px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                  isActive('/help') 
                    ? 'text-neon-blue bg-neon-blue/10' 
                    : 'text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5'
                }`}
              >
                <HelpCircle className="w-4 h-4 mr-1.5" />
                <span>Help</span>
              </Link>
            </motion.div>
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
                <Link 
                  href="/featured" 
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-dark-lighter/50 hover:bg-dark-lighter transition-colors"
                >
                  <Zap className="w-4 h-4 mr-2 text-neon-blue/70" />
                  <span>Featured</span>
                </Link>
                <Link 
                  href="/trending" 
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-dark-lighter/50 hover:bg-dark-lighter transition-colors"
                >
                  <TrendingUp className="w-4 h-4 mr-2 text-neon-blue/70" />
                  <span>Trending</span>
                </Link>
              </div>
              
              {navigation.map((item) => (
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
                          key={subItem.name}
                          href={subItem.href}
                          className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive(subItem.href) 
                              ? 'text-neon-blue bg-neon-blue/10' 
                              : 'text-gray-400 hover:text-gray-200 hover:bg-dark-lighter/50'
                          }`}
                        >
                          <span className="mr-2 text-neon-blue/70">{subItem.icon}</span>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="grid grid-cols-2 gap-3 p-2 border-t border-dark-border">
                <Link 
                  href="/search" 
                  className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium bg-dark-lighter/50 hover:bg-dark-lighter transition-colors"
                >
                  <Search className="w-4 h-4 mr-2 text-neon-blue/70" />
                  <span>Search</span>
                </Link>
                <Link 
                  href="/help" 
                  className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium bg-dark-lighter/50 hover:bg-dark-lighter transition-colors"
                >
                  <HelpCircle className="w-4 h-4 mr-2 text-neon-blue/70" />
                  <span>Help</span>
                </Link>
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