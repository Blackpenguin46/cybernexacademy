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
  }
];

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-black">
      <SectionHeader
        title="Academy"
        description="Learn cybersecurity through structured resources, hands-on labs, and guided career paths."
        icon={<GraduationCap className="h-12 w-12 text-white" />}
      />

      {/* Academy Grid */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academySections.map((section, index) => (
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

      {/* Learning Path Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Start Your Learning Journey</h2>
            <p className="text-xl text-gray-400 mb-8">
              Begin with our foundational resources or jump into hands-on projects based on your experience level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/academy/foundational" className="flex items-center gap-2">
                  Start Learning
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/academy/roadmaps" className="flex items-center gap-2">
                  View Roadmaps
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