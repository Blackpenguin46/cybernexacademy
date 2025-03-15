"use client"

import { useState, useEffect } from "react"
import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, BookOpen, Target, Code, Server, Lock, AlertTriangle, Monitor, Flame, Award, Briefcase, Filter, X, HardDrive, Cloud, Wrench, FileDigit, Bug, TerminalSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'
import { discordServers } from "@/data/discord-servers"

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

export default function DiscordPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  // Categories for filtering
  const categories: Category[] = [
    { id: 'All', name: 'All Servers', icon: Users },
    { id: 'learning', name: 'Learning', icon: BookOpen },
    { id: 'ctf', name: 'CTF & Challenges', icon: Target },
    { id: 'pentesting', name: 'Penetration Testing', icon: Code },
    { id: 'blue_team', name: 'Blue Team', icon: Shield },
    { id: 'career', name: 'Career & Certifications', icon: Briefcase },
    { id: 'community', name: 'General Community', icon: MessageSquare },
    { id: 'technical', name: 'Technical Deep Dives', icon: TerminalSquare },
    { id: 'cloud', name: 'Cloud Security', icon: Cloud },
    { id: 'hardware', name: 'Hardware Hacking', icon: Wrench },
    { id: 'forensics', name: 'Digital Forensics', icon: FileDigit },
    { id: 'malware', name: 'Malware Analysis', icon: Bug },
    { id: 'development', name: 'Secure Development', icon: HardDrive },
  ]

  // Filter servers based on selected category
  const filteredServers = selectedCategory === 'All'
    ? discordServers
    : discordServers.filter(server => server.categories.includes(selectedCategory));

  // Featured servers - display first 4 of filter results or all servers
  const featuredServers = filteredServers.slice(0, 4);
  
  // Additional servers - display the rest
  const additionalServers = filteredServers.slice(4);

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
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              Community Resources
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discord Communities
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl">
              Join cybersecurity Discord servers to connect with professionals, learn new skills, and stay updated with the latest security trends.
            </p>
          </div>
        </div>
      </div>
      
      {/* Category Filter Component */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        accentColor="blue"
      />
      
      {/* Resources Count */}
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm">
            Showing {filteredServers.length} {filteredServers.length === 1 ? 'server' : 'servers'}
            {selectedCategory !== 'All' ? ` in category: ${categories.find(c => c.id === selectedCategory)?.name || selectedCategory}` : ''}
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8">
        {/* Featured Servers */}
        {featuredServers.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-xl font-bold text-white">
                {filteredServers.length > 4 ? "Featured Discord Servers" : "Discord Servers"}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredServers.map((server, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-blue-500/50 transition-colors"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {server.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {server.description}
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{server.members}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {server.categories.map((category, catIndex) => (
                        <span 
                          key={catIndex}
                          className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded"
                        >
                          {category.replace('_', ' ')}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={server.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors"
                    >
                      Join Server
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Additional Servers */}
        {additionalServers.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-xl font-bold text-white">More Discord Servers</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalServers.map((server, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-blue-500/50 transition-colors flex items-start justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {server.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mt-1">
                      {server.description}
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{server.members}</span>
                      
                      <div className="flex ml-4 flex-wrap gap-2">
                        {server.categories.map((category, catIndex) => (
                          <span 
                            key={catIndex}
                            className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded"
                          >
                            {category.replace('_', ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={server.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors whitespace-nowrap"
                  >
                    Join
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredServers.length === 0 && (
          <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mb-20">
            <div className="h-12 w-12 text-gray-500 mx-auto mb-4">🔍</div>
            <h3 className="text-xl font-medium text-white mb-2">No Discord servers found</h3>
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
      <div className="mt-16 mb-12 bg-gradient-to-r from-blue-950/30 via-indigo-950/30 to-blue-950/30 border border-blue-900/30 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Discord Resources</h2>
        <p className="text-gray-400 mb-6">Here are some helpful resources for getting the most out of cybersecurity Discord communities:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              Security Best Practices
            </h3>
            <p className="text-gray-400 text-sm">
              Enable 2FA, be cautious with DMs, don't share personal information, and verify server authenticity before joining.
            </p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              Community Guidelines
            </h3>
            <p className="text-gray-400 text-sm">
              Read server rules, respect channel topics, use appropriate channels for questions, and be patient with responses.
            </p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              Getting Recognized
            </h3>
            <p className="text-gray-400 text-sm">
              Contribute meaningfully, help others, share knowledge respectfully, and participate in community events.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 