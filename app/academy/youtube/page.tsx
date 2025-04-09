"use client";

import React, { useState } from 'react'
import { Youtube, Star, Users, Clock, PlayCircle, ExternalLink, Bookmark, Filter, X, BookOpen, Code, Shield, Terminal, Server, Lock, Target, GraduationCap, Calculator, Brain, Cpu, Bug, Video, Search, ArrowLeft, Rss, Info, TestTube, Binary } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '../../components/CategoryFilter'

// Interface for filters (reusing Category type)
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Updated interface for YouTube Resource
interface YouTubeResource {
  title: string;
  description: string;
  url: string; // Renamed from 'link'
  topic: string; // Renamed from 'category', matches filter IDs
  // icon: string; // Removed, we'll use topic icon
}

// Define NEW topic filters with Purple theme focus
const topicFilters: Category[] = [
  { id: 'all', name: 'All Topics', icon: Youtube },
  { id: 'general', name: 'General Security', icon: Shield },
  { id: 'pentesting', name: 'Pentesting / Red Team', icon: Target },
  { id: 'blue-team', name: 'Defense / Blue Team', icon: Server },
  { id: 'malware', name: 'Malware Analysis', icon: Bug },
  { id: 'reverse-engineering', name: 'Reverse Engineering', icon: Binary },
  { id: 'certs', name: 'Certification Prep', icon: GraduationCap },
  { id: 'news', name: 'News & Updates', icon: Rss },
  { id: 'hardware', name: 'Hardware Security', icon: Cpu },
  { id: 'career', name: 'Career / Community', icon: Users },
  { id: 'misc', name: 'Miscellaneous', icon: Info }
];

// Define NEW FLAT array of YouTube Resources
// Assign topics based on the new topicFilters IDs
const youtubeResources: YouTubeResource[] = [
  // Beginner-Friendly / General
  { title: 'NetworkChuck', description: 'Engaging tutorials on networking, Linux, and cybersecurity fundamentals.', url: 'https://www.youtube.com/c/NetworkChuck', topic: 'general' },
  { title: 'David Bombal', description: 'Comprehensive tutorials on networking, security tools, and certification prep.', url: 'https://www.youtube.com/c/DavidBombal', topic: 'general' },
  { title: 'Professor Messer', description: 'Free certification training videos for CompTIA A+, Network+, and Security+.', url: 'https://www.youtube.com/user/professormesser', topic: 'certs' },
  { title: 'Dion Training', description: 'Provides training materials primarily focused on CompTIA certifications.', url: 'https://www.youtube.com/c/DionTraining', topic: 'certs' },
  { title: 'Computerphile', description: 'Explains computer science concepts, including many relevant to security.', url: 'https://www.youtube.com/user/Computerphile', topic: 'general' },
  { title: 'Cybersecurity Meg', description: 'Focuses on cybersecurity careers, learning resources, and industry insights.', url: 'https://www.youtube.com/@cybersecuritymeg', topic: 'career' },
  { title: 'Computer Security Student', description: 'Shares experiences and tips for students learning cybersecurity.', url: 'https://www.youtube.com/c/ComputerSecurityStudent', topic: 'career' },

  // Advanced / Technical / Pentesting
  { title: 'John Hammond', description: 'Malware analysis, CTF walkthroughs, and advanced security concepts.', url: 'https://www.youtube.com/c/JohnHammond010', topic: 'pentesting' }, // Could be malware too
  { title: 'IppSec', description: 'Detailed walkthroughs of HackTheBox machines and penetration testing.', url: 'https://www.youtube.com/c/ippsec', topic: 'pentesting' },
  { title: 'LiveOverflow', description: 'In-depth explanations of exploits, vulnerabilities, and security research.', url: 'https://www.youtube.com/c/LiveOverflow', topic: 'pentesting' }, // Could be RE/Dev
  { title: 'GynvaelEN', description: 'Live streams and videos covering reverse engineering, CTFs, and low-level topics.', url: 'https://www.youtube.com/c/GynvaelEN', topic: 'reverse-engineering' },
  { title: 'Malware Analysis For Hedgehogs', description: 'Focuses specifically on malware analysis techniques and tutorials.', url: 'https://www.youtube.com/@MalwareAnalysisForHedgehogs', topic: 'malware' },
  { title: 'HackerSploit', description: 'Tutorials on penetration testing tools, methodologies, and ethical hacking.', url: 'https://www.youtube.com/c/HackerSploit', topic: 'pentesting' },
  { title: 'Null Byte', description: 'Practical tutorials on ethical hacking, security tools, and programming for security.', url: 'https://www.youtube.com/c/NullByteWHT', topic: 'pentesting' },
  { title: 'DarkMode', description: 'Content often focusing on penetration testing labs and techniques.', url: 'https://www.youtube.com/c/DarkModeYT', topic: 'pentesting' },
  { title: 'InfoSec Pat', description: 'Covers various cybersecurity topics including pentesting, labs, and career advice.', url: 'https://www.youtube.com/c/InfoSecPat', topic: 'pentesting' }, // Also career
  { title: 'Tech Raj', description: 'Tutorials on ethical hacking, cybersecurity tools, and programming.', url: 'https://www.youtube.com/c/TechRaj', topic: 'pentesting' },

  // News & Updates
  { title: 'Security Weekly', description: 'Weekly security news, interviews, and technical segments.', url: 'https://www.youtube.com/c/SecurityWeeklyTV', topic: 'news' },
  { title: 'Risky Business', description: 'Popular weekly information security podcast and news analysis.', url: 'https://risky.biz/', topic: 'news' }, // Link is website, but relevant
  { title: 'Darknet Diaries', description: 'Podcast covering true stories from the dark side of the internet.', url: 'https://darknetdiaries.com/', topic: 'news' }, // Link is website

  // Defense / Blue Team
  { title: 'Black Hills Information Security', description: 'Webcasts, talks, and discussions on offensive and defensive security topics.', url: 'https://www.youtube.com/c/BlackHillsInformationSecurity', topic: 'blue-team' }, // Also pentesting
  { title: 'The PC Security Channel', description: 'Tests and reviews antivirus software and discusses security practices.', url: 'https://www.youtube.com/c/ThePCSecurityChannel', topic: 'blue-team' },
  { title: 'Blue Team Labs Online (BTLO) YT', description: 'Content related to the BTLO platform, focusing on defensive skills.', url: 'https://www.youtube.com/@blueteamlabs', topic: 'blue-team' },

  // Misc
  { title: 'DEF CON Conference Talks', description: 'Official channel for talks presented at the DEF CON hacking conference.', url: 'https://www.youtube.com/user/DEFCONConference', topic: 'misc' },
  { title: 'Hak5', description: 'Shows covering pentesting tools, hardware hacking, and security news.', url: 'https://www.youtube.com/user/Hak5Darren', topic: 'hardware' }, // Also pentesting
  { title: 'DayCyberwox', description: 'Focuses on cybersecurity careers, learning paths, and certifications (like CISSP).', url: 'https://www.youtube.com/@DayCyberwox', topic: 'career' }, // Also certs
  { title: 'InsiderPhD', description: 'Content on bug bounty hunting, web security, and PhD life.', url: 'https://www.youtube.com/@InsiderPhD', topic: 'pentesting' }, // Bug bounty focused
  { title: 'STÖK', description: 'Focuses heavily on bug bounty hunting, mindset, and community.', url: 'https://www.youtube.com/@STOKfredrik', topic: 'pentesting' }, // Bug bounty focused

  // Remove duplicates or less active/relevant ones if needed
]

export default function YouTubePage() {
  // Updated state
  const [selectedTopic, setSelectedTopic] = useState('all');

  // Updated filtering logic
  const filteredResources = youtubeResources.filter(resource => {
    const topicMatch = selectedTopic === 'all' || resource.topic === selectedTopic;
    return topicMatch;
  });

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section (Purple Theme) */}
      <div className="bg-gradient-to-b from-purple-950 via-purple-900/30 to-gray-950 pt-24 pb-16 text-center border-b border-purple-800/30 shadow-lg">
        <div className="container mx-auto px-4">
            <Youtube className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                YouTube Learning Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Explore curated cybersecurity YouTube channels and playlists covering various topics from beginner to advanced.
            </p>
        </div>
        </div>

      {/* --- Main Content Area --- */}
      <div className="container mx-auto px-4 mt-12">

         {/* Filters - Compact Layout */}
         <div className="sticky top-0 bg-gray-950/90 backdrop-blur-sm py-2 z-20 border-b border-gray-800 mb-6">
            <div className="flex flex-col md:flex-row gap-3 items-center">
               {/* Topic Filter */}
               <div className="flex-grow w-full">
            <CategoryFilter 
                     categories={topicFilters}
                     selectedCategory={selectedTopic}
                     setSelectedCategory={setSelectedTopic}
                     accentColor="purple"
            />
          </div>
               {/* Clear Button */}
               {selectedTopic !== 'all' && (
              <Button 
                     variant="ghost"
                     size="sm"
                     onClick={() => setSelectedTopic('all')}
                     className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30 h-9 px-2 whitespace-nowrap"
                  >
                     <X className="w-4 h-4 mr-1"/> Clear
              </Button>
               )}
            </div>
        </div>

         {/* Resource Count */}
         <p className="text-sm text-gray-400 mb-6">
            Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}.
            {selectedTopic !== 'all' && 
               <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-purple-900/50 text-purple-300 text-xs'>
                  Topic: {topicFilters.find(c => c.id === selectedTopic)?.name}
                  <button onClick={() => setSelectedTopic('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
               </span>
            }
         </p>

         {/* Resource Grid */}
         {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredResources.map((resource, index) => {
                  const TopicIcon = topicFilters.find(t => t.id === resource.topic)?.icon || Youtube;
                  return (
                     <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-purple-500/50 transition-colors">
                        {/* Card Header */}
                        <div className="mb-3">
                           <h3 className="text-lg font-semibold text-white mb-2">
                              {resource.title}
                           </h3>
                           {/* Topic Tag */}
                           <span className="inline-flex items-center bg-purple-900/60 text-purple-300 px-2.5 py-0.5 rounded-full text-xs font-medium border border-purple-700/50">
                              <TopicIcon className="w-3 h-3 mr-1.5" />
                              {topicFilters.find(t => t.id === resource.topic)?.name || 'Resource'}
                           </span>
        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-300 mb-4 line-clamp-4 flex-grow">
                           {resource.description}
                        </p>

                        {/* Link Button Footer */}
                        <div className="mt-auto pt-3 border-t border-gray-700/50 text-center">
                           <Button 
                              asChild 
                              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                           >
                              <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                                 Visit Channel / Playlist
              </Link>
            </Button>
          </div>
        </div>
                  );
               })}
            </div>
         ) : (
            // No Results Block
            <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
               <div className="text-purple-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
               <h3 className="text-xl font-medium text-white mb-2">No YouTube Resources Found</h3>
               <p className="text-gray-400 mb-6">Try adjusting the topic filter.</p>
               <Button
                  variant="outline"
                  onClick={() => setSelectedTopic('all')}
                  className="text-purple-400 border-purple-600 hover:bg-purple-900/30 hover:text-purple-300"
               >
                  <X className="w-4 h-4 mr-2" /> Clear Filter
               </Button>
            </div>
         )}
      </div>
    </div>
  );
} 