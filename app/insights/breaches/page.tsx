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

  // New section for Breach Reporting & News Sources
  const breachResources = [
    {
      name: "Have I Been Pwned?",
      url: "https://haveibeenpwned.com",
      description: "Check if your email or phone number has been compromised in a data breach.",
      sourceType: "Breach Check"
    },
    {
      name: "Mozilla Data Breach Archive",
      url: "https://blog.mozilla.org/security/category/data-breach/",
      description: "Mozilla's archive and discussion of significant data breaches.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Hacker News - Data Breaches",
      url: "https://thehackernews.com/search/label/Data%20Breach",
      description: "Data breach news and reports from The Hacker News.",
      sourceType: "News Site"
    },
    {
      name: "Troy Hunt's Blog (Breach Disclosure)",
      url: "https://www.troyhunt.com/tag/pwned/",
      description: "Blog by the creator of Have I Been Pwned, often detailing breach disclosures.",
      sourceType: "Expert Blog"
    },
    {
      name: "Information is Beautiful – World's Biggest Data Breaches",
      url: "https://informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/",
      description: "Visualizations tracking major historical data breaches.",
      sourceType: "Visualization"
    },
    {
      name: "IT Governance Data Breach Reports",
      url: "https://www.itgovernance.co.uk/blog",
      description: "Blog covering data breaches, cyber attacks, and compliance news, often UK/EU focused.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Cybersecurity Ventures – Breach News",
      url: "https://cybersecurityventures.com/category/data-breach-news/",
      description: "News and statistics related to data breaches from a market research firm.",
      sourceType: "Market Research"
    },
    {
      name: "Privacy Rights Clearinghouse - Breach Database",
      url: "https://privacyrights.org/data-breaches",
      description: "Chronology of data breaches reported since 2005.",
      sourceType: "Non-Profit Database"
    },
    {
      name: "Identity Theft Resource Center (ITRC) Reports",
      url: "https://www.idtheftcenter.org/data-breaches/",
      description: "Reports and statistics on data breaches impacting US consumers.",
      sourceType: "Non-Profit Report"
    },
    {
      name: "Flashpoint Breach Intelligence",
      url: "https://www.flashpoint.io/blog/",
      description: "Blog covering threat intelligence, including data breaches discussed in illicit communities.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Dark Reading - Breaches",
      url: "https://www.darkreading.com/attacks-breaches",
      description: "Section of Dark Reading focused on news and analysis of security breaches.",
      sourceType: "News Site"
    },
    {
      name: "SecurityWeek Breach Reports",
      url: "https://www.securityweek.com/data-breach-news",
      description: "Dedicated section covering data breach news from SecurityWeek.",
      sourceType: "News Site"
    },
    {
      name: "DataBreaches.net",
      url: "https://www.databreaches.net/",
      description: "Blog dedicated to reporting on data breaches and privacy incidents.",
      sourceType: "Community Blog"
    },
    {
      name: "Risk Based Security Breach Report",
      url: "https://www.riskbasedsecurity.com/",
      description: "Provides data breach intelligence and risk ratings (requires access).",
      sourceType: "Vendor Report"
    },
    {
      name: "Verizon DBIR",
      url: "https://www.verizon.com/business/resources/reports/dbir/",
      description: "Annual Data Breach Investigations Report analyzing breach patterns and trends.",
      sourceType: "Vendor Report"
    },
    {
      name: "Cyware - Breach Alerts",
      url: "https://cyware.com/cyber-security-news/data-breach",
      description: "Curated news feed focused on data breach incidents.",
      sourceType: "News Feed"
    },
    {
      name: "CSO Online - Breach Coverage",
      url: "https://www.csoonline.com/category/data-breach/",
      description: "Data breach news and analysis for security executives.",
      sourceType: "News Site"
    },
    {
      name: "KrebsOnSecurity",
      url: "https://krebsonsecurity.com/",
      description: "In-depth investigative journalism on cybercrime, often covering major breaches.",
      sourceType: "Expert Blog"
    },
    {
      name: "BleepingComputer - Breaches",
      url: "https://www.bleepingcomputer.com/",
      description: "Technology news site frequently reporting on ransomware and data breaches.",
      sourceType: "News Site"
    },
    {
      name: "CISA Alerts & Advisories",
      url: "https://www.cisa.gov/news-events/alerts",
      description: "Alerts from the US Cybersecurity & Infrastructure Security Agency, often related to breaches.",
      sourceType: "Government"
    },
    {
      name: "SC Magazine - Breaches",
      url: "https://www.scmagazine.com/",
      description: "Cybersecurity news source with coverage of data breaches.",
      sourceType: "News Site"
    },
    {
      name: "TechCrunch - Security Breaches",
      url: "https://techcrunch.com/tag/data-breach/",
      description: "Technology news site covering major security breaches, especially impacting startups.",
      sourceType: "News Site"
    },
    {
      name: "ZDNet Cybersecurity",
      url: "https://www.zdnet.com/topic/security/",
      description: "Business technology news site with extensive cybersecurity and breach coverage.",
      sourceType: "News Site"
    },
    {
      name: "ZDNet Breach Tag",
      url: "https://www.zdnet.com/topic/security/data-breach/",
      description: "ZDNet's specific tag feed for data breach related news.",
      sourceType: "News Site"
    },
    {
      name: "Forbes Cybersecurity",
      url: "https://www.forbes.com/cybersecurity/",
      description: "Forbes section covering cybersecurity news, including breach reports.",
      sourceType: "News Site"
    },
    {
      name: "Cybersecurity Dive",
      url: "https://www.cybersecuritydive.com/",
      description: "Industry news publication covering cybersecurity topics including breaches.",
      sourceType: "News Site"
    },
    {
      name: "Wall Street Journal Cyber",
      url: "https://www.wsj.com/news/cybersecurity",
      description: "WSJ coverage of cybersecurity issues, often including major corporate breaches.",
      sourceType: "News Site"
    },
    {
      name: "NBC News Technology & Security",
      url: "https://www.nbcnews.com/tech/tech-news",
      description: "Major news outlet's technology section covering security incidents.",
      sourceType: "News Site"
    },
    {
      name: "Security Magazine - Breach Tracker",
      url: "https://www.securitymagazine.com/",
      description: "Magazine for security executives, often featuring breach analysis.",
      sourceType: "News Site"
    },
    {
      name: "Cybercrime Magazine - Breaches",
      url: "https://cybersecurityventures.com", // Main site, breach news under categories
      description: "Publication focused on the cybercrime economy, includes breach news.",
      sourceType: "News Site"
    },
    {
      name: "Intel471 Breach Intel",
      url: "https://intel471.com", // Access likely requires subscription
      description: "Provides intelligence on breaches derived from monitoring cybercriminal activities.",
      sourceType: "Vendor Intel"
    },
    {
      name: "Recorded Future Data Leak Reports",
      url: "https://www.recordedfuture.com/blog",
      description: "Threat intelligence blog often covering data leaks and breach trends.",
      sourceType: "Vendor Blog"
    },
    {
      name: "HackNotice Public Breach Tracker",
      url: "https://www.hacknotice.com/",
      description: "Service monitoring for breaches and alerting individuals/companies.",
      sourceType: "Platform"
    },
    {
      name: "Bitglass Data Breach Reports",
      url: "https://www.bitglass.com/resources-library", // Reports likely in resource library
      description: "Cloud security company publishing reports often including breach analysis.",
      sourceType: "Vendor Report"
    },
    {
      name: "Comparitech Breach Timeline",
      url: "https://www.comparitech.com/blog/information-security/data-breach-statistics/",
      description: "Blog post compiling data breach statistics and maintaining a timeline.",
      sourceType: "Community Blog"
    },
    {
      name: "TechRepublic Security",
      url: "https://www.techrepublic.com/topic/security/",
      description: "IT professional resource site covering security news and breaches.",
      sourceType: "News Site"
    },
    {
      name: "Security Boulevard Breach Insights",
      url: "https://securityboulevard.com/",
      description: "Community site and blog network covering various security topics including breaches.",
      sourceType: "Community Blog"
    },
    {
      name: "ISACA Breach Insights",
      url: "https://www.isaca.org/resources/news-and-trends",
      description: "Insights and resources from ISACA, sometimes covering breach impact and governance.",
      sourceType: "Association Publication"
    },
    {
      name: "OWASP Top 10 - Real Breach Examples",
      url: "https://owasp.org/www-project-top-ten/",
      description: "The OWASP Top 10 often uses real-world breach examples to illustrate risks.",
      sourceType: "Framework"
    },
    {
      name: "NY Times Cyber Coverage",
      url: "https://www.nytimes.com/section/technology",
      description: "New York Times technology section covering significant cybersecurity events.",
      sourceType: "News Site"
    },
    {
      name: "Wired Security News",
      url: "https://www.wired.com/category/security/",
      description: "Wired magazine's security section covering breaches and cyber threats.",
      sourceType: "News Site"
    },
    {
      name: "Business Insider Cyber",
      url: "https://www.businessinsider.com/cybersecurity",
      description: "Business news site covering the impact of cybersecurity incidents.",
      sourceType: "News Site"
    },
    {
      name: "The Register - Breach News",
      url: "https://www.theregister.com/Security/",
      description: "UK-based tech news site known for its security and data breach reporting.",
      sourceType: "News Site"
    },
    {
      name: "GovInfoSecurity Breach News",
      url: "https://www.govinfosecurity.com/",
      description: "News site focused on information security for government and regulated industries.",
      sourceType: "News Site"
    },
    {
      name: "The Daily Swig (PortSwigger)",
      url: "https://portswigger.net/daily-swig",
      description: "Web security news site from the creators of Burp Suite, covering breaches.",
      sourceType: "Vendor News"
    },
    {
      name: "Threat Intelligence Reports (Check Point)",
      url: "https://research.checkpoint.com/",
      description: "Check Point's research often details campaigns linked to breaches.",
      sourceType: "Vendor Research"
    },
    {
      name: "Unit 42 - Breach Intel",
      url: "https://unit42.paloaltonetworks.com/",
      description: "Palo Alto Networks' threat intelligence team blog, covering breach analysis.",
      sourceType: "Vendor Research"
    },
    {
      name: "FireEye Mandiant Breach Reports",
      url: "https://www.mandiant.com/resources",
      description: "Mandiant's reports often provide deep dives into major security breaches.",
      sourceType: "Vendor Report"
    },
    {
      name: "CERT-EU Incident Blog",
      url: "https://www.cert.europa.eu/cert/newsletter/en/latest.html",
      description: "Incident reports and newsletters from the Computer Emergency Response Team for EU institutions.",
      sourceType: "Government"
    },
    {
      name: "Tenable Breach Briefings",
      url: "https://www.tenable.com/blog",
      description: "Tenable's blog sometimes covers breach analysis related to vulnerabilities.",
      sourceType: "Vendor Blog"
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

      {/* Breach Reporting & News Sources Section */}
      <div className="bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Breach Reporting & News Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breachResources.map((resource, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-red-900/30 text-red-400 text-xs px-3 py-1 rounded-full mb-3">
                    {resource.sourceType}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{resource.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{resource.description}</p>
                </div>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-red-400 hover:text-red-300 text-sm font-medium"
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