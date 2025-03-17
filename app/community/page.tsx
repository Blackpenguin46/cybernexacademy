"use client";

import React from 'react'
import Link from 'next/link'
import { Users, MessageSquare, Shield, Code, Zap, Database, Server, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import SectionHeader from '../components/SectionHeader'

export default function CommunityPage() {
  const communitySections = [
    {
      title: "Discord Servers",
      description: "Connect with cybersecurity professionals and enthusiasts through active Discord communities",
      icon: <MessageSquare className="w-8 h-8 text-neon-blue" />,
      link: "/community/discord",
      color: "from-blue-500/20 to-blue-600/5",
      borderColor: "border-blue-500/30",
      hoverColor: "group-hover:border-blue-500/60"
    },
    {
      title: "Reddit Communities",
      description: "Join discussions on popular cybersecurity subreddits for news, advice, and knowledge sharing",
      icon: <Users className="w-8 h-8 text-neon-blue" />,
      link: "/community/reddit",
      color: "from-orange-500/20 to-orange-600/5",
      borderColor: "border-orange-500/30",
      hoverColor: "group-hover:border-orange-500/60"
    },
    {
      title: "GitHub Resources",
      description: "Explore top cybersecurity tools, frameworks, and open-source projects on GitHub",
      icon: <Code className="w-8 h-8 text-neon-blue" />,
      link: "/community/github",
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "border-purple-500/30",
      hoverColor: "group-hover:border-purple-500/60"
    },
    {
      title: "Learning Forums",
      description: "Participate in community forums focused on cybersecurity learning and knowledge exchange",
      icon: <Server className="w-8 h-8 text-neon-blue" />,
      link: "/community/forums",
      color: "from-green-500/20 to-green-600/5",
      borderColor: "border-green-500/30",
      hoverColor: "group-hover:border-green-500/60"
    },
    {
      title: "Skool Communities",
      description: "Join structured learning communities on Skool with cybersecurity focus and expert guidance",
      icon: <Database className="w-8 h-8 text-neon-blue" />,
      link: "/community/skool",
      color: "from-pink-500/20 to-pink-600/5",
      borderColor: "border-pink-500/30", 
      hoverColor: "group-hover:border-pink-500/60"
    },
    {
      title: "Events & Meetups",
      description: "Find cybersecurity events, conferences, and meetups happening online and near you",
      icon: <Zap className="w-8 h-8 text-neon-blue" />,
      link: "/community/events",
      color: "from-yellow-500/20 to-yellow-600/5",
      borderColor: "border-yellow-500/30",
      hoverColor: "group-hover:border-yellow-500/60"
    }
  ];

  return (
    <div className="container mx-auto px-4 pb-20">
      <SectionHeader
        title="Cybersecurity Community"
        description="Connect with professionals, enthusiasts, and experts across various cybersecurity communities and platforms"
        icon={<Users className="w-12 h-12 text-neon-blue" />}
      />
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Community Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communitySections.map((section, index) => (
            <Link href={section.link} key={index} className="group">
              <div className={`h-full rounded-lg border ${section.borderColor} ${section.hoverColor} bg-gradient-to-br ${section.color} p-6 transition-all duration-300`}>
                <div className="mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
                <div className="mt-4 flex items-center text-neon-blue text-sm group-hover:underline">
                  Explore <ExternalLink className="w-3 h-3 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-16 bg-gray-900/30 border border-neon-blue/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Why Join Our Communities?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-lg border border-neon-blue/10">
            <Users className="w-6 h-6 text-neon-blue mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Networking</h3>
            <p className="text-gray-300 text-sm">Connect with professionals working in various cybersecurity fields</p>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-lg border border-neon-blue/10">
            <MessageSquare className="w-6 h-6 text-neon-blue mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Knowledge Sharing</h3>
            <p className="text-gray-300 text-sm">Learn from peers and experts through discussions and shared resources</p>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-lg border border-neon-blue/10">
            <Shield className="w-6 h-6 text-neon-blue mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Latest Trends</h3>
            <p className="text-gray-300 text-sm">Stay updated on the newest threats, tools, and security practices</p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to connect?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Explore our curated community platforms and join discussions with cybersecurity professionals around the world.
        </p>
        <Link href="/community/discord">
          <Button size="lg" className="bg-neon-blue hover:bg-blue-600">
            Join Our Discord <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
} 