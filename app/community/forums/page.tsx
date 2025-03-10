"use client"

import React from 'react'
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
  Search
} from 'lucide-react'

export default function ForumsAndBlogsPage() {
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
          category: "General Security"
        },
        {
          name: "Reddit r/netsec",
          url: "https://www.reddit.com/r/netsec/",
          description: "Technical information security content and discussion focused on network and application security.",
          members: "1.2M+",
          category: "Technical Security"
        },
        {
          name: "Hack Forums",
          url: "https://hackforums.net/",
          description: "Large community focused on computer security, programming, and technology discussions.",
          members: "4M+",
          category: "General Hacking"
        },
        {
          name: "OWASP Community",
          url: "https://owasp.org/www-community/",
          description: "Open Web Application Security Project community forums for web security discussions.",
          members: "250K+",
          category: "Web Security"
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
          category: "Malware Analysis"
        },
        {
          name: "Reverse Engineering",
          url: "https://forum.reverse4you.org/",
          description: "Community focused on reverse engineering techniques, tools, and challenges.",
          members: "150K+",
          category: "Reverse Engineering"
        },
        {
          name: "Exploit Database Forums",
          url: "https://www.exploit-db.com/",
          description: "Discussion around exploits, vulnerabilities, and penetration testing.",
          members: "300K+",
          category: "Exploit Development"
        },
        {
          name: "Digital Forensics Forum",
          url: "https://www.forensicfocus.com/forums/",
          description: "Community for digital forensics professionals and enthusiasts.",
          members: "80K+",
          category: "Digital Forensics"
        }
      ]
    },
    {
      name: "Professional Communities",
      description: "Forums for security professionals and researchers",
      items: [
        {
          name: "SANS Internet Storm Center",
          url: "https://isc.sans.edu/forums/",
          description: "Community of security professionals sharing information about current threats.",
          members: "200K+",
          category: "Threat Intelligence"
        },
        {
          name: "Security Stack Exchange",
          url: "https://security.stackexchange.com/",
          description: "Q&A site for information security professionals.",
          members: "350K+",
          category: "Q&A"
        },
        {
          name: "Schneier on Security Blog Comments",
          url: "https://www.schneier.com/",
          description: "Discussion around Bruce Schneier's security blog posts.",
          members: "N/A",
          category: "Security Commentary"
        },
        {
          name: "CISO Platform",
          url: "https://www.cisoplatform.com/",
          description: "Community for Chief Information Security Officers and security leaders.",
          members: "50K+",
          category: "Leadership"
        }
      ]
    }
  ]
  
  // Blogs section data
  const blogs = [
    {
      name: "Security Research Blogs",
      description: "Blogs focused on cutting-edge security research",
      items: [
        {
          name: "Krebs on Security",
          url: "https://krebsonsecurity.com/",
          description: "In-depth security news and investigation by Brian Krebs, focusing on cybercrime, data breaches, and security awareness.",
          author: "Brian Krebs",
          category: "Security News"
        },
        {
          name: "Google Project Zero",
          url: "https://googleprojectzero.blogspot.com/",
          description: "Technical blog by Google's security research team focused on zero-day vulnerabilities and exploit research.",
          author: "Google Security Team",
          category: "Vulnerability Research"
        },
        {
          name: "Schneier on Security",
          url: "https://www.schneier.com/",
          description: "Commentary on security issues, technology, and policy by renowned security expert Bruce Schneier.",
          author: "Bruce Schneier",
          category: "Security Commentary"
        },
        {
          name: "The Hacker News",
          url: "https://thehackernews.com/",
          description: "Cybersecurity news portal covering the latest hacks, breaches, and cyber attacks.",
          author: "Various",
          category: "Security News"
        }
      ]
    },
    {
      name: "Technical Security Blogs",
      description: "Blogs with deep technical security content",
      items: [
        {
          name: "Trail of Bits Blog",
          url: "https://blog.trailofbits.com/",
          description: "Technical deep dives into security research, vulnerability analysis, and tool development.",
          author: "Trail of Bits Team",
          category: "Technical Research"
        },
        {
          name: "PortSwigger Research",
          url: "https://portswigger.net/research",
          description: "Web security research from the creators of Burp Suite, focusing on web vulnerabilities and exploitation techniques.",
          author: "PortSwigger Team",
          category: "Web Security"
        },
        {
          name: "Malwarebytes Labs",
          url: "https://blog.malwarebytes.com/",
          description: "Research and analysis of the latest threats, malware, and cybersecurity trends.",
          author: "Malwarebytes Team",
          category: "Threat Research"
        },
        {
          name: "Cloudflare Blog",
          url: "https://blog.cloudflare.com/",
          description: "Insights into internet security, DDoS protection, and web performance.",
          author: "Cloudflare Team",
          category: "Network Security"
        }
      ]
    },
    {
      name: "Industry Blogs",
      description: "Blogs covering industry trends and best practices",
      items: [
        {
          name: "Dark Reading",
          url: "https://www.darkreading.com/",
          description: "Comprehensive source for news, analysis, and insights on cybersecurity for security professionals.",
          author: "Various",
          category: "Industry News"
        },
        {
          name: "Naked Security by Sophos",
          url: "https://nakedsecurity.sophos.com/",
          description: "Security news, opinion, advice, and research from Sophos, written in an accessible style.",
          author: "Sophos Team",
          category: "Security News"
        },
        {
          name: "SANS Internet Storm Center",
          url: "https://isc.sans.edu/",
          description: "Daily security news and analysis from the SANS Internet Storm Center.",
          author: "SANS Handlers",
          category: "Threat Intelligence"
        },
        {
          name: "Threatpost",
          url: "https://threatpost.com/",
          description: "Independent news site focused on IT security, covering vulnerabilities, malware, and data breaches.",
          author: "Various",
          category: "Security News"
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
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Forums & Blogs</h1>
            <p className="text-xl text-gray-300 mb-12">
              Connect with the cybersecurity community through forums and stay updated with the latest insights from security blogs
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="flex overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50 focus-within:border-blue-500">
                <div className="flex items-center pl-4">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="w-full bg-transparent py-3 px-4 text-gray-200 outline-none"
                  placeholder="Search forums and blogs..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Forums Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center mb-12">
            <MessageSquare className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-3xl font-bold text-white">Security Forums</h2>
          </div>
          
          {forums.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-gray-400 mb-6">{category.description}</p>
              
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
                        {forum.category}
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
      </section>
      
      {/* Blogs Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="flex items-center mb-12">
            <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-3xl font-bold text-white">Security Blogs</h2>
          </div>
          
          {blogs.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-gray-400 mb-6">{category.description}</p>
              
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
                        {blog.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{blog.description}</p>
                    
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      <span>By {blog.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Guidelines Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Forum Participation Guidelines
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {forumGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex-shrink-0">
                    <ThumbsUp className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-gray-300">{guideline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join the Conversation</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Engaging with the cybersecurity community is one of the best ways to stay updated and improve your skills. 
              Find a forum or blog that matches your interests and start participating today.
            </p>
            <Link 
              href="/community" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Explore More Community Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 