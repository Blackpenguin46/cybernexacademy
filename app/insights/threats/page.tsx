"use client"

import React, { useState } from 'react';
import { 
  AlertTriangle,
  ExternalLink,
  Globe,
  Rss,
  Users,
  Database,
  Newspaper,
  FlaskConical,
  Search,
  Filter,
  X,
  BookOpen,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

// Define Category interface
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Define TI Resource interface
interface TIResource {
  name: string;
  description: string;
  url: string;
  category: string;
}

export default function ThreatsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // New Categories for TI Resources
  const categories: Category[] = [
    { id: 'all', name: 'All Resources', icon: Globe },
    { id: 'feeds', name: 'Threat Feeds', icon: Rss },
    { id: 'apt', name: 'APT Trackers/Analysis', icon: Users },
    { id: 'vuln_db', name: 'Vulnerability Databases', icon: Database },
    { id: 'news', name: 'Threat News/Analysis', icon: Newspaper },
    { id: 'tools', name: 'Sandboxes/Tools', icon: FlaskConical },
  ];

  // Placeholder data for TI Resources - TO BE EXPANDED
  const tiResources: TIResource[] = [
    // Feeds
    { name: "AlienVault OTX", description: "Open Threat Exchange - community-powered threat data.", url: "https://otx.alienvault.com/", category: "feeds" },
    { name: "Abuse.ch ThreatFox", description: "IOC sharing platform (Malware hashes, URLs, IPs).", url: "https://threatfox.abuse.ch/", category: "feeds" },
    { name: "URLhaus", description: "Project from abuse.ch focused on sharing malicious URLs.", url: "https://urlhaus.abuse.ch/", category: "feeds" },
    // APT Trackers/Analysis
    { name: "MITRE ATT&CK Groups", description: "Knowledge base of adversary groups and their TTPs.", url: "https://attack.mitre.org/groups/", category: "apt" },
    { name: "Mandiant Threat Intelligence", description: "Research and reports on APTs and global threats (Google Cloud).", url: "https://cloud.google.com/mandiant/threat-intelligence", category: "apt" },
    { name: "Talos Intelligence Blog", description: "Threat research reports and analysis from Cisco Talos.", url: "https://blog.talosintelligence.com/", category: "apt" }, // Also News
    // Vulnerability Databases
    { name: "NVD (National Vulnerability Database)", description: "U.S. government repository of standards based vulnerability management data (CVEs).", url: "https://nvd.nist.gov/", category: "vuln_db" },
    { name: "CVE Mitre", description: "Primary source for Common Vulnerabilities and Exposures identifiers.", url: "https://www.cve.org/", category: "vuln_db" },
    { name: "Exploit Database", description: "Archive of public exploits and corresponding vulnerable software.", url: "https://www.exploit-db.com/", category: "vuln_db" },
    // News/Analysis
    { name: "The Record by Recorded Future", description: "Cybersecurity news focused on nation-states, policy, and research.", url: "https://therecord.media/", category: "news" },
    { name: "Krebs on Security", description: "In-depth investigative reporting on cybercrime.", url: "https://krebsonsecurity.com/", category: "news" },
    { name: "Bleeping Computer", description: "Technology news site with strong focus on ransomware and threat news.", url: "https://www.bleepingcomputer.com/", category: "news" },
    { name: "CVE News", description: "Official news and announcements from the CVE Program.", url: "https://www.cve.org/Media/News/AllNews", category: "news" },
    { name: "CVE Blog", description: "Blog posts and articles from the CVE Program.", url: "https://www.cve.org/Media/News/Blogs", category: "news" },
    // Sandboxes/Tools
    { name: "VirusTotal", description: "Analyze suspicious files and URLs for malware.", url: "https://www.virustotal.com/", category: "tools" },
    { name: "Any.Run", description: "Interactive online malware analysis sandbox.", url: "https://any.run/", category: "tools" },
    { name: "Hybrid Analysis", description: "Free malware analysis service powered by CrowdStrike Falcon Sandbox.", url: "https://www.hybrid-analysis.com/", category: "tools" },
  ];

  // Filtering logic
  const filteredResources = tiResources.filter(resource => 
    selectedCategory === 'all' || resource.category === selectedCategory
  );

  const handleCategorySelection = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section - Red Theme for Threats */}
      <div className="relative bg-gradient-to-b from-black via-red-900/40 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.2),transparent_55%)] opacity-70"></div> 
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Red Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Threat Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cyber Threat Intelligence Center
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Explore curated threat intelligence resources, feeds, vulnerability databases, and analysis tools to stay ahead of adversaries.
            </p>
             {/* Back to Insights Link */}
             <Link href="/insights" className="mt-6 text-red-400 hover:text-red-300 flex items-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Insights Hub
             </Link>
          </div>
        </div>
      </div>
      
      {/* Optional: TI Concepts Section - Placeholder */}
       <div className="container mx-auto px-4 my-12">
         <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
           <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-red-400" /> Key Threat Intel Concepts (Coming Soon)
            </h2>
           <p className="text-gray-400">Learn about the Threat Intelligence Lifecycle, IOCs, TTPs, and more. Content under development.</p>
         </div>
       </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-4 sticky top-0 bg-gray-950/90 backdrop-blur-sm py-3 z-20 border-b border-gray-800"> {/* Make Filter Sticky */} 
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={handleCategorySelection} 
            accentColor="red" // Red theme for filter
          />
      </div>

       {/* Resources Count */}
      <div className="container mx-auto px-4 py-4">
        <p className="text-gray-400 text-sm">
          Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
          {selectedCategory !== 'all' ? ` in category: ${categories.find(c => c.id === selectedCategory)?.name || selectedCategory}` : ''}
        </p>
      </div>

      {/* TI Resources List Section */}
      <div className="container mx-auto px-4 mt-8">
        {filteredResources.length > 0 ? (
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  // Simple Card for TI Resources
                  <a 
                    key={index} 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-red-500/50 transition-colors"
                  >
                     {/* Optional: Add Category Icon? */}
                     {/* {React.createElement(categories.find(c => c.id === resource.category)?.icon || Globe, { className: "w-6 h-6 text-red-500 mb-3" })} */}
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-300 mb-1 flex items-center">
                      {resource.name} <ExternalLink className="w-4 h-4 ml-2 text-gray-500 group-hover:text-red-400" />
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 line-clamp-2">
                      {resource.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ) : (
             // Consistent No Results styling with red theme
            <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
               <div className="text-red-500 mx-auto mb-4">
                 <Search className="w-12 h-12" />
               </div>
              <h3 className="text-xl font-medium text-white mb-2">No Resources Found</h3>
              <p className="text-gray-400 mb-6">Try selecting a different category or clear the filter.</p>
              <Button 
                variant="outline"
                onClick={() => handleCategorySelection('all')} 
                className="text-red-400 border-red-600 hover:bg-red-900/30 hover:text-red-300"
              >
                 <X className="w-4 h-4 mr-2" /> Clear Filter
              </Button>
            </div>
          )}
       </div>
       
       {/* Removed old sections */}
    </div>
  );
} 