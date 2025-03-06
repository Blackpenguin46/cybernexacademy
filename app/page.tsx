"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, BookOpen, Users, Shield, Lock, Server, Zap } from 'lucide-react';
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="animate-pulse text-4xl font-display font-bold text-neon-blue">
            <span className="inline-block animate-pulse">Loading CyberNex...</span>
          </div>
        </div>
      ) : (
        <div className="space-y-24 mb-24">
          {/* Hero Section */}
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden"
          >
            {/* Glow effects */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-neon-blue/20 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon-pink/20 rounded-full filter blur-3xl opacity-50"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div variants={fadeInUpVariants}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink leading-tight">
                  Master Cybersecurity with CyberNex Academy
                </h1>
              </motion.div>
              
              <motion.p variants={fadeInUpVariants} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your free hub for cybersecurity resources, community, and learning paths to launch your career.
              </motion.p>
              
              <motion.div variants={fadeInUpVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Link 
                  href="/academy" 
                  className="cyber-btn text-lg py-3 px-8 rounded-md flex items-center justify-center"
                >
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/community" 
                  className="cyber-btn-secondary text-lg py-3 px-8 rounded-md flex items-center justify-center"
                >
                  Join Community
                  <Users className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              
              {/* Stats Section */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
              >
                <motion.div variants={statVariants} className="cyber-card p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-neon-blue mb-2">250+</h3>
                  <p className="text-gray-400 text-sm md:text-base">Curated Resources</p>
                </motion.div>
                
                <motion.div variants={statVariants} className="cyber-card p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-neon-pink mb-2">5,000+</h3>
                  <p className="text-gray-400 text-sm md:text-base">Community Members</p>
                </motion.div>
                
                <motion.div variants={statVariants} className="cyber-card p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">12</h3>
                  <p className="text-gray-400 text-sm md:text-base">Learning Paths</p>
                </motion.div>
                
                <motion.div variants={statVariants} className="cyber-card p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-neon-green mb-2">Daily</h3>
                  <p className="text-gray-400 text-sm md:text-base">Updates</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* CIA Triad Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="py-20 relative"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={fadeInUpVariants} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                  The CyberNex CIA Triad
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our platform is structured around the three pillars that make up the foundation of modern cybersecurity.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={fadeInUpVariants} className="cyber-card group hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green mb-6 group-hover:bg-neon-green/20 transition-colors">
                    <Users className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-neon-green transition-colors">Community</h3>
                  <p className="text-gray-400 mb-4">Connect with like-minded individuals, mentors, and industry professionals to share knowledge and grow together.</p>
                  <Link href="/community" className="flex items-center text-neon-green/70 group-hover:text-neon-green transition-colors">
                    <span>Join Community</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div variants={fadeInUpVariants} className="cyber-card group hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 rounded-lg bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] mb-6 group-hover:bg-[#E1306C]/20 transition-colors">
                    <Database className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#E1306C] transition-colors">Insights</h3>
                  <p className="text-gray-400 mb-4">Stay updated with the latest cybersecurity trends, news, tools, and techniques from industry professionals.</p>
                  <Link href="/insights" className="flex items-center text-[#E1306C]/70 group-hover:text-[#E1306C] transition-colors">
                    <span>Discover Insights</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div variants={fadeInUpVariants} className="cyber-card group hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6 group-hover:bg-neon-blue/20 transition-colors">
                    <BookOpen className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-neon-blue transition-colors">Academy</h3>
                  <p className="text-gray-400 mb-4">Access structured learning paths, curated resources, and hands-on practice to master cybersecurity skills.</p>
                  <Link href="/academy" className="flex items-center text-neon-blue/70 group-hover:text-neon-blue transition-colors">
                    <span>Start Learning</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Quick Access Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="relative py-16 border-t border-dark-border"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={fadeInUpVariants} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Quick Access</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">Jump to our most popular sections to start exploring.</p>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <motion.div variants={fadeInUpVariants}>
                  <Link href="/academy/paths" className="cyber-card block group hover:shadow-neon-blue transition-all duration-300">
                    <div className="flex items-center">
                      <div className="bg-neon-blue/10 p-3 rounded-lg mr-4 group-hover:bg-neon-blue/20 transition-colors">
                        <BookOpen className="w-7 h-7 text-neon-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1 group-hover:text-neon-blue transition-colors">Learning Paths</h3>
                        <p className="text-gray-400 text-sm">Structured guides to master skills</p>
                      </div>
                      <ArrowRight className="ml-auto w-5 h-5 text-gray-500 group-hover:text-neon-blue group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
                
                <motion.div variants={fadeInUpVariants}>
                  <Link href="/community/discord" className="cyber-card block group hover:shadow-neon-green transition-all duration-300">
                    <div className="flex items-center">
                      <div className="bg-neon-green/10 p-3 rounded-lg mr-4 group-hover:bg-neon-green/20 transition-colors">
                        <Users className="w-7 h-7 text-neon-green" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1 group-hover:text-neon-green transition-colors">Discord Server</h3>
                        <p className="text-gray-400 text-sm">Join our active community</p>
                      </div>
                      <ArrowRight className="ml-auto w-5 h-5 text-gray-500 group-hover:text-neon-green group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
                
                <motion.div variants={fadeInUpVariants}>
                  <Link href="/insights/news" className="cyber-card block group hover:shadow-neon-pink transition-all duration-300">
                    <div className="flex items-center">
                      <div className="bg-neon-pink/10 p-3 rounded-lg mr-4 group-hover:bg-neon-pink/20 transition-colors">
                        <Zap className="w-7 h-7 text-neon-pink" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1 group-hover:text-neon-pink transition-colors">Latest News</h3>
                        <p className="text-gray-400 text-sm">Cybersecurity updates</p>
                      </div>
                      <ArrowRight className="ml-auto w-5 h-5 text-gray-500 group-hover:text-neon-pink group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      )}
    </>
  );
}