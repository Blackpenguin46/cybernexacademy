'use client'

import Link from 'next/link'
import { Book, GitBranch, Video, MessageCircle, Lightbulb, FileText, Globe, Shield, Code, Trophy, Cpu } from 'lucide-react'

export default function LearningResourcesPage() {
  const resources = [
    {
      title: "Learning Roadmaps",
      icon: GitBranch,
      description: "Structured paths to guide your cybersecurity learning journey",
      href: "/learning-resources/roadmaps",
      platforms: [
        "CompTIA Security+ Path",
        "Ethical Hacking Career Path",
        "SOC Analyst Track",
        "Penetration Testing Route"
      ]
    },
    {
      title: "Online Courses",
      icon: Video,
      description: "Curated list of free and paid cybersecurity courses from top platforms",
      href: "/learning-resources/courses",
      platforms: [
        "TryHackMe",
        "HackTheBox Academy",
        "Coursera",
        "Udemy"
      ]
    },
    {
      title: "Books",
      icon: Book,
      description: "Essential cybersecurity books and reading materials",
      href: "/learning-resources/books",
      platforms: [
        "O'Reilly",
        "Packt Publishing",
        "No Starch Press",
        "Manning Publications"
      ]
    },
    {
      title: "Content Creators",
      icon: Globe,
      description: "Top YouTube channels, podcasts, and blogs in the cybersecurity field",
      href: "/learning-resources/content-creators",
      platforms: [
        "YouTube Tutorials",
        "Security Podcasts",
        "Tech Blogs",
        "Expert Channels"
      ]
    },
    {
      title: "Practice Platforms",
      icon: Code,
      description: "Hands-on platforms to practice your cybersecurity skills",
      href: "/learning-resources/practice",
      platforms: [
        "Hack The Box",
        "VulnHub",
        "PortSwigger Web Security Academy",
        "OWASP Juice Shop"
      ]
    },
    {
      title: "Certifications",
      icon: Shield,
      description: "Professional certifications to advance your career",
      href: "/learning-resources/certifications",
      platforms: [
        "CompTIA",
        "Offensive Security",
        "EC-Council",
        "SANS Institute"
      ]
    },
    {
      title: "CTF Challenges",
      icon: Trophy,
      description: "Capture The Flag competitions and challenges",
      href: "/learning-resources/ctf",
      platforms: [
        "PicoCTF",
        "CTFtime",
        "Root Me",
        "Over The Wire"
      ]
    },
    {
      title: "Tools & Labs",
      icon: Cpu,
      description: "Essential cybersecurity tools and virtual labs",
      href: "/learning-resources/tools",
      platforms: [
        "Kali Linux",
        "Metasploit",
        "Wireshark",
        "Burp Suite"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Cybersecurity Learning Resources</h1>
        <p className="text-xl text-gray-400">Comprehensive resources to master cybersecurity skills</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => {
          const IconComponent = resource.icon
          return (
            <Link 
              key={resource.title}
              href={resource.href}
              className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="flex items-start mb-4">
                <IconComponent className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-white">{resource.title}</h2>
              </div>
              <p className="text-gray-400 mb-4">{resource.description}</p>
              <div className="border-t border-gray-700 pt-4 mt-4">
                <p className="text-sm text-gray-500 mb-2">Popular Platforms:</p>
                <ul className="text-sm text-gray-400">
                  {resource.platforms.map((platform) => (
                    <li key={platform} className="mb-1">• {platform}</li>
                  ))}
                </ul>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <p className="text-gray-400 mb-4">
          New to cybersecurity? Start with our recommended learning paths and foundational resources.
          We've curated the best materials for beginners to help you build a strong foundation.
        </p>
        <Link 
          href="/learning-resources/roadmaps"
          className="inline-flex items-center text-blue-500 hover:text-blue-400"
        >
          View Learning Roadmaps
          <GitBranch className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}

