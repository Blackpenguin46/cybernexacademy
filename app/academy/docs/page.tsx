"use client"; // Ensure this is at the top

import React, { useState } from 'react'; // Add useState
import Link from 'next/link';
import { BookOpen, ExternalLink, ArrowLeft, Book, Filter, X, Search, Columns, Wrench, Router, Server, Target, Binary, Database, Monitor, Code, FileCheck, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import CategoryFilter from '../../components/CategoryFilter'; // Import CategoryFilter

// --- Interfaces --- 
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

interface DocumentationResource {
  title: string; // Renamed from name
  url: string;
  description: string;
  topic: string; // New field for filtering
}

// --- Filter Definitions (Green Theme) ---
const topicFilters: Category[] = [
  { id: 'all', name: 'All Docs', icon: Book },
  { id: 'frameworks', name: 'Frameworks & Standards', icon: Columns },
  { id: 'tools-general', name: 'General Tools', icon: Wrench },
  { id: 'tools-network', name: 'Network Tools', icon: Router },
  { id: 'tools-web', name: 'Web Security Tools', icon: Server }, // Using Server icon for web tools
  { id: 'tools-pentest', name: 'Pentesting Tools', icon: Target },
  { id: 'tools-forensics', name: 'Forensics/RE Tools', icon: Binary },
  { id: 'platforms', name: 'Platforms', icon: Database },
  { id: 'os', name: 'OS Security', icon: Monitor },
  { id: 'api', name: 'APIs', icon: Code },
  { id: 'rules', name: 'Rule Formats', icon: FileCheck },
  { id: 'guides', name: 'Guides & Resources', icon: Info },
];

// --- Documentation Data (Restructured with topics) ---
const documentationResources: DocumentationResource[] = [
  { title: "OWASP Official Documentation", url: "https://owasp.org/", description: "Extensive resources on web application security, including Top 10, testing guides, and projects.", topic: "frameworks" },
  { title: "MITRE ATT&CK Framework", url: "https://attack.mitre.org/", description: "Globally-accessible knowledge base of adversary tactics and techniques.", topic: "frameworks" },
  { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", description: "Voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity risk.", topic: "frameworks" },
  { title: "CISA Guidance Library", url: "https://www.cisa.gov/resources-tools/resources", description: "Library of alerts, best practices, and guidance from the US Cybersecurity & Infrastructure Security Agency.", topic: "guides" },
  { title: "NIST SP 800-53", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf", description: "Security and Privacy Controls for Information Systems and Organizations.", topic: "frameworks" },
  { title: "NIST SP 800-171", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r2.pdf", description: "Protecting Controlled Unclassified Information in Nonfederal Systems.", topic: "frameworks" },
  { title: "ISO/IEC 27001 Overview", url: "https://www.iso.org/isoiec-27001-information-security.html", description: "International standard for information security management systems (ISMS).", topic: "frameworks" },
  { title: "CIS Controls", url: "https://www.cisecurity.org/controls/cis-controls-list/", description: "Prioritized set of actions to protect organizations and data from known cyber attack vectors.", topic: "frameworks" },
  { title: "Linux Man Pages", url: "https://man7.org/linux/man-pages/", description: "Online manual pages for Linux commands and system calls.", topic: "tools-general" },
  { title: "Wireshark User Guide", url: "https://www.wireshark.org/docs/wsug_html_chunked/", description: "Official user guide for the Wireshark network protocol analyzer.", topic: "tools-network" },
  { title: "Kali Linux Docs", url: "https://www.kali.org/docs/", description: "Official documentation for the Kali Linux penetration testing distribution.", topic: "os" },
  { title: "Metasploit Unleashed", url: "https://www.offensive-security.com/metasploit-unleashed/", description: "Free course providing comprehensive documentation for the Metasploit Framework.", topic: "tools-pentest" },
  { title: "Burp Suite Documentation", url: "https://portswigger.net/burp/documentation", description: "Official documentation for the Burp Suite web vulnerability scanner.", topic: "tools-web" },
  { title: "Suricata Documentation", url: "https://suricata.io/docs/", description: "Documentation for the Suricata Intrusion Detection System (IDS/IPS).", topic: "tools-network" },
  { title: "Snort User Manual", url: "https://snort.org/documents", description: "Documentation and manuals for the Snort Intrusion Prevention System (IPS).", topic: "tools-network" },
  { title: "OSINT Framework", url: "https://osintframework.com/", description: "A collection of OSINT tools categorized for easy reference (visual framework).", topic: "tools-general" },
  { title: "CyberChef Docs", url: "https://gchq.github.io/CyberChef/", description: "Documentation and usage guide for the CyberChef data manipulation tool.", topic: "tools-general" },
  { title: "Sigma Rules Documentation", url: "https://github.com/SigmaHQ/sigma", description: "Generic signature format for SIEM systems, documentation hosted on GitHub.", topic: "rules" },
  { title: "Splunk Docs", url: "https://docs.splunk.com/", description: "Official documentation for the Splunk data platform.", topic: "platforms" },
  { title: "ELK Stack Docs (Elastic)", url: "https://www.elastic.co/guide/", description: "Documentation for Elasticsearch, Logstash, Kibana, and Beats.", topic: "platforms" },
  { title: "Shodan API Documentation", url: "https://developer.shodan.io/", description: "Documentation for the Shodan search engine API.", topic: "api" },
  { title: "VirusTotal API Docs", url: "https://developers.virustotal.com/", description: "Documentation for the VirusTotal API for file and URL analysis.", topic: "api" },
  { title: "Sysinternals Documentation", url: "https://docs.microsoft.com/en-us/sysinternals/", description: "Documentation for the Windows Sysinternals suite of utilities.", topic: "tools-forensics" },
  { title: "MITRE Engage", url: "https://engage.mitre.org/", description: "Framework for planning and discussing adversary engagement operations and denial/deception.", topic: "frameworks" },
  { title: "Cuckoo Sandbox Docs", url: "https://cuckoosandbox.org/", description: "Documentation for the Cuckoo automated malware analysis sandbox.", topic: "tools-forensics" },
  { title: "Tanium Docs", url: "https://docs.tanium.com/", description: "Official documentation for the Tanium endpoint management and security platform.", topic: "platforms" },
  { title: "OSQuery Docs", url: "https://osquery.io/", description: "Documentation for OSQuery, allowing SQL-based querying of operating system information.", topic: "tools-general" },
  { title: "Zeek Documentation", url: "https://docs.zeek.org/", description: "Documentation for the Zeek network security monitoring framework.", topic: "tools-network" },
  { title: "OpenVAS Docs", url: "https://greenbone.github.io/docs/", description: "Documentation for the OpenVAS vulnerability scanner (part of Greenbone).", topic: "tools-pentest" },
  { title: "Ghidra Software Docs", url: "https://ghidra.re/", description: "Documentation for the Ghidra software reverse engineering framework.", topic: "tools-forensics" },
  { title: "Autopsy Forensics Docs", url: "https://www.sleuthkit.org/autopsy/docs.php", description: "Documentation for the Autopsy digital forensics platform.", topic: "tools-forensics" },
  { title: "Volatility Framework Docs", url: "https://volatility3.readthedocs.io/", description: "Documentation for the Volatility memory forensics framework.", topic: "tools-forensics" },
  { title: "Sigma Rules for SOC", url: "https://sigmahq.io/", description: "Main website for Sigma rules, including documentation and usage guides.", topic: "rules" },
  { title: "Suricata Rule Documentation", url: "https://suricata.readthedocs.io/en/latest/rules/intro.html", description: "Specific documentation on writing and understanding Suricata rules.", topic: "rules" },
  { title: "Cisco Secure Documentation", url: "https://www.cisco.com/c/en/us/support/security/secure-endpoint/series.html", description: "Support and documentation for Cisco Secure Endpoint (formerly AMP).", topic: "platforms" },
  { title: "Windows Security Baselines (Microsoft)", url: "https://learn.microsoft.com/en-us/windows/security/", description: "Microsoft documentation on security features and recommended baselines for Windows.", topic: "os" },
  { title: "Active Directory Security Guidance", url: "https://adsecurity.org/", description: "Resource site dedicated to Active Directory security concepts and best practices.", topic: "guides" },
  { title: "PowerShell Security Guide", url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/security/overview?view=powershell-7.4", description: "Microsoft documentation covering PowerShell security features and considerations.", topic: "tools-general" },
  { title: "TShark CLI Manual", url: "https://www.wireshark.org/docs/man-pages/tshark.html", description: "Manual page for TShark, the command-line version of Wireshark.", topic: "tools-network" },
  { title: "TLS/SSL Explained", url: "https://tls.ulfheim.net/", description: "An online book explaining the concepts behind TLS/SSL protocols.", topic: "guides" },
  { title: "Nmap Docs", url: "https://nmap.org/book/", description: "Official documentation and book for the Nmap network scanner.", topic: "tools-network" },
  { title: "Nessus Essentials Guide", url: "https://docs.tenable.com/nessus/", description: "Documentation for Nessus vulnerability scanners from Tenable.", topic: "tools-general" },
  { title: "Ansible Security Automation Docs", url: "https://www.ansible.com/use-cases/security-automation", description: "Documentation on using Ansible for security automation tasks.", topic: "tools-general" },
  { title: "AWS Security Documentation", url: "https://docs.aws.amazon.com/security/", description: "Official AWS documentation covering security services and best practices.", topic: "platforms" },
  { title: "Azure Security Documentation", url: "https://learn.microsoft.com/en-us/security/", description: "Official Microsoft Azure documentation for security center, services, and best practices.", topic: "platforms" },
  { title: "Google Cloud Security Docs", url: "https://cloud.google.com/security", description: "Official Google Cloud documentation covering security products and practices.", topic: "platforms" },
  { title: "Mozilla Security Guidelines", url: "https://infosec.mozilla.org/", description: "Mozilla's information security guidelines and policies.", topic: "tools-general" },
  { title: "Tor Project Documentation", url: "https://support.torproject.org/", description: "Support and documentation for the Tor Browser and network.", topic: "tools-general" },
  { title: "Cybersecurity Maturity Model Certification (CMMC)", url: "https://dodcio.defense.gov/CMMC/", description: "Official documentation regarding the CMMC framework for DoD contractors.", topic: "frameworks" },
  { title: "PCI DSS Documentation", url: "https://www.pcisecuritystandards.org/document_library", description: "Official document library for the Payment Card Industry Data Security Standard.", topic: "frameworks" }
];

export default function DocumentationPage() {

  // Add state for selected topic
  const [selectedTopic, setSelectedTopic] = useState('all');

  // Add filtering logic
  const filteredResources = documentationResources.filter(resource => 
    selectedTopic === 'all' || resource.topic === selectedTopic
  );

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section (Green Theme) */}
      <div className="bg-gradient-to-b from-green-950 via-green-900/30 to-gray-950 pt-24 pb-16 text-center border-b border-green-800/30 shadow-lg">
        <div className="container mx-auto px-4">
            <Book className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Documentation Hub
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Find official documentation for essential tools, languages, and technologies.
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
                    accentColor="green"
                 />
              </div>
              {/* Clear Button */}
              {selectedTopic !== 'all' && (
                 <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedTopic('all')}
                    className="text-green-400 hover:text-green-300 hover:bg-green-900/30 h-9 px-2 whitespace-nowrap"
                 >
                    <X className="w-4 h-4 mr-1"/> Clear
                 </Button>
              )}
           </div>
        </div>

        {/* Resource Count */}
        <p className="text-sm text-gray-400 mb-6">
           Showing {filteredResources.length} documentation resource{filteredResources.length !== 1 ? 's' : ''}.
           {selectedTopic !== 'all' && 
              <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-green-900/50 text-green-300 text-xs'>
                 Topic: {topicFilters.find(c => c.id === selectedTopic)?.name}
                 <button onClick={() => setSelectedTopic('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
              </span>
           }
        </p>

        {/* Documentation Links Grid */}
        {filteredResources.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((doc, index) => {
                 const TopicIcon = topicFilters.find(t => t.id === doc.topic)?.icon || Book;
                 return (
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-green-500/50 transition-colors">
                       {/* Card Header */}
                       <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-2">
                             {doc.title}
                          </h3>
                          {/* Topic Tag */}
                          <span className="inline-flex items-center bg-green-900/60 text-green-300 px-2.5 py-0.5 rounded-full text-xs font-medium border border-green-700/50">
                             <TopicIcon className="w-3 h-3 mr-1.5" />
                             {topicFilters.find(t => t.id === doc.topic)?.name || 'Docs'}
                          </span>
                       </div>

                       {/* Description */}
                       <p className="text-sm text-gray-300 mb-4 line-clamp-4 flex-grow">
                          {doc.description}
                       </p>

                       {/* Link Button Footer */}
                       <div className="mt-auto pt-3 border-t border-gray-700/50 text-center">
                          <Button 
                             asChild 
                             className="w-full bg-green-600 hover:bg-green-700 text-white"
                          >
                             <Link href={doc.url} target="_blank" rel="noopener noreferrer">
                                Visit Documentation
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
              <div className="text-green-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
              <h3 className="text-xl font-medium text-white mb-2">No Documentation Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting the topic filter.</p>
              <Button
                 variant="outline"
                 onClick={() => setSelectedTopic('all')}
                 className="text-green-400 border-green-600 hover:bg-green-900/30 hover:text-green-300"
              >
                 <X className="w-4 h-4 mr-2" /> Clear Filter
              </Button>
           </div>
        )}
      </div>
    </div>
  );
} 