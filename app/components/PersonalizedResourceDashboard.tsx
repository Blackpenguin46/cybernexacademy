"use client"

import { useState, useEffect } from "react"
import { BookOpen, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Lightbulb } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

interface Resource {
  name: string
  description: string
  url: string
  type: string
  category: string
  topics?: string[]
}

interface PersonalizedResourceDashboardProps {
  userInterests?: string[]
  userExperience?: string
  maxResources?: number
}

export default function PersonalizedResourceDashboard({
  userInterests = [],
  userExperience = "",
  maxResources = 6
}: PersonalizedResourceDashboardProps) {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Map type to icon
  const getIconForType = (type: string) => {
    const iconMap: Record<string, any> = {
      "Interactive Platform": Terminal,
      "Interactive Training": Terminal,
      "Online Course": BookOpen,
      "Book": BookOpen,
      "GitHub Repository": Code,
      "Framework": Network,
      "Security Guide": Shield,
      "YouTube Channel": Code,
      "YouTube Video": Code,
      "YouTube Playlist": Code,
      "Operating System": Server,
      "Tutorial": BookOpen,
    }
    
    return iconMap[type] || Lightbulb
  }

  useEffect(() => {
    const fetchPersonalizedResources = async () => {
      try {
        setLoading(true)
        
        // Combine recommended resources from various categories
        let allResources: Resource[] = []
        
        // Fetch resources from Supabase
        if (userInterests && userInterests.length > 0) {
          const { data, error } = await supabase
            .from('recommended_resources')
            .select('*')
            .limit(50)
          
          if (error) throw new Error(error.message)
          
          if (data && data.length > 0) {
            // Filter and format the resources
            const formattedResources = data
              .filter(resource => {
                // Check if resource matches user's interests
                const interestMatch = resource.interests.some((interest: string) => 
                  userInterests.includes(interest)
                )
                
                // Check if resource matches user's experience level
                const experienceMatch = !userExperience || 
                  resource.experience_levels.includes(userExperience)
                
                return interestMatch && experienceMatch
              })
              .map(resource => ({
                name: resource.title,
                description: resource.description,
                url: resource.url,
                type: resource.resource_type,
                category: resource.interests[0] // Use first interest as category
              }))
            
            allResources = [...allResources, ...formattedResources]
          }
        }
        
        // If we don't have enough from the database, add static resources based on interests
        if (allResources.length < maxResources) {
          // Map interests to corresponding static resources
          // This is a fallback in case the database doesn't have enough resources
          const staticResourcesByInterest: Record<string, Resource[]> = {
            "web_security": [
              {
                name: "OWASP Top 10",
                description: "Top 10 web application security risks and prevention strategies",
                url: "https://owasp.org/www-project-top-ten",
                type: "Security Guide",
                category: "web_security"
              },
              {
                name: "PortSwigger Web Security Academy",
                description: "Free, online web security training from the creators of Burp Suite",
                url: "https://portswigger.net/web-security",
                type: "Interactive Training",
                category: "web_security"
              }
            ],
            "network_security": [
              {
                name: "Wireshark",
                description: "Network protocol analyzer for network troubleshooting and security analysis",
                url: "https://www.wireshark.org",
                type: "Network Analysis",
                category: "network_security"
              },
              {
                name: "Nmap",
                description: "Network discovery and security auditing tool",
                url: "https://nmap.org",
                type: "Network Scanner",
                category: "network_security"
              }
            ],
            "malware_analysis": [
              {
                name: "ANY.RUN",
                description: "Interactive malware analysis service",
                url: "https://any.run/",
                type: "Tool",
                category: "malware_analysis"
              }
            ],
            "digital_forensics": [
              {
                name: "DFIR Training",
                description: "Digital forensics training resources",
                url: "https://www.dfir.training/",
                type: "Guide",
                category: "digital_forensics"
              }
            ],
            "cryptography": [
              {
                name: "CryptoHack",
                description: "Interactive cryptography challenges",
                url: "https://cryptohack.org/",
                type: "Challenge Platform",
                category: "cryptography"
              }
            ]
          }
          
          // Add static resources based on user interests
          for (const interest of userInterests) {
            if (staticResourcesByInterest[interest]) {
              allResources = [...allResources, ...staticResourcesByInterest[interest]]
            }
          }
        }
        
        // Shuffle resources and limit to maxResources
        const shuffledResources = allResources
          .sort(() => 0.5 - Math.random())
          .slice(0, maxResources)
        
        setResources(shuffledResources)
      } catch (err) {
        console.error("Error fetching personalized resources:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }
    
    fetchPersonalizedResources()
  }, [userInterests, userExperience, maxResources])
  
  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center mb-4">
          <Lightbulb className="w-5 h-5 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-white">Recommended For You</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse border border-gray-800 bg-gray-800/30 p-4 rounded-lg">
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-700 rounded w-5/6 mb-4"></div>
              <div className="h-6 bg-gray-700 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="p-4 border border-red-800 bg-red-900/20 rounded-lg">
        <p className="text-red-400">Error loading recommendations: {error}</p>
      </div>
    )
  }
  
  if (resources.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">
          {userInterests.length > 0 
            ? "We're preparing personalized recommendations based on your interests." 
            : "Complete your profile to get personalized recommendations."}
        </p>
        {userInterests.length === 0 && (
          <Link 
            href="/onboarding" 
            className="text-blue-500 hover:text-blue-400 mt-2 inline-block"
          >
            Set your interests
          </Link>
        )}
      </div>
    )
  }
  
  return (
    <div>
      <div className="flex items-center mb-4">
        <Lightbulb className="w-5 h-5 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold text-white">Recommended For You</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resources.map((resource, index) => {
          const IconComponent = getIconForType(resource.type);
          return (
            <Link 
              href={resource.url} 
              target="_blank" 
              key={index}
              className="border border-gray-800 hover:border-blue-500/50 bg-gray-800/30 p-4 rounded-lg transition-colors hover:bg-gray-800/50"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <h3 className="text-white font-medium mb-2">{resource.name}</h3>
                  <IconComponent className="w-4 h-4 text-blue-400 ml-2 mt-1 flex-shrink-0" />
                </div>
                
                <p className="text-gray-400 text-sm mb-3 flex-grow line-clamp-2">{resource.description}</p>
                
                <div className="flex justify-between mt-auto">
                  <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                    {resource.type}
                  </span>
                  <span className="text-blue-400 text-xs flex items-center">
                    View Resource
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
} 