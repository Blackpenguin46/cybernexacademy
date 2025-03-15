"use client"

import { useState } from "react"
import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, Twitter, Hash, AlertTriangle, BookOpen, Globe, Lock, Server, Database, Filter, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

export default function TwitterPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Categories for filtering
  const categories: Category[] = [
    { id: 'All', name: 'All Accounts', icon: Users },
    { id: 'researcher', name: 'Researchers', icon: BookOpen },
    { id: 'journalist', name: 'Journalists', icon: Globe },
    { id: 'threat_intel', name: 'Threat Intel', icon: AlertTriangle },
    { id: 'privacy', name: 'Privacy', icon: Lock },
    { id: 'malware', name: 'Malware', icon: Server },
    { id: 'industry', name: 'Industry News', icon: Database },
  ]

  const popularAccounts = [
    {
      name: "@SwiftOnSecurity",
      description: "Expert commentary on cybersecurity, system administration, and tech culture.",
      followers: "400K+",
      url: "https://twitter.com/SwiftOnSecurity",
      categories: ["researcher", "industry"]
    },
    {
      name: "@thegrugq",
      description: "Information security researcher sharing insights on cyber operations and security.",
      followers: "350K+",
      url: "https://twitter.com/thegrugq",
      categories: ["researcher", "threat_intel"]
    },
    {
      name: "@troyhunt",
      description: "Creator of Have I Been Pwned, sharing web security insights and breach notifications.",
      followers: "500K+",
      url: "https://twitter.com/troyhunt",
      categories: ["researcher", "privacy", "industry"]
    },
    {
      name: "@malwrhunterteam",
      description: "Real-time malware tracking and analysis from security researchers.",
      followers: "250K+",
      url: "https://twitter.com/malwrhunterteam",
      categories: ["researcher", "malware", "threat_intel"]
    },
    {
      name: "@gcluley",
      description: "Cybersecurity veteran sharing news, analysis, and commentary on threats.",
      followers: "200K+",
      url: "https://twitter.com/gcluley",
      categories: ["researcher", "industry", "malware"]
    },
    {
      name: "@kevincollier",
      description: "Cybersecurity and privacy journalist covering breaking news and investigations.",
      followers: "150K+",
      url: "https://twitter.com/kevincollier",
      categories: ["journalist", "privacy", "industry"]
    }
  ]

  // Filter accounts based on selected category
  const filteredAccounts = selectedCategory === 'All'
    ? popularAccounts
    : popularAccounts.filter(account => account.categories.includes(selectedCategory));

  const features = [
    {
      title: "Real-time Updates",
      description: "Get instant notifications about security incidents and vulnerabilities."
    },
    {
      title: "Expert Insights",
      description: "Follow leading security researchers and professionals."
    },
    {
      title: "Breaking News",
      description: "Stay informed about the latest cybersecurity developments."
    },
    {
      title: "Community Discussions",
      description: "Engage in conversations about security topics and trends."
    },
    {
      title: "Threat Alerts",
      description: "Receive early warnings about emerging security threats."
    },
    {
      title: "Resource Sharing",
      description: "Access tools, guides, and educational content shared by experts."
    }
  ]

  const popularHashtags = [
    "#Cybersecurity",
    "#InfoSec",
    "#HackingNews",
    "#CyberAttack",
    "#BugBounty",
    "#CyberThreats",
    "#OSINT",
    "#Malware",
    "#PrivacySec",
    "#ZeroDay",
    "#ThreatHunting",
    "#CyberIntel"
  ]

  const guidelines = [
    "Verify information before sharing",
    "Use content warnings for sensitive topics",
    "Follow responsible disclosure practices",
    "Credit sources and original researchers",
    "Engage in constructive discussions",
    "Support community members",
    "Share accurate threat information",
    "Maintain professional conduct"
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-sky-600/10 rounded-xl mb-4">
              <Twitter className="w-5 h-5 text-sky-500 mr-2" />
              <span className="text-sky-500 font-medium">X/Twitter Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Real-time Security Updates
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Follow cybersecurity experts and join real-time discussions about the latest security developments.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        accentColor="sky"
      />
      
      {/* Popular Accounts */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {filteredAccounts.length > 0 ? (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Users className="w-6 h-6 text-sky-500 mr-3" />
                  Popular Security Accounts
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredAccounts.map((account, index) => (
                    <div 
                      key={index}
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-sky-500/50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-white">
                          <Link href={account.url} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center">
                            {account.name}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-4">{account.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {account.categories.map((category, catIndex) => (
                          <span 
                            key={catIndex}
                            className="bg-sky-900/30 text-sky-400 text-xs px-2 py-1 rounded-full"
                          >
                            {categories.find(cat => cat.id === category)?.name || category}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{account.followers} followers</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
                <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No accounts match your filter</h3>
                <p className="text-gray-400 mb-6">Try selecting a different category or clear your filter</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory('All')}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" /> Clear filters
                </Button>
              </div>
            )}
            
            {/* Hashtags Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Hash className="w-6 h-6 text-sky-500 mr-3" />
                Popular Hashtags
              </h2>
              <div className="flex flex-wrap gap-3">
                {popularHashtags.map((hashtag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-full text-gray-300"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Guidelines Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Community Guidelines</h2>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex gap-3">
                  <ThumbsUp className="h-6 w-6 flex-shrink-0 text-sky-500 mt-1" />
                  <div>
                    <p className="text-gray-300">{guideline}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 