"use client"

import { useState } from "react"
import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, BookOpen, Target, Code, Server, Lock, AlertTriangle, Monitor, Flame, Award, Briefcase, Filter, X, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'
import { useDiscordServers } from '@/app/hooks/useResources'

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

export default function DiscordPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  // Fetch Discord servers from the API
  const { data: servers, isLoading, error, lastUpdated } = useDiscordServers();
  
  // Categories for filtering
  const categories: Category[] = [
    { id: 'All', name: 'All Servers', icon: Users },
    { id: 'learning', name: 'Learning', icon: BookOpen },
    { id: 'ctf', name: 'CTF & Challenges', icon: Target },
    { id: 'pentesting', name: 'Penetration Testing', icon: Code },
    { id: 'blue_team', name: 'Blue Team', icon: Shield },
    { id: 'career', name: 'Career & Certifications', icon: Briefcase },
    { id: 'community', name: 'General Community', icon: MessageSquare },
  ]
  
  // Filter servers based on selected category
  const filteredServers = selectedCategory === 'All'
    ? servers
    : servers.filter(server => server.categories.includes(selectedCategory));
    
  // For additional servers section, we can either:
  // 1. Use a subset of the servers that aren't featured in the main section
  // 2. Fetch a separate list of "additional servers" from the API
  // For this example, we'll hard-code some additional servers
  const additionalServers = [
    { name: "Cybersecurity Career Network", url: "https://discord.gg/cybercareernetwork" },
    { name: "Black Hat Ethical Hacking", url: "https://discord.gg/blackhat" },
    { name: "Bug Bounty Hunter's Hangout", url: "https://discord.gg/bugbounty" },
    // More servers...
  ]

  const features = [
    {
      title: "Real-time Learning",
      description: "Engage in live discussions, workshops, and training sessions with security professionals."
    },
    {
      title: "Community Support",
      description: "Get help with challenges, certifications, and career guidance from experienced members."
    },
    {
      title: "CTF Events",
      description: "Participate in regular Capture The Flag events and security challenges."
    },
    {
      title: "Resource Sharing",
      description: "Access curated learning resources, tools, and security news."
    },
    {
      title: "Networking",
      description: "Connect with professionals, recruiters, and like-minded security enthusiasts."
    },
    {
      title: "Job Opportunities",
      description: "Find job postings, internships, and career opportunities in cybersecurity."
    }
  ]

  const guidelines = [
    "Use appropriate channels for different topics",
    "Be respectful and professional with other members",
    "No spamming or self-promotion without permission",
    "Keep discussions security-focused and relevant",
    "Don't share sensitive or personal information",
    "Follow the server's verification process",
    "Use code blocks for sharing code snippets",
    "Help others and contribute positively to discussions"
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-600/10 rounded-xl mb-4">
              <MessageSquare className="w-5 h-5 text-indigo-500 mr-2" />
              <span className="text-indigo-500 font-medium">Discord Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join Our Cybersecurity Discord Servers
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Connect with cybersecurity professionals in real-time, participate in discussions, and learn from the community through Discord.
            </p>
            
            {/* Last updated info */}
            {lastUpdated && (
              <div className="text-gray-400 text-sm flex items-center justify-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>Last updated: {new Date(lastUpdated).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        accentColor="indigo"
      />
      
      {/* Loading State */}
      {isLoading && (
        <div className="container py-16">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400">Loading Discord servers...</p>
          </div>
        </div>
      )}
      
      {/* Error State */}
      {error && (
        <div className="container py-16">
          <div className="max-w-3xl mx-auto bg-red-900/20 border border-red-800 rounded-lg p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">Error Loading Servers</h3>
            <p className="text-gray-300 mb-4">{error}</p>
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()}
              className="border-red-700 hover:bg-red-900/30 text-red-400"
            >
              Try Again
            </Button>
          </div>
        </div>
      )}
      
      {/* Popular Servers */}
      {!isLoading && !error && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {filteredServers.length > 0 ? (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Shield className="w-6 h-6 text-indigo-500 mr-3" />
                    Popular Cybersecurity Servers
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredServers.map((server, index) => (
                      <div 
                        key={index}
                        className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-indigo-500/50 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold text-white">
                            <Link href={server.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center">
                              {server.name}
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Link>
                          </h3>
                        </div>
                        <p className="text-gray-300 mb-4">{server.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {server.categories.map((category, catIndex) => (
                            <span 
                              key={catIndex}
                              className="bg-indigo-900/30 text-indigo-400 text-xs px-2 py-1 rounded-full"
                            >
                              {categories.find(cat => cat.id === category)?.name || category}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{server.members} members</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
                  <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">No servers match your filter</h3>
                  <p className="text-gray-400 mb-6">Try selecting a different category or clear your filter</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedCategory('All')}
                    className="flex items-center gap-2"
                  >
                    <X className="h-4 w-4" /> Clear filters
                  </Button>
                </div>
              )}
              
              {/* Additional Servers Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Users className="w-6 h-6 text-indigo-500 mr-3" />
                  More Servers to Explore
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {additionalServers.map((server, index) => (
                    <Link 
                      key={index}
                      href={server.url}
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors text-gray-300 text-center"
                    >
                      {server.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Features Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 text-indigo-500 mr-3" />
                  Discord Community Benefits
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Guidelines Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Community Guidelines</h2>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex gap-3">
                  <ThumbsUp className="h-6 w-6 flex-shrink-0 text-indigo-500 mt-1" />
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