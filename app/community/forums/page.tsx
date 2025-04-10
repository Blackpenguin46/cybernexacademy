"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  MessageSquare, 
  ExternalLink, 
  Globe, 
  Shield, 
  Terminal, 
  Server, 
  BookOpen, 
  Users,
  ThumbsUp,
  Filter,
  X,
  Code,
  Database,
  AlertTriangle
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

export default function ForumsAndBlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories for filtering
  const categories: Category[] = [
    { id: 'all', name: 'All Resources', icon: Globe },
    { id: 'general', name: 'General Security', icon: Shield },
    { id: 'technical', name: 'Technical Security', icon: Code },
    { id: 'hacking', name: 'Hacking', icon: Terminal },
    { id: 'web', name: 'Web Security', icon: Globe },
    { id: 'news', name: 'Security News', icon: AlertTriangle },
    { id: 'threat', name: 'Threat Intelligence', icon: Database }
  ];

  // Forums section data
  const forums = [
    {
      name: "Security Forums",
      description: "General cybersecurity discussion forums",
      items: [
        {
          name: "Wilders Security Forums",
          url: "https://www.wilderssecurity.com/",
          description: "One of the oldest and most respected security forums covering a wide range of topics from malware removal to enterprise security.",
          members: "500K+",
          category: "general"
        },
        {
          name: "Reddit r/netsec",
          url: "https://www.reddit.com/r/netsec/",
          description: "Technical information security content and discussion focused on network and application security.",
          members: "1.2M+",
          category: "technical"
        },
        {
          name: "Hack Forums",
          url: "https://hackforums.net/",
          description: "Large community focused on computer security, programming, and technology discussions.",
          members: "4M+",
          category: "hacking"
        },
        {
          name: "OWASP Community",
          url: "https://owasp.org/www-community/",
          description: "Open Web Application Security Project community forums for web security discussions.",
          members: "250K+",
          category: "web"
        }
      ]
    },
    {
      name: "Specialized Forums",
      description: "Forums focused on specific security domains",
      items: [
        {
          name: "Malware Analysis",
          url: "https://www.kernelmode.info/forum/",
          description: "Forum dedicated to malware analysis, reverse engineering, and threat intelligence.",
          members: "100K+",
          category: "technical"
        },
        {
          name: "Exploit Database Forums",
          url: "https://www.exploit-db.com/",
          description: "Discussion around exploits, vulnerabilities, and penetration testing techniques.",
          members: "300K+",
          category: "hacking"
        },
        {
          name: "Digital Forensics Forum",
          url: "https://www.forensicfocus.com/forums/",
          description: "Community for digital forensics professionals to discuss techniques and tools.",
          members: "150K+",
          category: "technical"
        },
        {
          name: "Security Stack Exchange",
          url: "https://security.stackexchange.com/",
          description: "Q&A site for information security professionals, with high-quality technical discussions.",
          members: "700K+",
          category: "technical"
        },
        {
          name: "Stack Overflow Security",
          url: "https://stackoverflow.com/questions/tagged/security",
          description: "Q&A for professional and enthusiast programmers covering security topics.",
          members: "Unknown",
          category: "technical"
        }
      ]
    },
    {
      name: "Learning Platforms & CTFs",
      description: "Hands-on learning platforms and Capture The Flag communities",
      items: [
        {
          name: "TryHackMe",
          url: "https://tryhackme.com",
          description: "Platform for learning cybersecurity through hands-on virtual labs and challenges.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "Hack The Box Academy",
          url: "https://academy.hackthebox.com",
          description: "Cybersecurity training platform offering courses and skill development paths.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "CTFtime",
          url: "https://ctftime.org",
          description: "Central platform for Capture The Flag events, teams, and writeups.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "PortSwigger Web Security Academy",
          url: "https://portswigger.net/web-security",
          description: "Free online web security training from the creators of Burp Suite.",
          members: "Unknown",
          category: "web"
        },
        {
          name: "OverTheWire",
          url: "https://overthewire.org",
          description: "Wargame challenges focused on teaching security concepts in a hands-on manner.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "CyberDefenders",
          url: "https://cyberdefenders.org",
          description: "Platform offering blue team and defensive security challenges and training.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "PentesterLab",
          url: "https://pentesterlab.com",
          description: "Online platform for learning web penetration testing through hands-on exercises.",
          members: "Unknown",
          category: "web"
        },
        {
          name: "Blue Team Labs Online",
          url: "https://blueteamlabs.online",
          description: "Hands-on blue team training platform focusing on defensive security skills.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "LetsDefend",
          url: "https://letsdefend.io",
          description: "Training platform for Security Operations Center (SOC) analysts.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "Try2Hack",
          url: "https://try2hack.me",
          description: "Collection of hacking challenges focusing on web security and cryptography.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "PicoCTF",
          url: "https://picoctf.org",
          description: "Beginner-friendly CTF competition and learning platform for cybersecurity skills.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "HackThisSite",
          url: "https://hackthissite.org",
          description: "Online platform with hacking challenges and missions to test security skills.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "Root Me",
          url: "https://www.root-me.org",
          description: "Platform offering numerous cybersecurity challenges across various domains.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "Red Team Village",
          url: "https://redteamvillage.org",
          description: "Community and platform focused on offensive security and red teaming exercises.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "Cybrary",
          url: "https://www.cybrary.it",
          description: "Online learning platform offering cybersecurity courses and training paths.",
          members: "Unknown",
          category: "general"
        },
        {
          name: "EC-Council CyberQ",
          url: "https://cyberq.eccouncil.org",
          description: "Cybersecurity skill development platform from EC-Council.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "SANS Cyber Aces",
          url: "https://www.cyberaces.org",
          description: "Free online cybersecurity courses and resources from SANS Institute.",
          members: "Unknown",
          category: "general"
        },
        {
          name: "HackThis!!",
          url: "https://www.hackthis.co.uk",
          description: "Online platform offering hacking challenges and security articles.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "Enigma Group",
          url: "https://www.enigmagroup.org",
          description: "Platform offering cybersecurity challenges and puzzles.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "Hacker101 CTF",
          url: "https://ctf.hacker101.com",
          description: "Capture The Flag platform from HackerOne focused on web security.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "Offensive Security Labs",
          url: "https://training.offensive-security.com",
          description: "Training labs for Offensive Security certifications like OSCP.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "Linux Journey",
          url: "https://linuxjourney.com",
          description: "Free resource for learning Linux fundamentals relevant to cybersecurity.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "Codecademy Cybersecurity Path",
          url: "https://www.codecademy.com/learn/introduction-to-cybersecurity",
          description: "Introductory course path covering cybersecurity fundamentals on Codecademy.",
          members: "Unknown",
          category: "general"
        },
        {
          name: "MITRE ATT&CK Navigator",
          url: "https://attack.mitre.org",
          description: "Framework and knowledge base of adversary tactics and techniques.",
          members: "Unknown",
          category: "threat"
        },
        {
          name: "Microsoft Learn Security",
          url: "https://learn.microsoft.com/en-us/training/paths/intro-to-security/",
          description: "Microsoft's learning path covering security concepts and Azure security.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "CompTIA Security+ Training Resources",
          url: "https://www.comptia.org/training/resources/security",
          description: "Official CompTIA resources for Security+ certification preparation.",
          members: "Unknown",
          category: "general"
        },
        {
          name: "Stanford Online Cybersecurity",
          url: "https://online.stanford.edu/courses/xine258-cybersecurity",
          description: "Online cybersecurity program offered by Stanford University.",
          members: "Unknown",
          category: "general"
        },
        {
          name: "Coursera Cybersecurity Specialization",
          url: "https://www.coursera.org/specializations/cyber-security",
          description: "Cybersecurity specialization course series offered through Coursera.",
          members: "Unknown",
          category: "general"
        },
        {
          name: "EDX Cybersecurity Courses",
          url: "https://www.edx.org/learn/cybersecurity",
          description: "Collection of cybersecurity courses offered through the edX platform.",
          members: "Unknown",
          category: "general"
        },
        {
          name: "SecurityTube",
          url: "http://www.securitytube.net",
          description: "Collection of security-focused videos and tutorials.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "Open Security Training",
          url: "https://opensecuritytraining.info",
          description: "Free, open-source computer security training materials.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "The Cyber Mentor Training",
          url: "https://academy.tcm-sec.com",
          description: "Cybersecurity training courses focused on practical skills.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "HackerOne Hacker101",
          url: "https://www.hacker101.com/",
          description: "Free classes for web security and bug bounty hunting.",
          members: "Unknown",
          category: "web"
        },
        {
          name: "Zero Day Initiative Training",
          url: "https://www.zerodayinitiative.com/",
          description: "Resources and information related to vulnerability research and zero-day exploits.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "Hackin9 Free Articles",
          url: "https://www.hakin9.org/category/free/",
          description: "Free cybersecurity articles and magazines from Hakin9.",
          members: "Unknown",
          category: "general"
        },
        {
          name: "Null Byte on WonderHowTo",
          url: "https://null-byte.wonderhowto.com",
          description: "Ethical hacking tutorials and guides.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "Infosec Institute Skillset",
          url: "https://www.infosecinstitute.com",
          description: "Cybersecurity training and certification preparation platform.",
          members: "Unknown",
          category: "general"
        },
        {
          name: "OWASP Training Resources",
          url: "https://owasp.org/www-project-top-ten/",
          description: "OWASP Top 10 project and related web security resources.",
          members: "Unknown",
          category: "web"
        },
        {
          name: "DFIR Training",
          url: "https://www.dfir.training/",
          description: "Resources and training for Digital Forensics and Incident Response professionals.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "Practical Networking",
          url: "https://www.practicalnetworking.net/",
          description: "Website focused on practical networking concepts and tutorials.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "BlueTeamSec Resources",
          url: "https://www.blueteamsec.com",
          description: "Collection of resources focused on blue team and defensive security.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "Security Blue Team",
          url: "https://securityblue.team",
          description: "Training platform focused on developing blue team skills.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "Red Team Tools",
          url: "https://github.com/yeyintminthuhtut/Awesome-Red-Teaming",
          description: "GitHub repository listing tools and resources for red teaming.",
          members: "Unknown",
          category: "hacking"
        },
        {
          name: "SecTools Top 125",
          url: "https://sectools.org",
          description: "List of the top 125 network security tools as voted by the community.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "Hackaday.io Cyber Projects",
          url: "https://hackaday.io/projects/tag/cybersecurity",
          description: "Hardware and software projects related to cybersecurity on Hackaday.io.",
          members: "Unknown",
          category: "technical"
        },
        {
          name: "SecurityFocus",
          url: "https://www.securityfocus.com/",
          description: "Source for security news, vulnerability information, and discussion.",
          members: "Unknown",
          category: "news"
        }
      ]
    }
  ]
  
  // Blogs section data
  const blogs = [
    {
      name: "Technical Security Blogs",
      description: "In-depth technical analysis and research",
      items: [
        {
          name: "Krebs on Security",
          url: "https://krebsonsecurity.com/",
          description: "Investigative journalism on cybercrime and security by Brian Krebs, a former Washington Post reporter.",
          author: "Brian Krebs",
          category: "news"
        },
        {
          name: "Schneier on Security",
          url: "https://www.schneier.com/",
          description: "Security commentary from renowned cryptographer and security expert Bruce Schneier.",
          author: "Bruce Schneier",
          category: "technical"
        },
        {
          name: "Troy Hunt's Blog",
          url: "https://www.troyhunt.com/",
          description: "Web security insights from the creator of Have I Been Pwned, focusing on data breaches and web security.",
          author: "Troy Hunt",
          category: "web"
        },
        {
          name: "Google Project Zero",
          url: "https://googleprojectzero.blogspot.com/",
          description: "Technical blog from Google's security research team, focusing on zero-day vulnerabilities.",
          author: "Google Security Team",
          category: "technical"
        }
      ]
    },
    {
      name: "Security News Blogs",
      description: "Latest cybersecurity news and analysis",
      items: [
        {
          name: "The Hacker News",
          url: "https://thehackernews.com/",
          description: "Cybersecurity news portal covering the latest threats, breaches, and security research.",
          author: "Various",
          category: "news"
        },
        {
          name: "The Record by Recorded Future",
          description: "Comprehensive news site for cybersecurity professionals covering industry trends and threats.",
          url: "https://therecord.media/",
          members: "1M+ monthly readers",
          category: "news"
        },
        {
          name: "Naked Security by Sophos",
          url: "https://nakedsecurity.sophos.com/",
          description: "Security news, opinion, advice, and research from Sophos, written in an accessible style.",
          author: "Sophos Team",
          category: "news"
        },
        {
          name: "SANS Internet Storm Center",
          url: "https://isc.sans.edu/",
          description: "Daily security news and analysis from the SANS Internet Storm Center.",
          author: "SANS Handlers",
          category: "threat"
        },
        {
          name: "Threatpost",
          url: "https://threatpost.com/",
          description: "Independent news site focused on IT security, covering vulnerabilities, malware, and data breaches.",
          author: "Various",
          category: "news"
        }
      ]
    }
  ]
  
  // Best practices for forum participation
  const forumGuidelines = [
    "Search before posting to avoid duplicate questions",
    "Be specific and provide context when asking for help",
    "Share your knowledge and help others when you can",
    "Respect intellectual property and licensing restrictions",
    "Follow each community's specific rules and code of conduct",
    "Use proper formatting for code and log files"
  ]

  // Combine all items for filtering
  const allItems = [
    ...forums.flatMap(category => 
      category.items.map(item => ({
        ...item,
        type: 'forum',
        section: category.name
      }))
    ),
    ...blogs.flatMap(category => 
      category.items.map(item => ({
        ...item,
        type: 'blog',
        section: category.name
      }))
    )
  ];

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all'
    ? allItems
    : allItems.filter(item => item.category === selectedCategory);

  // Group filtered items by their original section
  const filteredForums = forums.map(category => ({
    ...category,
    items: category.items.filter(item => 
      selectedCategory === 'all' || item.category === selectedCategory
    )
  })).filter(category => category.items.length > 0);

  const filteredBlogs = blogs.map(category => ({
    ...category,
    items: category.items.filter(item => 
      selectedCategory === 'all' || item.category === selectedCategory
    )
  })).filter(category => category.items.length > 0);
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <MessageSquare className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Forums & Blogs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Forums & Blogs
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Connect with the cybersecurity community through forums and stay updated with the latest insights from security blogs
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        accentColor="blue"
      />
      
      {filteredItems.length > 0 ? (
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {/* Forums Section */}
              {filteredForums.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <MessageSquare className="w-6 h-6 text-blue-500 mr-3" />
                    Security Forums
                  </h2>
                  
                  {filteredForums.map((category, index) => (
                    <div key={index} className="mb-8 last:mb-0">
                      <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-400 mb-4">{category.description}</p>
                      
                      <div className="grid gap-6 md:grid-cols-2">
                        {category.items.map((forum, forumIndex) => (
                          <div 
                            key={forumIndex} 
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-4">
                              <h4 className="text-xl font-medium text-white">
                                <Link href={forum.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                                  {forum.name}
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </Link>
                              </h4>
                              <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded-full">
                                {categories.find(cat => cat.id === forum.category)?.name || forum.category}
                              </span>
                            </div>
                            
                            <p className="text-gray-300 mb-4">{forum.description}</p>
                            
                            <div className="flex items-center text-gray-500 text-sm">
                              <Users className="w-4 h-4 mr-1" />
                              <span>{forum.members} members</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Blogs Section */}
              {filteredBlogs.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
                    Security Blogs
                  </h2>
                  
                  {filteredBlogs.map((category, index) => (
                    <div key={index} className="mb-8 last:mb-0">
                      <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-400 mb-4">{category.description}</p>
                      
                      <div className="grid gap-6 md:grid-cols-2">
                        {category.items.map((blog, blogIndex) => (
                          <div 
                            key={blogIndex} 
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-4">
                              <h4 className="text-xl font-medium text-white">
                                <Link href={blog.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                                  {blog.name}
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </Link>
                              </h4>
                              <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded-full">
                                {categories.find(cat => cat.id === blog.category)?.name || blog.category}
                              </span>
                            </div>
                            
                            <p className="text-gray-300 mb-4">{blog.description}</p>
                            
                            <div className="flex items-center text-gray-500 text-sm">
                              <span>By {blog.author}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
                <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No resources match your filter</h3>
                <p className="text-gray-400 mb-6">Try selecting a different category or clear your filter</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory('all')}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" /> Clear filters
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Guidelines Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Forum Participation Guidelines</h2>
            <ul className="space-y-4">
              {forumGuidelines.map((guideline, index) => (
                <li key={index} className="flex gap-3">
                  <ThumbsUp className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
                  <div>
                    <p className="text-gray-300">{guideline}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 