"use client";

import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ResourceCard from '../components/ResourceCard'

// Community platform sections
const communityPlatforms = [
  {
    title: 'Discord Communities',
    description: 'Real-time chat and discussions with cybersecurity professionals and enthusiasts.',
    resources: [
      {
        title: 'The CyberSec Hub',
        description: 'Beginner-friendly community with dedicated resources and mentorship programs.',
        link: '#', // Replace with actual Discord invite
        category: 'Discord',
        icon: '/images/discord-icon.png',
        isExternal: true,
      },
      {
        title: 'Blue Team Village',
        description: 'Focus on defensive security, SOC skills, and blue team operations.',
        link: '#', // Replace with actual Discord invite
        category: 'Discord',
        icon: '/images/discord-icon.png',
        isExternal: true,
      },
      {
        title: 'Red Teaming',
        description: 'Community dedicated to penetration testing and ethical hacking practices.',
        link: '#', // Replace with actual Discord invite
        category: 'Discord',
        icon: '/images/discord-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Skool Communities',
    description: 'Structured learning and networking platforms for cybersecurity enthusiasts.',
    resources: [
      {
        title: 'CyberSkool Academy',
        description: 'Comprehensive cybersecurity courses with dedicated mentorship programs.',
        link: '#', // Replace with actual Skool link
        category: 'Skool',
        icon: '/images/skool-icon.png',
        isExternal: true,
      },
      {
        title: 'Ethical Hacking Club',
        description: 'Weekly challenges and discussions for aspiring ethical hackers.',
        link: '#', // Replace with actual Skool link
        category: 'Skool',
        icon: '/images/skool-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Reddit Communities',
    description: 'Discussion forums and Q&A platforms for cybersecurity topics.',
    resources: [
      {
        title: 'r/cybersecurity',
        description: 'General discussions, career advice, and industry news in cybersecurity.',
        link: 'https://reddit.com/r/cybersecurity',
        category: 'Reddit',
        icon: '/images/reddit-icon.png',
        isExternal: true,
      },
      {
        title: 'r/netsec',
        description: 'Technical discussions about network security news and trends.',
        link: 'https://reddit.com/r/netsec',
        category: 'Reddit',
        icon: '/images/reddit-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'LinkedIn Groups',
    description: 'Professional networking and job insights in cybersecurity.',
    resources: [
      {
        title: 'Cybersecurity Professionals',
        description: 'Industry discussions, job postings, and professional networking.',
        link: 'https://www.linkedin.com/groups/cybersecurity-professionals',
        category: 'LinkedIn',
        icon: '/images/linkedin-icon.png',
        isExternal: true,
      },
      {
        title: 'Cyber Threat Intelligence',
        description: 'Focus on threat research, analysis, and mitigation strategies.',
        link: 'https://www.linkedin.com/groups/cyber-threat-intelligence',
        category: 'LinkedIn',
        icon: '/images/linkedin-icon.png',
        isExternal: true,
      },
    ],
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black">
      <SectionHeader
        title="Community"
        description="Connect with cybersecurity communities across various platforms. Join discussions, share knowledge, and grow together."
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
        {communityPlatforms.map((platform, index) => (
          <div key={platform.title} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">{platform.title}</h2>
            <p className="text-gray-400 mb-6">{platform.description}</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {platform.resources.map((resource) => (
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
  )
} 