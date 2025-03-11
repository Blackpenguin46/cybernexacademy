"use client";

import React from 'react'
import Link from 'next/link'
import { Users, MessageSquare, Github, Twitter, Linkedin, Globe, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import SectionHeader from '../components/SectionHeader'

const communityPlatforms = [
  {
    title: "Forums & Blogs",
    description: "Join discussions and share knowledge with the cybersecurity community",
    icon: MessageSquare,
    link: "/community/forums",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    hoverColor: "group-hover:border-blue-500/60"
  },
  {
    title: "GitHub Projects",
    description: "Explore and contribute to open-source security tools and projects",
    icon: Github,
    link: "/community/github",
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/30",
    hoverColor: "group-hover:border-purple-500/60"
  },
  {
    title: "Twitter Feed",
    description: "Stay updated with real-time security news and discussions",
    icon: Twitter,
    link: "/community/twitter",
    color: "from-sky-500/20 to-sky-600/5",
    borderColor: "border-sky-500/30",
    hoverColor: "group-hover:border-sky-500/60"
  },
  {
    title: "LinkedIn Network",
    description: "Connect with cybersecurity professionals and organizations",
    icon: Linkedin,
    link: "/community/linkedin",
    color: "from-blue-600/20 to-blue-700/5",
    borderColor: "border-blue-600/30",
    hoverColor: "group-hover:border-blue-600/60"
  },
  {
    title: "Discord Servers",
    description: "Join real-time chat communities for learning and collaboration",
    icon: MessageSquare,
    link: "/community/discord",
    color: "from-indigo-500/20 to-indigo-600/5",
    borderColor: "border-indigo-500/30",
    hoverColor: "group-hover:border-indigo-500/60"
  },
  {
    title: "Reddit Communities",
    description: "Engage with cybersecurity enthusiasts on various subreddits",
    icon: Globe,
    link: "/community/reddit",
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "border-orange-500/30",
    hoverColor: "group-hover:border-orange-500/60"
  },
  {
    title: "Cybersecurity Blogs",
    description: "Read insights and articles from industry experts",
    icon: ExternalLink,
    link: "/community/blogs",
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-500/30",
    hoverColor: "group-hover:border-green-500/60"
  },
  {
    title: "Open Source Security Tools",
    description: "Discover and contribute to open-source security projects",
    icon: Github,
    link: "/community/open-source",
  },
  {
    title: "Security Influencers",
    description: "Follow top cybersecurity influencers for insights and updates",
    icon: Twitter,
    link: "/community/influencers",
    color: "from-sky-500/20 to-sky-600/5",
    borderColor: "border-sky-500/30",
    hoverColor: "group-hover:border-sky-500/60"
  },
  {
    title: "Cybersecurity News",
    description: "Stay informed with the latest cybersecurity news and trends",
    icon: ExternalLink,
    link: "/community/news",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    hoverColor: "group-hover:border-blue-500/60"
  },
  {
    title: "Professional Groups",
    description: "Join LinkedIn groups focused on cybersecurity topics",
    icon: Linkedin,
    link: "/community/groups",
    color: "from-blue-600/20 to-blue-700/5",
    borderColor: "border-blue-600/30",
    hoverColor: "group-hover:border-blue-600/60"
  },
  {
    title: "Industry Leaders",
    description: "Connect with industry leaders and expand your professional network",
    icon: ExternalLink,
    link: "/community/leaders",
    color: "from-teal-500/20 to-teal-600/5",
    borderColor: "border-teal-500/30",
    hoverColor: "group-hover:border-teal-500/60"
  },
  {
    title: "Cybersecurity Channels",
    description: "Participate in discussions on dedicated cybersecurity channels",
    icon: MessageSquare,
    link: "/community/channels",
    color: "from-indigo-500/20 to-indigo-600/5",
    borderColor: "border-indigo-500/30",
    hoverColor: "group-hover:border-indigo-500/60"
  },
  {
    title: "Learning Communities",
    description: "Join communities focused on learning and skill development",
    icon: ExternalLink,
    link: "/community/learning",
    color: "from-yellow-500/20 to-yellow-600/5",
    borderColor: "border-yellow-500/30",
    hoverColor: "group-hover:border-yellow-500/60"
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black">
      <SectionHeader
        title="Community"
        description="Connect with cybersecurity professionals, join discussions, and collaborate with peers across various platforms."
        icon={<Users className="h-12 w-12 text-white" />}
      />

      {/* Community Platforms Grid */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityPlatforms.map((platform, index) => (
                <Link key={index} href={platform.link} className="group">
                  <div className={`h-full p-6 rounded-lg border ${platform.borderColor} ${platform.hoverColor} transition-colors bg-gradient-to-b ${platform.color}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-900/50 flex items-center justify-center">
                        <platform.icon className="w-6 h-6 text-gray-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {platform.title}
                    </h3>
                    <p className="text-gray-400">
                      {platform.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Community Guidelines</h2>
            <p className="text-xl text-gray-400 mb-8">
              Our community thrives on mutual respect, knowledge sharing, and collaborative learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/community/guidelines" className="flex items-center gap-2">
                  View Guidelines
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/community/code-of-conduct" className="flex items-center gap-2">
                  Code of Conduct
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 