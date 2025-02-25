'use client'

import Link from 'next/link'
import { Book, Video, MessageCircle, Lightbulb, FileText, GitBranch } from 'lucide-react'

export default function LearnPage() {
  const learningResources = [
    {
      title: "Learning Roadmaps",
      icon: GitBranch,
      description: "Structured paths to guide your cybersecurity learning journey",
      href: "/learning-resources/roadmaps"
    },
    {
      title: "Online Courses",
      icon: Video,
      description: "Curated list of free and paid cybersecurity courses from top platforms",
      href: "/learning-resources/courses"
    },
    {
      title: "Books",
      icon: Book,
      description: "Explore recommended cybersecurity books",
      href: "/learning-resources/books"
    },
    {
      title: "Content Creators",
      icon: Video,
      description: "Top YouTube channels, podcasts, and blogs in the cybersecurity field",
      href: "/learning-resources/content-creators"
    },
    {
      title: "Learning Communities",
      icon: MessageCircle,
      description: "Join forums and Discord channels for discussions and networking",
      href: "/learning-resources/communities"
    },
    {
      title: "Learning Tools",
      icon: Lightbulb,
      description: "Interactive platforms and tools to enhance your cybersecurity skills",
      href: "/learning-resources/tools"
    },
    {
      title: "Research Publications",
      icon: FileText,
      description: "Access academic publications and research in cybersecurity",
      href: "/learning-resources/research"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Learning Resources</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningResources.map((resource) => {
          const IconComponent = resource.icon
          return (
            <Link 
              key={resource.title}
              href={resource.href}
              className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-start mb-4">
                <IconComponent className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-white">{resource.title}</h2>
              </div>
              <p className="text-gray-400">{resource.description}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
} 