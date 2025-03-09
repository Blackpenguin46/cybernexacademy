import { TrendingUp, ExternalLink, Clock, Tag, ChevronRight, ArrowUpRight, Globe, AlertTriangle, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TrendsPage() {
  const emergingTrends = [
    {
      title: "Zero Trust Evolution",
      category: "Security Architecture",
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
      category: "Cryptography",
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
      category: "Security Operations",
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

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-orange-600/10 rounded-xl mb-4">
              <TrendingUp className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-orange-500 font-medium">Emerging Trends</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Trends & Future Outlook
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore emerging trends, industry shifts, and future predictions in cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Emerging Trends Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Emerging Trends
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {emergingTrends.map((trend, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-orange-500 text-sm">{trend.category}</span>
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
                    <div className="pt-4 border-t border-gray-800">
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-gray-500">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {trend.timeline}
                        </div>
                        <div className="text-orange-500">
                          {trend.adoption}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Industry-Specific Trends
            </h2>
            <div className="space-y-8">
              {industryTrends.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{industry.sector}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {industry.trends.map((trend, trendIndex) => (
                      <div
                        key={trendIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="font-medium text-white mb-1">{trend.trend}</div>
                            <div className="text-sm text-gray-400">{trend.description}</div>
                          </div>
                          <span className={`px-2 py-1 rounded text-sm font-medium ${
                            trend.impact === 'Critical' ? 'bg-red-500/10 text-red-500' :
                            'bg-orange-500/10 text-orange-500'
                          }`}>
                            {trend.impact}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
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
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Technology Trends
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {technologyTrends.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-orange-500 text-sm">{tech.status}</span>
                        <span className="text-sm bg-orange-900/50 text-orange-300 px-2 py-1 rounded">
                          Growth: {tech.growth}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Benefits</div>
                      <div className="space-y-2">
                        {tech.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Shield className="w-4 h-4 text-orange-500 mr-2" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="text-sm text-orange-500">
                        Current Adoption: {tech.adoption}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Future Outlook
            </h2>
            <div className="space-y-8">
              {futureOutlook.map((year, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{year.year}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {year.predictions.map((prediction, predIndex) => (
                      <div
                        key={predIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-white">{prediction.title}</h4>
                            <span className="text-sm bg-orange-900/50 text-orange-300 px-2 py-1 rounded">
                              {prediction.confidence}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">{prediction.description}</p>
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

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Ahead of Trends
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get regular updates on emerging trends and future predictions in cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Subscribe to Updates
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/insights">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Explore More Insights
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 