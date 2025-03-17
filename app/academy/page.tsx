"use client";

import React from 'react'
import Link from 'next/link'
import { GraduationCap, Book, Code, Target, ExternalLink, Wrench, Route } from 'lucide-react'
import { Button } from "@/components/ui/button"
import SectionHeader from '../components/SectionHeader'

const academySections = [
  {
    title: "Foundational Resources",
    description: "Essential cybersecurity concepts and fundamentals",
    icon: Book,
    link: "/academy/foundational",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    hoverColor: "group-hover:border-blue-500/60"
  },
  {
    title: "Projects & Labs",
    description: "Hands-on cybersecurity projects and interactive labs",
    icon: Wrench,
    link: "/academy/labs",
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/30",
    hoverColor: "group-hover:border-purple-500/60"
  },
  {
    title: "Career Roadmaps",
    description: "Structured learning paths for cybersecurity careers",
    icon: Route,
    link: "/academy/roadmaps",
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-500/30",
    hoverColor: "group-hover:border-green-500/60"
  },
  {
    title: "Research Papers",
    description: "Academic research and technical papers in cybersecurity",
    icon: GraduationCap,
    link: "/academy/research",
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "border-orange-500/30",
    hoverColor: "group-hover:border-orange-500/60"
  },
  {
    title: "Practice Challenges",
    description: "CTF-style challenges and security exercises",
    icon: Target,
    link: "/academy/challenges",
    color: "from-red-500/20 to-red-600/5",
    borderColor: "border-red-500/30",
    hoverColor: "group-hover:border-red-500/60"
  },
  {
    title: "Code Examples",
    description: "Security-focused code samples and implementations",
    icon: Code,
    link: "/academy/code",
    color: "from-sky-500/20 to-sky-600/5",
    borderColor: "border-sky-500/30",
    hoverColor: "group-hover:border-sky-500/60"
  },
  {
    title: "Cybersecurity Resources",
    description: "Comprehensive collection of books, websites, podcasts, and tools for cybersecurity professionals.",
    icon: Book,
    link: "/academy/resources",
    color: "from-purple-500/20 to-indigo-600/20",
    borderColor: "border-purple-500/30",
    hoverColor: "group-hover:border-purple-500/60"
  }
];

export default function AcademyPage() {
  return (
    <div className="container mx-auto px-4 pb-20">
      <SectionHeader
        title="Cybersecurity Academy"
        description="Educational resources to help you build your cybersecurity knowledge from fundamentals to advanced techniques"
        icon={<GraduationCap className="w-12 h-12 text-neon-blue" />}
      />
      
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academySections.map((section, index) => (
            <Link href={section.link} key={index} className="group transform transition-all hover:scale-105">
              <div className={`h-full rounded-lg border ${section.borderColor} ${section.hoverColor} bg-gradient-to-br ${section.color} p-6 transition-all duration-300 shadow-lg hover:shadow-neon-blue/20`}>
                <div className="flex justify-center mb-4">
                  <section.icon className="w-10 h-10 text-neon-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{section.title}</h3>
                <p className="text-gray-300 text-center">{section.description}</p>
                <div className="mt-4 flex items-center justify-center text-neon-blue text-sm group-hover:underline">
                  Explore <ExternalLink className="w-3 h-3 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-20 bg-gray-900/30 border border-neon-blue/20 rounded-lg p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 p-6 rounded-lg border border-neon-blue/10 flex flex-col items-center">
            <Code className="w-10 h-10 text-neon-blue mb-3" />
            <h3 className="text-xl font-semibold text-white mb-3">Tutorial-Based Learning</h3>
            <p className="text-gray-300 text-center">Follow step-by-step tutorials on various cybersecurity topics, from basic security practices to advanced penetration testing techniques.</p>
            <Link href="/academy/youtube" className="mt-auto pt-4">
              <Button className="bg-neon-blue hover:bg-blue-600">View Tutorials</Button>
            </Link>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-neon-blue/10 flex flex-col items-center">
            <Target className="w-10 h-10 text-neon-blue mb-3" />
            <h3 className="text-xl font-semibold text-white mb-3">Hands-on Practice</h3>
            <p className="text-gray-300 text-center">Apply your knowledge with real-world labs and exercises designed to simulate actual cybersecurity scenarios and challenges.</p>
            <Link href="/academy/labs" className="mt-auto pt-4">
              <Button className="bg-neon-blue hover:bg-blue-600">Explore Labs</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 