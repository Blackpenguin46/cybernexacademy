"use client";

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { featuredCourses as courses, platformFeatures } from './config/navigation';

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
    { label: "Courses", value: "50+", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg> },
    { label: "Students", value: "10k+", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg> },
    { label: "Success Rate", value: "95%", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg> },
    { label: "Support", value: "24/7", icon: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              Your gateway to mastering cybersecurity skills with expert-led courses, hands-on labs, and a supportive community.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link 
                href="/learning/courses" 
                className="cyber-btn cyber-btn-lg group"
              >
                <span>Start Learning</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 border border-dark-border rounded-md hover:border-neon-blue hover:bg-dark-lighter transition-all duration-300"
              >
                Learn More
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
        {/* Featured Courses Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={fadeInUpVariants} className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Featured Courses</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-primary-500 rounded-full"></div>
            </div>
            <Link href="/learning/courses" className="text-neon-blue hover:text-primary-400 flex items-center mt-4 md:mt-0 group transition-colors">
              <span>View All Courses</span>
              <svg className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <motion.div 
                key={course.id} 
                variants={fadeInUpVariants}
                className="cyber-card group hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue mr-4 group-hover:bg-neon-blue/20 transition-colors">
                    <course.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="px-2 py-1 bg-dark-lighter rounded-md text-xs text-gray-300">{course.level}</span>
                    <span className="px-2 py-1 bg-dark-lighter rounded-md text-xs text-gray-300">{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">${course.price}</span>
                  <Link
                    href={`/learning/courses/${course.slug}`}
                    className="flex items-center text-neon-blue hover:text-primary-400 group/btn"
                  >
                    <span>Learn More</span>
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