"use client"

import { useState } from "react"
import { Shield, ExternalLink, Clock, Tag, Newspaper, Filter, AlertTriangle, Server, Lock, Target, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Categories for filtering
  const categories = [
    { id: 'All', name: 'All News', icon: Newspaper },
    { id: 'Vulnerabilities', name: 'Vulnerabilities', icon: AlertTriangle },
    { id: 'Threats', name: 'Threats', icon: Shield },
    { id: 'Technology', name: 'Technology', icon: Server },
    { id: 'Compliance', name: 'Compliance', icon: Lock },
    { id: 'Events', name: 'Events', icon: Target },
    { id: 'Industry', name: 'Industry', icon: Globe },
  ]

  const featuredNews = [
    {
      title: "Major Zero-Day Vulnerability Discovered",
      description: "Critical vulnerability affecting widely-used software infrastructure. Immediate patching recommended.",
      date: "2024-03-20",
      category: "Vulnerabilities",
      source: "CyberNews",
      url: "#"
    },
    {
      title: "New Ransomware Strain Targets Healthcare",
      description: "Sophisticated ransomware campaign specifically targeting healthcare institutions discovered.",
      date: "2024-03-19",
      category: "Threats",
      source: "SecurityWeek",
      url: "#"
    },
    {
      title: "Global Cybersecurity Summit Announced",
      description: "Leading experts to gather for annual cybersecurity summit addressing emerging threats.",
      date: "2024-03-18",
      category: "Events",
      source: "InfoSec Today",
      url: "#"
    }
  ]

  const latestNews = [
    {
      title: "AI-Powered Security Tools Show Promise",
      description: "New research demonstrates effectiveness of AI in threat detection and response.",
      date: "2024-03-17",
      category: "Technology",
      source: "Tech Insights",
      url: "#"
    },
    {
      title: "Critical Infrastructure Protection Guidelines Updated",
      description: "Government releases new guidelines for protecting critical infrastructure.",
      date: "2024-03-16",
      category: "Compliance",
      source: "Gov Security",
      url: "#"
    },
    {
      title: "Financial Sector Faces Increased Cyber Threats",
      description: "Report shows 40% increase in targeted attacks against financial institutions.",
      date: "2024-03-15",
      category: "Industry",
      source: "Financial Security",
      url: "#"
    },
    {
      title: "New Botnet Discovered in IoT Devices",
      description: "Researchers uncover massive botnet leveraging vulnerabilities in consumer IoT products.",
      date: "2024-03-14",
      category: "Threats",
      source: "IoT Security Journal",
      url: "#"
    },
    {
      title: "Cybersecurity Talent Gap Widens",
      description: "Industry faces growing shortage of qualified security professionals.",
      date: "2024-03-13",
      category: "Industry",
      source: "Workforce Insights",
      url: "#"
    },
    {
      title: "Critical Patch Released for Popular Database",
      description: "Urgent security update addresses remote code execution vulnerability.",
      date: "2024-03-12",
      category: "Vulnerabilities",
      source: "Database Security",
      url: "#"
    }
  ]

  // Filter news based on selected category
  const filteredFeaturedNews = selectedCategory === 'All' 
    ? featuredNews 
    : featuredNews.filter(item => item.category === selectedCategory);

  const filteredLatestNews = selectedCategory === 'All'
    ? latestNews
    : latestNews.filter(item => item.category === selectedCategory);

  const sources = [
    {
      name: "CyberNews",
      url: "#",
      description: "Breaking cybersecurity news and analysis"
    },
    {
      name: "SecurityWeek",
      url: "#",
      description: "Enterprise security news and insights"
    },
    {
      name: "InfoSec Today",
      url: "#",
      description: "Daily security updates and coverage"
    },
    {
      name: "Tech Insights",
      url: "#",
      description: "Technology and security analysis"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <Newspaper className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Security News</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity News & Updates
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Stay informed about the latest cybersecurity threats, vulnerabilities, and industry developments.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        accentColor="blue"
      />

      {/* Featured News Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-10">
              <Newspaper className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Featured Stories</h2>
            </div>
            
            {filteredFeaturedNews.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-3">
                {filteredFeaturedNews.map((item, index) => (
                  <Link 
                    key={index}
                    href={item.url}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-blue-500/50 transition-colors flex flex-col h-full"
                  >
                    <div className="p-6 flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded border border-blue-800">
                          {item.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                    <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{item.source}</span>
                      <ExternalLink className="w-4 h-4 text-blue-500" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 border border-gray-800 rounded-lg mb-10">
                <p className="text-gray-400">No featured stories found in this category</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-10">
              <Clock className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Latest Updates</h2>
            </div>
            
            {filteredLatestNews.length > 0 ? (
              <div className="space-y-6">
                {filteredLatestNews.map((item, index) => (
                  <Link 
                    key={index}
                    href={item.url}
                    className="block bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0 md:mr-6">
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end space-y-2 flex-shrink-0">
                        <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded border border-blue-800">
                          {item.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{item.date}</span>
                        </div>
                        <span className="text-gray-500 text-sm">{item.source}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-gray-800 rounded-lg">
                <p className="text-gray-400 mb-2">No news found matching your criteria</p>
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className="text-blue-500 hover:text-blue-400"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our newsletter to receive the latest cybersecurity news and updates directly in your inbox.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              News Categories
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 hover:border-blue-500/50 transition-colors"
                >
                  <span className="text-gray-300 hover:text-blue-500 transition-colors inline-flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Trusted Sources
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {sources.map((source, index) => (
                <Link
                  key={index}
                  href={source.url}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-500">
                    {source.name}
                  </h3>
                  <p className="text-gray-400">{source.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 