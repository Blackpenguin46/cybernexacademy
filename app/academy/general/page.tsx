"use client";

import { useState } from 'react';
import { Database, FileText, Server, Shield, Terminal, Code, Layers, BookOpen, Info } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/app/components/SectionHeader';

export default function GeneralResources() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const resources = [
    {
      title: "Cybersecurity Fundamentals Guide",
      description: "A comprehensive guide covering the essential concepts and principles of cybersecurity",
      icon: <Shield className="w-5 h-5 text-neon-blue" />,
      link: "/academy/foundational",
      tags: ["basics", "fundamentals", "concepts", "principles"]
    },
    {
      title: "Security Tools Reference",
      description: "An extensive reference of security tools used by professionals in the field",
      icon: <Terminal className="w-5 h-5 text-neon-blue" />,
      link: "/academy/general/tools",
      tags: ["tools", "software", "reference", "utilities"]
    },
    {
      title: "Cybersecurity Glossary",
      description: "Definitions of common terms and acronyms used in cybersecurity",
      icon: <BookOpen className="w-5 h-5 text-neon-blue" />,
      link: "/academy/general/glossary",
      tags: ["terms", "definitions", "vocabulary", "glossary"]
    },
    {
      title: "Industry Standards & Frameworks",
      description: "Overview of major cybersecurity standards, frameworks and compliance requirements",
      icon: <Layers className="w-5 h-5 text-neon-blue" />,
      link: "/academy/general/standards",
      tags: ["standards", "compliance", "frameworks", "regulations"]
    },
    {
      title: "Threat Intelligence Resources",
      description: "Curated resources for understanding and tracking cyber threats",
      icon: <Database className="w-5 h-5 text-neon-blue" />,
      link: "/academy/general/threat-intel",
      tags: ["threat", "intelligence", "monitoring", "analysis"]
    },
    {
      title: "Career Resources",
      description: "Information about cybersecurity careers, job roles, and skill requirements",
      icon: <FileText className="w-5 h-5 text-neon-blue" />,
      link: "/academy/general/careers",
      tags: ["careers", "jobs", "roles", "skills"]
    },
    {
      title: "Reading Lists",
      description: "Recommended books, research papers, and publications for cybersecurity professionals",
      icon: <BookOpen className="w-5 h-5 text-neon-blue" />,
      link: "/academy/general/reading",
      tags: ["books", "papers", "publications", "reading"]
    },
    {
      title: "Practice Environments",
      description: "Information about labs, CTFs, and other practice environments",
      icon: <Server className="w-5 h-5 text-neon-blue" />,
      link: "/academy/general/practice",
      tags: ["practice", "labs", "CTF", "hands-on"]
    }
  ];

  const filteredResources = resources.filter(resource => {
    const searchLower = searchTerm.toLowerCase();
    return (
      resource.title.toLowerCase().includes(searchLower) ||
      resource.description.toLowerCase().includes(searchLower) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <SectionHeader
        title="General Cybersecurity Resources"
        description="Essential resources for all cybersecurity practitioners. This section contains general resources that are valuable for anyone in the cybersecurity field, regardless of specialization or experience level."
      />

      {/* Search Bar */}
      <div className="mb-8 mt-8">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 px-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white placeholder-gray-400"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredResources.map((resource, index) => (
          <Link 
            href={resource.link} 
            key={index}
            className="bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 hover:border-neon-blue/30 rounded-lg p-6 transition-all duration-300 group"
          >
            <div className="flex items-start">
              <div className="mr-4 bg-gray-800 p-3 rounded-md border border-gray-700 group-hover:border-neon-blue/30 group-hover:bg-neon-blue/5 transition-all">
                {resource.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-white group-hover:text-neon-blue transition-colors">
                  {resource.title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm">
                  {resource.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {resource.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredResources.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No resources match your search criteria.</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-4 text-neon-blue hover:underline"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Resources Note */}
      <div className="mt-16 p-6 border border-gray-700 rounded-lg bg-gray-800/20">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Info className="w-5 h-5 mr-2 text-neon-blue" />
          About These Resources
        </h3>
        <p className="text-gray-300">
          These general resources are designed to provide you with essential reference materials and information regardless of your specific area of focus in cybersecurity. They complement our structured courses and are regularly updated to reflect changes in the cybersecurity landscape.
        </p>
      </div>
    </div>
  );
} 