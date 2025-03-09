import { AlertTriangle, ExternalLink, Clock, Tag, Shield, Filter, Zap, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BreachesPage() {
  const recentBreaches = [
    {
      title: "Major Healthcare Data Breach",
      organization: "Regional Health Network",
      date: "2024-03-15",
      impact: "2.5M Records",
      type: "Data Theft",
      status: "Active Investigation",
      description: "Unauthorized access to patient records and medical histories detected.",
      affectedSystems: ["Patient Database", "Billing Systems", "Email Servers"]
    },
    {
      title: "Financial Services Attack",
      organization: "Global Banking Corp",
      date: "2024-03-10",
      impact: "Financial Data",
      type: "Ransomware",
      status: "Contained",
      description: "Sophisticated ransomware attack targeting banking infrastructure.",
      affectedSystems: ["Trading Platform", "Customer Portal", "Internal Networks"]
    },
    {
      title: "Tech Company Source Code Leak",
      organization: "Innovation Software Inc",
      date: "2024-03-08",
      impact: "Source Code",
      type: "Data Leak",
      status: "Resolved",
      description: "Private repositories exposed due to misconfigured access controls.",
      affectedSystems: ["Code Repositories", "Development Servers"]
    }
  ]

  const activeThreatAlerts = [
    {
      name: "RansomGroup-X Campaign",
      severity: "Critical",
      target: "Financial Sector",
      method: "Phishing + Ransomware",
      status: "Active",
      details: "Sophisticated phishing campaign leading to ransomware deployment.",
      indicators: ["Suspicious PDF attachments", "PowerShell scripts", "C2 communications"]
    },
    {
      name: "Supply Chain Compromise",
      severity: "High",
      target: "Software Vendors",
      method: "Software Supply Chain",
      status: "Active",
      details: "Compromised build systems injecting malicious code into software updates.",
      indicators: ["Modified build scripts", "Unauthorized certificates", "Data exfiltration"]
    },
    {
      name: "IoT Botnet Activity",
      severity: "Medium",
      target: "IoT Devices",
      method: "Vulnerability Exploitation",
      status: "Emerging",
      details: "New botnet targeting unpatched IoT devices for DDoS attacks.",
      indicators: ["Port scanning", "Default credential attempts", "Unusual traffic patterns"]
    }
  ]

  const vulnerabilityAlerts = [
    {
      id: "CVE-2024-0123",
      name: "Critical RCE in Popular Framework",
      severity: "Critical",
      score: "9.8",
      affected: "Web Framework v2.x",
      status: "Patch Available",
      exploitation: "Active",
      mitigation: "Upgrade to version 2.5.2"
    },
    {
      id: "CVE-2024-0456",
      name: "Authentication Bypass",
      severity: "High",
      score: "8.5",
      affected: "Cloud Service Platform",
      status: "Patch Available",
      exploitation: "PoC Available",
      mitigation: "Apply security patch KB123456"
    },
    {
      id: "CVE-2024-0789",
      name: "Data Exposure Vulnerability",
      severity: "Medium",
      score: "6.5",
      affected: "Database System v3.x",
      status: "Under Investigation",
      exploitation: "None Reported",
      mitigation: "Implement workaround steps"
    }
  ]

  const incidentTimeline = [
    {
      date: "March 15, 2024",
      events: [
        {
          time: "09:30 AM",
          title: "Healthcare Breach Detected",
          description: "Initial detection of unauthorized database access"
        },
        {
          time: "02:15 PM",
          title: "Ransomware Campaign Identified",
          description: "New variant targeting financial institutions"
        }
      ]
    },
    {
      date: "March 14, 2024",
      events: [
        {
          time: "11:20 AM",
          title: "Supply Chain Attack",
          description: "Compromised software distribution platform discovered"
        },
        {
          time: "04:45 PM",
          title: "Zero-day Vulnerability",
          description: "Critical vulnerability reported in widely-used framework"
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
              <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-500 font-medium">Breaches & Threats</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Security Breaches & Active Threats
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Stay informed about the latest security breaches, active threats, and critical vulnerabilities affecting organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Breaches Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Recent Security Breaches
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {recentBreaches.map((breach, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-red-500 text-sm font-medium">{breach.type}</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {breach.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{breach.title}</h3>
                  <p className="text-gray-400 mb-4">{breach.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Organization</span>
                      <span className="text-white">{breach.organization}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Impact</span>
                      <span className="text-red-500">{breach.impact}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Status</span>
                      <span className="text-orange-500">{breach.status}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {breach.affectedSystems.map((system, sysIndex) => (
                        <span
                          key={sysIndex}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                        >
                          {system}
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

      {/* Active Threats Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-white">
                Active Threat Alerts
              </h2>
              <Button variant="outline" className="border-gray-700">
                <Filter className="w-4 h-4 mr-2" />
                Filter Threats
              </Button>
            </div>
            <div className="space-y-6">
              {activeThreatAlerts.map((threat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-red-500 text-sm font-medium">{threat.severity}</span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {threat.target}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{threat.name}</h3>
                      <p className="text-gray-400 mb-4">{threat.details}</p>
                      <div className="flex flex-wrap gap-2">
                        {threat.indicators.map((indicator, indIndex) => (
                          <span
                            key={indIndex}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {indicator}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        threat.status === 'Active' ? 'bg-red-500/10 text-red-500' :
                        threat.status === 'Emerging' ? 'bg-orange-500/10 text-orange-500' :
                        'bg-gray-500/10 text-gray-500'
                      }`}>
                        {threat.status}
                      </span>
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
              Critical Vulnerability Alerts
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {vulnerabilityAlerts.map((vuln, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-gray-400">{vuln.id}</span>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      vuln.severity === 'Critical' ? 'bg-red-500/10 text-red-500' :
                      vuln.severity === 'High' ? 'bg-orange-500/10 text-orange-500' :
                      'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {vuln.severity}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{vuln.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">CVSS Score</span>
                      <span className="text-white">{vuln.score}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Affected</span>
                      <span className="text-white">{vuln.affected}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Status</span>
                      <span className="text-green-500">{vuln.status}</span>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm text-gray-400">{vuln.mitigation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incident Timeline Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Recent Incident Timeline
            </h2>
            <div className="space-y-8">
              {incidentTimeline.map((day, index) => (
                <div key={index} className="relative">
                  <div className="font-semibold text-white mb-4">{day.date}</div>
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                      >
                        <div className="flex items-start">
                          <div className="text-sm text-gray-500 w-24">{event.time}</div>
                          <div>
                            <div className="font-medium text-white mb-1">{event.title}</div>
                            <div className="text-sm text-gray-400">{event.description}</div>
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
              Stay Protected
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get real-time alerts and detailed analysis of security breaches and emerging threats.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
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