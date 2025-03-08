"use client";

import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import ResourceCard from '../../components/ResourceCard'

const youtubeResources = [
  {
    title: 'Beginner-Friendly Channels',
    description: 'Start your cybersecurity journey with these educational channels.',
    resources: [
      {
        title: 'NetworkChuck',
        description: 'Engaging tutorials on networking, Linux, and cybersecurity fundamentals.',
        link: 'https://www.youtube.com/@NetworkChuck',
        category: 'General Security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'David Bombal',
        description: 'Comprehensive tutorials on networking, security tools, and certification prep.',
        link: 'https://www.youtube.com/@davidbombal',
        category: 'Networking & Security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Professor Messer',
        description: 'Free certification training videos for CompTIA A+, Network+, and Security+.',
        link: 'https://www.youtube.com/@professormesser',
        category: 'Certification Prep',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Advanced Technical Channels',
    description: 'Deep dives into advanced cybersecurity topics and techniques.',
    resources: [
      {
        title: 'John Hammond',
        description: 'Malware analysis, CTF walkthroughs, and advanced security concepts.',
        link: 'https://www.youtube.com/@_JohnHammond',
        category: 'Technical Analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'IppSec',
        description: 'Detailed walkthroughs of HackTheBox machines and penetration testing.',
        link: 'https://www.youtube.com/@ippsec',
        category: 'Penetration Testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'LiveOverflow',
        description: 'In-depth explanations of exploits, vulnerabilities, and security research.',
        link: 'https://www.youtube.com/@LiveOverflow',
        category: 'Security Research',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Specialized Topics',
    description: 'Channels focusing on specific areas of cybersecurity.',
    resources: [
      {
        title: 'STÖK',
        description: 'Bug bounty hunting and web application security testing.',
        link: 'https://www.youtube.com/@STOKfredrik',
        category: 'Bug Bounty',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'HackerSploit',
        description: 'Tutorials on penetration testing tools and methodologies.',
        link: 'https://www.youtube.com/@HackerSploit',
        category: 'Penetration Testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Null Byte',
        description: 'Practical tutorials on ethical hacking and security tools.',
        link: 'https://www.youtube.com/@NullByte',
        category: 'Ethical Hacking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Security News & Updates',
    description: 'Stay updated with the latest cybersecurity news and trends.',
    resources: [
      {
        title: 'Security Weekly',
        description: 'Weekly security news, interviews, and technical segments.',
        link: 'https://www.youtube.com/@SecurityWeekly',
        category: 'News & Analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'The Cyber Mentor',
        description: 'Career advice, penetration testing, and web security tutorials.',
        link: 'https://www.youtube.com/@TCMSecurityAcademy',
        category: 'Training & Career',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
];

export default function YouTubePage() {
  return (
    <div className="min-h-screen bg-black">
      <SectionHeader
        title="YouTube Learning Paths"
        description="Curated collection of the best cybersecurity YouTube channels and playlists, organized by topic and skill level."
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
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {youtubeResources.map((section, index) => (
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
  )
} 