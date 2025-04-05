"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Home,
  BookOpen, 
  Users, 
  Newspaper,
  Settings,
  LogIn,
  LogOut,
  LayoutDashboard,
  ChevronRight,
  Menu,
  X,
  Shield
} from 'lucide-react';
import { mainNavigation } from '../config/navigation';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile sidebar on navigation
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Academy', href: '/academy', icon: BookOpen },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Insights', href: '/insights', icon: Newspaper },
  ];

  const bottomNavItems = [
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Login', href: '/auth/login', icon: LogIn },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-dark-card p-2 rounded-lg border border-dark-border text-gray-400 hover:text-white transition-colors duration-200"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ 
          x: isMobileOpen ? 0 : (isCollapsed ? -240 : 0),
          width: isCollapsed ? '80px' : '280px'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 h-full bg-dark-card border-r border-dark-border z-50 pt-20 pb-6 flex flex-col`}
      >
        {/* Collapse Toggle (desktop only) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute hidden md:flex top-4 right-4 p-1.5 rounded-full bg-dark hover:bg-dark-lighter text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ChevronRight size={18} className={`transform transition-transform duration-300 ${isCollapsed ? '' : 'rotate-180'}`} />
        </button>

        {/* Sidebar Logo */}
        <div className="flex items-center px-6 mb-8">
          <Shield className="text-neon-blue h-8 w-8 flex-shrink-0" />
          {!isCollapsed && (
            <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
              CyberNex
            </span>
          )}
        </div>

        {/* Main Navigation Links */}
        <div className="flex-1 px-3 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 group ${
                isActive(item.href)
                  ? 'bg-neon-blue/10 text-neon-blue'
                  : 'text-gray-400 hover:bg-dark-lighter hover:text-white'
              }`}
            >
              <item.icon className={`h-5 w-5 flex-shrink-0 ${isActive(item.href) ? 'text-neon-blue' : 'group-hover:text-neon-blue transition-colors duration-200'}`} />
              {(!isCollapsed || isMobileOpen) && (
                <span className="ml-3 font-medium">{item.name}</span>
              )}
              {isActive(item.href) && !isCollapsed && (
                <div className="ml-auto">
                  <div className="h-2 w-2 rounded-full bg-neon-blue"></div>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Bottom Navigation Links */}
        <div className="px-3 space-y-2 mt-auto">
          <div className="h-px bg-dark-border mx-2 my-4"></div>
          {bottomNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 group ${
                isActive(item.href)
                  ? 'bg-neon-blue/10 text-neon-blue'
                  : 'text-gray-400 hover:bg-dark-lighter hover:text-white'
              }`}
            >
              <item.icon className={`h-5 w-5 flex-shrink-0 ${isActive(item.href) ? 'text-neon-blue' : 'group-hover:text-neon-blue transition-colors duration-200'}`} />
              {(!isCollapsed || isMobileOpen) && (
                <span className="ml-3 font-medium">{item.name}</span>
              )}
            </Link>
          ))}
        </div>
      </motion.aside>

      {/* Spacer */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'md:ml-20' : 'md:ml-[280px]'}`}></div>
    </>
  );
} 