"use client"

import { useState } from "react"
import { Zap, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain, Filter, X, BookOpen, Wrench } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

interface Resource {
  name: string
  description: string
  url: string
  type: string
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

export default function AdvancedPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const resourceCategories: ResourceCategory[] = [
    {
      title: "Exploit Development Tools",
      icon: Code,
      resources: [
        {
          name: "IDA Pro",
          description: "Advanced multi-processor disassembler and debugger",
          url: "https://hex-rays.com/ida-pro",
          type: "Reverse Engineering",
          free: false
        },
        {
          name: "Binary Ninja",
          description: "Reverse engineering platform",
          url: "https://binary.ninja",
          type: "Reverse Engineering",
          free: false
        },
        {
          name: "WinDbg Preview",
          description: "Windows debugger for kernel and user mode",
          url: "https://apps.microsoft.com/store/detail/windbg-preview/9PGJGD53TN86",
          type: "Debugger",
          free: true
        },
        {
          name: "Frida",
          description: "Dynamic instrumentation toolkit",
          url: "https://frida.re",
          type: "Instrumentation",
          free: true
        },
        {
          name: "Ghidra",
          description: "Open-source software reverse engineering suite",
          url: "https://ghidra-sre.org",
          type: "Reverse Engineering",
          free: true
        },
        {
          name: "Radare2",
          description: "Open-source software for reverse engineering and analyzing binaries",
          url: "https://rada.re/n/radare2.html",
          type: "Reverse Engineering",
          free: true
        },
        {
          name: "Immunity Debugger",
          description: "Powerful debugger for analyzing malware and exploits",
          url: "https://www.immunityinc.com/products/debugger/",
          type: "Debugging Tool",
          free: false
        }
      ]
    },
    {
      title: "Advanced Malware Analysis",
      icon: Brain,
      resources: [
        {
          name: "FireEye FLARE VM",
          description: "Windows-based security distribution for malware analysis",
          url: "https://github.com/mandiant/flare-vm",
          type: "Analysis Suite",
          free: true
        },
        {
          name: "Ghidra",
          description: "Software reverse engineering framework by NSA",
          url: "https://ghidra-sre.org",
          type: "Reverse Engineering",
          free: true
        },
        {
          name: "x64dbg",
          description: "Open-source x64/x32 debugger for Windows",
          url: "https://x64dbg.com",
          type: "Debugger",
          free: true
        },
        {
          name: "Cutter",
          description: "Free and open-source reverse engineering platform",
          url: "https://cutter.re",
          type: "Reverse Engineering",
          free: true
        },
        {
          name: "GDB with SLAE64",
          description: "Linux exploit development tutorial using GDB",
          url: "https://www.mkdynamics.net/Sections/Cybersecurity/SLAE64/Modules/Module_1/Section_3_GDB_Test/section_3_GDB_test.html",
          type: "Tutorial",
          free: true
        },
        {
          name: "Backdoored Webserver",
          description: "Tutorial on creating and analyzing backdoored webservers",
          url: "https://www.mkdynamics.net/Sections/Computer_Programming/C/Backdoored_Webserver/backdoored_webserver.html",
          type: "Tutorial",
          free: true
        }
      ]
    },
    {
      title: "Red Team Operations",
      icon: Target,
      resources: [
        {
          name: "Cobalt Strike",
          description: "Advanced adversary simulation platform",
          url: "https://www.cobaltstrike.com",
          type: "C2 Framework",
          free: false
        },
        {
          name: "Covenant",
          description: ".NET command and control framework",
          url: "https://github.com/cobbr/Covenant",
          type: "C2 Framework",
          free: true
        },
        {
          name: "Havoc C2",
          description: "Modern and malleable post-exploitation command and control framework",
          url: "https://github.com/HavocFramework/Havoc",
          type: "C2 Framework",
          free: true
        },
        {
          name: "Sliver",
          description: "Cross-platform adversary emulation/red team framework",
          url: "https://github.com/BishopFox/sliver",
          type: "C2 Framework",
          free: true
        },
        {
          name: "RDP Shell",
          description: "Collection of advanced red team techniques and tools",
          url: "https://rdp.sh/",
          type: "Red Team Tools",
          free: true
        },
        {
          name: "Linux Red Team Persistence Techniques",
          description: "Guide to establishing persistent access on Linux systems",
          url: "https://www.linode.com/docs/guides/linux-red-team-persistence-techniques/",
          type: "Technical Guide",
          free: true
        },
        {
          name: "Mimikatz Guide",
          description: "Comprehensive guide to using Mimikatz for credential extraction",
          url: "https://www.offsec.com/metasploit-unleashed/mimikatz/",
          type: "Tutorial",
          free: true
        },
        {
          name: "Forced Authentication",
          description: "Guide to T1187 forced authentication techniques",
          url: "https://www.ired.team/offensive-security/initial-access/t1187-forced-authentication",
          type: "Attack Technique",
          free: true
        }
      ]
    },
    {
      title: "Offensive Security Resources",
      icon: Server,
      resources: [
        {
          name: "HackTraining.org",
          description: "Professional hacking training courses and resources",
          url: "https://hackertraining.org/",
          type: "Training Platform",
          free: false 
        },
        {
          name: "OSCP Resources",
          description: "Comprehensive collection of resources for OSCP exam preparation",
          url: "https://github.com/0xsyr0/OSCP",
          type: "GitHub Repository",
          free: true
        },
        {
          name: "Privilege Escalation Cheatsheet",
          description: "Extensive guide for Windows/Linux privilege escalation techniques",
          url: "https://docs.google.com/spreadsheets/u/1/d/1dwSMIAPIam0PuRBkCiDI88pU3yzrqqHkDtBngUHNCw8/htmlview",
          type: "Cheatsheet",
          free: true
        },
        {
          name: "Total OSCP Guide",
          description: "Comprehensive guide to prepare for the OSCP exam",
          url: "https://sushant747.gitbooks.io/total-oscp-guide/content/",
          type: "Guide",
          free: true
        },
        {
          name: "Bug Bounty Hunting",
          description: "Platform for learning web application security and bug bounty hunting",
          url: "https://www.bugbountyhunting.com/",
          type: "Training Platform",
          free: true
        },
        {
          name: "Penetester Academy",
          description: "Attack & Defense CTF challenges and courses",
          url: "https://www.pentesteracademy.com/course?id=7",
          type: "Training Platform",
          free: false
        },
        {
          name: "BugBounty Collection",
          description: "Curated collection of bug bounty resources and tools",
          url: "https://github.com/gotr00t0day/BugBounty",
          type: "GitHub Repository",
          free: true
        },
        {
          name: "exp0s3d",
          description: "Collection of exploits, vulnerabilities, and security research",
          url: "https://github.com/gotr00t0day/exp0s3d",
          type: "GitHub Repository",
          free: true
        }
      ]
    },
    {
      title: "Advanced Research Materials",
      icon: Terminal,
      resources: [
        {
          name: "Windows Internals",
          description: "Deep dive into Windows architecture and internals",
          url: "https://www.amazon.com/Windows-Internals-Part-architecture-management/dp/0735684189",
          type: "Book",
          author: "Pavel Yosifovich, Alex Ionescu"
        },
        {
          name: "The Shellcoder's Handbook",
          description: "Guide to discovering and exploiting security holes",
          url: "https://www.amazon.com/Shellcoders-Handbook-Discovering-Exploiting-Security/dp/047008023X",
          type: "Book",
          author: "Chris Anley et al."
        },
        {
          name: "A Guide to Kernel Exploitation",
          description: "Attacking the core",
          url: "https://www.amazon.com/Guide-Kernel-Exploitation-Attacking-Core/dp/1597494860",
          type: "Book",
          author: "Enrico Perla, Massimiliano Oldani"
        },
        {
          name: "HackTricks",
          description: "Comprehensive wiki with a vast collection of hacking techniques and notes",
          url: "https://book.hacktricks.wiki/en/index.html",
          type: "Wiki",
          free: true
        },
        {
          name: "Basic Linux Exploits",
          description: "Practical guide to basic Linux exploit development techniques",
          url: "https://www.mkdynamics.net/Sections/Cybersecurity/Basic_Linux_Exploits/basic_linux_exploits.html",
          type: "Tutorial",
          free: true
        },
        {
          name: "SCPA Framework",
          description: "Security Contents & Penetration Analysis Framework",
          url: "https://github.com/ghostsec420/SCPA",
          type: "GitHub Repository",
          free: true
        }
      ]
    },
    {
      title: "Advanced Security Research",
      icon: Flame,
      resources: [
        {
          name: "Project Zero Blog",
          description: "Google's security research blog",
          url: "https://googleprojectzero.blogspot.com",
          type: "Research Blog",
          free: true
        },
        {
          name: "Microsoft Security Research",
          description: "Microsoft's security research and advisories",
          url: "https://www.microsoft.com/security/blog/topic/research",
          type: "Research Portal",
          free: true
        },
        {
          name: "Phrack Magazine",
          description: "Underground computer security publication",
          url: "http://www.phrack.org",
          type: "Publication",
          free: true
        },
        {
          name: "Hacker's Additional Resources",
          description: "Extensive list of hacking resources, courses, and tools",
          url: "https://pastebin.com/ZLXCZ3YY",
          type: "Resource List",
          free: true
        }
      ]
    },
    {
      title: "Advanced Training & Certifications",
      icon: Shield,
      resources: [
        {
          name: "Offensive Security OSEE",
          description: "Advanced Windows exploitation course",
          url: "https://www.offensive-security.com/awe-osee",
          type: "Certification",
          free: false
        },
        {
          name: "SANS SEC760",
          description: "Advanced exploit development for penetration testers",
          url: "https://www.sans.org/cyber-security-courses/advanced-exploit-development-penetration-testers",
          type: "Training",
          free: false
        },
        {
          name: "Corelan Advanced Training",
          description: "Advanced exploit development training",
          url: "https://www.corelan-training.com",
          type: "Training",
          free: false
        }
      ]
    }
  ]

  // Filter categories for the CategoryFilter component
  const filterCategories = [
    { id: 'All', name: 'All Resources', icon: BookOpen },
    { id: 'Reverse Engineering', name: 'Reverse Engineering', icon: Code },
    { id: 'Debugger', name: 'Debuggers', icon: Terminal },
    { id: 'Instrumentation', name: 'Instrumentation', icon: Wrench },
    { id: 'Analysis Suite', name: 'Analysis Suites', icon: Shield },
    { id: 'Security Tool', name: 'Security Tools', icon: Lock },
    { id: 'Exploit Development', name: 'Exploit Development', icon: Flame },
    { id: 'Debugging Tool', name: 'Debugging Tools', icon: Terminal },
    { id: 'Book', name: 'Books', icon: BookOpen },
  ]

  // Filter resources based on selected category
  const getFilteredCategories = () => {
    // If All is selected, return all categories
    if (selectedCategory === 'All') {
      return resourceCategories;
    }
    
    // Otherwise, filter resources by type
    return resourceCategories.map(category => ({
      ...category,
      resources: category.resources.filter(resource => resource.type === selectedCategory)
    })).filter(category => category.resources.length > 0);
  }

  const filteredCategories = getFilteredCategories();
  
  // Calculate total resource count
  const totalResourceCount = filteredCategories.reduce(
    (total, category) => total + category.resources.length, 
    0
  );

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Academy Resources
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advanced Resources
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl">
              Master advanced cybersecurity techniques with these specialized resources for security professionals.
            </p>
          </div>
        </div>
      </div>
      
      {/* Category Filter */}
      <CategoryFilter
        categories={filterCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        accentColor="red"
      />
      
      {/* Resources Count */}
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm">
            Showing {totalResourceCount} {totalResourceCount === 1 ? 'resource' : 'resources'}
            {selectedCategory !== 'All' ? ` in category: ${selectedCategory}` : ''}
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
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
          <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mb-20">
            <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No resources found</h3>
            <p className="text-gray-400 mb-6">Try selecting a different category</p>
            <Button 
              onClick={() => setSelectedCategory('All')}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" /> Clear filter
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 