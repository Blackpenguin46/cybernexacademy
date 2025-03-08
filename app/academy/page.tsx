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

// Academy sections with resources
const academySections = [
  {
    title: 'Certifications & Training',
    description: 'Prepare for industry-recognized cybersecurity certifications with curated study materials.',
    resources: [
      {
        title: 'CompTIA Security+',
        description: 'Essential certification for IT security professionals. Covers network security, compliance, and operations.',
        link: '/academy/certifications/security-plus',
        category: 'Entry Level',
        icon: '/images/comptia-icon.png',
        isExternal: false,
      },
      {
        title: 'CEH (Certified Ethical Hacker)',
        description: 'Learn ethical hacking methodologies and techniques for penetration testing.',
        link: '/academy/certifications/ceh',
        category: 'Intermediate',
        icon: '/images/ceh-icon.png',
        isExternal: false,
      },
      {
        title: 'CISSP',
        description: 'Advanced certification covering security and risk management principles.',
        link: '/academy/certifications/cissp',
        category: 'Advanced',
        icon: '/images/cissp-icon.png',
        isExternal: false,
      },
    ],
  },
  {
    title: 'Hands-on Labs & Practice',
    description: 'Gain practical experience with interactive cybersecurity labs and challenges.',
    resources: [
      {
        title: 'TryHackMe',
        description: 'Learn cybersecurity through hands-on labs and guided learning paths.',
        link: 'https://tryhackme.com',
        category: 'Practice Platform',
        icon: '/images/thm-icon.png',
        isExternal: true,
      },
      {
        title: 'Hack The Box',
        description: 'Challenge yourself with realistic penetration testing scenarios.',
        link: 'https://hackthebox.com',
        category: 'Practice Platform',
        icon: '/images/htb-icon.png',
        isExternal: true,
      },
      {
        title: 'PortSwigger Web Security Academy',
        description: 'Learn web security with interactive labs and detailed tutorials.',
        link: 'https://portswigger.net/web-security',
        category: 'Web Security',
        icon: '/images/portswigger-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'YouTube Learning Paths',
    description: 'Curated YouTube channels and playlists for visual cybersecurity learning.',
    resources: [
      {
        title: 'John Hammond',
        description: 'Malware analysis, CTF walkthroughs, and cybersecurity tutorials.',
        link: 'https://www.youtube.com/@_JohnHammond',
        category: 'Tutorial Channel',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'David Bombal',
        description: 'Networking, cybersecurity, and certification preparation content.',
        link: 'https://www.youtube.com/@davidbombal',
        category: 'Tutorial Channel',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'NetworkChuck',
        description: 'Engaging tutorials on networking, Linux, and cybersecurity concepts.',
        link: 'https://www.youtube.com/@NetworkChuck',
        category: 'Tutorial Channel',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Career Development',
    description: 'Resources for building your cybersecurity career and professional development.',
    resources: [
      {
        title: 'Resume Builder',
        description: 'Cybersecurity-focused resume templates and writing guides.',
        link: '/academy/careers/resume',
        category: 'Career Tools',
        icon: '/images/resume-icon.png',
        isExternal: false,
      },
      {
        title: 'Interview Preparation',
        description: 'Common interview questions and preparation strategies.',
        link: '/academy/careers/interview',
        category: 'Career Tools',
        icon: '/images/interview-icon.png',
        isExternal: false,
      },
      {
        title: 'Career Paths Guide',
        description: 'Explore different cybersecurity career paths and requirements.',
        link: '/academy/careers/paths',
        category: 'Career Planning',
        icon: '/images/career-icon.png',
        isExternal: false,
      },
    ],
  },
  {
    title: 'Student Resources',
    description: 'Academic resources and guidance for college students pursuing cybersecurity.',
    resources: [
      {
        title: 'Academic Programs',
        description: 'Guide to cybersecurity degree programs and academic paths.',
        link: '/academy/students/programs',
        category: 'Academic',
        icon: '/images/academic-icon.png',
        isExternal: false,
      },
      {
        title: 'Internship Guide',
        description: 'Find and apply for cybersecurity internships and co-op programs.',
        link: '/academy/students/internships',
        category: 'Career Development',
        icon: '/images/internship-icon.png',
        isExternal: false,
      },
      {
        title: 'Student Organizations',
        description: 'Connect with cybersecurity clubs and student organizations.',
        link: '/academy/students/organizations',
        category: 'Networking',
        icon: '/images/org-icon.png',
        isExternal: false,
      },
    ],
  },
];

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
        description="Access curated cybersecurity learning resources, certification guides, hands-on labs, and career development materials."
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
        {academySections.map((section, index) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
            <p className="text-gray-400 mb-6">{section.description}</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.resources.map((resource) => (
                <ResourceCard
                  key={resource.title}
                  {...resource}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademyPage; 