"use client";

import React, { useState } from 'react';
import {
  AlertTriangle, ExternalLink, Clock, Tag, Shield, Filter, Zap, Target, Database,
  ArrowLeft, Building, KeyRound, Users, CalendarDays, ShieldAlert, Gauge,
  ListChecks, Crosshair, RadioTower, Flame, BookOpen, Newspaper, Search, X,
  Server, Bug, Globe, LinkIcon, Layers,
  ShieldCheck, Wrench, Megaphone, HelpCircle, User, BarChart, FileText, MessageSquare, TrendingUp, Rss,
  CreditCard
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'; // Import CategoryFilter
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Add Select import

// Updated Interface for Breach Case Study
interface BreachCaseStudy {
  title: string;
  organization: string;
  date: string;
  impact: string;
  type: string; // e.g., 'Ransomware', 'Data Theft', 'Supply Chain', 'Phishing'
  industry: string; // e.g., 'Healthcare', 'Finance', 'Tech', 'Government', 'Retail'
  status: string; // e.g., 'Resolved', 'Ongoing Impact'
  description: string; // Brief overview
  attackVector: string[]; // How the breach occurred
  keyTakeaways: string[]; // Lessons learned
  url?: string; // Optional link to full report/news
  resources?: { title: string; url: string; type: 'web' | 'pdf' }[]; // Add resources array
}

// --- Component Start ---
export default function BreachesPage() {
  // State for Filters
  const [selectedBreachIndustry, setSelectedBreachIndustry] = useState('all');
  const [selectedBreachType, setSelectedBreachType] = useState('all');
  const [activeBreachFilterDimension, setActiveBreachFilterDimension] = useState('industry'); // 'industry' or 'type' - New state

  // --- Updated Case Study Data ---
  const breachCaseStudies: BreachCaseStudy[] = [
    {
      title: "SolarWinds Supply Chain Attack",
      organization: "Multiple (via SolarWinds)",
      date: "Late 2020",
      impact: "Widespread government & enterprise compromise",
      type: "Supply Chain",
      industry: "Multiple",
      status: "Resolved (Initial Vector)",
      description: "A sophisticated nation-state attack compromising the build process of SolarWinds Orion software, distributing malware via legitimate updates.",
      attackVector: ["Compromised software build system", "Malware distribution via trusted update channel", "Lateral movement post-compromise"],
      keyTakeaways: ["Importance of software supply chain security", "Need for robust build environment monitoring", "Assume breach mentality", "Complexity of detecting sophisticated APTs"],
      url: "https://www.cisa.gov/solarwinds",
      resources: [
        { title: "CISA Analysis Report", url: "https://www.cisa.gov/sites/default/files/publications/AR21-079A_SolarWinds_and_AD_Microsoft_365_Compromise.pdf", type: 'pdf' },
        { title: "FireEye Threat Research", url: "https://www.fireeye.com/blog/threat-research/2020/12/evasive-attacker-leverages-solarwinds-supply-chain-compromise.html", type: 'web' },
      ]
    },
    {
      title: "Equifax Data Breach",
      organization: "Equifax",
      date: "Mid 2017",
      impact: "~147M Consumer Records (SSNs, PII)",
      type: "Data Theft",
      industry: "Finance",
      status: "Resolved (Significant Fines/Settlements)",
      description: "Exploitation of an unpatched vulnerability in Apache Struts web framework leading to massive personal data exfiltration.",
      attackVector: ["Exploitation of known public vulnerability (Apache Struts)", "Failure to patch critical systems in a timely manner", "Insufficient network segmentation"],
      keyTakeaways: ["Critical need for timely vulnerability patching", "Importance of asset inventory and management", "Data minimization principles", "Effective incident response planning"],
      url: "https://www.ftc.gov/enforcement/cases-proceedings/refunds/equifax-data-breach-settlement",
      resources: [
         { title: "FTC Case Overview", url: "https://www.ftc.gov/enforcement/cases-proceedings/172-3203/equifax-inc", type: 'web' },
         { title: "GAO Report (PDF)", url: "https://www.gao.gov/assets/gao-18-558.pdf", type: 'pdf' },
      ]
    },
    {
      title: "Colonial Pipeline Ransomware Attack",
      organization: "Colonial Pipeline",
      date: "May 2021",
      impact: "Major Fuel Supply Disruption (US East Coast)",
      type: "Ransomware",
      industry: "Energy/Infrastructure",
      status: "Resolved (Ransom Paid/Partially Recovered)",
      description: "Ransomware attack exploiting a compromised legacy VPN account, leading to the shutdown of critical pipeline operations.",
      attackVector: ["Compromised VPN credentials (likely via password reuse/leak)", "Lack of Multi-Factor Authentication (MFA) on VPN", "Ransomware deployment affecting IT systems"],
      keyTakeaways: ["Secure remote access with MFA is critical", "Importance of password hygiene", "Segmenting IT and OT (Operational Technology) networks", "Need for robust backup and recovery strategies"],
      url: "https://www.cisa.gov/news-events/news/colonial-pipeline-what-we-know",
      resources: [
        { title: "Bloomberg Investigation", url: "https://www.bloomberg.com/news/features/2021-06-04/colonial-pipeline-hack-the-untold-story-of-the-attack", type: 'web' },
        { title: "CISA Alert (AA21-131A)", url: "https://www.cisa.gov/news-events/alerts/2021/05/11/alert-aa21-131a-darkside-ransomware-exploitation-colonial-pipeline", type: 'web' }
      ]
    },
    {
        title: "Marriott International (Starwood) Breach",
        organization: "Marriott International",
        date: "Detected 2018 (Began 2014)",
        impact: "Up to 383M Guest Records (incl. Passports, PII)",
        type: "Data Theft",
        industry: "Hospitality",
        status: "Resolved (Fines Issued)",
        description: "Long-term compromise of the Starwood guest reservation database, discovered post-acquisition by Marriott.",
        attackVector: ["Compromise of acquired company systems (Starwood)", "Installation of Remote Access Trojan (RAT) and web shells", "Prolonged undetected presence", "Data exfiltration over several years"],
        keyTakeaways: ["Importance of thorough M&A security due diligence", "Need for continuous monitoring and threat hunting", "Log retention and analysis capabilities", "Encryption of sensitive data at rest"],
        url: "https://www.marriott.com/about/starwood-information.mi",
        resources: [
           { title: "UK ICO Penalty Notice (PDF)", url: "https://ico.org.uk/media/action-weve-taken/mpns/2618524/marriott-international-inc-mpn-20201030.pdf", type: 'pdf' },
           { title: "Marriott Announcement", url: "https://news.marriott.com/news/2018/11/30/marriott-announces-starwood-guest-reservation-database-security-incident", type: 'web' },
        ]
    },
    {
        title: "Target Corporation POS Malware Attack",
        organization: "Target Corporation",
        date: "Late 2013",
        impact: "~40M Credit/Debit Cards, ~70M Customer Records",
        type: "Data Theft (POS Malware)",
        industry: "Retail",
        status: "Resolved (Significant Costs/Reputational Damage)",
        description: "Attackers gained access via a third-party HVAC vendor, moved laterally, and deployed malware on Point-of-Sale (POS) systems to scrape card data.",
        attackVector: ["Compromise of third-party vendor credentials", "Insufficient network segmentation allowing lateral movement from vendor network to POS", "Deployment of custom POS memory-scraping malware"],
        keyTakeaways: ["Third-party risk management is crucial", "Strong network segmentation limits blast radius", "POS system security and monitoring", "Importance of endpoint security solutions"],
        url: "#", // Placeholder
        resources: [
          { title: "Krebs on Security Report", url: "https://krebsonsecurity.com/2014/02/target-hackers-broke-in-via-hvac-company/", type: 'web' },
          { title: "Senate Commerce Committee Report (PDF)", url: "https://www.commerce.senate.gov/services/files/1FDC634B-7767-4405-959C-1A58F247B5F9", type: 'pdf' },
        ]
    }
  ];

  // --- Filtering Logic ---
  const filteredBreaches = breachCaseStudies.filter(breach =>
    (selectedBreachIndustry === 'all' || breach.industry === selectedBreachIndustry) &&
    (selectedBreachType === 'all' || breach.type === selectedBreachType)
  );

  // --- Category Definitions for Filters ---
  const breachIndustryCategories = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'Healthcare', name: 'Healthcare', icon: Users },
    { id: 'Finance', name: 'Finance', icon: Building },
    { id: 'Tech', name: 'Tech', icon: Server },
    { id: 'Government', name: 'Government', icon: Shield },
    { id: 'Retail', name: 'Retail', icon: Tag },
    { id: 'Energy/Infrastructure', name: 'Energy', icon: Zap },
    { id: 'Hospitality', name: 'Hospitality', icon: Building }, // Reusing icon
    { id: 'Multiple', name: 'Multiple', icon: Layers },
    // Add more industries as needed
  ];

  const breachTypeCategories = [
    { id: 'all', name: 'All Types', icon: Globe },
    { id: 'Ransomware', name: 'Ransomware', icon: KeyRound },
    { id: 'Data Theft', name: 'Data Theft', icon: Database },
    { id: 'Data Leak', name: 'Data Leak', icon: Layers },
    { id: 'Phishing', name: 'Phishing', icon: LinkIcon },
    { id: 'Supply Chain', name: 'Supply Chain', icon: LinkIcon }, // Reusing icon
    { id: 'Credential Stuffing', name: 'Credential Stuffing', icon: Users },
    { id: 'Data Theft (POS Malware)', name: 'POS Malware', icon: CreditCard }, // Requires import CreditCard
    // Add more types as needed
  ];

  // --- JSX Start ---
  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section - Updated for Case Studies */}
      <div className="relative bg-gradient-to-b from-black via-purple-900/40 to-gray-950 pt-24 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_55%)] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              <Layers className="w-4 h-4 mr-2" />
              Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security Breach Case Studies
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-6">
              Analyze past security incidents, understand attack vectors, and learn key takeaways to improve defenses.
            </p>
            <Link href="/insights" className="text-purple-400 hover:text-purple-300 flex items-center text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Insights Overview
            </Link>
          </div>
        </div>
      </div>

      {/* --- Breach Case Studies Section --- */}
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-semibold text-white mb-2 flex items-center">
          <Database className="w-7 h-7 mr-3 text-purple-400" />
          Case Studies
        </h2>
        <p className="text-gray-400 mb-6">Explore notable security breaches and their analyses.</p>

        {/* Breach Filters - Modified for single filter selection */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-sm py-3 z-20 border-b border-gray-800 mb-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Dimension Selector Dropdown */}
            <div className="w-full sm:w-auto sm:min-w-[180px]">
              <label className="text-sm font-medium text-gray-300 block mb-1">Filter by:</label>
              <Select 
                value={activeBreachFilterDimension} 
                onValueChange={(value: string) => setActiveBreachFilterDimension(value)}
              >
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select filter type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="industry">Industry</SelectItem>
                  <SelectItem value="type">Breach Type</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Conditionally Rendered Category Filter */}
            <div className="flex-grow w-full">
              <label className="text-sm font-medium text-gray-300 block mb-1">
                Select {activeBreachFilterDimension === 'industry' ? 'Industry' : 'Type'}:
              </label>
              {activeBreachFilterDimension === 'industry' && (
                <CategoryFilter
                  categories={breachIndustryCategories}
                  selectedCategory={selectedBreachIndustry}
                  setSelectedCategory={(id) => {
                     setSelectedBreachIndustry(id);
                     // Optional: Reset the other filter when changing dimension value?
                     // setSelectedBreachType('all'); 
                  }}
                  accentColor="purple"
                />
              )}
              {activeBreachFilterDimension === 'type' && (
                <CategoryFilter
                  categories={breachTypeCategories}
                  selectedCategory={selectedBreachType}
                  setSelectedCategory={(id) => {
                    setSelectedBreachType(id);
                    // Optional: Reset the other filter when changing dimension value?
                    // setSelectedBreachIndustry('all');
                  }}
                  accentColor="purple"
                />
              )}
            </div>
          </div>
           {/* Add button to clear active dimension filter */}
           {(selectedBreachIndustry !== 'all' || selectedBreachType !== 'all') && (
             <div className="mt-2 text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (activeBreachFilterDimension === 'industry') setSelectedBreachIndustry('all');
                    if (activeBreachFilterDimension === 'type') setSelectedBreachType('all');
                  }}
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
                >
                  <X className="w-3 h-3 mr-1" /> Clear selected {activeBreachFilterDimension} filter
                </Button>
            </div>
            )}
        </div>

        {/* Breach Count - Updated to show both active filters */}
        <p className="text-gray-400 text-sm mb-6">
          Showing {filteredBreaches.length} case stud{filteredBreaches.length === 1 ? 'y' : 'ies'}.
          {selectedBreachIndustry !== 'all' && 
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-purple-900/50 text-purple-300 text-xs'>
              Industry: {breachIndustryCategories.find(c => c.id === selectedBreachIndustry)?.name}
              <button onClick={() => setSelectedBreachIndustry('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
          {selectedBreachType !== 'all' && 
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-purple-900/50 text-purple-300 text-xs'>
              Type: {breachTypeCategories.find(c => c.id === selectedBreachType)?.name}
              <button onClick={() => setSelectedBreachType('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
        </p>

        {/* Breach List */}
        {filteredBreaches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBreaches.map((breach, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-purple-500/50 transition-colors">
                {/* Card Header */}
                <div className="mb-3">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 flex items-center">
                    <ShieldAlert className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0" />
                    {breach.title}
                    {breach.url && breach.url !== '#' && (
                        <a href={breach.url} target="_blank" rel="noopener noreferrer" className="ml-auto text-gray-500 hover:text-purple-400">
                        <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                    </h3>
                    <div className="text-xs text-gray-400 flex items-center flex-wrap gap-x-3 gap-y-1">
                        <span><Building className="w-3 h-3 inline mr-1 opacity-70" /> {breach.organization}</span>
                        <span><CalendarDays className="w-3 h-3 inline mr-1 opacity-70" /> {breach.date}</span>
                        <span className={`px-1.5 py-0.5 rounded ${breach.industry === 'Multiple' ? 'bg-gray-700/50' : 'bg-purple-900/40 text-purple-400'}`}>{breach.industry}</span>
                        <span className={`px-1.5 py-0.5 rounded ${breach.type === 'Ransomware' ? 'bg-red-900/40 text-red-400' : 'bg-blue-900/40 text-blue-400'}`}>{breach.type}</span>
                        <span className={`px-1.5 py-0.5 rounded ${breach.status === 'Resolved' ? 'bg-green-900/40 text-green-400' : 'bg-yellow-900/40 text-yellow-400'}`}>{breach.status}</span>
                    </div>
                </div>

                {/* Card Body - Details */}
                <div className="text-sm text-gray-300 space-y-3 mb-4 flex-grow">
                    <p>{breach.description}</p>
                    <div>
                        <h4 className="font-semibold text-purple-300 mb-1">Attack Vector:</h4>
                        <ul className="list-disc list-inside pl-2 text-gray-400 text-xs space-y-0.5">
                            {breach.attackVector.map((vector, i) => <li key={i}>{vector}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold text-purple-300 mb-1">Key Takeaways:</h4>
                        <ul className="list-disc list-inside pl-2 text-gray-400 text-xs space-y-0.5">
                            {breach.keyTakeaways.map((takeaway, i) => <li key={i}>{takeaway}</li>)}
                        </ul>
                    </div>
                </div>

                {/* NEW Resources Section */} 
                {breach.resources && breach.resources.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-gray-700/50">
                        <h4 className="font-semibold text-purple-300 mb-1 text-sm">Further Reading / Resources:</h4>
                        <ul className="space-y-1">
                            {breach.resources.map((res, i) => (
                            <li key={i}>
                                <a 
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-purple-400 hover:text-purple-200 hover:underline flex items-center"
                                >
                                {res.type === 'pdf' ? (
                                    <FileText className="w-3 h-3 mr-1.5 flex-shrink-0" />
                                ) : (
                                    <LinkIcon className="w-3 h-3 mr-1.5 flex-shrink-0" />
                                )}
                                {res.title}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                )}

                 {/* Impact Footer */}
                 <div className="mt-auto pt-2 border-t border-gray-700/50">
                    <p className="text-xs text-gray-500"><Users className="w-3 h-3 inline mr-1" /> Impact: {breach.impact}</p>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
            <div className="text-purple-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
            <h3 className="text-xl font-medium text-white mb-2">No Case Studies Found</h3>
            <p className="text-gray-400 mb-6">Try adjusting the industry or type filters.</p>
            <Button
              variant="outline"
              onClick={() => { setSelectedBreachIndustry('all'); setSelectedBreachType('all'); }}
              className="text-purple-400 border-purple-600 hover:bg-purple-900/30 hover:text-purple-300"
            >
              <X className="w-4 h-4 mr-2" /> Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Need to add missing Lucide Icons ---
/*
Add imports for:
ShieldCheck, Wrench, Megaphone, HelpCircle, User, BarChart, FileText, MessageSquare, TrendingUp, Rss
*/
 