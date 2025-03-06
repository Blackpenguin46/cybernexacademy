"use client";

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { platformFeatures, featuredResources, learningPaths } from './config/navigation';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const itemVariants = {
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

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
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

  const stats = [
    { label: "Resources", value: "250+", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg> },
    { label: "Community", value: "5k+", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg> },
    { label: "Learning Paths", value: "15+", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg> },
    { label: "Updated", value: "Daily", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg> },
  ];

  return (
    <div className="min-h-screen bg-dark overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-blue/10 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark to-transparent"></div>
          
          {/* Animated circuit lines */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-neon-blue via-transparent to-neon-blue"></div>
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-neon-blue via-transparent to-neon-blue"></div>
            <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent"></div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-primary-500 glow-text">CyberNex Academy</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-primary-500 mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Your free hub for cybersecurity resources, structured learning paths, community connection, and industry insights.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link 
                href="/academy/paths" 
                className="cyber-btn cyber-btn-lg group"
              >
                <span>Start Learning</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/community/hub" 
                className="px-6 py-3 border border-dark-border rounded-md hover:border-neon-blue hover:bg-dark-lighter transition-all duration-300"
              >
                Join Community
              </Link>
            </motion.div>
            
            {/* Stats Section */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  variants={itemVariants}
                  className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-blue/50 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-dark-lighter">
            <path fill="currentColor" fillOpacity="0.3" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* CIA Triad Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={fadeInUpVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">The CIA Triad: Our Structure</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-primary-500 rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-3xl">
              CyberNex Academy is structured around the CIA triad - the foundation of information security principles.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div variants={fadeInUpVariants} className="cyber-card group hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6 group-hover:bg-neon-blue/20 transition-colors">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Community</h3>
              <p className="text-gray-400 mb-6">
                Connect with fellow cybersecurity enthusiasts through our Discord server, Instagram, and online spaces for collaboration and networking.
              </p>
              <Link
                href="/community"
                className="flex items-center text-neon-blue hover:text-primary-400 group/btn mt-auto"
              >
                <span>Join Our Community</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="cyber-card group hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6 group-hover:bg-neon-blue/20 transition-colors">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Insights</h3>
              <p className="text-gray-400 mb-6">
                Stay updated with the latest cybersecurity news, industry trends, job market analysis, and professional insights.
              </p>
              <Link
                href="/insights"
                className="flex items-center text-neon-blue hover:text-primary-400 group/btn mt-auto"
              >
                <span>Explore Insights</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="cyber-card group hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6 group-hover:bg-neon-blue/20 transition-colors">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Academy</h3>
              <p className="text-gray-400 mb-6">
                Access curated learning paths, certification resources, labs, and career guidance to advance your cybersecurity knowledge.
              </p>
              <Link
                href="/academy"
                className="flex items-center text-neon-blue hover:text-primary-400 group/btn mt-auto"
              >
                <span>Start Learning</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
          className="mb-24"
        >
          <motion.div variants={fadeInUpVariants} className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Featured Resources</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-primary-500 rounded-full"></div>
            </div>
            <Link href="/resources/latest" className="text-neon-blue hover:text-primary-400 flex items-center mt-4 md:mt-0 group transition-colors">
              <span>View All Resources</span>
              <svg className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <motion.div 
                key={resource.id} 
                variants={fadeInUpVariants}
                className="cyber-card group hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mr-4 group-hover:bg-neon-blue/20 transition-colors">
                    <resource.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="px-2 py-1 bg-dark-lighter rounded-md text-xs text-gray-300">{resource.level}</span>
                    <span className="px-2 py-1 bg-dark-lighter rounded-md text-xs text-gray-300">{resource.type}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">Source: {resource.source}</span>
                  <Link
                    href={resource.url || `/resources/${resource.slug}`}
                    target={resource.url ? "_blank" : "_self"}
                    className="flex items-center text-neon-blue hover:text-primary-400 group/btn"
                  >
                    <span>View Resource</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
          className="mb-24"
        >
          <motion.div variants={fadeInUpVariants} className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Learning Paths</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-primary-500 rounded-full"></div>
            </div>
            <Link href="/academy/paths" className="text-neon-blue hover:text-primary-400 flex items-center mt-4 md:mt-0 group transition-colors">
              <span>View All Paths</span>
              <svg className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {learningPaths.map((path) => (
              <motion.div 
                key={path.id} 
                variants={fadeInUpVariants}
                className="cyber-card group hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mr-4 group-hover:bg-neon-blue/20 transition-colors">
                    <path.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{path.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  {path.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">{path.resources.length} resources</span>
                  <Link
                    href={`/academy/paths/${path.slug}`}
                    className="flex items-center text-neon-blue hover:text-primary-400 group/btn"
                  >
                    <span>Explore Path</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
        >
          <motion.div variants={fadeInUpVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Explore Our Platform</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-primary-500 rounded-full"></div>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature, index) => (
              <motion.div key={index} variants={fadeInUpVariants}>
                <Link
                  href={feature.href}
                  className="cyber-card flex flex-col h-full group hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6 group-hover:bg-neon-blue/20 transition-colors">
                    <feature.icon className="w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-neon-blue transition-colors">{feature.name}</h2>
                  <p className="text-gray-400 mb-4 flex-grow">{feature.description}</p>
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