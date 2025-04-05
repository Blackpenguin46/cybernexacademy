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

  // New section for Industry Research & Reports
  const industryResources = [
    {
      name: "Gartner Cybersecurity Research",
      url: "https://www.gartner.com/en/information-technology/cybersecurity",
      description: "Leading analyst firm research on cybersecurity trends, markets, and vendor landscapes.",
      sourceType: "Analyst Report"
    },
    {
      name: "McKinsey Cybersecurity Insights",
      url: "https://www.mckinsey.com/business-functions/risk-and-resilience/our-insights",
      description: "Consulting insights on cyber risk, resilience, and digital trust.",
      sourceType: "Consulting Report"
    },
    {
      name: "IBM Security Intelligence",
      url: "https://securityintelligence.com",
      description: "IBM's blog covering security news, threat intelligence, and research.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Deloitte Cyber Reports",
      url: "https://www2.deloitte.com/us/en/pages/risk/solutions/cyber-risk-services.html",
      description: "Deloitte's reports and insights on managing cyber risk and improving security posture.",
      sourceType: "Consulting Report"
    },
    {
      name: "Accenture Cybersecurity Insights",
      url: "https://www.accenture.com/us-en/services/security-index",
      description: "Accenture's research and insights on the evolving cybersecurity landscape.",
      sourceType: "Consulting Report"
    },
    {
      name: "KPMG Cybersecurity",
      url: "https://advisory.kpmg.us/services/cybersecurity.html",
      description: "KPMG's perspectives on cybersecurity strategy, risk management, and technology.",
      sourceType: "Consulting Report"
    },
    {
      name: "PwC Cybersecurity",
      url: "https://www.pwc.com/gx/en/services/consulting/cybersecurity.html",
      description: "PwC's insights on cybersecurity challenges, trends, and solutions.",
      sourceType: "Consulting Report"
    },
    {
      name: "EY Cybersecurity",
      url: "https://www.ey.com/en_gl/cybersecurity",
      description: "EY's research and thought leadership on cybersecurity resilience and transformation.",
      sourceType: "Consulting Report"
    },
    {
      name: "Cisco Security Reports",
      url: "https://www.cisco.com/c/en/us/products/security/security-reports.html",
      description: "Cisco's reports on threat trends, security outcomes, and cybersecurity readiness.",
      sourceType: "Vendor Report"
    },
    {
      name: "Palo Alto Networks Blogs",
      url: "https://www.paloaltonetworks.com/blog",
      description: "Blog covering threat research, product updates, and industry insights from Palo Alto Networks.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Fortinet Threat Landscape Reports",
      url: "https://www.fortinet.com/resources/cyberglossary/threat-landscape-report",
      description: "Fortinet's regular reports on the global threat landscape and attack trends.",
      sourceType: "Vendor Report"
    },
    {
      name: "Microsoft Security Blog",
      url: "https://www.microsoft.com/en-us/security/blog/",
      description: "Microsoft's blog covering security news, research, and product updates.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Check Point Research",
      url: "https://research.checkpoint.com/",
      description: "Threat intelligence and research findings from Check Point Software Technologies.",
      sourceType: "Vendor Research"
    },
    {
      name: "CrowdStrike Blog",
      url: "https://www.crowdstrike.com/blog/",
      description: "CrowdStrike's blog on endpoint security, threat intelligence, and incident response.",
      sourceType: "Vendor Blog"
    },
    {
      name: "SentinelOne Cybersecurity Blog",
      url: "https://www.sentinelone.com/blog/",
      description: "Blog covering endpoint security, AI in cybersecurity, and threat research from SentinelOne.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Rapid7 Blog",
      url: "https://www.rapid7.com/blog/",
      description: "Rapid7's blog covering vulnerability management, penetration testing, and security operations.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Trellix Threat Labs",
      url: "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs.html",
      description: "Threat research and intelligence from Trellix (formerly McAfee Enterprise and FireEye).",
      sourceType: "Vendor Research"
    },
    {
      name: "Trend Micro Blog",
      url: "https://www.trendmicro.com/en_us/research.html",
      description: "Trend Micro's research hub covering threats, vulnerabilities, and security trends.",
      sourceType: "Vendor Research"
    },
    {
      name: "Verizon DBIR",
      url: "https://www.verizon.com/business/resources/reports/dbir/",
      description: "Verizon's annual Data Breach Investigations Report providing insights into cybercrime patterns.",
      sourceType: "Vendor Report"
    },
    {
      name: "ISACA Journal",
      url: "https://www.isaca.org/resources/news-and-trends/isaca-now-blog",
      description: "ISACA's blog and journal covering IT audit, risk, governance, and security.",
      sourceType: "Association Publication"
    },
    {
      name: "Forrester Cybersecurity Research",
      url: "https://go.forrester.com/research/",
      description: "Forrester's research covering cybersecurity strategy, technology, and market trends.",
      sourceType: "Analyst Report"
    },
    {
      name: "Cybersecurity Ventures Reports",
      url: "https://cybersecurityventures.com/cybersecurity-market-report/",
      description: "Research and market reports on the global cybersecurity economy and cybercrime statistics.",
      sourceType: "Market Research"
    },
    {
      name: "CSO Online Industry News",
      url: "https://www.csoonline.com/",
      description: "News, analysis, and research for security and risk management professionals.",
      sourceType: "News Site"
    },
    {
      name: "Dark Reading Executive Insights",
      url: "https://www.darkreading.com",
      description: "News and commentary on cybersecurity threats, vulnerabilities, and technology trends.",
      sourceType: "News Site"
    },
    {
      name: "Infosecurity Magazine - Industry",
      url: "https://www.infosecurity-magazine.com/topics/industry-news/",
      description: "Magazine covering the latest industry news, threats, and security strategies.",
      sourceType: "News Site"
    },
    {
      name: "SecurityWeek - Industry",
      url: "https://www.securityweek.com/",
      description: "Provides cybersecurity news, insights, and analysis for IT security professionals.",
      sourceType: "News Site"
    },
    {
      name: "SC Magazine Industry",
      url: "https://www.scmagazine.com/",
      description: "News, analysis, and product reviews for cybersecurity professionals.",
      sourceType: "News Site"
    },
    {
      name: "Cybersecurity Insiders",
      url: "https://www.cybersecurity-insiders.com/",
      description: "Reports and insights based on surveys of cybersecurity professionals.",
      sourceType: "Market Research"
    },
    {
      name: "The Hacker News Industry",
      url: "https://thehackernews.com/",
      description: "Widely read source for cybersecurity news, vulnerabilities, and threat intelligence.",
      sourceType: "News Site"
    },
    {
      name: "ITPro Today Security",
      url: "https://www.itprotoday.com/security",
      description: "News and insights on IT security topics for IT professionals.",
      sourceType: "News Site"
    },
    {
      name: "MITRE Engage",
      url: "https://engage.mitre.org/",
      description: "Framework for planning and discussing adversary engagement operations.",
      sourceType: "Framework"
    },
    {
      name: "CompTIA State of Cybersecurity",
      url: "https://www.comptia.org/content/research/cybersecurity-trends-research",
      description: "CompTIA's research on cybersecurity workforce trends, skills gaps, and industry outlook.",
      sourceType: "Association Report"
    },
    {
      name: "CISA Insights",
      url: "https://www.cisa.gov/resources-tools/resources/insights",
      description: "Insights and guidance from the Cybersecurity and Infrastructure Security Agency (CISA).",
      sourceType: "Government"
    },
    {
      name: "US Chamber of Commerce Cyber Innovation",
      url: "https://www.uschamber.com/cybersecurity",
      description: "Resources and policy insights on cybersecurity for businesses from the US Chamber.",
      sourceType: "Industry Group"
    },
    {
      name: "IDC Security Research",
      url: "https://www.idc.com/prodserv/insights/security",
      description: "Market intelligence and advisory services on the IT security market from IDC.",
      sourceType: "Analyst Report"
    },
    {
      name: "Global Cyber Alliance Insights",
      url: "https://www.globalcyberalliance.org/",
      description: "Insights and resources from a non-profit organization focused on reducing cyber risk.",
      sourceType: "Non-Profit"
    },
    {
      name: "ENISA Threat Landscape",
      url: "https://www.enisa.europa.eu/topics/csirt-cert-services",
      description: "The European Union Agency for Cybersecurity's reports on the threat landscape.",
      sourceType: "Government"
    },
    {
      name: "World Economic Forum Cybersecurity Reports",
      url: "https://www.weforum.org/agenda/archive/cybersecurity/",
      description: "Reports from the WEF on global cybersecurity challenges and initiatives.",
      sourceType: "Industry Group"
    },
    {
      name: "NIST Cybersecurity Insights",
      url: "https://www.nist.gov/topics/cybersecurity",
      description: "NIST's resources, frameworks (like CSF), and publications on cybersecurity.",
      sourceType: "Government"
    },
    {
      name: "OECD Digital Security Policy",
      url: "https://www.oecd.org/digital/digital-security/",
      description: "OECD's work and policy guidance on digital security and risk management.",
      sourceType: "International Organization"
    },
    {
      name: "Thales Cybersecurity Blog",
      url: "https://dis-blog.thalesgroup.com/",
      description: "Blog covering data security, identity management, and cloud security from Thales.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Cisco Talos Intelligence Blog",
      url: "https://blog.talosintelligence.com/",
      description: "Threat intelligence research and analysis from Cisco Talos.",
      sourceType: "Vendor Research"
    },
    {
      name: "Cloudflare Blog - Security",
      url: "https://blog.cloudflare.com/tag/security/",
      description: "Cloudflare's blog covering topics like DDoS mitigation, WAF, and network security.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Mandiant Advantage",
      url: "https://www.mandiant.com/resources",
      description: "Threat intelligence, reports, and resources from Mandiant (now part of Google Cloud).",
      sourceType: "Vendor Research"
    },
    {
      name: "Splunk State of Security",
      url: "https://www.splunk.com/en_us/form/state-of-security.html",
      description: "Splunk's annual report on the state of security operations and trends.",
      sourceType: "Vendor Report"
    },
    {
      name: "Okta Cybersecurity Reports",
      url: "https://www.okta.com/resources/reports/",
      description: "Reports from Okta covering identity management, zero trust, and security trends.",
      sourceType: "Vendor Report"
    },
    {
      name: "Tanium Blog",
      url: "https://www.tanium.com/blog/",
      description: "Blog covering endpoint management, security hygiene, and threat response from Tanium.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Armor Cybersecurity Blog",
      url: "https://www.armor.com/blog/",
      description: "Blog focusing on cloud security, compliance, and threat intelligence.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Bugcrowd State of Bug Bounty",
      url: "https://www.bugcrowd.com/resources/reports/",
      description: "Bugcrowd's reports on bug bounty program trends and vulnerability data.",
      sourceType: "Vendor Report"
    },
    {
      name: "KnowBe4 Industry Reports",
      url: "https://www.knowbe4.com/resources",
      description: "Reports and resources focused on security awareness training and phishing trends.",
      sourceType: "Vendor Report"
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

      {/* Industry Research & Reports Section */}
      <div className="bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Industry Research & Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryResources.map((resource, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full mb-3">
                    {resource.sourceType}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{resource.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{resource.description}</p>
                </div>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  Visit Resource
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

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