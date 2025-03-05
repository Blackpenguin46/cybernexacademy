"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Code, Database, Cloud } from 'lucide-react';

const LearningPathsPage = () => {
  const paths = [
    {
      title: 'Offensive Security',
      icon: Shield,
      description: 'Master penetration testing and ethical hacking',
      level: 'Beginner to Advanced',
      duration: '6 months',
      modules: 12,
      color: 'neon-blue',
    },
    {
      title: 'Application Security',
      icon: Code,
      description: 'Learn secure coding and application security testing',
      level: 'Intermediate',
      duration: '4 months',
      modules: 8,
      color: 'neon-pink',
    },
    {
      title: 'Database Security',
      icon: Database,
      description: 'Secure database design and implementation',
      level: 'Intermediate',
      duration: '3 months',
      modules: 6,
      color: 'neon-purple',
    },
    {
      title: 'Cloud Security',
      icon: Cloud,
      description: 'Security in cloud environments and architectures',
      level: 'Advanced',
      duration: '5 months',
      modules: 10,
      color: 'neon-green',
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
          Learning Paths
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Choose your specialization and follow a structured path to mastery.
        </p>
      </motion.div>

      {/* Learning Paths Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paths.map((path, index) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="cyber-card h-full p-6">
              <div className="flex items-start mb-4">
                <path.icon className="w-12 h-12 text-neon-blue mr-4" />
                <div>
                  <h2 className="text-2xl font-bold mb-2">{path.title}</h2>
                  <p className="text-text-secondary">{path.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-text-secondary mb-1">Level</div>
                  <div className="font-semibold">{path.level}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-text-secondary mb-1">Duration</div>
                  <div className="font-semibold">{path.duration}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-text-secondary mb-1">Modules</div>
                  <div className="font-semibold">{path.modules}</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href={`/academy/paths/${path.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="cyber-button-sm"
                >
                  Start Learning
                </Link>
                <Link
                  href={`/academy/paths/${path.title.toLowerCase().replace(/\s+/g, '-')}/syllabus`}
                  className="text-neon-blue hover:text-neon-blue-bright text-sm"
                >
                  View Syllabus →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Tracking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <div className="cyber-card p-8">
          <h2 className="text-2xl font-bold mb-6 neon-text">Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-accent-bg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Current Path</h3>
              <div className="flex items-center justify-between mb-2">
                <span>Offensive Security</span>
                <span className="text-neon-blue">60%</span>
              </div>
              <div className="w-full bg-darker-bg rounded-full h-2">
                <div className="bg-neon-blue h-2 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
            <div className="bg-accent-bg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue">3</div>
                  <div className="text-sm text-text-secondary">Paths Started</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-pink">12</div>
                  <div className="text-sm text-text-secondary">Modules Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LearningPathsPage; 