'use client'

import { School, Award, Clock, MapPin, Search, Filter, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function AcademicProgramsPage() {
  const programs = [
    {
      name: "Bachelor of Science in Cybersecurity",
      institution: "MIT",
      location: "Cambridge, MA",
      duration: "4 years",
      type: "Undergraduate",
      accreditation: ["ABET", "NSA CAE"],
      description: "Comprehensive program covering network security, cryptography, and security engineering",
      specializations: [
        "Network Security",
        "Digital Forensics",
        "Security Engineering"
      ],
      careerOutcomes: [
        "Security Analyst",
        "Security Engineer",
        "Incident Responder"
      ],
      tuition: "$54,000/year",
      link: "#"
    },
    {
      name: "Master of Science in Information Security",
      institution: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      duration: "2 years",
      type: "Graduate",
      accreditation: ["ABET", "NSA CAE"],
      description: "Advanced program focusing on security research and advanced security concepts",
      specializations: [
        "Security Research",
        "Privacy Engineering",
        "Secure Software Systems"
      ],
      careerOutcomes: [
        "Security Researcher",
        "Security Architect",
        "Security Consultant"
      ],
      tuition: "$48,000/year",
      link: "#"
    },
    {
      name: "Cybersecurity Certificate Program",
      institution: "Stanford University",
      location: "Online",
      duration: "1 year",
      type: "Certificate",
      accreditation: ["NSA CAE"],
      description: "Professional certificate program for working professionals",
      specializations: [
        "Application Security",
        "Cloud Security",
        "Risk Management"
      ],
      careerOutcomes: [
        "Security Specialist",
        "Cloud Security Engineer",
        "Risk Analyst"
      ],
      tuition: "$15,000 total",
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Academic Programs</h1>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search programs..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Filter className="w-4 h-4 mr-2" />
          Filter Programs
        </button>
      </div>

      <div className="grid gap-6">
        {programs.map((program, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{program.name}</h2>
                <div className="flex items-center space-x-4 mt-2 text-gray-600 dark:text-gray-400">
                  <span className="flex items-center">
                    <School className="w-4 h-4 mr-2" />
                    {program.institution}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {program.location}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {program.duration}
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {program.type}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">{program.description}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Specializations</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {program.specializations.map((spec, specIndex) => (
                    <li key={specIndex}>{spec}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Career Outcomes</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {program.careerOutcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {program.accreditation.map((accred, accredIndex) => (
                <span 
                  key={accredIndex}
                  className="flex items-center px-2 py-1 bg-green-100 text-green-800 rounded text-sm"
                >
                  <Award className="w-3 h-3 mr-1" />
                  {accred}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {program.tuition}
              </span>
              <Link
                href={program.link}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Learn More
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 