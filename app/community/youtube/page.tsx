"use client"

import { useState } from "react"
import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, Play, Video, BookOpen, Code, Target, Server, Lock, AlertTriangle, Monitor } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

export default function YouTubePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Categories for filtering
  const categories = [
    { id: 'All', name: 'All Channels', icon: Video },
    { id: 'tutorials', name: 'Tutorials', icon: BookOpen },
    { id: 'ctf', name: 'CTF Walkthroughs', icon: Target },
    { id: 'tools', name: 'Tool Demonstrations', icon: Code },
    { id: 'news', name: 'News & Analysis', icon: AlertTriangle },
    { id: 'career', name: 'Career Guidance', icon: Users },
    { id: 'live', name: 'Live Streams', icon: Play },
  ]

  const popularChannels = [
    {
      name: "John Hammond",
      description: "Hands-on cybersecurity tutorials, CTF walkthroughs, and malware analysis videos.",
      subscribers: "1M+",
      url: "https://youtube.com/@_JohnHammond",
      categories: ["tutorials", "ctf", "tools"]
    },
    {
      name: "David Bombal",
      description: "Comprehensive networking and cybersecurity courses with practical demonstrations.",
      subscribers: "2.5M+",
      url: "https://youtube.com/@davidbombal",
      categories: ["tutorials", "tools", "career"]
    },
    {
      name: "NetworkChuck",
      description: "Engaging tutorials on networking, cybersecurity, and cloud technologies.",
      subscribers: "1.8M+",
      url: "https://youtube.com/@NetworkChuck",
      categories: ["tutorials", "news", "career"]
    },
    {
      name: "The Cyber Mentor",
      description: "Professional penetration testing tutorials and ethical hacking guidance.",
      subscribers: "500K+",
      url: "https://youtube.com/@TCMSecurityAcademy",
      categories: ["tutorials", "tools", "career"]
    },
    {
      name: "LiveOverflow",
      description: "Deep dives into cybersecurity research, exploitation, and reverse engineering.",
      subscribers: "700K+",
      url: "https://youtube.com/@LiveOverflow",
      categories: ["tutorials", "ctf", "tools"]
    },
    {
      name: "HackerSploit",
      description: "Detailed tutorials on penetration testing tools and security techniques.",
      subscribers: "900K+",
      url: "https://youtube.com/@HackerSploit",
      categories: ["tutorials", "tools", "live"]
    }
  ]

  // Filter channels based on selected category
  const filteredChannels = popularChannels.filter(channel => {
    return selectedCategory === 'All' || channel.categories.includes(selectedCategory)
  })

  const contentCategories = [
    {
      title: "Tutorials & Courses",
      description: "Step-by-step guides and comprehensive learning paths."
    },
    {
      title: "CTF Walkthroughs",
      description: "Solutions and explanations for capture the flag challenges."
    },
    {
      title: "Tool Demonstrations",
      description: "Practical usage of security tools and frameworks."
    },
    {
      title: "News & Analysis",
      description: "Coverage of recent security incidents and trends."
    },
    {
      title: "Career Guidance",
      description: "Advice on cybersecurity career paths and certifications."
    },
    {
      title: "Live Streams",
      description: "Real-time hacking demonstrations and Q&A sessions."
    }
  ]

  const learningPaths = [
    {
      title: "Beginner Security",
      description: "Foundation concepts and basic security principles."
    },
    {
      title: "Ethical Hacking",
      description: "Penetration testing and vulnerability assessment."
    },
    {
      title: "Blue Team Skills",
      description: "Defense strategies and incident response."
    },
    {
      title: "Advanced Topics",
      description: "Specialized security domains and research."
    }
  ]

  const guidelines = [
    "Subscribe to channels matching your interests",
    "Enable notifications for live streams",
    "Participate in video comments constructively",
    "Share timestamps for helpful content",
    "Support content creators responsibly",
    "Report inappropriate or misleading content",
    "Follow along with hands-on tutorials",
    "Join channel communities for discussions"
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-red-600/10 rounded-xl mb-4">
              <Play className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-500 font-medium">YouTube Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Learn Cybersecurity Through Video
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Watch tutorials, courses, and live demonstrations from top cybersecurity experts and educators.
            </p>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Explore YouTube Channels
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
        accentColor="red"
      />

      {/* Popular Channels Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Top Security Channels
            </h2>
            {filteredChannels.length > 0 ? (
              <div className="space-y-6">
                {filteredChannels.map((channel, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          <Link
                            href={channel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-500 transition-colors inline-flex items-center"
                          >
                            {channel.name}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </h3>
                        <p className="text-gray-400">{channel.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {channel.categories.map((category, i) => (
                            <span key={i} className="bg-gray-800 text-red-400 text-xs px-2 py-1 rounded-full">
                              {categories.find(c => c.id === category)?.name || category}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{channel.subscribers}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-gray-800 rounded-lg">
                <p className="text-gray-400 mb-2">No channels found matching your criteria</p>
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className="text-red-500 hover:text-red-400"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Categories Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Video Categories
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {contentCategories.map((category, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Learning Paths
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {learningPaths.map((path, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{path.title}</h3>
                  <p className="text-gray-400">{path.description}</p>
                </div>
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
              Viewing Guidelines
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex-shrink-0">
                    <ThumbsUp className="w-5 h-5 text-red-500" />
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
              Start Learning Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our recommended channels and begin your cybersecurity learning journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Visit YouTube
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