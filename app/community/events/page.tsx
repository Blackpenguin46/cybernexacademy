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
        },
        {
          name: "BSides SF",
          url: "https://bsidessf.org",
          description: "Community-driven cybersecurity conference held annually in San Francisco.",
          date: "Annual",
          location: "San Francisco, CA",
          category: "conference",
          type: "in-person"
        },
        {
          name: "BSides LV",
          url: "https://bsideslv.org",
          description: "Security conference held annually in Las Vegas around the time of Black Hat and DEF CON.",
          date: "Annual (August)",
          location: "Las Vegas, NV",
          category: "conference",
          type: "in-person"
        },
        {
          name: "BSides London",
          url: "https://bsideslondon.com",
          description: "Community-driven information security conference held annually in London.",
          date: "Annual",
          location: "London, UK",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Infosec Meetup NY",
          url: "https://www.meetup.com/infosec-meetup/",
          description: "New York City based meetup group for information security professionals.",
          date: "Regularly",
          location: "New York, NY",
          category: "meetup",
          type: "in-person"
        },
        {
          name: "Security BSides Global",
          url: "https://www.securitybsides.org",
          description: "Umbrella organization supporting the global network of BSides events.",
          date: "Ongoing",
          location: "Worldwide",
          category: "conference",
          type: "in-person"
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
    },
    {
      name: "Industry & Specialized Conferences",
      description: "Conferences focused on specific areas or regions",
      items: [
        {
          name: "ShmooCon",
          url: "https://shmoocon.org",
          description: "Annual East Coast hacker convention focused on technology exploitation and information security.",
          date: "Annual (January)",
          location: "Washington, D.C.",
          category: "conference",
          type: "in-person"
        },
        {
          name: "THOTCON",
          url: "https://thotcon.org",
          description: "Chicago-based hacking conference with a focus on hardware hacking and physical security.",
          date: "Annual (May)",
          location: "Chicago, IL",
          category: "conference",
          type: "in-person"
        },
        {
          name: "TROOPERS",
          url: "https://troopers.de",
          description: "IT security conference held in Germany, known for high-quality technical talks.",
          date: "Annual (March)",
          location: "Heidelberg, Germany",
          category: "conference",
          type: "in-person"
        },
        {
          name: "HITBSecConf",
          url: "https://conference.hitb.org",
          description: "Hack In The Box Security Conference, held in various locations, focusing on cutting-edge security research.",
          date: "Multiple Dates",
          location: "Worldwide",
          category: "conference",
          type: "hybrid"
        },
        {
          name: "ZeroNights",
          url: "https://zeronights.org",
          description: "International conference focused on practical aspects of cybersecurity and research.",
          date: "Annual",
          location: "Russia (check status)",
          category: "conference",
          type: "in-person"
        },
        {
          name: "CanSecWest",
          url: "https://cansecwest.com",
          description: "Highly technical conference focused on applied digital security, held in Vancouver.",
          date: "Annual (March)",
          location: "Vancouver, Canada",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Hack In Paris",
          url: "https://hackinparis.com",
          description: "Event offering security training and talks on hacking and information security.",
          date: "Annual (June)",
          location: "Paris, France",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Nullcon",
          url: "https://nullcon.net",
          description: "Security conference held in India, featuring talks, workshops, and villages.",
          date: "Annual (March)",
          location: "Goa, India",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Recon",
          url: "https://recon.cx",
          description: "Computer security conference focused on reverse engineering and advanced exploitation techniques.",
          date: "Annual (June)",
          location: "Montreal, Canada",
          category: "conference",
          type: "in-person"
        },
        {
          name: "OWASP Global AppSec",
          url: "https://owasp.org/events",
          description: "OWASP's flagship conference series focused on application security.",
          date: "Multiple Dates",
          location: "Worldwide",
          category: "conference",
          type: "hybrid"
        },
        {
          name: "Blue Team Con",
          url: "https://blueteamcon.com",
          description: "Conference specifically focused on defensive cybersecurity topics and blue team operations.",
          date: "Annual",
          location: "Chicago, IL",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Wild West Hackin' Fest",
          url: "https://wildwesthackinfest.com",
          description: "Cybersecurity conference with training and talks, known for its unique atmosphere.",
          date: "Annual (October)",
          location: "Deadwood, SD / Online",
          category: "conference",
          type: "hybrid"
        },
        {
          name: "Infosecurity Europe",
          url: "https://www.infosecurityeurope.com",
          description: "Large information security event in Europe for industry professionals.",
          date: "Annual (June)",
          location: "London, UK",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Cybertech Global",
          url: "https://cybertechconference.com",
          description: "International cybersecurity networking events held in various global locations.",
          date: "Multiple Dates",
          location: "Worldwide",
          category: "conference",
          type: "in-person"
        },
        {
          name: "HackMiami",
          url: "https://hackmiami.com",
          description: "Annual cybersecurity conference held in Miami, Florida.",
          date: "Annual",
          location: "Miami, FL",
          category: "conference",
          type: "in-person"
        },
        {
          name: "GrrCON",
          url: "https://grrcon.com",
          description: "Midwest information security and hacker conference held in Grand Rapids, Michigan.",
          date: "Annual (September)",
          location: "Grand Rapids, MI",
          category: "conference",
          type: "in-person"
        },
        {
          name: "CTI Summit (SANS)",
          url: "https://www.sans.org/cyber-security-summit/cti/",
          description: "SANS summit focused specifically on Cyber Threat Intelligence.",
          date: "Annual",
          location: "USA / Online",
          category: "conference",
          type: "hybrid"
        },
        {
          name: "Security Onion Conference",
          url: "https://securityonionsolutions.com/",
          description: "Conference focused on the Security Onion platform and related defensive security topics.",
          date: "Annual",
          location: "Augusta, GA / Online",
          category: "conference",
          type: "hybrid"
        },
        {
          name: "GovWare Conference",
          url: "https://www.govware.sg/",
          description: "Cybersecurity conference focused on government and critical infrastructure security, held in Singapore.",
          date: "Annual (October)",
          location: "Singapore",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Cyber Security World",
          url: "https://www.cybersecurityworld.com",
          description: "Event focusing on cybersecurity solutions and strategies for businesses.",
          date: "Multiple Dates",
          location: "Various Locations",
          category: "conference",
          type: "in-person"
        },
        {
          name: "HackFest",
          url: "https://hackfest.ca/",
          description: "Canadian security conference with talks, workshops, and CTF competitions.",
          date: "Annual (November)",
          location: "Quebec City, Canada",
          category: "conference",
          type: "in-person"
        },
        {
          name: "AppSec Day Australia",
          url: "https://appsecday.io",
          description: "Australian conference focused on application security.",
          date: "Annual",
          location: "Australia",
          category: "conference",
          type: "in-person"
        },
        {
          name: "EU Cyber Week",
          url: "https://www.eu-cyberweek.eu",
          description: "Event focused on European cybersecurity research, development, and policy.",
          date: "Annual (November)",
          location: "Rennes, France",
          category: "conference",
          type: "in-person"
        },
        {
          name: "FIRST Conference",
          url: "https://www.first.org/conference/",
          description: "Annual conference for the Forum of Incident Response and Security Teams.",
          date: "Annual (June)",
          location: "Worldwide",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Hardwear.io",
          url: "https://hardwear.io",
          description: "Conference focused on hardware security research and development.",
          date: "Multiple Dates",
          location: "Europe / USA",
          category: "conference",
          type: "in-person"
        },
        {
          name: "ICS CyberSec",
          url: "https://www.icscybersec.com/",
          description: "Conference focused on Industrial Control System (ICS) cybersecurity.",
          date: "Annual",
          location: "USA",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Cyber Security Summit",
          url: "https://cybersecuritysummit.com",
          description: "Series of executive-level cybersecurity conferences held across the USA.",
          date: "Multiple Dates",
          location: "USA",
          category: "conference",
          type: "in-person"
        },
        {
          name: "CS4CA (Cyber Security for Critical Assets)",
          url: "https://www.cs4ca.com",
          description: "Conference series focusing on cybersecurity for critical infrastructure.",
          date: "Multiple Dates",
          location: "Worldwide",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Cyber Warfare Summit",
          url: "https://www.cyberwarfare.live",
          description: "Summit focused on cyber warfare tactics, defense, and policy.",
          date: "Annual",
          location: "Various Locations",
          category: "conference",
          type: "in-person"
        },
        {
          name: "CyberX India",
          url: "https://www.cyberxindia.com",
          description: "Cybersecurity conference held in India focusing on regional threats and solutions.",
          date: "Annual",
          location: "India",
          category: "conference",
          type: "in-person"
        },
        {
          name: "HackInBo",
          url: "https://www.hackinbo.it",
          description: "Italian IT security conference.",
          date: "Annual",
          location: "Bologna, Italy",
          category: "conference",
          type: "in-person"
        },
        {
          name: "ShellCon",
          url: "https://shellcon.io",
          description: "Cybersecurity conference held in Southern California.",
          date: "Annual (October)",
          location: "Los Angeles, CA",
          category: "conference",
          type: "in-person"
        },
        {
          name: "DerbyCon (Legacy)",
          url: "https://www.derbycon.com",
          description: "Well-regarded hacker conference (now concluded, but resources may exist).",
          date: "Concluded",
          location: "Louisville, KY",
          category: "conference",
          type: "in-person"
        },
        {
          name: "CyberSecEurope",
          url: "https://cyberseceurope.com",
          description: "European cybersecurity event focusing on business solutions and strategies.",
          date: "Annual",
          location: "Brussels, Belgium",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Cloud & Cyber Security Expo",
          url: "https://www.cloudsecurityexpo.com",
          description: "Expo focused on cloud and cybersecurity solutions for businesses.",
          date: "Multiple Dates",
          location: "Worldwide",
          category: "conference",
          type: "in-person"
        },
        {
          name: "FutureCon Events",
          url: "https://futureconevents.com",
          description: "Series of cybersecurity conferences focused on future trends and technologies.",
          date: "Multiple Dates",
          location: "USA",
          category: "conference",
          type: "in-person"
        },
        {
          name: "Cybersecurity Festival",
          url: "https://www.cybersecurityfestival.com",
          description: "Event bringing together cybersecurity professionals for learning and networking.",
          date: "Annual",
          location: "UK",
          category: "conference",
          type: "in-person"
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

  // Filter events based on selected category - with improved case insensitivity and safety checks
  const filteredEvents = selectedCategory === 'All'
    ? allItems
    : allItems.filter(event => {
        // Safety check for event.category
        if (!event.category || typeof event.category !== 'string') {
          return false;
        }
        
        // Case-insensitive comparison
        return event.category.toLowerCase() === selectedCategory.toLowerCase();
      });

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
      
      {filteredEvents.length > 0 ? (
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