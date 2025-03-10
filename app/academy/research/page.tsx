"use client";

import { useState } from 'react';
import { Microscope, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain, BookOpen, Laptop, Filter, X, FileText, Database, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '../../components/CategoryFilter'
import SectionHeader from '../../components/SectionHeader'

interface Resource {
  name: string
  description: string
  url: string
  type: string
  category?: string
}

interface ResourceWithFree extends Resource {
  free: boolean
}

interface ResourceWithAuthor extends Resource {
  author: string
}

interface ResourceCategory {
  title: string
  icon: any
  resources: (Resource | ResourceWithFree | ResourceWithAuthor)[]
}

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

function hasAuthor(resource: Resource | ResourceWithFree | ResourceWithAuthor): resource is ResourceWithAuthor {
  return 'author' in resource;
}

function hasFree(resource: Resource | ResourceWithFree | ResourceWithAuthor): resource is ResourceWithFree {
  return 'free' in resource;
}

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Define categories for filtering
  const categories: Category[] = [
    { id: 'all', name: 'All', icon: Microscope },
    { id: 'academic', name: 'Academic', icon: BookOpen },
    { id: 'industry', name: 'Industry', icon: FileText },
    { id: 'vulnerability', name: 'Vulnerability', icon: Shield },
    { id: 'threat-intel', name: 'Threat Intelligence', icon: Target },
    { id: 'tools', name: 'Tools & Resources', icon: Terminal },
    { id: 'datasets', name: 'Datasets', icon: Database }
  ];

  const resourceCategories: ResourceCategory[] = [
    {
      title: "Academic Research Papers",
      icon: BookOpen,
      resources: [
        {
          name: "IEEE Security & Privacy",
          description: "Leading academic journal for security research",
          url: "https://www.computer.org/csdl/magazine/sp",
          type: "Journal",
          free: false,
          category: "academic"
        },
        {
          name: "USENIX Security Symposium",
          description: "Premier venue for security research presentations",
          url: "https://www.usenix.org/conference/usenixsecurity23",
          type: "Conference",
          free: false,
          category: "academic"
        },
        {
          name: "ACM CCS",
          description: "ACM Conference on Computer and Communications Security",
          url: "https://www.sigsac.org/ccs/CCS2023/",
          type: "Conference",
          free: false,
          category: "academic"
        },
        {
          name: "arXiv Cryptography and Security",
          description: "Open access archive of security research papers",
          url: "https://arxiv.org/list/cs.CR/recent",
          type: "Repository",
          free: true,
          category: "academic"
        }
      ]
    },
    {
      title: "Industry Research Reports",
      icon: FileText,
      resources: [
        {
          name: "Google Project Zero",
          description: "Vulnerability research from Google's security team",
          url: "https://googleprojectzero.blogspot.com/",
          type: "Blog",
          free: true,
          category: "vulnerability"
        },
        {
          name: "Microsoft Security Research",
          description: "Research from Microsoft's security teams",
          url: "https://www.microsoft.com/en-us/security/blog/topic/research/",
          type: "Blog",
          free: true,
          category: "industry"
        },
        {
          name: "Mandiant Threat Intelligence",
          description: "Reports on advanced threat actors and campaigns",
          url: "https://www.mandiant.com/resources",
          type: "Reports",
          free: false,
          category: "threat-intel"
        },
        {
          name: "SANS Reading Room",
          description: "Research papers from SANS Institute",
          url: "https://www.sans.org/reading-room/",
          type: "Repository",
          free: true,
          category: "industry"
        }
      ]
    },
    {
      title: "Research Tools & Resources",
      icon: Terminal,
      resources: [
        {
          name: "VirusTotal",
          description: "Analyze suspicious files and URLs",
          url: "https://www.virustotal.com/",
          type: "Tool",
          free: true,
          category: "tools"
        },
        {
          name: "MITRE ATT&CK",
          description: "Knowledge base of adversary tactics and techniques",
          url: "https://attack.mitre.org/",
          type: "Framework",
          free: true,
          category: "threat-intel"
        },
        {
          name: "Shodan",
          description: "Search engine for Internet-connected devices",
          url: "https://www.shodan.io/",
          type: "Tool",
          free: false,
          category: "tools"
        },
        {
          name: "CVE Details",
          description: "Database of security vulnerabilities",
          url: "https://www.cvedetails.com/",
          type: "Database",
          free: true,
          category: "vulnerability"
        }
      ]
    },
    {
      title: "Research Datasets",
      icon: Database,
      resources: [
        {
          name: "SecRepo",
          description: "Samples of security related data",
          url: "https://www.secrepo.com/",
          type: "Dataset",
          free: true,
          category: "datasets"
        },
        {
          name: "UNSW-NB15",
          description: "Network traffic dataset for intrusion detection",
          url: "https://research.unsw.edu.au/projects/unsw-nb15-dataset",
          type: "Dataset",
          free: true,
          category: "datasets"
        },
        {
          name: "Malware Traffic Analysis",
          description: "Samples of malicious network traffic",
          url: "https://www.malware-traffic-analysis.net/",
          type: "Dataset",
          free: true,
          category: "datasets"
        }
      ]
    }
  ];

  // Flatten all resources into a single array
  const allResources = resourceCategories.flatMap(category => 
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
    const sectionTitle = (resource as any).sectionTitle;
    if (sectionTitle) {
      if (!acc[sectionTitle]) {
        acc[sectionTitle] = [];
      }
      acc[sectionTitle].push(resource);
    }
    return acc;
  }, {});

  // Create filtered sections that match the original structure
  const filteredCategories = resourceCategories
    .filter(section => filteredResourcesBySection[section.title]?.length > 0)
    .map(section => ({
      ...section,
      resources: filteredResourcesBySection[section.title] || []
    }));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Cybersecurity Research"
          description="Explore academic papers, industry reports, and research tools in cybersecurity"
          icon={<Microscope className="h-10 w-10 text-purple-500" />}
        />

        {/* Add Category Filter */}
        <div className="mb-8">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            accentColor="purple"
          />
        </div>

        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <category.icon className="h-6 w-6 text-purple-500" />
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              <div className="grid gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <div key={resourceIndex} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium px-2 py-1 rounded bg-purple-900/50 text-purple-400 border border-purple-800/50">
                            {resource.type}
                          </span>
                          {hasFree(resource) && (
                            <span className={`text-sm font-medium px-2 py-1 rounded ${resource.free ? 'bg-green-900/50 text-green-400 border border-green-800/50' : 'bg-red-900/50 text-red-400 border border-red-800/50'}`}>
                              {resource.free ? 'Free' : 'Paid'}
                            </span>
                          )}
                          {resource.category && (
                            <span className="text-sm font-medium px-2 py-1 rounded bg-blue-900/50 text-blue-400 border border-blue-800/50">
                              {categories.find(cat => cat.id === resource.category)?.name || resource.category}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{resource.name}</h3>
                        <p className="text-gray-400 mb-4">{resource.description}</p>
                        {hasAuthor(resource) && (
                          <div className="text-gray-500 mb-4">Author: {resource.author}</div>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <Button asChild>
                          <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            View Resource
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
            <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No research resources match your filter</h3>
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
          <h2 className="text-2xl font-bold mb-4 text-white">Research Tips</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-purple-500 mt-1" />
              <div>
                <p className="text-white font-medium">Stay current with new publications</p>
                <p className="text-gray-400">Subscribe to security journals and conference proceedings to keep up with the latest research.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-purple-500 mt-1" />
              <div>
                <p className="text-white font-medium">Apply research to practical scenarios</p>
                <p className="text-gray-400">Look for ways to implement research findings in your security practices and tools.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-purple-500 mt-1" />
              <div>
                <p className="text-white font-medium">Contribute to open research</p>
                <p className="text-gray-400">Consider sharing your own findings with the community through blogs or conference submissions.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 