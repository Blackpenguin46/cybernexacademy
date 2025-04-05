"use client"

import React from 'react'
import { useState } from 'react'
import { TrendingUp, ExternalLink, Clock, Tag, ChevronRight, ArrowUpRight, Globe, AlertTriangle, Shield, Filter, X, Code, Server, Lock, Database, Zap, Cloud, Brain, Cpu, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

export default function TrendsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories for filtering
  const categories: Category[] = [
    { id: 'all', name: 'All Trends', icon: TrendingUp },
    { id: 'architecture', name: 'Security Architecture', icon: Shield },
    { id: 'cryptography', name: 'Cryptography', icon: Lock },
    { id: 'operations', name: 'Security Operations', icon: Zap },
    { id: 'cloud', name: 'Cloud Security', icon: Cloud },
    { id: 'data', name: 'Data Protection', icon: Database },
    { id: 'threat', name: 'Threat Landscape', icon: AlertTriangle }
  ];

  const emergingTrends = [
    {
      title: "AI in Cybersecurity",
      description: "How artificial intelligence is transforming threat detection, response, and security operations",
      icon: Brain,
      category: 'operations',
      resources: [
        {
          title: "AI in Cybersecurity",
          url: "https://www.youtube.com/watch?v=4QzBdeUQ0Dc",
          type: "video"
        },
        {
          title: "The AI Cybersecurity future is here",
          url: "https://www.youtube.com/watch?v=S3QNDSax2IA",
          type: "video"
        },
        {
          title: "Cybersecurity Strategy: Prioritizing AI and Risk Management",
          url: "https://www.youtube.com/watch?v=AtRJZxvkbUM",
          type: "video"
        },
        {
          title: "How AI Can Accelerate Cybersecurity",
          url: "https://www.youtube.com/watch?v=utcYsBKL7e8",
          type: "video"
        }
      ]
    },
    {
      title: "Quantum Computing",
      description: "The impact of quantum computing on encryption, security protocols, and threat landscape",
      icon: Cpu,
      category: 'cryptography',
      resources: [
        {
          title: "Quantum-Safe Cryptography",
          url: "https://www.nist.gov/cryptography/post-quantum-cryptography",
          type: "website"
        },
        {
          title: "Quantum Computing Courses",
          url: "/academy/youtube#quantum-computing",
          type: "internal"
        }
      ]
    },
    {
      title: "Zero Trust Architecture",
      description: "Moving beyond perimeter security to a model that requires verification from everyone",
      icon: Lock,
      category: 'architecture',
      resources: [
        {
          title: "NIST Zero Trust Architecture",
          url: "https://www.nist.gov/programs-projects/zero-trust-architecture",
          type: "website"
        }
      ]
    },
    {
      title: "Supply Chain Security",
      description: "Addressing vulnerabilities in the software and hardware supply chain",
      icon: Server,
      category: 'threat',
      resources: [
        {
          title: "NIST Cybersecurity Supply Chain Risk Management",
          url: "https://www.nist.gov/itl/smallbusinesscyber/supply-chain",
          type: "website"
        }
      ]
    },
    {
      title: "Cloud Security Posture Management",
      description: "Tools and practices to identify and remediate risks in cloud environments",
      icon: Cloud,
      category: 'cloud',
      resources: []
    },
    {
      title: "Extended Detection and Response (XDR)",
      description: "Unified security incident detection and response across multiple security layers",
      icon: Shield,
      category: 'operations',
      resources: []
    }
  ]

  const industryTrends = [
    {
      sector: "Financial Services",
      trends: [
        {
          trend: "Decentralized Identity",
          impact: "High",
          timeline: "2024-2025",
          description: "Blockchain-based identity verification and authentication systems"
        },
        {
          trend: "Real-time Fraud Prevention",
          impact: "Critical",
          timeline: "Current",
          description: "AI-powered transaction monitoring and fraud detection"
        }
      ]
    },
    {
      sector: "Healthcare",
      trends: [
        {
          trend: "IoMT Security",
          impact: "Critical",
          timeline: "2024-2026",
          description: "Security for Internet of Medical Things devices and networks"
        },
        {
          trend: "Privacy-Preserving Analytics",
          impact: "High",
          timeline: "Current",
          description: "Secure analysis of patient data while maintaining privacy"
        }
      ]
    },
    {
      sector: "Manufacturing",
      trends: [
        {
          trend: "OT/IT Convergence",
          impact: "Critical",
          timeline: "2024-2025",
          description: "Unified security for operational and information technology"
        },
        {
          trend: "Digital Twin Security",
          impact: "High",
          timeline: "2024-2026",
          description: "Security measures for digital twin implementations"
        }
      ]
    }
  ]

  const technologyTrends = [
    {
      name: "Extended Detection and Response (XDR)",
      status: "Growing",
      adoption: "55%",
      growth: "+45%",
      description: "Unified security incident detection and response across multiple security layers",
      benefits: [
        "Improved threat detection",
        "Automated response",
        "Reduced complexity",
        "Better visibility"
      ]
    },
    {
      name: "Secure Access Service Edge (SASE)",
      status: "Rapid Growth",
      adoption: "48%",
      growth: "+65%",
      description: "Convergence of network security and WAN capabilities into a cloud-delivered service",
      benefits: [
        "Zero trust access",
        "Simplified management",
        "Reduced costs",
        "Better performance"
      ]
    },
    {
      name: "Cloud-Native Security",
      status: "Mainstream",
      adoption: "72%",
      growth: "+38%",
      description: "Security tools and practices designed specifically for cloud-native environments",
      benefits: [
        "DevSecOps integration",
        "Container security",
        "API protection",
        "Serverless security"
      ]
    }
  ]

  const futureOutlook = [
    {
      year: "2024",
      predictions: [
        {
          title: "AI-First Security",
          description: "AI becomes the primary driver of security operations and decision-making",
          confidence: "High"
        },
        {
          title: "Identity-Based Security",
          description: "Shift from perimeter-based to identity-centric security models",
          confidence: "Very High"
        }
      ]
    },
    {
      year: "2025",
      predictions: [
        {
          title: "Quantum Security",
          description: "First commercial quantum-safe security solutions become widely available",
          confidence: "Medium"
        },
        {
          title: "Autonomous Security",
          description: "Self-healing and self-managing security systems become mainstream",
          confidence: "High"
        }
      ]
    },
    {
      year: "2026",
      predictions: [
        {
          title: "Biometric Authentication",
          description: "Advanced biometrics become the primary form of authentication",
          confidence: "Medium"
        },
        {
          title: "Edge Security",
          description: "Security operations shift to the edge for real-time protection",
          confidence: "High"
        }
      ]
    }
  ]

  // New section for Emerging Trend Reports & Analysis
  const trendResources = [
    {
      name: "Gartner Emerging Cybersecurity Trends",
      url: "https://www.gartner.com/en/newsroom/press-releases/2023-03-29-gartner-identifies-top-cybersecurity-trends-for-2023",
      description: "Leading analyst firm Gartner identifies top cybersecurity trends annually.",
      sourceType: "Analyst Report"
    },
    {
      name: "Forrester 2024 Security Predictions",
      url: "https://go.forrester.com/blogs/",
      description: "Forrester's predictions and analysis for the cybersecurity landscape.",
      sourceType: "Analyst Report"
    },
    {
      name: "World Economic Forum Cybersecurity Outlook",
      url: "https://www.weforum.org/agenda/archive/cybersecurity/",
      description: "WEF reports on the global cybersecurity outlook and systemic challenges.",
      sourceType: "Industry Group"
    },
    {
      name: "McKinsey – Cybersecurity in a New Era",
      url: "https://www.mckinsey.com/business-functions/risk-and-resilience/our-insights",
      description: "McKinsey's insights on evolving cyber risks and resilience strategies.",
      sourceType: "Consulting Report"
    },
    {
      name: "IBM Future of Cybersecurity",
      url: "https://www.ibm.com/security/future",
      description: "IBM's perspective on future cybersecurity challenges and technologies.",
      sourceType: "Vendor Insight"
    },
    {
      name: "Microsoft Digital Defense Report",
      url: "https://www.microsoft.com/en-us/security/blog/",
      description: "Microsoft's annual report analyzing cyber threat trends based on their telemetry.",
      sourceType: "Vendor Report"
    },
    {
      name: "MIT Technology Review – Cybersecurity",
      url: "https://www.technologyreview.com/topic/cybersecurity/",
      description: "Coverage of emerging cybersecurity technologies and research.",
      sourceType: "News Site"
    },
    {
      name: "Harvard Business Review – Cyber Threats",
      url: "https://hbr.org/",
      description: "HBR articles discussing cybersecurity from a business and leadership perspective.",
      sourceType: "Publication"
    },
    {
      name: "Accenture – Cyber Trends",
      url: "https://www.accenture.com/us-en/blogs/blogs-cybersecurity",
      description: "Accenture's blog covering emerging cyber threats and security strategies.",
      sourceType: "Consulting Blog"
    },
    {
      name: "Palo Alto Networks – Trends & Predictions",
      url: "https://www.paloaltonetworks.com/blog",
      description: "Palo Alto Networks' blog discussing threat trends and future predictions.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Cisco Global Networking Trends",
      url: "https://www.cisco.com/c/en/us/solutions/enterprise-networks/networking-trends.html",
      description: "Cisco's reports on networking trends, often intersecting with security.",
      sourceType: "Vendor Report"
    },
    {
      name: "ISACA State of Cybersecurity Report",
      url: "https://www.isaca.org/resources/news-and-trends",
      description: "ISACA's annual research report on cybersecurity workforce and threat trends.",
      sourceType: "Association Report"
    },
    {
      name: "CompTIA Emerging Tech Trends",
      url: "https://www.comptia.org/content/research/emerging-technology-trends",
      description: "CompTIA's research on emerging technologies and their security implications.",
      sourceType: "Association Report"
    },
    {
      name: "Cybersecurity Ventures Predictions",
      url: "https://cybersecurityventures.com/",
      description: "Market research and predictions for the cybersecurity industry.",
      sourceType: "Market Research"
    },
    {
      name: "Verizon Data Breach Trends",
      url: "https://www.verizon.com/business/resources/reports/dbir/",
      description: "The DBIR highlights evolving data breach tactics and trends.",
      sourceType: "Vendor Report"
    },
    {
      name: "Dark Reading - Emerging Threats",
      url: "https://www.darkreading.com/",
      description: "Cybersecurity news site covering emerging threats and security trends.",
      sourceType: "News Site"
    },
    {
      name: "SC Magazine - Threat Landscape",
      url: "https://www.scmagazine.com/",
      description: "SC Magazine's coverage of the evolving threat landscape and security trends.",
      sourceType: "News Site"
    },
    {
      name: "Check Point – Cyber Security Report",
      url: "https://www.checkpoint.com/downloads/product-related/cyber-security-report-2023.pdf",
      description: "Check Point's annual report detailing major cyber threats and trends.",
      sourceType: "Vendor Report"
    },
    {
      name: "Cloudflare Security Reports",
      url: "https://blog.cloudflare.com/tag/security/",
      description: "Cloudflare's blog and reports on web security, DDoS, and internet trends.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Gartner – Hype Cycle for Cybersecurity",
      url: "https://www.gartner.com/en/documents/4023647",
      description: "Gartner's Hype Cycle analyzing the maturity and adoption of security technologies.",
      sourceType: "Analyst Report"
    },
    {
      name: "NIST Cybersecurity & Privacy Program",
      url: "https://www.nist.gov/cyberframework",
      description: "NIST's ongoing work defining cybersecurity frameworks and standards.",
      sourceType: "Government"
    },
    {
      name: "NCC Group Research",
      url: "https://research.nccgroup.com/",
      description: "Research from NCC Group covering vulnerabilities and emerging security topics.",
      sourceType: "Vendor Research"
    },
    {
      name: "ENISA Threat Landscape Report",
      url: "https://www.enisa.europa.eu/publications/enisa-threat-landscape-2022",
      description: "The EU Agency for Cybersecurity's annual report on the threat landscape.",
      sourceType: "Government"
    },
    {
      name: "MITRE Engenuity ATT&CK Evaluations",
      url: "https://attackevals.mitre-engenuity.org/",
      description: "Evaluations assessing security vendor capabilities against ATT&CK techniques.",
      sourceType: "Research"
    },
    {
      name: "SANS Emerging Trends",
      url: "https://www.sans.org/blog/",
      description: "SANS Institute blog discussing emerging cybersecurity trends and training.",
      sourceType: "Training Provider"
    },
    {
      name: "Kaspersky Security Bulletin",
      url: "https://securelist.com/",
      description: "Kaspersky's analysis and predictions for the cybersecurity threat landscape.",
      sourceType: "Vendor Research"
    },
    {
      name: "Dragos OT Cyber Threat Reports",
      url: "https://www.dragos.com/resources/",
      description: "Reports focusing on threats and trends specific to operational technology (OT).",
      sourceType: "Vendor Report (OT)"
    },
    {
      name: "CISA Trends",
      url: "https://www.cisa.gov/",
      description: "Alerts, insights, and guidance on current and emerging cyber threats from CISA.",
      sourceType: "Government"
    },
    {
      name: "Tanium Trends Blog",
      url: "https://www.tanium.com/blog/",
      description: "Tanium's blog discussing trends in endpoint management and security.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Threat Horizon Reports (ISF)",
      url: "https://www.securityforum.org/",
      description: "Information Security Forum reports identifying future security threats.",
      sourceType: "Industry Group"
    },
    {
      name: "Splunk – State of Security",
      url: "https://www.splunk.com/en_us/form/state-of-security.html",
      description: "Splunk's report analyzing trends in security operations and data.",
      sourceType: "Vendor Report"
    },
    {
      name: "Google Cloud – Cybersecurity Insights",
      url: "https://cloud.google.com/security",
      description: "Insights and reports from Google Cloud on cloud security and threat intelligence.",
      sourceType: "Vendor Insight"
    },
    {
      name: "AWS Security Blog",
      url: "https://aws.amazon.com/blogs/security/",
      description: "AWS blog covering security best practices, services, and trends in the cloud.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Zero Trust Maturity Model (CISA)",
      url: "https://www.cisa.gov/resources-tools/resources/zero-trust-maturity-model",
      description: "CISA's model outlining the path towards Zero Trust architecture adoption.",
      sourceType: "Government"
    },
    {
      name: "Quantum Threats to Cryptography (NIST)",
      url: "https://csrc.nist.gov/publications/detail/nistir/8105/final",
      description: "NIST report on the potential impact of quantum computing on cryptography.",
      sourceType: "Government"
    },
    {
      name: "NSA – Quantum-Resistant Algorithms",
      url: "https://www.nsa.gov/",
      description: "NSA guidance and information on the transition to quantum-resistant cryptography.",
      sourceType: "Government"
    },
    {
      name: "SecurityWeek - Future Trends",
      url: "https://www.securityweek.com/",
      description: "SecurityWeek news covering future trends and predictions in cybersecurity.",
      sourceType: "News Site"
    },
    {
      name: "IEEE Cybersecurity Initiatives",
      url: "https://cybersecurity.ieee.org/",
      description: "IEEE's work on standards and research related to cybersecurity.",
      sourceType: "Standards Body"
    },
    {
      name: "Google Project Zero",
      url: "https://googleprojectzero.blogspot.com/",
      description: "Google's team focused on finding zero-day vulnerabilities; blog details findings.",
      sourceType: "Vendor Research"
    },
    {
      name: "Mozilla Emerging Threats",
      url: "https://blog.mozilla.org/en/products/firefox/emerging-cybersecurity-threats/",
      description: "Mozilla's blog discussing emerging web threats and browser security.",
      sourceType: "Vendor Blog"
    },
    {
      name: "TechCrunch Security Future",
      url: "https://techcrunch.com/tag/security/",
      description: "TechCrunch coverage focusing on future security technologies and startups.",
      sourceType: "News Site"
    },
    {
      name: "Wired – What's Next in Cyber",
      url: "https://www.wired.com/category/security/",
      description: "Wired's reporting on future cybersecurity trends and challenges.",
      sourceType: "News Site"
    },
    {
      name: "ZDNet – Security Forecasts",
      url: "https://www.zdnet.com/topic/security/",
      description: "ZDNet articles providing forecasts and analysis of security trends.",
      sourceType: "News Site"
    },
    {
      name: "The Hacker News – Predictions",
      url: "https://thehackernews.com/",
      description: "The Hacker News often features articles on cybersecurity predictions.",
      sourceType: "News Site"
    },
    {
      name: "Threat Horizon (Internet Security Forum)",
      url: "https://www.securityforum.org/tool/threat-horizon/",
      description: "ISF's tool and reports identifying emerging security threats over different time horizons.",
      sourceType: "Industry Group"
    },
    {
      name: "AI in Cybersecurity (MIT Sloan)",
      url: "https://sloanreview.mit.edu/",
      description: "MIT Sloan Management Review articles on the strategic impact of AI in security.",
      sourceType: "Publication"
    },
    {
      name: "Quantum Security at NIST",
      url: "https://csrc.nist.gov/Projects/post-quantum-cryptography",
      description: "NIST's project page for developing post-quantum cryptographic standards.",
      sourceType: "Government"
    },
    {
      name: "Emerging Cloud Security Risks (Trend Micro)",
      url: "https://www.trendmicro.com/vinfo/us/security/news/cloud-security",
      description: "Trend Micro's research and insights on emerging cloud security risks.",
      sourceType: "Vendor Research"
    },
    {
      name: "IoT Security Foundation",
      url: "https://www.iotsecurityfoundation.org/",
      description: "Foundation providing best practices and guidance on securing the Internet of Things.",
      sourceType: "Industry Group"
    },
    {
      name: "Cybersecurity Futures 2030 (UC Berkeley)",
      url: "https://csf.berkeley.edu/",
      description: "UC Berkeley research initiative exploring the long-term future of cybersecurity.",
      sourceType: "Academic Research"
    }
  ]

  // Filter trends based on selected category
  const filteredEmergingTrends = selectedCategory === 'all'
    ? emergingTrends
    : emergingTrends.filter(trend => trend.category === selectedCategory);

  // Check if any content matches the filter
  const hasTrends = filteredEmergingTrends.length > 0;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-green-600/10 rounded-xl mb-4">
              <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-green-500 font-medium">Emerging Trends</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Trends Analysis
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Stay ahead of emerging technologies and trends shaping the future of cybersecurity.
            </p>
            <Link href="/insights" className="text-purple-400 hover:underline flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Emerging Trends</h2>
              
              <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-3 py-2 rounded-full text-sm whitespace-nowrap ${
                      selectedCategory === category.id 
                        ? 'bg-green-900/40 text-green-400 border border-green-700'
                        : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Emerging Trends Section */}
            {hasTrends ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEmergingTrends.map((trend, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/30 transition-colors h-full flex flex-col"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-green-900/30 p-2 rounded-lg mr-3">
                        <trend.icon className="w-6 h-6 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{trend.title}</h3>
                    </div>
                    
                    <p className="text-gray-400 mb-6 flex-grow">{trend.description}</p>
                    
                    {trend.resources.length > 0 && (
                      <div>
                        <div className="text-sm font-medium text-white mb-3">Resources</div>
                        <div className="space-y-2">
                          {trend.resources.map((resource, i) => (
                            <a
                              key={i}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-300 hover:text-green-400 text-sm group"
                            >
                              {resource.type === 'video' ? (
                                <PlayIcon className="text-green-500 mr-2" />
                              ) : (
                                <ExternalLink className="w-4 h-4 text-green-500 mr-2" />
                              )}
                              <span className="group-hover:underline">{resource.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-900/30 rounded-lg border border-gray-800">
                <div className="text-gray-400 mb-3">No trends found for the selected category.</div>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="text-green-400 hover:underline"
                >
                  View all trends
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Industry-Specific Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industryTrends.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.sector}</h3>
                  <div className="space-y-6">
                    {industry.trends.map((trend, i) => (
                      <div key={i} className={i > 0 ? "pt-4 border-t border-gray-800" : ""}>
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium text-white">
                            {trend.trend}
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            trend.impact === 'Critical' ? 'bg-red-500/10 text-red-500' :
                            'bg-yellow-500/10 text-yellow-500'
                          }`}>
                            {trend.impact}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{trend.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          Timeline: {trend.timeline}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Trends Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Trending Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technologyTrends.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-sm font-medium text-green-500">{tech.status}</div>
                    <div className="text-green-500 font-bold">{tech.growth}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 mb-4">{tech.description}</p>
                  
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-gray-500">Market Adoption</span>
                    <span className="text-white">{tech.adoption}</span>
                  </div>
                  
                  <div className="relative w-full h-2 bg-gray-800 rounded-full mb-4">
                    <div
                      className="absolute top-0 left-0 h-full bg-green-600 rounded-full"
                      style={{ width: tech.adoption }}
                    ></div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-white mb-2">Key Benefits</div>
                    <div className="space-y-1">
                      {tech.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Future Predictions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {futureOutlook.map((year, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="inline-block text-xl font-semibold text-white px-4 py-2 bg-black border border-gray-700 rounded-lg mb-6">
                    {year.year}
                  </h3>
                  <div className="space-y-6">
                    {year.predictions.map((prediction, i) => (
                      <div key={i} className={i > 0 ? "pt-4 border-t border-gray-800" : ""}>
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium text-white">
                            {prediction.title}
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            prediction.confidence === 'Very High' ? 'bg-green-500/10 text-green-500' :
                            prediction.confidence === 'High' ? 'bg-blue-500/10 text-blue-500' :
                            'bg-yellow-500/10 text-yellow-500'
                          }`}>
                            {prediction.confidence}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">{prediction.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Trend Reports & Analysis Section */}
      <div className="bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Emerging Trend Reports & Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendResources.map((resource, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-green-900/30 text-green-400 text-xs px-3 py-1 rounded-full mb-3">
                    {resource.sourceType}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{resource.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{resource.description}</p>
                </div>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-green-400 hover:text-green-300 text-sm font-medium"
                >
                  Visit Resource
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Stay Ahead of the Curve</h2>
            <p className="text-lg text-gray-400 mb-8">
              Keep up with the latest cybersecurity trends and prepare for tomorrow's challenges.
            </p>
            <Link href="/insights">
              <Button className="bg-green-600 hover:bg-green-700">
                Back to Insights
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// PlayIcon component for video resources
function PlayIcon({ className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={`w-5 h-5 ${className}`}
    >
      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
    </svg>
  );
} 