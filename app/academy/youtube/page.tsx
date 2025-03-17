"use client";

import React, { useState } from 'react'
import SectionHeader from '../../components/SectionHeader'
import ResourceCard from '../../components/ResourceCard'
import { Youtube, Star, Users, Clock, PlayCircle, ExternalLink, Bookmark, Filter, X, BookOpen, Code, Shield, Terminal, Server, Lock, Target, GraduationCap, Calculator, Brain, Cpu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '../../components/CategoryFilter'

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Define categories for filtering
const categories: Category[] = [
  { id: 'all', name: 'All', icon: Youtube },
  { id: 'general-security', name: 'General Security', icon: Shield },
  { id: 'networking', name: 'Networking & Security', icon: Server },
  { id: 'certification', name: 'Certification Prep', icon: BookOpen },
  { id: 'technical-analysis', name: 'Technical Analysis', icon: Code },
  { id: 'penetration-testing', name: 'Penetration Testing', icon: Target },
  { id: 'malware-analysis', name: 'Malware Analysis', icon: Lock },
  { id: 'ethical-hacking', name: 'Ethical Hacking', icon: Terminal },
  { id: 'quantum-computing', name: 'Quantum Computing', icon: Calculator },
  { id: 'ai-cybersecurity', name: 'AI in Cybersecurity', icon: Brain },
  { id: 'general-cybersecurity', name: 'General Cybersecurity', icon: GraduationCap },
];

// Define interface for resource
interface YouTubeResource {
  title: string;
  description: string;
  link: string;
  category: string;
  icon: string;
  isExternal: boolean;
  sectionTitle?: string;
}

// Define interface for section
interface ResourceSection {
  title: string;
  description: string;
  resources: YouTubeResource[];
}

const youtubeResources: ResourceSection[] = [
  {
    title: 'Beginner-Friendly Channels',
    description: 'Start your cybersecurity journey with these educational channels.',
    resources: [
      {
        title: 'NetworkChuck',
        description: 'Engaging tutorials on networking, Linux, and cybersecurity fundamentals.',
        link: 'https://www.youtube.com/@NetworkChuck',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'David Bombal',
        description: 'Comprehensive tutorials on networking, security tools, and certification prep.',
        link: 'https://www.youtube.com/@davidbombal',
        category: 'networking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Professor Messer',
        description: 'Free certification training videos for CompTIA A+, Network+, and Security+.',
        link: 'https://www.youtube.com/@professormesser',
        category: 'certification',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Advanced Technical Channels',
    description: 'Deep dives into advanced cybersecurity topics and techniques.',
    resources: [
      {
        title: 'John Hammond',
        description: 'Malware analysis, CTF walkthroughs, and advanced security concepts.',
        link: 'https://www.youtube.com/@_JohnHammond',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'IppSec',
        description: 'Detailed walkthroughs of HackTheBox machines and penetration testing.',
        link: 'https://www.youtube.com/@ippsec',
        category: 'penetration-testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'LiveOverflow',
        description: 'In-depth explanations of exploits, vulnerabilities, and security research.',
        link: 'https://www.youtube.com/@LiveOverflow',
        category: 'ethical-hacking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Specialized Topics',
    description: 'Channels focusing on specific areas of cybersecurity.',
    resources: [
      {
        title: 'STÖK',
        description: 'Bug bounty hunting and web application security testing.',
        link: 'https://www.youtube.com/@STOKfredrik',
        category: 'ethical-hacking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'HackerSploit',
        description: 'Tutorials on penetration testing tools and methodologies.',
        link: 'https://www.youtube.com/@HackerSploit',
        category: 'penetration-testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Null Byte',
        description: 'Practical tutorials on ethical hacking and security tools.',
        link: 'https://www.youtube.com/@NullByte',
        category: 'ethical-hacking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Security News & Updates',
    description: 'Stay updated with the latest cybersecurity news and trends.',
    resources: [
      {
        title: 'Security Weekly',
        description: 'Weekly security news, interviews, and technical segments.',
        link: 'https://www.youtube.com/@SecurityWeekly',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'The Cyber Mentor',
        description: 'Career advice, penetration testing, and web security tutorials.',
        link: 'https://www.youtube.com/@TCMSecurityAcademy',
        category: 'certification',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
];

const quantumComputingCourses = [
  {
    title: "Math and Theory for Beginners",
    description: "Fundamental mathematical concepts and theoretical background for quantum computing",
    url: "https://www.youtube.com/watch?v=tsbCSkvHhMo&t=3037s",
    icon: Calculator,
    category: "beginner"
  },
  {
    title: "The Map of Quantum Computing - Quantum Computing Explained",
    description: "A comprehensive overview of quantum computing concepts and applications",
    url: "https://www.youtube.com/watch?v=-UlxHPIEVqA&t=60s",
    icon: GraduationCap,
    category: "beginner"
  },
  {
    title: "Quantum Computers Aren't What You Think — They're Cooler | Hartmut Neven | TED",
    description: "An insightful TED talk exploring quantum computing misconceptions and potential",
    url: "https://www.youtube.com/watch?v=UtDllX_MTbw",
    icon: Brain,
    category: "beginner"
  },
  {
    title: "Single qubit and its logic gates",
    description: "Understanding the fundamental building blocks of quantum computing",
    url: "https://www.youtube.com/watch?v=rD_fH7O-D5Y&t=683s",
    icon: Cpu,
    category: "intermediate"
  },
  {
    title: "Quantum Gates and Circuits",
    description: "Detailed explanation of quantum gates and circuit design",
    url: "https://www.youtube.com/watch?v=JOJ5zihcd6Q&t=1107s",
    icon: Lock,
    category: "intermediate"
  },
  {
    title: "Coding with Qiskit",
    description: "Practical tutorial series on programming quantum computers using Qiskit",
    url: "https://www.youtube.com/watch?v=oaAjxcIFLtM&list=PLOFEBzvs-VvrgHZt3exM_NNiNKtZlHvZi",
    icon: PlayCircle,
    category: "advanced"
  }
];

const aiCybersecurityVideos = [
  {
    title: "AI in Cybersecurity",
    description: "Overview of artificial intelligence applications in cybersecurity",
    url: "https://www.youtube.com/watch?v=4QzBdeUQ0Dc",
    icon: Brain,
    category: "beginner"
  },
  {
    title: "The AI Cybersecurity future is here",
    description: "Exploring how AI is transforming the cybersecurity landscape",
    url: "https://www.youtube.com/watch?v=S3QNDSax2IA",
    icon: Cpu,
    category: "intermediate"
  },
  {
    title: "Cybersecurity Strategy: Prioritizing AI and Risk Management",
    description: "Strategic approaches to implementing AI in cybersecurity operations",
    url: "https://www.youtube.com/watch?v=AtRJZxvkbUM",
    icon: Lock,
    category: "advanced"
  },
  {
    title: "How AI Can Accelerate Cybersecurity",
    description: "Practical applications of AI to enhance cybersecurity capabilities",
    url: "https://www.youtube.com/watch?v=utcYsBKL7e8",
    icon: PlayCircle,
    category: "intermediate"
  }
];

const generalCybersecurityVideos = [
  {
    title: "Getting Started in Cybersecurity",
    description: "Beginner's guide to entering the cybersecurity field",
    url: "https://www.youtube.com/watch?v=unaRNoGuPf0",
    icon: GraduationCap,
    category: "beginner"
  },
  {
    title: "Ethical Hacking Full Course",
    description: "Comprehensive course covering ethical hacking techniques",
    url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
    icon: Lock,
    category: "intermediate"
  },
  {
    title: "Network Security 101",
    description: "Fundamentals of securing computer networks",
    url: "https://www.youtube.com/watch?v=E03gh1huvW4",
    icon: PlayCircle,
    category: "beginner"
  }
];

export default function YouTubePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Flatten all resources into a single array
  const allResources = youtubeResources.flatMap(category => 
    category.resources.map(resource => ({
      ...resource,
      sectionTitle: category.title
    }))
  );

  // Filter resources based on selected category
  const filteredResources = selectedCategory === 'all' 
    ? allResources 
    : allResources.filter(resource => resource.category === selectedCategory);

  // Group filtered resources by their original section titles
  const filteredResourcesBySection = filteredResources.reduce<Record<string, YouTubeResource[]>>((acc, resource) => {
    const { sectionTitle } = resource;
    if (sectionTitle) {
      if (!acc[sectionTitle]) {
        acc[sectionTitle] = [];
      }
      acc[sectionTitle].push(resource);
    }
    return acc;
  }, {});

  // Create filtered sections that match the original structure
  const filteredSections = youtubeResources
    .filter(section => filteredResourcesBySection[section.title]?.length > 0)
    .map(section => ({
      ...section,
      resources: filteredResourcesBySection[section.title] || []
    }));

  const featuredCreators = [
    {
      name: "John Hammond",
      channel: "JohnHammond",
      subscribers: "500K+",
      focus: "CTF Walkthroughs, Malware Analysis",
      description: "In-depth technical analysis and hands-on cybersecurity tutorials",
      topPlaylists: [
        "Malware Analysis Fundamentals",
        "CTF Writeups",
        "Programming for Hackers"
      ],
      rating: "4.9/5",
      image: "/images/creators/john-hammond.jpg"
    },
    {
      name: "David Bombal",
      channel: "DavidBombal",
      subscribers: "1M+",
      focus: "Networking, Security Certifications",
      description: "Comprehensive networking and cybersecurity certification preparation",
      topPlaylists: [
        "CompTIA Security+",
        "Ethical Hacking",
        "Cisco CCNA"
      ],
      rating: "4.8/5",
      image: "/images/creators/david-bombal.jpg"
    },
    {
      name: "NetworkChuck",
      channel: "NetworkChuck",
      subscribers: "1.5M+",
      focus: "Networking, Linux, Cloud Security",
      description: "Engaging tutorials on networking, Linux, and cloud technologies",
      topPlaylists: [
        "Linux for Hackers",
        "Cloud Security",
        "Home Lab Setup"
      ],
      rating: "4.9/5",
      image: "/images/creators/networkchuck.jpg"
    }
  ]

  const topCourses = [
    {
      title: "Complete Ethical Hacking Bootcamp",
      creator: "TCM Security",
      duration: "25 hours",
      level: "Beginner to Intermediate",
      topics: [
        "Network Penetration Testing",
        "Web Application Security",
        "Active Directory Attacks",
        "OSINT Techniques"
      ],
      features: [
        "Hands-on Labs",
        "Real-world Examples",
        "Downloadable Resources",
        "Certificate of Completion"
      ],
      rating: "4.9/5",
      students: "50,000+"
    },
    {
      title: "Practical Malware Analysis & Triage",
      creator: "OALabs",
      duration: "20 hours",
      level: "Intermediate",
      topics: [
        "Static Analysis",
        "Dynamic Analysis",
        "Reverse Engineering",
        "Malware Behavior"
      ],
      features: [
        "Live Demonstrations",
        "Analysis Tools",
        "Sample Malware",
        "Case Studies"
      ],
      rating: "4.8/5",
      students: "25,000+"
    },
    {
      title: "Advanced Web Application Hacking",
      creator: "STÖK",
      duration: "30 hours",
      level: "Advanced",
      topics: [
        "Authentication Bypass",
        "SQL Injection",
        "XSS Attacks",
        "API Security"
      ],
      features: [
        "Bug Bounty Tips",
        "Live Hacking",
        "Methodology",
        "Tools & Techniques"
      ],
      rating: "4.7/5",
      students: "35,000+"
    }
  ]

  const playlists = [
    {
      category: "Beginner Fundamentals",
      series: [
        {
          title: "Linux for Beginners",
          creator: "NetworkChuck",
          videos: 15,
          duration: "8 hours"
        },
        {
          title: "Security+ Full Course",
          creator: "Professor Messer",
          videos: 25,
          duration: "15 hours"
        }
      ]
    },
    {
      category: "Penetration Testing",
      series: [
        {
          title: "Web App Penetration Testing",
          creator: "HackerSploit",
          videos: 20,
          duration: "12 hours"
        },
        {
          title: "Mobile App Security",
          creator: "Hak5",
          videos: 18,
          duration: "10 hours"
        }
      ]
    },
    {
      category: "Defensive Security",
      series: [
        {
          title: "Blue Team Techniques",
          creator: "13Cubed",
          videos: 22,
          duration: "14 hours"
        },
        {
          title: "Incident Response",
          creator: "BlackHills InfoSec",
          videos: 16,
          duration: "9 hours"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 pb-20">
      <SectionHeader
        title="YouTube Learning Resources"
        description="Curated collection of educational videos covering various cybersecurity topics"
        icon={<PlayCircle className="w-12 h-12 text-neon-blue" />}
      />
      
      <div className="mt-12 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 inline-block">Quantum Computing Courses</h2>
          <p className="text-gray-300 mb-8">Explore the intersection of quantum physics and computing with these educational videos covering theory, programming, and applications.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quantumComputingCourses.map((course, index) => (
              <a 
                href={course.url} 
                target="_blank" 
                rel="noopener noreferrer"
                key={index} 
                className="bg-gray-900/50 border border-neon-blue/20 rounded-lg p-5 hover:border-neon-blue/50 transition-all hover:shadow-lg hover:shadow-neon-blue/10 group"
              >
                <div className="flex items-start">
                  <div className="bg-gray-800/80 p-3 rounded-lg mr-4">
                    <course.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors">{course.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{course.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        course.category === "beginner" 
                          ? "bg-green-900/30 text-green-400" 
                          : course.category === "intermediate"
                            ? "bg-yellow-900/30 text-yellow-400"
                            : "bg-red-900/30 text-red-400"
                      }`}>
                        {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                      </span>
                      <span className="text-neon-blue text-sm flex items-center">
                        Watch <ExternalLink className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Cybersecurity YouTube Channels"
            description="Curated YouTube channels to enhance your cybersecurity knowledge and skills."
            icon={<Youtube className="h-10 w-10 text-red-500" />}
          />

          {/* Add Category Filter */}
          <div className="mb-8">
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              accentColor="red"
            />
          </div>

          {filteredSections.length > 0 ? (
            filteredSections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
                  {section.title}
                </h2>
                <p className="text-gray-400 mb-6">{section.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.resources.map((resource, idx) => (
                    <ResourceCard
                      key={idx}
                      title={resource.title}
                      description={resource.description}
                      link={resource.link}
                      icon={resource.icon}
                      isExternal={resource.isExternal}
                      category={resource.category}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
              <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No channels match your filter</h3>
              <p className="text-gray-400 mb-6">Try selecting a different category or clear your filter</p>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory('all')}
                className="flex items-center gap-2"
              >
                <X className="h-4 w-4" /> Clear filters
              </Button>
            </div>
          )}
        </div>

        <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-500" /> Pro Tips for Learning from YouTube
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <PlayCircle className="h-6 w-6 flex-shrink-0 text-red-500 mt-1" />
              <div>
                <p className="text-white font-medium">Create playlists by topic</p>
                <p className="text-gray-400">Organize videos into playlists based on specific skills or concepts you want to learn.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="h-6 w-6 flex-shrink-0 text-red-500 mt-1" />
              <div>
                <p className="text-white font-medium">Use playback speed options</p>
                <p className="text-gray-400">Speed up basic content or slow down complex explanations to match your learning pace.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Bookmark className="h-6 w-6 flex-shrink-0 text-red-500 mt-1" />
              <div>
                <p className="text-white font-medium">Take notes while watching</p>
                <p className="text-gray-400">Active note-taking improves retention and creates a personal reference for future use.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to expand your knowledge?</h2>
          <p className="text-gray-400 mb-6">Explore our curated courses and certification paths to take your skills to the next level.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/academy/courses">
                Explore Courses
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/academy/certifications">
                View Certifications
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 