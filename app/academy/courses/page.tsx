"use client"

import { useState } from "react"
import { GraduationCap, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain, BookOpen, Laptop, Youtube, Layers } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

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

function hasAuthor(resource: Resource | ResourceWithFree | ResourceWithAuthor): resource is ResourceWithAuthor {
  return 'author' in resource;
}

function hasFree(resource: Resource | ResourceWithFree | ResourceWithAuthor): resource is ResourceWithFree {
  return 'free' in resource;
}

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Categories for filtering
  const filterCategories = [
    { id: 'All', name: 'All Courses', icon: BookOpen },
    { id: 'web_security', name: 'Web Security', icon: Lock },
    { id: 'network_security', name: 'Network Security', icon: Network },
    { id: 'malware', name: 'Malware Analysis', icon: Code },
    { id: 'cloud', name: 'Cloud Security', icon: Server },
    { id: 'incident', name: 'Incident Response', icon: Flame },
    { id: 'specialized', name: 'Specialized', icon: Target },
  ]

  const resourceCategories: ResourceCategory[] = [
    {
      title: "Beginner Cybersecurity Courses",
      icon: Shield,
      resources: [
        {
          name: "Complete Ethical Hacking Bootcamp 2023: Zero to Mastery",
          description: "Comprehensive beginner-friendly ethical hacking course covering cybersecurity fundamentals, penetration testing, and security tools",
          url: "https://www.youtube.com/watch?v=htez3rhhPO8",
          type: "Video Course",
          free: true,
          author: "Zero To Mastery",
          category: "web_security"
        }
      ]
    },
    {
      title: "Web Security Courses",
      icon: Lock,
      resources: [
        {
          name: "Web Security Academy",
          description: "Free, online web security training from PortSwigger",
          url: "https://portswigger.net/web-security",
          type: "Interactive Course",
          free: true,
          category: "web_security"
        },
        {
          name: "OWASP Top 10 Course",
          description: "Learn about the most critical web security risks",
          url: "https://owasp.org/www-project-top-ten",
          type: "Self-paced Course",
          free: true,
          category: "web_security"
        },
        {
          name: "Advanced Web Attacks and Exploitation",
          description: "Advanced web application security course by Offensive Security",
          url: "https://www.offensive-security.com/awae-oswe",
          type: "Certification Course",
          free: false,
          category: "web_security"
        },
        {
          name: "Web Application Penetration Testing",
          description: "Comprehensive web pentesting course by eLearnSecurity",
          url: "https://elearnsecurity.com/product/ewptx-certification",
          type: "Certification Course",
          free: false,
          category: "web_security"
        }
      ]
    },
    {
      title: "Network Security Courses",
      icon: Network,
      resources: [
        {
          name: "Practical Network Penetration Testing",
          description: "Hands-on network security and pentesting course",
          url: "https://www.offensive-security.com/pen300-osep",
          type: "Advanced Course",
          free: false,
          category: "network_security"
        },
        {
          name: "Network Defense Essentials",
          description: "Learn network security fundamentals and defense strategies",
          url: "https://www.sans.org/sec401",
          type: "Professional Course",
          free: false,
          category: "network_security"
        },
        {
          name: "Wireshark University",
          description: "Official Wireshark certification training",
          url: "https://www.wireshark.org/training",
          type: "Technical Course",
          free: false,
          category: "network_security"
        },
        {
          name: "Network Security 101",
          description: "TryHackMe's network security fundamentals path",
          url: "https://tryhackme.com/path/outline/network-fundamentals",
          type: "Interactive Course",
          free: false,
          category: "network_security"
        }
      ]
    },
    {
      title: "Malware Analysis & Reverse Engineering",
      icon: Code,
      resources: [
        {
          name: "Practical Malware Analysis & Triage",
          description: "SANS course on malware analysis fundamentals",
          url: "https://www.sans.org/sec402",
          type: "Professional Course",
          free: false,
          category: "malware"
        },
        {
          name: "Reverse Engineering Malware",
          description: "Advanced malware analysis and reverse engineering",
          url: "https://www.sans.org/sec760",
          type: "Advanced Course",
          free: false,
          category: "malware"
        },
        {
          name: "Binary Analysis Fundamentals",
          description: "HackTheBox Academy's reverse engineering course",
          url: "https://academy.hackthebox.com/course/preview/reverse-engineering",
          type: "Interactive Course",
          free: false,
          category: "malware"
        },
        {
          name: "Malware Analysis for Beginners",
          description: "Learn malware analysis basics with practical labs",
          url: "https://malwareunicorn.org/workshops/re101.html",
          type: "Workshop",
          free: true,
          category: "malware"
        }
      ]
    },
    {
      title: "Cloud Security Courses",
      icon: Server,
      resources: [
        {
          name: "AWS Security Specialty",
          description: "Official AWS cloud security certification course",
          url: "https://aws.amazon.com/certification/security-specialty",
          type: "Certification Course",
          free: false,
          category: "cloud"
        },
        {
          name: "Azure Security Engineer",
          description: "Microsoft's Azure security certification path",
          url: "https://learn.microsoft.com/certifications/azure-security-engineer",
          type: "Certification Course",
          free: false,
          category: "cloud"
        },
        {
          name: "Cloud Security Fundamentals",
          description: "INE's cloud security basics course",
          url: "https://ine.com/learning/paths/cloud-security",
          type: "Video Course",
          free: false,
          category: "cloud"
        },
        {
          name: "Container Security Essentials",
          description: "Learn container and Kubernetes security",
          url: "https://www.practical-devsecops.com/container-security",
          type: "Technical Course",
          free: false,
          category: "cloud"
        }
      ]
    },
    {
      title: "Incident Response & Forensics",
      icon: Flame,
      resources: [
        {
          name: "Digital Forensics Essentials",
          description: "SANS digital forensics and incident response course",
          url: "https://www.sans.org/sec504",
          type: "Professional Course",
          free: false,
          category: "incident"
        },
        {
          name: "Memory Forensics with Volatility",
          description: "Learn memory analysis techniques and tools",
          url: "https://github.com/volatilityfoundation/volatility/wiki",
          type: "Technical Guide",
          free: true,
          category: "incident"
        },
        {
          name: "Advanced Incident Response",
          description: "Enterprise incident response and threat hunting",
          url: "https://www.sans.org/sec508",
          type: "Advanced Course",
          free: false,
          category: "incident"
        },
        {
          name: "Forensics Fundamentals",
          description: "TryHackMe's digital forensics learning path",
          url: "https://tryhackme.com/path/outline/forensics",
          type: "Interactive Course",
          free: false,
          category: "incident"
        }
      ]
    },
    {
      title: "Specialized Security Courses",
      icon: Target,
      resources: [
        {
          name: "Mobile Security Testing",
          description: "Learn mobile application security testing",
          url: "https://mobsf.github.io/docs",
          type: "Technical Guide",
          free: true,
          category: "specialized"
        },
        {
          name: "IoT Security Fundamentals",
          description: "Understanding IoT security challenges and testing",
          url: "https://www.pentesteracademy.com/course?id=49",
          type: "Video Course",
          free: false,
          category: "specialized"
        },
        {
          name: "Car Hacking Course",
          description: "Automotive security testing and research",
          url: "https://carhacking.tools",
          type: "Specialized Course",
          free: false,
          category: "specialized"
        },
        {
          name: "Hardware Security",
          description: "Introduction to hardware security and testing",
          url: "https://www.riscure.com/academy",
          type: "Technical Course",
          free: false,
          category: "specialized"
        }
      ]
    }
  ]

  // Flatten all resources into a single array
  const allResources = resourceCategories.flatMap(category => 
    category.resources.map(resource => ({
      ...resource,
      categoryTitle: category.title
    }))
  );

  // Filter resources based on selected category
  const filteredResources = selectedCategory === 'All' 
    ? allResources 
    : allResources.filter(resource => resource.category === selectedCategory);

  // Group filtered resources by their original category titles
  const groupedFilteredResources = filteredResources.reduce((acc, resource) => {
    const categoryTitle = resource.categoryTitle;
    if (!acc[categoryTitle]) {
      acc[categoryTitle] = [];
    }
    acc[categoryTitle].push(resource);
    return acc;
  }, {} as Record<string, any[]>);

  // Create filtered resource categories
  const filteredResourceCategories = resourceCategories
    .filter(category => selectedCategory === 'All' || 
      category.resources.some(resource => resource.category === selectedCategory))
    .map(category => ({
      ...category,
      resources: category.resources.filter(resource => 
        selectedCategory === 'All' || resource.category === selectedCategory)
    }));

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <Layers className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Intermediate Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Training Courses
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore curated cybersecurity courses from leading platforms and training providers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <CategoryFilter 
        categories={filterCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        accentColor="blue"
      />

      {/* Resources Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {filteredResourceCategories.length > 0 ? (
              filteredResourceCategories.map((category, index) => (
                <div key={index} className="mb-16 last:mb-0">
                  <div className="flex items-center mb-8">
                    <category.icon className="w-6 h-6 text-blue-500 mr-3" />
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.resources.map((resource, resourceIndex) => (
                      <a
                        key={resourceIndex}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-500 transition-colors">
                            {resource.name}
                          </h3>
                          <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded border border-blue-800">
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">
                          {resource.description}
                        </p>
                        {hasAuthor(resource) && (
                          <div className="text-sm text-blue-500">
                            By {resource.author}
                          </div>
                        )}
                        {hasFree(resource) && (
                          <div className="mt-2">
                            <span className={`text-xs px-2 py-1 rounded ${resource.free ? 'bg-green-900/50 text-green-400 border border-green-800' : 'bg-blue-900/50 text-blue-400 border border-blue-800'}`}>
                              {resource.free ? 'Free' : 'Paid'}
                            </span>
                          </div>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 border border-gray-800 rounded-lg">
                <p className="text-gray-400 mb-2">No courses found matching your criteria</p>
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className="text-blue-500 hover:text-blue-400"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 