"use client";

import React from 'react'
import Link from 'next/link'
import { BookOpen, GraduationCap, Code, Youtube, PenTool, FileText, ExternalLink, Book, Sheet, MessageSquare, Wrench, BookText as GlossaryIcon, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

interface AcademySection {
    title: string;
    description: string;
    icon: React.ElementType;
    link: string;
    color: string;
}

const academySections: AcademySection[] = [
  {
    title: "Learning Paths",
    description: "Structured journeys for different skill levels.",
    icon: GraduationCap,
    link: "/academy/paths",
    color: "purple", 
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides for specific skills.",
    icon: PenTool,
    link: "/academy/tutorials",
    color: "orange", 
  },
  {
    title: "Labs & Exercises",
    description: "Hands-on practice in realistic environments.",
    icon: Code,
    link: "/academy/labs",
    color: "red", 
  },
  {
    title: "YouTube Resources",
    description: "Curated video content from cybersecurity experts.",
    icon: Youtube,
    link: "/academy/youtube",
    color: "purple",
  },
  {
    title: "Documentation",
    description: "Comprehensive guides and reference materials.",
    icon: Book,
    link: "/academy/docs",
    color: "green", 
  },
  {
    title: "Cheatsheets",
    description: "Quick reference guides for tools and techniques.",
    icon: Sheet,
    link: "/academy/cheatsheets",
    color: "yellow", 
  },
  {
    title: "Glossary",
    description: "Definitions for common cybersecurity terms.",
    icon: GlossaryIcon,
    link: "/academy/glossary",
    color: "blue", 
  },
  {
    title: "Learning Forums",
    description: "Connect, ask questions, and share knowledge.",
    icon: MessageSquare,
    link: "/academy/forums",
    color: "cyan", 
  },
  {
    title: "Security Tools",
    description: "Curated list of essential security tools.",
    icon: Wrench,
    link: "/academy/tools",
    color: "teal", 
  },
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
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-10">
          Explore Academy Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {academySections.map((section) => (
            <Link href={section.link} key={section.title} className="block group">
              <div className={`bg-gray-900 border border-gray-800 rounded-lg p-6 h-full flex flex-col transition-all duration-300 group-hover:border-${section.color}-500/50 group-hover:shadow-xl group-hover:shadow-${section.color}-900/30`}>
                <div className={`mb-4 text-${section.color}-400`}>
                  <section.icon className="w-10 h-10" />
                </div>
                <h3 className={`text-xl font-semibold text-white mb-2 group-hover:text-${section.color}-300 transition-colors`}>
                  {section.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 flex-grow">
                  {section.description}
                </p>
                <div className={`mt-auto text-sm font-medium text-${section.color}-400 group-hover:text-${section.color}-300 flex items-center transition-colors`}>
                  Go to {section.title}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 