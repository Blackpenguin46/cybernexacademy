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
  ThumbsUp,
  X,
  Lock
} from 'lucide-react'
import { supabase } from '@/lib/supabase'
import CategoryFilter from '@/app/components/CategoryFilter'
import { Button } from "@/components/ui/button"

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
        
        if (data && data.interests) {
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
    { id: 'defensive_security', name: 'Defensive Security', icon: Shield },
    { id: 'cryptography', name: 'Cryptography', icon: Lock },
    { id: 'osint', name: 'OSINT', icon: Search },
    { id: 'resources', name: 'Learning Resources', icon: BookOpen },
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
      category: "defensive_security",
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
      category: "defensive_security",
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
      category: "cryptography",
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
      category: "cryptography",
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
      category: "osint",
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
      category: "osint",
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
      category: "resources",
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
      category: "resources",
      tags: ["guide", "resources", "learning"]
    },
    // New GitHub Repositories from our resources
    {
      name: "Cybersecurity Resources",
      fullName: "bst04/cybersources",
      description: "Comprehensive collection of cybersecurity learning resources, tools and references for all skill levels",
      url: "https://github.com/bst04/cybersources",
      stars: 275,
      forks: 82,
      language: "Markdown",
      category: "resources",
      tags: ["collection", "learning", "resources"]
    },
    {
      name: "OSCP Guide",
      fullName: "0xsyr0/OSCP",
      description: "Comprehensive collection of resources for OSCP exam preparation and penetration testing",
      url: "https://github.com/0xsyr0/OSCP",
      stars: 1450,
      forks: 320,
      language: "Markdown",
      category: "pentesting",
      tags: ["oscp", "certification", "pentesting"]
    },
    {
      name: "SecLists",
      fullName: "danielmiessler/SecLists",
      description: "Collection of multiple types of lists used during security assessments, including usernames, passwords, URLs and more",
      url: "https://github.com/danielmiessler/SecLists",
      stars: 46800,
      forks: 21300,
      language: "PHP",
      category: "pentesting",
      tags: ["wordlists", "pentesting", "security-assessment"]
    },
    {
      name: "Awesome Password Cracking",
      fullName: "n0kovo/awesome-password-cracking",
      description: "Curated list of password cracking resources, tools and techniques for security professionals",
      url: "https://github.com/n0kovo/awesome-password-cracking",
      stars: 3200,
      forks: 680,
      language: "Markdown",
      category: "pentesting",
      tags: ["password-cracking", "hashcat", "wordlists"]
    },
    {
      name: "Security Certifications & Pentesting Academy",
      fullName: "ghostsec420/SCPA",
      description: "Security Contents & Penetration Analysis Framework for learning cybersecurity and penetration testing",
      url: "https://github.com/ghostsec420/SCPA",
      stars: 320,
      forks: 95,
      language: "Markdown",
      category: "resources",
      tags: ["learning", "pentesting", "framework"]
    },
    {
      name: "Bug Bounty Resources",
      fullName: "gotr00t0day/BugBounty",
      description: "Curated collection of bug bounty resources, tools and methodologies for security researchers",
      url: "https://github.com/gotr00t0day/BugBounty",
      stars: 860,
      forks: 190,
      language: "Markdown",
      category: "web_security",
      tags: ["bug-bounty", "web-security", "tools"]
    },
    {
      name: "Exploit Collection",
      fullName: "gotr00t0day/exp0s3d",
      description: "Collection of exploits, vulnerabilities, and security research for penetration testers and researchers",
      url: "https://github.com/gotr00t0day/exp0s3d",
      stars: 740,
      forks: 210,
      language: "Python",
      category: "pentesting",
      tags: ["exploits", "vulnerabilities", "security-research"]
    }
  ]
  
  // Filter repositories based on selected category
  const filteredRepos = selectedCategory === 'All'
    ? featuredRepositories
    : featuredRepositories.filter(repo => repo.category === selectedCategory)
  
  // Sort repositories - prioritize those matching user interests
  const sortedRepos = [...filteredRepos].sort((a, b) => {
    // First sort by whether they match user interests
    const aMatchesInterests = userInterests.includes(a.category)
    const bMatchesInterests = userInterests.includes(b.category)
    
    if (aMatchesInterests && !bMatchesInterests) return -1
    if (!aMatchesInterests && bMatchesInterests) return 1
    
    // Then sort by stars
    return b.stars - a.stars
  })
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <Code className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">GitHub Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              GitHub Security Repositories
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Discover the best open source security tools, frameworks, and learning resources on GitHub
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
      
      {/* User Interests */}
      {userInterests.length > 0 && (
        <section className="py-8">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="p-4 bg-blue-900/20 border border-blue-900/30 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Personalized Recommendations</h3>
                <p className="text-gray-300">
                  We're highlighting repositories that match your interests in: {" "}
                  <span className="text-blue-400">
                    {userInterests.map(i => i.replace('_', ' ')).join(', ')}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Repositories */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {sortedRepos.length > 0 ? (
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
            ) : (
              <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
                <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No repositories match your filter</h3>
                <p className="text-gray-400 mb-6">Try selecting a different category or clear your filter</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory('all')}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" /> Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Guidelines Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">GitHub Security Tips</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Shield className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
                <div>
                  <p className="text-white font-medium">Check activity and maintenance</p>
                  <p className="text-gray-400">Look for repositories with recent commits and active maintenance.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Star className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
                <div>
                  <p className="text-white font-medium">Review stars and forks</p>
                  <p className="text-gray-400">Higher numbers often indicate more reliable and well-tested tools.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Code className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
                <div>
                  <p className="text-white font-medium">Examine documentation</p>
                  <p className="text-gray-400">Good security tools have clear documentation and usage examples.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 