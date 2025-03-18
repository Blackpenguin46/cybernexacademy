"use client";

import React from 'react'
import Link from 'next/link'
import { Lightbulb, Newspaper, Building, Target, ExternalLink, AlertTriangle, TrendingUp, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"

const insightSections = [
  {
    title: "Latest News",
    description: "Stay informed with the latest cybersecurity news and updates",
    icon: Newspaper,
    link: "/insights/news",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    hoverColor: "group-hover:border-blue-500/60"
  },
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
      
      <div className="container mx-auto px-4 mt-16">
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
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-gray-900/30 border border-purple-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Newspaper className="w-5 h-5 text-purple-400 mr-2" />
              Latest Security News
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-500/10">
                <div className="flex gap-3">
                  <div className="bg-red-900/30 text-red-400 rounded-full px-3 py-1 text-xs font-medium flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Vulnerability
                  </div>
                  <div className="text-xs text-gray-400">March 20, 2024</div>
                </div>
                <h3 className="text-lg font-semibold text-white mt-2">Critical Vulnerability Found in Popular VPN Software</h3>
                <p className="text-gray-300 text-sm mt-1">Researchers have discovered a severe vulnerability that could allow attackers to intercept encrypted traffic.</p>
                <Link href="/insights/news" className="text-purple-400 text-sm mt-2 inline-flex items-center hover:underline">
                  Read more <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-500/10">
                <div className="flex gap-3">
                  <div className="bg-orange-900/30 text-orange-400 rounded-full px-3 py-1 text-xs font-medium flex items-center">
                    <Shield className="w-3 h-3 mr-1" /> Threat
                  </div>
                  <div className="text-xs text-gray-400">March 19, 2024</div>
                </div>
                <h3 className="text-lg font-semibold text-white mt-2">Ransomware Attacks Increase by 40% in Healthcare Sector</h3>
                <p className="text-gray-300 text-sm mt-1">New report indicates a significant rise in ransomware attacks targeting healthcare institutions.</p>
                <Link href="/insights/threats" className="text-purple-400 text-sm mt-2 inline-flex items-center hover:underline">
                  Read more <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/insights/news">
                <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10">
                  View All News
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-900/30 border border-purple-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
              Trending Topics
            </h2>
            <div className="space-y-4">
              <Link href="/insights/tools" className="bg-gray-900/50 p-3 rounded-lg border border-purple-500/10 flex items-center hover:border-purple-500/30 transition-colors">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">AI in Cybersecurity</span>
              </Link>
              <Link href="/insights/threats" className="bg-gray-900/50 p-3 rounded-lg border border-purple-500/10 flex items-center hover:border-purple-500/30 transition-colors">
                <Shield className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Zero Trust Security</span>
              </Link>
              <Link href="/insights/industries" className="bg-gray-900/50 p-3 rounded-lg border border-purple-500/10 flex items-center hover:border-purple-500/30 transition-colors">
                <Building className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Supply Chain Security</span>
              </Link>
              <Link href="/insights/breaches" className="bg-gray-900/50 p-3 rounded-lg border border-purple-500/10 flex items-center hover:border-purple-500/30 transition-colors">
                <AlertTriangle className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Recent Data Breaches</span>
              </Link>
              <Link href="/insights/trends" className="bg-gray-900/50 p-3 rounded-lg border border-purple-500/10 flex items-center hover:border-purple-500/30 transition-colors">
                <Target className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Cloud Security</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}