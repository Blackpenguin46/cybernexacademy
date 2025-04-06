"use client";

import React, { useState } from 'react';
// Add Accordion, Input, CategoryFilter, more icons
import { BookText, Filter, X, Search, HelpCircle, Network, Lock, ShieldCheck, Workflow, Hash } from 'lucide-react'; 
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"; // For search
import CategoryFilter from '../../components/CategoryFilter'; // For topics
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion" // For display

// --- Interfaces --- 
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

interface GlossaryTerm {
  term: string;
  definition: string;
  topic: string; // For filtering
}

// --- Filter Definitions (Blue Theme) ---
const topicFilters: Category[] = [
  { id: 'all', name: 'All Topics', icon: BookText },
  { id: 'concepts', name: 'Core Concepts', icon: HelpCircle },
  { id: 'networking', name: 'Networking', icon: Network },
  { id: 'malware', name: 'Malware & Threats', icon: Lock },
  { id: 'crypto', name: 'Cryptography', icon: Hash },
  { id: 'defense', name: 'Defense & Mitigation', icon: ShieldCheck },
  { id: 'compliance', name: 'Compliance & Frameworks', icon: Workflow },
];

// --- Glossary Data (Sample) ---
const glossaryTerms: GlossaryTerm[] = [
  // Concepts
  { term: "CIA Triad", definition: "Confidentiality, Integrity, Availability. A model designed to guide policies for information security within an organization.", topic: "concepts" },
  { term: "Threat Actor", definition: "An entity responsible for an event that has an impact on the safety of another entity's assets.", topic: "concepts" },
  { term: "Vulnerability", definition: "A weakness in a system, application, or process that could be exploited by a threat actor.", topic: "concepts" },
  { term: "Exploit", definition: "A piece of software, data, or sequence of commands that takes advantage of a bug or vulnerability to cause unintended or unanticipated behavior.", topic: "concepts" },
  { term: "Risk", definition: "The potential for loss, damage or destruction of an asset as a result of a threat exploiting a vulnerability.", topic: "concepts" },
  { term: "Zero-Day", definition: "A vulnerability or exploit that is unknown to the vendor or the public.", topic: "concepts" },

  // Networking
  { term: "TCP/IP", definition: "Transmission Control Protocol/Internet Protocol. The suite of communication protocols used to interconnect network devices on the internet.", topic: "networking" },
  { term: "Firewall", definition: "A network security device that monitors incoming and outgoing network traffic and permits or blocks data packets based on a set of security rules.", topic: "networking" },
  { term: "VPN", definition: "Virtual Private Network. Creates a secure, encrypted connection over a less secure network, such as the public internet.", topic: "networking" },
  { term: "DNS", definition: "Domain Name System. The hierarchical and decentralized naming system used to identify computers reachable through the Internet or other Internet Protocol networks.", topic: "networking" },
  { term: "Port Scanning", definition: "The process of probing a server or host for open ports to identify potential vulnerabilities.", topic: "networking" },

  // Malware & Threats
  { term: "Malware", definition: "Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system.", topic: "malware" },
  { term: "Virus", definition: "A type of malware that replicates by inserting copies of itself into other computer programs or data files.", topic: "malware" },
  { term: "Worm", definition: "A standalone malware computer program that replicates itself in order to spread to other computers.", topic: "malware" },
  { term: "Trojan Horse", definition: "Malware disguised as legitimate software.", topic: "malware" },
  { term: "Ransomware", definition: "A type of malware that encrypts a victim's files and demands payment for the decryption key.", topic: "malware" },
  { term: "Phishing", definition: "A cybercrime in which a target is contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data.", topic: "malware" },

  // Cryptography
  { term: "Encryption", definition: "The process of converting information or data into a code, especially to prevent unauthorized access.", topic: "crypto" },
  { term: "Hashing", definition: "The process of transforming any given key or a string of characters into another value, usually a fixed-size string or integer.", topic: "crypto" },
  { term: "Symmetric Encryption", definition: "Encryption method wherein the same key is used for both encryption and decryption.", topic: "crypto" },
  { term: "Asymmetric Encryption", definition: "Encryption method using a pair of keys: a public key for encryption and a private key for decryption.", topic: "crypto" },
  { term: "Digital Signature", definition: "A mathematical scheme for verifying the authenticity of digital messages or documents.", topic: "crypto" },

  // Defense & Mitigation
  { term: "Intrusion Detection System (IDS)", definition: "A device or software application that monitors a network or systems for malicious activity or policy violations.", topic: "defense" },
  { term: "Intrusion Prevention System (IPS)", definition: "An IDS that also has the capability to block or prevent detected malicious activity.", topic: "defense" },
  { term: "SIEM", definition: "Security Information and Event Management. Software solutions that aggregate and analyze activity from many different resources across your entire IT infrastructure.", topic: "defense" },
  { term: "Patch Management", definition: "The process of distributing and applying updates to software.", topic: "defense" },
  { term: "Endpoint Detection and Response (EDR)", definition: "A cybersecurity technology that addresses the need for continuous monitoring and response to advanced threats on endpoint devices.", topic: "defense" },

  // Compliance & Frameworks
  { term: "GDPR", definition: "General Data Protection Regulation. A regulation in EU law on data protection and privacy for all individuals within the European Union and the European Economic Area.", topic: "compliance" },
  { term: "HIPAA", definition: "Health Insurance Portability and Accountability Act. US legislation providing data privacy and security provisions for safeguarding medical information.", topic: "compliance" },
  { term: "PCI DSS", definition: "Payment Card Industry Data Security Standard. An information security standard for organizations handling branded credit cards.", topic: "compliance" },
  { term: "NIST Cybersecurity Framework", definition: "A voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity risk.", topic: "compliance" },
];

export default function GlossaryPage() {
  // Add state for topic and search term
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Add filtering logic
  const filteredTerms = glossaryTerms.filter(item => {
    const topicMatch = selectedTopic === 'all' || item.topic === selectedTopic;
    const searchMatch = searchTerm === '' || 
                        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return topicMatch && searchMatch;
  }).sort((a, b) => a.term.localeCompare(b.term)); // Sort alphabetically by term

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section (Blue Theme) */}
      <div className="bg-gradient-to-b from-blue-950 via-blue-900/30 to-gray-950 pt-24 pb-16 text-center border-b border-blue-800/30 shadow-lg">
        <div className="container mx-auto px-4">
            <BookText className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Cybersecurity Glossary
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Definitions for common cybersecurity terms, concepts, and acronyms.
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
                    accentColor="blue"
                 />
              </div>
              {/* Search Input */}
              <div className="w-full md:w-auto md:min-w-[200px] relative">
                 <Input 
                    type="text"
                    placeholder="Search terms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white h-9 pl-9 focus:border-blue-500 focus:ring-blue-500 text-sm"
                 />
                 <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              {/* Clear Button */}
              {(selectedTopic !== 'all' || searchTerm !== '') && (
                 <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => {setSelectedTopic('all'); setSearchTerm('');}}
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/30 h-9 px-2 whitespace-nowrap"
                 >
                    <X className="w-4 h-4 mr-1"/> Clear
                 </Button>
              )}
           </div>
        </div>

        {/* Term Count */}
        <p className="text-sm text-gray-400 mb-6">
           Showing {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}.
           {selectedTopic !== 'all' && 
              <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-blue-900/50 text-blue-300 text-xs'>
                 Topic: {topicFilters.find(c => c.id === selectedTopic)?.name}
                 <button onClick={() => setSelectedTopic('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
              </span>
           }
           {searchTerm !== '' && 
              <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-indigo-900/50 text-indigo-300 text-xs'>
                 Search: "{searchTerm}"
                 <button onClick={() => setSearchTerm('')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
              </span>
           }
        </p>

        {/* Glossary Accordion */}
        {filteredTerms.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {filteredTerms.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-blue-800/30">
                <AccordionTrigger className="text-white hover:text-blue-300 hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                     <span className="inline-flex items-center bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded text-xs font-medium border border-blue-700/50">
                        {React.createElement(topicFilters.find(t => t.id === item.topic)?.icon || BookText, { className: "w-3 h-3 inline mr-1.5" })}
                        {topicFilters.find(t => t.id === item.topic)?.name || 'Term'}
                     </span>
                     <span className="font-semibold text-base">{item.term}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-1 pb-4 px-2 text-base">
                  {item.definition}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
           // No Results Block
           <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
              <div className="text-blue-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
              <h3 className="text-xl font-medium text-white mb-2">No Terms Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting the topic filter or your search term.</p>
              <Button
                 variant="outline"
                 onClick={() => { setSelectedTopic('all'); setSearchTerm(''); }}
                 className="text-blue-400 border-blue-600 hover:bg-blue-900/30 hover:text-blue-300"
              >
                 <X className="w-4 h-4 mr-2" /> Clear All Filters
              </Button>
           </div>
        )}
      </div>
    </div>
  );
} 