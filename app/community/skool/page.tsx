'use client'

import { Users, Book, Shield, Award } from 'lucide-react'

export default function SkoolCommunitiesPage() {
  const communities = [
    {
      name: "Beginner's Circle",
      icon: Book,
      description: "A supportive community for those starting their cybersecurity journey",
      members: "1,000+",
      topics: ["Fundamentals", "Career Guidance", "Certification Prep"]
    },
    {
      name: "Red Team Hub",
      icon: Shield,
      description: "Advanced discussions on penetration testing and offensive security",
      members: "800+",
      topics: ["Pen Testing", "Exploit Development", "Red Teaming"]
    },
    {
      name: "Blue Team Defense",
      icon: Shield,
      description: "Focus on defensive security and incident response",
      members: "750+",
      topics: ["SOC Operations", "Threat Hunting", "Incident Response"]
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Skool Communities</h1>
      <p className="text-gray-400 mb-8">Join our specialized learning communities on Skool</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => {
          const IconComponent = community.icon
          return (
            <div key={community.name} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <IconComponent className="w-6 h-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold">{community.name}</h2>
              </div>
              <p className="text-gray-400 mb-4">{community.description}</p>
              <div className="flex items-center text-gray-500 mb-4">
                <Users className="w-4 h-4 mr-1" />
                {community.members} members
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Popular Topics:</p>
                <div className="flex flex-wrap gap-2">
                  {community.topics.map((topic) => (
                    <span key={topic} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 text-center">
        <a 
          href="https://skool.com/cybernex"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 inline-flex items-center"
        >
          Join our Skool Communities
        </a>
      </div>
    </div>
  )
} 