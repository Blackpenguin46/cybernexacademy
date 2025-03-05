"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Briefcase, MessageCircle, Shield } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Cybersecurity expert with 15+ years of experience in the industry.',
      linkedin: 'https://linkedin.com/in/alexjohnson',
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Learning Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Former CISO turned educator with a passion for making security accessible.',
      linkedin: 'https://linkedin.com/in/sarahchen',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Content',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Award-winning content creator specializing in cybersecurity education.',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
    },
    {
      name: 'Emily Zhang',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Ethical hacker and security researcher with a background in computer science.',
      linkedin: 'https://linkedin.com/in/emilyzhang',
    },
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Founded',
      description: 'CyberNex Academy was founded with a mission to democratize cybersecurity education.',
    },
    {
      year: '2019',
      title: 'First 1,000 Students',
      description: 'Reached our first major milestone of 1,000 active students.',
    },
    {
      year: '2020',
      title: 'Expanded Course Offerings',
      description: 'Launched our comprehensive learning paths and certification programs.',
    },
    {
      year: '2021',
      title: 'Industry Partnerships',
      description: 'Formed partnerships with leading cybersecurity companies.',
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded our reach to serve students in over 100 countries.',
    },
    {
      year: '2023',
      title: 'Community Growth',
      description: 'Surpassed 50,000 community members and launched mentorship program.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About CyberNex Academy
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make cybersecurity education accessible, practical, and engaging for everyone.
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 rounded-lg p-8 border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-400">
              To empower individuals and organizations with the knowledge and skills needed to navigate the complex world of cybersecurity, fostering a safer digital environment for all.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 rounded-lg p-8 border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-400">
              To become the leading global platform for cybersecurity education, creating a community of skilled professionals who can address the evolving security challenges of tomorrow.
            </p>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Excellence',
                description: 'We strive for excellence in all our educational content and experiences.',
              },
              {
                icon: Users,
                title: 'Inclusivity',
                description: 'We believe cybersecurity education should be accessible to everyone.',
              },
              {
                icon: Award,
                title: 'Innovation',
                description: 'We continuously innovate our teaching methods and course materials.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <value.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Journey</h2>
          <div className="relative border-l border-blue-500 ml-4 md:ml-8 pl-6 space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-blue-500" />
                <div className="font-bold text-blue-400 mb-1">{milestone.year}</div>
                <div className="text-xl font-semibold text-white mb-2">{milestone.title}</div>
                <p className="text-gray-400">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join Our Mission?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Begin your cybersecurity journey today and become part of our growing community of security professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/learning" 
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                Explore Courses
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage; 