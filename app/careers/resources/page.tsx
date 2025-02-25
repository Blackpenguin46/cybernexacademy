'use client'

import { Book, Award, Briefcase, Brain, Target, TrendingUp } from 'lucide-react'

export default function CareerResourcesPage() {
  const resources = [
    {
      title: "Career Paths",
      icon: TrendingUp,
      items: [
        "Security Analyst",
        "Penetration Tester",
        "Security Engineer",
        "Security Architect",
        "CISO Track"
      ]
    },
    {
      title: "Skill Development",
      icon: Brain,
      items: [
        "Technical Skills",
        "Soft Skills",
        "Leadership",
        "Communication",
        "Problem Solving"
      ]
    },
    {
      title: "Professional Growth",
      icon: Target,
      items: [
        "Mentorship Programs",
        "Networking Tips",
        "Industry Conferences",
        "Professional Associations",
        "Speaking Opportunities"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Career Resources</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => {
          const IconComponent = resource.icon
          return (
            <div key={resource.title} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <IconComponent className="w-6 h-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold">{resource.title}</h2>
              </div>
              <ul className="space-y-2">
                {resource.items.map((item) => (
                  <li key={item} className="text-gray-400">• {item}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
} 