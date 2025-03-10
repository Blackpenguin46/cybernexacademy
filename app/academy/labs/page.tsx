"use client"

import { useState } from 'react'
import { Terminal, Code, Network, Shield, Server, Lock, ExternalLink, Target, Flame, Brain, Wrench, Bug, Database } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '../../components/CategoryFilter'

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

export default function LabsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Labs', icon: Terminal },
    { id: 'web-security', name: 'Web Security', icon: Code },
    { id: 'network', name: 'Network Security', icon: Network },
    { id: 'malware', name: 'Malware Analysis', icon: Bug },
    { id: 'forensics', name: 'Digital Forensics', icon: Target },
    { id: 'cloud', name: 'Cloud Security', icon: Server },
    { id: 'cryptography', name: 'Cryptography', icon: Lock },
    { id: 'reverse', name: 'Reverse Engineering', icon: Wrench }
  ]

  const resourceCategories: ResourceCategory[] = [
    {
      title: "Web Security Labs",
      icon: Code,
      resources: [
        {
          name: "OWASP Juice Shop",
          description: "Modern web application security training environment with real vulnerabilities",
          url: "https://owasp.org/www-project-juice-shop/",
          type: "Web Lab",
          category: "web-security",
          free: true
        },
        {
          name: "WebGoat",
          description: "Deliberately insecure web application for learning web security",
          url: "https://owasp.org/www-project-webgoat/",
          type: "Web Lab",
          category: "web-security",
          free: true
        },
        {
          name: "Damn Vulnerable Web Application",
          description: "PHP/MySQL web application that is damn vulnerable",
          url: "https://dvwa.co.uk/",
          type: "Web Lab",
          category: "web-security",
          free: true
        }
      ]
    },
    {
      title: "Network Security Labs",
      icon: Network,
      resources: [
        {
          name: "Security Onion",
          description: "Linux distribution for intrusion detection and network security monitoring",
          url: "https://securityonionsolutions.com/",
          type: "Network Lab",
          category: "network",
          free: true
        },
        {
          name: "Packet Tracer Labs",
          description: "Network simulation tool with security scenarios",
          url: "https://www.netacad.com/courses/packet-tracer",
          type: "Network Lab",
          category: "network",
          free: true
        }
      ]
    },
    {
      title: "Malware Analysis Labs",
      icon: Bug,
      resources: [
        {
          name: "REMnux",
          description: "Linux toolkit for reverse-engineering and analyzing malware",
          url: "https://remnux.org/",
          type: "Malware Lab",
          category: "malware",
          free: true
        },
        {
          name: "Any.Run",
          description: "Interactive online malware analysis service",
          url: "https://any.run/",
          type: "Malware Lab",
          category: "malware",
          free: false
        }
      ]
    },
    {
      title: "Digital Forensics Labs",
      icon: Target,
      resources: [
        {
          name: "DFRWS Challenge",
          description: "Digital forensics challenges and training materials",
          url: "https://www.dfrws.org/",
          type: "Forensics Lab",
          category: "forensics",
          free: true
        },
        {
          name: "Autopsy Digital Forensics",
          description: "Digital forensics platform with training cases",
          url: "https://www.autopsy.com/",
          type: "Forensics Lab",
          category: "forensics",
          free: true
        }
      ]
    },
    {
      title: "Cloud Security Labs",
      icon: Server,
      resources: [
        {
          name: "CloudGoat",
          description: "Vulnerable by Design AWS deployment tool",
          url: "https://github.com/RhinoSecurityLabs/cloudgoat",
          type: "Cloud Lab",
          category: "cloud",
          free: true
        },
        {
          name: "AWS Security Labs",
          description: "Official AWS security workshops and labs",
          url: "https://awssecworkshops.com/",
          type: "Cloud Lab",
          category: "cloud",
          free: true
        }
      ]
    },
    {
      title: "Cryptography Labs",
      icon: Lock,
      resources: [
        {
          name: "CryptoHack",
          description: "Fun platform for learning cryptography",
          url: "https://cryptohack.org/",
          type: "Crypto Lab",
          category: "cryptography",
          free: true
        },
        {
          name: "Cryptopals Challenges",
          description: "Set of cryptography challenges from basics to advanced",
          url: "https://cryptopals.com/",
          type: "Crypto Lab",
          category: "cryptography",
          free: true
        }
      ]
    },
    {
      title: "Reverse Engineering Labs",
      icon: Wrench,
      resources: [
        {
          name: "Reverse Engineering Challenges",
          description: "Collection of reverse engineering challenges",
          url: "https://challenges.re/",
          type: "RE Lab",
          category: "reverse",
          free: true
        },
        {
          name: "Ghidra Training",
          description: "NSA's reverse engineering tool with training materials",
          url: "https://ghidra-sre.org/",
          type: "RE Lab",
          category: "reverse",
          free: true
        }
      ]
    }
  ]

  // Filter resources based on selected category
  const filteredCategories = selectedCategory === 'all'
    ? resourceCategories
    : resourceCategories.map(category => ({
        ...category,
        resources: category.resources.filter(resource => resource.category === selectedCategory)
      })).filter(category => category.resources.length > 0)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <Terminal className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Hands-on Learning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Projects & Labs
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Practice your cybersecurity skills with hands-on projects and interactive labs across various domains.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              accentColor="blue"
            />
          </div>
        </div>
      </section>

      {/* Labs Grid Section */}
      {filteredCategories.length > 0 ? (
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {filteredCategories.map((category, index) => (
                <div key={index} className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <category.icon className="h-6 w-6 text-blue-500" />
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>
                  <div className="grid gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium px-2 py-1 rounded bg-blue-900/50 text-blue-400 border border-blue-800/50">
                                {resource.type}
                              </span>
                              {hasFree(resource) && (
                                <span className={`text-sm font-medium px-2 py-1 rounded ${resource.free ? 'bg-green-900/50 text-green-400 border border-green-800/50' : 'bg-red-900/50 text-red-400 border border-red-800/50'}`}>
                                  {resource.free ? 'Free' : 'Paid'}
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{resource.name}</h3>
                            <p className="text-gray-400 mb-4">{resource.description}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <Button asChild>
                              <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                Start Lab
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
                <Terminal className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No labs match your filter</h3>
                <p className="text-gray-400 mb-6">Try selecting a different category or clear your filter</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory('all')}
                  className="flex items-center gap-2"
                >
                  Clear filters
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
} 