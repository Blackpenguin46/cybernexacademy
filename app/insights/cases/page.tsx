import { FileText, ExternalLink, Clock, Tag, Building2, AlertTriangle, Shield, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CaseStudiesPage() {
  const featuredCases = [
    {
      title: "Major Healthcare Data Breach",
      organization: "Regional Medical Center",
      industry: "Healthcare",
      date: "February 2024",
      impact: {
        severity: "Critical",
        records: "2.5M patient records",
        cost: "$4.2M",
        downtime: "72 hours"
      },
      description: "Analysis of a sophisticated ransomware attack targeting patient records and medical systems.",
      keyFindings: [
        "Initial access through phishing",
        "Lateral movement via unpatched systems",
        "Encryption of critical databases",
        "Backup system compromise"
      ],
      lessons: [
        "Enhanced email security",
        "Regular patch management",
        "Segmented backup systems",
        "Improved incident response"
      ]
    },
    {
      title: "Supply Chain Attack",
      organization: "Tech Solutions Corp",
      industry: "Technology",
      date: "January 2024",
      impact: {
        severity: "High",
        records: "1.8M customer accounts",
        cost: "$3.5M",
        downtime: "48 hours"
      },
      description: "Investigation of a software supply chain compromise affecting downstream customers.",
      keyFindings: [
        "Compromised build server",
        "Malicious code injection",
        "Delayed detection",
        "Widespread distribution"
      ],
      lessons: [
        "Secure CI/CD pipeline",
        "Code signing enforcement",
        "Automated security scanning",
        "Vendor risk assessment"
      ]
    },
    {
      title: "Financial Services API Breach",
      organization: "Global Banking Corp",
      industry: "Financial Services",
      date: "March 2024",
      impact: {
        severity: "Critical",
        records: "500K transactions",
        cost: "$6.8M",
        downtime: "24 hours"
      },
      description: "Analysis of an API security breach leading to unauthorized financial transactions.",
      keyFindings: [
        "Authentication bypass",
        "Rate limiting failure",
        "Insufficient monitoring",
        "Delayed incident response"
      ],
      lessons: [
        "API security testing",
        "Rate limiting implementation",
        "Enhanced monitoring",
        "Incident response automation"
      ]
    }
  ]

  const industryInsights = [
    {
      industry: "Healthcare",
      cases: [
        {
          title: "Medical Device Vulnerability",
          impact: "High",
          date: "March 2024",
          description: "Security flaws in connected medical devices leading to potential patient data exposure"
        },
        {
          title: "Telehealth Platform Breach",
          impact: "Critical",
          date: "February 2024",
          description: "Unauthorized access to virtual consultation sessions and patient records"
        }
      ]
    },
    {
      industry: "Financial Services",
      cases: [
        {
          title: "Mobile Banking Fraud",
          impact: "Critical",
          date: "March 2024",
          description: "Sophisticated attack targeting mobile banking authentication systems"
        },
        {
          title: "Payment Gateway Compromise",
          impact: "High",
          date: "January 2024",
          description: "Security breach in payment processing system affecting merchant transactions"
        }
      ]
    },
    {
      industry: "Manufacturing",
      cases: [
        {
          title: "Industrial System Sabotage",
          impact: "Critical",
          date: "February 2024",
          description: "Targeted attack on industrial control systems disrupting production"
        },
        {
          title: "Supply Chain Infiltration",
          impact: "High",
          date: "January 2024",
          description: "Compromise of manufacturing process through third-party software"
        }
      ]
    }
  ]

  const attackPatterns = [
    {
      category: "Initial Access",
      patterns: [
        {
          name: "Phishing Campaigns",
          frequency: "Very High",
          success_rate: "23%",
          mitigation: "Email security and user training"
        },
        {
          name: "Credential Stuffing",
          frequency: "High",
          success_rate: "18%",
          mitigation: "MFA and password policies"
        }
      ]
    },
    {
      category: "Lateral Movement",
      patterns: [
        {
          name: "Pass-the-Hash",
          frequency: "High",
          success_rate: "35%",
          mitigation: "Network segmentation"
        },
        {
          name: "Remote Service Exploitation",
          frequency: "Medium",
          success_rate: "28%",
          mitigation: "Access control and patching"
        }
      ]
    },
    {
      category: "Data Exfiltration",
      patterns: [
        {
          name: "DNS Tunneling",
          frequency: "Medium",
          success_rate: "25%",
          mitigation: "DNS monitoring and filtering"
        },
        {
          name: "Cloud Storage Abuse",
          frequency: "High",
          success_rate: "32%",
          mitigation: "Cloud security policies"
        }
      ]
    }
  ]

  const recommendations = [
    {
      title: "Security Architecture",
      recommendations: [
        {
          action: "Implement Zero Trust",
          priority: "High",
          timeline: "6-12 months",
          impact: "Significant reduction in unauthorized access"
        },
        {
          action: "Network Segmentation",
          priority: "High",
          timeline: "3-6 months",
          impact: "Limited lateral movement capability"
        }
      ]
    },
    {
      title: "Security Operations",
      recommendations: [
        {
          action: "Enhanced Monitoring",
          priority: "Critical",
          timeline: "1-3 months",
          impact: "Faster threat detection and response"
        },
        {
          action: "Incident Response Plan",
          priority: "High",
          timeline: "2-4 months",
          impact: "Improved breach containment"
        }
      ]
    },
    {
      title: "Data Protection",
      recommendations: [
        {
          action: "Data Encryption",
          priority: "Critical",
          timeline: "3-6 months",
          impact: "Protected sensitive information"
        },
        {
          action: "Access Controls",
          priority: "High",
          timeline: "2-4 months",
          impact: "Reduced unauthorized data access"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-red-600/10 rounded-xl mb-4">
              <FileText className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-500 font-medium">Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Case Studies
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Learn from real-world security incidents, breaches, and their remediation strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Cases Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Case Studies
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {featuredCases.map((study, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-red-500 text-sm">{study.industry}</span>
                        <span className={`text-sm px-2 py-1 rounded ${
                          study.impact.severity === 'Critical' 
                            ? 'bg-red-500/10 text-red-500' 
                            : 'bg-orange-500/10 text-orange-500'
                        }`}>
                          {study.impact.severity}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <Building2 className="w-4 h-4 mr-1" />
                        {study.organization}
                      </div>
                      <p className="text-gray-400 text-sm">{study.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Records</div>
                        <div className="text-red-500">{study.impact.records}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Cost</div>
                        <div className="text-red-500">{study.impact.cost}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Findings</div>
                      <div className="space-y-2">
                        {study.keyFindings.map((finding, findingIndex) => (
                          <div
                            key={findingIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                            {finding}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Lessons Learned</div>
                      <div className="space-y-2">
                        {study.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Shield className="w-4 h-4 text-red-500 mr-2" />
                            {lesson}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Industry Insights
            </h2>
            <div className="space-y-8">
              {industryInsights.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{industry.industry}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {industry.cases.map((case_study, caseIndex) => (
                      <div
                        key={caseIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="font-medium text-white mb-1">{case_study.title}</div>
                            <div className="text-sm text-gray-400">{case_study.description}</div>
                          </div>
                          <span className={`px-2 py-1 rounded text-sm font-medium ${
                            case_study.impact === 'Critical' ? 'bg-red-500/10 text-red-500' :
                            'bg-orange-500/10 text-orange-500'
                          }`}>
                            {case_study.impact}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {case_study.date}
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

      {/* Attack Patterns Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Common Attack Patterns
            </h2>
            <div className="space-y-8">
              {attackPatterns.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.patterns.map((pattern, patternIndex) => (
                      <div
                        key={patternIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-3">
                          <div className="font-medium text-white mb-1">{pattern.name}</div>
                          <div className="grid grid-cols-2 gap-4 mb-3">
                            <div>
                              <div className="text-sm text-gray-500">Frequency</div>
                              <div className="text-red-500">{pattern.frequency}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Success Rate</div>
                              <div className="text-red-500">{pattern.success_rate}</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-400">
                            Mitigation: {pattern.mitigation}
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

      {/* Recommendations Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Key Recommendations
            </h2>
            <div className="space-y-8">
              {recommendations.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.recommendations.map((rec, recIndex) => (
                      <div
                        key={recIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-white">{rec.action}</div>
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              rec.priority === 'Critical' ? 'bg-red-500/10 text-red-500' :
                              'bg-orange-500/10 text-orange-500'
                            }`}>
                              {rec.priority}
                            </span>
                          </div>
                          <div className="text-sm text-gray-400 mb-2">{rec.impact}</div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            Timeline: {rec.timeline}
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

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Learn from Real Cases
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get detailed analysis and insights from our comprehensive case study database.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Access Full Database
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