"use client";

import React from 'react'
import Link from 'next/link'
import { Lightbulb, Newspaper, Building, Target, ExternalLink, AlertTriangle, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import SectionHeader from '../components/SectionHeader'

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
    <div className="min-h-screen bg-black">
      <SectionHeader
        title="Insights"
        description="Explore cybersecurity news, trends, research, and industry insights to stay ahead of emerging threats."
        icon={<Lightbulb className="h-12 w-12 text-white" />}
      />

      {/* Insights Grid */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insightSections.map((section, index) => (
                <Link key={index} href={section.link} className="group">
                  <div className={`h-full p-6 rounded-lg border ${section.borderColor} ${section.hoverColor} transition-colors bg-gradient-to-b ${section.color}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-900/50 flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-gray-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-400">
                      {section.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Informed</h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our newsletter for weekly cybersecurity insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/insights/newsletter" className="flex items-center gap-2">
                  Subscribe Now
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/insights/archive" className="flex items-center gap-2">
                  View Archive
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