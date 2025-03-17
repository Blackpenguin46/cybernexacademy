"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Globe, Calendar, Users, Newspaper, Headphones, Trophy, GraduationCap, ExternalLink, Search, Filter, X } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Resource category interface
interface ResourceCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
}

// Resource interface
interface Resource {
  title: string;
  description: string;
  url: string;
  category: string;
  tags?: string[];
}

// Categories definition
const resourceCategories: ResourceCategory[] = [
  { id: 'books', name: 'Books & Guides', icon: Book, color: 'blue' },
  { id: 'websites', name: 'Websites', icon: Globe, color: 'green' },
  { id: 'conferences', name: 'Conferences', icon: Calendar, color: 'purple' },
  { id: 'organizations', name: 'Organizations', icon: Users, color: 'orange' },
  { id: 'news', name: 'News & Blogs', icon: Newspaper, color: 'red' },
  { id: 'podcasts', name: 'Podcasts', icon: Headphones, color: 'yellow' },
  { id: 'challenges', name: 'Challenges', icon: Trophy, color: 'indigo' },
  { id: 'education', name: 'Education', icon: GraduationCap, color: 'cyan' },
];

// Resources data sourced from CyberDegrees.org
const resourcesData: Record<string, Resource[]> = {
  books: [
    {
      title: "The Art of Deception",
      description: "Kevin Mitnick's classic work on social engineering and the human element of security",
      url: "https://www.wiley.com/en-us/The+Art+of+Deception%3A+Controlling+the+Human+Element+of+Security-p-9780764542800",
      category: "books",
      tags: ["social engineering", "beginner", "classic"]
    },
    {
      title: "Applied Cryptography",
      description: "Bruce Schneier's comprehensive reference for cryptography and security protocols",
      url: "https://www.schneier.com/books/applied-cryptography/",
      category: "books",
      tags: ["cryptography", "advanced", "reference"]
    },
    {
      title: "Practical Malware Analysis",
      description: "A hands-on guide to dissecting malicious software by Michael Sikorski and Andrew Honig",
      url: "https://nostarch.com/malware",
      category: "books",
      tags: ["malware", "analysis", "intermediate"]
    },
    {
      title: "NIST Cybersecurity Framework",
      description: "Framework for improving critical infrastructure cybersecurity",
      url: "https://www.nist.gov/cyberframework",
      category: "books",
      tags: ["government", "standards", "compliance"]
    },
    {
      title: "Hacking: The Art of Exploitation",
      description: "Jon Erickson's guide to the techniques of computer system and network exploitation",
      url: "https://nostarch.com/hacking2.htm",
      category: "books",
      tags: ["ethical hacking", "intermediate", "exploitation"]
    },
    {
      title: "Social Engineering: The Science of Human Hacking",
      description: "Christopher Hadnagy's guide to understanding and defending against social attacks",
      url: "https://www.wiley.com/en-us/Social+Engineering%3A+The+Science+of+Human+Hacking%2C+2nd+Edition-p-9781119433385",
      category: "books",
      tags: ["social engineering", "intermediate", "defense"]
    }
  ],
  websites: [
    {
      title: "OWASP",
      description: "The Open Web Application Security Project, providing free resources for web application security",
      url: "https://owasp.org/",
      category: "websites",
      tags: ["web security", "open source", "standards"]
    },
    {
      title: "Krebs on Security",
      description: "Brian Krebs' in-depth cybersecurity news and investigation blog",
      url: "https://krebsonsecurity.com/",
      category: "websites",
      tags: ["news", "investigations", "current events"]
    },
    {
      title: "HaveIBeenPwned",
      description: "Check if your accounts have been compromised in data breaches",
      url: "https://haveibeenpwned.com/",
      category: "websites",
      tags: ["breach detection", "service", "identity protection"]
    },
    {
      title: "VirusTotal",
      description: "Free service that analyzes files and URLs for viruses and malware",
      url: "https://www.virustotal.com/",
      category: "websites",
      tags: ["malware", "analysis", "tool"]
    },
    {
      title: "ExploitDB",
      description: "Archive of exploits and vulnerable software maintained by Offensive Security",
      url: "https://www.exploit-db.com/",
      category: "websites",
      tags: ["exploits", "vulnerabilities", "database"]
    },
    {
      title: "US-CERT",
      description: "United States Computer Emergency Readiness Team - cyber alerts and technical guidance",
      url: "https://www.cisa.gov/uscert/",
      category: "websites",
      tags: ["government", "alerts", "guidance"]
    }
  ],
  conferences: [
    {
      title: "DEF CON",
      description: "One of the world's largest hacker conventions, held annually in Las Vegas",
      url: "https://defcon.org/",
      category: "conferences",
      tags: ["hackers", "large", "annual"]
    },
    {
      title: "Black Hat",
      description: "Information security conferences presented in multiple countries",
      url: "https://www.blackhat.com/",
      category: "conferences",
      tags: ["professional", "global", "training"]
    },
    {
      title: "RSA Conference",
      description: "Professional information security conference focused on industry and enterprises",
      url: "https://www.rsaconference.com/",
      category: "conferences",
      tags: ["enterprise", "business", "industry"]
    },
    {
      title: "BSides",
      description: "Community-driven framework for building events for and by information security community members",
      url: "http://www.securitybsides.com/",
      category: "conferences",
      tags: ["community", "local", "accessibility"]
    },
    {
      title: "SANS Summits",
      description: "Focused technical cybersecurity events on specific security topics",
      url: "https://www.sans.org/cyber-security-summit/",
      category: "conferences",
      tags: ["technical", "focused", "training"]
    }
  ],
  organizations: [
    {
      title: "(ISC)²",
      description: "International Information System Security Certification Consortium, administers the CISSP certification",
      url: "https://www.isc2.org/",
      category: "organizations",
      tags: ["certification", "professional", "global"]
    },
    {
      title: "ISACA",
      description: "Information Systems Audit and Control Association, focuses on IT governance",
      url: "https://www.isaca.org/",
      category: "organizations",
      tags: ["governance", "audit", "compliance"]
    },
    {
      title: "CompTIA",
      description: "Computing Technology Industry Association, vendor-neutral certifications",
      url: "https://www.comptia.org/",
      category: "organizations",
      tags: ["certification", "entry-level", "vendor-neutral"]
    },
    {
      title: "EC-Council",
      description: "International Council of E-Commerce Consultants, administers CEH certification",
      url: "https://www.eccouncil.org/",
      category: "organizations",
      tags: ["ethical hacking", "certification", "training"]
    },
    {
      title: "SANS Institute",
      description: "Specializes in information security training and security certification",
      url: "https://www.sans.org/",
      category: "organizations",
      tags: ["training", "research", "certification"]
    }
  ],
  news: [
    {
      title: "Krebs on Security",
      description: "Brian Krebs' in-depth cybersecurity news and investigation blog",
      url: "https://krebsonsecurity.com/",
      category: "news",
      tags: ["investigations", "journalism", "current events"]
    },
    {
      title: "The Hacker News",
      description: "Cybersecurity news platform covering latest hacks, breaches, and threats",
      url: "https://thehackernews.com/",
      category: "news",
      tags: ["news", "vulnerabilities", "updates"]
    },
    {
      title: "Dark Reading",
      description: "Cybersecurity news and analysis for the IT industry",
      url: "https://www.darkreading.com/",
      category: "news",
      tags: ["industry", "professional", "analysis"]
    },
    {
      title: "Threatpost",
      description: "Independent news site focused on IT security",
      url: "https://threatpost.com/",
      category: "news",
      tags: ["threats", "vulnerabilities", "news"]
    },
    {
      title: "Schneier on Security",
      description: "Bruce Schneier's blog on security, technology, and society",
      url: "https://www.schneier.com/",
      category: "news",
      tags: ["analysis", "opinion", "privacy"]
    }
  ],
  podcasts: [
    {
      title: "Darknet Diaries",
      description: "True stories from the dark side of the internet by Jack Rhysider",
      url: "https://darknetdiaries.com/",
      category: "podcasts",
      tags: ["stories", "investigations", "popular"]
    },
    {
      title: "Security Now",
      description: "Weekly internet security podcast hosted by Steve Gibson and Leo Laporte",
      url: "https://twit.tv/shows/security-now",
      category: "podcasts",
      tags: ["technical", "news", "longstanding"]
    },
    {
      title: "SANS Internet Storm Center",
      description: "Daily cybersecurity news and analysis podcast",
      url: "https://isc.sans.edu/podcast.html",
      category: "podcasts",
      tags: ["daily", "analysis", "technical"]
    },
    {
      title: "Risky Business",
      description: "Weekly information security podcast focusing on news and current events",
      url: "https://risky.biz/",
      category: "podcasts",
      tags: ["news", "industry", "analysis"]
    },
    {
      title: "Cyber Security Sauna",
      description: "Podcast on cybersecurity topics from F-Secure",
      url: "https://www.f-secure.com/en/business/resources/podcasts/cyber-security-sauna",
      category: "podcasts",
      tags: ["discussions", "technical", "educational"]
    }
  ],
  challenges: [
    {
      title: "Hack The Box",
      description: "Online platform to test and advance your penetration testing skills",
      url: "https://www.hackthebox.eu/",
      category: "challenges",
      tags: ["penetration testing", "practice", "community"]
    },
    {
      title: "TryHackMe",
      description: "Online platform with learning and practice cyber security challenges",
      url: "https://tryhackme.com/",
      category: "challenges",
      tags: ["learning", "guided", "beginner-friendly"]
    },
    {
      title: "CyberDefenders",
      description: "Blue team security challenges and practice labs",
      url: "https://cyberdefenders.org/",
      category: "challenges",
      tags: ["blue team", "defensive", "labs"]
    },
    {
      title: "CTF Time",
      description: "CTF event calendar and team rankings",
      url: "https://ctftime.org/",
      category: "challenges",
      tags: ["competitions", "teams", "events"]
    },
    {
      title: "OverTheWire",
      description: "Wargames to learn and practice security concepts",
      url: "https://overthewire.org/wargames/",
      category: "challenges",
      tags: ["wargames", "command line", "fundamentals"]
    }
  ],
  education: [
    {
      title: "Cybrary",
      description: "Free and premium cybersecurity and IT career development platform",
      url: "https://www.cybrary.it/",
      category: "education",
      tags: ["courses", "certification", "training"]
    },
    {
      title: "SANS Courses",
      description: "Professional cybersecurity training from a leading provider",
      url: "https://www.sans.org/cyber-security-courses/",
      category: "education",
      tags: ["professional", "hands-on", "certification"]
    },
    {
      title: "Codecademy",
      description: "Interactive platform for learning coding and cybersecurity",
      url: "https://www.codecademy.com/",
      category: "education",
      tags: ["coding", "interactive", "web development"]
    },
    {
      title: "edX Cybersecurity Courses",
      description: "Online cybersecurity courses from top universities and institutions",
      url: "https://www.edx.org/learn/cybersecurity",
      category: "education",
      tags: ["academic", "university", "certificates"]
    },
    {
      title: "Cisco Networking Academy",
      description: "IT skills and career building program with cybersecurity tracks",
      url: "https://www.netacad.com/",
      category: "education",
      tags: ["networking", "certification", "entry-level"]
    },
    {
      title: "INE Security",
      description: "Comprehensive cybersecurity training platform with hands-on labs",
      url: "https://ine.com/pages/cybersecurity",
      category: "education",
      tags: ["professional", "labs", "certification"]
    }
  ],
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Function to filter resources based on search query and selected category
  const getFilteredResources = (category: string) => {
    const resources = category === 'all' 
      ? Object.values(resourcesData).flat() 
      : resourcesData[category] || [];
    
    if (!searchQuery) return resources;
    
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (resource.tags && resource.tags.some(tag => 
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    );
  };

  // Get all filtered resources
  const allFilteredResources = getFilteredResources(selectedCategory);
  
  // Function to render the color badge based on category
  const getCategoryColor = (categoryId: string) => {
    const category = resourceCategories.find(cat => cat.id === categoryId);
    if (!category) return 'gray';
    return category.color;
  };
  
  // Function to render category icon
  const getCategoryIcon = (categoryId: string) => {
    const category = resourceCategories.find(cat => cat.id === categoryId);
    if (!category) return Globe;
    return category.icon;
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      <SectionHeader
        title="Cybersecurity Resources"
        description="Comprehensive collection of cybersecurity resources including books, websites, organizations, and more"
        icon={<Book className="w-12 h-12 text-neon-blue" />}
      />
      
      <div className="mt-8 max-w-6xl mx-auto">
        {/* Search and Filter Section */}
        <div className="bg-gray-900/50 rounded-lg p-6 mb-8 border border-neon-blue/20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="search" className="text-sm text-gray-400 mb-2 block">Search Resources</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input 
                  id="search"
                  type="text" 
                  placeholder="Search by title, description, or tags..." 
                  className="pl-10 bg-gray-800 border-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="md:w-1/3">
              <label htmlFor="category" className="text-sm text-gray-400 mb-2 block">Filter by Category</label>
              <select 
                id="category"
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-gray-300 focus:ring-neon-blue focus:border-neon-blue"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {resourceCategories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          {searchQuery && (
            <div className="mt-4 flex items-center text-sm">
              <div className="text-gray-400">
                Found {allFilteredResources.length} results for "{searchQuery}"
              </div>
              {searchQuery && (
                <button 
                  className="ml-4 text-neon-blue hover:underline flex items-center"
                  onClick={() => setSearchQuery('')}
                >
                  <X className="h-3 w-3 mr-1" /> Clear
                </button>
              )}
            </div>
          )}
        </div>
        
        {/* Resources Display Section */}
        <Tabs defaultValue="grid" className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Resources' : resourceCategories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <TabsList className="bg-gray-800">
              <TabsTrigger value="grid" className="data-[state=active]:bg-gray-700">Grid View</TabsTrigger>
              <TabsTrigger value="list" className="data-[state=active]:bg-gray-700">List View</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="grid">
            {allFilteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allFilteredResources.map((resource, index) => {
                  const CategoryIcon = getCategoryIcon(resource.category);
                  const categoryColor = getCategoryColor(resource.category);
                  
                  return (
                    <a 
                      key={index} 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-900/50 border border-gray-800 hover:border-neon-blue/50 rounded-lg p-5 transition-all duration-200 hover:shadow-lg hover:shadow-neon-blue/10 group"
                    >
                      <div className="flex items-center mb-3">
                        <div className={`p-2 rounded-lg bg-${categoryColor}-900/30 text-${categoryColor}-400 mr-3`}>
                          <CategoryIcon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors line-clamp-1">{resource.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{resource.description}</p>
                      
                      {resource.tags && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {resource.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 capitalize">{resource.category}</span>
                        <span className="text-neon-blue text-sm flex items-center">
                          Visit <ExternalLink className="w-3 h-3 ml-1" />
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-900/50 rounded-lg border border-gray-800">
                <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No resources found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
                <Button 
                  variant="outline" 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" /> Clear filters
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="list">
            {allFilteredResources.length > 0 ? (
              <div className="space-y-4">
                {allFilteredResources.map((resource, index) => {
                  const CategoryIcon = getCategoryIcon(resource.category);
                  const categoryColor = getCategoryColor(resource.category);
                  
                  return (
                    <a 
                      key={index} 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-gray-900/50 border border-gray-800 hover:border-neon-blue/50 rounded-lg p-4 transition-all duration-200 hover:shadow-lg hover:shadow-neon-blue/10 group"
                    >
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg bg-${categoryColor}-900/30 text-${categoryColor}-400 mr-4 mt-1`}>
                          <CategoryIcon className="h-5 w-5" />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors">{resource.title}</h3>
                            <span className="text-neon-blue text-sm flex items-center">
                              <ExternalLink className="w-4 h-4" />
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm mt-1">{resource.description}</p>
                          
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex flex-wrap gap-2">
                              {resource.tags && resource.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span key={tagIndex} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-400">
                                  {tag}
                                </span>
                              ))}
                              {resource.tags && resource.tags.length > 3 && (
                                <span className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-400">
                                  +{resource.tags.length - 3}
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-gray-500 capitalize">{resource.category}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-900/50 rounded-lg border border-gray-800">
                <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No resources found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
                <Button 
                  variant="outline" 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" /> Clear filters
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="bg-gray-900/30 border border-neon-blue/20 rounded-lg p-6 mt-10">
          <div className="flex items-center mb-4">
            <Globe className="h-6 w-6 text-neon-blue mr-3" />
            <h2 className="text-xl font-bold text-white">Resources Attribution</h2>
          </div>
          <p className="text-gray-300 mb-3">
            Many of these resources have been curated from <a href="https://www.cyberdegrees.org/resources/the-big-list/" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">CyberDegrees.org's Big List of Resources</a>, along with additional contributions from cybersecurity professionals and educators.
          </p>
          <p className="text-gray-400 text-sm">
            We encourage you to explore these resources to deepen your knowledge in cybersecurity. If you have suggestions for additional resources, please let us know.
          </p>
        </div>
        
        <div className="text-center mt-10">
          <Link href="/academy">
            <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
              Return to Academy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 