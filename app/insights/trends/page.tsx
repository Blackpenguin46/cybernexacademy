"use client"

import { useState } from 'react'
import { TrendingUp, ExternalLink, Clock, Tag, ChevronRight, ArrowUpRight, Globe, AlertTriangle, Shield, Filter, X, Code, Server, Lock, Database, Zap, Cloud, Brain, Cpu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'
import SectionHeader from '../../components/SectionHeader'

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
      resources: []
    },
    {
      title: "Extended Detection and Response (XDR)",
      description: "Unified security incident detection and response across multiple security layers",
      icon: Shield,
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

  // Filter trends based on selected category
  const filteredEmergingTrends = selectedCategory === 'all'
    ? emergingTrends
    : emergingTrends.filter(trend => trend.title === selectedCategory);

  const filteredIndustryShifts = selectedCategory === 'all'
    ? industryTrends
    : industryTrends.filter(shift => shift.sector === selectedCategory);

  const filteredPredictions = selectedCategory === 'all'
    ? futureOutlook
    : futureOutlook.filter(prediction => prediction.year === selectedCategory);

  // Check if any content matches the filter
  const hasContent = filteredEmergingTrends.length > 0 || 
                    filteredIndustryShifts.length > 0 || 
                    filteredPredictions.length > 0;

  return (
    <div className="container mx-auto px-4 pb-20">
      <SectionHeader
        title="Emerging Cybersecurity Trends"
        description="Stay ahead of the curve with the latest developments and emerging technologies in cybersecurity"
        icon={<TrendingUp className="w-12 h-12 text-neon-blue" />}
      />
      
      <div className="mt-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEmergingTrends.map((trend, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 border border-neon-blue/20 rounded-lg p-6 hover:border-neon-blue/50 transition-all hover:shadow-lg hover:shadow-neon-blue/10"
            >
              <div className="flex items-center mb-4">
                <div className="bg-neon-blue/10 p-3 rounded-lg mr-4">
                  <trend.icon className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">{trend.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{trend.description}</p>
              
              {trend.resources.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Related Resources</h4>
                  <div className="space-y-3">
                    {trend.resources.map((resource, idx) => (
                      <a 
                        key={idx} 
                        href={resource.url} 
                        target={resource.type === "internal" ? "_self" : "_blank"} 
                        rel={resource.type !== "internal" ? "noopener noreferrer" : undefined}
                        className="flex items-center p-3 bg-gray-800/50 rounded-md border border-gray-700 hover:border-neon-blue/30 group transition-colors"
                      >
                        <span className="w-6 h-6 mr-3 flex items-center justify-center">
                          {resource.type === "video" && <PlayIcon className="text-red-400" />}
                          {resource.type === "website" && <Globe className="text-blue-400 w-5 h-5" />}
                          {resource.type === "internal" && <Database className="text-green-400 w-5 h-5" />}
                        </span>
                        <span className="text-gray-300 group-hover:text-white transition-colors">{resource.title}</span>
                        {resource.type !== "internal" && <ExternalLink className="w-3 h-3 ml-auto text-gray-500 group-hover:text-neon-blue" />}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-neon-blue/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">AI in Cybersecurity Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">Artificial Intelligence is revolutionizing cybersecurity by enhancing threat detection, automating security operations, and improving incident response capabilities.</p>
              <p className="text-gray-300 mb-6">Organizations are leveraging AI to process vast amounts of security data, identify patterns, and detect anomalies that human analysts might miss.</p>
              
              <h3 className="text-lg font-semibold text-white mb-3">Key Advancements:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-2 mt-1">•</div>
                  <span>Predictive threat intelligence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-2 mt-1">•</div>
                  <span>Automated incident response</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-2 mt-1">•</div>
                  <span>Behavioral analysis and anomaly detection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-2 mt-1">•</div>
                  <span>Adversarial machine learning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/30 rounded-lg p-6 border border-neon-blue/10">
              <h3 className="text-lg font-semibold text-white mb-4">Latest AI in Cybersecurity Resources</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.youtube.com/watch?v=4QzBdeUQ0Dc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-800/80 rounded-md hover:bg-gray-800 transition-colors group border border-transparent hover:border-neon-blue/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 group-hover:text-white transition-colors">AI in Cybersecurity Overview</span>
                    <ExternalLink className="w-4 h-4 text-neon-blue/70 group-hover:text-neon-blue" />
                  </div>
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=S3QNDSax2IA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-800/80 rounded-md hover:bg-gray-800 transition-colors group border border-transparent hover:border-neon-blue/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 group-hover:text-white transition-colors">The AI Cybersecurity Future</span>
                    <ExternalLink className="w-4 h-4 text-neon-blue/70 group-hover:text-neon-blue" />
                  </div>
                </a>
                <Link href="/academy/youtube">
                  <div className="p-3 bg-gray-800/80 rounded-md hover:bg-gray-800 transition-colors border border-transparent hover:border-neon-blue/30 flex items-center justify-between group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">More AI Cybersecurity Videos</span>
                    <TrendingUp className="w-4 h-4 text-neon-blue/70 group-hover:text-neon-blue" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Want to explore more trends and innovations in cybersecurity?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/insights/research">
              <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                Research Papers
              </Button>
            </Link>
            <Link href="/insights">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                Insights Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
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