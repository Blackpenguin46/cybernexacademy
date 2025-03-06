"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Terminal, GraduationCap, Award, Youtube, Briefcase, Code, ArrowRight } from 'lucide-react';

const AcademyPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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

  // Academy sections data
  const academySections = [
    {
      title: 'Learning Paths',
      description: 'Structured learning tracks for different career goals and skill levels',
      icon: BookOpen,
      href: '/academy/paths',
      color: 'neon-blue',
    },
    {
      title: 'YouTube Channels',
      description: 'Curated list of the best cybersecurity YouTube channels and playlists',
      icon: Youtube,
      href: '/academy/youtube',
      color: 'neon-red',
    },
    {
      title: 'Certifications',
      description: 'Preparation resources for popular cybersecurity certifications',
      icon: Award,
      href: '/academy/certifications',
      color: 'neon-yellow',
    },
    {
      title: 'Hands-on Labs',
      description: 'Practice in real-world environments with guided challenges',
      icon: Terminal,
      href: '/academy/labs',
      color: 'neon-green',
    },
    {
      title: 'College Resources',
      description: 'Academic materials, scholarships, and guidance for students',
      icon: GraduationCap,
      href: '/academy/college',
      color: 'neon-purple',
    },
    {
      title: 'Career Resources',
      description: 'Resume templates, interview preparation, and job search resources',
      icon: Briefcase,
      href: '/academy/careers',
      color: 'neon-pink',
    },
  ];

  // Featured learning paths
  const featuredLearningPaths = [
    {
      title: 'Ethical Hacking Fundamentals',
      description: 'Start your journey to become an ethical hacker with essential concepts and tools',
      level: 'Beginner',
      resources: 12,
      icon: Code,
      href: '/academy/paths/ethical-hacking-fundamentals',
    },
    {
      title: 'Security Operations Analyst',
      description: 'Learn to detect, investigate, and respond to cybersecurity incidents',
      level: 'Intermediate',
      resources: 10,
      icon: Terminal,
      href: '/academy/paths/security-operations-analyst',
    },
    {
      title: 'Cloud Security Specialist',
      description: 'Master security concepts and best practices for cloud environments',
      level: 'Advanced',
      resources: 14,
      icon: BookOpen,
      href: '/academy/paths/cloud-security-specialist',
    },
  ];

  return (
    <div className="space-y-20 mb-24">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative overflow-hidden py-24"
      >
        {/* Background effects */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-neon-blue/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neon-purple/20 rounded-full filter blur-3xl opacity-50"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUpVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink tracking-tight">
              CyberNex Academy
            </h1>
          </motion.div>
          
          <motion.p variants={fadeInUpVariants} className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Your gateway to mastering cybersecurity skills through curated resources, 
            structured learning paths, and comprehensive guides.
          </motion.p>
          
          <motion.div variants={fadeInUpVariants} className="flex flex-wrap justify-center gap-4">
            <Link href="/academy/paths" className="cyber-btn text-base py-3 px-6 rounded-md flex items-center justify-center">
              View Learning Paths
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/academy/getting-started" className="cyber-btn-secondary text-base py-3 px-6 rounded-md flex items-center justify-center">
              Getting Started Guide
              <BookOpen className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Academy Sections Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUpVariants} className="mb-12 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Explore Academy Sections</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Browse through our specialized sections designed to help you navigate your cybersecurity learning journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {academySections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUpVariants} className="h-full">
                <Link href={section.href} className="cyber-card group h-full block hover:shadow-glow transition-all duration-300">
                  <div className={`w-14 h-14 rounded-lg bg-${section.color}/10 flex items-center justify-center text-${section.color} mb-5`}>
                    <section.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 group-hover:text-${section.color} transition-colors`}>
                    {section.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{section.description}</p>
                  <div className="flex items-center text-gray-400 group-hover:text-neon-blue transition-colors mt-auto">
                    <span>Explore</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Learning Paths */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="border-t border-dark-border relative py-24"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUpVariants} className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Featured Learning Paths</h2>
              <p className="text-gray-300 max-w-2xl">
                Start your cybersecurity journey with our most popular learning paths
              </p>
            </div>
            <Link href="/academy/paths" className="text-neon-blue hover:text-neon-blue/80 flex items-center mt-6 md:mt-0 group transition-colors">
              <span>View All Paths</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLearningPaths.map((path, index) => (
              <motion.div key={path.title} variants={fadeInUpVariants}>
                <Link href={path.href} className="cyber-card group block hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="bg-neon-blue/10 p-3 rounded-lg mr-4">
                      <path.icon className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold group-hover:text-neon-blue transition-colors">{path.title}</h3>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-dark-lighter text-gray-300 px-2 py-0.5 rounded-full text-xs">{path.level}</span>
                        <span className="bg-dark-lighter text-neon-blue px-2 py-0.5 rounded-full text-xs">{path.resources} Resources</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{path.description}</p>
                  <div className="flex items-center text-neon-blue/70 group-hover:text-neon-blue transition-colors">
                    <span>Explore Path</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Getting Started CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="relative"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUpVariants}
            className="cyber-card overflow-hidden relative"
          >
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center p-8 gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">New to Cybersecurity?</h2>
                <p className="text-gray-300 mb-6">
                  Not sure where to start? Our beginner-friendly guide will help you navigate
                  the world of cybersecurity and find the right path for your goals.
                </p>
                <Link 
                  href="/academy/getting-started" 
                  className="cyber-btn text-base py-2.5 px-5 rounded-md inline-flex items-center"
                >
                  Read Getting Started Guide
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <div className="w-28 h-28 rounded-full bg-neon-blue/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-neon-blue" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AcademyPage; 