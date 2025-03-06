"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, BookOpen, Users, Shield, Lock, Server, Clock } from 'lucide-react';

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
        stiffness: 200, 
        damping: 20 
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Stats data for the homepage
  const stats = [
    { label: 'Curated Resources', value: '500+', icon: BookOpen },
    { label: 'Community Members', value: '12K+', icon: Users },
    { label: 'Learning Paths', value: '24+', icon: Code },
    { label: 'Daily Updates', value: '250+', icon: Database },
  ];

  // Platform features for the nav grid
  const platformFeatures = [
    {
      name: 'Community',
      description: 'Connect with peers, mentors, and security professionals to share knowledge and experiences.',
      href: '/community',
      icon: Users
    },
    {
      name: 'Insights',
      description: 'Stay updated with the latest cybersecurity trends, news, tools, and techniques.',
      href: '/insights',
      icon: Database
    },
    {
      name: 'Academy',
      description: 'Access structured learning paths, curated resources, and hands-on practice.',
      href: '/academy',
      icon: BookOpen
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-neon-blue to-transparent"></div>
        
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-neon-blue/5 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-neon-blue/5 w-full"></div>
          ))}
        </div>
      </div>

      <main className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="min-h-[85vh] flex flex-col justify-center pt-8 pb-20"
        >
          <motion.div variants={fadeInUpVariants} className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight leading-tight">
              Your <span className="text-neon-blue glow-text">Free Hub</span> for <br className="hidden sm:block" />
              Cybersecurity Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Gain access to curated resources, structured learning paths,
              and connect with a community passionate about cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/academy" 
                className="cyber-btn group py-3.5 px-6 text-base"
              >
                <span>Start Learning</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/community" 
                className="cyber-btn cyber-btn-secondary group py-3.5 px-6 text-base"
              >
                <span>Join the Community</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInVariants} 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                variants={statVariants}
                className="bg-dark-card border border-dark-border rounded-lg p-4 md:p-6 flex flex-col items-center text-center shadow-md hover:shadow-glow-sm hover:border-neon-blue/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CIA Triad Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-24 border-t border-dark-border relative"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
          
          <motion.div variants={fadeInUpVariants} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The CIA Triad: Our Structure</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Our platform is organized around the three pillars of information security, 
              helping you grow in all aspects of cybersecurity.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-primary-500 rounded-full mx-auto mt-8"></div>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div variants={fadeInUpVariants} className="cyber-card group hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] mb-6 group-hover:bg-[#5865F2]/20 transition-colors">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#5865F2] transition-colors">Community</h3>
              <p className="text-gray-400 mb-4">Connect with peers, mentors, and security professionals. Share insights, ask questions, and collaborate on projects.</p>
              <Link href="/community" className="flex items-center text-[#5865F2]/70 group-hover:text-[#5865F2] transition-colors">
                <span>Explore Community</span>
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
        </motion.section>

        {/* Featured Resources Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="py-24 border-t border-dark-border relative"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
          
          <motion.div variants={fadeInUpVariants} className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Resources</h2>
              <p className="text-gray-300 max-w-2xl">Curated from the best platforms to help you master cybersecurity concepts and techniques.</p>
            </div>
            <Link href="/resources/latest" className="text-neon-blue hover:text-primary-400 flex items-center mt-6 md:mt-0 group transition-colors">
              <span>View All Resources</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web Application Security Fundamentals",
                description: "Learn the basics of securing web applications from common vulnerabilities like XSS, CSRF, and SQL injection.",
                icon: Shield,
                level: "Beginner",
                type: "Course",
                source: "OWASP",
                href: "#"
              },
              {
                title: "Network Traffic Analysis with Wireshark",
                description: "Master the art of analyzing network packets to detect intrusions and security issues.",
                icon: Server,
                level: "Intermediate",
                type: "Workshop",
                source: "TryHackMe",
                href: "#"
              },
              {
                title: "Cryptography Principles and Implementation",
                description: "Understand the core principles of modern cryptography and how to implement secure cryptographic solutions.",
                icon: Lock,
                level: "Advanced",
                type: "Guide",
                source: "Cybrary",
                href: "#"
              }
            ].map((resource, index) => (
              <motion.div key={index} variants={fadeInUpVariants}>
                <Link
                  href={resource.href}
                  className="cyber-card group hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-5 group-hover:bg-neon-blue/20 transition-colors">
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-blue transition-colors">{resource.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{resource.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-dark-lighter text-gray-300 px-2.5 py-1 rounded-full text-sm">{resource.level}</span>
                    <span className="bg-dark-lighter text-gray-300 px-2.5 py-1 rounded-full text-sm">{resource.type}</span>
                    <span className="bg-dark-lighter text-neon-blue px-2.5 py-1 rounded-full text-sm">{resource.source}</span>
                  </div>
                  
                  <div className="flex items-center text-neon-blue/70 group-hover:text-neon-blue transition-colors">
                    <span>View Resource</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Learning Paths Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="py-24 border-t border-dark-border relative"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
          
          <motion.div variants={fadeInUpVariants} className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Learning Paths</h2>
              <p className="text-gray-300 max-w-2xl">Structured journeys to guide your learning through curated resources and hands-on exercises.</p>
            </div>
            <Link href="/academy/paths" className="text-neon-blue hover:text-primary-400 flex items-center mt-6 md:mt-0 group transition-colors">
              <span>View All Paths</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Ethical Hacking Fundamentals",
                description: "Master the basics of ethical hacking methodologies, tools, and practices.",
                resources: 24,
                duration: "8 weeks",
                href: "#"
              },
              {
                title: "Security Operations Specialist",
                description: "Learn to detect, analyze, and respond to security incidents as a SOC analyst.",
                resources: 18,
                duration: "6 weeks",
                href: "#"
              },
              {
                title: "Cloud Security Engineer",
                description: "Develop skills to secure cloud infrastructure and applications across major platforms.",
                resources: 30,
                duration: "10 weeks",
                href: "#"
              }
            ].map((path, index) => (
              <motion.div key={index} variants={fadeInUpVariants}>
                <Link
                  href={path.href}
                  className="cyber-card group hover:shadow-glow transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 bg-dark-lighter px-3 py-1.5 m-4 rounded-full">
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 text-neon-blue mr-1.5" />
                      <span className="text-xs">{path.resources} Resources</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-6 group-hover:text-neon-blue transition-colors">{path.title}</h3>
                  <p className="text-gray-400 mb-4">{path.description}</p>
                  
                  <div className="flex items-center mb-4 text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1 text-neon-blue" />
                    {path.duration}
                  </div>
                  
                  <div className="flex items-center text-neon-blue/70 group-hover:text-neon-blue transition-colors">
                    <span>Explore Path</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Main Navigation Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="py-24 border-t border-dark-border relative"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
          
          <motion.div variants={fadeInUpVariants} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Explore Our Platform</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Navigate through our platform's key areas to make the most of your cybersecurity learning journey.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-primary-500 rounded-full mx-auto mt-8"></div>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {platformFeatures.map((feature, index) => (
              <motion.div key={index} variants={fadeInUpVariants}>
                <Link
                  href={feature.href}
                  className="cyber-card flex flex-col h-full group hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6 group-hover:bg-neon-blue/20 transition-colors">
                    <feature.icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-neon-blue transition-colors">{feature.name}</h2>
                  <p className="text-gray-400 mb-6 flex-grow">{feature.description}</p>
                  <div className="flex items-center text-neon-blue/70 group-hover:text-neon-blue transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}