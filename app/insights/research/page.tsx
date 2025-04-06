"use client"

import React, { useState } from 'react';
import Link from 'next/link'
import {
  FileText,
  ArrowLeft,
  Globe,
  BookOpen,
  Users,
  Cpu,
  BarChart,
  Filter,
  X,
  Search,
  LinkIcon,
  Brain,
  Cloud,
  Shield,
  AlertTriangle,
  Database,
  Wrench,
  CalendarDays,
  Presentation,
  TrendingUp,
  Zap
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Interface for Category (for filters)
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Interface for Research Report
interface ResearchReport {
  title: string;
  source: string; // Organization or Author(s)
  year: number;
  type: 'Annual Report' | 'White Paper' | 'Survey' | 'Academic Study' | 'Technical Report' | 'Conference Paper';
  topic: 'Threat Landscape' | 'AI/ML Security' | 'Cloud Security' | 'Risk Management' | 'Cryptography' | 'Data Privacy' | 'Incident Response' | 'General Trends';
  summary: string;
  url: string;
  isPdf: boolean;
}

export default function ResearchReportsPage() {
  // State for Filters
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [activeResearchFilterDimension, setActiveResearchFilterDimension] = useState('type');

  // --- Sample Research & Reports Data ---
  const researchReports: ResearchReport[] = [
    {
      title: "Verizon Data Breach Investigations Report (DBIR)",
      source: "Verizon Enterprise",
      year: 2023, // Example year, update annually
      type: "Annual Report",
      topic: "Threat Landscape",
      summary: "Comprehensive annual report analyzing breach patterns, threat actors, and industry trends based on real-world incident data.",
      url: "https://www.verizon.com/business/resources/reports/dbir/",
      isPdf: false // Usually a landing page
    },
    {
      title: "NIST SP 800-53 Rev. 5: Security and Privacy Controls",
      source: "NIST",
      year: 2020,
      type: "Technical Report",
      topic: "Risk Management",
      summary: "Catalog of security and privacy controls for information systems and organizations to protect organizational operations and assets.",
      url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
      isPdf: true // Often available as PDF
    },
    {
      title: "The State of Ransomware 2023",
      source: "Sophos",
      year: 2023,
      type: "Survey",
      topic: "Threat Landscape",
      summary: "Survey report detailing ransomware attack rates, recovery costs, and preventative measures based on responses from organizations worldwide.",
      url: "https://news.sophos.com/en-us/2023/05/17/state-of-ransomware-report-2023/",
      isPdf: false // Landing page usually
    },
    {
        title: "AI and the Future of Cybersecurity",
        source: "Center for Security and Emerging Technology (CSET)",
        year: 2022,
        type: "White Paper",
        topic: "AI/ML Security",
        summary: "Analysis of the dual-use nature of AI in cybersecurity, covering both defensive applications and potential offensive uses.",
        url: "https://cset.georgetown.edu/publication/ai-and-the-future-of-cybersecurity/",
        isPdf: true
    },
    {
        title: "Formal Analysis of Diffie-Hellman Key Exchange Protocols",
        source: "Stanford University Security Lab (Hypothetical)",
        year: 2021,
        type: "Academic Study",
        topic: "Cryptography",
        summary: "A rigorous mathematical analysis of the security properties and potential vulnerabilities in various Diffie-Hellman protocol implementations.",
        url: "#", // Placeholder
        isPdf: true
    },
    {
        title: "Cloud Security Threat Report",
        source: "Unit 42 (Palo Alto Networks)",
        year: 2023,
        type: "Technical Report",
        topic: "Cloud Security",
        summary: "Technical findings on prevalent threats targeting cloud infrastructure, including misconfigurations, credential theft, and malware.",
        url: "https://www.paloaltonetworks.com/unit42/cloud-threat-reports",
        isPdf: false // Usually landing page for multiple reports
    },
     {
        title: "SANS Security Awareness Report",
        source: "SANS Institute",
        year: 2023,
        type: "Survey",
        topic: "General Trends", // Could also be Risk Management
        summary: "Examines how organizations manage human risk, maturity levels of security awareness programs, and their impact.",
        url: "https://www.sans.org/security-awareness-training/reports/security-awareness-report",
        isPdf: false // Landing page
    },
    {
        title: "Navigating GDPR Compliance: A Practical Guide",
        source: "CyberSecure Consulting (Hypothetical)",
        year: 2022,
        type: "White Paper",
        topic: "Data Privacy",
        summary: "Actionable guidance for organizations on implementing GDPR requirements, covering data mapping, consent, and breach notification.",
        url: "#", // Placeholder
        isPdf: true
    }
  ];

  // --- Filtering Logic ---
  const filteredReports = researchReports.filter(report =>
    (selectedType === 'all' || report.type === selectedType) &&
    (selectedTopic === 'all' || report.topic === selectedTopic)
  );

  // --- Category Definitions for Filters ---
  const reportTypeCategories: Category[] = [
    { id: 'all', name: 'All Types', icon: Globe },
    { id: 'Annual Report', name: 'Annual Reports', icon: CalendarDays }, // Needs import
    { id: 'White Paper', name: 'White Papers', icon: FileText },
    { id: 'Survey', name: 'Surveys', icon: Users },
    { id: 'Academic Study', name: 'Academic Studies', icon: BookOpen },
    { id: 'Technical Report', name: 'Technical Reports', icon: Wrench }, // Reusing Wrench
    { id: 'Conference Paper', name: 'Conference Papers', icon: Presentation }, // Needs import
  ];
  // Add imports for CalendarDays, Presentation

  const reportTopicCategories: Category[] = [
    { id: 'all', name: 'All Topics', icon: Globe },
    { id: 'Threat Landscape', name: 'Threat Landscape', icon: AlertTriangle },
    { id: 'AI/ML Security', name: 'AI/ML Security', icon: Brain },
    { id: 'Cloud Security', name: 'Cloud Security', icon: Cloud },
    { id: 'Risk Management', name: 'Risk Management', icon: Shield },
    { id: 'Cryptography', name: 'Cryptography', icon: Cpu }, // Reusing Cpu
    { id: 'Data Privacy', name: 'Data Privacy', icon: Database },
    { id: 'Incident Response', name: 'Incident Response', icon: Zap }, // Reusing Zap
    { id: 'General Trends', name: 'General Trends', icon: TrendingUp }, // Needs import
  ];
   // Add import for TrendingUp

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section - Updated description & Theme (Blue) */}
      <div className="relative bg-gradient-to-b from-black via-blue-900/40 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_55%)] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Blue Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Resource Hub
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Research & Reports
            </h1>
            {/* Updated description */}
            <p className="text-xl text-gray-400 max-w-3xl">
              Access comprehensive studies, white papers, surveys, and technical reports providing data-driven cybersecurity insights.
            </p>
             {/* Back to Insights Link */}
             <Link href="/insights" className="mt-6 text-blue-400 hover:text-blue-300 flex items-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Insights Hub
             </Link>
          </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="container mx-auto px-4 mt-12">
        {/* Filters - Updated Layout */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-sm py-3 z-20 border-b border-gray-800 mb-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Dimension Selector Dropdown */}
            <div className="w-full sm:w-auto sm:min-w-[180px]">
              <label className="text-sm font-medium text-gray-300 block mb-1">Filter by:</label>
              <Select
                value={activeResearchFilterDimension}
                onValueChange={(value: string) => setActiveResearchFilterDimension(value)}
              >
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select filter type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="type">Report Type</SelectItem>
                  <SelectItem value="topic">Topic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Conditionally Rendered Category Filter */}
            <div className="flex-grow w-full">
              <label className="text-sm font-medium text-gray-300 block mb-1">
                Select {activeResearchFilterDimension === 'type' ? 'Type' : 'Topic'}:
              </label>
              {activeResearchFilterDimension === 'type' && (
                <CategoryFilter
                  categories={reportTypeCategories}
                  selectedCategory={selectedType}
                  setSelectedCategory={setSelectedType}
                  accentColor="blue"
                />
              )}
              {activeResearchFilterDimension === 'topic' && (
                <CategoryFilter
                  categories={reportTopicCategories}
                  selectedCategory={selectedTopic}
                  setSelectedCategory={setSelectedTopic}
                  accentColor="blue"
                />
              )}
            </div>
          </div>
          {/* Add button to clear active dimension filter */}
          {(selectedType !== 'all' || selectedTopic !== 'all') && (
             <div className="mt-2 text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (activeResearchFilterDimension === 'type') setSelectedType('all');
                    if (activeResearchFilterDimension === 'topic') setSelectedTopic('all');
                  }}
                  className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
                >
                  <X className="w-3 h-3 mr-1" /> Clear selected {activeResearchFilterDimension} filter
                </Button>
            </div>
            )}
        </div>

        {/* Report Count - Updated display */}
        <p className="text-gray-400 text-sm mb-6">
          Showing {filteredReports.length} report{filteredReports.length !== 1 ? 's' : ''}.
          {selectedType !== 'all' &&
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-blue-900/50 text-blue-300 text-xs'>
              Type: {reportTypeCategories.find(c => c.id === selectedType)?.name}
              <button onClick={() => setSelectedType('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
          {selectedTopic !== 'all' &&
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-blue-900/50 text-blue-300 text-xs'>
              Topic: {reportTopicCategories.find(c => c.id === selectedTopic)?.name}
              <button onClick={() => setSelectedTopic('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
        </p>

        {/* Report List Grid */}
        {filteredReports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-blue-500/50 transition-colors">
                 {/* Card Header */}
                 <div className="mb-3">
                     <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300">
                        {report.title}
                     </h3>
                      <div className="text-xs text-gray-400 flex items-center flex-wrap gap-x-3 gap-y-1 mb-2">
                          <span><Users className="w-3 h-3 inline mr-1 opacity-70" /> {report.source}</span>
                          <span><CalendarDays className="w-3 h-3 inline mr-1 opacity-70" /> {report.year}</span>
                      </div>
                     <div className="flex flex-wrap gap-1.5">
                         <span className="text-xs bg-blue-900/40 text-blue-400 px-2 py-0.5 rounded">
                             {report.type}
                         </span>
                          <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-0.5 rounded">
                              {report.topic}
                          </span>
                     </div>
                 </div>

                {/* Summary */}
                <p className="text-sm text-gray-300 mb-4 line-clamp-4 flex-grow">
                    {report.summary}
                </p>

                 {/* Link Footer */}
                 <div className="mt-auto pt-2 border-t border-gray-700/50">
                    <a 
                      href={report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm font-medium ${report.url === '#' ? 'text-gray-500 cursor-not-allowed' : 'text-blue-400 hover:text-blue-300 hover:underline'}`}
                      title={report.url === '#' ? 'Link not available' : 'Open Report/Source'}
                      onClick={(e) => { if (report.url === '#') e.preventDefault(); }}
                    >
                       {report.isPdf ? (
                           <FileText className="w-4 h-4 mr-1.5 flex-shrink-0" />
                       ) : (
                           <LinkIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
                       )}
                       {report.url === '#' ? 'Link Unavailable' : (report.isPdf ? 'View PDF Report' : 'Visit Source')}
                    </a>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
            <div className="text-blue-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
            <h3 className="text-xl font-medium text-white mb-2">No Reports Found</h3>
            <p className="text-gray-400 mb-6">Try adjusting the type or topic filters.</p>
            <Button
              variant="outline"
              onClick={() => { setSelectedType('all'); setSelectedTopic('all'); }}
              className="text-blue-400 border-blue-600 hover:bg-blue-900/30 hover:text-blue-300"
            >
              <X className="w-4 h-4 mr-2" /> Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 