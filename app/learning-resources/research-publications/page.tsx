'use client'

import { Search, Filter, Download, ExternalLink, BookOpen, Calendar, User } from 'lucide-react'
import Link from 'next/link'

export default function ResearchPublicationsPage() {
  const publications = [
    {
      title: "Advanced Persistent Threats: Detection and Response",
      authors: ["Dr. Sarah Chen", "Dr. Michael Roberts"],
      institution: "MIT Cybersecurity Lab",
      date: "2024",
      type: "Research Paper",
      tags: ["APT", "Threat Detection", "Incident Response"],
      abstract: "A comprehensive analysis of modern APT detection techniques and response strategies...",
      link: "#",
      citations: 45
    },
    {
      title: "Quantum-Safe Cryptography: Preparing for the Post-Quantum Era",
      authors: ["Dr. James Wilson"],
      institution: "Stanford Security Research",
      date: "2023",
      type: "White Paper",
      tags: ["Quantum Computing", "Cryptography", "Security"],
      abstract: "Examining the implications of quantum computing on current cryptographic standards...",
      link: "#",
      citations: 78
    },
    {
      title: "Machine Learning in Network Intrusion Detection",
      authors: ["Dr. Emily Brown", "Prof. David Kim"],
      institution: "Carnegie Mellon University",
      date: "2024",
      type: "Research Paper",
      tags: ["Machine Learning", "IDS", "Network Security"],
      abstract: "Novel approaches to network intrusion detection using advanced machine learning algorithms...",
      link: "#",
      citations: 32
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Research Publications</h1>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search publications..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{pub.title}</h2>
                <div className="flex items-center space-x-4 mt-2 text-gray-600 dark:text-gray-400">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {pub.authors.join(", ")}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {pub.institution}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {pub.date}
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {pub.type}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">{pub.abstract}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {pub.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Citations: {pub.citations}
              </span>
              <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
                <Link
                  href={pub.link}
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

