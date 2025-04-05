"use client"

import { useState } from "react"
import { Shield, ExternalLink, Users, MessageSquare, Code, Target, Server, Lock, AlertTriangle, BookOpen, Briefcase, Database, Brain, Cloud, Search, Filter, Wrench } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'
import { redditCommunities } from "@/data/reddit-communities"

export default function RedditPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Categories for filtering
  const categories = [
    { id: 'All', name: 'All Subreddits', icon: Users },
    { id: 'general', name: 'General Security', icon: Shield },
    { id: 'technical', name: 'Technical', icon: Code },
    { id: 'pentesting', name: 'Penetration Testing', icon: Target },
    { id: 'blue_team', name: 'Blue Team', icon: Database },
    { id: 'red_team', name: 'Red Team', icon: Target },
    { id: 'malware', name: 'Malware Analysis', icon: AlertTriangle },
    { id: 'networking', name: 'Networking', icon: Server },
    { id: 'career', name: 'Career', icon: Briefcase },
    { id: 'certification', name: 'Certifications', icon: BookOpen },
    { id: 'tools', name: 'Security Tools', icon: Wrench },
    { id: 'ctf', name: 'CTF Challenges', icon: Target },
    { id: 'forensics', name: 'Digital Forensics', icon: Search },
    { id: 'privacy', name: 'Privacy', icon: Lock },
    { id: 'cloud', name: 'Cloud Security', icon: Cloud },
    { id: 'research', name: 'Research', icon: Brain }
  ]

  // Filter subreddits based on selected category
  const filteredSubreddits = selectedCategory === 'All'
    ? redditCommunities
    : redditCommunities.filter(subreddit => {
        // Safety check for subreddit.categories
        if (!subreddit.categories || !Array.isArray(subreddit.categories)) {
          return false;
        }
        
        // Case-insensitive comparison
        return subreddit.categories.some(category =>
          typeof category === 'string' && category.toLowerCase() === selectedCategory.toLowerCase()
        );
      });

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
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Guidelines Section */}
        <div className="mt-16 mb-12 bg-gradient-to-r from-red-950/30 via-pink-950/30 to-red-950/30 border border-red-900/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Reddit Etiquette</h2>
          <p className="text-gray-400 mb-6">Here are some helpful guidelines for engaging effectively with cybersecurity subreddits:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidelines.map((guideline, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="bg-red-600/20 w-8 h-8 flex items-center justify-center rounded-full mr-2">
                    <span className="text-red-400 font-medium">{index + 1}</span>
                  </div>
                  <span className="text-red-400 text-sm font-medium">Guideline</span>
                </div>
                <p className="text-gray-300 text-sm">
                  {guideline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 