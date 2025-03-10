"use client"

import { useState } from 'react'
import { TrendingUp, ExternalLink, Clock, Tag, ChevronRight, ArrowUpRight, Globe, AlertTriangle, Shield, Filter, X, Code, Server, Lock, Database, Zap, Cloud } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'
import SectionHeader from '@/app/components/SectionHeader'

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
      title: "Zero Trust Evolution",
      category: "architecture",
      timeline: "Current - 2025",
      impact: "Transformative",
      description: "Advanced implementation of zero trust principles with AI-driven continuous authentication.",
      keyPoints: [
        "AI-powered access decisions",
        "Real-time risk assessment",
        "Identity-centric security",
        "Microsegmentation 2.0"
      ],
      adoption: "65% of enterprises by 2025"
    },
    {
      title: "Quantum-Safe Security",
      category: "cryptography",
      timeline: "2024 - 2027",
      impact: "Revolutionary",
      description: "Preparation and transition to quantum-resistant cryptographic algorithms and protocols.",
      keyPoints: [
        "Post-quantum algorithms",
        "Quantum key distribution",
        "Hybrid cryptography",
        "Infrastructure updates"
      ],
      adoption: "40% of organizations by 2026"
    },
    {
      title: "AI Security Operations",
      category: "operations",
      timeline: "Current - 2026",
      impact: "Significant",
      description: "Integration of advanced AI/ML capabilities in security operations and threat detection.",
      keyPoints: [
        "Automated threat response",
        "Predictive analytics",
        "Behavioral analysis",
        "Smart SOAR integration"
      ],
      adoption: "75% of SOCs by 2025"
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
    : emergingTrends.filter(trend => trend.category === selectedCategory);

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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Cybersecurity Trends & Future Outlook"
          description="Explore emerging trends, industry shifts, and future predictions in cybersecurity."
          icon={<TrendingUp className="h-10 w-10 text-orange-500" />}
        />

        {/* Categories Filter */}
        <div className="mb-8">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            accentColor="orange"
          />
        </div>
        
        {hasContent ? (
          <>
            {/* Emerging Trends Section */}
            {filteredEmergingTrends.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 text-orange-500 mr-3" />
                  Emerging Trends
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredEmergingTrends.map((trend, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-colors"
                    >
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-orange-500 text-sm">
                              {categories.find(cat => cat.id === trend.category)?.name || trend.category}
                            </span>
                            <span className="text-sm bg-orange-900/50 text-orange-300 px-2 py-1 rounded">
                              {trend.impact}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">{trend.title}</h3>
                          <p className="text-gray-400 text-sm">{trend.description}</p>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Key Points</div>
                          <div className="space-y-2">
                            {trend.keyPoints.map((point, pointIndex) => (
                              <div
                                key={pointIndex}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <ChevronRight className="w-4 h-4 text-orange-500 mr-2" />
                                {point}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 text-sm">
                          <div className="flex items-center text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {trend.timeline}
                          </div>
                          <div className="text-gray-500">
                            {trend.adoption}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Industry Shifts Section */}
            {filteredIndustryShifts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Globe className="w-6 h-6 text-orange-500 mr-3" />
                  Industry Shifts
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredIndustryShifts.map((shift, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">{shift.sector}</h3>
                        <span className="bg-orange-900/50 text-orange-300 text-xs px-2 py-1 rounded">
                          {categories.find(cat => cat.id === shift.sector)?.name || shift.sector}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4">{shift.trends.map(trend => trend.description).join(', ')}</p>
                      <div>
                        <div className="text-sm text-gray-500 mb-2">Trends</div>
                        <div className="flex flex-wrap gap-2">
                          {shift.trends.map((trend, trendIndex) => (
                            <span
                              key={trendIndex}
                              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                            >
                              {trend.trend}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Predictions Section */}
            {filteredPredictions.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mr-3" />
                  Future Predictions
                </h2>
                <div className="space-y-6">
                  {filteredPredictions.map((prediction, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-orange-500 mr-3">{prediction.year}</span>
                          <h3 className="text-xl font-semibold text-white">{prediction.predictions.map(p => p.title).join(', ')}</h3>
                        </div>
                        <span className="bg-orange-900/50 text-orange-300 text-xs px-2 py-1 rounded">
                          {categories.find(cat => cat.id === prediction.year)?.name || prediction.year}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4">{prediction.predictions.map(p => p.description).join(', ')}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Tag className="w-4 h-4 mr-1" />
                        <span>Confidence: {prediction.predictions.map(p => p.confidence).join(', ')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
            <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No trends match your filter</h3>
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
        
        {/* Resources Section */}
        <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-white">Stay Ahead of Trends</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Globe className="h-6 w-6 flex-shrink-0 text-orange-500 mt-1" />
              <div>
                <p className="text-white font-medium">Follow industry research</p>
                <p className="text-gray-400">Subscribe to reports from Gartner, Forrester, and other research organizations.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Shield className="h-6 w-6 flex-shrink-0 text-orange-500 mt-1" />
              <div>
                <p className="text-white font-medium">Join security communities</p>
                <p className="text-gray-400">Participate in forums and groups where professionals discuss emerging threats.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <TrendingUp className="h-6 w-6 flex-shrink-0 text-orange-500 mt-1" />
              <div>
                <p className="text-white font-medium">Experiment with new technologies</p>
                <p className="text-gray-400">Set up lab environments to test emerging security tools and techniques.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 