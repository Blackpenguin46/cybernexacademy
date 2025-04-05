"use client"

import React from 'react';
import { useState } from "react"
import { AlertTriangle, ExternalLink, Clock, Tag, Globe, Shield, Target, ArrowUpRight, Filter, X, Code, Lock, Server, Database } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

export default function ThreatsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Categories for filtering
  const categories = [
    { id: 'All', name: 'All Threats', icon: AlertTriangle },
    { id: 'Ransomware', name: 'Ransomware', icon: Lock },
    { id: 'Banking Malware', name: 'Banking Malware', icon: Database },
    { id: 'Supply Chain Attack', name: 'Supply Chain Attacks', icon: Server },
    { id: 'Zero-day', name: 'Zero-day Exploits', icon: Code },
    { id: 'Phishing', name: 'Phishing', icon: Target },
  ]

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

  // New section for Threat Intelligence resources
  const threatIntelligenceResources = [
    {
      name: "AlienVault Open Threat Exchange (OTX)",
      url: "https://otx.alienvault.com/",
      description: "Community-powered open threat intelligence platform with global threat data.",
      sourceType: "Open Source Feed"
    },
    {
      name: "Cisco Talos Intelligence",
      url: "https://talosintelligence.com/",
      description: "Threat intelligence research and analysis from Cisco's Talos group.",
      sourceType: "Vendor Intel"
    },
    {
      name: "Recorded Future Blog",
      url: "https://www.recordedfuture.com/blog",
      description: "Blog covering threat intelligence insights, research, and analysis.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Anomali ThreatStream",
      url: "https://www.anomali.com/products/threatstream",
      description: "Threat intelligence platform for aggregating and operationalizing threat data.",
      sourceType: "Platform"
    },
    {
      name: "Threatpost",
      url: "https://threatpost.com/",
      description: "Independent news site covering IT security, vulnerabilities, and cyber threats.",
      sourceType: "News Site"
    },
    {
      name: "ThreatConnect Blog",
      url: "https://threatconnect.com/blog/",
      description: "Blog focusing on threat intelligence, security orchestration, and risk quantification.",
      sourceType: "Vendor Blog"
    },
    {
      name: "MISP Project",
      url: "https://www.misp-project.org/",
      description: "Open Source Threat Intelligence Platform for sharing, storing, and correlating IoCs.",
      sourceType: "Open Source Platform"
    },
    {
      name: "VirusTotal Intelligence",
      url: "https://www.virustotal.com/gui/home/intelligence",
      description: "Advanced search and analysis capabilities over VirusTotal's malware dataset.",
      sourceType: "Platform"
    },
    {
      name: "IBM X-Force Exchange",
      url: "https://exchange.xforce.ibmcloud.com/",
      description: "Cloud-based threat intelligence platform for researching security threats.",
      sourceType: "Platform"
    },
    {
      name: "FireEye Threat Research",
      url: "https://www.fireeye.com/blog/threat-research.html",
      description: "Threat research blog from FireEye (now Trellix) covering advanced threats.",
      sourceType: "Vendor Research"
    },
    {
      name: "Palo Alto Unit 42",
      url: "https://unit42.paloaltonetworks.com/",
      description: "Threat intelligence and research arm of Palo Alto Networks.",
      sourceType: "Vendor Research"
    },
    {
      name: "MITRE ATT&CK Framework",
      url: "https://attack.mitre.org/",
      description: "Globally-accessible knowledge base of adversary tactics and techniques.",
      sourceType: "Framework"
    },
    {
      name: "CISA Known Exploited Vulnerabilities Catalog",
      url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
      description: "Catalog of vulnerabilities known to be actively exploited in the wild.",
      sourceType: "Government"
    },
    {
      name: "HackerOne Disclosures",
      url: "https://hackerone.com/hacktivity",
      description: "Platform showcasing publicly disclosed vulnerability reports from bug bounty programs.",
      sourceType: "Platform"
    },
    {
      name: "NVD - National Vulnerability Database",
      url: "https://nvd.nist.gov/",
      description: "U.S. government repository of standards-based vulnerability management data.",
      sourceType: "Government"
    },
    {
      name: "Team Cymru Threat Intelligence",
      url: "https://www.team-cymru.com/",
      description: "Provides global threat intelligence and insights into malicious activity.",
      sourceType: "Vendor Intel"
    },
    {
      name: "Flashpoint Intelligence Platform",
      url: "https://www.flashpoint.io/",
      description: "Platform providing threat intelligence from illicit online communities.",
      sourceType: "Platform"
    },
    {
      name: "GreyNoise Visualizer",
      url: "https://viz.greynoise.io/",
      description: "Platform for visualizing internet background noise and identifying mass exploitation attempts.",
      sourceType: "Platform"
    },
    {
      name: "Open Threat Research (OTR)",
      url: "https://github.com/OTRF",
      description: "GitHub organization hosting various open-source threat research projects.",
      sourceType: "Community Project"
    },
    {
      name: "Maltrail Threat Feeds",
      url: "https://github.com/stamparm/maltrail",
      description: "Malicious traffic detection system with publicly available threat feeds.",
      sourceType: "Open Source Feed"
    },
    {
      name: "Emerging Threats Ruleset",
      url: "https://rules.emergingthreats.net/",
      description: "Open source IDS/IPS ruleset for detecting emerging threats.",
      sourceType: "Open Source Feed"
    },
    {
      name: "Red Canary Threat Detection Reports",
      url: "https://redcanary.com/threat-detection-report/",
      description: "Annual report detailing top MITRE ATT&CK techniques observed in real-world environments.",
      sourceType: "Vendor Report"
    },
    {
      name: "DFIR Report",
      url: "https://thedfirreport.com/",
      description: "Blog providing detailed analysis of real-world intrusions and attacker techniques.",
      sourceType: "Community Blog"
    },
    {
      name: "Cybercrime Tracker",
      url: "http://cybercrime-tracker.net/",
      description: "Tracks command and control servers for various malware families.",
      sourceType: "Tracker"
    },
    {
      name: "Abuse.ch Threat Feeds",
      url: "https://abuse.ch/",
      description: "Provides various threat intelligence feeds related to malware and botnets.",
      sourceType: "Community Feed"
    },
    {
      name: "SANS Internet Storm Center",
      url: "https://isc.sans.edu/",
      description: "Provides daily analysis of threats and security events observed across the internet.",
      sourceType: "Community Intel"
    },
    {
      name: "CERT-EU Threat Intel",
      url: "https://www.cert.europa.eu/",
      description: "Threat intelligence and security advisories for EU institutions.",
      sourceType: "Government"
    },
    {
      name: "Kaspersky Threat Intelligence Portal",
      url: "https://opentip.kaspersky.com/",
      description: "Portal for checking files, URLs, and IP addresses against Kaspersky's threat intelligence.",
      sourceType: "Platform"
    },
    {
      name: "Securelist by Kaspersky",
      url: "https://securelist.com/",
      description: "Kaspersky's blog covering threat research, analysis, and cybersecurity news.",
      sourceType: "Vendor Research"
    },
    {
      name: "Check Point Research",
      url: "https://research.checkpoint.com/",
      description: "Threat intelligence and research findings from Check Point.",
      sourceType: "Vendor Research"
    },
    {
      name: "Malware Traffic Analysis",
      url: "https://www.malware-traffic-analysis.net/",
      description: "Blog providing packet captures (PCAPs) and analysis of real-world malware infections.",
      sourceType: "Community Blog"
    },
    {
      name: "Zeus Tracker (abuse.ch)",
      url: "https://zeustracker.abuse.ch/",
      description: "Tracks Zeus botnet command and control servers.",
      sourceType: "Tracker"
    },
    {
      name: "Feodo Tracker",
      url: "https://feodotracker.abuse.ch/",
      description: "Tracks Feodo (Cridex/Dridex) banking trojan infrastructure.",
      sourceType: "Tracker"
    },
    {
      name: "ThreatFox",
      url: "https://threatfox.abuse.ch/",
      description: "Community platform for sharing indicators of compromise (IOCs).",
      sourceType: "Community Feed"
    },
    {
      name: "Cyber Threat Coalition",
      url: "https://www.cyberthreatcoalition.org/",
      description: "Coalition providing threat intelligence, primarily focused on COVID-19 related threats initially.",
      sourceType: "Coalition"
    },
    {
      name: "Cyware Threat Intel Feeds",
      url: "https://cyware.com/",
      description: "Platform offering threat intelligence feeds and security orchestration capabilities.",
      sourceType: "Platform"
    },
    {
      name: "Intel 471 Threat Intelligence",
      url: "https://intel471.com/",
      description: "Provides adversary and malware intelligence from the cyber underground.",
      sourceType: "Vendor Intel"
    },
    {
      name: "Trellix Threat Labs",
      url: "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs.html",
      description: "Threat research and intelligence from Trellix.",
      sourceType: "Vendor Research"
    },
    {
      name: "OTX Pulse",
      url: "https://otx.alienvault.com/pulse",
      description: "Publicly available threat intelligence pulses shared by the OTX community.",
      sourceType: "Open Source Feed"
    },
    {
      name: "Spamhaus",
      url: "https://www.spamhaus.org/",
      description: "Provides real-time threat intelligence on spam sources and malware.",
      sourceType: "Feed Provider"
    },
    {
      name: "CERT-UK Advisories (NCSC)",
      url: "https://www.ncsc.gov.uk/section/advice-guidance/all-topics",
      description: "Security advisories and guidance from the UK's National Cyber Security Centre.",
      sourceType: "Government"
    },
    {
      name: "Dragos Threat Intelligence",
      url: "https://www.dragos.com/threat-intelligence/",
      description: "Threat intelligence focused specifically on Industrial Control Systems (ICS).",
      sourceType: "Vendor Intel (ICS)"
    },
    {
      name: "Arbor Networks ATLAS (Netscout)",
      url: "https://www.netscout.com/solutions/ddos/atlas",
      description: "Global threat intelligence platform focused on DDoS attacks and network threats.",
      sourceType: "Platform"
    },
    {
      name: "CrowdStrike Intelligence",
      url: "https://www.crowdstrike.com/threat-intel/",
      description: "CrowdStrike's threat intelligence services and reports.",
      sourceType: "Vendor Intel"
    },
    {
      name: "FireHOL IP Lists",
      url: "https://iplists.firehol.org/",
      description: "Collection of IP lists for firewalling, focused on blocking malicious actors.",
      sourceType: "Open Source Feed"
    },
    {
      name: "FortiGuard Labs Threat Research",
      url: "https://www.fortinet.com/blog/threat-research",
      description: "Threat research and outbreak alerts from Fortinet's FortiGuard Labs.",
      sourceType: "Vendor Research"
    },
    {
      name: "IntelX Threat Search",
      url: "https://intelx.io/",
      description: "Search engine indexing dark web, data leaks, and other threat intelligence sources.",
      sourceType: "Search Engine"
    },
    {
      name: "BinaryEdge",
      url: "https://www.binaryedge.io/",
      description: "Platform scanning the internet to provide data on attack surfaces and threats.",
      sourceType: "Platform"
    },
    {
      name: "OpenCTI Platform",
      url: "https://www.opencti.io/en/",
      description: "Open source platform for organizing, storing, and sharing cyber threat intelligence.",
      sourceType: "Open Source Platform"
    },
    {
      name: "The DFIR Diva Threat Resources",
      url: "https://dfirdiva.com",
      description: "Curated resources for Digital Forensics and Incident Response, including threat intel sources.",
      sourceType: "Community Blog"
    }
  ]

  // Filter threats based on selected category
  const filteredThreats = selectedCategory === 'All'
    ? activeThreatAlerts
    : activeThreatAlerts.filter(threat => {
        // Safety check for threat.type
        if (!threat.type) {
          return false;
        }
        
        // Case-insensitive comparison
        const threatTypeLower = typeof threat.type === 'string' ? threat.type.toLowerCase() : '';
        const selectedCategoryLower = selectedCategory.toLowerCase();
        
        return threatTypeLower === selectedCategoryLower;
      });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-red-600/10 rounded-xl mb-4">
              <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-500 font-medium">Threat Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Threat Analysis
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Stay informed about current cyber threats, attack vectors, and mitigation strategies.
            </p>
            <Link href="/insights" className="text-purple-400 hover:underline flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Active Threat Alerts Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold text-white">Active Threat Alerts</h2>
              
              <div className="flex items-center gap-4 overflow-x-auto pb-2 w-full md:w-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-3 py-2 rounded-full text-sm whitespace-nowrap ${
                      selectedCategory === category.id 
                        ? 'bg-red-900/40 text-red-400 border border-red-700'
                        : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {filteredThreats.map((threat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          threat.severity === 'Critical' 
                            ? 'bg-red-500/10 text-red-500' 
                            : 'bg-orange-500/10 text-orange-500'
                        }`}>
                          {threat.severity}
                        </span>
                        <span className="text-gray-400 text-sm flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {threat.target}
                        </span>
                        <span className="text-red-400 text-sm flex items-center">
                          <Lock className="w-4 h-4 mr-1" />
                          {threat.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-4">{threat.title}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">Threat Details</h4>
                          <div className="space-y-2">
                            <div className="flex">
                              <span className="text-gray-500 w-24">Vector:</span>
                              <span className="text-gray-300">{threat.details.vector}</span>
                            </div>
                            <div className="flex">
                              <span className="text-gray-500 w-24">Payload:</span>
                              <span className="text-gray-300">{threat.details.payload}</span>
                            </div>
                            <div className="flex">
                              <span className="text-gray-500 w-24">Impact:</span>
                              <span className="text-gray-300">{threat.details.impact}</span>
                            </div>
                            <div className="flex">
                              <span className="text-gray-500 w-24">Scope:</span>
                              <span className="text-gray-300">{threat.details.scope}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium text-white mb-2">Indicators of Compromise</h4>
                            <div className="space-y-1">
                              {threat.indicators.map((indicator, i) => (
                                <div key={i} className="flex items-center text-gray-300 text-sm">
                                  <AlertTriangle className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                                  {indicator}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-white mb-2">Mitigation Strategies</h4>
                            <div className="space-y-1">
                              {threat.mitigation.map((step, i) => (
                                <div key={i} className="flex items-center text-gray-300 text-sm">
                                  <Shield className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                  {step}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredThreats.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-gray-500 mb-2">No threats matching the selected category.</div>
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className="text-purple-400 hover:underline"
                  >
                    View all threats
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Threat Actors Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Notable Threat Actors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {threatActors.map((actor, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{actor.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      actor.threatLevel === 'Critical' ? 'bg-red-500/10 text-red-500' :
                      actor.threatLevel === 'High' ? 'bg-orange-500/10 text-orange-500' :
                      'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {actor.threatLevel}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-gray-500 w-16">Type:</span>
                      <span className="text-gray-300">{actor.type}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 w-16">Origin:</span>
                      <span className="text-gray-300">{actor.origin}</span>
                    </div>
                    
                    <div>
                      <div className="text-gray-500 mb-2">Primary Targets</div>
                      <div className="flex flex-wrap gap-2">
                        {actor.targets.map((target, i) => (
                          <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-gray-500 mb-2">Capabilities</div>
                      <div className="space-y-1">
                        {actor.capabilities.map((capability, i) => (
                          <div key={i} className="flex items-center text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                            {capability}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-3 mt-2 border-t border-gray-800">
                      <div className="text-gray-500 mb-1">Recent Activity</div>
                      <div className="text-gray-300 text-sm">{actor.recentActivity}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Vulnerability Alerts Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Critical Vulnerabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vulnerabilityAlerts.map((vuln, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      vuln.severity === 'Critical' ? 'bg-red-500/10 text-red-500' :
                      'bg-orange-500/10 text-orange-500'
                    }`}>
                      CVSS {vuln.cvss}
                    </span>
                    <span className="text-xs text-red-400 uppercase font-medium">{vuln.status}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{vuln.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-gray-500 w-24">Affected:</span>
                      <span className="text-gray-300">{vuln.affected}</span>
                    </div>
                    
                    <div>
                      <div className="text-gray-500 mb-2">Details</div>
                      <div className="space-y-1">
                        <div className="flex items-start">
                          <span className="text-gray-500 w-28">Type:</span>
                          <span className="text-gray-300">{vuln.details.type}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-500 w-28">Access:</span>
                          <span className="text-gray-300">{vuln.details.access}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-500 w-28">Complexity:</span>
                          <span className="text-gray-300">{vuln.details.complexity}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-500 w-28">Authentication:</span>
                          <span className="text-gray-300">{vuln.details.authentication}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-gray-500 mb-2">Mitigation</div>
                      <div className="space-y-1">
                        {vuln.mitigation.map((step, i) => (
                          <div key={i} className="flex items-center text-gray-300 text-sm">
                            <Shield className="w-3 h-3 text-green-500 mr-2" />
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
      
      {/* Trend Analysis Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Threat Landscape Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendAnalysis.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
                  <div className="space-y-6">
                    {category.trends.map((trend, i) => (
                      <div key={i} className="border-t border-gray-800 pt-4 first:border-0 first:pt-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-white font-medium">{trend.trend}</div>
                          <div className="text-red-500 font-medium">{trend.change}</div>
                        </div>
                        <div className="text-gray-300 text-sm mb-2">{trend.description}</div>
                        <div className="flex items-center">
                          <span className="text-gray-500 mr-2">Impact:</span>
                          <span className={
                            trend.impact === 'Critical' ? 'text-red-500' :
                            'text-orange-500'
                          }>{trend.impact}</span>
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

      {/* Threat Intelligence Feeds & Resources Section */}
      <div className="bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Threat Intelligence Feeds & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threatIntelligenceResources.map((resource, index) => (
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
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Stay Protected</h2>
            <p className="text-lg text-gray-400 mb-8">
              Get regular updates on emerging threats and vulnerabilities to keep your organization secure.
            </p>
            <Link href="/insights">
              <Button className="bg-red-600 hover:bg-red-700">
                Back to Insights
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 