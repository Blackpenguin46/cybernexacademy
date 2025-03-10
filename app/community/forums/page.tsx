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
  Search,
  Filter,
  X,
  Code,
  Database,
  AlertTriangle
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'
import SectionHeader from '@/app/components/SectionHeader'

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
          name: "Dark Reading",
          url: "https://www.darkreading.com/",
          description: "Comprehensive source for news, analysis, and insights on cybersecurity for security professionals.",
          author: "Various",
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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Forums & Blogs"
          description="Connect with the cybersecurity community through forums and stay updated with the latest insights from security blogs"
          icon={<MessageSquare className="h-10 w-10 text-blue-500" />}
        />

        {/* Categories Filter */}
        <div className="mb-8">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            accentColor="blue"
          />
        </div>
        
        {filteredItems.length > 0 ? (
          <>
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
                          className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
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
                          className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
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
          </>
        ) : (
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
        )}
        
        {/* Guidelines Section */}
        <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-white">Forum Participation Guidelines</h2>
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
    </div>
  )
} 