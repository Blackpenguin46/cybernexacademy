"use client";

import { useState } from 'react';
import { Route, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain, Map, Filter, X, Globe, Lightbulb } from "lucide-react"
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

export default function RoadmapsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Define categories for filtering
  const categories: Category[] = [
    { id: 'all', name: 'All', icon: Map },
    { id: 'penetration-testing', name: 'Penetration Testing', icon: Target },
    { id: 'incident-response', name: 'Incident Response', icon: Flame },
    { id: 'security-engineering', name: 'Security Engineering', icon: Shield },
    { id: 'cloud-security', name: 'Cloud Security', icon: Server },
    { id: 'application-security', name: 'Application Security', icon: Code },
    { id: 'governance', name: 'Governance & Risk', icon: CheckCircle2 },
    { id: 'general', name: 'General Learning', icon: Lightbulb }
  ];

  const resourceCategories: ResourceCategory[] = [
    {
      title: "Career Path Roadmaps",
      icon: Route,
      resources: [
        {
          name: "Penetration Testing Path",
          description: "Comprehensive guide to becoming a penetration tester",
          url: "https://www.hackthebox.com/blog/penetration-testing-career-path",
          type: "Career Guide",
          free: true,
          category: "penetration-testing"
        },
        {
          name: "Incident Response Path",
          description: "Career roadmap for incident response and digital forensics",
          url: "https://www.sans.org/cyber-security-career-roadmap",
          type: "Career Guide",
          free: true,
          category: "incident-response"
        },
        {
          name: "Security Engineering Path",
          description: "Guide to becoming a security engineer with focus on infrastructure",
          url: "https://tisiphone.net/2015/10/12/starting-an-infosec-career-the-megamix-chapters-1-3/",
          type: "Career Guide",
          free: true,
          category: "security-engineering"
        },
        {
          name: "Cloud Security Path",
          description: "Roadmap for specializing in cloud security across major platforms",
          url: "https://pauljerimy.com/security-certification-roadmap/",
          type: "Career Guide",
          free: true,
          category: "cloud-security"
        },
        {
          name: "roadmap.sh",
          description: "Community-driven roadmaps, articles and resources for developers including cybersecurity paths",
          url: "https://roadmap.sh/cyber-security",
          type: "Interactive Guide",
          free: true,
          category: "general"
        }
      ]
    },
    {
      title: "Skill Development Roadmaps",
      icon: Brain,
      resources: [
        {
          name: "Web Application Security",
          description: "Progressive learning path for web application security testing",
          url: "https://github.com/OWASP/wstg",
          type: "Skill Guide",
          free: true,
          category: "application-security"
        },
        {
          name: "Network Security",
          description: "Comprehensive roadmap for network security skills",
          url: "https://www.cyberseek.org/pathway.html",
          type: "Skill Guide",
          free: true,
          category: "security-engineering"
        },
        {
          name: "Security Governance",
          description: "Path to understanding security frameworks and compliance",
          url: "https://www.nist.gov/cyberframework",
          type: "Skill Guide",
          free: true,
          category: "governance"
        }
      ]
    },
    {
      title: "Certification Roadmaps",
      icon: Shield,
      resources: [
        {
          name: "CompTIA Certification Pathway",
          description: "Progressive certification path from Security+ to CySA+ to CASP+",
          url: "https://www.comptia.org/certifications/which-certification/stackable-certifications",
          type: "Certification Path"
        },
        {
          name: "Offensive Security Path",
          description: "Progressive path through OffSec certifications",
          url: "https://www.offensive-security.com/courses-and-certifications",
          type: "Certification Path"
        },
        {
          name: "(ISC)² Certification Path",
          description: "Path to CISSP and advanced certifications",
          url: "https://www.isc2.org/Certifications/Career-Pathway",
          type: "Certification Path"
        },
        {
          name: "GIAC Certification Roadmap",
          description: "Comprehensive GIAC certification progression",
          url: "https://www.giac.org/certifications/get-certified/roadmap",
          type: "Certification Path"
        }
      ]
    },
    {
      title: "Skill Development Paths",
      icon: Target,
      resources: [
        {
          name: "TryHackMe Learning Paths",
          description: "Structured paths for different security roles",
          url: "https://tryhackme.com/paths",
          type: "Learning Path",
          free: false
        },
        {
          name: "HackTheBox Academy Paths",
          description: "Role-based learning paths with hands-on labs",
          url: "https://academy.hackthebox.com/paths",
          type: "Learning Path",
          free: false
        },
        {
          name: "INE Security Paths",
          description: "Comprehensive cybersecurity training paths",
          url: "https://ine.com/learning/paths",
          type: "Learning Path",
          free: false
        }
      ]
    },
    {
      title: "Specialization Tracks",
      icon: Brain,
      resources: [
        {
          name: "Cloud Security Path",
          description: "Guide to cloud security specialization",
          url: "https://cloudacademy.com/learning-paths/cloud-security-engineer",
          type: "Specialization",
          free: false
        },
        {
          name: "Malware Analysis Track",
          description: "Path to becoming a malware analyst",
          url: "https://www.sans.org/cyber-security-careers/malware-analyst",
          type: "Specialization",
          free: true
        },
        {
          name: "DevSecOps Path",
          description: "Guide to DevSecOps career progression",
          url: "https://www.practical-devsecops.com/devsecops-university",
          type: "Specialization",
          free: false
        }
      ]
    },
    {
      title: "Industry Frameworks",
      icon: Map,
      resources: [
        {
          name: "NICE Cybersecurity Framework",
          description: "National Initiative for Cybersecurity Education framework",
          url: "https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center",
          type: "Framework",
          free: true
        },
        {
          name: "MITRE ATT&CK Framework",
          description: "Globally-accessible knowledge base of adversary tactics",
          url: "https://attack.mitre.org",
          type: "Framework",
          free: true
        },
        {
          name: "CIS Controls",
          description: "Prioritized set of actions to protect organizations",
          url: "https://www.cisecurity.org/controls",
          type: "Framework",
          free: true
        }
      ]
    }
  ]

  // Add a new section for Learning Platforms
  const updatedResourceCategories = [
    ...resourceCategories,
    {
      title: "Learning Platforms",
      icon: Globe,
      resources: [
        {
          name: "Learn Anything",
          description: "Search-engine and community-curated knowledge graphs for learning any topic including cybersecurity",
          url: "https://learn-anything.xyz/",
          type: "Learning Platform",
          free: true,
          category: "general"
        }
      ]
    }
  ];

  // Update resourceCategories to use the new array with added section
  const allResourceCategories = updatedResourceCategories;

  // Flatten all resources into a single array
  const allResources = allResourceCategories.flatMap(category => 
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
  const filteredCategories = allResourceCategories
    .filter(section => filteredResourcesBySection[section.title]?.length > 0)
    .map(section => ({
      ...section,
      resources: filteredResourcesBySection[section.title] || []
    }));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Cybersecurity Career Roadmaps"
          description="Structured learning paths to guide your cybersecurity career journey"
          icon={<Map className="h-10 w-10 text-blue-500" />}
        />

        {/* Add Category Filter */}
        <div className="mb-8">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            accentColor="blue"
          />
        </div>

        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <category.icon className="h-6 w-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              <div className="grid gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <div key={resourceIndex} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium px-2 py-1 rounded bg-blue-900/50 text-blue-400 border border-blue-800/50">
                            {resource.type}
                          </span>
                          {hasFree(resource) && resource.free && (
                            <span className="text-sm font-medium px-2 py-1 rounded bg-green-900/50 text-green-400 border border-green-800/50">
                              Free
                            </span>
                          )}
                          {resource.category && (
                            <span className="text-sm font-medium px-2 py-1 rounded bg-purple-900/50 text-purple-400 border border-purple-800/50">
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
            <h3 className="text-xl font-medium text-white mb-2">No roadmaps match your filter</h3>
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
          <h2 className="text-2xl font-bold mb-4 text-white">How to Use These Roadmaps</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium">Assess your current skills</p>
                <p className="text-gray-400">Identify your starting point on the roadmap based on your existing knowledge.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium">Set clear goals</p>
                <p className="text-gray-400">Determine which career path aligns with your interests and career objectives.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium">Create a learning plan</p>
                <p className="text-gray-400">Break down the roadmap into manageable milestones with realistic timeframes.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium">Track your progress</p>
                <p className="text-gray-400">Regularly review your advancement and adjust your learning plan as needed.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 