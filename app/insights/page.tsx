"use client";

import React, { useState } from 'react';
import Link from 'next/link'
import { 
  Lightbulb, // For Hero
  Newspaper, // For News quick link
  // Removed Building
  // Removed ExternalLink (no longer used)
  // Removed TrendingUp
  // Removed Shield
  FileText, // For Reports quick link
  Terminal, // For Tools quick link
  // Removed LinkIcon
  // Removed Target
  MessageSquare,
  Filter,
  X,
  Search
} from 'lucide-react'
import { Button } from '@/components/ui/button';

export default function LearningForumsPage() {
  // Add state later

  // Add filtering logic later

  // Updated Quick Links - Point reports to /research
  const quickLinks = [
    { title: "Cybersecurity News", href: "/insights/news", icon: Newspaper, description: "Latest headlines and curated sources" },
    { title: "Research & Reports", href: "/insights/research", icon: FileText, description: "Industry analysis and key reports" }, 
    { title: "Security Tools & Resources", href: "/insights/tools", icon: Terminal, description: "Curated tools and technical resources" } 
  ];

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Placeholder for Hero (Cyan Theme) */}
      <div className="bg-gradient-to-b from-cyan-950 via-cyan-900/30 to-gray-950 pt-24 pb-16 text-center border-b border-cyan-800/30 shadow-lg">
        <div className="container mx-auto px-4">
            <MessageSquare className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Learning Forums & Communities
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with others, ask questions, and share knowledge in these online communities.
            </p>
        </div>
      </div>

      {/* Placeholder for Filters & Content */}
      <div className="container mx-auto px-4 mt-12">
         <p className="text-center text-gray-500">[Filter UI and Forum Links will go here]</p>
      </div>

      {/* Quick Links Section (Kept & Updated) */}
      <div className="container mx-auto px-4 -mt-8 mb-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link href={link.href} key={link.href} className="group block bg-gray-800/50 backdrop-blur-sm border border-cyan-800/30 rounded-lg p-4 hover:bg-gray-700/70 hover:border-cyan-700/50 transition-all duration-300">
              <div className="flex items-center">
                <link.icon className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300">{link.title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 