"use client";

import React from 'react';
import Link from 'next/link'
import { Lightbulb, Newspaper, Building, Target, ExternalLink, AlertTriangle, TrendingUp, Shield, Mail, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"

const insightSections = [
  {
    title: "Industry Insights",
    description: "Deep dives into cybersecurity across different industries",
    icon: Building,
    link: "/insights/industries",
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/30",
    hoverColor: "group-hover:border-purple-500/60"
  },
  {
    title: "Threat Intelligence",
    description: "Analysis of current threats and attack vectors",
    icon: AlertTriangle,
    link: "/insights/threats",
    color: "from-red-500/20 to-red-600/5",
    borderColor: "border-red-500/30",
    hoverColor: "group-hover:border-red-500/60"
  },
  {
    title: "Security Breaches",
    description: "Learn from past security incidents and breaches",
    icon: Target,
    link: "/insights/breaches",
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "border-orange-500/30",
    hoverColor: "group-hover:border-orange-500/60"
  },
  {
    title: "Emerging Trends",
    description: "Explore upcoming trends and future predictions",
    icon: TrendingUp,
    link: "/insights/trends",
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-500/30",
    hoverColor: "group-hover:border-green-500/60"
  },
  {
    title: "Research Papers",
    description: "Access academic research and technical papers",
    icon: Lightbulb,
    link: "/insights/research",
    color: "from-sky-500/20 to-sky-600/5",
    borderColor: "border-sky-500/30",
    hoverColor: "group-hover:border-sky-500/60"
  }
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4 mr-2" />
              Analysis & Reporting
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cybersecurity Insights
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl">
              Stay informed with the latest cybersecurity news, threat intelligence, and industry trends.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Subscribe to our cybersecurity insights</h2>
          <div className="flex flex-col items-center text-center">
            <p className="text-xl text-gray-400 mb-8">
              Get weekly analysis and expert commentary on the latest threats and security trends delivered to your inbox.
            </p>
            <a
              href="https://cybernexacademy.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center mx-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Subscribe to Our Substack
            </a>
          </div>
        </div>
      </div>
      
      {/* Insight Section Links Grid */}
      <div className="container mx-auto px-4 mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightSections.map((section, index) => (
              <Link href={section.link} key={index} className="group transform transition-all hover:scale-105">
                <div className={`h-full rounded-lg border ${section.borderColor} ${section.hoverColor} bg-gradient-to-br ${section.color} p-6 transition-all duration-300 shadow-lg hover:shadow-purple-500/20`}>
                  <div className="flex justify-center mb-4">
                    <section.icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{section.title}</h3>
                  <p className="text-gray-300 text-center">{section.description}</p>
                  <div className="mt-4 flex items-center justify-center text-purple-400 text-sm group-hover:underline">
                    Explore <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Discord News Feed card */}
            <Link href="/insights/discord-news" className="group transform transition-all hover:scale-105">
              <div className="h-full rounded-lg border border-indigo-500/30 group-hover:border-indigo-500/60 bg-gradient-to-br from-indigo-500/20 to-indigo-600/5 p-6 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20">
                <div className="flex justify-center mb-4">
                  <Newspaper className="w-10 h-10 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">Cybersecurity News</h3>
                <p className="text-gray-300 text-center">Real-time cybersecurity alerts and news from trusted sources.</p>
                <div className="flex justify-center items-center mt-2">
                  <span className="px-2 py-0.5 bg-indigo-900/30 text-indigo-400 text-xs font-medium rounded">LIVE</span>
                </div>
                <div className="mt-2 flex items-center justify-center text-indigo-400 text-sm group-hover:underline">
                  View News <ExternalLink className="w-3 h-3 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Removed News Feed & Static Trending Topics Section */}
      {/* The Trending Topics might be added back later if needed */}
    </div>
  )
}