'use client'

import Link from 'next/link'
import { Briefcase, FileText, GraduationCap, TrendingUp } from 'lucide-react'

export default function CareersPage() {
  const careerResources = [
    {
      title: "Internships",
      icon: GraduationCap,
      description: "Find cybersecurity internship opportunities roday",
      href: "/careers/internships"
    },
    {
      title: "Resume Guide",
      icon: FileText,
      description: "Build a strong cybersecurity resume",
      href: "/careers/resume-guide"
    },
    {
      title: "Job Board",
      icon: Briefcase,
      description: "Browse cybersecurity job opportunities",
      href: "/careers/jobs"
    },
    {
      title: "Career Resources",
      icon: TrendingUp,
      description: "Resources for career growth in cybersecurity",
      href: "/careers/resources"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cybersecurity Careers</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {careerResources.map((resource) => {
          const IconComponent = resource.icon
          return (
            <Link 
              key={resource.title}
              href={resource.href}
              className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
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