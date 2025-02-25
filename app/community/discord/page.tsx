'use client'

import { MessageCircle, Users, Shield, Headphones, Code, Briefcase } from 'lucide-react'

export default function DiscordPage() {
  const channels = [
    {
      name: "General Discussion",
      icon: MessageCircle,
      description: "Chat about cybersecurity topics and network with others",
      members: "2,500+"
    },
    {
      name: "CTF Challenges",
      icon: Shield,
      description: "Discuss and solve Capture The Flag challenges together",
      members: "1,200+"
    },
    {
      name: "Career Advice",
      icon: Briefcase,
      description: "Get career guidance from industry professionals",
      members: "1,800+"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Discord Community</h1>
      <p className="text-gray-400 mb-8">Join our active Discord community to connect with fellow cybersecurity enthusiasts</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {channels.map((channel) => {
          const IconComponent = channel.icon
          return (
            <div key={channel.name} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <IconComponent className="w-6 h-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold">{channel.name}</h2>
              </div>
              <p className="text-gray-400 mb-4">{channel.description}</p>
              <div className="flex items-center text-gray-500">
                <Users className="w-4 h-4 mr-1" />
                {channel.members} members
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 text-center">
        <a 
          href="https://discord.gg/cybernex"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#5865F2] text-white px-6 py-3 rounded-lg hover:bg-[#4752C4] transition-colors duration-200 inline-flex items-center"
        >
          Join our Discord Server
        </a>
      </div>
    </div>
  )
} 