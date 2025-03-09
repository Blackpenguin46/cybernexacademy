import { AlertTriangle, ExternalLink, Clock, Tag, Globe, Shield, Target, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThreatReportsPage() {
  const activeThreatAlerts = [
    {
      title: "Ransomware Campaign Targeting Healthcare",
      severity: "Critical",
      status: "Active",
      target: "Healthcare Providers",
      type: "Ransomware",
      details: {
        vector: "Phishing emails with malicious attachments",
        payload: "Encrypted file ransomware",
        impact: "Data encryption and system lockout",
        scope: "Global"
      },
      indicators: [
        "Suspicious .zip attachments",
        "PowerShell execution",
        "Network scanning",
        "Encryption activities"
      ],
      mitigation: [
        "Email filtering",
        "Backup verification",
        "Network monitoring",
        "User awareness"
      ]
    },
    {
      title: "Advanced Banking Trojan Campaign",
      severity: "High",
      status: "Active",
      target: "Financial Institutions",
      type: "Banking Malware",
      details: {
        vector: "Compromised financial websites",
        payload: "Information stealing malware",
        impact: "Credential theft and fraud",
        scope: "Regional"
      },
      indicators: [
        "Suspicious browser extensions",
        "Data exfiltration attempts",
        "Command & control traffic",
        "Credential harvesting"
      ],
      mitigation: [
        "Web filtering",
        "Network segmentation",
        "EDR deployment",
        "Security awareness"
      ]
    },
    {
      title: "Supply Chain Software Compromise",
      severity: "Critical",
      status: "Active",
      target: "Software Vendors",
      type: "Supply Chain Attack",
      details: {
        vector: "Compromised software updates",
        payload: "Backdoored software packages",
        impact: "Unauthorized system access",
        scope: "Global"
      },
      indicators: [
        "Suspicious code signatures",
        "Unusual update patterns",
        "Backdoor communications",
        "Data exfiltration"
      ],
      mitigation: [
        "Vendor verification",
        "Code signing checks",
        "Network monitoring",
        "Update validation"
      ]
    }
  ]

  const threatActors = [
    {
      name: "APT-X Dragon",
      type: "State-Sponsored",
      origin: "East Asia",
      targets: [
        "Defense Sector",
        "Research Institutions",
        "Government Agencies"
      ],
      capabilities: [
        "Zero-day exploits",
        "Custom malware",
        "Supply chain attacks",
        "Advanced persistence"
      ],
      recentActivity: "Targeting defense contractors with spear-phishing campaign",
      threatLevel: "Critical"
    },
    {
      name: "CryptoShadow",
      type: "Cybercrime Group",
      origin: "Eastern Europe",
      targets: [
        "Financial Services",
        "Cryptocurrency Exchanges",
        "Payment Processors"
      ],
      capabilities: [
        "Ransomware operations",
        "Banking trojans",
        "Social engineering",
        "Money laundering"
      ],
      recentActivity: "Large-scale ransomware campaign against banks",
      threatLevel: "High"
    },
    {
      name: "HacktivistX",
      type: "Hacktivist Group",
      origin: "Global",
      targets: [
        "Corporate Entities",
        "Government Websites",
        "Critical Infrastructure"
      ],
      capabilities: [
        "DDoS attacks",
        "Website defacement",
        "Data leaks",
        "Social media campaigns"
      ],
      recentActivity: "Coordinated attacks on energy sector companies",
      threatLevel: "Medium"
    }
  ]

  const vulnerabilityAlerts = [
    {
      title: "Critical RCE in Popular Web Framework",
      severity: "Critical",
      cvss: "9.8",
      affected: "Web applications using Framework v2.x",
      status: "Active Exploitation",
      details: {
        type: "Remote Code Execution",
        access: "Remote",
        complexity: "Low",
        authentication: "None"
      },
      mitigation: [
        "Upgrade to latest version",
        "Apply security patches",
        "Implement WAF rules",
        "Monitor for exploitation"
      ]
    },
    {
      title: "Zero-Day in Cloud Service Platform",
      severity: "High",
      cvss: "8.5",
      affected: "Cloud service users on version 4.x",
      status: "Limited Exploitation",
      details: {
        type: "Privilege Escalation",
        access: "Local",
        complexity: "Medium",
        authentication: "Required"
      },
      mitigation: [
        "Apply temporary fixes",
        "Monitor user activities",
        "Restrict access",
        "Enable logging"
      ]
    },
    {
      title: "Authentication Bypass in IoT Devices",
      severity: "High",
      cvss: "8.2",
      affected: "IoT devices with firmware < 3.0",
      status: "Proof of Concept",
      details: {
        type: "Authentication Bypass",
        access: "Network",
        complexity: "Low",
        authentication: "None"
      },
      mitigation: [
        "Firmware updates",
        "Network isolation",
        "Access controls",
        "Security monitoring"
      ]
    }
  ]

  const trendAnalysis = [
    {
      category: "Attack Vectors",
      trends: [
        {
          trend: "Supply Chain Attacks",
          change: "+65%",
          impact: "Critical",
          description: "Significant increase in software supply chain compromises"
        },
        {
          trend: "Ransomware-as-a-Service",
          change: "+85%",
          impact: "High",
          description: "Growing adoption of RaaS platforms by cybercriminals"
        }
      ]
    },
    {
      category: "Target Sectors",
      trends: [
        {
          trend: "Healthcare Targeting",
          change: "+45%",
          impact: "Critical",
          description: "Increased attacks on healthcare providers and systems"
        },
        {
          trend: "Critical Infrastructure",
          change: "+55%",
          impact: "High",
          description: "Rising attacks on energy and utility sectors"
        }
      ]
    },
    {
      category: "Attack Methods",
      trends: [
        {
          trend: "AI-Powered Attacks",
          change: "+75%",
          impact: "High",
          description: "Emergence of AI-enhanced attack techniques"
        },
        {
          trend: "Zero-Day Exploits",
          change: "+40%",
          impact: "Critical",
          description: "Increase in zero-day vulnerability exploitation"
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
              <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-yellow-500 font-medium">Threat Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Threat Reports
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Stay informed about active threats, vulnerabilities, and emerging attack patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Active Threats Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Active Threat Alerts
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {activeThreatAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-yellow-500/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-yellow-500 text-sm">{alert.type}</span>
                        <span className={`text-sm px-2 py-1 rounded ${
                          alert.severity === 'Critical' 
                            ? 'bg-red-500/10 text-red-500' 
                            : 'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          {alert.severity}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{alert.title}</h3>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <Target className="w-4 h-4 mr-1" />
                        {alert.target}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Attack Details</div>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">Vector: {alert.details.vector}</div>
                        <div className="text-sm text-gray-400">Impact: {alert.details.impact}</div>
                        <div className="text-sm text-gray-400">Scope: {alert.details.scope}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Indicators</div>
                      <div className="space-y-2">
                        {alert.indicators.map((indicator, indIndex) => (
                          <div
                            key={indIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2" />
                            {indicator}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Mitigation Steps</div>
                      <div className="space-y-2">
                        {alert.mitigation.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Shield className="w-4 h-4 text-yellow-500 mr-2" />
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

      {/* Threat Actors Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Active Threat Actors
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {threatActors.map((actor, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-yellow-500 text-sm">{actor.type}</span>
                        <span className={`text-sm px-2 py-1 rounded ${
                          actor.threatLevel === 'Critical' ? 'bg-red-500/10 text-red-500' :
                          actor.threatLevel === 'High' ? 'bg-yellow-500/10 text-yellow-500' :
                          'bg-orange-500/10 text-orange-500'
                        }`}>
                          {actor.threatLevel}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{actor.name}</h3>
                      <div className="flex items-center text-sm text-gray-400">
                        <Globe className="w-4 h-4 mr-1" />
                        {actor.origin}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Primary Targets</div>
                      <div className="flex flex-wrap gap-2">
                        {actor.targets.map((target, targetIndex) => (
                          <span
                            key={targetIndex}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Capabilities</div>
                      <div className="space-y-2">
                        {actor.capabilities.map((capability, capIndex) => (
                          <div
                            key={capIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Shield className="w-4 h-4 text-yellow-500 mr-2" />
                            {capability}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="text-sm text-gray-500 mb-1">Recent Activity</div>
                      <div className="text-gray-400 text-sm">{actor.recentActivity}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerability Alerts Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Critical Vulnerabilities
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {vulnerabilityAlerts.map((vuln, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-yellow-500 text-sm">{vuln.details.type}</span>
                        <span className={`text-sm px-2 py-1 rounded ${
                          vuln.severity === 'Critical' ? 'bg-red-500/10 text-red-500' :
                          'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          CVSS: {vuln.cvss}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{vuln.title}</h3>
                      <div className="text-sm text-gray-400">{vuln.affected}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Access</div>
                        <div className="text-yellow-500">{vuln.details.access}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Complexity</div>
                        <div className="text-yellow-500">{vuln.details.complexity}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Mitigation Steps</div>
                      <div className="space-y-2">
                        {vuln.mitigation.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Shield className="w-4 h-4 text-yellow-500 mr-2" />
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="text-sm text-red-500">
                        Status: {vuln.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trend Analysis Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Threat Trend Analysis
            </h2>
            <div className="space-y-8">
              {trendAnalysis.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.trends.map((trend, trendIndex) => (
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
                            'bg-yellow-500/10 text-yellow-500'
                          }`}>
                            {trend.change}
                          </span>
                        </div>
                        <div className="text-sm text-yellow-500">
                          Impact: {trend.impact}
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
              Stay Informed
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get real-time threat alerts and detailed analysis reports.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                Subscribe to Alerts
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