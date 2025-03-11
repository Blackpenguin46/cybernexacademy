"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Calendar, 
  ExternalLink, 
  Globe, 
  Shield, 
  Terminal, 
  Server, 
  Users,
  ThumbsUp,
  Search,
  Filter,
  X,
  Code,
  Database,
  MapPin,
  Video,
  Award,
  Clock,
  AlertTriangle
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Define interfaces for events
interface Event {
  name: string;
  url: string;
  description: string;
  date: string;
  location: string;
  category: string;
  type: 'in-person' | 'virtual' | 'hybrid';
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories for filtering
  const categories: Category[] = [
    { id: 'all', name: 'All Events', icon: Globe },
    { id: 'conference', name: 'Conferences', icon: Users },
    { id: 'technical', name: 'Technical', icon: Code },
    { id: 'hackathon', name: 'Hackathons', icon: Terminal },
    { id: 'meetup', name: 'Meetups', icon: MapPin },
    { id: 'webinar', name: 'Webinars', icon: Video },
    { id: 'competition', name: 'Competitions', icon: Award }
  ];

  // Events section data
  const majorEvents = [
    {
      name: "Major Conferences",
      description: "Premier cybersecurity conferences featuring industry leaders",
      items: [
        {
          name: "Black Hat",
          url: "https://www.blackhat.com/",
          description: "One of the world's leading information security events providing attendees with the latest in research, development, and trends.",
          date: "August 3-8, 2024",
          location: "Las Vegas, NV",
          category: "conference",
          type: "in-person"
        },
        {
          name: "DEF CON",
          url: "https://defcon.org/",
          description: "One of the oldest and largest hacker conventions, bringing together a diverse group of people interested in security and hacking.",
          date: "August 8-11, 2024",
          location: "Las Vegas, NV",
          category: "conference",
          type: "in-person"
        },
        {
          name: "RSA Conference",
          url: "https://www.rsaconference.com/",
          description: "A series of IT security conferences where industry leaders gather to exchange ideas and information about cybersecurity.",
          date: "May 6-9, 2024",
          location: "San Francisco, CA",
          category: "conference",
          type: "hybrid"
        },
        {
          name: "SANS Summit",
          url: "https://www.sans.org/",
          description: "SANS offers intensive, immersion training programs focused on cybersecurity skills including various summits throughout the year.",
          date: "Multiple Dates",
          location: "Multiple Locations",
          category: "conference",
          type: "hybrid"
        }
      ]
    },
    {
      name: "Hackathons & Competitions",
      description: "Events that test and improve cybersecurity skills",
      items: [
        {
          name: "CTF Time Events",
          url: "https://ctftime.org/",
          description: "A platform listing various Capture The Flag competitions worldwide, allowing teams to participate and improve their security skills.",
          date: "Ongoing",
          location: "Online",
          category: "competition",
          type: "virtual"
        },
        {
          name: "Hack The Box",
          url: "https://www.hackthebox.com/",
          description: "An online platform to test and advance your penetration testing skills through various challenges and competitions.",
          date: "Ongoing",
          location: "Online",
          category: "hackathon",
          type: "virtual"
        },
        {
          name: "National Collegiate Cyber Defense Competition",
          url: "https://www.nationalccdc.org/",
          description: "A competition for college students to test their skills in defending computer networks against outside threats.",
          date: "April 2024",
          location: "Various U.S. Locations",
          category: "competition",
          type: "hybrid"
        },
        {
          name: "OWASP AppSec Challenge",
          url: "https://owasp.org/",
          description: "A competition that focuses on web application security, helping participants gain practical experience in identifying vulnerabilities.",
          date: "September 2024",
          location: "Online",
          category: "hackathon",
          type: "virtual"
        }
      ]
    }
  ]
  
  // Regional events section data
  const regionalEvents = [
    {
      name: "Regional Meetups",
      description: "Local gatherings for networking and learning",
      items: [
        {
          name: "OWASP Local Chapters",
          url: "https://owasp.org/chapters/",
          description: "Local OWASP chapters host regular meetings to discuss web application security topics and network with professionals.",
          date: "Monthly",
          location: "Worldwide",
          category: "meetup",
          type: "in-person"
        },
        {
          name: "BSides Security Conferences",
          url: "http://www.securitybsides.com/",
          description: "Community-driven framework for building events for and by information security community members.",
          date: "Various Dates",
          location: "Worldwide",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Cybersecurity Meetup Groups",
          url: "https://www.meetup.com/topics/cybersecurity/",
          description: "Various local groups that meet regularly to discuss cybersecurity topics, share knowledge, and network.",
          date: "Various Dates",
          location: "Worldwide",
          category: "meetup",
          type: "in-person"
        },
        {
          name: "Women in Cybersecurity (WiCyS)",
          url: "https://www.wicys.org/",
          description: "Organization dedicated to bringing together women in cybersecurity from academia, research, and industry.",
          date: "Various Dates",
          location: "Multiple Locations",
          category: "meetup",
          type: "hybrid"
        }
      ]
    },
    {
      name: "Online Events",
      description: "Virtual conferences and webinars",
      items: [
        {
          name: "SANS Webinars",
          url: "https://www.sans.org/webcasts/",
          description: "Free online presentations led by SANS instructors covering a variety of cybersecurity topics.",
          date: "Weekly",
          location: "Online",
          category: "webinar",
          type: "virtual"
        },
        {
          name: "Recorded Future Intelligence Summit",
          url: "https://www.recordedfuture.com/",
          description: "Virtual event focused on threat intelligence and security operations.",
          date: "October 2024",
          location: "Online",
          category: "conference",
          type: "virtual"
        },
        {
          name: "Security Weekly Webcasts",
          url: "https://securityweekly.com/",
          description: "Regular webcasts covering information security news, technical training, and interviews with industry experts.",
          date: "Weekly",
          location: "Online",
          category: "webinar",
          type: "virtual"
        },
        {
          name: "TryHackMe Events",
          url: "https://tryhackme.com/",
          description: "Online platform that hosts virtual events to learn cybersecurity through hands-on exercises.",
          date: "Monthly",
          location: "Online",
          category: "technical",
          type: "virtual"
        }
      ]
    }
  ]
  
  // Event participation tips
  const eventTips = [
    "Set clear goals for what you want to learn or achieve from each event",
    "Prepare questions in advance when attending workshops or presentations",
    "Take advantage of networking opportunities to connect with industry professionals",
    "Participate actively in workshops and hands-on sessions for maximum learning",
    "Follow up with new connections after the event to build lasting relationships",
    "Share knowledge gained with your team or community to multiply the benefits"
  ]

  // Combine all items for filtering
  const allItems = [
    ...majorEvents.flatMap(category => 
      category.items.map(item => ({
        ...item,
        section: category.name
      }))
    ),
    ...regionalEvents.flatMap(category => 
      category.items.map(item => ({
        ...item,
        section: category.name
      }))
    )
  ];

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all'
    ? allItems
    : allItems.filter(item => item.category === selectedCategory);

  // Group filtered items by their original section
  const filteredMajorEvents = majorEvents.map(category => ({
    ...category,
    items: category.items.filter(item => 
      selectedCategory === 'all' || item.category === selectedCategory
    )
  })).filter(category => category.items.length > 0);

  const filteredRegionalEvents = regionalEvents.map(category => ({
    ...category,
    items: category.items.filter(item => 
      selectedCategory === 'all' || item.category === selectedCategory
    )
  })).filter(category => category.items.length > 0);
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <Calendar className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Events
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Connect with the cybersecurity community through conferences, hackathons, meetups, and online events
            </p>
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
      
      {filteredItems.length > 0 ? (
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {/* Major Events Section */}
              {filteredMajorEvents.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Award className="w-6 h-6 text-blue-500 mr-3" />
                    Major Events
                  </h2>
                  
                  {filteredMajorEvents.map((category, index) => (
                    <div key={index} className="mb-8 last:mb-0">
                      <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-400 mb-4">{category.description}</p>
                      
                      <div className="grid gap-6 md:grid-cols-2">
                        {category.items.map((event, eventIndex) => (
                          <div 
                            key={eventIndex} 
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-4">
                              <h4 className="text-xl font-medium text-white">
                                <Link href={event.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                                  {event.name}
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </Link>
                              </h4>
                              <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded-full">
                                {categories.find(cat => cat.id === event.category)?.name || event.category}
                              </span>
                            </div>
                            
                            <p className="text-gray-300 mb-4">{event.description}</p>
                            
                            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center">
                                <span className={`px-2 py-0.5 rounded-full text-xs ${
                                  event.type === 'in-person' ? 'bg-green-900/30 text-green-400' :
                                  event.type === 'virtual' ? 'bg-purple-900/30 text-purple-400' :
                                  'bg-yellow-900/30 text-yellow-400'
                                }`}>
                                  {event.type === 'in-person' ? 'In-Person' : 
                                   event.type === 'virtual' ? 'Virtual' : 'Hybrid'}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Regional Events Section */}
              {filteredRegionalEvents.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <MapPin className="w-6 h-6 text-blue-500 mr-3" />
                    Regional & Online Events
                  </h2>
                  
                  {filteredRegionalEvents.map((category, index) => (
                    <div key={index} className="mb-8 last:mb-0">
                      <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-400 mb-4">{category.description}</p>
                      
                      <div className="grid gap-6 md:grid-cols-2">
                        {category.items.map((event, eventIndex) => (
                          <div 
                            key={eventIndex} 
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-4">
                              <h4 className="text-xl font-medium text-white">
                                <Link href={event.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                                  {event.name}
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </Link>
                              </h4>
                              <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded-full">
                                {categories.find(cat => cat.id === event.category)?.name || event.category}
                              </span>
                            </div>
                            
                            <p className="text-gray-300 mb-4">{event.description}</p>
                            
                            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center">
                                <span className={`px-2 py-0.5 rounded-full text-xs ${
                                  event.type === 'in-person' ? 'bg-green-900/30 text-green-400' :
                                  event.type === 'virtual' ? 'bg-purple-900/30 text-purple-400' :
                                  'bg-yellow-900/30 text-yellow-400'
                                }`}>
                                  {event.type === 'in-person' ? 'In-Person' : 
                                   event.type === 'virtual' ? 'Virtual' : 'Hybrid'}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
                <Filter className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No events match your filter</h3>
                <p className="text-gray-400 mb-6">Try selecting a different category or clear your filter</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory('all')}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" /> Clear filters
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Event Tips Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Event Participation Tips</h2>
            <ul className="space-y-4">
              {eventTips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <ThumbsUp className="h-6 w-6 flex-shrink-0 text-blue-500 mt-1" />
                  <div>
                    <p className="text-gray-300">{tip}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 