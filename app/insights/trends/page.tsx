import { TrendingUp, ExternalLink, Clock, Tag, Zap, Filter, LineChart, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TrendsPage() {
  const emergingTrends = [
    {
      title: "AI-Powered Security",
      growth: "+85%",
      timeframe: "Next 2 Years",
      impact: "Transformative",
      description: "Integration of artificial intelligence and machine learning in threat detection and response.",
      applications: ["Automated Threat Detection", "Predictive Analytics", "Behavioral Analysis"]
    },
    {
      title: "Zero Trust Architecture",
      growth: "+65%",
      timeframe: "Next 3 Years",
      impact: "High",
      description: "Shift towards zero trust security models across organizations of all sizes.",
      applications: ["Identity Verification", "Micro-segmentation", "Continuous Monitoring"]
    },
    {
      title: "Quantum-Safe Security",
      growth: "+45%",
      timeframe: "Next 5 Years",
      impact: "Critical",
      description: "Development of quantum-resistant cryptographic solutions.",
      applications: ["Post-Quantum Cryptography", "Quantum Key Distribution", "Hybrid Solutions"]
    }
  ]

  const technologyTrends = [
    {
      title: "Cloud-Native Security",
      description: "Evolution of security practices for cloud-native applications and infrastructure.",
      adoption: "78%",
      maturity: "Growing",
      impact: "High",
      key_developments: [
        "Container Security",
        "Serverless Security",
        "Cloud Security Posture Management"
      ]
    },
    {
      title: "Extended Detection & Response (XDR)",
      description: "Integration of multiple security products into unified threat detection and response.",
      adoption: "65%",
      maturity: "Emerging",
      impact: "High",
      key_developments: [
        "Cross-Platform Integration",
        "Automated Response",
        "Advanced Analytics"
      ]
    },
    {
      title: "DevSecOps Evolution",
      description: "Integration of security practices throughout the development lifecycle.",
      adoption: "72%",
      maturity: "Maturing",
      impact: "High",
      key_developments: [
        "Automated Security Testing",
        "Infrastructure as Code Security",
        "Supply Chain Security"
      ]
    },
    {
      title: "Privacy-Enhancing Technologies",
      description: "Advanced technologies for protecting sensitive data while maintaining utility.",
      adoption: "58%",
      maturity: "Emerging",
      impact: "High",
      key_developments: [
        "Homomorphic Encryption",
        "Confidential Computing",
        "Privacy-Preserving ML"
      ]
    }
  ]

  const industryShifts = [
    {
      title: "Remote Security Operations",
      description: "Transformation of security operations for remote and hybrid work environments",
      impact: "Major",
      timeline: "Current",
      stats: "75% of organizations adapting"
    },
    {
      title: "Regulatory Compliance",
      description: "Evolution of compliance requirements and privacy regulations",
      impact: "Significant",
      timeline: "Ongoing",
      stats: "85% increase in requirements"
    },
    {
      title: "Supply Chain Security",
      description: "Enhanced focus on securing software and hardware supply chains",
      impact: "Critical",
      timeline: "Immediate",
      stats: "60% increase in incidents"
    },
    {
      title: "Security Automation",
      description: "Increased adoption of automated security tools and processes",
      impact: "Major",
      timeline: "Next 2 Years",
      stats: "90% planning implementation"
    }
  ]

  const futureOutlook = [
    {
      year: "2024-2025",
      predictions: [
        "Widespread adoption of AI-driven security solutions",
        "Increased focus on quantum-safe cryptography",
        "Evolution of zero trust architectures"
      ]
    },
    {
      year: "2025-2026",
      predictions: [
        "Maturation of privacy-enhancing technologies",
        "Integration of blockchain in security solutions",
        "Advanced threat hunting capabilities"
      ]
    },
    {
      year: "2026-2027",
      predictions: [
        "Quantum-resistant encryption standards",
        "Autonomous security operations",
        "Decentralized identity management"
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
              Future of Cybersecurity
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore emerging trends, technologies, and future directions shaping the cybersecurity landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Emerging Trends Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Key Emerging Trends
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {emergingTrends.map((trend, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{trend.title}</h3>
                    <span className="text-orange-500 font-medium">{trend.growth}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{trend.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Timeframe</span>
                      <span className="text-white">{trend.timeframe}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Impact</span>
                      <span className="text-orange-500">{trend.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {trend.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                        >
                          {app}
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

      {/* Technology Trends Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Technology Trends
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {technologyTrends.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{tech.title}</h3>
                    <div className="flex items-center">
                      <LineChart className="w-4 h-4 text-orange-500 mr-1" />
                      <span className="text-orange-500 font-medium">{tech.adoption}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{tech.description}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Maturity:</span>
                      <span className="text-sm text-white">{tech.maturity}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Impact:</span>
                      <span className="text-sm text-orange-500">{tech.impact}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.key_developments.map((dev, devIndex) => (
                      <span
                        key={devIndex}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                      >
                        {dev}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Shifts Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Industry Shifts
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {industryShifts.map((shift, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{shift.title}</h3>
                    <span className="text-orange-500 font-medium">{shift.impact}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{shift.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{shift.timeline}</span>
                    <span className="text-white">{shift.stats}</span>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Future Outlook
            </h2>
            <div className="space-y-8">
              {futureOutlook.map((period, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{period.year}</h3>
                  <ul className="space-y-3">
                    {period.predictions.map((prediction, predIndex) => (
                      <li
                        key={predIndex}
                        className="flex items-start"
                      >
                        <Shield className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                        <span className="text-gray-400">{prediction}</span>
                      </li>
                    ))}
                  </ul>
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
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Keep up with the latest trends and prepare for the future of cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Download Trend Report
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