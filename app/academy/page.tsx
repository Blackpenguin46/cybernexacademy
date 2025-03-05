"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Terminal, Book, Trophy, Beaker } from 'lucide-react';

const AcademyPage = () => {
  const sections = [
    {
      title: 'Learning Paths',
      icon: Terminal,
      description: 'Structured learning tracks for all skill levels',
      href: '/academy/paths',
      color: 'neon-blue',
    },
    {
      title: 'Hands-on Labs',
      icon: Beaker,
      description: 'Practice in real-world environments',
      href: '/academy/labs',
      color: 'neon-pink',
    },
    {
      title: 'Certification Guides',
      icon: Book,
      description: 'Professional certification preparation',
      href: '/academy/certifications',
      color: 'neon-purple',
    },
    {
      title: 'Challenges',
      icon: Trophy,
      description: 'Test your skills with CTF challenges',
      href: '/academy/challenges',
      color: 'neon-blue',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
          CyberNex Academy
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Begin your cybersecurity journey with structured learning paths,
          hands-on labs, and expert-led courses.
        </p>
      </motion.div>

      {/* Main Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={section.href}>
              <div className="cyber-card h-full p-6 hover:scale-105 transition-transform">
                <section.icon className="w-12 h-12 mb-4 text-neon-blue" />
                <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
                <p className="text-text-secondary mb-4">{section.description}</p>
                <span className="text-neon-blue text-sm">Explore →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Featured Content */}
      <div className="cyber-card p-8">
        <h2 className="text-2xl font-bold mb-6 neon-text">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-accent-bg rounded-lg p-4"
            >
              <div className="h-40 bg-darker-bg rounded-md mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Introduction to Cybersecurity
              </h3>
              <p className="text-text-secondary text-sm">
                Learn the fundamentals of cybersecurity and build a strong
                foundation.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademyPage; 