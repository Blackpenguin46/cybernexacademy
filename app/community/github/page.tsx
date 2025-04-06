"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Star, 
  GitFork, 
  ExternalLink, 
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
      try {
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
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }
    
    fetchUserData()
  }, [])
  
  // Direct handler for category selection
  function handleCategorySelection(category: string) {
    console.log("Setting category to:", category);
    setSelectedCategory(category);
  }
  
  // Categories for filtering
  const categories = [
    { id: 'All', name: 'All Repositories', icon: Code },
    { id: 'web_security', name: 'Web Security', icon: Globe },
    { id: 'network_security', name: 'Network Security', icon: Server },
    { id: 'malware_analysis', name: 'Malware Analysis', icon: AlertTriangle },
    { id: 'pentesting', name: 'Penetration Testing', icon: Terminal },
    { id: 'defensive_security', name: 'Defensive Security', icon: Shield },
    { id: 'cloud_security', name: 'Cloud Security', icon: Lock },
    { id: 'cryptography', name: 'Cryptography', icon: Lock },
    { id: 'monitoring', name: 'Monitoring', icon: Monitor },
    { id: 'osint', name: 'OSINT', icon: Database },
    { id: 'learning', name: 'Learning Resources', icon: BookOpen },
  ]
  
  // Featured repositories organized by category
  const allRepositories: GithubRepo[] = [
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
    {
      name: "Nuclei",
      fullName: "projectdiscovery/nuclei",
      description: "Fast and customizable vulnerability scanner based on simple YAML-based DSL",
      url: "https://github.com/projectdiscovery/nuclei",
      stars: 14200,
      forks: 2100,
      language: "Go",
      category: "web_security",
      tags: ["vulnerability-scanner", "security-tools", "pentesting"]
    },
    {
      name: "OWASP Amass",
      fullName: "owasp-amass/amass",
      description: "In-depth attack surface mapping and asset discovery",
      url: "https://github.com/owasp-amass/amass",
      stars: 9400,
      forks: 1700,
      language: "Go",
      category: "web_security",
      tags: ["reconnaissance", "attack-surface", "asset-discovery"]
    },
    {
      name: "SQLMap",
      fullName: "sqlmapproject/sqlmap",
      description: "Automatic SQL injection and database takeover tool",
      url: "https://github.com/sqlmapproject/sqlmap",
      stars: 27500,
      forks: 5300,
      language: "Python",
      category: "web_security",
      tags: ["sql-injection", "database", "penetration-testing"]
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
    {
      name: "Bettercap",
      fullName: "bettercap/bettercap",
      description: "The Swiss Army knife for 802.11, BLE, IPv4 and IPv6 networks reconnaissance and MITM attacks",
      url: "https://github.com/bettercap/bettercap",
      stars: 14200,
      forks: 1500,
      language: "Go",
      category: "network_security",
      tags: ["mitm", "network", "wifi-security"]
    },
    {
      name: "Zeek",
      fullName: "zeek/zeek",
      description: "Zeek is a powerful network analysis framework that is much different from the typical IDS you may know",
      url: "https://github.com/zeek/zeek",
      stars: 5600,
      forks: 1200,
      language: "C++",
      category: "network_security",
      tags: ["network-monitoring", "traffic-analysis", "ids"]
    },
    {
      name: "Snort",
      fullName: "snort3/snort3",
      description: "Snort 3 is the next generation Snort IPS (Intrusion Prevention System)",
      url: "https://github.com/snort3/snort3",
      stars: 3100,
      forks: 600,
      language: "C++",
      category: "network_security",
      tags: ["ids", "ips", "intrusion-detection"]
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
    {
      name: "Cuckoo Sandbox",
      fullName: "cuckoosandbox/cuckoo",
      description: "Cuckoo Sandbox is an automated dynamic malware analysis system",
      url: "https://github.com/cuckoosandbox/cuckoo",
      stars: 7800,
      forks: 2100,
      language: "Python",
      category: "malware_analysis",
      tags: ["sandbox", "dynamic-analysis", "malware-analysis"]
    },
    {
      name: "Ghidra",
      fullName: "NationalSecurityAgency/ghidra",
      description: "Ghidra is a software reverse engineering (SRE) framework created and maintained by the NSA",
      url: "https://github.com/NationalSecurityAgency/ghidra",
      stars: 41500,
      forks: 5000,
      language: "Java",
      category: "malware_analysis",
      tags: ["reverse-engineering", "disassembler", "decompiler"]
    },
    {
      name: "Radare2",
      fullName: "radareorg/radare2",
      description: "UNIX-like reverse engineering framework and command-line toolset",
      url: "https://github.com/radareorg/radare2",
      stars: 17800,
      forks: 3200,
      language: "C",
      category: "malware_analysis",
      tags: ["reverse-engineering", "debugger", "disassembler"]
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
      name: "Aircrack-ng",
      fullName: "aircrack-ng/aircrack-ng",
      description: "WiFi security auditing tools suite",
      url: "https://github.com/aircrack-ng/aircrack-ng",
      stars: 7200,
      forks: 1700,
      language: "C",
      category: "pentesting",
      tags: ["wifi", "wireless", "cracking"]
    },
    {
      name: "Nmap",
      fullName: "nmap/nmap",
      description: "Nmap - the Network Mapper. Github mirror of official SVN repository",
      url: "https://github.com/nmap/nmap",
      stars: 8100,
      forks: 2000,
      language: "C",
      category: "pentesting",
      tags: ["network-scanner", "port-scanner", "security"]
    },
    {
      name: "Hydra",
      fullName: "vanhauser-thc/thc-hydra",
      description: "Hydra is a parallelized login cracker which supports numerous protocols to attack",
      url: "https://github.com/vanhauser-thc/thc-hydra",
      stars: 8300,
      forks: 1800,
      language: "C",
      category: "pentesting",
      tags: ["bruteforce", "password-cracking", "security-tools"]
    },
    {
      name: "John the Ripper",
      fullName: "openwall/john",
      description: "John the Ripper password cracker",
      url: "https://github.com/openwall/john",
      stars: 7200,
      forks: 2000,
      language: "C",
      category: "pentesting",
      tags: ["password-cracking", "security-tools", "cryptography"]
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
    {
      name: "TheHive",
      fullName: "TheHive-Project/TheHive",
      description: "TheHive: a Scalable, Open Source and Free Security Incident Response Platform",
      url: "https://github.com/TheHive-Project/TheHive",
      stars: 4200,
      forks: 900,
      language: "Scala",
      category: "defensive_security",
      tags: ["incident-response", "soc", "security-automation"]
    },
    {
      name: "Velociraptor",
      fullName: "Velocidex/velociraptor",
      description: "Velociraptor is a tool for collecting host based state information using Velocidex Query Language (VQL) queries",
      url: "https://github.com/Velocidex/velociraptor",
      stars: 2900,
      forks: 500,
      language: "Go",
      category: "defensive_security",
      tags: ["dfir", "incident-response", "forensics"]
    },
    {
      name: "Security Onion",
      fullName: "Security-Onion-Solutions/securityonion",
      description: "Security Onion is a free and open platform for threat hunting, security monitoring, and log management",
      url: "https://github.com/Security-Onion-Solutions/securityonion",
      stars: 3000,
      forks: 600,
      language: "Shell",
      category: "defensive_security",
      tags: ["siem", "ids", "security-monitoring"]
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
    {
      name: "CloudSploit",
      fullName: "aquasecurity/cloudsploit",
      description: "Cloud Security Posture Management (CSPM)",
      url: "https://github.com/aquasecurity/cloudsploit",
      stars: 2700,
      forks: 600,
      language: "JavaScript",
      category: "cloud_security",
      tags: ["cloud-security", "aws", "azure"]
    },
    {
      name: "TerraGoat",
      fullName: "bridgecrewio/terragoat",
      description: "TerraGoat is Bridgecrew's 'Vulnerable by Design' Terraform repository",
      url: "https://github.com/bridgecrewio/terragoat",
      stars: 1500,
      forks: 450,
      language: "HCL",
      category: "cloud_security",
      tags: ["terraform", "cloud-security", "iac"]
    },
    {
      name: "Falco",
      fullName: "falcosecurity/falco",
      description: "Cloud Native Runtime Security",
      url: "https://github.com/falcosecurity/falco",
      stars: 6100,
      forks: 900,
      language: "C++",
      category: "cloud_security",
      tags: ["cloud-native", "security", "runtime-security"]
    },
    
    // Cryptography
    {
      name: "OpenSSL",
      fullName: "openssl/openssl",
      description: "TLS/SSL and crypto library",
      url: "https://github.com/openssl/openssl",
      stars: 21400,
      forks: 8900,
      language: "C",
      category: "cryptography",
      tags: ["tls", "ssl", "encryption"]
    },
    {
      name: "Cryptography.io",
      fullName: "pyca/cryptography",
      description: "A package designed to expose cryptographic primitives and recipes to Python developers",
      url: "https://github.com/pyca/cryptography",
      stars: 5700,
      forks: 1300,
      language: "Python",
      category: "cryptography",
      tags: ["python", "encryption", "security"]
    },
    {
      name: "HashiCorp Vault",
      fullName: "hashicorp/vault",
      description: "A tool for secrets management, encryption as a service, and privileged access management",
      url: "https://github.com/hashicorp/vault",
      stars: 28500,
      forks: 4100,
      language: "Go",
      category: "cryptography",
      tags: ["secrets", "encryption", "key-management"]
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
    {
      name: "Elasticsearch",
      fullName: "elastic/elasticsearch",
      description: "Free and Open, Distributed, RESTful Search Engine",
      url: "https://github.com/elastic/elasticsearch",
      stars: 64600,
      forks: 23500,
      language: "Java",
      category: "monitoring",
      tags: ["search-engine", "logging", "analytics"]
    },
    {
      name: "Prometheus",
      fullName: "prometheus/prometheus",
      description: "The Prometheus monitoring system and time series database",
      url: "https://github.com/prometheus/prometheus",
      stars: 48700,
      forks: 8300,
      language: "Go",
      category: "monitoring",
      tags: ["monitoring", "metrics", "alerting"]
    },
    {
      name: "ELK Stack",
      fullName: "elastic/kibana",
      description: "Your window into the Elastic Stack",
      url: "https://github.com/elastic/kibana",
      stars: 18400,
      forks: 7400,
      language: "TypeScript",
      category: "monitoring",
      tags: ["visualization", "dashboard", "elastic-stack"]
    },
    
    // OSINT Tools
    {
      name: "Maltego",
      fullName: "MaltegoTech/maltego-trx",
      description: "Maltego Transform Extensions Framework - Python library used to develop Maltego transforms",
      url: "https://github.com/MaltegoTech/maltego-trx",
      stars: 650, 
      forks: 220,
      language: "Python",
      category: "osint",
      tags: ["intelligence", "reconnaissance", "data-mining"]
    },
    {
      name: "SpiderFoot",
      fullName: "smicallef/spiderfoot",
      description: "SpiderFoot automates OSINT for threat intelligence and mapping your attack surface",
      url: "https://github.com/smicallef/spiderfoot",
      stars: 10300,
      forks: 2100,
      language: "Python",
      category: "osint",
      tags: ["reconnaissance", "footprinting", "intelligence"]
    },
    {
      name: "Shodan",
      fullName: "shodan-labs/shodan-python",
      description: "The official Python library for Shodan",
      url: "https://github.com/shodan-labs/shodan-python",
      stars: 2100,
      forks: 450,
      language: "Python",
      category: "osint",
      tags: ["search-engine", "reconnaissance", "iot"]
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
    },
    {
      name: "OWASP Top 10",
      fullName: "OWASP/Top10",
      description: "Official OWASP Top 10 Document Repository",
      url: "https://github.com/OWASP/Top10",
      stars: 5300,
      forks: 1000,
      language: "",
      category: "learning",
      tags: ["owasp", "web-security", "guidelines"]
    },
    {
      name: "Awesome Pentest",
      fullName: "enaqx/awesome-pentest",
      description: "A collection of awesome penetration testing resources, tools and other shiny things",
      url: "https://github.com/enaqx/awesome-pentest",
      stars: 18400,
      forks: 3700,
      language: "",
      category: "learning",
      tags: ["pentesting", "resources", "tools"]
    },
    {
      name: "PayloadsAllTheThings",
      fullName: "swisskyrepo/PayloadsAllTheThings",
      description: "A list of useful payloads and bypass for Web Application Security and Pentest/CTF",
      url: "https://github.com/swisskyrepo/PayloadsAllTheThings",
      stars: 50200,
      forks: 12500,
      language: "Python",
      category: "learning",
      tags: ["payloads", "web-security", "pentesting"]
    }
  ]

  // Filter repositories based on selected category
  const filteredRepositories = selectedCategory === 'All'
    ? allRepositories
    : allRepositories.filter(repo => repo.category === selectedCategory);

  // Featured repos - display first few based on filter
  const featuredCount = 4; // Number of repos to show in the main featured grid
  const featuredToDisplay = filteredRepositories.slice(0, featuredCount);
  
  // Additional repos - display the rest if any
  const additionalToDisplay = filteredRepositories.slice(featuredCount);

  // Group filtered repositories by category for display
  const groupedRepositories = filteredRepositories.reduce<Record<string, GithubRepo[]>>((acc, repo) => {
    const categoryName = categories.find(c => c.id === repo.category)?.name || repo.category;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(repo);
    return acc;
  }, {});

  // Get the category object for a given ID
  const getCategoryById = (id: string) => categories.find(c => c.id === id);

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
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

      {/* Category Filter Component - Uses handleCategorySelection */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategorySelection} // Use the direct handler
        accentColor="purple"
      />
      
      {/* Resources Count - Updated to use filteredRepositories */}
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm">
            Showing {filteredRepositories.length} {filteredRepositories.length === 1 ? 'repository' : 'repositories'}
            {selectedCategory !== 'All' ? ` in category: ${categories.find(c => c.id === selectedCategory)?.name || selectedCategory}` : ''}
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8">
        {/* Featured Repositories - Render from filtered list */} 
        {featuredToDisplay.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Code className="w-5 h-5 text-purple-500 mr-2" />
              <h2 className="text-xl font-bold text-white">
                {filteredRepositories.length > featuredCount ? "Featured Repositories" : "Repositories"}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Map over featuredToDisplay */} 
              {featuredToDisplay.map((repo, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500/50 transition-colors flex flex-col"
                >
                  <div className="p-5 flex-grow">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {repo.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" /> {repo.stars.toLocaleString()}
                      <GitFork className="w-4 h-4 ml-3 mr-1 text-gray-600" /> {repo.forks.toLocaleString()}
                      {repo.language && (
                        <span className="ml-auto text-xs bg-gray-800 px-2 py-0.5 rounded">{repo.language}</span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {repo.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-purple-900/30 text-purple-400 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-gray-800 mt-auto">
                    <a 
                      href={repo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-2 px-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors"
                    >
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                   </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Repositories - Render from filtered list */}
        {additionalToDisplay.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Code className="w-5 h-5 text-purple-500 mr-2" />
              <h2 className="text-xl font-bold text-white">More Repositories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Map over additionalToDisplay */} 
              {additionalToDisplay.map((repo, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-purple-500/50 transition-colors flex items-start justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {repo.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" /> {repo.stars.toLocaleString()}
                      <GitFork className="w-4 h-4 ml-3 mr-1 text-gray-600" /> {repo.forks.toLocaleString()}
                      {repo.language && (
                        <span className="ml-4 text-xs bg-gray-800 px-2 py-0.5 rounded">{repo.language}</span>
                      )}
                    </div>
                  </div>
                  
                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-4 flex-shrink-0 flex items-center justify-center py-2 px-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors whitespace-nowrap"
                  >
                    View
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results Message */}
        {filteredRepositories.length === 0 && (
          <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mb-12">
            <Code className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No repositories found</h3>
            <p className="text-gray-400 mb-6">No repositories match the selected category: {categories.find(c => c.id === selectedCategory)?.name || selectedCategory}</p>
            <Button 
              onClick={() => handleCategorySelection('All')}
              className="flex items-center gap-2"
            >
              Clear filter
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        )}

      </div>
    </div>
  )
} 