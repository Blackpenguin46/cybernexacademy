"use client"

import { useState } from 'react'
import { Terminal, Code, Network, Shield, Server, Lock, ExternalLink, Target, Flame, Brain, Wrench, Bug, Database, Flag, Play, FileText, Users } from "lucide-react"
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
    { id: 'reverse', name: 'Reverse Engineering', icon: Wrench },
    { id: 'ctf-challenge', name: 'CTF & Challenges', icon: Flag },
    { id: 'pentesting-platform', name: 'Pentesting Platforms', icon: Play }
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
    },
    {
      title: "Pentesting Platforms",
      icon: Play,
      resources: [
        {
          name: "TryHackMe Labs",
          description: "Gamified platform for learning cybersecurity through hands-on labs.",
          url: "https://tryhackme.com",
          type: "Platform",
          category: "pentesting-platform",
          free: false // Freemium model
        },
        {
          name: "Hack The Box Labs",
          description: "Online platform providing virtual labs to improve penetration testing skills.",
          url: "https://app.hackthebox.com",
          type: "Platform",
          category: "pentesting-platform",
          free: false // Freemium model
        },
        {
          name: "Attack-Defense Labs",
          description: "Online lab environment focused on practical cybersecurity skills.",
          url: "https://attackdefense.com/",
          type: "Platform",
          category: "pentesting-platform",
          free: false // Paid
        },
        {
          name: "RangeForce Platform",
          description: "Cybersecurity training platform with hands-on modules and cyber ranges.",
          url: "https://www.rangeforce.com/",
          type: "Platform",
          category: "pentesting-platform",
          free: false // Enterprise focus
        },
        {
          name: "CyberSecLabs Labs",
          description: "Online labs environment for practicing penetration testing against Windows/Linux boxes.",
          url: "https://www.cyberseclabs.co.uk/",
          type: "Platform",
          category: "pentesting-platform",
          free: false // Paid
        },
        {
          name: "LetsDefend Platform",
          description: "Blue team focused platform with SOC simulation and incident response training.",
          url: "https://letsdefend.io/",
          type: "Platform",
          category: "pentesting-platform", // Fits here somewhat, also Blue Team
          free: false // Paid
        },
        {
          name: "Immersive Labs",
          description: "Skills development platform covering various cybersecurity domains with labs.",
          url: "https://www.immersivelabs.com/",
          type: "Platform",
          category: "pentesting-platform",
          free: false // Enterprise focus
        },
        {
          name: "VulnHub VMs",
          description: "Repository of vulnerable virtual machines for offline practice.",
          url: "https://www.vulnhub.com/",
          type: "VM Repository",
          category: "pentesting-platform",
          free: true
        },
        {
          name: "Hackbox by Black Hills InfoSec",
          description: "Potentially a lab/resource offered by BHIS (link might need verification).",
          url: "https://www.blackhillsinfosec.com/",
          type: "Resource",
          category: "pentesting-platform",
          free: true // Assuming free resources/labs
        },
        {
          name: "Metasploitable2 VM",
          description: "Intentionally vulnerable Linux VM designed for practicing with Metasploit.",
          url: "https://docs.rapid7.com/metasploit/metasploitable-2/",
          type: "VM",
          category: "pentesting-platform",
          free: true
        },
        {
          name: "TryHackMe AttackBox",
          description: "Browser-based Kali Linux machine for use on the TryHackMe platform.",
          url: "https://tryhackme.com/attackbox",
          type: "Tool / Environment",
          category: "pentesting-platform",
          free: false // Part of THM subscription
        },
        {
          name: "Sektor7 Offensive Labs",
          description: "Labs focused on malware development and offensive techniques.",
          url: "https://institute.sektor7.net/",
          type: "Labs",
          category: "pentesting-platform",
          free: false // Paid training
        },
        {
          name: "Pentester Academy Labs",
          description: "Platform offering extensive labs covering various penetration testing topics.",
          url: "https://www.pentesteracademy.com/",
          type: "Platform",
          category: "pentesting-platform",
          free: false // Paid
        },
        {
          name: "HackMyVM",
          description: "Platform hosting vulnerable virtual machines for practice.",
          url: "https://www.hackmyvm.eu/",
          type: "Platform / VMs",
          category: "pentesting-platform",
          free: true // Primarily free VMs
        },
        {
          name: "Hack The Box Academy Labs",
          description: "Interactive modules and labs within the HTB Academy platform.",
          url: "https://academy.hackthebox.com/",
          type: "Platform / Modules",
          category: "pentesting-platform",
          free: false // Freemium/Paid
        },
        {
          name: "Red Team Labs - TCM",
          description: "Labs associated with TCM Security's ethical hacking courses.",
          url: "https://academy.tcm-sec.com/",
          type: "Labs",
          category: "pentesting-platform",
          free: false // Part of paid courses
        },
        {
          name: "Cyber Ranges by National CyberWatch",
          description: "Information about cyber range environments, potentially for academic/institutional use.",
          url: "https://www.nationalcyberwatch.org/",
          type: "Resource / Program",
          category: "pentesting-platform",
          free: false // Likely institutional access
        }
      ]
    },
    {
      title: "CTF & Challenges",
      icon: Flag,
      resources: [
        {
          name: "PicoCTF Challenges",
          description: "Free computer security education program with CTF challenges for beginners.",
          url: "https://picoctf.org/",
          type: "CTF Platform",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "OverTheWire Wargames",
          description: "Wargames designed to teach security concepts through practical challenges.",
          url: "https://overthewire.org/wargames/",
          type: "Wargames",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "Root Me Labs",
          description: "Platform offering challenges and virtual environments across various security topics.",
          url: "https://www.root-me.org/",
          type: "Platform / Challenges",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "CyberDefenders Labs",
          description: "Platform offering blue team and digital forensics challenges.",
          url: "https://cyberdefenders.org/labs",
          type: "Platform / Challenges",
          category: "ctf-challenge",
          free: false // Freemium
        },
        {
          name: "Blue Team Labs Online",
          description: "Platform focused on defensive security labs and challenges.",
          url: "https://blueteamlabs.online/",
          type: "Platform / Challenges",
          category: "ctf-challenge",
          free: false // Freemium
        },
        {
          name: "CyberPatriot Practice",
          description: "National youth cyber education program including practice challenges.",
          url: "https://www.uscyberpatriot.org/",
          type: "Competition / Program",
          category: "ctf-challenge",
          free: true // For participants
        },
        {
          name: "SANS NetWars",
          description: "Suite of hands-on, interactive learning scenarios for cybersecurity skills.",
          url: "https://www.sans.org/netwars/",
          type: "Competition / Training",
          category: "ctf-challenge",
          free: false // Paid SANS training component
        },
        {
          name: "CTF Learn",
          description: "Online platform hosting user-submitted CTF challenges.",
          url: "https://ctflearn.com/",
          type: "CTF Platform",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "HackThisSite Missions",
          description: "Platform offering hacking challenges (missions) across various categories.",
          url: "https://www.hackthissite.org/",
          type: "Platform / Challenges",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "Hack The Box Starting Point",
          description: "Guided introductory labs on the Hack The Box platform.",
          url: "https://app.hackthebox.com/starting-point",
          type: "Labs",
          category: "ctf-challenge",
          free: true // Starting Point is free
        },
        {
          name: "Cyber Range by MITRE",
          description: "Likely refers to ATT&CK Evaluations or similar MITRE resources, not a public lab.",
          url: "https://attackevals.mitre-engenuity.org/",
          type: "Research / Evaluation",
          category: "ctf-challenge", // Categorization is loose here
          free: true
        },
        {
          name: "HackerOne CTF",
          description: "CTF challenges hosted by HackerOne, often related to bug bounty hunting.",
          url: "https://www.hacker101.com/", // Hacker101 hosts the CTF
          type: "CTF Platform",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "Exploit Exercises",
          description: "Virtual machines designed to teach exploit development techniques.",
          url: "https://exploit-exercises.lains.space/",
          type: "VMs / Challenges",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "Security Shepherd",
          description: "OWASP project providing a web and mobile application security training platform.",
          url: "https://owasp.org/www-project-security-shepherd/",
          type: "Training Platform",
          category: "web-security", // Also fits CTF/Challenges
          free: true
        },
        {
          name: "picoCTF VM Download",
          description: "Option to download PicoCTF challenges for offline play.",
          url: "https://github.com/picoCTF/picoCTF",
          type: "Resource / VM",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "Cybersecurity Lab by NOVA",
          description: "Interactive online lab introducing basic cybersecurity concepts.",
          url: "https://www.pbs.org/wgbh/nova/labs/lab/cyber/",
          type: "Interactive Lab",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "CTFtime – Event Archives",
          description: "Archive of past CTF events, often linking to challenges or writeups.",
          url: "https://ctftime.org/event/list/upcoming",
          type: "Resource / Archive",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "Hackademic Challenges",
          description: "Possibly outdated or refers to specific academic challenges (link needs check).",
          url: "https://github.com/infoslack/awesome-webshell", // Link is for webshells, not challenges
          type: "Resource",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "Flare-On Reverse Engineering Challenges",
          description: "Annual reverse engineering challenge hosted by Mandiant (FireEye). Archives available.",
          url: "https://www.fireeye.com/flareon",
          type: "Competition / Archive",
          category: "reverse", // Also fits CTF/Challenges
          free: true
        },
        {
          name: "Online CTF Practice Platform (HackThis)",
          description: "Platform offering hacking challenges and articles.",
          url: "https://www.hackthis.co.uk/",
          type: "Platform / Challenges",
          category: "ctf-challenge",
          free: true
        },
        {
          name: "CSAW CTF Archive",
          description: "Archive of challenges from the CSAW CTF competition.",
          url: "https://ctf.csaw.io/",
          type: "Archive / Challenges",
          category: "ctf-challenge",
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