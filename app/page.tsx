"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code, 
  Database, 
  BookOpen, 
  Users, 
  Shield, 
  Lock, 
  Server, 
  Zap,
  Calendar,
  Newspaper,
  BarChart4,
  Flag
} from 'lucide-react';
import { platformFeatures } from './config/navigation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const dashboardItems = [
    {
      title: "Latest News",
      description: "SolarWinds breach affects 18,000 organizations",
      icon: Newspaper,
      color: "neon-blue",
      link: "/insights/news",
      timeAgo: "2 hours ago"
    },
    {
      title: "Upcoming Event",
      description: "Live Workshop: Ethical Hacking Fundamentals",
      icon: Calendar,
      color: "neon-green",
      link: "/community/events",
      timeAgo: "Tomorrow, 3:00 PM"
    },
    {
      title: "New Resource",
      description: "Practical Malware Analysis Guide Added",
      icon: Database,
      color: "neon-purple",
      link: "/academy/resources",
      timeAgo: "1 day ago"
    },
    {
      title: "Trending Topic",
      description: "Zero Trust Architecture Implementation",
      icon: BarChart4,
      color: "neon-pink",
      link: "/insights/trends",
      timeAgo: "3 days ago"
    }
  ];

  const quickActions = [
    { name: "Join Discord", href: "https://discord.gg/cybernex", icon: Users, color: "#5865F2", external: true },
    { name: "Learning Paths", href: "/academy/paths", icon: BookOpen, color: "rgb(var(--neon-blue))" },
    { name: "CTF Challenges", href: "/academy/challenges", icon: Flag, color: "rgb(var(--neon-green))" },
    { name: "Blog", href: "/insights/blog", icon: Newspaper, color: "rgb(var(--neon-pink))" }
  ];

  return (
    <div className="pt-4 md:pt-10">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="animate-pulse text-4xl font-display font-bold text-neon-blue">
            <span className="inline-block animate-pulse">Loading CyberNex...</span>
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">CyberNex</span>
            </h1>
            <p className="text-gray-400 mt-2">Your cybersecurity learning platform and community hub</p>
          </div>

          {/* Dashboard Widgets */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {dashboardItems.map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUpVariants}
                className="bg-dark-card border border-dark-border hover:border-dark-border/80 rounded-xl p-5 transition-all duration-300 hover:shadow-lg"
              >
                <Link href={item.link} className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${item.color}/10 text-${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                      <span className="text-xs text-gray-500">{item.timeAgo}</span>
                    </div>
                    <p className="text-gray-400 mt-1">{item.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.section>

          {/* Quick Actions Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-dark-card border border-dark-border rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <motion.div key={index} variants={fadeInUpVariants}>
                  {action.external ? (
                    <a 
                      href={action.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-dark-lighter hover:bg-dark transition-colors duration-300 text-center"
                      style={{ color: action.color }}
                    >
                      <action.icon className="w-7 h-7 mb-2" />
                      <span className="text-sm font-medium">{action.name}</span>
                    </a>
                  ) : (
                    <Link 
                      href={action.href}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-dark-lighter hover:bg-dark transition-colors duration-300 text-center"
                      style={{ color: action.color }}
                    >
                      <action.icon className="w-7 h-7 mb-2" />
                      <span className="text-sm font-medium">{action.name}</span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CIA Triad Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative bg-dark-card border border-dark-border rounded-xl p-6 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-pink/10 rounded-full blur-3xl"></div>
            
            <motion.div variants={fadeInUpVariants} className="mb-8 relative z-10">
              <h2 className="text-xl font-semibold">The CyberNex CIA Triad</h2>
              <p className="text-gray-400 mt-2">
                Explore our three main pillars to master cybersecurity
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
              <motion.div variants={fadeInUpVariants} className="border border-dark-border rounded-lg p-5 hover:border-neon-green/30 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-neon-green transition-colors">Community</h3>
                <p className="text-gray-400 text-sm mb-4">Connect with peers, mentors, and professionals.</p>
                <Link href="/community" className="flex items-center text-sm text-neon-green opacity-80 group-hover:opacity-100">
                  <span>Explore Community</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="border border-dark-border rounded-lg p-5 hover:border-neon-pink/30 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-neon-pink/10 flex items-center justify-center text-neon-pink mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-neon-pink transition-colors">Insights</h3>
                <p className="text-gray-400 text-sm mb-4">Stay updated with news, trends and analysis.</p>
                <Link href="/insights" className="flex items-center text-sm text-neon-pink opacity-80 group-hover:opacity-100">
                  <span>View Insights</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} className="border border-dark-border rounded-lg p-5 hover:border-neon-blue/30 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-neon-blue transition-colors">Academy</h3>
                <p className="text-gray-400 text-sm mb-4">Learn with structured paths and resources.</p>
                <Link href="/academy" className="flex items-center text-sm text-neon-blue opacity-80 group-hover:opacity-100">
                  <span>Start Learning</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.section>

          {/* User Progress Section - Shows when logged in */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-dark-card border border-dark-border rounded-xl p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Learning Progress</h2>
              <Link href="/dashboard" className="text-neon-blue text-sm flex items-center">
                <span>View Dashboard</span>
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            
            <div className="p-8 text-center border border-dashed border-dark-border rounded-lg">
              <Lock className="w-10 h-10 text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-300 mb-2">Sign in to track your progress</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">Create a free account to track your learning journey, join the community, and save your favorite resources.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/auth/login" className="text-neon-blue border border-neon-blue/50 hover:bg-neon-blue/10 px-6 py-2 rounded-md transition-colors duration-300">
                  Sign In
                </Link>
                <Link href="/auth/register" className="bg-neon-blue hover:bg-neon-blue/90 text-black px-6 py-2 rounded-md transition-colors duration-300">
                  Create Account
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      )}
    </div>
  );
}