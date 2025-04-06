"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  GraduationCap, 
  ExternalLink, 
  Users, 
  MessageSquare, 
  BookOpen, 
  Terminal, 
  Briefcase,
  Cloud,
  Network,
  Database,
  Shield,
  Filter,
  X,
  Search,
  Globe // Added Globe for 'All' category
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Define interface for Skool Resource
interface SkoolResource {
  name: string;
  description: string;
  members: string; // Changed from students for consistency
  url: string;
  category: string;
}

export default function SkoolPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories for filtering
  const categories: Category[] = [
    { id: 'all', name: 'All Communities', icon: Globe },
    { id: 'beginner', name: 'Beginner Friendly', icon: BookOpen },
    { id: 'hacking', name: 'Hacking & Pentesting', icon: Terminal },
    { id: 'career', name: 'Career Development', icon: Briefcase },
    { id: 'cloud', name: 'Cloud Security', icon: Cloud },
    { id: 'network', name: 'Network Security', icon: Network },
    { id: 'dfir', name: 'DFIR', icon: Database },
    { id: 'blue_team', name: 'Blue Team / Defensive', icon: Shield }
  ];

  // Expanded Skool communities/courses data
  const allSkoolResources: SkoolResource[] = [
    {
      name: "Cybersecurity Fundamentals",
      description: "Learn the core concepts and principles of cybersecurity for beginners.",
      members: "25K+",
      url: "https://www.skool.com/cybersecurity-fundamentals", // Example URL
      category: "beginner"
    },
    {
      name: "Ethical Hacking Skool",
      description: "Master ethical hacking techniques and methodologies through hands-on practice.",
      members: "22K+",
      url: "https://www.skool.com/ethical-hacking-101", // Example URL
      category: "hacking"
    },
    {
      name: "Cyber Career Mastery",
      description: "Navigate your cybersecurity career path with guidance from industry professionals.",
      members: "18K+",
      url: "https://www.skool.com/cyber-career-mastery", // Example URL
      category: "career"
    },
    {
      name: "Advanced Penetration Testing",
      description: "Advanced techniques for penetration testing and vulnerability assessment.",
      members: "15K+",
      url: "https://www.skool.com/advanced-pentesting", // Example URL
      category: "hacking"
    },
    {
      name: "Cloud Security Academy",
      description: "Specialized training in securing cloud environments (AWS, Azure, GCP).",
      members: "20K+",
      url: "https://www.skool.com/cloud-security", // Example URL
      category: "cloud"
    },
    {
      name: "Network Security Essentials",
      description: "Understand network protocols, security devices, and common attacks.",
      members: "12K+",
      url: "https://www.skool.com/network-security-essentials", // Example URL
      category: "network"
    },
    {
      name: "DFIR Training Hub",
      description: "Learn Digital Forensics and Incident Response techniques and tools.",
      members: "9K+",
      url: "https://www.skool.com/dfir-hub", // Example URL
      category: "dfir"
    },
    {
      name: "Web App Security Workshop",
      description: "Hands-on labs focused on finding and exploiting web vulnerabilities (OWASP Top 10).",
      members: "16K+",
      url: "https://www.skool.com/web-app-sec", // Example URL
      category: "hacking"
    },
    {
      name: "Intro to Security+",
      description: "Prepare for the CompTIA Security+ certification with foundational knowledge.",
      members: "14K+",
      url: "https://www.skool.com/security-plus-intro", // Example URL
      category: "beginner"
    },
    {
      name: "SOC Analyst Training",
      description: "Develop skills needed for a Security Operations Center analyst role.",
      members: "11K+",
      url: "https://www.skool.com/soc-analyst", // Example URL
      category: "blue_team"
    },
    {
      name: "Malware Analysis Lab",
      description: "Practical lab environment for analyzing malware samples.",
      members: "7K+",
      url: "https://www.skool.com/malware-lab", // Example URL
      category: "dfir"
    },
    {
      name: "OSINT Techniques",
      description: "Learn Open Source Intelligence gathering methods for investigations.",
      members: "10K+",
      url: "https://www.skool.com/osint-techniques", // Example URL
      category: "hacking"
    },
     {
      name: "Zero Trust Architecture",
      description: "Implementing and managing Zero Trust security models.",
      members: "8K+",
      url: "https://www.skool.com/zero-trust", // Example URL
      category: "network"
    },
     {
      name: "Cyber Interview Prep",
      description: "Practice common cybersecurity interview questions and scenarios.",
      members: "13K+",
      url: "https://www.skool.com/cyber-interview", // Example URL
      category: "career"
    }
  ];

  // Filtering logic
  const filteredResources = allSkoolResources.filter(resource => 
    selectedCategory === 'all' || resource.category === selectedCategory
  );

  // Split into featured and additional
  const featuredResources = filteredResources.slice(0, 4);
  const additionalResources = filteredResources.slice(4);

  const handleCategorySelection = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-gray-950 pt-24 pb-12">
         <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10">
           <div className="flex flex-col items-center text-center mb-8">
             {/* Category Badge */}
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
               <GraduationCap className="w-4 h-4 mr-2" />
               Skool Learning Communities
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
               Cybersecurity Skool Communities
             </h1>
             <p className="text-xl text-gray-400 max-w-2xl">
               Discover structured learning communities on Skool. Engage with peers, follow courses, and enhance your cybersecurity skills.
             </p>
           </div>
         </div>
       </div>

      {/* Category Filter Component */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategorySelection} // Use the handler here
        accentColor="purple" // Use Skool's theme color
      />
      
      {/* Resources Count */}
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm">
            Showing {filteredResources.length} {filteredResources.length === 1 ? 'community' : 'communities'}
            {selectedCategory !== 'all' ? ` in category: ${categories.find(c => c.id === selectedCategory)?.name || selectedCategory}` : ''}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8">
        {/* Featured Section */}
        {featuredResources.length > 0 && (
          <div className="mb-16"> {/* Reduced margin */}
            <div className="flex items-center mb-6">
              <GraduationCap className="w-5 h-5 text-purple-500 mr-2" />
              <h2 className="text-xl font-bold text-white">
                {filteredResources.length > 4 ? "Featured Communities" : "Skool Communities"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredResources.map((resource, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500/50 transition-colors"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {resource.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3"> {/* Added line-clamp */}
                      {resource.description}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{resource.members} members</span>
                    </div>
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="bg-purple-900/30 text-purple-400 text-xs px-2 py-1 rounded">
                         {categories.find(c => c.id === resource.category)?.name || resource.category}
                       </span>
                     </div>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded transition-colors"
                    >
                      View Community
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Section */}
        {additionalResources.length > 0 && (
          <div className="mb-16"> {/* Reduced margin */}
            <div className="flex items-center mb-6">
              <MessageSquare className="w-5 h-5 text-purple-500 mr-2" />
              <h2 className="text-xl font-bold text-white">More Communities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalResources.map((resource, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-purple-500/50 transition-colors flex items-start justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {resource.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2"> {/* Added line-clamp */}
                      {resource.description}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{resource.members}</span>
                       <span className="ml-4 bg-purple-900/30 text-purple-400 text-xs px-2 py-1 rounded">
                         {categories.find(c => c.id === resource.category)?.name || resource.category}
                       </span>
                    </div>
                  </div>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2 px-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors whitespace-nowrap ml-4" // Added ml-4
                  >
                    View
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mb-16"> {/* Reduced margin */}
             <div className="text-purple-500 mx-auto mb-4">
               <Search className="w-12 h-12" />
             </div>
            <h3 className="text-xl font-medium text-white mb-2">No Skool communities found</h3>
            <p className="text-gray-400 mb-6">Try selecting a different category</p>
            <Button 
              variant="outline" // Changed variant
              onClick={() => handleCategorySelection('all')} // Use handler
              className="text-purple-400 border-purple-600 hover:bg-purple-900/30 hover:text-purple-300" // Theme colors
            >
              <X className="w-4 h-4 mr-2" /> Clear filter
            </Button>
          </div>
        )}
      </div>
      {/* Removed original Features, Benefits, Guidelines, and CTA sections */}
    </div>
  )
} 