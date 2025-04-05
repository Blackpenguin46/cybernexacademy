"use client";

import React, { useState } from 'react'
import { Award, Shield, Server, Code, Database, Cloud, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import CategoryFilter from '../../components/CategoryFilter'

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Define categories for filtering
const categories: Category[] = [
  { id: 'all', name: 'All', icon: Award },
  { id: 'essential', name: 'Essential', icon: Shield },
  { id: 'network', name: 'Network Security', icon: Server },
  { id: 'penetration', name: 'Penetration Testing', icon: Code },
  { id: 'forensics', name: 'Digital Forensics', icon: Database },
  { id: 'cloud', name: 'Cloud Security', icon: Cloud }
];

const certificationPaths = [
  {
    title: 'Entry Level Certifications',
    description: 'Start your cybersecurity journey with these foundational certifications.',
    resources: [
      {
        title: 'CompTIA Security+',
        description: 'Foundational IT security certification covering network security, cryptography, and security concepts.',
        link: 'https://www.comptia.org/certifications/security',
        category: 'essential',
        icon: '/images/comptia-icon.png',
        isExternal: true,
      },
      {
        title: 'GIAC Security Essentials (GSEC)',
        description: 'Proves mastery of information security beyond simple terminology and concepts.',
        link: 'https://www.giac.org/certification/security-essentials-gsec',
        category: 'essential',
        icon: '/images/giac-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Intermediate Certifications',
    description: 'Advance your career with these specialized security certifications.',
    resources: [
      {
        title: 'CEH (Certified Ethical Hacker)',
        description: 'Learn to think like a hacker and conduct controlled penetration tests.',
        link: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
        category: 'penetration',
        icon: '/images/ceh-icon.png',
        isExternal: true,
      },
      {
        title: 'CCNA Security',
        description: 'Cisco certification focusing on network security infrastructure.',
        link: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html',
        category: 'network',
        icon: '/images/cisco-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Advanced Certifications',
    description: 'Demonstrate expert-level knowledge with these advanced certifications.',
    resources: [
      {
        title: 'CISSP (Certified Information Systems Security Professional)',
        description: 'Globally recognized certification for security professionals with at least 5 years of experience.',
        link: 'https://www.isc2.org/Certifications/CISSP',
        category: 'essential',
        icon: '/images/isc2-icon.png',
        isExternal: true,
      },
      {
        title: 'OSCP (Offensive Security Certified Professional)',
        description: 'Hands-on penetration testing certification requiring passing a 24-hour practical exam.',
        link: 'https://www.offensive-security.com/pwk-oscp/',
        category: 'penetration',
        icon: '/images/offensive-security-icon.png',
        isExternal: true,
      },
      {
        title: 'GIAC Certified Forensic Analyst (GCFA)',
        description: 'Advanced certification for professionals conducting formal incident investigations.',
        link: 'https://www.giac.org/certification/certified-forensic-analyst-gcfa',
        category: 'forensics',
        icon: '/images/giac-icon.png',
        isExternal: true,
      },
      {
        title: 'AWS Certified Security - Specialty',
        description: 'Validates expertise in AWS security services, tools, and best practices.',
        link: 'https://aws.amazon.com/certification/certified-security-specialty/',
        category: 'cloud',
        icon: '/images/aws-icon.png',
        isExternal: true,
      },
    ],
  },
];

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Flatten all resources into a single array
  const allResources = certificationPaths.flatMap(category => 
    category.resources.map(resource => ({
      ...resource,
      sectionTitle: category.title
    }))
  );

  // Filter resources based on selected category
  const filteredResources = selectedCategory === 'all' 
    ? allResources 
    : allResources.filter(resource => resource.category === selectedCategory);

  // Group filtered resources by their original section titles
  const filteredResourcesBySection = filteredResources.reduce<Record<string, any[]>>((acc, resource) => {
    const sectionTitle = resource.sectionTitle;
    if (sectionTitle) {
      if (!acc[sectionTitle]) {
        acc[sectionTitle] = [];
      }
      acc[sectionTitle].push(resource);
    }
    return acc;
  }, {});

  // Create filtered sections that match the original structure
  const filteredSections = certificationPaths
    .filter(section => filteredResourcesBySection[section.title]?.length > 0)
    .map(section => ({
      ...section,
      resources: filteredResourcesBySection[section.title] || []
    }));

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[40vh] bg-gradient-to-b from-blue-500/20 via-blue-900/10 to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <Award className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Professional Certifications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cybersecurity Certifications</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Explore industry-recognized certifications to validate your skills and advance your career in cybersecurity.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            accentColor="blue"
          />
        </div>

        {filteredSections.length > 0 ? (
          <div className="space-y-16">
            {filteredSections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
                  {section.title}
                </h2>
                <p className="text-gray-400 mb-6">{section.description}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {section.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                      <p className="text-gray-400 mb-4">{resource.description}</p>
                      <div className="flex items-center text-sm text-blue-400">
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
            <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No certifications match your filter</h3>
            <p className="text-gray-400 mb-6">Try selecting a different category or clear your filter</p>
            <Button 
              variant="outline" 
              onClick={() => setSelectedCategory('all')}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" /> Clear filters
            </Button>
          </div>
        )}

        {/* Certification Tips */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">Certification Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Shield className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium mb-2">Start with foundational certifications</p>
                <p className="text-gray-400">Build a strong base with entry-level certifications before specializing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Server className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium mb-2">Align with career goals</p>
                <p className="text-gray-400">Choose certifications that match your desired career path and interests.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Code className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium mb-2">Combine theory with practice</p>
                <p className="text-gray-400">Supplement certification studies with hands-on labs and real-world projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 