import { Wrench, ExternalLink, Clock, Tag, Shield, Filter, Download, Terminal, Code, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ToolsPage() {
  const featuredTools = [
    {
      name: "Network Guardian Pro",
      category: "Network Security",
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
      category: "Application Security",
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
      category: "Cloud Security",
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

  const securityTechniques = [
    {
      category: "Threat Detection",
      techniques: [
        {
          name: "Behavioral Analysis",
          effectiveness: "High",
          complexity: "Medium",
          description: "Detecting threats through anomaly detection and user behavior analytics.",
          implementation: [
            "User activity monitoring",
            "Baseline establishment",
            "Anomaly detection"
          ]
        },
        {
          name: "Signature Detection",
          effectiveness: "Medium",
          complexity: "Low",
          description: "Identifying known threats through signature matching.",
          implementation: [
            "Pattern matching",
            "Hash comparison",
            "Rule-based detection"
          ]
        }
      ]
    },
    {
      category: "Access Control",
      techniques: [
        {
          name: "Zero Trust Security",
          effectiveness: "Very High",
          complexity: "High",
          description: "Implementing zero trust architecture principles.",
          implementation: [
            "Identity verification",
            "Micro-segmentation",
            "Least privilege access"
          ]
        },
        {
          name: "MFA Implementation",
          effectiveness: "High",
          complexity: "Medium",
          description: "Multi-factor authentication deployment strategies.",
          implementation: [
            "Token-based auth",
            "Biometric verification",
            "Risk-based authentication"
          ]
        }
      ]
    }
  ]

  const methodologies = [
    {
      name: "Security Testing",
      frameworks: [
        {
          title: "OWASP Testing Guide",
          focus: "Web Application Security",
          steps: [
            "Information Gathering",
            "Configuration Testing",
            "Authentication Testing",
            "Authorization Testing"
          ]
        },
        {
          title: "Infrastructure Testing",
          focus: "Network Security",
          steps: [
            "Network Mapping",
            "Vulnerability Assessment",
            "Penetration Testing",
            "Security Audit"
          ]
        }
      ]
    },
    {
      name: "Incident Response",
      frameworks: [
        {
          title: "NIST Incident Response",
          focus: "Systematic Response",
          steps: [
            "Preparation",
            "Detection & Analysis",
            "Containment",
            "Recovery"
          ]
        },
        {
          title: "SANS Incident Handling",
          focus: "Practical Response",
          steps: [
            "Identification",
            "Containment",
            "Eradication",
            "Recovery"
          ]
        }
      ]
    }
  ]

  const bestPractices = [
    {
      category: "Development Security",
      practices: [
        {
          name: "Secure Coding",
          description: "Implementation of secure coding standards and practices",
          guidelines: [
            "Input validation",
            "Output encoding",
            "Authentication controls",
            "Error handling"
          ]
        },
        {
          name: "Code Review",
          description: "Security-focused code review process",
          guidelines: [
            "Automated scanning",
            "Manual review",
            "Peer review",
            "Security testing"
          ]
        }
      ]
    },
    {
      category: "Operational Security",
      practices: [
        {
          name: "Configuration Management",
          description: "Secure system configuration and maintenance",
          guidelines: [
            "Baseline configuration",
            "Change management",
            "Patch management",
            "Hardening"
          ]
        },
        {
          name: "Monitoring",
          description: "Continuous security monitoring practices",
          guidelines: [
            "Log management",
            "Alert configuration",
            "Incident detection",
            "Response procedures"
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-yellow-600/10 rounded-xl mb-4">
              <Wrench className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-yellow-500 font-medium">Tools & Techniques</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Tools & Methodologies
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore essential security tools, techniques, and best practices for protecting your systems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Security Tools
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {featuredTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-yellow-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-yellow-500 text-sm font-medium">{tool.category}</span>
                    <span className="text-gray-500 text-sm">{tool.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-400 mb-4">{tool.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Rating</span>
                      <span className="text-white">{tool.rating}</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Features</div>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4">
                      <Link
                        href={tool.documentation}
                        className="text-yellow-500 hover:text-yellow-400 transition-colors inline-flex items-center text-sm"
                      >
                        View Documentation
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Techniques Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Security Techniques
            </h2>
            <div className="space-y-8">
              {securityTechniques.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.techniques.map((technique, techIndex) => (
                      <div
                        key={techIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="font-medium text-white mb-1">{technique.name}</div>
                            <div className="text-sm text-gray-400">{technique.description}</div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-yellow-500 text-sm">{technique.effectiveness}</span>
                            <span className="text-gray-500 text-sm">Complexity: {technique.complexity}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {technique.implementation.map((step, stepIndex) => (
                            <div
                              key={stepIndex}
                              className="flex items-center text-gray-300 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                              {step}
                            </div>
                          ))}
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

      {/* Methodologies Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Security Methodologies
            </h2>
            <div className="space-y-8">
              {methodologies.map((methodology, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{methodology.name}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {methodology.frameworks.map((framework, frameworkIndex) => (
                      <div
                        key={frameworkIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-4">
                          <div className="font-medium text-white mb-1">{framework.title}</div>
                          <div className="text-sm text-gray-400">Focus: {framework.focus}</div>
                        </div>
                        <div className="space-y-2">
                          {framework.steps.map((step, stepIndex) => (
                            <div
                              key={stepIndex}
                              className="flex items-center text-gray-300 text-sm"
                            >
                              <div className="w-5 h-5 flex items-center justify-center bg-gray-700 rounded-full mr-2 text-xs">
                                {stepIndex + 1}
                              </div>
                              {step}
                            </div>
                          ))}
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

      {/* Best Practices Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Security Best Practices
            </h2>
            <div className="space-y-8">
              {bestPractices.map((category, index) => (
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
                          <div className="font-medium text-white mb-1">{practice.name}</div>
                          <div className="text-sm text-gray-400">{practice.description}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {practice.guidelines.map((guideline, guidelineIndex) => (
                            <div
                              key={guidelineIndex}
                              className="flex items-center text-gray-300 text-sm"
                            >
                              <Shield className="w-4 h-4 text-yellow-500 mr-2" />
                              {guideline}
                            </div>
                          ))}
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
              Start Implementing
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get access to detailed guides and documentation for security tools and techniques.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                Access Resources
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