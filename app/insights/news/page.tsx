"use client"

import { useState } from "react"
import { Shield, ExternalLink, Clock, Tag, Newspaper, Filter, AlertTriangle, Server, Lock, Target, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'
import LiveNewsFeed from '@/app/components/LiveNewsFeed'
import SectionHeader from '@/app/components/SectionHeader'

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
      url: "https://thehackernews.com/2023/10/critical-security-vulnerability-found.html"
    },
    {
      title: "New Ransomware Strain Targets Healthcare",
      description: "Sophisticated ransomware campaign specifically targeting healthcare institutions discovered.",
      date: "2024-03-19",
      category: "Threats",
      source: "SecurityWeek",
      url: "https://www.securityweek.com/ransomware-gangs-increasingly-attacking-healthcare-organizations/"
    },
    {
      title: "Global Cybersecurity Summit Announced",
      description: "Leading experts to gather for annual cybersecurity summit addressing emerging threats.",
      date: "2024-03-18",
      category: "Events",
      source: "InfoSec Today",
      url: "https://www.infosecurity-magazine.com/conferences/"
    }
  ]

  const latestNews = [
    {
      title: "AI-Powered Security Tools Show Promise",
      description: "New research demonstrates effectiveness of AI in threat detection and response.",
      date: "2024-03-17",
      category: "Technology",
      source: "Tech Insights",
      url: "https://www.darkreading.com/artificial-intelligence/ai-tools-for-threat-detection"
    },
    {
      title: "Critical Infrastructure Protection Guidelines Updated",
      description: "Government releases new guidelines for protecting critical infrastructure.",
      date: "2024-03-16",
      category: "Compliance",
      source: "Gov Security",
      url: "https://www.cisa.gov/critical-infrastructure-sectors"
    },
    {
      title: "Financial Sector Faces Increased Cyber Threats",
      description: "Report shows 40% increase in targeted attacks against financial institutions.",
      date: "2024-03-15",
      category: "Industry",
      source: "Financial Security",
      url: "https://www.helpnetsecurity.com/2023/08/14/financial-services-cyber-attacks/"
    },
    {
      title: "New Botnet Discovered in IoT Devices",
      description: "Researchers uncover massive botnet leveraging vulnerabilities in consumer IoT products.",
      date: "2024-03-14",
      category: "Threats",
      source: "IoT Security Journal",
      url: "https://www.bleepingcomputer.com/news/security/new-iot-botnet-targets-millions-of-routers-and-iot-devices/"
    },
    {
      title: "Cybersecurity Talent Gap Widens",
      description: "Industry faces growing shortage of qualified security professionals.",
      date: "2024-03-13",
      category: "Industry",
      source: "Workforce Insights",
      url: "https://www.isc2.org/Research/Workforce-Study"
    },
    {
      title: "Critical Patch Released for Popular Database",
      description: "Urgent security update addresses remote code execution vulnerability.",
      date: "2024-03-12",
      category: "Vulnerabilities",
      source: "Database Security",
      url: "https://msrc.microsoft.com/update-guide/vulnerability"
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
      name: "The Hacker News",
      url: "https://thehackernews.com/",
      description: "Cybersecurity news and analysis for IT professionals"
    },
    {
      name: "Bleeping Computer",
      url: "https://www.bleepingcomputer.com/",
      description: "Information security and technology news"
    },
    {
      name: "Dark Reading",
      url: "https://www.darkreading.com/",
      description: "Connecting the cybersecurity community"
    },
    {
      name: "Krebs on Security",
      url: "https://krebsonsecurity.com/",
      description: "In-depth security news and investigation"
    }
  ]

  return (
    <div className="container mx-auto pt-16 pb-8 px-4 max-w-7xl">
      {/* Use SectionHeader component to match other pages */}
      <SectionHeader
        title="Cybersecurity News & Updates"
        description="Stay informed with the latest cybersecurity news, vulnerability disclosures, and industry trends."
        icon={<Newspaper className="w-12 h-12 text-neon-blue" />}
      />
      
      {/* Live News Feed Component - Automatically updates every 24 hours */}
      <LiveNewsFeed />
      
      {/* Category filters */}
      <div className="mb-8 mt-8">
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* Featured News Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNews
            .filter(news => selectedCategory === 'All' || news.category === selectedCategory)
            .map((news, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-neon-blue/50 transition-all duration-300">
                <div className="p-6">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-md inline-flex items-center ${
                    news.category === 'Vulnerabilities' ? 'bg-red-900/20 text-red-400' :
                    news.category === 'Threats' ? 'bg-orange-900/20 text-orange-400' :
                    news.category === 'Events' ? 'bg-purple-900/20 text-purple-400' :
                    'bg-blue-900/20 text-blue-400'
                  }`}>
                    {news.category === 'Vulnerabilities' && <AlertTriangle className="w-3 h-3 mr-1" />}
                    {news.category === 'Threats' && <Shield className="w-3 h-3 mr-1" />}
                    {news.category === 'Events' && <Target className="w-3 h-3 mr-1" />}
                    {news.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2 text-white">{news.title}</h3>
                  <p className="text-gray-400 mb-4">{news.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.date}
                    </div>
                    <div className="text-sm text-gray-500">{news.source}</div>
                  </div>
                  <Link 
                    href={news.url} 
                    className="mt-4 inline-flex items-center text-neon-blue hover:text-blue-400"
                  >
                    Read more <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

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