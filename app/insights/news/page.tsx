"use client"

import React from 'react'
import { Newspaper, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NewsPage() {

  const newsSources = [
    {
      name: "The Hacker News",
      url: "https://thehackernews.com/",
      description: "Widely read source for cybersecurity news, vulnerabilities, and threat intelligence.",
      sourceType: "News Site"
    },
    {
      name: "Dark Reading",
      url: "https://www.darkreading.com/",
      description: "News and commentary on cybersecurity threats, vulnerabilities, and technology trends.",
      sourceType: "News Site"
    },
    {
      name: "SecurityWeek",
      url: "https://www.securityweek.com/",
      description: "Provides cybersecurity news, insights, and analysis for IT security professionals.",
      sourceType: "News Site"
    },
    {
      name: "SC Magazine",
      url: "https://www.scmagazine.com/",
      description: "News, analysis, and product reviews for cybersecurity professionals.",
      sourceType: "News Site"
    },
    {
      name: "BleepingComputer",
      url: "https://www.bleepingcomputer.com/",
      description: "Technology news site frequently reporting on ransomware, data breaches, and security news.",
      sourceType: "News Site"
    },
    {
      name: "CyberScoop",
      url: "https://www.cyberscoop.com/",
      description: "Cybersecurity news and events focused on government and technology leaders.",
      sourceType: "News Site"
    },
    {
      name: "Threatpost",
      url: "https://threatpost.com/",
      description: "Independent news site covering IT security, vulnerabilities, and cyber threats.",
      sourceType: "News Site"
    },
    {
      name: "Krebs on Security",
      url: "https://krebsonsecurity.com/",
      description: "In-depth investigative journalism on cybercrime and security incidents.",
      sourceType: "Expert Blog"
    },
    {
      name: "Wired Security",
      url: "https://www.wired.com/category/security/",
      description: "Wired magazine's section covering security, privacy, and cyber threats.",
      sourceType: "News Site"
    },
    {
      name: "TechCrunch Security",
      url: "https://techcrunch.com/tag/security/",
      description: "Technology news site covering security incidents, startups, and trends.",
      sourceType: "News Site"
    },
    {
      name: "Forbes Cybersecurity",
      url: "https://www.forbes.com/cybersecurity/",
      description: "Forbes section dedicated to cybersecurity news, analysis, and expert opinions.",
      sourceType: "News Site"
    },
    {
      name: "ZDNet Security",
      url: "https://www.zdnet.com/topic/security/",
      description: "Business technology news site with extensive cybersecurity coverage.",
      sourceType: "News Site"
    },
    {
      name: "CSO Online",
      url: "https://www.csoonline.com/",
      description: "News, analysis, and research for security and risk management professionals.",
      sourceType: "News Site"
    },
    {
      name: "Ars Technica – Security",
      url: "https://arstechnica.com/information-technology/",
      description: "Technology news site with strong coverage of IT and security topics.",
      sourceType: "News Site"
    },
    {
      name: "MIT Technology Review - Cyber",
      url: "https://www.technologyreview.com/topic/cybersecurity/",
      description: "Coverage of emerging cybersecurity technologies and research from MIT.",
      sourceType: "News Site"
    },
    {
      name: "BBC Technology - Security",
      url: "https://www.bbc.com/news/technology",
      description: "BBC's technology section often covering major cybersecurity incidents.",
      sourceType: "News Site"
    },
    {
      name: "CNN Technology – Cyber",
      url: "https://edition.cnn.com/business/tech",
      description: "CNN's tech section covering significant cybersecurity events and news.",
      sourceType: "News Site"
    },
    {
      name: "The Register – Security",
      url: "https://www.theregister.com/Security/",
      description: "UK-based tech news site known for its security and enterprise IT reporting.",
      sourceType: "News Site"
    },
    {
      name: "Infosecurity Magazine",
      url: "https://www.infosecurity-magazine.com/",
      description: "Magazine and website covering the latest industry news, threats, and security strategies.",
      sourceType: "News Site"
    },
    {
      name: "Cybersecurity Dive",
      url: "https://www.cybersecuritydive.com/",
      description: "Industry news publication providing analysis on cybersecurity trends and events.",
      sourceType: "News Site"
    },
    {
      name: "GovInfoSecurity",
      url: "https://www.govinfosecurity.com/",
      description: "News site focused on information security for government and regulated industries.",
      sourceType: "News Site"
    },
    {
      name: "The Daily Swig (PortSwigger)",
      url: "https://portswigger.net/daily-swig",
      description: "Web security news site from the creators of Burp Suite.",
      sourceType: "Vendor News"
    },
    {
      name: "Cybercrime Magazine",
      url: "https://cybersecurityventures.com/cybercrime-magazine/",
      description: "Publication focused on the cybercrime economy, statistics, and news.",
      sourceType: "News Site"
    },
    {
      name: "Security Boulevard",
      url: "https://securityboulevard.com/",
      description: "Community site and blog network covering various security topics.",
      sourceType: "Community Blog"
    },
    {
      name: "Information Security Buzz",
      url: "https://www.informationsecuritybuzz.com/",
      description: "News site covering various information security topics and expert insights.",
      sourceType: "News Site"
    },
    {
      name: "Packet Storm Security",
      url: "https://packetstormsecurity.com/",
      description: "Resource providing security tools, exploits, and related news articles.",
      sourceType: "News Aggregator"
    },
    {
      name: "Zero Day – ZDNet",
      url: "https://www.zdnet.com/blog/security/",
      description: "ZDNet's blog focusing on software security vulnerabilities and threats.",
      sourceType: "News Site Blog"
    },
    {
      name: "CISA News",
      url: "https://www.cisa.gov/news-events/news",
      description: "Official news releases and updates from the US Cybersecurity & Infrastructure Security Agency.",
      sourceType: "Government News"
    },
    {
      name: "ENISA Newsroom",
      url: "https://www.enisa.europa.eu/news",
      description: "News and press releases from the European Union Agency for Cybersecurity.",
      sourceType: "Government News"
    },
    {
      name: "Rapid7 Blog",
      url: "https://www.rapid7.com/blog/",
      description: "Blog covering vulnerability management, penetration testing, and security operations news.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Sophos News",
      url: "https://news.sophos.com/",
      description: "Official news and threat research updates from Sophos.",
      sourceType: "Vendor News"
    },
    {
      name: "Trend Micro Simply Security",
      url: "https://blog.trendmicro.com/",
      description: "Trend Micro's blog covering security news, research, and advice.",
      sourceType: "Vendor Blog"
    },
    {
      name: "ESET WeLiveSecurity",
      url: "https://www.welivesecurity.com/",
      description: "ESET's blog featuring cybersecurity news, research, and threat analysis.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Cisco Talos Blog",
      url: "https://blog.talosintelligence.com/",
      description: "Threat intelligence and research blog from Cisco Talos.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Google Project Zero Blog",
      url: "https://googleprojectzero.blogspot.com/",
      description: "Blog detailing zero-day vulnerability research from Google's team.",
      sourceType: "Vendor Research Blog"
    },
    {
      name: "Trellix Threat Labs",
      url: "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs.html",
      description: "Threat intelligence insights and research updates from Trellix.",
      sourceType: "Vendor Research"
    },
    {
      name: "CrowdStrike Blog",
      url: "https://www.crowdstrike.com/blog/",
      description: "Blog covering endpoint security, threat intelligence, and incident response news.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Proofpoint Threat Hub",
      url: "https://www.proofpoint.com/us/resources/threat-hub",
      description: "Proofpoint's center for threat reports, research, and security news.",
      sourceType: "Vendor Research"
    },
    {
      name: "FireEye Blog",
      url: "https://www.fireeye.com/blog.html", // Redirects to Mandiant
      description: "Blog archive from FireEye (now part of Mandiant/Google Cloud).",
      sourceType: "Vendor Blog (Archive)"
    },
    {
      name: "Microsoft Security Blog",
      url: "https://www.microsoft.com/en-us/security/blog/",
      description: "Microsoft's official blog for security news, research, and product updates.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Palo Alto Networks Blog",
      url: "https://www.paloaltonetworks.com/blog",
      description: "Blog covering threat research, product news, and industry insights.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Check Point Research Blog",
      url: "https://research.checkpoint.com/",
      description: "Threat intelligence and research findings from Check Point Software Technologies.",
      sourceType: "Vendor Research Blog"
    },
    {
      name: "Fortinet Blog",
      url: "https://www.fortinet.com/blog",
      description: "Blog covering Fortinet product news, threat research, and security trends.",
      sourceType: "Vendor Blog"
    },
    {
      name: "SentinelOne Blog",
      url: "https://www.sentinelone.com/blog/",
      description: "Blog covering endpoint security, AI in cybersecurity, and threat research.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Digital Shadows Blog",
      url: "https://www.digitalshadows.com/blog-and-research/",
      description: "Blog covering digital risk protection, threat intelligence, and security news.",
      sourceType: "Vendor Blog"
    },
    {
      name: "Unit 42 by Palo Alto",
      url: "https://unit42.paloaltonetworks.com/",
      description: "Threat intelligence blog from Palo Alto Networks' Unit 42 team.",
      sourceType: "Vendor Research Blog"
    },
    {
      name: "Mandiant Newsroom",
      url: "https://www.mandiant.com/resources", // Resources section contains news/blog
      description: "News, reports, and threat intelligence from Mandiant (Google Cloud).",
      sourceType: "Vendor News/Research"
    },
    {
      name: "Infosec Institute Blog",
      url: "https://resources.infosecinstitute.com/",
      description: "Blog covering security training topics, certifications, and industry news.",
      sourceType: "Training Provider Blog"
    },
    {
      name: "Security Affairs",
      url: "https://securityaffairs.com/",
      description: "Blog covering cybercrime, hacking news, and intelligence analysis.",
      sourceType: "Expert Blog"
    },
    {
      name: "ITPro Security",
      url: "https://www.itpro.com/security",
      description: "Technology news site section focused on security news for IT professionals.",
      sourceType: "News Site"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-orange-600/10 rounded-xl mb-4">
              <Newspaper className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-orange-500 font-medium">Cybersecurity News</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Latest Cybersecurity News
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Stay updated with the latest headlines, breaches, vulnerabilities, and insights from top cybersecurity news sources.
            </p>
            <Link href="/insights" className="text-purple-400 hover:underline flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
          </div>
        </div>
      </section>

      {/* News Sources Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">News Sources & Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsSources.map((source, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-orange-900/30 text-orange-400 text-xs px-3 py-1 rounded-full mb-3">
                    {source.sourceType}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{source.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{source.description}</p>
                </div>
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
                >
                  Visit Source
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Suggest a News Source</h2>
            <p className="text-lg text-gray-400 mb-8">
              Know a great cybersecurity news source we missed? Let us know!
            </p>
            <Link href="/community/submit">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Submit a Source
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 