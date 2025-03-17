"use client"

import { useState } from "react"
import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, Bookmark, Code, Target, Server, Lock, AlertTriangle, BookOpen, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

export default function RedditPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Categories for filtering
  const categories = [
    { id: 'All', name: 'All Subreddits', icon: Users },
    { id: 'general', name: 'General Security', icon: Shield },
    { id: 'technical', name: 'Technical', icon: Code },
    { id: 'pentesting', name: 'Penetration Testing', icon: Target },
    { id: 'malware', name: 'Malware Analysis', icon: AlertTriangle },
    { id: 'networking', name: 'Networking', icon: Server },
    { id: 'career', name: 'Career & Certifications', icon: Briefcase },
  ]

  const popularSubreddits = [
    {
      name: "r/cybersecurity",
      description: "The central hub for cybersecurity professionals, featuring discussions on latest threats, tools, and career advice.",
      members: "584K+",
      url: "https://www.reddit.com/r/cybersecurity/",
      categories: ["general", "career"]
    },
    {
      name: "r/netsec",
      description: "Technical discussions about network and information security, with a focus on latest vulnerabilities and research.",
      members: "495K+",
      url: "https://www.reddit.com/r/netsec/",
      categories: ["technical", "networking"]
    },
    {
      name: "r/hacking",
      description: "Educational discussions about hacking techniques, tools, and methodologies in an ethical context.",
      members: "2.1M+",
      url: "https://www.reddit.com/r/hacking/",
      categories: ["pentesting", "technical"]
    },
    {
      name: "r/AskNetsec",
      description: "Q&A forum for network security professionals and beginners seeking advice on InfoSec topics.",
      members: "198K+",
      url: "https://www.reddit.com/r/AskNetsec/",
      categories: ["general", "networking", "career"]
    },
    {
      name: "r/reverseengineering",
      description: "Community focused on reverse engineering techniques and tools for software analysis.",
      members: "150K+",
      url: "https://www.reddit.com/r/ReverseEngineering/",
      categories: ["technical", "malware"]
    },
    {
      name: "r/networking",
      description: "Industry professionals discussing enterprise networking, infrastructure, and troubleshooting.",
      members: "300K+",
      url: "https://www.reddit.com/r/networking/",
      categories: ["networking"]
    },
    {
      name: "r/linuxadmin",
      description: "Linux system administration discussions with security implementations and best practices.",
      members: "180K+",
      url: "https://www.reddit.com/r/linuxadmin/",
      categories: ["technical", "networking"]
    },
    {
      name: "r/malware",
      description: "Analysis and discussion of malware, sharing techniques for detection and prevention.",
      members: "130K+",
      url: "https://www.reddit.com/r/malware/",
      categories: ["malware"]
    },
    {
      name: "r/ethicalhacking",
      description: "Legal and ethical hacking discussions, focusing on educational content and methodology.",
      members: "120K+",
      url: "https://www.reddit.com/r/ethicalhacking/",
      categories: ["pentesting"]
    },
    {
      name: "r/comptia",
      description: "CompTIA certification discussion forum for Security+, Network+, and other IT certifications.",
      members: "170K+",
      url: "https://www.reddit.com/r/comptia/",
      categories: ["career"]
    },
    {
      name: "r/cybersecurity101",
      description: "Beginner-friendly community for foundational cybersecurity concepts and learning resources.",
      members: "75K+",
      url: "https://www.reddit.com/r/cybersecurity101/",
      categories: ["general"]
    },
    {
      name: "r/sysadmin",
      description: "IT professionals discussing system administration, including security considerations.",
      members: "700K+",
      url: "https://www.reddit.com/r/sysadmin/",
      categories: ["technical", "networking"]
    },
    {
      name: "r/blueteamsec",
      description: "Focused on defensive security operations, threat detection, and incident response.",
      members: "50K+",
      url: "https://www.reddit.com/r/blueteamsec/",
      categories: ["general"]
    },
    {
      name: "r/infosecjobs",
      description: "Information security job postings and career advice for security professionals.",
      members: "40K+",
      url: "https://www.reddit.com/r/infosecjobs/",
      categories: ["career"]
    },
    {
      name: "r/bugbounty",
      description: "Bug bounty hunters sharing experiences, methodologies, and program information.",
      members: "85K+",
      url: "https://www.reddit.com/r/bugbounty/",
      categories: ["pentesting"]
    }
  ]

  // Filter subreddits based on selected category
  const filteredSubreddits = selectedCategory === 'All'
    ? popularSubreddits
    : popularSubreddits.filter(subreddit => subreddit.categories.includes(selectedCategory));

  // Featured subreddits - display first 4 of filter results or all subreddits
  const featuredSubreddits = filteredSubreddits.slice(0, 4);
  
  // Additional subreddits - display the rest
  const additionalSubreddits = filteredSubreddits.slice(4);

  const guidelines = [
    "Read each subreddit's rules before posting or commenting",
    "Use descriptive titles and provide context in your posts",
    "Search before posting to avoid duplicate questions",
    "Be respectful and professional in your interactions",
    "Don't share sensitive or personal information",
    "Avoid requesting or sharing illegal content",
    "Give credit when sharing others' work",
    "Use appropriate post flairs when available"
  ]

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              Community Resources
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reddit Communities
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl">
              Join cybersecurity subreddits to connect with professionals, learn new skills, and stay updated with the latest security trends.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Component */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        accentColor="red"
      />
      
      {/* Resources Count */}
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm">
            Showing {filteredSubreddits.length} {filteredSubreddits.length === 1 ? 'subreddit' : 'subreddits'}
            {selectedCategory !== 'All' ? ` in category: ${categories.find(c => c.id === selectedCategory)?.name || selectedCategory}` : ''}
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8">
        {/* Featured Subreddits */}
        {featuredSubreddits.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 text-red-500 mr-2" />
              <h2 className="text-xl font-bold text-white">
                {filteredSubreddits.length > 4 ? "Featured Subreddits" : "Subreddits"}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredSubreddits.map((subreddit, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-red-500/50 transition-colors"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {subreddit.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {subreddit.description}
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{subreddit.members}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {subreddit.categories.map((category, catIndex) => (
                        <span 
                          key={catIndex}
                          className="bg-red-900/30 text-red-400 text-xs px-2 py-1 rounded"
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={subreddit.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors"
                    >
                      Visit Subreddit
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Additional Subreddits */}
        {additionalSubreddits.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-5 h-5 text-red-500 mr-2" />
              <h2 className="text-xl font-bold text-white">More Subreddits</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalSubreddits.map((subreddit, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-red-500/50 transition-colors flex items-start justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {subreddit.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mt-1">
                      {subreddit.description}
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{subreddit.members}</span>
                      
                      <div className="flex ml-4 flex-wrap gap-2">
                        {subreddit.categories.map((category, catIndex) => (
                          <span 
                            key={catIndex}
                            className="bg-red-900/30 text-red-400 text-xs px-2 py-1 rounded"
                          >
                            {category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={subreddit.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2 px-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors whitespace-nowrap"
                  >
                    Visit
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* No Results */}
        {filteredSubreddits.length === 0 && (
          <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mb-20">
            <div className="h-12 w-12 text-gray-500 mx-auto mb-4">🔍</div>
            <h3 className="text-xl font-medium text-white mb-2">No subreddits found</h3>
            <p className="text-gray-400 mb-6">Try selecting a different category</p>
            <Button 
              onClick={() => setSelectedCategory('All')}
              className="flex items-center gap-2"
            >
              Clear filter
            </Button>
          </div>
        )}
      </div>
      
      {/* Resources Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Community Guidelines
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
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
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join the Discussion?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Engage with the cybersecurity community on Reddit and stay updated with the latest security trends, tools, and insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started on Reddit
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/community">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Explore Other Communities
                  <MessageSquare className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 