"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Code, ExternalLink, ArrowLeft, BookOpen, // Base
  Filter, X, Search, Globe, LinkIcon, // Filter
  Network, Terminal, ShieldCheck, FlaskConical, Cloud, Database, Bug, Cpu, Wrench, // Topic Icons
  GraduationCap, Layers, BarChart, // Difficulty Icons
  FileText, PlayCircle, MousePointerClick // Format Icons
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import CategoryFilter from '@/app/components/CategoryFilter';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// --- Interfaces --- 

// Interface for Category (for filters)
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Interface for Tutorial Resource
interface TutorialResource {
  title: string;
  url: string;
  description: string;
  topic: 'Networking' | 'Linux/CLI' | 'Web Security' | 'Pentesting Tools' | 'Scripting' | 'Cloud Security' | 'Forensics' | 'Cryptography' | 'General' | 'Vulnerability Analysis';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  format: 'Article/Blog' | 'Video' | 'Interactive Lab' | 'Documentation' | 'Platform/Course';
  source?: string; // Optional: e.g., OWASP, NIST
}

export default function TutorialsPage() {
  // --- State for Filtering ---
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [activeFilterDimension, setActiveFilterDimension] = useState('topic'); // 'topic' or 'difficulty'

  // --- Sample Tutorial Data ---
  const tutorials: TutorialResource[] = [
    {
      title: "Setting up UFW Firewall on Ubuntu",
      url: "https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands",
      description: "A step-by-step guide to configuring the Uncomplicated Firewall (UFW) on Ubuntu systems.",
      topic: "Linux/CLI",
      difficulty: "Beginner",
      format: "Article/Blog",
      source: "DigitalOcean"
    },
    {
      title: "Introduction to Nmap Scans",
      url: "https://nmap.org/book/man-briefoptions.html",
      description: "Official documentation covering the basic scan types and options for the Nmap network scanner.",
      topic: "Pentesting Tools",
      difficulty: "Beginner",
      format: "Documentation",
      source: "Nmap.org"
    },
    {
      title: "OWASP Juice Shop Hacking Tutorial",
      url: "https://pwning.owasp-juice.shop/part1/introduction.html",
      description: "Walkthrough guide for finding vulnerabilities in the intentionally insecure Juice Shop web application.",
      topic: "Web Security",
      difficulty: "Intermediate",
      format: "Interactive Lab",
      source: "OWASP"
    },
    {
      title: "Python for Cybersecurity: Automating Nmap",
      url: "#", // Placeholder - find a specific video/article
      description: "Learn how to use Python scripting to automate network scanning tasks with Nmap.",
      topic: "Scripting",
      difficulty: "Intermediate",
      format: "Video", // Or Article/Blog
    },
    {
      title: "Wireshark Packet Analysis Basics",
      url: "https://unit42.paloaltonetworks.com/wireshark-tutorial-capturing-packets/",
      description: "Tutorial on capturing and performing basic analysis of network packets using Wireshark.",
      topic: "Networking",
      difficulty: "Beginner",
      format: "Article/Blog",
      source: "Palo Alto Unit 42"
    },
    {
      title: "Exploiting SQL Injection",
      url: "https://portswigger.net/web-security/sql-injection",
      description: "Detailed explanation and labs covering various SQL injection techniques from PortSwigger's Web Security Academy.",
      topic: "Web Security",
      difficulty: "Intermediate",
      format: "Platform/Course",
      source: "PortSwigger"
    },
     {
      title: "Introduction to Metasploit Framework",
      url: "https://www.offensive-security.com/metasploit-unleashed/",
      description: "Free course material from Offensive Security covering the basics of using the Metasploit Framework.",
      topic: "Pentesting Tools",
      difficulty: "Intermediate",
      format: "Platform/Course",
      source: "Offensive Security"
    },
    {
      title: "Linux File Permissions Explained",
      url: "https://linuxhandbook.com/linux-file-permissions/",
      description: "Clear tutorial explaining the concepts behind Linux file permissions (read, write, execute).",
      topic: "Linux/CLI",
      difficulty: "Beginner",
      format: "Article/Blog",
    },
     {
      title: "Setting up Security Groups in AWS",
      url: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",
      description: "Official AWS documentation tutorial on configuring network security groups for EC2 instances.",
      topic: "Cloud Security",
      difficulty: "Intermediate",
      format: "Documentation",
      source: "AWS"
    },
  ];

  // --- Filtering Logic ---
  const filteredTutorials = tutorials.filter(tutorial =>
    (selectedTopic === 'all' || tutorial.topic === selectedTopic) &&
    (selectedDifficulty === 'all' || tutorial.difficulty === selectedDifficulty)
  );

  // --- Category Definitions for Filters ---
  const topicCategories: Category[] = [
    { id: 'all', name: 'All Topics', icon: Globe },
    { id: 'Networking', name: 'Networking', icon: Network },
    { id: 'Linux/CLI', name: 'Linux/CLI', icon: Terminal },
    { id: 'Web Security', name: 'Web Security', icon: Code },
    { id: 'Pentesting Tools', name: 'Pentesting Tools', icon: Wrench },
    { id: 'Scripting', name: 'Scripting', icon: Code }, // Reuse icon
    { id: 'Cloud Security', name: 'Cloud Security', icon: Cloud },
    { id: 'Forensics', name: 'Forensics', icon: FlaskConical },
    { id: 'Cryptography', name: 'Cryptography', icon: Cpu },
    { id: 'Vulnerability Analysis', name: 'Vuln Analysis', icon: Bug },
    { id: 'General', name: 'General Security', icon: ShieldCheck },
  ];

  const difficultyCategories: Category[] = [
    { id: 'all', name: 'All Difficulties', icon: Globe },
    { id: 'Beginner', name: 'Beginner', icon: GraduationCap },
    { id: 'Intermediate', name: 'Intermediate', icon: Layers },
    { id: 'Advanced', name: 'Advanced', icon: BarChart },
  ];

  // Helper to get format icon (can refine this)
  const FormatIcon = ({ format }: { format: TutorialResource['format'] }) => {
    switch (format) {
      case 'Article/Blog': return <FileText className="w-3 h-3 mr-1.5 opacity-80" />;
      case 'Video': return <PlayCircle className="w-3 h-3 mr-1.5 opacity-80" />;
      case 'Interactive Lab': return <FlaskConical className="w-3 h-3 mr-1.5 opacity-80" />;
      case 'Documentation': return <BookOpen className="w-3 h-3 mr-1.5 opacity-80" />;
      case 'Platform/Course': return <GraduationCap className="w-3 h-3 mr-1.5 opacity-80" />;
      default: return <LinkIcon className="w-3 h-3 mr-1.5 opacity-80" />;
    }
  };

  // Helper to get difficulty icon/color (optional visual cue)
   const DifficultyIndicator = ({ difficulty }: { difficulty: TutorialResource['difficulty'] }) => {
      let icon = GraduationCap;
      let color = "text-green-400"; // Beginner
      if (difficulty === 'Intermediate') { icon = Layers; color = "text-yellow-400"; }
      if (difficulty === 'Advanced') { icon = BarChart; color = "text-red-400"; }
      const IconComponent = icon;
      return <IconComponent className={`w-3 h-3 mr-1 ${color}`} />;
  }

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section - Orange Theme */}
      <div className="relative bg-gradient-to-b from-black via-orange-900/40 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),transparent_55%)] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Academy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hands-on Tutorials
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Follow step-by-step guides to learn specific cybersecurity tasks, tools, and techniques.
            </p>
             <Link href="/academy" className="mt-6 text-orange-400 hover:text-orange-300 flex items-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Academy Overview
             </Link>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="container mx-auto px-4 mt-12">

        {/* Filters - Single Area Layout */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-sm py-3 z-20 border-b border-gray-800 mb-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Dimension Selector Dropdown */}
            <div className="w-full sm:w-auto sm:min-w-[180px]">
              <label className="text-sm font-medium text-gray-300 block mb-1">Filter by:</label>
              <Select
                value={activeFilterDimension}
                onValueChange={(value: string) => setActiveFilterDimension(value)}
              >
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select filter type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="topic">Topic</SelectItem>
                  <SelectItem value="difficulty">Difficulty</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Conditionally Rendered Category Filter */}
            <div className="flex-grow w-full">
              <label className="text-sm font-medium text-gray-300 block mb-1">
                Select {activeFilterDimension === 'topic' ? 'Topic' : 'Difficulty'}:
              </label>
              {activeFilterDimension === 'topic' && (
                <CategoryFilter
                  categories={topicCategories}
                  selectedCategory={selectedTopic}
                  setSelectedCategory={setSelectedTopic}
                  accentColor="orange"
                />
              )}
              {activeFilterDimension === 'difficulty' && (
                <CategoryFilter
                  categories={difficultyCategories}
                  selectedCategory={selectedDifficulty}
                  setSelectedCategory={setSelectedDifficulty}
                  accentColor="orange"
                />
              )}
            </div>
          </div>
           {/* Add button to clear active dimension filter */}
           {(selectedTopic !== 'all' || selectedDifficulty !== 'all') && (
             <div className="mt-2 text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (activeFilterDimension === 'topic') setSelectedTopic('all');
                    if (activeFilterDimension === 'difficulty') setSelectedDifficulty('all');
                  }}
                  className="text-orange-400 hover:text-orange-300 hover:bg-orange-900/20"
                >
                  <X className="w-3 h-3 mr-1" /> Clear selected {activeFilterDimension} filter
                </Button>
            </div>
            )}
        </div>

        {/* Tutorial Count */}
        <p className="text-gray-400 text-sm mb-6">
          Showing {filteredTutorials.length} tutorial{filteredTutorials.length !== 1 ? 's' : ''}.
          {selectedTopic !== 'all' &&
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-orange-900/50 text-orange-300 text-xs'>
              Topic: {topicCategories.find(c => c.id === selectedTopic)?.name}
              <button onClick={() => setSelectedTopic('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
          {selectedDifficulty !== 'all' &&
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-orange-900/50 text-orange-300 text-xs'>
              Difficulty: {difficultyCategories.find(c => c.id === selectedDifficulty)?.name}
              <button onClick={() => setSelectedDifficulty('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
        </p>

        {/* Tutorial List Grid */}
        {filteredTutorials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial, index) => {
              // Find the icon component before rendering
              const TopicIcon = topicCategories.find(tc => tc.id === tutorial.topic)?.icon || BookOpen;
              return (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-orange-500/50 transition-colors">
                   {/* Card Header */}
                   <div className="mb-3">
                       <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-300">
                          {tutorial.title}
                       </h3>
                       {/* Tags for Topic, Difficulty, Format */} 
                        <div className="flex flex-wrap items-center gap-1.5 text-xs mb-2">
                            <span className="inline-flex items-center font-medium bg-orange-900/50 text-orange-300 px-2 py-0.5 rounded">
                                <DifficultyIndicator difficulty={tutorial.difficulty} />
                                {tutorial.difficulty}
                            </span>
                            <span className="inline-flex items-center bg-gray-700/70 text-gray-300 px-2 py-0.5 rounded">
                                  <FormatIcon format={tutorial.format} />
                                {tutorial.format}
                            </span>
                             <span className="inline-flex items-center bg-gray-700/70 text-gray-300 px-2 py-0.5 rounded">
                                <TopicIcon className="w-3 h-3 mr-1.5 opacity-80" />
                                {tutorial.topic}
                            </span>
                            {tutorial.source && (
                                <span className="text-gray-500">via {tutorial.source}</span>
                            )}
                       </div>
                   </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mb-4 line-clamp-4 flex-grow">
                      {tutorial.description}
                  </p>

                   {/* Link Button Footer */}
                   <div className="mt-auto pt-3 border-t border-gray-700/50 text-center">
                      <Button 
                         asChild // Use Button styling on the Link
                         disabled={tutorial.url === '#'}
                         className={`w-full ${tutorial.url === '#' ? 'bg-gray-600 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 text-white'}`}
                      >
                         <Link 
                           href={tutorial.url} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           title={tutorial.url === '#' ? 'Link unavailable' : 'Open Tutorial'}
                         >
                            {tutorial.url === '#' ? 'Link Unavailable' : 'View Tutorial'}
                            {tutorial.url !== '#' && <ExternalLink className="w-4 h-4 ml-2" />}
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
            <div className="text-orange-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
            <h3 className="text-xl font-medium text-white mb-2">No Tutorials Found</h3>
            <p className="text-gray-400 mb-6">Try adjusting the topic or difficulty filters.</p>
            <Button
              variant="outline"
              onClick={() => { setSelectedTopic('all'); setSelectedDifficulty('all'); }}
              className="text-orange-400 border-orange-600 hover:bg-orange-900/30 hover:text-orange-300"
            >
              <X className="w-4 h-4 mr-2" /> Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 