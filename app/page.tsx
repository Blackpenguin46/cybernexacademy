"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Globe, BookOpen, Users, Calendar, 
         ArrowRight, ChevronRight, Lock, Newspaper, BarChart4, Flag } from 'lucide-react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Loading simulation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Content sections in a grid layout
  const mainSections = [
    {
      title: "Academy",
      description: "Learn cybersecurity from structured courses and paths",
      icon: BookOpen,
      href: "/academy",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      hoverColor: "group-hover:border-blue-500/60"
    },
    {
      title: "Community",
      description: "Connect with other security professionals and enthusiasts",
      icon: Users,
      href: "/community",
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30",
      hoverColor: "group-hover:border-indigo-500/60"
    },
    {
      title: "Insights",
      description: "Latest news, research and analysis in cybersecurity",
      icon: Newspaper,
      href: "/insights",
      color: "from-emerald-500/20 to-teal-500/20", 
      borderColor: "border-emerald-500/30",
      hoverColor: "group-hover:border-emerald-500/60"
    },
    {
      title: "Dashboard",
      description: "Track your progress and manage your learning journey",
      icon: BarChart4,
      href: "/dashboard",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      hoverColor: "group-hover:border-amber-500/60"
    }
  ];

  // Quick access links in a grid
  const quickAccessLinks = [
    {
      title: "Learning Paths",
      description: "Structured learning journeys for all skill levels",
      icon: Cpu,
      href: "/academy/paths",
      color: "bg-gradient-to-br from-blue-900/40 to-blue-700/40"
    },
    {
      title: "Latest Articles",
      description: "Fresh insights on cybersecurity topics",
      icon: Newspaper,
      href: "/insights/articles",
      color: "bg-gradient-to-br from-green-900/40 to-green-700/40"
    },
    {
      title: "Discord Community",
      description: "Join our vibrant Discord server",
      icon: Globe,
      href: "/community/discord",
      color: "bg-gradient-to-br from-indigo-900/40 to-indigo-700/40"
    },
    {
      title: "Upcoming Events",
      description: "Webinars, workshops and meetups",
      icon: Calendar,
      href: "/community/events",
      color: "bg-gradient-to-br from-purple-900/40 to-purple-700/40"
    },
    {
      title: "CTF Challenges",
      description: "Test your skills with hands-on challenges",
      icon: Flag,
      href: "/academy/challenges",
      color: "bg-gradient-to-br from-red-900/40 to-red-700/40"
    },
    {
      title: "Security Tools",
      description: "Essential tools for security professionals",
      icon: ShieldCheck,
      href: "/resources/tools",
      color: "bg-gradient-to-br from-orange-900/40 to-orange-700/40"
    }
  ];

  return (
    <div className="w-full min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-neon-blue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-lg text-gray-400">Loading CyberNex...</p>
          </div>
        </div>
      ) : (
        <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your Journey to <span className="text-neon-blue">Cyber Security</span> Excellence
              </h1>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl mb-8">
                CyberNex Academy provides structured learning paths, community resources, and insights to help you master cybersecurity concepts and practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/academy" className="bg-neon-blue hover:bg-neon-blue/90 text-black font-medium px-8 py-3 rounded-md transition-colors duration-300 flex items-center">
                  Start Learning <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/community" className="border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 font-medium px-8 py-3 rounded-md transition-colors duration-300">
                  Join Community
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Main Sections Grid */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="border-b-2 border-neon-blue pb-2">Main Sections</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link href={section.href} className="group block h-full">
                    <div className={`h-full rounded-xl border ${section.borderColor} bg-gradient-to-br ${section.color} backdrop-blur-sm p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-500/10 ${section.hoverColor}`}>
                      <section.icon className="w-12 h-12 mb-4 text-white/80" />
                      <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                      <p className="text-gray-400 mb-4">{section.description}</p>
                      <div className="flex items-center text-neon-blue font-medium">
                        Explore <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quick Access Links Grid */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="border-b-2 border-neon-blue pb-2">Quick Access</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickAccessLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link href={link.href} className="group block">
                    <div className={`rounded-lg ${link.color} border border-white/10 p-5 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:shadow-blue-500/10 hover:border-white/20`}>
                      <div className="flex items-start">
                        <div className="mr-4 p-2 bg-black/30 rounded-lg">
                          <link.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1 group-hover:text-neon-blue transition-colors">{link.title}</h3>
                          <p className="text-sm text-gray-400">{link.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Auth Box */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="p-8 text-center border border-dashed border-dark-border rounded-lg bg-dark-card/50 backdrop-blur-sm">
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