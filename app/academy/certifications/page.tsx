"use client";

import React, { useState } from 'react'
import SectionHeader from '../../components/SectionHeader'
import ResourceCard from '../../components/ResourceCard'
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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Cybersecurity Certifications"
          description="Explore industry-recognized certifications to validate your skills and advance your career."
          icon={<Award className="h-10 w-10 text-yellow-500" />}
        />

        {/* Add Category Filter */}
        <div className="mb-8">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            accentColor="yellow"
          />
        </div>

        {filteredSections.length > 0 ? (
          filteredSections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
                {section.title}
              </h2>
              <p className="text-gray-400 mb-6">{section.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.resources.map((resource, idx) => (
                  <ResourceCard
                    key={idx}
                    title={resource.title}
                    description={resource.description}
                    link={resource.link}
                    icon={resource.icon}
                    isExternal={resource.isExternal}
                    category={resource.category}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
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

        <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-white">Certification Tips</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Shield className="h-6 w-6 flex-shrink-0 text-yellow-500 mt-1" />
              <div>
                <p className="text-white font-medium">Start with foundational certifications</p>
                <p className="text-gray-400">Build a strong base with entry-level certifications before specializing.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Server className="h-6 w-6 flex-shrink-0 text-yellow-500 mt-1" />
              <div>
                <p className="text-white font-medium">Align certifications with career goals</p>
                <p className="text-gray-400">Choose certifications that match your desired career path and interests.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Code className="h-6 w-6 flex-shrink-0 text-yellow-500 mt-1" />
              <div>
                <p className="text-white font-medium">Combine theory with practical experience</p>
                <p className="text-gray-400">Supplement certification studies with hands-on labs and real-world projects.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 