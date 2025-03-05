"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageSquare, Calendar, Users, BookOpen } from 'lucide-react';

const CommunityPage = () => {
  const sections = [
    {
      title: 'Discussion Forum',
      icon: MessageSquare,
      description: 'Join discussions with fellow cybersecurity enthusiasts',
      href: '/community/forum',
      color: 'neon-blue',
    },
    {
      title: 'Events',
      icon: Calendar,
      description: 'Upcoming webinars, workshops, and meetups',
      href: '/community/events',
      color: 'neon-pink',
    },
    {
      title: 'Mentorship',
      icon: Users,
      description: 'Connect with industry experts and mentors',
      href: '/community/mentorship',
      color: 'neon-purple',
    },
    {
      title: 'Blog',
      icon: BookOpen,
      description: 'Latest insights, articles, and community updates',
      href: '/community/blog',
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
          CyberNex Community
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Connect, learn, and grow with fellow cybersecurity professionals and enthusiasts.
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
                <span className="text-neon-blue text-sm">Join Now →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Community Stats */}
      <div className="cyber-card p-8">
        <h2 className="text-2xl font-bold mb-6 neon-text">Community Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Members', value: '10,000+' },
            { label: 'Active Discussions', value: '500+' },
            { label: 'Monthly Events', value: '20+' },
            { label: 'Expert Mentors', value: '50+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-bold text-neon-blue mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 