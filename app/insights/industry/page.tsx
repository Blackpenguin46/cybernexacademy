import { TrendingUp, ExternalLink, Clock, Tag, Building2, ChevronRight, Globe, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IndustryTrendsPage() {
  const industryTrends = [
    {
      industry: "Financial Services",
      icon: "🏦",
      trends: [
        {
          trend: "Zero Trust Banking",
          status: "Growing",
          adoption: "45%",
          timeline: "2024-2025",
          description: "Implementation of zero trust architecture in banking systems"
        },
        {
          trend: "AI-Powered Fraud Detection",
          status: "Rapid Growth",
          adoption: "65%",
          timeline: "Current",
          description: "Advanced fraud detection using artificial intelligence"
        }
      ],
      challenges: [
        "Real-time threat detection",
        "Regulatory compliance",
        "Legacy system integration",
        "Customer data protection"
      ],
      investments: [
        {
          area: "Security Operations",
          growth: "+45%",
          focus: "Enhanced monitoring and response capabilities"
        },
        {
          area: "Cloud Security",
          growth: "+55%",
          focus: "Secure cloud infrastructure and applications"
        }
      ]
    },
    {
      industry: "Healthcare",
      icon: "🏥",
      trends: [
        {
          trend: "Medical IoT Security",
          status: "Emerging",
          adoption: "35%",
          timeline: "2024-2026",
          description: "Security solutions for connected medical devices"
        },
        {
          trend: "Zero Trust Healthcare",
          status: "Growing",
          adoption: "40%",
          timeline: "2024-2025",
          description: "Implementation of zero trust in healthcare systems"
        }
      ],
      challenges: [
        "Device security",
        "Patient data privacy",
        "Compliance requirements",
        "Legacy systems"
      ],
      investments: [
        {
          area: "Device Security",
          growth: "+65%",
          focus: "Securing medical IoT devices and networks"
        },
        {
          area: "Data Protection",
          growth: "+50%",
          focus: "Enhanced patient data security measures"
        }
      ]
    },
    {
      industry: "Manufacturing",
      icon: "🏭",
      trends: [
        {
          trend: "OT/IT Convergence",
          status: "Rapid Growth",
          adoption: "55%",
          timeline: "2024-2025",
          description: "Integration of operational and information technology security"
        },
        {
          trend: "Smart Factory Security",
          status: "Growing",
          adoption: "45%",
          timeline: "2024-2026",
          description: "Security solutions for smart manufacturing systems"
        }
      ],
      challenges: [
        "OT security",
        "Supply chain risks",
        "Legacy equipment",
        "Skills gap"
      ],
      investments: [
        {
          area: "OT Security",
          growth: "+60%",
          focus: "Securing operational technology infrastructure"
        },
        {
          area: "Supply Chain",
          growth: "+45%",
          focus: "Enhanced supply chain security measures"
        }
      ]
    }
  ]

  const emergingTechnologies = [
    {
      category: "Artificial Intelligence",
      technologies: [
        {
          name: "AI-Driven Security Operations",
          adoption: "High",
          maturity: "Growing",
          impact: "Transformative",
          applications: [
            "Threat detection",
            "Incident response",
            "Risk assessment",
            "Fraud prevention"
          ]
        },
        {
          name: "Machine Learning Analytics",
          adoption: "Medium",
          maturity: "Emerging",
          impact: "Significant",
          applications: [
            "Behavior analysis",
            "Anomaly detection",
            "Pattern recognition",
            "Predictive security"
          ]
        }
      ]
    },
    {
      category: "Cloud Security",
      technologies: [
        {
          name: "Cloud-Native Security",
          adoption: "Very High",
          maturity: "Mature",
          impact: "Transformative",
          applications: [
            "Container security",
            "Serverless security",
            "Cloud workload protection",
            "API security"
          ]
        },
        {
          name: "Zero Trust Cloud",
          adoption: "High",
          maturity: "Growing",
          impact: "Significant",
          applications: [
            "Identity-based security",
            "Micro-segmentation",
            "Cloud access security",
            "Data protection"
          ]
        }
      ]
    },
    {
      category: "Automation & Orchestration",
      technologies: [
        {
          name: "Security Automation",
          adoption: "High",
          maturity: "Growing",
          impact: "Significant",
          applications: [
            "Automated response",
            "Security orchestration",
            "Workflow automation",
            "Policy enforcement"
          ]
        },
        {
          name: "DevSecOps Integration",
          adoption: "Medium",
          maturity: "Emerging",
          impact: "Transformative",
          applications: [
            "Pipeline security",
            "Automated testing",
            "Security as code",
            "Continuous monitoring"
          ]
        }
      ]
    }
  ]

  const marketTrends = [
    {
      category: "Investment Trends",
      trends: [
        {
          trend: "Security Operations",
          growth: "+55%",
          focus: "Enhanced SOC capabilities and automation",
          timeline: "2024-2025"
        },
        {
          trend: "Cloud Security",
          growth: "+65%",
          focus: "Cloud-native security solutions",
          timeline: "2024-2025"
        },
        {
          trend: "Zero Trust",
          growth: "+75%",
          focus: "Zero trust architecture implementation",
          timeline: "2024-2026"
        }
      ]
    },
    {
      category: "Technology Adoption",
      trends: [
        {
          trend: "AI Security",
          growth: "+85%",
          focus: "AI-powered security solutions",
          timeline: "2024-2025"
        },
        {
          trend: "Automation",
          growth: "+70%",
          focus: "Security automation and orchestration",
          timeline: "2024-2025"
        },
        {
          trend: "IoT Security",
          growth: "+60%",
          focus: "Connected device security",
          timeline: "2024-2026"
        }
      ]
    }
  ]

  const futureOutlook = [
    {
      year: "2024",
      predictions: [
        {
          prediction: "AI-First Security",
          probability: "High",
          impact: "Transformative",
          description: "Widespread adoption of AI-driven security solutions"
        },
        {
          prediction: "Zero Trust Mainstream",
          probability: "Very High",
          impact: "Significant",
          description: "Zero trust becomes standard security model"
        }
      ]
    },
    {
      year: "2025",
      predictions: [
        {
          prediction: "Automated Security",
          probability: "High",
          impact: "Transformative",
          description: "Full automation of security operations"
        },
        {
          prediction: "Edge Security",
          probability: "Medium",
          impact: "Significant",
          description: "Security shifts to edge computing"
        }
      ]
    },
    {
      year: "2026",
      predictions: [
        {
          prediction: "Quantum Security",
          probability: "Medium",
          impact: "Revolutionary",
          description: "Quantum-safe security becomes critical"
        },
        {
          prediction: "Autonomous Security",
          probability: "Medium",
          impact: "Transformative",
          description: "Self-healing security systems emerge"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-600/10 rounded-xl mb-4">
              <TrendingUp className="w-5 h-5 text-indigo-500 mr-2" />
              <span className="text-indigo-500 font-medium">Industry Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Industry Trends
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore emerging trends, technologies, and market dynamics in cybersecurity.
            </p>
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
            <div className="grid gap-8 md:grid-cols-3">
              {industryTrends.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-indigo-500/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{industry.icon}</span>
                        <h3 className="text-xl font-semibold text-white">{industry.industry}</h3>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Trends</div>
                      <div className="space-y-3">
                        {industry.trends.map((trend, trendIndex) => (
                          <div
                            key={trendIndex}
                            className="bg-gray-800/50 rounded p-3"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium text-white">{trend.trend}</div>
                              <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">
                                {trend.status}
                              </span>
                            </div>
                            <div className="text-sm text-gray-400 mb-2">{trend.description}</div>
                            <div className="flex items-center justify-between text-sm">
                              <div className="text-indigo-500">Adoption: {trend.adoption}</div>
                              <div className="text-gray-500">{trend.timeline}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Challenges</div>
                      <div className="space-y-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <div
                            key={challengeIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <ChevronRight className="w-4 h-4 text-indigo-500 mr-2" />
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="text-sm text-gray-500 mb-2">Investment Focus</div>
                      <div className="space-y-3">
                        {industry.investments.map((investment, investIndex) => (
                          <div
                            key={investIndex}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-gray-400">{investment.area}</span>
                            <span className="text-indigo-500">{investment.growth}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Technologies Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Emerging Technologies
            </h2>
            <div className="space-y-8">
              {emergingTechnologies.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-white">{tech.name}</div>
                            <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">
                              {tech.maturity}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-500">Adoption</div>
                              <div className="text-indigo-500">{tech.adoption}</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Impact</div>
                              <div className="text-indigo-500">{tech.impact}</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Key Applications</div>
                          <div className="space-y-2">
                            {tech.applications.map((app, appIndex) => (
                              <div
                                key={appIndex}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <ArrowUpRight className="w-4 h-4 text-indigo-500 mr-2" />
                                {app}
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

      {/* Market Trends Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Market Trends
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {marketTrends.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.trends.map((trend, trendIndex) => (
                      <div
                        key={trendIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-white">{trend.trend}</div>
                          <span className="text-indigo-500">{trend.growth}</span>
                        </div>
                        <div className="text-sm text-gray-400 mb-2">{trend.focus}</div>
                        <div className="text-sm text-gray-500">Timeline: {trend.timeline}</div>
                      </div>
                    ))}
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
                            <div className="font-medium text-white">{prediction.prediction}</div>
                            <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">
                              {prediction.probability}
                            </span>
                          </div>
                          <div className="text-sm text-gray-400 mb-2">{prediction.description}</div>
                          <div className="text-sm text-indigo-500">Impact: {prediction.impact}</div>
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
              Stay Ahead of Industry Trends
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get regular updates on emerging trends and market insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
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