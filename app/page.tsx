"use client"

import { useState, useEffect } from 'react';
import Link from "next/link"
import Image from "next/image";
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Wrench,
  BookOpen,
  MessageSquare,
  Trophy,
  Terminal,
  Shield,
  Code,
  Database,
  Cloud,
  ChevronDown,
  Beaker,
  Calendar,
  Youtube,
  ArrowRight,
  CheckCircle,
  Linkedin,
  Instagram,
  Twitter
} from "lucide-react"

const HomePage = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [animateBackground, setAnimateBackground] = useState(false);

  useEffect(() => {
    setAnimateBackground(true);
  }, []);

  const navigationSections = [
    {
      title: 'Learning',
      icon: GraduationCap,
      description: 'Start your cybersecurity journey with structured learning paths',
      href: '/learning',
      color: 'blue-500',
      bgColor: 'from-blue-600/20 to-blue-400/10',
      dropdownItems: [
        {
          name: 'Learning Paths',
          href: '/learning/paths',
          description: 'Structured tracks for all skill levels',
          icon: BookOpen,
        },
        {
          name: 'Hands-on Labs',
          href: '/learning/labs',
          description: 'Practice in real environments',
          icon: Beaker,
        },
        {
          name: 'Certifications',
          href: '/learning/certifications',
          description: 'Professional certification preparation',
          icon: Trophy,
        },
        {
          name: 'Challenges',
          href: '/learning/challenges',
          description: 'Test your skills with CTF challenges',
          icon: Shield,
        },
      ],
    },
    {
      title: 'Community',
      icon: Users,
      description: 'Connect and grow with fellow cybersecurity enthusiasts',
      href: '/community',
      color: 'blue-400',
      bgColor: 'from-blue-400/20 to-indigo-500/10',
      dropdownItems: [
        {
          name: 'Content Creators',
          href: '/community/creators',
          description: 'Top cybersecurity creators across platforms',
          icon: Youtube,
        },
        {
          name: 'Discussion Forum',
          href: '/community/forum',
          description: 'Engage in technical discussions',
          icon: MessageSquare,
        },
        {
          name: 'Events',
          href: '/community/events',
          description: 'Join webinars and meetups',
          icon: Calendar,
        },
        {
          name: 'Mentorship',
          href: '/community/mentorship',
          description: 'Learn from industry experts',
          icon: Users,
        },
      ],
    },
    {
      title: 'Tools & Utilities',
      icon: Wrench,
      description: 'Access essential cybersecurity tools and resources',
      href: '/tools',
      color: 'blue-600',
      bgColor: 'from-indigo-600/20 to-purple-500/10',
      dropdownItems: [
        {
          name: 'Security Tools',
          href: '/tools/security',
          description: 'Essential security utilities',
          icon: Terminal,
        },
        {
          name: 'Code Analysis',
          href: '/tools/code-analysis',
          description: 'Source code security tools',
          icon: Code,
        },
        {
          name: 'Cloud Security',
          href: '/tools/cloud',
          description: 'Cloud platform security tools',
          icon: Cloud,
        },
        {
          name: 'Database Tools',
          href: '/tools/database',
          description: 'Database security utilities',
          icon: Database,
        },
      ],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Expert-Led Content",
      description: "Learn from industry professionals with years of real-world experience."
    },
    {
      icon: Beaker,
      title: "Hands-On Learning",
      description: "Practice in realistic environments with our interactive labs."
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join thousands of cybersecurity enthusiasts on their learning journey."
    }
  ];

  const testimonials = [
    {
      name: "Sarah L.",
      role: "Security Analyst",
      content: "CyberNex Academy helped me transition into cybersecurity from a completely different field. The structured learning paths were exactly what I needed.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "David K.",
      role: "Penetration Tester",
      content: "The hands-on labs are what set CyberNex apart. I was able to practice real-world scenarios that prepared me for my role as a pentester.",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10 transition-opacity duration-1000 ${animateBackground ? 'opacity-20' : 'opacity-0'}`} />
          
          {/* Animated circles */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-indigo-500/30 blur-3xl"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-6">
              <Shield className="w-20 h-20 text-blue-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Master Cybersecurity Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the elite community of cybersecurity professionals. Learn, practice,
              and master the art of digital defense with CyberNex Academy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/auth/register" 
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg shadow-blue-500/20"
              >
                Get Started
              </Link>
              <Link 
                href="/learning/paths" 
                className="px-8 py-4 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all"
              >
                Explore Courses
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Main Navigation Grid */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Offerings
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dive into our comprehensive range of cybersecurity learning resources, community features, and specialized tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navigationSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(section.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={section.href}>
                <div className={`bg-gradient-to-br ${section.bgColor} bg-gray-800 rounded-lg p-8 hover:shadow-xl transition-all border border-gray-700 hover:border-blue-500 h-full`}>
                  <section.icon className={`w-12 h-12 text-${section.color} mb-6`} />
                  <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>
                  <p className="text-gray-400 mb-6">{section.description}</p>
                  <div className="flex items-center text-blue-400">
                    <span>Explore {section.title}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>

              {/* Dropdown Menu */}
              {activeDropdown === section.title && (
                <div className="absolute left-0 right-0 mt-2 z-50">
                  <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
                    {section.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start p-4 hover:bg-gray-700 transition-colors"
                      >
                        <item.icon className="w-6 h-6 mr-3 text-blue-400 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-white mb-1">{item.name}</div>
                          <div className="text-sm text-gray-400">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800/50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose CyberNex
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide the most comprehensive and practical cybersecurity education platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of cybersecurity professionals who have accelerated their careers with CyberNex Academy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-400">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '50,000+', label: 'Students' },
              { value: '200+', label: 'Courses' },
              { value: '15+', label: 'Expert Instructors' },
              { value: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/about" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
            <span>About Us</span>
          </Link>
          <Link href="/contact" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
            <span>Contact</span>
          </Link>
          <Link href="/blog" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
            <span>Blog</span>
          </Link>
          <Link href="/careers" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
            <span>Careers</span>
          </Link>
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com/company/cybernex-academy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/cybernexacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/cybernexacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-8 md:p-12"
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/90 max-w-xl">
                Join thousands of cybersecurity professionals and start your learning
                journey today. Get access to all courses, labs, and community features.
              </p>
            </div>
            <Link 
              href="/auth/register" 
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all inline-block shadow-xl shadow-blue-700/20"
            >
              Start Learning Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;

