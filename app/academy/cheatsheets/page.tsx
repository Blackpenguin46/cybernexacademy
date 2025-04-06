"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sheet, ExternalLink, ArrowLeft, Filter, X, Search, FileText, Terminal, Target, Binary, Server, Cloud, Wrench, Columns, ListChecks } from 'lucide-react'
import { Button } from "@/components/ui/button"
import CategoryFilter from '../../components/CategoryFilter';

// Define an interface for the cheatsheet resource
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

interface CheatsheetResource {
  title: string;
  url: string;
  description: string;
  topic: string;
}

// --- Filter Definitions (Yellow Theme) ---
const topicFilters: Category[] = [
  { id: 'all', name: 'All Sheets', icon: Sheet },
  { id: 'commands', name: 'Commands & Syntax', icon: Terminal },
  { id: 'pentesting', name: 'Pentesting & Red Team', icon: Target },
  { id: 'forensics-re', name: 'Forensics & RE', icon: Binary },
  { id: 'web', name: 'Web Security', icon: Server },
  { id: 'tools', name: 'Tools', icon: Wrench },
  { id: 'cloud', name: 'Cloud Security', icon: Cloud },
  { id: 'frameworks', name: 'Frameworks & Reference', icon: Columns }, 
  { id: 'checklists', name: 'Checklists', icon: ListChecks },
];

export default function CheatsheetsPage() {

  const cheatsheetResources: CheatsheetResource[] = [
    { title: "SANS DFIR Poster", url: "https://www.sans.org/posters/", description: "Comprehensive poster for Digital Forensics and Incident Response.", topic: "forensics-re" },
    { title: "Nmap Cheat Sheet", url: "https://svn.nmap.org/nmap/docs/nmap-refguide.pdf", description: "Official reference guide excerpt for Nmap commands.", topic: "commands" },
    { title: "MITRE ATT&CK Cheat Sheet", url: "https://www.sans.org/posters/mitre-attck-matrix/", description: "Visual matrix of adversary tactics and techniques.", topic: "frameworks" },
    { title: "OWASP Top 10 Cheat Sheet Series", url: "https://cheatsheetseries.owasp.org/", description: "Series covering mitigation for top web vulnerabilities.", topic: "web" },
    { title: "Burp Suite Cheatsheet", url: "https://github.com/coreb1t/BurpSuiteCheatSheet", description: "Reference for Burp Suite modules and functionalities.", topic: "tools" },
    { title: "Linux Privilege Escalation (GTFOBins)", url: "https://gtfobins.github.io/", description: "Curated list of Unix binaries for bypassing local security restrictions.", topic: "commands" },
    { title: "PayloadsAllTheThings", url: "https://github.com/swisskyrepo/PayloadsAllTheThings", description: "A list of useful payloads and bypasses for Web Application Security.", topic: "web" },
    { title: "HackTricks", url: "https://book.hacktricks.xyz/", description: "Extensive resource covering many pentesting methodologies and tricks.", topic: "pentesting" },
    { title: "Active Directory Exploitation Cheat Sheet", url: "https://github.com/S1ckB0y1337/Active-Directory-Exploitation-Cheat-Sheet", description: "Cheat sheet for common Active Directory enumeration and exploitation techniques.", topic: "pentesting" },
    { title: "Red Team Cheat Sheet (TryHackMe)", url: "https://assets.tryhackme.com/img/redteam/cheatsheet.pdf", description: "TryHackMe's cheatsheet covering red teaming concepts.", topic: "pentesting" },
    { title: "Wireshark Filters Cheatsheet", url: "https://cheatography.com/hayden/cheat-sheets/wireshark/", description: "Quick reference for commonly used Wireshark display filters.", topic: "commands" },
    { title: "CyberChef Cheat Sheet / Docs", url: "https://gchq.github.io/CyberChef/", description: "Reference guide for using CyberChef's data manipulation operations.", topic: "tools" },
    { title: "Metasploit Cheat Sheet", url: "https://highon.coffee/blog/metasploit-pentesting-cheat-sheet/", description: "Common commands and usage for the Metasploit Framework.", topic: "tools" },
    { title: "Linux Command Cheat Sheet", url: "https://files.fosswire.com/2007/08/fwunixref.pdf", description: "General reference for common Linux commands.", topic: "commands" },
    { title: "PowerShell Cheat Sheet (Invoke-TheHash)", url: "https://github.com/peewpw/Invoke-TheHash/blob/master/cheatsheet.txt", description: "Cheatsheet specific to the Invoke-TheHash PowerShell tool.", topic: "tools" },
    { title: "Windows Command Line Cheatsheet", url: "https://www.cheatography.com/davechild/cheat-sheets/windows-command-line/", description: "Quick reference for Windows CMD commands.", topic: "commands" },
    { title: "SQL Injection Cheat Sheet", url: "https://portswigger.net/web-security/sql-injection/cheat-sheet", description: "Reference guide for SQL injection syntax and techniques.", topic: "web" },
    { title: "Reverse Shell Cheat Sheet", url: "https://highon.coffee/blog/reverse-shell-cheat-sheet/", description: "Collection of commands for obtaining reverse shells.", topic: "commands" },
    { title: "Windows Privilege Escalation Methods", url: "https://www.abatchy.com/2017/04/windows-privilege-escalation-methods.html", description: "Blog post outlining various Windows privilege escalation techniques.", topic: "pentesting" },
    { title: "Web Security Academy Cheatsheets", url: "https://portswigger.net/web-security", description: "Cheatsheets related to PortSwigger's Web Security Academy labs.", topic: "web" },
    { title: "Cybersecurity Interview Notes", url: "https://github.com/0x4D31/Cybersecurity-Interview-Notes", description: "Notes and potential questions for cybersecurity interviews.", topic: "frameworks" },
    { title: "ICS Security Cheat Sheet", url: "https://www.sans.org/posters/ics-poster/", description: "SANS poster focused on Industrial Control Systems security.", topic: "frameworks" },
    { title: "Crontab Quick Reference", url: "https://www.adminschoice.com/crontab-quick-reference", description: "Quick reference for crontab syntax.", topic: "commands" },
    { title: "Regex Quickstart", url: "https://www.rexegg.com/regex-quickstart.html", description: "Guide to getting started with regular expressions.", topic: "commands" },
    { title: "Firewall Rules Cheatsheet (Arch Wiki)", url: "https://wiki.archlinux.org/title/Firewalls", description: "Arch Linux Wiki page on firewall configuration (iptables/nftables).", topic: "commands" },
    { title: "DNS Tools Collection", url: "https://github.com/trimstray/dnstools", description: "A curated list of DNS tools and resources.", topic: "tools" },
    { title: "Bash Command Cheatsheet", url: "https://devhints.io/bash", description: "Quick reference for Bash scripting and commands.", topic: "commands" },
    { title: "TLS/SSL Security Cheatsheet (Mozilla)", url: "https://infosec.mozilla.org/guidelines/modern/", description: "Mozilla's guidelines for modern TLS/SSL configurations.", topic: "frameworks" },
    { title: "OSINT Cheat Sheet (Start.me)", url: "https://start.me/p/DPYpmz/osint", description: "A collection of OSINT resources on a Start.me page.", topic: "tools" },
    { title: "Threat Hunting Cheatsheet", url: "https://www.sans.org/posters/threat-hunting/", description: "SANS poster outlining threat hunting methodologies.", topic: "pentesting" },
    { title: "Ghidra Reversing Cheatsheet / Docs", url: "https://ghidra.re/", description: "Main site for Ghidra, includes documentation/cheatsheets.", topic: "forensics-re" },
    { title: "Volatility Framework Docs / Repo", url: "https://github.com/volatilityfoundation", description: "Repository for the Volatility memory forensics framework.", topic: "forensics-re" },
    { title: "YARA Rules Cheatsheet / Docs", url: "https://yara.readthedocs.io/en/stable/", description: "Official documentation for writing YARA rules.", topic: "commands" },
    { title: "Impacket Command Reference / Repo", url: "https://github.com/SecureAuthCorp/impacket", description: "Repository for Impacket, includes examples and usage.", topic: "tools" },
    { title: "Digital Forensics Cheatsheet Series", url: "https://github.com/cheatsheetseries", description: "GitHub organization hosting various DFIR cheatsheets.", topic: "forensics-re" },
    { title: "Web Pentest Cheatsheet (Awesome Pentest)", url: "https://github.com/enaqx/awesome-pentest", description: "An awesome list covering various penetration testing resources.", topic: "pentesting" },
    { title: "Common Ports Cheat Sheet", url: "https://www.rapidtables.com/web/net/port-number.html", description: "List of common network ports and their associated services.", topic: "frameworks" },
    { title: "Hashing Algorithms Chart", url: "https://www.tunnelsup.com/hash-analyzer/", description: "Online tool and reference for identifying hash types.", topic: "tools" },
    { title: "WiFi Hacking Cheatsheet (WiFi Arsenal)", url: "https://github.com/0x90/wifi-arsenal", description: "Collection of tools and commands for WiFi security testing.", topic: "pentesting" },
    { title: "Cyber Kill Chain Cheatsheet", url: "https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html", description: "Lockheed Martin's framework for intrusion analysis.", topic: "frameworks" },
    { title: "Cybersecurity Acronyms Cheat Sheet", url: "https://www.sans.org/posters/cybersecurity-acronyms-poster/", description: "SANS poster defining common cybersecurity acronyms.", topic: "frameworks" },
    { title: "Buffer Overflow Checklist", url: "https://overflow.today/pdfs/bof-checklist.pdf", description: "A checklist for performing buffer overflow exploits.", topic: "checklists" },
    { title: "Log4Shell Attack Cheat Sheet / Resources", url: "https://github.com/NCSC-NL/log4shell/tree/main", description: "Resources related to the Log4Shell vulnerability.", topic: "web" },
    { title: "Cloud Security Cheatsheets (CSA)", url: "https://cloudsecurityalliance.org/", description: "Cloud Security Alliance resources and guidance.", topic: "cloud" },
    { title: "CTF Cheatsheet (Awesome CTF)", url: "https://github.com/apsdehal/awesome-ctf", description: "An awesome list focused on Capture The Flag resources.", topic: "pentesting" },
  ]

  // Remove duplicates (like #48 which is same as #21)
  // Explicitly type the initial value for reduce as CheatsheetResource[]
  const uniqueCheatsheets = cheatsheetResources.reduce((acc: CheatsheetResource[], current) => {
    const x = acc.find(item => item.url === current.url);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, [] as CheatsheetResource[]);

  // Add state for selected topic
  const [selectedTopic, setSelectedTopic] = useState('all');

  // Add filtering logic
  const filteredResources = uniqueCheatsheets.filter(resource => 
    selectedTopic === 'all' || resource.topic === selectedTopic
  );

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section (Yellow Theme) */}
      <div className="bg-gradient-to-b from-yellow-950 via-yellow-900/30 to-gray-950 pt-24 pb-16 text-center border-b border-yellow-800/30 shadow-lg">
        <div className="container mx-auto px-4">
            <Sheet className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Cheatsheet Collection
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Quick reference guides for essential cybersecurity commands, tools, and concepts.
            </p>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="container mx-auto px-4 mt-12">

        {/* Filters - Compact Layout */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-sm py-2 z-20 border-b border-gray-800 mb-6">
           <div className="flex flex-col md:flex-row gap-3 items-center">
              {/* Topic Filter */}
              <div className="flex-grow w-full">
                 <CategoryFilter 
                    categories={topicFilters}
                    selectedCategory={selectedTopic}
                    setSelectedCategory={setSelectedTopic}
                    accentColor="yellow"
                 />
              </div>
              {/* Clear Button */}
              {selectedTopic !== 'all' && (
                 <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedTopic('all')}
                    className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/30 h-9 px-2 whitespace-nowrap"
                 >
                    <X className="w-4 h-4 mr-1"/> Clear
                 </Button>
              )}
           </div>
        </div>

        {/* Resource Count */}
        <p className="text-sm text-gray-400 mb-6">
           Showing {filteredResources.length} cheatsheet{filteredResources.length !== 1 ? 's' : ''}.
           {selectedTopic !== 'all' && 
              <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-yellow-900/50 text-yellow-300 text-xs'>
                 Topic: {topicFilters.find(c => c.id === selectedTopic)?.name}
                 <button onClick={() => setSelectedTopic('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
              </span>
           }
        </p>

        {/* Cheatsheet Links Grid */}
        {filteredResources.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((sheet, index) => {
                 const TopicIcon = topicFilters.find(t => t.id === sheet.topic)?.icon || Sheet;
                 return (
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-yellow-500/50 transition-colors">
                       {/* Card Header */}
                       <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-2">
                             {sheet.title}
                          </h3>
                          {/* Topic Tag */}
                          <span className="inline-flex items-center bg-yellow-900/60 text-yellow-300 px-2.5 py-0.5 rounded-full text-xs font-medium border border-yellow-700/50">
                             <TopicIcon className="w-3 h-3 mr-1.5" />
                             {topicFilters.find(t => t.id === sheet.topic)?.name || 'Cheatsheet'}
                          </span>
                       </div>

                       {/* Description */}
                       <p className="text-sm text-gray-300 mb-4 line-clamp-4 flex-grow">
                          {sheet.description}
                       </p>

                       {/* Link Button Footer */}
                       <div className="mt-auto pt-3 border-t border-gray-700/50 text-center">
                          <Button 
                             asChild 
                             className="w-full bg-yellow-600 hover:bg-yellow-700 text-black"
                          >
                             <Link href={sheet.url} target="_blank" rel="noopener noreferrer">
                                View Cheatsheet
                                {/* ExternalLink icon removed as requested previously */}
                             </Link>
                          </Button>
                       </div>
                    </div>
                 );
              })}
           </div>
        ) : (
           // No Results Block
           <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
              <div className="text-yellow-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
              <h3 className="text-xl font-medium text-white mb-2">No Cheatsheets Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting the topic filter.</p>
              <Button
                 variant="outline"
                 onClick={() => setSelectedTopic('all')}
                 className="text-yellow-400 border-yellow-600 hover:bg-yellow-900/30 hover:text-yellow-300"
              >
                 <X className="w-4 h-4 mr-2" /> Clear Filter
              </Button>
           </div>
        )}
      </div>
    </div>
  );
} 