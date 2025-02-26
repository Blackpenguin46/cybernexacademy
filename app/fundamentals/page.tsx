"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

interface Domain {
  id: string
  title: string
  description: string
  icon: string
  slug: string
  topicCount: number
}

export default function FundamentalsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const domains: Domain[] = [
    {
      id: "1",
      title: "Network Security",
      description: "Learn about securing networks, protocols, and preventing unauthorized access.",
      icon: "🔒",
      slug: "network-security",
      topicCount: 12,
    },
    {
      id: "2",
      title: "Cryptography",
      description: "Understand encryption, hashing, digital signatures, and cryptographic protocols.",
      icon: "🔐",
      slug: "cryptography",
      topicCount: 10,
    },
    {
      id: "3",
      title: "Web Security",
      description: "Explore common web vulnerabilities, secure coding practices, and protection mechanisms.",
      icon: "🌐",
      slug: "web-security",
      topicCount: 14,
    },
    {
      id: "4",
      title: "Operating System Security",
      description: "Learn about securing operating systems, access controls, and system hardening.",
      icon: "💻",
      slug: "os-security",
      topicCount: 8,
    },
    {
      id: "5",
      title: "Security Governance",
      description: "Understand security policies, compliance, risk management, and legal considerations.",
      icon: "📜",
      slug: "security-governance",
      topicCount: 6,
    },
    {
      id: "6",
      title: "Incident Response",
      description: "Learn how to detect, analyze, and respond to security incidents and breaches.",
      icon: "🚨",
      slug: "incident-response",
      topicCount: 9,
    },
  ]

  const filteredDomains = domains.filter((domain) =>
    domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    domain.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cybersecurity Fundamentals</h1>
      
      <div className="mb-8 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search domains..."
          className="pl-10 pr-4 py-2 w-full max-w-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {filteredDomains.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">No domains found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDomains.map((domain) => (
            <Link key={domain.id} href={`/fundamentals/${domain.slug}`}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{domain.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{domain.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{domain.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{domain.topicCount} topics</span>
                  <span className="text-blue-600 dark:text-blue-400">Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

