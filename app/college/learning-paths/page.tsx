'use client'

import { ArrowRight, BookOpen, Award, Clock } from 'lucide-react'
import Link from 'next/link'

export default function LearningPathsPage() {
  const learningPaths = [
    {
      title: "Security Analyst Track",
      duration: "12 months",
      level: "Beginner to Intermediate",
      description: "Comprehensive path to become a Security Analyst",
      skills: ["Network Security", "SIEM Tools", "Threat Analysis", "Incident Response"],
      certifications: ["Security+", "CySA+"],
      courses: [
        "Introduction to Cybersecurity",
        "Network Security Fundamentals",
        "Security Information and Event Management",
        "Incident Response Basics"
      ]
    },
    {
      title: "Penetration Tester Track",
      duration: "18 months",
      level: "Intermediate to Advanced",
      description: "Specialized path for aspiring Penetration Testers",
      skills: ["Ethical Hacking", "Web App Security", "Network Penetration", "Exploit Development"],
      certifications: ["CEH", "OSCP"],
      courses: [
        "Ethical Hacking Fundamentals",
        "Web Application Security",
        "Advanced Penetration Testing",
        "Exploit Development"
      ]
    },
    {
      title: "Security Engineer Track",
      duration: "24 months",
      level: "Advanced",
      description: "Comprehensive path to become a Security Engineer",
      skills: ["Security Architecture", "Cloud Security", "DevSecOps", "Application Security"],
      certifications: ["CISSP", "AWS Security"],
      courses: [
        "Security Architecture Principles",
        "Cloud Security Engineering",
        "DevSecOps Practices",
        "Secure Software Development"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Learning Paths</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Choose from our structured learning paths designed to help you achieve your career goals in cybersecurity.
        Each path includes recommended courses, certifications, and skills to develop.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningPaths.map((path, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{path.title}</h2>
            
            <div className="flex items-center space-x-4 mb-4 text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {path.duration}
              </span>
              <span className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                {path.level}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>

            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Key Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {path.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Recommended Certifications:</h3>
              <div className="flex flex-wrap gap-2">
                {path.certifications.map((cert, certIndex) => (
                  <span 
                    key={certIndex}
                    className="flex items-center bg-green-100 text-green-800 text-sm px-2 py-1 rounded"
                  >
                    <Award className="w-3 h-3 mr-1" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/college/learning-paths/${path.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              View Full Path
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 