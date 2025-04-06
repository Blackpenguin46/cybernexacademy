"use client";

import React, { useState } from 'react';
// Update icons, add CategoryFilter
import { MessageSquare, Filter, X, Search, ExternalLink, Users, HelpCircle, GraduationCap, Briefcase, Building } from 'lucide-react'; 
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CategoryFilter from '../../components/CategoryFilter'; // Import CategoryFilter

// --- Interfaces --- 
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

interface ForumResource {
  title: string;
  url: string;
  description: string;
  topic: string; // For filtering
}

// --- Filter Definitions (Cyan Theme) ---
const topicFilters: Category[] = [
  { id: 'all', name: 'All Forums', icon: MessageSquare },
  { id: 'general', name: 'General Discussion', icon: Users },
  { id: 'q-and-a', name: 'Technical Q&A', icon: HelpCircle },
  { id: 'certs', name: 'Certification', icon: GraduationCap },
  { id: 'career', name: 'Career Advice', icon: Briefcase },
  { id: 'vendor', name: 'Vendor/Platform Specific', icon: Building },
];

// --- Forum Data --- 
// Note: This is a sample list, add/remove as needed
const forumResources: ForumResource[] = [
  // { title: "Reddit - r/cybersecurity", url: "https://www.reddit.com/r/cybersecurity/", description: "Large general cybersecurity discussion forum on Reddit.", topic: "general" }, // REMOVE
  // { title: "Reddit - r/netsec", url: "https://www.reddit.com/r/netsec/", description: "Subreddit focused on network security news and discussion.", topic: "general" }, // REMOVE
  // { title: "Reddit - r/AskNetsec", url: "https://www.reddit.com/r/AskNetsec/", description: "Subreddit specifically for asking network security questions.", topic: "q-and-a" }, // REMOVE
  { title: "Stack Exchange - Information Security", url: "https://security.stackexchange.com/", description: "Question and answer site for information security professionals.", topic: "q-and-a" },
  // { title: "Reddit - r/CompTIA", url: "https://www.reddit.com/r/CompTIA/", description: "Subreddit for discussing CompTIA certifications (A+, Net+, Sec+ etc.).", topic: "certs" }, // REMOVE
  // { title: "Reddit - r/SecurityCareerAdvice", url: "https://www.reddit.com/r/SecurityCareerAdvice/", description: "Forum for asking questions about careers in cybersecurity.", topic: "career" }, // REMOVE
  // { title: "Reddit - r/oscp", url: "https://www.reddit.com/r/oscp/", description: "Subreddit dedicated to the Offensive Security Certified Professional certification.", topic: "certs" }, // REMOVE
  // { title: "Reddit - r/blueteamsec", url: "https://www.reddit.com/r/blueteamsec/", description: "Discussions focused on defensive security / blue teaming.", topic: "general" }, // REMOVE
  { title: "Peerlyst Community (Now Cisco)", url: "https://community.cisco.com/t5/security-knowledge-base/tkb-p/4561-docs-security?tab=top", description: "Security knowledge base and forums, formerly Peerlyst.", topic: "vendor" },
  { title: "SANS Internet Storm Center Forums", url: "https://isc.sans.edu/forums/", description: "Forums associated with the SANS ISC threat intelligence center.", topic: "q-and-a" },
  { title: "Microsoft Security Community", url: "https://techcommunity.microsoft.com/t5/security-compliance-and-identity/ct-p/MicrosoftSecurityandCompliance", description: "Official Microsoft forums covering their security products.", topic: "vendor" },
  { title: "Splunk Community", url: "https://community.splunk.com/", description: "Ask questions and find answers about Splunk products.", topic: "vendor" },
  { title: "Hack The Box Forums", url: "https://forum.hackthebox.com/", description: "Community forums for the Hack The Box penetration testing platform.", topic: "vendor" }, // Or Q&A / General
  { title: "TryHackMe Discord/Forum", url: "https://tryhackme.com/discord", description: "Community interaction primarily happens on their Discord server.", topic: "vendor" }, // Discord link
  { title: "OWASP Slack Workspace", url: "https://owasp.org/slack/invite", description: "Official Slack workspace for OWASP project discussions.", topic: "vendor" }, // Slack invite
];

export default function LearningForumsPage() {

  // Add state for selected topic
  const [selectedTopic, setSelectedTopic] = useState('all');

  // Add filtering logic
  const filteredResources = forumResources.filter(resource => 
    selectedTopic === 'all' || resource.topic === selectedTopic
  );

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section (Cyan Theme) */}
      <div className="bg-gradient-to-b from-cyan-950 via-cyan-900/30 to-gray-950 pt-24 pb-16 text-center border-b border-cyan-800/30 shadow-lg">
        <div className="container mx-auto px-4">
            <MessageSquare className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Learning Forums & Communities
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with others, ask questions, and share knowledge in these online forums.
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
                    accentColor="cyan"
                 />
              </div>
              {/* Clear Button */}
              {selectedTopic !== 'all' && (
                 <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedTopic('all')}
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/30 h-9 px-2 whitespace-nowrap"
                 >
                    <X className="w-4 h-4 mr-1"/> Clear
                 </Button>
              )}
           </div>
        </div>

        {/* Resource Count */}
        <p className="text-sm text-gray-400 mb-6">
           Showing {filteredResources.length} learning forum resource{filteredResources.length !== 1 ? 's' : ''}.
           {selectedTopic !== 'all' && 
              <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-cyan-900/50 text-cyan-300 text-xs'>
                 Topic: {topicFilters.find(c => c.id === selectedTopic)?.name}
                 <button onClick={() => setSelectedTopic('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
              </span>
           }
        </p>

        {/* Forum Links Grid */}
        {filteredResources.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((forum, index) => {
                 const TopicIcon = topicFilters.find(t => t.id === forum.topic)?.icon || MessageSquare;
                 return (
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-cyan-500/50 transition-colors">
                       {/* Card Header */}
                       <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-2">
                             {forum.title}
                          </h3>
                          {/* Topic Tag */}
                          <span className="inline-flex items-center bg-cyan-900/60 text-cyan-300 px-2.5 py-0.5 rounded-full text-xs font-medium border border-cyan-700/50">
                             <TopicIcon className="w-3 h-3 mr-1.5" />
                             {topicFilters.find(t => t.id === forum.topic)?.name || 'Forum'}
                          </span>
                       </div>

                       {/* Description */}
                       <p className="text-sm text-gray-300 mb-4 line-clamp-4 flex-grow">
                          {forum.description}
                       </p>

                       {/* Link Button Footer */}
                       <div className="mt-auto pt-3 border-t border-gray-700/50 text-center">
                          <Button 
                             asChild 
                             className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                          >
                             <Link href={forum.url} target="_blank" rel="noopener noreferrer">
                                Visit Forum
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
              <div className="text-cyan-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
              <h3 className="text-xl font-medium text-white mb-2">No Forums Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting the topic filter.</p>
              <Button
                 variant="outline"
                 onClick={() => setSelectedTopic('all')}
                 className="text-cyan-400 border-cyan-600 hover:bg-cyan-900/30 hover:text-cyan-300"
              >
                 <X className="w-4 h-4 mr-2" /> Clear Filter
              </Button>
           </div>
        )}
      </div>
    </div>
  );
} 