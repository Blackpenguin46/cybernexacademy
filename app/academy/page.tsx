"use client";

import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ResourceCard from '../components/ResourceCard'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, Terminal, GraduationCap, Award, Youtube, Briefcase, Code, ArrowRight, 
  Shield, Star, Clock, Users, Database, Server, Globe
} from 'lucide-react';

export const metadata = {
  title: 'Academy | CyberNex Academy',
  description: 'Access curated cybersecurity learning resources, certification guides, and career development materials.',
}

const academyResources = [
  {
    title: 'YouTube Learning Paths',
    description: 'Curated collection of the best cybersecurity YouTube channels and playlists organized by topic.',
    link: '/academy/youtube',
    category: 'Video Learning',
    icon: '/images/youtube-icon.png',
    isExternal: false,
  },
  {
    title: 'Hands-on Labs',
    description: 'Practice your skills with interactive labs from TryHackMe, Hack The Box, and other platforms.',
    link: '/academy/labs',
    category: 'Practical Training',
    icon: '/images/labs-icon.png',
    isExternal: false,
  },
  {
    title: 'Certification Guides',
    description: 'Study materials and preparation guides for popular cybersecurity certifications.',
    link: '/academy/certifications',
    category: 'Professional Development',
    icon: '/images/cert-icon.png',
    isExternal: false,
  },
  {
    title: 'Career Paths',
    description: 'Structured learning paths for different cybersecurity career tracks and specializations.',
    link: '/academy/careers',
    category: 'Career Development',
    icon: '/images/career-icon.png',
    isExternal: false,
  },
  {
    title: 'Student Resources',
    description: 'Academic resources, internship opportunities, and guidance for college students.',
    link: '/academy/students',
    category: 'Academic',
    icon: '/images/student-icon.png',
    isExternal: false,
  },
  {
    title: 'Job Preparation',
    description: 'Resume templates, interview preparation, and job search strategies for cybersecurity roles.',
    link: '/academy/jobs',
    category: 'Career Support',
    icon: '/images/job-icon.png',
    isExternal: false,
  },
]

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
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

  // Featured courses with modern card styling
  const featuredCourses = [
    {
      id: "ethical-hacking",
      title: "Ethical Hacking & Penetration Testing",
      description: "Learn to identify and exploit vulnerabilities in systems and networks",
      icon: Terminal,
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.9,
      students: 12547,
      color: "from-blue-500/20 to-blue-600/5",
      borderColor: "border-blue-500/30",
      hoverColor: "group-hover:border-blue-500/60",
      tag: "Most Popular",
      tagColor: "bg-blue-500/20 text-blue-400"
    },
    {
      id: "secure-coding",
      title: "Secure Coding Practices",
      description: "Master the art of writing code that's resistant to common security threats",
      icon: Code,
      level: "Intermediate",
      duration: "6 weeks",
      rating: 4.8,
      students: 9853,
      color: "from-green-500/20 to-green-600/5",
      borderColor: "border-green-500/30",
      hoverColor: "group-hover:border-green-500/60",
      tag: "Trending",
      tagColor: "bg-green-500/20 text-green-400"
    },
    {
      id: "cloud-security",
      title: "Cloud Security Architecture",
      description: "Secure your cloud infrastructure against modern threats and attacks",
      icon: Server,
      level: "Advanced",
      duration: "10 weeks",
      rating: 4.7,
      students: 7638,
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "border-purple-500/30",
      hoverColor: "group-hover:border-purple-500/60",
      tag: "Advanced",
      tagColor: "bg-purple-500/20 text-purple-400"
    },
    {
      id: "network-security",
      title: "Network Security Fundamentals",
      description: "Learn to protect networks from unauthorized access and attacks",
      icon: Globe,
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.9,
      students: 15230,
      color: "from-amber-500/20 to-amber-600/5",
      borderColor: "border-amber-500/30",
      hoverColor: "group-hover:border-amber-500/60",
      tag: "Beginner Friendly",
      tagColor: "bg-amber-500/20 text-amber-400"
    }
  ];

  // Learning paths with card styling
  const learningPaths = [
    {
      title: "Security Analyst Path",
      description: "Master the skills needed to identify and mitigate security threats",
      icon: Shield,
      courses: 12,
      duration: "6 months",
      color: "from-neon-blue/20 to-blue-900/10"
    },
    {
      title: "Penetration Tester Path",
      description: "Learn to think like a hacker to secure systems and networks",
      icon: Terminal,
      courses: 10,
      duration: "5 months",
      color: "from-neon-green/20 to-green-900/10"
    },
    {
      title: "DevSecOps Path",
      description: "Integrate security into your development lifecycle",
      icon: Code,
      courses: 8,
      duration: "4 months",
      color: "from-purple-500/20 to-purple-900/10"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <SectionHeader
        title="Academy"
        description="Access our curated collection of cybersecurity learning resources, certification guides, and career development materials."
        icon={
          <svg
            className="h-12 w-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
        }
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {academyResources.map((resource) => (
            <ResourceCard
              key={resource.title}
              {...resource}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademyPage; 