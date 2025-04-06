"use client";

import React, { useState } from 'react';
import Link from 'next/link'
import {
  Terminal, // Main icon
  ExternalLink,
  Globe, // All category
  Network, // Network Scanners
  Code, // Web Security / Vuln Assessment?
  Database, // Vuln Assessment DBs?
  FlaskConical, // Malware Analysis
  Search, // OSINT / No Results
  Target, // Pentesting?
  FileText, // DFIR?
  Filter,
  X, // Clear Filter
  ArrowLeft // Back button
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

// Define Category interface
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Define Security Tool interface
interface SecurityTool {
  name: string;
  description: string;
  url: string;
  category: string;
}

export default function SecurityToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories for filtering Tools
  const categories: Category[] = [
    { id: 'all', name: 'All Tools', icon: Globe },
    { id: 'network', name: 'Network Analysis', icon: Network },
    { id: 'web', name: 'Web Security', icon: Code },
    { id: 'vuln', name: 'Vulnerability Assessment', icon: Database },
    { id: 'malware', name: 'Malware Analysis', icon: FlaskConical },
    { id: 'osint', name: 'OSINT', icon: Search },
    { id: 'pentest', name: 'Pentesting Frameworks', icon: Target },
    { id: 'dfir', name: 'DFIR', icon: FileText },
  ];

  // Placeholder data for Security Tools - INCLUDING VIRUSTOTAL
  const securityTools: SecurityTool[] = [
    // Network Analysis
    { name: "Nmap", description: "Popular network scanner for discovery and security auditing.", url: "https://nmap.org/", category: "network" },
    { name: "Wireshark", description: "Widely-used network protocol analyzer.", url: "https://www.wireshark.org/", category: "network" },
    // Web Security
    { name: "OWASP ZAP", description: "Open-source web application security scanner.", url: "https://www.zaproxy.org/", category: "web" },
    { name: "Burp Suite Community", description: "Essential toolkit for web application security testing (free edition).", url: "https://portswigger.net/burp/communitydownload", category: "web" },
    // Vulnerability Assessment
    { name: "OpenVAS / GVM", description: "Open-source vulnerability scanning and management framework.", url: "https://www.greenbone.net/en/community-edition/", category: "vuln" },
    { name: "Nikto", description: "Web server scanner which performs tests against web servers for multiple items.", url: "https://cirt.net/Nikto2", category: "vuln" }, // Also Web
    // Malware Analysis
    { name: "VirusTotal", description: "Analyze suspicious files and URLs for malware using multiple AV engines.", url: "https://www.virustotal.com/", category: "malware" },
    { name: "Any.Run", description: "Interactive online malware analysis sandbox.", url: "https://any.run/", category: "malware" },
    { name: "Ghidra", description: "NSA's open-source software reverse engineering (SRE) framework.", url: "https://ghidra-sre.org/", category: "malware" },
    // OSINT
    { name: "theHarvester", description: "Tool for gathering emails, subdomains, hosts, employee names, open ports and banners.", url: "https://github.com/laramies/theHarvester", category: "osint" },
    { name: "Maltego Community Edition", description: "Tool for open-source intelligence and graphical link analysis (free edition).", url: "https://www.maltego.com/ce/", category: "osint" },
    // Pentesting Frameworks
    { name: "Metasploit Framework", description: "Popular penetration testing framework.", url: "https://www.metasploit.com/", category: "pentest" },
    // DFIR
    { name: "Volatility Framework", description: "An open-source memory forensics framework.", url: "https://www.volatilityfoundation.org/", category: "dfir" },
    { name: "Autopsy", description: "Digital forensics platform and graphical interface to The Sleuth Kit® and other tools.", url: "https://www.autopsy.com/", category: "dfir" },
  ];

  // Filtering logic
  const filteredTools = securityTools.filter(tool => 
    selectedCategory === 'all' || tool.category === selectedCategory
  );

  const handleCategorySelection = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section - Teal Theme for Tools */}
      <div className="relative bg-gradient-to-b from-black via-teal-900/40 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.15),transparent_55%)] opacity-70"></div> 
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Teal Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
              <Terminal className="w-4 h-4 mr-2" />
              Academy Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security Tools & Resources
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Explore a curated collection of essential cybersecurity tools for various domains, from network analysis to malware reversing.
            </p>
             {/* Back to Academy Link */}
             <Link href="/academy" className="mt-6 text-teal-400 hover:text-teal-300 flex items-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Academy Overview
             </Link>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="container mx-auto px-4 mt-12">

        {/* Filters - Compact & Sticky */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-sm py-2 z-20 border-b border-gray-800 mb-6"> 
           <div className="flex flex-col md:flex-row gap-3 items-center">
              {/* Category Filter */}
              <div className="flex-grow w-full">
                 <CategoryFilter 
                    categories={categories} 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={handleCategorySelection} 
                    accentColor="teal"
                 />
              </div>
              {/* Clear Button */}
              {selectedCategory !== 'all' && (
                 <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCategorySelection('all')}
                    className="text-teal-400 hover:text-teal-300 hover:bg-teal-900/30 h-9 px-2 whitespace-nowrap"
                 >
                    <X className="w-4 h-4 mr-1"/> Clear
                 </Button>
              )}
           </div>
        </div>

        {/* Resources Count */}
        <p className="text-sm text-gray-400 mb-6">
          Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}.
          {selectedCategory !== 'all' && 
              <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-teal-900/50 text-teal-300 text-xs'>
                 Category: {categories.find(c => c.id === selectedCategory)?.name}
                 <button onClick={() => handleCategorySelection('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
              </span>
           }
        </p>

        {/* Tools Grid Section */}
        {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => {
                 const CategoryIcon = categories.find(t => t.id === tool.category)?.icon || Terminal; // Default to Terminal
                 return (
                    // Standard Card Structure
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-teal-500/50 transition-colors">
                       {/* Card Header */}
                       <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-2">
                             {tool.name}
                          </h3>
                          {/* Category Tag */}
                          <span className="inline-flex items-center bg-teal-900/60 text-teal-300 px-2.5 py-0.5 rounded-full text-xs font-medium border border-teal-700/50">
                             <CategoryIcon className="w-3 h-3 mr-1.5" />
                             {categories.find(t => t.id === tool.category)?.name || 'Tool'}
                          </span>
                       </div>
                       {/* Description */}
                       <p className="text-sm text-gray-300 mb-4 line-clamp-4 flex-grow">
                          {tool.description}
                       </p>
                       {/* Link Button Footer */}
                       <div className="mt-auto pt-3 border-t border-gray-700/50 text-center">
                          <Button 
                             asChild 
                             className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                          >
                             <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                                Visit Tool Website
                                {/* ExternalLink icon removed */}
                             </Link>
                          </Button>
                       </div>
                    </div>
                 );
              })}
            </div>
          ) : (
             // Consistent No Results styling with teal theme
            <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
               <div className="text-teal-500 mx-auto mb-4">
                 <Search className="w-12 h-12" />
               </div>
              <h3 className="text-xl font-medium text-white mb-2">No Tools Found</h3>
              <p className="text-gray-400 mb-6">Try selecting a different category or clear the filter.</p>
              <Button 
                variant="outline"
                onClick={() => handleCategorySelection('all')} 
                className="text-teal-400 border-teal-600 hover:bg-teal-900/30 hover:text-teal-300"
              >
                 <X className="w-4 h-4 mr-2" /> Clear Filter
              </Button>
            </div>
          )}
       </div>
    </div>
  );
} 