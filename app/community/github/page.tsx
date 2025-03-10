"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Star, 
  GitFork, 
  ExternalLink, 
  Search, 
  Filter, 
  Code, 
  Shield, 
  Terminal, 
  Database, 
  Server, 
  Globe,
  Monitor,
  AlertTriangle,
  BookOpen,
  ThumbsUp
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface GithubRepo {
  name: string
  fullName: string
  description: string
  url: string
  stars: number
  forks: number
  language: string
  category: string
  tags: string[]
}

export default function GitHubPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [userInterests, setUserInterests] = useState<string[]>([])
  
  // Fetch user interests from profile
  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('interests')
          .eq('user_id', user.id)
          .single()
        
        if (data?.interests) {
          setUserInterests(data.interests)
        }
      }
    }
    
    fetchUserData()
  }, [])

  // Categories for filtering
  const categories = [
    { id: 'All', name: 'All Repositories', icon: Code },
    { id: 'web_security', name: 'Web Security', icon: Globe },
    { id: 'network_security', name: 'Network Security', icon: Server },
    { id: 'malware_analysis', name: 'Malware Analysis', icon: AlertTriangle },
    { id: 'pentesting', name: 'Penetration Testing', icon: Terminal },
    { id: 'defensive', name: 'Defensive Tools', icon: Shield },
    { id: 'cloud_security', name: 'Cloud Security', icon: Database },
    { id: 'monitoring', name: 'Monitoring', icon: Monitor },
    { id: 'learning', name: 'Learning Resources', icon: BookOpen },
  ]
  
  // Featured repositories organized by category
  const featuredRepositories: GithubRepo[] = [
    // Web Security
    {
      name: "OWASP ModSecurity Core Rule Set",
      fullName: "coreruleset/coreruleset",
      description: "OWASP ModSecurity Core Rule Set (CRS) is a set of generic attack detection rules for use with ModSecurity or compatible web application firewalls",
      url: "https://github.com/coreruleset/coreruleset",
      stars: 4800,
      forks: 1200,
      language: "PowerShell",
      category: "web_security",
      tags: ["waf", "modsecurity", "owasp"]
    },
    {
      name: "ZAP",
      fullName: "zaproxy/zaproxy",
      description: "The OWASP Zed Attack Proxy (ZAP) is one of the world's most popular free security tools and is actively maintained by a dedicated international team of volunteers",
      url: "https://github.com/zaproxy/zaproxy",
      stars: 11700,
      forks: 2500,
      language: "Java",
      category: "web_security",
      tags: ["scanner", "owasp", "web-security"]
    },
    
    // Network Security
    {
      name: "Wireshark",
      fullName: "wireshark/wireshark",
      description: "The world's most popular network protocol analyzer",
      url: "https://github.com/wireshark/wireshark",
      stars: 5300,
      forks: 1900,
      language: "C",
      category: "network_security",
      tags: ["packet-analyzer", "network", "protocol-analyzer"]
    },
    {
      name: "Suricata",
      fullName: "OISF/suricata",
      description: "Suricata is a network IDS, IPS and NSM engine developed by the OISF and the Suricata community",
      url: "https://github.com/OISF/suricata",
      stars: 2900,
      forks: 1100,
      language: "C",
      category: "network_security",
      tags: ["ids", "ips", "network-security"]
    },
    
    // Malware Analysis
    {
      name: "CAPE",
      fullName: "kevoreilly/CAPEv2",
      description: "CAPE: Config And Payload Extraction - Malware analysis automation",
      url: "https://github.com/kevoreilly/CAPEv2",
      stars: 1500,
      forks: 520,
      language: "Python",
      category: "malware_analysis",
      tags: ["malware", "sandbox", "dynamic-analysis"]
    },
    {
      name: "YARA",
      fullName: "VirusTotal/yara",
      description: "The pattern matching swiss knife",
      url: "https://github.com/VirusTotal/yara",
      stars: 5900,
      forks: 1300,
      language: "C",
      category: "malware_analysis",
      tags: ["pattern-matching", "malware-detection", "reverse-engineering"]
    },
    
    // Penetration Testing
    {
      name: "Metasploit Framework",
      fullName: "rapid7/metasploit-framework",
      description: "Metasploit Framework is the most widely used penetration testing software worldwide",
      url: "https://github.com/rapid7/metasploit-framework",
      stars: 29400,
      forks: 13100,
      language: "Ruby",
      category: "pentesting",
      tags: ["exploitation", "pentesting", "red-team"]
    },
    {
      name: "Burp Suite Community Edition",
      fullName: "PortSwigger/BurpSuiteCommunity",
      description: "Burp Suite Community Edition is a feature-limited set of manual tools for exploring web security",
      url: "https://github.com/PortSwigger/BurpSuiteCommunity",
      stars: 2700,
      forks: 290,
      language: "Java",
      category: "pentesting",
      tags: ["web-security", "proxy", "pentesting"]
    },
    
    // Defensive Tools
    {
      name: "Wazuh",
      fullName: "wazuh/wazuh",
      description: "Wazuh - The Open Source Security Platform. Unified XDR and SIEM protection for endpoints and cloud workloads",
      url: "https://github.com/wazuh/wazuh",
      stars: 6800,
      forks: 1200,
      language: "C",
      category: "defensive",
      tags: ["siem", "edr", "monitoring"]
    },
    {
      name: "Sigma",
      fullName: "SigmaHQ/sigma",
      description: "Generic Signature Format for SIEM Systems",
      url: "https://github.com/SigmaHQ/sigma",
      stars: 6300,
      forks: 1700,
      language: "Python",
      category: "defensive",
      tags: ["siem", "detection-rules", "blue-team"]
    },
    
    // Cloud Security
    {
      name: "Prowler",
      fullName: "prowler-cloud/prowler",
      description: "Prowler is an Open Source security tool to perform AWS, GCP and Azure security best practices assessments, audits, incident response, compliance and more",
      url: "https://github.com/prowler-cloud/prowler",
      stars: 7800,
      forks: 1100,
      language: "Python",
      category: "cloud_security",
      tags: ["aws", "azure", "gcp", "compliance"]
    },
    {
      name: "ScoutSuite",
      fullName: "nccgroup/ScoutSuite",
      description: "Multi-Cloud Security Auditing Tool",
      url: "https://github.com/nccgroup/ScoutSuite",
      stars: 3800,
      forks: 740,
      language: "Python",
      category: "cloud_security",
      tags: ["aws", "azure", "gcp", "auditing"]
    },
    
    // Monitoring
    {
      name: "Osquery",
      fullName: "osquery/osquery",
      description: "SQL powered operating system instrumentation, monitoring, and analytics",
      url: "https://github.com/osquery/osquery",
      stars: 20300,
      forks: 3300,
      language: "C++",
      category: "monitoring",
      tags: ["monitoring", "analytics", "endpoint-security"]
    },
    {
      name: "Grafana",
      fullName: "grafana/grafana",
      description: "The open and composable observability and data visualization platform",
      url: "https://github.com/grafana/grafana",
      stars: 57100,
      forks: 11300,
      language: "TypeScript",
      category: "monitoring",
      tags: ["dashboard", "monitoring", "visualization"]
    },
    
    // Learning Resources
    {
      name: "Awesome Hacking",
      fullName: "Hack-with-Github/Awesome-Hacking",
      description: "A collection of various awesome lists for hackers, pentesters and security researchers",
      url: "https://github.com/Hack-with-Github/Awesome-Hacking",
      stars: 16400,
      forks: 2600,
      language: "",
      category: "learning",
      tags: ["collection", "resources", "learning"]
    },
    {
      name: "Security 101",
      fullName: "veeral-patel/how-to-secure-anything",
      description: "How to systematically secure anything: a repository about security engineering",
      url: "https://github.com/veeral-patel/how-to-secure-anything",
      stars: 10300,
      forks: 860,
      language: "",
      category: "learning",
      tags: ["guide", "resources", "learning"]
    }
  ]
  
  // Filter repositories based on search term and category
  const filteredRepos = featuredRepositories.filter(repo => {
    const matchesSearch = 
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || repo.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })
  
  // Sort repositories to prioritize those matching user interests
  const sortedRepos = [...filteredRepos].sort((a, b) => {
    const aMatchesInterests = userInterests.includes(a.category)
    const bMatchesInterests = userInterests.includes(b.category)
    
    if (aMatchesInterests && !bMatchesInterests) return -1
    if (!aMatchesInterests && bMatchesInterests) return 1
    return b.stars - a.stars // If both match or don't match, sort by stars
  })
  
  // Guidelines for contributing to open source
  const guidelines = [
    "Read the project's contribution guidelines before submitting Pull Requests",
    "Start with good first issues or help wanted tags for your first contribution",
    "Document your code and explain the problem you're solving",
    "Write tests for your code whenever possible",
    "Be respectful and constructive in your communication",
    "Give back to the community by helping others with issues",
  ]
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">GitHub Security Repositories</h1>
            <p className="text-xl text-gray-300 mb-12">
              Discover the best open source security tools, frameworks, and learning resources on GitHub
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="flex overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50 focus-within:border-blue-500">
                <div className="flex items-center pl-4">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="w-full bg-transparent py-3 px-4 text-gray-200 outline-none"
                  placeholder="Search repositories, tools or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Filter */}
      <section className="py-10 border-b border-gray-800">
        <div className="container">
          <div className="flex items-center mb-6">
            <Filter className="w-5 h-5 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold text-white">Filter by Category</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center justify-center space-x-2 p-3 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-900/50 hover:bg-gray-800 text-gray-300'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Repositories */}
      <section className="py-16">
        <div className="container">
          {userInterests.length > 0 && (
            <div className="mb-10 p-4 bg-blue-900/20 border border-blue-900/30 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Personalized Recommendations</h3>
              <p className="text-gray-300">
                We're highlighting repositories that match your interests in: {" "}
                <span className="text-blue-400">
                  {userInterests.map(i => i.replace('_', ' ')).join(', ')}
                </span>
              </p>
            </div>
          )}
          
          <div className="grid gap-6 md:grid-cols-2">
            {sortedRepos.map((repo) => (
              <div 
                key={repo.fullName}
                className={`border rounded-lg p-6 transition-all hover:border-blue-500/50 ${
                  userInterests.includes(repo.category) 
                    ? 'bg-blue-900/10 border-blue-900/30' 
                    : 'bg-gray-900/50 border-gray-800'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    <Link href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                      {repo.name}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm">{repo.stars.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      <span className="text-sm">{repo.forks.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{repo.description}</p>
                
                <div className="flex flex-wrap items-center gap-2">
                  {repo.language && (
                    <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {repo.language}
                    </span>
                  )}
                  {repo.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-800 text-blue-400 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {sortedRepos.length === 0 && (
            <div className="text-center py-20 border border-gray-800 rounded-lg">
              <p className="text-gray-400 mb-2">No repositories found matching your search criteria</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All') }}
                className="text-blue-500 hover:text-blue-400"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Guidelines Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Contributing to Open Source
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex-shrink-0">
                    <ThumbsUp className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-gray-300">{guideline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Contribute?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Join the cybersecurity community on GitHub and help make the internet a safer place. 
              Share your knowledge, fix bugs, or build new tools to help defenders and researchers.
            </p>
            <Link 
              href="https://github.com/topics/security" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Explore GitHub Security Topics
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 