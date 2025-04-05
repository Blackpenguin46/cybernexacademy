import { Scale, ExternalLink, Clock, Tag, FileText, Filter, Globe, Building } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PolicyPage() {
  const recentPolicies = [
    {
      title: "AI Security Governance Framework",
      authority: "National Cybersecurity Center",
      date: "2024-03",
      status: "Proposed",
      sector: "Artificial Intelligence",
      description: "Framework for securing AI systems and ensuring responsible AI development.",
      keyPoints: [
        "AI system security requirements",
        "Risk assessment guidelines",
        "Ethical AI principles"
      ]
    },
    {
      title: "Critical Infrastructure Protection Act",
      authority: "Federal Government",
      date: "2024-02",
      status: "Enacted",
      sector: "Critical Infrastructure",
      description: "Comprehensive legislation for protecting critical infrastructure from cyber threats.",
      keyPoints: [
        "Mandatory security controls",
        "Incident reporting requirements",
        "Recovery planning"
      ]
    },
    {
      title: "Data Privacy Enhancement Directive",
      authority: "Privacy Commission",
      date: "2024-01",
      status: "In Effect",
      sector: "Data Protection",
      description: "Enhanced requirements for personal data protection and privacy rights.",
      keyPoints: [
        "Stricter consent requirements",
        "Data minimization principles",
        "Cross-border transfer rules"
      ]
    }
  ]

  const complianceFrameworks = [
    {
      name: "ISO 27001:2024",
      type: "International Standard",
      focus: "Information Security Management",
      updates: "Recent updates include cloud security and remote work controls",
      requirements: [
        "Risk Assessment",
        "Security Controls",
        "Continuous Monitoring",
        "Incident Management"
      ]
    },
    {
      name: "NIST Cybersecurity Framework 2.0",
      type: "National Framework",
      focus: "Cybersecurity Risk Management",
      updates: "Enhanced privacy controls and supply chain security",
      requirements: [
        "Identify",
        "Protect",
        "Detect",
        "Respond",
        "Recover"
      ]
    },
    {
      name: "Cloud Security Alliance v4.0",
      type: "Industry Standard",
      focus: "Cloud Security",
      updates: "New controls for containerization and serverless",
      requirements: [
        "Cloud Architecture",
        "Data Security",
        "Access Control",
        "Compliance"
      ]
    }
  ]

  const regulatoryUpdates = [
    {
      title: "Enhanced Breach Notification Requirements",
      description: "New requirements for reporting cybersecurity incidents within 48 hours.",
      impact: "High",
      deadline: "June 2024",
      sector: "All Sectors",
      changes: [
        "Shorter notification timeframe",
        "Detailed incident documentation",
        "Stakeholder communication plan"
      ]
    },
    {
      title: "Supply Chain Security Standards",
      description: "New standards for securing software and hardware supply chains.",
      impact: "Medium",
      deadline: "September 2024",
      sector: "Technology",
      changes: [
        "Vendor assessment requirements",
        "Component verification",
        "Continuous monitoring"
      ]
    },
    {
      title: "IoT Security Regulations",
      description: "Security requirements for Internet of Things devices.",
      impact: "High",
      deadline: "December 2024",
      sector: "IoT Manufacturing",
      changes: [
        "Security by design",
        "Update management",
        "Vulnerability disclosure"
      ]
    }
  ]

  const globalInitiatives = [
    {
      region: "European Union",
      initiatives: [
        {
          name: "NIS2 Directive",
          status: "Implementation Phase",
          impact: "Significant expansion of cybersecurity requirements"
        },
        {
          name: "EU AI Act",
          status: "Pending Implementation",
          impact: "Comprehensive AI security framework"
        }
      ]
    },
    {
      region: "Asia-Pacific",
      initiatives: [
        {
          name: "APAC Cyber Shield",
          status: "Active",
          impact: "Regional cyber threat response framework"
        },
        {
          name: "Cross-Border Data Framework",
          status: "Development",
          impact: "Standardized data protection requirements"
        }
      ]
    },
    {
      region: "North America",
      initiatives: [
        {
          name: "Privacy Shield 2.0",
          status: "Negotiation",
          impact: "Updated trans-Atlantic data transfer framework"
        },
        {
          name: "Critical Tech Security",
          status: "Proposed",
          impact: "Enhanced protection for critical technology"
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
              <Scale className="w-5 h-5 text-indigo-500 mr-2" />
              <span className="text-indigo-500 font-medium">Policy & Regulations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Policy & Regulations
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Stay compliant with the latest cybersecurity policies, regulations, and compliance frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Policies Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Recent Policy Updates
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {recentPolicies.map((policy, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-indigo-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-indigo-500 text-sm font-medium">{policy.sector}</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {policy.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{policy.title}</h3>
                  <p className="text-gray-400 mb-4">{policy.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Authority</span>
                      <span className="text-white">{policy.authority}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Status</span>
                      <span className="text-indigo-500">{policy.status}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {policy.keyPoints.map((point, pointIndex) => (
                        <span
                          key={pointIndex}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Compliance Frameworks
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {complianceFrameworks.map((framework, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-indigo-500 text-sm font-medium">{framework.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{framework.name}</h3>
                  <p className="text-gray-400 mb-4">{framework.focus}</p>
                  <div className="text-sm text-gray-400 mb-4">{framework.updates}</div>
                  <div className="space-y-2">
                    {framework.requirements.map((req, reqIndex) => (
                      <div
                        key={reqIndex}
                        className="flex items-center text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Updates Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-white">
                Regulatory Updates
              </h2>
              <Button variant="outline" className="border-gray-700">
                <Filter className="w-4 h-4 mr-2" />
                Filter Updates
              </Button>
            </div>
            <div className="space-y-6">
              {regulatoryUpdates.map((update, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-indigo-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-indigo-500 text-sm font-medium">{update.sector}</span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Deadline: {update.deadline}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{update.title}</h3>
                      <p className="text-gray-400 mb-4">{update.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {update.changes.map((change, changeIndex) => (
                          <span
                            key={changeIndex}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {change}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        update.impact === 'High' ? 'bg-red-500/10 text-red-500' :
                        update.impact === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
                        'bg-green-500/10 text-green-500'
                      }`}>
                        {update.impact} Impact
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Initiatives Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Global Policy Initiatives
            </h2>
            <div className="space-y-8">
              {globalInitiatives.map((region, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-indigo-500" />
                    <h3 className="text-xl font-semibold text-white">{region.region}</h3>
                  </div>
                  <div className="space-y-4">
                    {region.initiatives.map((initiative, initIndex) => (
                      <div
                        key={initIndex}
                        className="flex items-start justify-between p-4 bg-gray-800/50 rounded-lg"
                      >
                        <div>
                          <div className="font-medium text-white mb-1">{initiative.name}</div>
                          <div className="text-sm text-gray-400">{initiative.impact}</div>
                        </div>
                        <span className="text-sm text-indigo-500">{initiative.status}</span>
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
              Stay Compliant
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get updates on cybersecurity policies and regulatory changes affecting your organization.
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