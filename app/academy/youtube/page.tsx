"use client";

import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import ResourceCard from '../../components/ResourceCard'
import { Youtube, Star, Users, Clock, PlayCircle, ExternalLink, Bookmark } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const youtubeResources = [
  {
    title: 'Beginner-Friendly Channels',
    description: 'Start your cybersecurity journey with these educational channels.',
    resources: [
      {
        title: 'NetworkChuck',
        description: 'Engaging tutorials on networking, Linux, and cybersecurity fundamentals.',
        link: 'https://www.youtube.com/@NetworkChuck',
        category: 'General Security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'David Bombal',
        description: 'Comprehensive tutorials on networking, security tools, and certification prep.',
        link: 'https://www.youtube.com/@davidbombal',
        category: 'Networking & Security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Professor Messer',
        description: 'Free certification training videos for CompTIA A+, Network+, and Security+.',
        link: 'https://www.youtube.com/@professormesser',
        category: 'Certification Prep',
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
        category: 'Technical Analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'IppSec',
        description: 'Detailed walkthroughs of HackTheBox machines and penetration testing.',
        link: 'https://www.youtube.com/@ippsec',
        category: 'Penetration Testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'LiveOverflow',
        description: 'In-depth explanations of exploits, vulnerabilities, and security research.',
        link: 'https://www.youtube.com/@LiveOverflow',
        category: 'Security Research',
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
        category: 'Bug Bounty',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'HackerSploit',
        description: 'Tutorials on penetration testing tools and methodologies.',
        link: 'https://www.youtube.com/@HackerSploit',
        category: 'Penetration Testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Null Byte',
        description: 'Practical tutorials on ethical hacking and security tools.',
        link: 'https://www.youtube.com/@NullByte',
        category: 'Ethical Hacking',
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
        category: 'News & Analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'The Cyber Mentor',
        description: 'Career advice, penetration testing, and web security tutorials.',
        link: 'https://www.youtube.com/@TCMSecurityAcademy',
        category: 'Training & Career',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
];

export default function YouTubePage() {
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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <Youtube className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Video Learning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Learn from Top Cybersecurity Creators
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Access high-quality video courses and tutorials from industry-leading cybersecurity experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Creators
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {featuredCreators.map((creator, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gray-800"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{creator.name}</h3>
                        <div className="text-blue-500">{creator.channel}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Subscribers</div>
                        <div className="text-white">{creator.subscribers}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Rating</div>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 mr-1" />
                          {creator.rating}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Focus Areas</div>
                      <div className="text-gray-300">{creator.focus}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Top Playlists</div>
                      <div className="space-y-2">
                        {creator.topPlaylists.map((playlist, playlistIndex) => (
                          <div
                            key={playlistIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <PlayCircle className="w-4 h-4 text-blue-500 mr-2" />
                            {playlist}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View Channel
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Courses Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Top Video Courses
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {topCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-500 text-sm font-medium">{course.level}</span>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 mr-1" />
                          {course.rating}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                      <div className="text-gray-400 text-sm">By {course.creator}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="text-white">{course.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Students</div>
                        <div className="text-white">{course.students}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Topics Covered</div>
                      <div className="space-y-2">
                        {course.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Features</div>
                      <div className="flex flex-wrap gap-2">
                        {course.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Learning
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Playlists Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Learning Playlists
            </h2>
            <div className="space-y-8">
              {playlists.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.series.map((series, seriesIndex) => (
                      <div
                        key={seriesIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-3">
                          <div className="font-medium text-white mb-1">{series.title}</div>
                          <div className="text-sm text-gray-400">By {series.creator}</div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-blue-500">
                            <PlayCircle className="w-4 h-4 mr-1" />
                            {series.videos} videos
                          </div>
                          <div className="flex items-center text-gray-400">
                            <Clock className="w-4 h-4 mr-1" />
                            {series.duration}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
              Access thousands of hours of cybersecurity video content from expert creators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Browse All Videos
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                Save for Later
                <Bookmark className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 