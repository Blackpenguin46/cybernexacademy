"use client";

import React from 'react';
import Link from 'next/link';
import { Lightbulb, Newspaper, Building, ShieldAlert, Target, TrendingUp, FileText } from 'lucide-react'; // Icons for Insights
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Keep Button

// Interface for Quick Links
interface QuickLink {
  href: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string; // e.g., 'purple', 'blue', 'red' for accents
}

const quickLinks: QuickLink[] = [
  {
    href: '/insights/news',
    title: 'Cybersecurity News',
    description: 'Latest headlines, breaches, and vulnerability reports.',
    icon: Newspaper,
    color: 'blue'
  },
  {
    href: '/insights/industry',
    title: 'Industry Insights',
    description: 'Analysis of market trends, business impacts, and strategies.',
    icon: Building,
    color: 'purple'
  },
  {
    href: '/insights/threat-intel',
    title: 'Threat Intelligence',
    description: 'Actionable intelligence on active threats and adversaries.',
    icon: ShieldAlert,
    color: 'red'
  },
  {
    href: '/insights/breaches',
    title: 'Security Breaches',
    description: 'Details and analysis of recent security incidents.',
    icon: Target,
    color: 'orange'
  },
  {
    href: '/insights/trends',
    title: 'Emerging Trends',
    description: 'Exploring upcoming technologies and future security challenges.',
    icon: TrendingUp,
    color: 'cyan'
  },
  {
    href: '/insights/research',
    title: 'Research & Reports',
    description: 'In-depth analysis, studies, and technical papers.',
    icon: FileText,
    color: 'green'
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section (Purple Theme for Insights) */}
      <div className="bg-gradient-to-b from-purple-950 via-purple-900/30 to-gray-950 pt-24 pb-16 text-center border-b border-purple-800/30 shadow-lg">
        <div className="container mx-auto px-4">
            <Lightbulb className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Cybersecurity Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Stay informed with the latest news, research, threat intelligence, and analysis from the cybersecurity world.
            </p>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-10">
          Explore Insights Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {quickLinks.map((link) => (
            <Link href={link.href} key={link.title} className="block group">
              <div className={`bg-gray-900 border border-gray-800 rounded-lg p-6 h-full flex flex-col transition-all duration-300 group-hover:border-${link.color}-500/50 group-hover:shadow-xl group-hover:shadow-${link.color}-900/30`}>
                <div className={`mb-4 text-${link.color}-400`}>
                  <link.icon className="w-10 h-10" />
                </div>
                <h3 className={`text-xl font-semibold text-white mb-2 group-hover:text-${link.color}-300 transition-colors`}>
                  {link.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 flex-grow">
                  {link.description}
                </p>
                <div className={`mt-auto text-sm font-medium text-${link.color}-400 group-hover:text-${link.color}-300 flex items-center transition-colors`}>
                  Go to {link.title}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 