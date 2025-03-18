"use client";

import React from 'react'
import Link from 'next/link'
import { BookOpen, GraduationCap, Code, Youtube, PenTool, FileText, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

const academySections = [
  {
    title: "Learning Paths",
    description: "Structured learning journeys for different skill levels",
    icon: GraduationCap,
    link: "/academy/paths",
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-500/30",
    hoverColor: "group-hover:border-green-500/60"
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides for specific cybersecurity skills",
    icon: PenTool,
    link: "/academy/tutorials",
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/30",
    hoverColor: "group-hover:border-emerald-500/60"
  },
  {
    title: "Labs & Exercises",
    description: "Hands-on practice environments for real-world scenarios",
    icon: Code,
    link: "/academy/labs",
    color: "from-teal-500/20 to-teal-600/5",
    borderColor: "border-teal-500/30",
    hoverColor: "group-hover:border-teal-500/60"
  },
  {
    title: "YouTube Resources",
    description: "Curated video content from top cybersecurity experts",
    icon: Youtube,
    link: "/academy/youtube",
    color: "from-lime-500/20 to-lime-600/5",
    borderColor: "border-lime-500/30",
    hoverColor: "group-hover:border-lime-500/60"
  },
  {
    title: "Documentation",
    description: "Comprehensive guides and reference materials",
    icon: FileText,
    link: "/academy/docs",
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "border-cyan-500/30",
    hoverColor: "group-hover:border-cyan-500/60"
  },
  {
    title: "Cheatsheets",
    description: "Quick reference guides for tools and techniques",
    icon: BookOpen,
    link: "/academy/cheatsheets",
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-500/30",
    hoverColor: "group-hover:border-green-500/60"
  }
];

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Learning & Development
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CyberNex Academy
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl">
              Your journey to cybersecurity expertise starts here with structured learning paths and practical resources.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academySections.map((section, index) => (
              <Link href={section.link} key={index} className="group transform transition-all hover:scale-105">
                <div className={`h-full rounded-lg border ${section.borderColor} ${section.hoverColor} bg-gradient-to-br ${section.color} p-6 transition-all duration-300 shadow-lg hover:shadow-green-500/20`}>
                  <div className="flex justify-center mb-4">
                    <section.icon className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{section.title}</h3>
                  <p className="text-gray-300 text-center">{section.description}</p>
                  <div className="mt-4 flex items-center justify-center text-green-400 text-sm group-hover:underline">
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
          <div className="md:col-span-2 bg-gray-900/30 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <GraduationCap className="w-5 h-5 text-green-400 mr-2" />
              Featured Learning Paths
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/10">
                <div className="flex gap-3">
                  <div className="bg-green-900/30 text-green-400 rounded-full px-3 py-1 text-xs font-medium flex items-center">
                    <BookOpen className="w-3 h-3 mr-1" /> Beginner
                  </div>
                  <div className="text-xs text-gray-400">12 Modules</div>
                </div>
                <h3 className="text-lg font-semibold text-white mt-2">Cybersecurity Fundamentals</h3>
                <p className="text-gray-300 text-sm mt-1">Build a solid foundation in cybersecurity principles, threat models, and basic defensive strategies.</p>
                <Link href="/academy/paths" className="text-green-400 text-sm mt-2 inline-flex items-center hover:underline">
                  Start learning <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/10">
                <div className="flex gap-3">
                  <div className="bg-teal-900/30 text-teal-400 rounded-full px-3 py-1 text-xs font-medium flex items-center">
                    <Code className="w-3 h-3 mr-1" /> Intermediate
                  </div>
                  <div className="text-xs text-gray-400">8 Modules</div>
                </div>
                <h3 className="text-lg font-semibold text-white mt-2">Ethical Hacking Essentials</h3>
                <p className="text-gray-300 text-sm mt-1">Learn practical penetration testing skills and ethical hacking methodologies to identify security vulnerabilities.</p>
                <Link href="/academy/paths" className="text-green-400 text-sm mt-2 inline-flex items-center hover:underline">
                  Start learning <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/academy/paths">
                <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-500/10">
                  View All Learning Paths
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-900/30 border border-green-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <PenTool className="w-5 h-5 text-green-400 mr-2" />
              Latest Resources
            </h2>
            <div className="space-y-4">
              <Link href="/academy/tutorials" className="bg-gray-900/50 p-3 rounded-lg border border-green-500/10 flex items-center hover:border-green-500/30 transition-colors">
                <PenTool className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Web App Security Testing</span>
              </Link>
              <Link href="/academy/cheatsheets" className="bg-gray-900/50 p-3 rounded-lg border border-green-500/10 flex items-center hover:border-green-500/30 transition-colors">
                <BookOpen className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Linux Command Cheatsheet</span>
              </Link>
              <Link href="/academy/youtube" className="bg-gray-900/50 p-3 rounded-lg border border-green-500/10 flex items-center hover:border-green-500/30 transition-colors">
                <Youtube className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Quantum Computing Basics</span>
              </Link>
              <Link href="/academy/labs" className="bg-gray-900/50 p-3 rounded-lg border border-green-500/10 flex items-center hover:border-green-500/30 transition-colors">
                <Code className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Network Traffic Analysis Lab</span>
              </Link>
              <Link href="/academy/docs" className="bg-gray-900/50 p-3 rounded-lg border border-green-500/10 flex items-center hover:border-green-500/30 transition-colors">
                <FileText className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">OWASP Top 10 Documentation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 