"use client";

import React from 'react'
import Link from 'next/link'
import { Users, MessageSquare, Shield, Code, Zap, Database, Server, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CommunityPage() {
  const communitySections = [
    {
      title: "Discord Servers",
      description: "Connect with cybersecurity professionals and enthusiasts through active Discord communities",
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      link: "/community/discord",
      color: "from-blue-500/20 to-blue-600/5",
      borderColor: "border-blue-500/30",
      hoverColor: "group-hover:border-blue-500/60"
    },
    {
      title: "Reddit Communities",
      description: "Join discussions on popular cybersecurity subreddits for news, advice, and knowledge sharing",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      link: "/community/reddit",
      color: "from-orange-500/20 to-orange-600/5",
      borderColor: "border-orange-500/30",
      hoverColor: "group-hover:border-orange-500/60"
    },
    {
      title: "GitHub Resources",
      description: "Explore top cybersecurity tools, frameworks, and open-source projects on GitHub",
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      link: "/community/github",
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "border-purple-500/30",
      hoverColor: "group-hover:border-purple-500/60"
    },
    {
      title: "Learning Forums",
      description: "Participate in community forums focused on cybersecurity learning and knowledge exchange",
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      link: "/community/forums",
      color: "from-green-500/20 to-green-600/5",
      borderColor: "border-green-500/30",
      hoverColor: "group-hover:border-green-500/60"
    },
    {
      title: "Skool Communities",
      description: "Join structured learning communities on Skool with cybersecurity focus and expert guidance",
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      link: "/community/skool",
      color: "from-pink-500/20 to-pink-600/5",
      borderColor: "border-pink-500/30", 
      hoverColor: "group-hover:border-pink-500/60"
    },
    {
      title: "Events & Meetups",
      description: "Find cybersecurity events, conferences, and meetups happening online and near you",
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      link: "/community/events",
      color: "from-yellow-500/20 to-yellow-600/5",
      borderColor: "border-yellow-500/30",
      hoverColor: "group-hover:border-yellow-500/60"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Connect & Collaborate
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cybersecurity Community
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl">
              Connect with professionals, enthusiasts, and experts across various cybersecurity communities and platforms.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Users className="w-5 h-5 text-cyan-400 mr-2" />
          Community Platforms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {communitySections.map((section, index) => (
            <Link href={section.link} key={index} className="group">
              <div className={`h-full rounded-lg border ${section.borderColor} ${section.hoverColor} bg-gradient-to-br ${section.color} p-6 transition-all duration-300`}>
                <div className="mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm group-hover:underline">
                  Explore <ExternalLink className="w-3 h-3 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-gray-900/30 border border-cyan-500/20 rounded-lg p-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-cyan-400 mr-2" />
            Why Join Our Communities?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-900/50 p-5 rounded-lg border border-cyan-500/10">
              <Users className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Networking</h3>
              <p className="text-gray-300 text-sm">Connect with professionals working in various cybersecurity fields</p>
            </div>
            <div className="bg-gray-900/50 p-5 rounded-lg border border-cyan-500/10">
              <MessageSquare className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Knowledge Sharing</h3>
              <p className="text-gray-300 text-sm">Learn from peers and experts through discussions and shared resources</p>
            </div>
            <div className="bg-gray-900/50 p-5 rounded-lg border border-cyan-500/10">
              <Shield className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Latest Trends</h3>
              <p className="text-gray-300 text-sm">Stay updated on the newest threats, tools, and security practices</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to connect?</h2>
          <p className="text-gray-300 mb-8">
            Explore our curated community platforms and join discussions with cybersecurity professionals around the world.
          </p>
          <Link href="/community/discord">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              Join Our Discord <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 