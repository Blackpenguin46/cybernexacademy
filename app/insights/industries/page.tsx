import { Building2, ExternalLink, Clock, Tag, Shield, Filter, Globe, AlertTriangle, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IndustriesPage() {
  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      challenges: [
        "Patient data protection",
        "Medical device security",
        "Regulatory compliance"
      ],
      threats: [
        "Ransomware attacks",
        "Data breaches",
        "IoT vulnerabilities"
      ],
      regulations: ["HIPAA", "HITECH", "FDA Guidelines"],
      stats: {
        breaches: "45% YoY increase",
        avgCost: "$9.2M per breach",
        incidents: "328 in 2023"
      }
    },
    {
      name: "Financial Services",
      icon: "🏦",
      challenges: [
        "Real-time threat detection",
        "Payment system security",
        "Customer data protection"
      ],
      threats: [
        "Financial fraud",
        "Account takeover",
        "Supply chain attacks"
      ],
      regulations: ["PCI DSS", "SOX", "GLBA"],
      stats: {
        breaches: "32% YoY increase",
        avgCost: "$18.3M per breach",
        incidents: "412 in 2023"
      }
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      challenges: [
        "OT/IT convergence",
        "Supply chain security",
        "Industrial IoT protection"
      ],
      threats: [
        "Industrial espionage",
        "Sabotage",
        "IP theft"
      ],
      regulations: ["NIST CSF", "IEC 62443", "ISO 27001"],
      stats: {
        breaches: "58% YoY increase",
        avgCost: "$11.7M per breach",
        incidents: "245 in 2023"
      }
    }
  ]

  const securitySolutions = [
    {
      industry: "Healthcare",
      solutions: [
        {
          name: "PHI Protection Suite",
          type: "Data Security",
          features: [
            "End-to-end encryption",
            "Access control",
            "Audit logging"
          ],
          benefits: "Ensures HIPAA compliance and protects patient data"
        },
        {
          name: "Medical Device Security",
          type: "IoT Security",
          features: [
            "Device authentication",
            "Network segmentation",
            "Vulnerability management"
          ],
          benefits: "Protects connected medical devices from cyber threats"
        }
      ]
    },
    {
      industry: "Financial Services",
      solutions: [
        {
          name: "Fraud Detection System",
          type: "Transaction Security",
          features: [
            "AI-powered analysis",
            "Real-time monitoring",
            "Behavioral analytics"
          ],
          benefits: "Prevents financial fraud and ensures transaction security"
        },
        {
          name: "Secure Banking Platform",
          type: "Application Security",
          features: [
            "Multi-factor authentication",
            "Encrypted communications",
            "Zero trust architecture"
          ],
          benefits: "Provides secure digital banking services"
        }
      ]
    },
    {
      industry: "Manufacturing",
      solutions: [
        {
          name: "ICS Protection",
          type: "OT Security",
          features: [
            "OT network monitoring",
            "Asset management",
            "Threat detection"
          ],
          benefits: "Secures industrial control systems and manufacturing processes"
        },
        {
          name: "Supply Chain Security",
          type: "Supply Chain",
          features: [
            "Vendor risk management",
            "Component tracking",
            "Secure logistics"
          ],
          benefits: "Ensures end-to-end supply chain security"
        }
      ]
    }
  ]

  const complianceGuidelines = [
    {
      industry: "Healthcare",
      frameworks: [
        {
          name: "HIPAA Security Rule",
          requirements: [
            "Technical safeguards",
            "Physical safeguards",
            "Administrative safeguards"
          ],
          deadlines: "Ongoing compliance required",
          penalties: "Up to $1.5M per violation"
        },
        {
          name: "HITECH Act",
          requirements: [
            "Breach notification",
            "Electronic health records security",
            "Patient privacy rights"
          ],
          deadlines: "Immediate breach reporting",
          penalties: "Tiered civil and criminal penalties"
        }
      ]
    },
    {
      industry: "Financial Services",
      frameworks: [
        {
          name: "PCI DSS",
          requirements: [
            "Secure network architecture",
            "Cardholder data protection",
            "Access control measures"
          ],
          deadlines: "Annual certification",
          penalties: "Fines and suspension of card processing"
        },
        {
          name: "SOX Compliance",
          requirements: [
            "Internal controls",
            "Financial reporting security",
            "Audit trails"
          ],
          deadlines: "Quarterly and annual reporting",
          penalties: "Criminal penalties for non-compliance"
        }
      ]
    }
  ]

  const emergingTrends = [
    {
      industry: "Healthcare",
      trends: [
        {
          trend: "Telehealth Security",
          impact: "High",
          timeline: "Current",
          description: "Enhanced security measures for remote healthcare delivery"
        },
        {
          trend: "AI in Healthcare Security",
          impact: "Medium",
          timeline: "1-2 Years",
          description: "AI-powered threat detection and patient data protection"
        }
      ]
    },
    {
      industry: "Financial Services",
      trends: [
        {
          trend: "Decentralized Finance Security",
          impact: "High",
          timeline: "Current",
          description: "Security solutions for blockchain and crypto assets"
        },
        {
          trend: "Open Banking Protection",
          impact: "High",
          timeline: "Current",
          description: "API security and third-party risk management"
        }
      ]
    },
    {
      industry: "Manufacturing",
      trends: [
        {
          trend: "Smart Factory Security",
          impact: "Critical",
          timeline: "1-3 Years",
          description: "Integrated security for Industry 4.0 implementations"
        },
        {
          trend: "Digital Twin Protection",
          impact: "Medium",
          timeline: "2-4 Years",
          description: "Security measures for digital twin technologies"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-pink-600/10 rounded-xl mb-4">
              <Building2 className="w-5 h-5 text-pink-500 mr-2" />
              <span className="text-pink-500 font-medium">Industry Security</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Industry-Specific Cybersecurity
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore tailored cybersecurity solutions and challenges across different industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Industry Security Landscape
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-pink-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{industry.icon}</span>
                      <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Challenges</div>
                      <div className="flex flex-wrap gap-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <span
                            key={challengeIndex}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {challenge}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Primary Threats</div>
                      <div className="flex flex-wrap gap-2">
                        {industry.threats.map((threat, threatIndex) => (
                          <span
                            key={threatIndex}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {threat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Regulations</div>
                      <div className="flex flex-wrap gap-2">
                        {industry.regulations.map((reg, regIndex) => (
                          <span
                            key={regIndex}
                            className="text-xs bg-pink-900/50 text-pink-300 px-2 py-1 rounded border border-pink-800"
                          >
                            {reg}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Breaches</div>
                          <div className="text-pink-500">{industry.stats.breaches}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Avg. Cost</div>
                          <div className="text-pink-500">{industry.stats.avgCost}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Incidents</div>
                          <div className="text-pink-500">{industry.stats.incidents}</div>
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

      {/* Security Solutions Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Industry Solutions
            </h2>
            <div className="space-y-12">
              {securitySolutions.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">{industry.industry}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {industry.solutions.map((solution, solIndex) => (
                      <div
                        key={solIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="font-medium text-white mb-1">{solution.name}</div>
                            <div className="text-sm text-pink-500">{solution.type}</div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm text-gray-500 mb-2">Features</div>
                            <div className="space-y-2">
                              {solution.features.map((feature, featIndex) => (
                                <div
                                  key={featIndex}
                                  className="flex items-center text-gray-300 text-sm"
                                >
                                  <Shield className="w-4 h-4 text-pink-500 mr-2" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="text-sm text-gray-400">
                            {solution.benefits}
                          </div>
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

      {/* Compliance Guidelines Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Compliance Requirements
            </h2>
            <div className="space-y-8">
              {complianceGuidelines.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{industry.industry}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {industry.frameworks.map((framework, frameworkIndex) => (
                      <div
                        key={frameworkIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-4">
                          <div className="font-medium text-white mb-1">{framework.name}</div>
                          <div className="text-sm text-gray-400">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-4 h-4 text-pink-500" />
                              {framework.deadlines}
                            </div>
                            <div className="flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 text-pink-500" />
                              {framework.penalties}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Requirements</div>
                          <div className="space-y-2">
                            {framework.requirements.map((req, reqIndex) => (
                              <div
                                key={reqIndex}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></div>
                                {req}
                              </div>
                            ))}
                          </div>
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

      {/* Emerging Trends Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Industry Trends
            </h2>
            <div className="space-y-8">
              {emergingTrends.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{industry.industry}</h3>
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
                            trend.impact === 'High' ? 'bg-orange-500/10 text-orange-500' :
                            'bg-yellow-500/10 text-yellow-500'
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

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Get Industry-Specific Guidance
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Connect with our experts for tailored cybersecurity solutions for your industry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Request Consultation
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