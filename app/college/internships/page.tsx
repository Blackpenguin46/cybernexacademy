'use client'

import { Briefcase, MapPin, Calendar, ExternalLink, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export default function InternshipsPage() {
  const internships = [
    {
      title: "Security Operations Intern",
      company: "TechDefend Inc.",
      location: "Remote",
      duration: "3 months",
      type: "Summer Internship",
      requirements: [
        "Currently pursuing BS in Cybersecurity or related field",
        "Basic knowledge of network security",
        "Strong analytical skills"
      ],
      description: "Join our SOC team and gain hands-on experience in security monitoring and incident response."
    },
    {
      title: "Cybersecurity Research Intern",
      company: "SecureNet Labs",
      location: "Boston, MA",
      duration: "6 months",
      type: "Co-op",
      requirements: [
        "Graduate student in Cybersecurity",
        "Experience with malware analysis",
        "Programming skills in Python"
      ],
      description: "Conduct research on emerging threats and contribute to threat intelligence reports."
    },
    {
      title: "Application Security Intern",
      company: "CloudGuard",
      location: "Hybrid",
      duration: "4 months",
      type: "Fall Internship",
      requirements: [
        "Junior/Senior in Computer Science",
        "Web application security knowledge",
        "Familiarity with OWASP Top 10"
      ],
      description: "Work with our AppSec team on security testing and vulnerability assessments."
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Student Internships</h1>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search internships..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
      </div>

      <div className="grid gap-6">
        {internships.map((internship, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{internship.title}</h2>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {internship.company}
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {internship.type}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                {internship.location}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                {internship.duration}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">{internship.description}</p>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Requirements:</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {internship.requirements.map((req, reqIndex) => (
                  <li key={reqIndex}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Apply Now
              </button>
              <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 