"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, MessagesSquare, Globe, FileText, Instagram, ArrowRight, ExternalLink, Calendar, User } from 'lucide-react';
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ResourceCard from '../components/ResourceCard'

const CommunityPage = () => {
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

  // Community sections data
  const communitySections = [
    {
      title: 'Discord Server',
      description: 'Join our active Discord community for discussions, help, and networking',
      icon: MessagesSquare,
      href: 'https://discord.gg/cybernex',
      color: '#5865F2',
      isExternal: true,
    },
    {
      title: 'Instagram',
      description: 'Follow us on Instagram for quick tips, news, and visual cybersecurity content',
      icon: Instagram,
      href: 'https://instagram.com/cybernexacademy',
      color: '#E1306C',
      isExternal: true,
    },
    {
      title: 'Community Hub',
      description: 'Find study groups, mentors, and collaborators for projects',
      icon: Users,
      href: '/community/hub',
      color: 'neon-green',
    },
    {
      title: 'Online Spaces',
      description: 'Virtual meeting rooms, labs, and collaboration spaces',
      icon: Globe,
      href: '/community/spaces',
      color: 'neon-blue',
    },
    {
      title: 'Events',
      description: 'Webinars, workshops, CTF competitions, and meetups',
      icon: Calendar,
      href: '/community/events',
      color: 'neon-purple',
    },
    {
      title: 'Community Leaders',
      description: 'Meet our moderators, mentors, and content creators',
      icon: User,
      href: '/community/leaders',
      color: 'neon-pink',
    },
  ];

  // Community events
  const upcomingEvents = [
    {
      title: 'Introduction to Ethical Hacking',
      type: 'Workshop',
      date: 'June 25, 2023',
      time: '3:00 PM - 5:00 PM EDT',
      host: 'Sarah Johnson',
      location: 'Discord',
      href: '/community/events/intro-ethical-hacking',
    },
    {
      title: 'Monthly CTF Competition',
      type: 'Competition',
      date: 'July 1-2, 2023',
      time: 'All Day',
      host: 'CyberNex Team',
      location: 'Virtual Lab',
      href: '/community/events/monthly-ctf',
    },
    {
      title: 'Job Hunting in Cybersecurity',
      type: 'Panel Discussion',
      date: 'July 10, 2023',
      time: '6:00 PM - 7:30 PM EDT',
      host: 'Industry Professionals',
      location: 'Zoom Webinar',
      href: '/community/events/job-hunting',
    },
  ];

  // Featured community leaders
  const communityLeaders = [
    {
      name: 'Alex Rivera',
      role: 'Discord Admin',
      specialty: 'Network Security',
      image: '/placeholders/leader1.jpg',
      href: '/community/leaders/alex-rivera',
    },
    {
      name: 'Maya Chen',
      role: 'Content Creator',
      specialty: 'Malware Analysis',
      image: '/placeholders/leader2.jpg',
      href: '/community/leaders/maya-chen',
    },
    {
      name: 'Jamal Washington',
      role: 'Mentor',
      specialty: 'Cloud Security',
      image: '/placeholders/leader3.jpg',
      href: '/community/leaders/jamal-washington',
    },
    {
      name: 'Sophia Patel',
      role: 'Event Coordinator',
      specialty: 'Web Application Security',
      image: '/placeholders/leader4.jpg',
      href: '/community/leaders/sophia-patel',
    },
  ];

  const communityResources = [
    {
      title: 'CyberNex Discord',
      description: 'Join our official Discord server to connect with fellow learners, share resources, and get help from the community.',
      link: '#', // Replace with actual Discord invite link
      category: 'Official Community',
      icon: '/images/discord-icon.png',
      isExternal: true,
    },
    {
      title: 'CyberNex Instagram',
      description: 'Follow us on Instagram for daily cybersecurity tips, news updates, and community highlights.',
      link: '#', // Replace with actual Instagram link
      category: 'Official Community',
      icon: '/images/instagram-icon.png',
      isExternal: true,
    },
    {
      title: 'r/cybersecurity',
      description: 'Join the largest cybersecurity community on Reddit for discussions, news, and career advice.',
      link: 'https://reddit.com/r/cybersecurity',
      category: 'Reddit',
      icon: '/images/reddit-icon.png',
      isExternal: true,
    },
    {
      title: 'Hack The Box Discord',
      description: 'Connect with security researchers and CTF enthusiasts in the Hack The Box community.',
      link: 'https://discord.gg/hackthebox',
      category: 'Partner Community',
      icon: '/images/htb-icon.png',
      isExternal: true,
    },
    {
      title: 'TryHackMe Discord',
      description: 'Join the TryHackMe community to discuss rooms, challenges, and learning paths.',
      link: 'https://discord.gg/tryhackme',
      category: 'Partner Community',
      icon: '/images/thm-icon.png',
      isExternal: true,
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <SectionHeader
        title="Community"
        description="Connect with fellow cybersecurity enthusiasts, share knowledge, and grow together in our vibrant community spaces."
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        }
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communityResources.map((resource) => (
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

export default CommunityPage; 