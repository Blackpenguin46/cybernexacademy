"use client";

import { useState } from 'react';
import { Wrench, ExternalLink, Clock, Tag, Shield, Filter, Download, Terminal, Code, Zap, X, Server, Cloud, Lock, Database, Globe, Search, FileText, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '../../components/CategoryFilter'
import SectionHeader from '../../components/SectionHeader'

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Define interface for Tool
interface Tool {
  name: string;
  category: string;
  type: string;
  rating: string;
  description: string;
  features: string[];
  useCase: string;
  documentation: string;
}

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Define categories for filtering
  const categories: Category[] = [
    { id: 'all', name: 'All Tools', icon: Wrench },
    { id: 'network', name: 'Network Security', icon: Server },
    { id: 'application', name: 'Application Security', icon: Code },
    { id: 'cloud', name: 'Cloud Security', icon: Cloud },
    { id: 'forensics', name: 'Digital Forensics', icon: Search },
    { id: 'pentesting', name: 'Penetration Testing', icon: Terminal },
    { id: 'threat', name: 'Threat Intelligence', icon: Shield }
  ];

  const featuredTools: Tool[] = [
    {
      name: "Network Guardian Pro",
      category: "network",
      type: "Enterprise",
      rating: "4.8/5",
      description: "Advanced network monitoring and intrusion detection system.",
      features: [
        "Real-time traffic analysis",
        "AI-powered threat detection",
        "Automated response"
      ],
      useCase: "Enterprise network protection",
      documentation: "#"
    },
    {
      name: "SecureCode Analyzer",
      category: "application",
      type: "Developer Tool",
      rating: "4.7/5",
      description: "Static and dynamic code analysis for security vulnerabilities.",
      features: [
        "Multiple language support",
        "CI/CD integration",
        "Vulnerability scanning"
      ],
      useCase: "Secure development lifecycle",
      documentation: "#"
    },
    {
      name: "Cloud Shield",
      category: "cloud",
      type: "Cloud Native",
      rating: "4.9/5",
      description: "Comprehensive cloud infrastructure security platform.",
      features: [
        "Multi-cloud support",
        "Configuration auditing",
        "Compliance monitoring"
      ],
      useCase: "Cloud security posture management",
      documentation: "#"
    }
  ]

  const allTools: Tool[] = [
    // Network Security Tools
    {
      name: "Wireshark",
      category: "network",
      type: "Open Source",
      rating: "4.9/5",
      description: "Network protocol analyzer for packet capture and analysis.",
      features: [
        "Deep packet inspection",
        "Live capture and offline analysis",
        "Rich VoIP analysis"
      ],
      useCase: "Network troubleshooting and security analysis",
      documentation: "https://www.wireshark.org/docs/"
    },
    {
      name: "Snort",
      category: "network",
      type: "Open Source",
      rating: "4.7/5",
      description: "Network intrusion prevention and detection system.",
      features: [
        "Real-time traffic analysis",
        "Protocol analysis",
        "Content searching/matching"
      ],
      useCase: "Network intrusion detection",
      documentation: "https://www.snort.org/documents"
    },
    {
      name: "Zeek (formerly Bro)",
      category: "network",
      type: "Open Source",
      rating: "4.6/5",
      description: "Network security monitor focusing on semantic analysis.",
      features: [
        "Protocol analysis",
        "File extraction",
        "Customizable policy scripts"
      ],
      useCase: "Network monitoring and threat detection",
      documentation: "https://docs.zeek.org/"
    },
    
    // Application Security Tools
    {
      name: "OWASP ZAP",
      category: "application",
      type: "Open Source",
      rating: "4.8/5",
      description: "Web application security scanner for finding vulnerabilities.",
      features: [
        "Automated scanner",
        "Intercepting proxy",
        "Active and passive scanning"
      ],
      useCase: "Web application security testing",
      documentation: "https://www.zaproxy.org/docs/"
    },
    {
      name: "SonarQube",
      category: "application",
      type: "Open Source/Commercial",
      rating: "4.7/5",
      description: "Continuous code quality and security review platform.",
      features: [
        "Code quality analysis",
        "Security vulnerability detection",
        "CI/CD integration"
      ],
      useCase: "Secure code development",
      documentation: "https://docs.sonarqube.org/"
    },
    {
      name: "Burp Suite",
      category: "application",
      type: "Commercial/Free",
      rating: "4.9/5",
      description: "Integrated platform for web application security testing.",
      features: [
        "Intercepting proxy",
        "Scanner",
        "Intruder for automated attacks"
      ],
      useCase: "Web application penetration testing",
      documentation: "https://portswigger.net/burp/documentation"
    },
    
    // Cloud Security Tools
    {
      name: "AWS Security Hub",
      category: "cloud",
      type: "Commercial",
      rating: "4.6/5",
      description: "Centralized view of security alerts and compliance status in AWS.",
      features: [
        "Automated compliance checks",
        "Integrated security findings",
        "Multi-account support"
      ],
      useCase: "AWS security management",
      documentation: "https://docs.aws.amazon.com/securityhub/"
    },
    {
      name: "Prisma Cloud",
      category: "cloud",
      type: "Commercial",
      rating: "4.8/5",
      description: "Cloud native security platform for protecting cloud infrastructure.",
      features: [
        "Cloud security posture management",
        "Container security",
        "Serverless security"
      ],
      useCase: "Multi-cloud security management",
      documentation: "https://docs.paloaltonetworks.com/prisma/prisma-cloud"
    },
    {
      name: "Terraform",
      category: "cloud",
      type: "Open Source",
      rating: "4.7/5",
      description: "Infrastructure as code tool for secure cloud provisioning.",
      features: [
        "Infrastructure as code",
        "Multi-cloud support",
        "Version control integration"
      ],
      useCase: "Secure cloud infrastructure deployment",
      documentation: "https://www.terraform.io/docs"
    },
    
    // Digital Forensics Tools
    {
      name: "Autopsy",
      category: "forensics",
      type: "Open Source",
      rating: "4.6/5",
      description: "Digital forensics platform for disk image analysis.",
      features: [
        "Timeline analysis",
        "Keyword search",
        "File recovery"
      ],
      useCase: "Digital forensic investigations",
      documentation: "https://www.autopsy.com/documentation/"
    },
    {
      name: "Volatility",
      category: "forensics",
      type: "Open Source",
      rating: "4.7/5",
      description: "Memory forensics framework for incident response.",
      features: [
        "Memory analysis",
        "Malware detection",
        "Process examination"
      ],
      useCase: "Memory forensics and incident response",
      documentation: "https://github.com/volatilityfoundation/volatility/wiki"
    },
    {
      name: "The Sleuth Kit",
      category: "forensics",
      type: "Open Source",
      rating: "4.5/5",
      description: "Collection of command line tools for file system analysis.",
      features: [
        "File system analysis",
        "Data recovery",
        "Timeline creation"
      ],
      useCase: "Digital forensic investigations",
      documentation: "https://www.sleuthkit.org/sleuthkit/docs.php"
    },
    
    // Penetration Testing Tools
    {
      name: "Metasploit Framework",
      category: "pentesting",
      type: "Open Source/Commercial",
      rating: "4.9/5",
      description: "Penetration testing framework for vulnerability exploitation.",
      features: [
        "Exploit development",
        "Vulnerability verification",
        "Post-exploitation capabilities"
      ],
      useCase: "Penetration testing and vulnerability assessment",
      documentation: "https://docs.metasploit.com/"
    },
    {
      name: "Kali Linux",
      category: "pentesting",
      type: "Open Source",
      rating: "4.9/5",
      description: "Security-focused Linux distribution with penetration testing tools.",
      features: [
        "Pre-installed security tools",
        "Regular updates",
        "Forensics mode"
      ],
      useCase: "Penetration testing and security auditing",
      documentation: "https://www.kali.org/docs/"
    },
    {
      name: "Nmap",
      category: "pentesting",
      type: "Open Source",
      rating: "4.8/5",
      description: "Network discovery and security auditing tool.",
      features: [
        "Port scanning",
        "OS detection",
        "Service/version detection"
      ],
      useCase: "Network exploration and security auditing",
      documentation: "https://nmap.org/docs.html"
    },
    
    // Threat Intelligence Tools
    {
      name: "MISP",
      category: "threat",
      type: "Open Source",
      rating: "4.7/5",
      description: "Threat intelligence platform for sharing and correlating IOCs.",
      features: [
        "Indicator sharing",
        "Automatic correlation",
        "Export capabilities"
      ],
      useCase: "Threat intelligence sharing and analysis",
      documentation: "https://www.misp-project.org/documentation/"
    },
    {
      name: "TheHive",
      category: "threat",
      type: "Open Source",
      rating: "4.6/5",
      description: "Scalable security incident response platform.",
      features: [
        "Case management",
        "Observable analysis",
        "Integration with MISP"
      ],
      useCase: "Security incident response",
      documentation: "https://github.com/TheHive-Project/TheHiveDocs"
    },
    {
      name: "OpenCTI",
      category: "threat",
      type: "Open Source",
      rating: "4.5/5",
      description: "Open Cyber Threat Intelligence Platform.",
      features: [
        "Knowledge management",
        "Observable enrichment",
        "Visualization capabilities"
      ],
      useCase: "Threat intelligence analysis and sharing",
      documentation: "https://docs.opencti.io/"
    }
  ];

  // Combine featured tools and all tools
  const combinedTools = [...featuredTools, ...allTools];
  
  // Remove duplicates (in case a featured tool is also in allTools)
  const uniqueTools = Array.from(new Map(combinedTools.map(tool => [tool.name, tool])).values());
  
  // Filter tools based on selected category
  const filteredTools = selectedCategory === 'all' 
    ? uniqueTools 
    : uniqueTools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Cybersecurity Tools"
          description="Discover and compare the best security tools for your specific needs"
          icon={<Wrench className="h-10 w-10 text-cyan-500" />}
        />

        {/* Add Category Filter */}
        <div className="mb-8">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            accentColor="cyan"
          />
        </div>

        {filteredTools.length > 0 ? (
          <div className="space-y-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTools.map((tool, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                      <span className="text-xs bg-cyan-900/50 text-cyan-400 px-2 py-1 rounded border border-cyan-800/50">
                        {categories.find(cat => cat.id === tool.category)?.name || tool.category}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Tag className="w-4 h-4 mr-1 text-cyan-500" />
                      <span>{tool.type}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {tool.rating}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{tool.description}</p>
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features</div>
                      <ul className="space-y-1">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 mr-2"></div>
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Use Case</div>
                      <div className="text-sm text-gray-300">{tool.useCase}</div>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={tool.documentation} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Documentation
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
            <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No tools match your filter</h3>
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

        <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-white">Choosing the Right Tools</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Shield className="h-6 w-6 flex-shrink-0 text-cyan-500 mt-1" />
              <div>
                <p className="text-white font-medium">Assess your specific needs</p>
                <p className="text-gray-400">Consider your organization's size, industry, and specific security requirements.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Code className="h-6 w-6 flex-shrink-0 text-cyan-500 mt-1" />
              <div>
                <p className="text-white font-medium">Evaluate open source alternatives</p>
                <p className="text-gray-400">Many open source tools offer comparable features to commercial solutions.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Terminal className="h-6 w-6 flex-shrink-0 text-cyan-500 mt-1" />
              <div>
                <p className="text-white font-medium">Consider integration capabilities</p>
                <p className="text-gray-400">Choose tools that integrate well with your existing security infrastructure.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 