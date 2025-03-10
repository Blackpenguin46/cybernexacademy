"use client"

import { useState } from "react"
import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, BookOpen, Target, Code, Server, Lock, AlertTriangle, Monitor, Flame, Award, Briefcase, Filter, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'
import SectionHeader from '@/app/components/SectionHeader'

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
  ]

  const popularServers = [
    {
      name: "The Cyber Mentor",
      description: "Heath Adams' community focused on practical ethical hacking and penetration testing training.",
      members: "100K+",
      url: "https://discord.gg/tcm",
      categories: ["learning", "pentesting", "career"]
    },
    {
      name: "Darknet Diaries",
      description: "Official community for the popular cybersecurity podcast, discussing true stories from the dark side of the Internet.",
      members: "75K+",
      url: "https://discord.gg/darknet",
      categories: ["community"]
    },
    {
      name: "TryHackMe",
      description: "Learning community focused on hands-on cybersecurity training through practical labs and exercises.",
      members: "150K+",
      url: "https://discord.gg/tryhackme",
      categories: ["learning", "ctf", "pentesting"]
    },
    {
      name: "Hack The Box",
      description: "Active hacking community with discussions about challenges, machines, and penetration testing.",
      members: "200K+",
      url: "https://discord.gg/hackthebox",
      categories: ["ctf", "pentesting", "learning"]
    },
    {
      name: "The Many Hats Club",
      description: "Diverse cybersecurity community covering various topics from ethical hacking to threat intelligence.",
      members: "45K+",
      url: "https://discord.gg/manyhats",
      categories: ["community", "pentesting", "blue_team"]
    },
    {
      name: "John Hammond's Community",
      description: "Active learning community led by popular cybersecurity YouTuber John Hammond.",
      members: "80K+",
      url: "https://discord.gg/johnhammond",
      categories: ["learning", "ctf", "pentesting"]
    },
    {
      name: "InfoSec Prep",
      description: "Focus on certification preparation and career development in information security.",
      members: "60K+",
      url: "https://discord.gg/infosecprep",
      categories: ["career", "learning"]
    },
    {
      name: "Blue Team Village",
      description: "Community dedicated to defensive security, incident response, and SOC operations.",
      members: "40K+",
      url: "https://discord.gg/blueteam",
      categories: ["blue_team", "learning"]
    },
    {
      name: "CTF Time",
      description: "Active CTF community discussing challenges, writeups, and upcoming competitions.",
      members: "55K+",
      url: "https://discord.gg/ctftime",
      categories: ["ctf"]
    },
    {
      name: "OSCP Study Group",
      description: "Support community for OSCP certification preparation and practice.",
      members: "35K+",
      url: "https://discord.gg/oscp",
      categories: ["career", "pentesting", "learning"]
    }
  ]

  // Filter servers based on selected category
  const filteredServers = selectedCategory === 'All'
    ? popularServers
    : popularServers.filter(server => server.categories.includes(selectedCategory));

  const additionalServers = [
    { name: "MalwareTech", url: "#" },
    { name: "OverTheWire", url: "#" },
    { name: "NullByte", url: "#" },
    { name: "Red Team Ops", url: "#" },
    { name: "SOC Analyst Training", url: "#" },
    { name: "CyberSec Labs", url: "#" },
    { name: "HackTricks", url: "#" },
    { name: "Bug Bounty Hunter's Hangout", url: "#" },
    { name: "CyberSec Jobs & Internships", url: "#" },
    { name: "Linux Security Enthusiasts", url: "#" },
    { name: "Threat Intelligence Exchange", url: "#" },
    { name: "Cybersecurity News & Updates", url: "#" },
    { name: "Black Hat Ethical Hacking", url: "#" },
    { name: "Practical Ethical Hacking (PEH)", url: "#" },
    { name: "Cybersecurity Career Network", url: "#" }
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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Join Our Cybersecurity Discord Servers"
          description="Connect with cybersecurity professionals in real-time, participate in discussions, and learn from the community through Discord."
          icon={<MessageSquare className="h-10 w-10 text-indigo-500" />}
        />

        {/* Categories Filter */}
        <div className="mb-8">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            accentColor="indigo"
          />
        </div>
        
        {/* Popular Servers */}
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
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-indigo-500/50 transition-colors"
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
                className="bg-gray-900 border border-gray-800 rounded-lg p-3 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors text-gray-300 text-center"
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
                className="bg-gray-900 border border-gray-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Guidelines Section */}
        <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-white">Community Guidelines</h2>
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
    </div>
  )
} 