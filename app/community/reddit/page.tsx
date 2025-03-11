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
      url: "https://www.reddit.com/r/reverseengineering/",
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
  const filteredSubreddits = popularSubreddits.filter(subreddit => {
    return selectedCategory === 'All' || subreddit.categories.includes(selectedCategory)
  })

  const additionalSubreddits = [
    { name: "r/lockpicking", url: "https://www.reddit.com/r/lockpicking/" },
    { name: "r/pwned", url: "https://www.reddit.com/r/pwned/" },
    { name: "r/CloudSecurity", url: "https://www.reddit.com/r/CloudSecurity/" },
    { name: "r/IoTSecurity", url: "https://www.reddit.com/r/IoTSecurity/" },
    { name: "r/SOCjobs", url: "https://www.reddit.com/r/SOCjobs/" },
    { name: "r/redteamsec", url: "https://www.reddit.com/r/redteamsec/" },
    { name: "r/securityCTF", url: "https://www.reddit.com/r/securityCTF/" },
    { name: "r/ThreatIntelligence", url: "https://www.reddit.com/r/ThreatIntelligence/" },
    { name: "r/BlueTeamJobs", url: "https://www.reddit.com/r/BlueTeamJobs/" },
    { name: "r/CyberSecurityMemes", url: "https://www.reddit.com/r/CyberSecurityMemes/" },
    { name: "r/computerforensics", url: "https://www.reddit.com/r/computerforensics/" },
    { name: "r/dfir", url: "https://www.reddit.com/r/dfir/" },
    { name: "r/ComputerSecurity", url: "https://www.reddit.com/r/ComputerSecurity/" },
    { name: "r/Crypto", url: "https://www.reddit.com/r/Crypto/" },
    { name: "r/Cyber", url: "https://www.reddit.com/r/Cyber/" },
    { name: "r/cyberlaws", url: "https://www.reddit.com/r/cyberlaws/" },
    { name: "r/CyberSecurityJobs", url: "https://www.reddit.com/r/CyberSecurityJobs/" },
    { name: "r/datarecovery", url: "https://www.reddit.com/r/datarecovery/" },
    { name: "r/exploitdev", url: "https://www.reddit.com/r/exploitdev/" },
    { name: "r/Hacking_Tutorials", url: "https://www.reddit.com/r/Hacking_Tutorials/" },
    { name: "r/ISO27001", url: "https://www.reddit.com/r/ISO27001/" },
    { name: "r/OSINT", url: "https://www.reddit.com/r/OSINT/" },
    { name: "r/pentesting", url: "https://www.reddit.com/r/pentesting/" },
    { name: "r/ReverseEngineering", url: "https://www.reddit.com/r/ReverseEngineering/" },
    { name: "r/SocialEngineering", url: "https://www.reddit.com/r/SocialEngineering/" },
    { name: "r/ThreatHunting", url: "https://www.reddit.com/r/ThreatHunting/" },
    { name: "r/ZeroDay", url: "https://www.reddit.com/r/ZeroDay/" },
    { name: "r/InfoSecNews", url: "https://www.reddit.com/r/InfoSecNews/" },
    { name: "r/NetSecStudents", url: "https://www.reddit.com/r/NetSecStudents/" },
    { name: "r/Privacy", url: "https://www.reddit.com/r/Privacy/" },
    { name: "r/SecurityAnalysis", url: "https://www.reddit.com/r/SecurityAnalysis/" }
  ]

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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <Shield className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Reddit Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join the Cybersecurity Discussion on Reddit
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Connect with cybersecurity professionals, enthusiasts, and learners in some of the most active security communities on Reddit.
            </p>
            <Link href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Visit Reddit
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        accentColor="blue"
      />

      {/* Popular Subreddits Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Popular Cybersecurity Subreddits
            </h2>
            {filteredSubreddits.length > 0 ? (
              <div className="space-y-6">
                {filteredSubreddits.map((subreddit, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          <Link
                            href={subreddit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors inline-flex items-center"
                          >
                            {subreddit.name}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </h3>
                        <p className="text-gray-400">{subreddit.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {subreddit.categories.map((category, i) => (
                            <span key={i} className="bg-gray-800 text-blue-400 text-xs px-2 py-1 rounded-full">
                              {categories.find(c => c.id === category)?.name || category}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{subreddit.members}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-gray-800 rounded-lg">
                <p className="text-gray-400 mb-2">No subreddits found matching your criteria</p>
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className="text-blue-500 hover:text-blue-400"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Subreddits Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              More Cybersecurity Communities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {additionalSubreddits.map((subreddit, index) => (
                <Link
                  key={index}
                  href={subreddit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-blue-500/50 transition-colors flex items-center justify-between"
                >
                  <span className="text-gray-300 hover:text-blue-500">{subreddit.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
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