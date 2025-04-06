"use client"; // Make it a client component for filtering

import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import {
    Route, ExternalLink, ArrowLeft, ListChecks, MapPin, BookOpen, GraduationCap, Target, // Core icons
    Filter, X, Search, Globe, LinkIcon, // Filter icons
    Building, Layers, BarChart, Code, Shield, AlertTriangle, Bug, Zap, Briefcase, Award, // Provider/Focus icons
    // Icons for Resource Types:
    FileText, // Docs, Cheatsheet, Article
    PlayCircle, // Video
    FlaskConical, // Lab
    BookCopy, // Course
    Wrench, // Tool
    Network // Tutorial (Networking)
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import CategoryFilter from '@/app/components/CategoryFilter'; // Ensure this path is correct
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Ensure Select is imported

// --- Interfaces --- 

// Interface for Category (for filters)
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Interface for External Learning Path
interface ExternalPath {
  name: string;
  url: string;
  description: string;
  provider: string;
  focus?: string[]; // Optional: e.g., ['Beginner', 'Pentesting', 'SOC', 'Web Security']
}

// Interface for Curated Learning Path Modules/Steps
interface PathModule {
    title: string;
    description: string;
    resources: {
        title: string;
        url: string; // Can be internal (/academy/...) or external
        type: 'Tutorial' | 'Lab' | 'Docs' | 'Video' | 'Course' | 'Article' | 'Tool' | 'External' | 'Cheatsheet';
    }[];
    milestone?: string; // Optional: e.g., "Complete Intro to Networking Lab"
}

// Interface for Custom Curated Learning Path
interface CuratedLearningPath {
    title: string;
    targetAudience: 'Beginner' | 'Intermediate' | 'Advanced';
    targetRole?: string; // e.g., "Penetration Tester", "SOC Analyst", "General Foundation"
    description: string;
    icon: React.ElementType; // Icon for the path card
    modules: PathModule[];
}

// Helper to get resource icon
const ResourceIcon = ({ type }: { type: PathModule['resources'][0]['type'] }) => {
  switch (type) {
    case 'Tutorial': return <Network className="w-3 h-3 mr-1.5 flex-shrink-0 opacity-70" />;
    case 'Lab': return <FlaskConical className="w-3 h-3 mr-1.5 flex-shrink-0 opacity-70" />;
    case 'Docs': return <FileText className="w-3 h-3 mr-1.5 flex-shrink-0 opacity-70" />;
    case 'Video': return <PlayCircle className="w-3 h-3 mr-1.5 flex-shrink-0 opacity-70" />;
    case 'Course': return <BookCopy className="w-3 h-3 mr-1.5 flex-shrink-0 opacity-70" />;
    case 'Article': return <FileText className="w-3 h-3 mr-1.5 flex-shrink-0 opacity-70" />;
    case 'Tool': return <Wrench className="w-3 h-3 mr-1.5 flex-shrink-0 opacity-70" />;
    case 'External': return <ExternalLink className="w-3 h-3 mr-1.5 flex-shrink-0 opacity-70" />;
    case 'Cheatsheet': return <FileText className="w-3 h-3 mr-1.5 flex-shrink-0 opacity-70" />;
    default: return <LinkIcon className="w-3 h-3 mr-1.5 flex-shrink-0 opacity-70" />;
  }
};

export default function LearningPathsPage() {
  // --- State for Filtering External Paths ---
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [selectedExternalFocus, setSelectedExternalFocus] = useState('all');
  const [activeExternalFilterDimension, setActiveExternalFilterDimension] = useState('provider'); // 'provider' or 'focus'

  // --- Data Definitions ---

  // Updated Curated Paths with More Resources
  const curatedPaths: CuratedLearningPath[] = [
    {
        title: "Cybersecurity Fundamentals Path",
        targetAudience: "Beginner",
        targetRole: "General Foundation",
        icon: GraduationCap,
        description: "Start your cybersecurity journey here. This path covers essential concepts, tools, and practices needed to build a solid foundation.",
        modules: [
            {
                title: "Module 1: Core Concepts",
                description: "Understand basic terminology, the CIA triad, threat actors, and common attack types.",
                resources: [
                    { title: "NIST Glossary of Key Terms", url: "https://csrc.nist.gov/glossary", type: 'Docs' }, 
                    { title: "Understanding the CIA Triad (Article)", url: "https://www.comptia.org/blog/the-cia-triad", type: 'Article' },
                    { title: "OWASP Top 10 Overview", url: "https://owasp.org/www-project-top-ten/", type: 'Docs' },
                    { title: "Common Cyber Attack Vectors (Video)", url: "#", type: 'Video' }, // Placeholder
                    { title: "Intro to Threat Modeling (Article)", url: "https://owasp.org/www-community/Threat_Modeling", type: 'Article' },
                ],
                milestone: "Define CIA Triad and list 3 common threats."
            },
            {
                title: "Module 2: Networking Basics",
                description: "Learn about TCP/IP, DNS, HTTP/S, common ports, and how data travels across networks.",
                resources: [
                    { title: "MDN Web Docs: How the Internet Works", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work", type: 'Docs' },
                    { title: "Wireshark Official User Guide", url: "https://www.wireshark.org/docs/wsug_html_chunked/", type: 'Docs' },
                    { title: "Cloudflare Learning: What is DNS?", url: "https://www.cloudflare.com/learning/dns/what-is-dns/", type: 'Article' },
                    { title: "Professor Messer: TCP/IP Model (Video Series)", url: "#", type: 'Video' }, // Placeholder
                    { title: "TryHackMe: Networking Basics Room", url: "https://tryhackme.com/room/networkingfundamentals", type: 'Lab' },
                ]
            },
            {
                title: "Module 3: Linux Fundamentals",
                description: "Get comfortable with the Linux command line, file systems, permissions, and basic scripting.",
                resources: [
                    { title: "Linux Foundation: Commands Cheatsheet", url: "https://www.linuxfoundation.org/blog/blog/classic-sysadmin-linux-commands-cheat-sheet", type: 'Cheatsheet' },
                    { title: "OverTheWire: Bandit Wargame", url: "https://overthewire.org/wargames/bandit/", type: 'Lab' },
                    { title: "Bash Scripting Guide (Tutorialspoint)", url: "https://www.tutorialspoint.com/bash/index.htm", type: 'Tutorial' },
                    { title: "Linux Journey (Interactive Tutorial)", url: "https://linuxjourney.com/", type: 'Tutorial' },
                    { title: "Ryan's Tutorials: Linux Permissions", url: "https://ryanstutorials.net/linux-tutorial/permissions.php", type: 'Article' },
                ],
                 milestone: "Navigate directories, manage files, and run basic commands."
            },
            {
                title: "Module 4: Introduction to Security Tools",
                description: "Explore common security tools like Nmap, Wireshark, and basic vulnerability scanners.",
                resources: [
                    { title: "Nmap Official Documentation", url: "https://nmap.org/book/man.html", type: 'Docs' }, 
                    { title: "Wireshark Official Documentation", url: "https://www.wireshark.org/docs/", type: 'Docs' },
                    { title: "Metasploit Framework Overview", url: "https://www.metasploit.com/", type: 'Tool' }, // Link to tool site
                    { title: "OpenVAS / Greenbone Vulnerability Management", url: "https://www.greenbone.net/en/community-edition/", type: 'Tool' },
                    { title: "TryHackMe: Nmap Room", url: "https://tryhackme.com/room/furthernmap", type: 'Lab' },
                ]
            },
        ]
    },
    // Add another curated path maybe (e.g., Intro to Web Security)
  ];

  // Expanded External Paths list with more focus tags
  const externalPaths: ExternalPath[] = [
    // TryHackMe
    { name: "TryHackMe Complete Beginner Path", url: "https://tryhackme.com/path/outline/complete-beginner", description: "A comprehensive path for absolute beginners starting their cybersecurity journey.", provider: "TryHackMe", focus: ['Beginner', 'General'] },
    { name: "TryHackMe Pre Security Path", url: "https://tryhackme.com/path/outline/presecurity", description: "Covers foundational security concepts before diving into deeper topics.", provider: "TryHackMe", focus: ['Beginner', 'General'] },
    { name: "TryHackMe Offensive Pentesting", url: "https://tryhackme.com/path/outline/pentesting", description: "Structured learning path focused on offensive penetration testing skills.", provider: "TryHackMe", focus: ['Pentesting', 'Intermediate'] },
    { name: "TryHackMe Red Teaming Path", url: "https://tryhackme.com/path/outline/redteam", description: "Focuses on red teaming techniques, adversary simulation, and advanced attacks.", provider: "TryHackMe", focus: ['Red Teaming', 'Advanced'] },
    { name: "TryHackMe Cyber Defense Path", url: "https://tryhackme.com/path/outline/blueteam", description: "Learn defensive security concepts and tools for blue team roles.", provider: "TryHackMe", focus: ['Blue Team', 'SOC', 'Intermediate'] },
    // Hack The Box
    { name: "Hack The Box Starting Point", url: "https://app.hackthebox.com/starting-point", description: "Guided labs designed for beginners to learn fundamental hacking concepts.", provider: "Hack The Box", focus: ['Beginner', 'Labs'] },
    { name: "Hack The Box Academy Paths", url: "https://academy.hackthebox.com/path/overview", description: "Structured paths covering various roles like Pentester, Bug Bounty Hunter, SOC Analyst.", provider: "Hack The Box", focus: ['Labs', 'Pentesting', 'Bug Bounty', 'SOC', 'Intermediate', 'Advanced'] },
    // Coursera / edX / MOOCs
    { name: "Google Cybersecurity Certificate", url: "https://www.coursera.org/professional-certificates/google-cybersecurity", description: "Professional certificate program covering foundational cybersecurity skills.", provider: "Coursera", focus: ['Beginner', 'General', 'Certification'] },
    { name: "IBM Cybersecurity Analyst Path", url: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst", description: "Professional certificate program for aspiring cybersecurity analysts.", provider: "Coursera", focus: ['Beginner', 'SOC', 'Certification'] },
    { name: "EDX Cybersecurity MicroMasters (RIT)", url: "https://www.edx.org/micromasters/ritx-cybersecurity", description: "MicroMasters program covering cybersecurity fundamentals.", provider: "edX", focus: ['Beginner', 'Intermediate', 'General'] },
     { name: "University of Maryland Cyber MOOC", url: "https://www.coursera.org/specializations/cyber-security", description: "Specialization covering hardware, software, and cryptography.", provider: "Coursera", focus: ['Intermediate', 'General'] },
    // Training Platforms
    { name: "Security Blue Team - SOC Analyst 1", url: "https://securityblue.team/collections/soc-analyst-1", description: "Training focused on foundational skills for a Tier 1 SOC Analyst role.", provider: "Security Blue Team", focus: ['SOC', 'Blue Team', 'Beginner', 'Labs'] },
    { name: "Cybrary Career Paths", url: "https://www.cybrary.it/catalog/career-paths", description: "Role-based learning paths for various cybersecurity careers (SOC, Pentest, Threat Hunter, etc.).", provider: "Cybrary", focus: ['Career', 'SOC', 'Pentesting', 'Threat Hunting'] },
    { name: "Infosec Skills Career Paths", url: "https://www.infosecinstitute.com/skills/career-paths/", description: "Role-based learning paths covering various cybersecurity careers.", provider: "Infosec Institute", focus: ['Career', 'General'] },
    { name: "Pluralsight Security Pathways", url: "https://www.pluralsight.com/paths/security-fundamentals", description: "Learning paths focused on security fundamentals and specific roles.", provider: "Pluralsight", focus: ['General', 'Career'] },
     { name: "TCM Security Academy Courses", url: "https://academy.tcm-sec.com/", description: "Offers practical ethical hacking courses and certification paths.", provider: "TCM Security", focus: ['Pentesting', 'Ethical Hacking', 'Intermediate', 'Certification'] },
     // Labs / Wargames
    { name: "PentesterLab Path (Web Security)", url: "https://pentesterlab.com/", description: "Hands-on labs and exercises focused heavily on web application security.", provider: "PentesterLab", focus: ['Web Security', 'Labs', 'Intermediate', 'Advanced'] },
    { name: "OverTheWire Wargames", url: "https://overthewire.org/wargames/", description: "Series of wargames designed to teach security concepts through challenges.", provider: "OverTheWire", focus: ['Labs', 'Beginner', 'Intermediate', 'Linux'] },
    { name: "PicoCTF Practice Challenges", url: "https://play.picoctf.org/practice", description: "Capture The Flag exercises for practicing various security skills.", provider: "PicoCTF / CMU", focus: ['Labs', 'CTF', 'Beginner', 'Intermediate'] },
    // Vendor Training
    { name: "Microsoft Security Learning Paths", url: "https://learn.microsoft.com/en-us/training/browse/?roles=security-engineer&products=azure%2Cmicrosoft-365", description: "Microsoft Learn paths covering Azure, M365 security, identity, and compliance.", provider: "Microsoft Learn", focus: ['Cloud', 'Microsoft', 'Certification'] },
    { name: "AWS Security Learning Path", url: "https://explore.skillbuilder.aws/learn/public/learning_plan/view/81/security-learning-plan", description: "Learning path focused on AWS security fundamentals and services.", provider: "AWS Skill Builder", focus: ['Cloud', 'AWS', 'Certification'] },
    // Other
    { name: "SANS Cybersecurity Career Roadmap (PDF)", url: "https://www.sans.org/posters/cybersecurity-career-roadmap/", description: "Visual roadmap outlining various cybersecurity roles and recommended SANS training.", provider: "SANS", focus: ['Career', 'General', 'Certification'] },
    { name: "Hacker101 Free Web Security Training", url: "https://www.hacker101.com/", description: "Free web security classes provided by HackerOne, geared towards bug bounty.", provider: "HackerOne", focus: ['Web Security', 'Bug Bounty', 'Beginner'] },
    { name: "DFIR.training Resource Index", url: "https://www.dfir.training/", description: "Website indexing Digital Forensics and Incident Response training resources.", provider: "DFIR.training", focus: ['DFIR', 'Career'] },
    // ADDING NEW RESOURCES:
    {
      name: "Roadmap.sh - Cybersecurity Path",
      url: "https://roadmap.sh/cyber-security",
      description: "Community-driven roadmaps, articles, and resources for developers, including cybersecurity.",
      provider: "Roadmap.sh",
      focus: ['Career', 'General', 'Roadmap']
    },
    {
      name: "Learn Anything - Cybersecurity",
      url: "https://learn-anything.xyz/computer-science/security",
      description: "Interactive mind maps connecting learning resources across various topics, including security.",
      provider: "Learn Anything",
      focus: ['General', 'Roadmap', 'Resource Hub']
    },
  ];

  // --- Filtering Logic for External Paths ---
  const filteredExternalPaths = externalPaths.filter(path =>
    (selectedProvider === 'all' || path.provider === selectedProvider) &&
    (selectedExternalFocus === 'all' || (path.focus && path.focus.includes(selectedExternalFocus)))
  );

  // --- Category Definitions for External Path Filters ---
  // Dynamically generate provider list or keep static?
  const uniqueProviders = ['all', ...Array.from(new Set(externalPaths.map(p => p.provider).sort()))];
  const providerCategories: Category[] = uniqueProviders.map(p => ({
    id: p,
    name: p === 'all' ? 'All Providers' : p,
    icon: p === 'all' ? Globe : Building // Simple icon logic
  }));

  // Define focus categories statically
  const focusCategories: Category[] = [
    { id: 'all', name: 'All Focus Areas', icon: Globe },
    { id: 'Beginner', name: 'Beginner Friendly', icon: GraduationCap },
    { id: 'Intermediate', name: 'Intermediate', icon: Layers },
    { id: 'Advanced', name: 'Advanced', icon: BarChart }, // Reusing
    { id: 'Pentesting', name: 'Penetration Testing', icon: Target },
    { id: 'Web Security', name: 'Web Security', icon: Code }, // Needs import
    { id: 'SOC', name: 'SOC / Blue Team', icon: Shield }, // Reusing
    { id: 'Red Teaming', name: 'Red Teaming', icon: AlertTriangle }, // Reusing
    { id: 'Bug Bounty', name: 'Bug Bounty', icon: Bug }, // Needs import
    { id: 'Labs', name: 'Hands-on Labs', icon: Zap }, // Reusing
    { id: 'Career', name: 'Career / General', icon: Briefcase }, // Needs import
    { id: 'Certification', name: 'Certification Prep', icon: Award }, // Needs import
  ];
  // Need to add imports: Code, Bug, Briefcase, Award

  // --- JSX Start (Will update next) ---
  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section - Updated Description & Theme (Green) */}
      <div className="relative bg-gradient-to-b from-black via-green-900/40 to-gray-950 pt-24 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_55%)] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
              <Route className="w-4 h-4 mr-2" />
              Academy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Learning Paths
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-6">
              Follow curated roadmaps or explore external training paths to guide your cybersecurity skill development journey.
            </p>
            <Link href="/academy" className="text-green-400 hover:text-green-300 flex items-center text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Academy Overview
            </Link>
          </div>
        </div>
      </div>

      {/* --- Curated Learning Paths Section --- */}
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-semibold text-white mb-2 flex items-center">
           <GraduationCap className="w-7 h-7 mr-3 text-green-400" />
           Featured Learning Paths
        </h2>
        <p className="text-gray-400 mb-6">Start with these curated paths designed to guide your learning step-by-step.</p>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8"> {/* Maybe keep curated paths wider */} 
          {curatedPaths.map((path, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors">
              <div className="p-5 bg-gradient-to-r from-gray-900 to-gray-900/80">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-green-900/30 rounded-md mr-3">
                      <path.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-300">
                        {path.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                        {path.targetAudience} {path.targetRole ? `| ${path.targetRole}` : ''}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">{path.description}</p>
              </div>
              
              {/* Modules - Updated Styling */}
              <div className="p-5 space-y-3">
                  {path.modules.map((module, modIndex) => (
                    <div 
                      key={modIndex} 
                      className={`border-l-2 border-green-700/50 pl-4 py-3 rounded-r-md ${modIndex % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/50'}`}>
                        <h4 className="font-semibold text-green-300 text-base mb-1.5">{module.title}</h4>
                        <p className="text-xs text-gray-400 mb-2.5">{module.description}</p>
                        <h5 className="text-xs font-semibold text-gray-300 mb-1.5">Resources:</h5>
                        <ul className="space-y-1.5 mb-2.5">
                           {module.resources.map((res, resIndex) => (
                             <li key={resIndex}>
                                <Link 
                                  href={res.url} 
                                  target={res.url.startsWith('/') ? '_self' : '_blank'} 
                                  rel={res.url.startsWith('/') ? '' : 'noopener noreferrer'} 
                                  className={`inline-flex items-center text-xs ${res.url === '#' ? 'text-gray-500 cursor-not-allowed' : 'text-green-400 hover:text-green-200 hover:underline'}`} 
                                  title={res.url === '#' ? 'Link unavailable' : res.title}
                                  onClick={(e) => { if (res.url === '#') e.preventDefault(); }}
                                >
                                  <ResourceIcon type={res.type} /> 
                                  {res.title}
                                </Link>
                              </li>
                           ))}
                        </ul>
                        {module.milestone && (
                          <div className="mt-2.5 pt-2 border-t border-gray-700/50">
                             <p className="text-xs text-green-200 flex items-center">
                                <ListChecks className="w-3 h-3 mr-1.5 flex-shrink-0" /> 
                                <span className="font-semibold mr-1">Milestone:</span> {module.milestone}
                             </p>
                          </div>
                        )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- External Learning Platforms & Paths Section --- */}
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-semibold text-white mb-2 flex items-center">
           <ExternalLink className="w-7 h-7 mr-3 text-green-400" />
           External Platforms & Paths
        </h2>
        <p className="text-gray-400 mb-6">Explore structured learning paths offered by various external platforms.</p>

        {/* External Path Filters - Single Area Layout */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-sm py-3 z-20 border-b border-gray-800 mb-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Dimension Selector Dropdown */}
            <div className="w-full sm:w-auto sm:min-w-[180px]">
              <label className="text-sm font-medium text-gray-300 block mb-1">Filter by:</label>
              <Select
                value={activeExternalFilterDimension}
                onValueChange={(value: string) => setActiveExternalFilterDimension(value)}
              >
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select filter type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="provider">Provider</SelectItem>
                  <SelectItem value="focus">Focus Area</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Conditionally Rendered Category Filter */}
            <div className="flex-grow w-full">
              <label className="text-sm font-medium text-gray-300 block mb-1">
                Select {activeExternalFilterDimension === 'provider' ? 'Provider' : 'Focus Area'}:
              </label>
              {activeExternalFilterDimension === 'provider' && (
                <CategoryFilter
                  categories={providerCategories}
                  selectedCategory={selectedProvider}
                  setSelectedCategory={setSelectedProvider}
                  accentColor="green"
                />
              )}
              {activeExternalFilterDimension === 'focus' && (
                <CategoryFilter
                  categories={focusCategories}
                  selectedCategory={selectedExternalFocus}
                  setSelectedCategory={setSelectedExternalFocus}
                  accentColor="green"
                />
              )}
            </div>
          </div>
           {/* Add button to clear active dimension filter */}
           {(selectedProvider !== 'all' || selectedExternalFocus !== 'all') && (
             <div className="mt-2 text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (activeExternalFilterDimension === 'provider') setSelectedProvider('all');
                    if (activeExternalFilterDimension === 'focus') setSelectedExternalFocus('all');
                  }}
                  className="text-green-400 hover:text-green-300 hover:bg-green-900/20"
                >
                  <X className="w-3 h-3 mr-1" /> Clear selected {activeExternalFilterDimension} filter
                </Button>
            </div>
            )}
        </div>

        {/* External Path Count */}
        <p className="text-gray-400 text-sm mb-6">
          Showing {filteredExternalPaths.length} external path{filteredExternalPaths.length !== 1 ? 's' : ''}.
          {selectedProvider !== 'all' && 
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-green-900/50 text-green-300 text-xs'>
              Provider: {providerCategories.find(c => c.id === selectedProvider)?.name}
              <button onClick={() => setSelectedProvider('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
          {selectedExternalFocus !== 'all' && 
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-green-900/50 text-green-300 text-xs'>
              Focus: {focusCategories.find(c => c.id === selectedExternalFocus)?.name}
              <button onClick={() => setSelectedExternalFocus('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
        </p>

        {/* External Path List Grid - Updated Tag Styling */}
        {filteredExternalPaths.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExternalPaths.map((path, index) => (
              <a key={index} 
                 href={path.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block group bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-green-500/50 transition-colors h-full flex flex-col">
                 <h3 className="text-lg font-semibold text-white group-hover:text-green-300 mb-1 flex items-center">
                    {path.name}
                    <ExternalLink className="w-4 h-4 ml-auto text-gray-500 group-hover:text-green-400 flex-shrink-0" />
                 </h3>
                  <p className="text-sm font-medium text-gray-400 mb-2">by {path.provider}</p>
                 <p className="text-sm text-gray-300 line-clamp-3 flex-grow mb-3">
                     {path.description}
                 </p>
                 {path.focus && path.focus.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1 pt-2 border-t border-gray-700/50">
                        {path.focus.map((f, i) => (
                            <span key={i} className="text-[0.7rem] bg-green-900/40 text-green-400 px-1.5 py-0.5 rounded"> {/* Smaller text */} 
                                {f}
                            </span>
                        ))}
                    </div>
                 )}
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
            <div className="text-green-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
            <h3 className="text-xl font-medium text-white mb-2">No External Paths Found</h3>
            <p className="text-gray-400 mb-6">Try adjusting the provider or focus filters.</p>
            <Button
              variant="outline"
              onClick={() => { setSelectedProvider('all'); setSelectedExternalFocus('all'); }}
              className="text-green-400 border-green-600 hover:bg-green-900/30 hover:text-green-300"
            >
              <X className="w-4 h-4 mr-2" /> Clear Filters
            </Button>
          </div>
        )}
      </div>

    </div>
  );
} 