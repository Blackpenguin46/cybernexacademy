"use client";

import React from 'react';
import Link from 'next/link';

const resources = [
  {
    title: "HackTheBox",
    description: "Advanced penetration testing labs and challenges",
    url: "https://www.hackthebox.com",
    icon: "🔒",
    category: "Learning Platforms"
  },
  {
    title: "Network Chuck",
    description: "Cybersecurity tutorials and networking concepts",
    url: "https://www.youtube.com/c/NetworkChuck",
    icon: "🌐",
    category: "Learning Platforms"
  },
  {
    title: "The Record by Recorded Future",
    description: "Comprehensive cybersecurity news coverage with a focus on global cyber incidents.",
    url: "https://therecord.media",
    icon: "📰",
    category: "News & Updates",
    tags: ["news", "threat-intelligence", "policy"]
  },
  {
    title: "TCM Security",
    description: "Practical cybersecurity training and courses",
    url: "https://academy.tcm-sec.com",
    icon: "🎓",
    category: "Learning Platforms"
  },
  {
    title: "daily.dev",
    description: "Developer news and articles",
    url: "https://daily.dev",
    icon: "📱",
    category: "News & Updates"
  },
  {
    title: "OwlSec Discord",
    description: "Cybersecurity community and discussions",
    url: "https://discord.gg/owlsec",
    icon: "🦉",
    category: "Community"
  },
  {
    title: "Awesome Cybersecurity Bible",
    description: "Comprehensive collection of cybersecurity resources, tools, and learning materials",
    url: "https://github.com/CyberAlbSecOP/Awesome_CyberSec_Bible",
    icon: "📚",
    category: "Resource Collections"
  },
  {
    title: "Awesome Cyber Security",
    description: "Curated list of cybersecurity learning platforms and tools",
    url: "https://github.com/okhosting/awesome-cyber-security",
    icon: "🛡️",
    category: "Resource Collections"
  },
  {
    title: "Awesome OSINT",
    description: "Open Source Intelligence tools and resources",
    url: "https://github.com/jivoi/awesome-osint",
    icon: "🔍",
    category: "Resource Collections"
  },
  {
    title: "PayloadsAllTheThings",
    description: "Web application security payloads and bypass techniques",
    url: "https://github.com/swisskyrepo/PayloadsAllTheThings",
    icon: "⚡",
    category: "Resource Collections"
  },
  {
    title: "Awesome Incident Response",
    description: "Tools and resources for incident response",
    url: "https://github.com/meirwah/awesome-incident-response",
    icon: "🚨",
    category: "Resource Collections"
  },
  {
    title: "ThreatHunter-Playbook",
    description: "Threat hunting techniques and resources",
    url: "https://github.com/Cyb3rWard0g/ThreatHunter-Playbook",
    icon: "🎯",
    category: "Resource Collections"
  }
];

export default function ResourcesPage() {
  // Get unique categories
  const categories = Array.from(new Set(resources.map(resource => resource.category)));

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cybersecurity Resources
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              A curated collection of tools, platforms, and learning materials to enhance your cybersecurity journey.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="container mx-auto px-4 mt-8">
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter(resource => resource.category === category)
                .map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-900/30 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="text-3xl mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400">{resource.description}</p>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 