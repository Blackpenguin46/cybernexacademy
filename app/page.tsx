"use client"

import { useState } from 'react';
import Link from "next/link"
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
  Calendar
} from "lucide-react"

const HomePage = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationSections = [
    {
      title: 'Learning',
      icon: GraduationCap,
      description: 'Start your cybersecurity journey with structured learning paths',
      href: '/learning',
      color: 'blue-500',
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
      dropdownItems: [
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
        {
          name: 'Career Resources',
          href: '/community/careers',
          description: 'Advance your security career',
          icon: GraduationCap,
        },
      ],
    },
    {
      title: 'Tools & Utilities',
      icon: Wrench,
      description: 'Access essential cybersecurity tools and resources',
      href: '/tools',
      color: 'blue-600',
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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50" />
        <div className="absolute inset-0">
          <div className="cyber-particles" /> {/* Add particle animation component */}
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Master Cybersecurity
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the elite community of cybersecurity professionals. Learn, practice,
              and master the art of digital defense.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/auth/register" 
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
              >
                Get Started
              </Link>
              <Link 
                href="/learning/paths" 
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all"
              >
                Explore Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Navigation Grid */}
      <div className="container mx-auto px-4 py-24">
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
              <div className="bg-gray-800 rounded-lg p-8 hover:shadow-xl transition-all border border-gray-700 hover:border-blue-500">
                <section.icon className={`w-12 h-12 text-${section.color} mb-4`} />
                <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
                <p className="text-gray-400 mb-4">{section.description}</p>
                <div className="flex items-center text-blue-400">
                  <span>Explore</span>
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </div>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of cybersecurity professionals and start your learning
            journey today. Get access to all courses, labs, and community features.
          </p>
          <Link 
            href="/auth/register" 
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all inline-block"
          >
            Join CyberNex Academy
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;

const features = [
  {
    icon: Shield,
    title: "Comprehensive Learning Paths",
    description:
      "Structured courses designed for all skill levels, from beginners to advanced professionals.",
  },
  {
    icon: Book,
    title: "Certification Preparation",
    description:
      "Comprehensive study materials and practice tests for major cybersecurity certifications.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description:
      "Learn from industry professionals and get guidance for your cybersecurity career.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description:
      "Get guidance on career paths, job opportunities, and professional development in cybersecurity.",
  },
];

const communityFeatures = [
  "24/7 Discussion Forums",
  "Live Webinars & Workshops",
  "Networking Opportunities",
  "Mentorship Programs",
  "CTF Competitions",
];

const testimonials = [
  {
    text: "CyberNex Academy transformed my career. The hands-on labs and mentorship program were invaluable.",
    name: "Sarah Chen",
    title: "Security Engineer",
  },
  {
    text: "The community here is amazing. I learned more in 6 months than I did in 2 years of self-study.",
    name: "Michael Rodriguez",
    title: "Penetration Tester",
  },
];

