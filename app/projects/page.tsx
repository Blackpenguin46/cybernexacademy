"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

type ProjectDifficulty = "beginner" | "intermediate" | "advanced"

interface Project {
  id: string
  title: string
  description: string
  difficulty: ProjectDifficulty
  image: string
  slug: string
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState<ProjectDifficulty | "all">("all")

  const projects: Project[] = [
    {
      id: "1",
      title: "File Encryption Tool",
      description: "Build a secure file encryption and decryption tool using modern cryptographic algorithms.",
      difficulty: "beginner",
      image: "/images/projects/file-encryption.jpg",
      slug: "file-encryption-tool",
    },
    {
      id: "2",
      title: "DNS Spoofing Detector",
      description: "Create a tool to detect DNS spoofing attacks by monitoring and analyzing DNS responses.",
      difficulty: "intermediate",
      image: "/images/projects/dns-spoofing.jpg",
      slug: "dns-spoofing-detector",
    },
    {
      id: "3",
      title: "Blockchain Identity Verification",
      description: "Build a decentralized identity verification system using blockchain technology.",
      difficulty: "advanced",
      image: "/images/projects/blockchain-identity.jpg",
      slug: "blockchain-identity-verification",
    },
    {
      id: "4",
      title: "Password Strength Analyzer",
      description: "Develop a tool to analyze password strength and suggest improvements.",
      difficulty: "beginner",
      image: "/images/projects/password-analyzer.jpg",
      slug: "password-strength-analyzer",
    },
    {
      id: "5",
      title: "Network Traffic Monitor",
      description: "Create a tool to monitor and analyze network traffic for suspicious activities.",
      difficulty: "intermediate",
      image: "/images/projects/network-monitor.jpg",
      slug: "network-traffic-monitor",
    },
    {
      id: "6",
      title: "Secure Chat Application",
      description: "Build an end-to-end encrypted chat application with secure key exchange.",
      difficulty: "advanced",
      image: "/images/projects/secure-chat.jpg",
      slug: "secure-chat-application",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesDifficulty = difficultyFilter === "all" || project.difficulty === difficultyFilter
    
    return matchesSearch && matchesDifficulty
  })

  const getDifficultyColor = (difficulty: ProjectDifficulty) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cybersecurity Projects</h1>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex-shrink-0">
          <select
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value as ProjectDifficulty | "all")}
          >
            <option value="all">All Difficulties</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">No projects found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <span className={`inline-block px-2 py-1 rounded text-xs ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <span className="text-blue-600 dark:text-blue-400">View Project →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

