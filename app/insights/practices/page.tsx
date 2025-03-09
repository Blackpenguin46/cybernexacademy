import { Shield, ExternalLink, Clock, Tag, CheckCircle, AlertTriangle, Book, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BestPracticesPage() {
  const securityFrameworks = [
    {
      name: "Zero Trust Security",
      category: "Security Architecture",
      principles: [
        "Never trust, always verify",
        "Least privilege access",
        "Micro-segmentation",
        "Continuous monitoring"
      ],
      benefits: [
        "Reduced attack surface",
        "Better access control",
        "Enhanced visibility",
        "Improved compliance"
      ],
      implementation: [
        "Identity verification",
        "Network segmentation",
        "Access controls",
        "Security monitoring"
      ]
    },
    {
      name: "DevSecOps",
      category: "Development Security",
      principles: [
        "Security as code",
        "Automated security testing",
        "Continuous security",
        "Shift left security"
      ],
      benefits: [
        "Early vulnerability detection",
        "Reduced security costs",
        "Faster deployment",
        "Better collaboration"
      ],
      implementation: [
        "CI/CD integration",
        "Security scanning",
        "Automated testing",
        "Security training"
      ]
    },
    {
      name: "Defense in Depth",
      category: "Security Strategy",
      principles: [
        "Layered security",
        "Multiple controls",
        "Redundant protection",
        "Comprehensive coverage"
      ],
      benefits: [
        "Enhanced protection",
        "Risk mitigation",
        "Attack resilience",
        "Compliance alignment"
      ],
      implementation: [
        "Security layers",
        "Control diversity",
        "Regular assessment",
        "Continuous improvement"
      ]
    }
  ]

  const securityControls = [
    {
      category: "Access Control",
      practices: [
        {
          name: "Multi-Factor Authentication",
          priority: "Critical",
          implementation: "Immediate",
          description: "Implement MFA across all systems and applications",
          steps: [
            "Enable MFA for all accounts",
            "Use strong authentication methods",
            "Regular access reviews",
            "User training"
          ]
        },
        {
          name: "Privileged Access Management",
          priority: "High",
          implementation: "1-3 months",
          description: "Manage and monitor privileged account access",
          steps: [
            "Identify privileged accounts",
            "Implement PAM solution",
            "Regular access reviews",
            "Activity monitoring"
          ]
        }
      ]
    },
    {
      category: "Data Protection",
      practices: [
        {
          name: "Data Encryption",
          priority: "Critical",
          implementation: "1-2 months",
          description: "Implement encryption for data at rest and in transit",
          steps: [
            "Identify sensitive data",
            "Select encryption methods",
            "Implement controls",
            "Regular testing"
          ]
        },
        {
          name: "Data Classification",
          priority: "High",
          implementation: "2-4 months",
          description: "Classify and label data based on sensitivity",
          steps: [
            "Define classification levels",
            "Data inventory",
            "Apply labels",
            "Train users"
          ]
        }
      ]
    },
    {
      category: "Network Security",
      practices: [
        {
          name: "Network Segmentation",
          priority: "High",
          implementation: "3-6 months",
          description: "Implement network zones and segmentation",
          steps: [
            "Network assessment",
            "Define segments",
            "Implement controls",
            "Monitor traffic"
          ]
        },
        {
          name: "Secure Configuration",
          priority: "Critical",
          implementation: "1-2 months",
          description: "Implement secure baseline configurations",
          steps: [
            "Define baselines",
            "Apply configurations",
            "Regular audits",
            "Change management"
          ]
        }
      ]
    }
  ]

  const securityGuidelines = [
    {
      title: "Password Management",
      recommendations: [
        "Use complex passwords (12+ characters)",
        "Enable password managers",
        "Regular password changes",
        "Avoid password reuse"
      ],
      importance: "Critical",
      compliance: ["NIST", "ISO 27001", "CIS Controls"]
    },
    {
      title: "Email Security",
      recommendations: [
        "Enable spam filtering",
        "Implement DMARC/SPF/DKIM",
        "User awareness training",
        "Attachment scanning"
      ],
      importance: "High",
      compliance: ["NIST", "ISO 27001", "HIPAA"]
    },
    {
      title: "Endpoint Security",
      recommendations: [
        "Anti-malware protection",
        "Regular patching",
        "Device encryption",
        "Access controls"
      ],
      importance: "Critical",
      compliance: ["CIS Controls", "ISO 27001", "PCI DSS"]
    },
    {
      title: "Incident Response",
      recommendations: [
        "Incident response plan",
        "Regular testing",
        "Team training",
        "Documentation"
      ],
      importance: "High",
      compliance: ["NIST", "ISO 27001", "SOC 2"]
    }
  ]

  const securityTraining = [
    {
      topic: "Security Awareness",
      modules: [
        {
          name: "Phishing Prevention",
          duration: "1 hour",
          frequency: "Quarterly",
          key_points: [
            "Identifying phishing emails",
            "Safe browsing practices",
            "Reporting procedures",
            "Real-world examples"
          ]
        },
        {
          name: "Password Security",
          duration: "45 minutes",
          frequency: "Annual",
          key_points: [
            "Password best practices",
            "Password manager usage",
            "MFA importance",
            "Common attacks"
          ]
        }
      ]
    },
    {
      topic: "Data Protection",
      modules: [
        {
          name: "Data Handling",
          duration: "1.5 hours",
          frequency: "Semi-annual",
          key_points: [
            "Data classification",
            "Secure storage",
            "Sharing guidelines",
            "Incident reporting"
          ]
        },
        {
          name: "Privacy Compliance",
          duration: "2 hours",
          frequency: "Annual",
          key_points: [
            "Regulatory requirements",
            "Personal data handling",
            "Privacy controls",
            "Breach response"
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-green-600/10 rounded-xl mb-4">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-green-500 font-medium">Security Guidelines</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Best Practices
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Comprehensive guidelines and frameworks for implementing strong security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Security Frameworks Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Security Frameworks
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {securityFrameworks.map((framework, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-green-500 text-sm">{framework.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{framework.name}</h3>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Principles</div>
                      <div className="space-y-2">
                        {framework.principles.map((principle, principleIndex) => (
                          <div
                            key={principleIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {principle}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Benefits</div>
                      <div className="space-y-2">
                        {framework.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="text-sm text-gray-500 mb-2">Implementation</div>
                      <div className="space-y-2">
                        {framework.implementation.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <ArrowUpRight className="w-4 h-4 text-green-500 mr-2" />
                            {step}
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

      {/* Security Controls Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Security Controls
            </h2>
            <div className="space-y-8">
              {securityControls.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.practices.map((practice, practiceIndex) => (
                      <div
                        key={practiceIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-white">{practice.name}</div>
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              practice.priority === 'Critical' ? 'bg-red-500/10 text-red-500' :
                              'bg-yellow-500/10 text-yellow-500'
                            }`}>
                              {practice.priority}
                            </span>
                          </div>
                          <div className="text-sm text-gray-400 mb-2">{practice.description}</div>
                          <div className="text-sm text-gray-500">
                            Implementation: {practice.implementation}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Implementation Steps</div>
                          <div className="space-y-2">
                            {practice.steps.map((step, stepIndex) => (
                              <div
                                key={stepIndex}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <ArrowUpRight className="w-4 h-4 text-green-500 mr-2" />
                                {step}
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

      {/* Security Guidelines Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Security Guidelines
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {securityGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{guideline.title}</h3>
                        <span className={`px-2 py-1 rounded text-sm font-medium ${
                          guideline.importance === 'Critical' ? 'bg-red-500/10 text-red-500' :
                          'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          {guideline.importance}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Recommendations</div>
                      <div className="space-y-2">
                        {guideline.recommendations.map((rec, recIndex) => (
                          <div
                            key={recIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {rec}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="text-sm text-gray-500 mb-2">Compliance Alignment</div>
                      <div className="flex flex-wrap gap-2">
                        {guideline.compliance.map((standard, standardIndex) => (
                          <span
                            key={standardIndex}
                            className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded border border-green-800"
                          >
                            {standard}
                          </span>
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

      {/* Security Training Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Security Training
            </h2>
            <div className="space-y-8">
              {securityTraining.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.topic}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.modules.map((module, moduleIndex) => (
                      <div
                        key={moduleIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-4">
                          <div className="font-medium text-white mb-2">{module.name}</div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                            <div>Duration: {module.duration}</div>
                            <div>Frequency: {module.frequency}</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Key Learning Points</div>
                          <div className="space-y-2">
                            {module.key_points.map((point, pointIndex) => (
                              <div
                                key={pointIndex}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <Book className="w-4 h-4 text-green-500 mr-2" />
                                {point}
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

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Implement Best Practices
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get guidance on implementing security best practices in your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Download Guidelines
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