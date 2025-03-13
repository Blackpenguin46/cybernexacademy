import React from 'react'
import Link from 'next/link'
import { Users, MessageSquare, Github, Twitter, Linkedin, Globe, ExternalLink, User, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import SectionHeader from '../components/SectionHeader'
import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cybernex Academy - Community',
  description: 'Connect with cybersecurity professionals through our curated list of Discord servers, Reddit communities, and Skool forums.'
};

interface DiscordServer {
  id: string;
  name: string;
  description: string;
  invite_link: string;
  member_count: number | null;
  is_verified: boolean;
}

interface RedditCommunity {
  id: string;
  name: string;
  description: string;
  url: string;
  member_count: number | null;
  is_verified: boolean;
}

interface SkoolCommunity {
  id: string;
  name: string;
  description: string;
  url: string;
  member_count: number | null;
  is_verified: boolean;
}

async function getCommunityResources() {
  const supabase = createClient();
  
  // Get Discord servers
  const { data: discordServers, error: discordError } = await supabase
    .from('discord_servers')
    .select('*')
    .eq('is_verified', true)
    .order('name');
    
  if (discordError) {
    console.error('Error fetching Discord servers:', discordError);
  }
  
  // Get Reddit communities
  const { data: redditCommunities, error: redditError } = await supabase
    .from('reddit_communities')
    .select('*')
    .eq('is_verified', true)
    .order('name');
    
  if (redditError) {
    console.error('Error fetching Reddit communities:', redditError);
  }
  
  // Get Skool communities
  const { data: skoolCommunities, error: skoolError } = await supabase
    .from('skool_communities')
    .select('*')
    .eq('is_verified', true)
    .order('name');
    
  if (skoolError) {
    console.error('Error fetching Skool communities:', skoolError);
  }
  
  return {
    discord: discordServers || [],
    reddit: redditCommunities || [],
    skool: skoolCommunities || []
  };
}

const communityPlatforms = [
  {
    title: "Forums & Blogs",
    description: "Join discussions and share knowledge with the cybersecurity community",
    icon: MessageSquare,
    link: "/community/forums",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    hoverColor: "group-hover:border-blue-500/60"
  },
  {
    title: "GitHub Projects",
    description: "Explore and contribute to open-source security tools and projects",
    icon: Github,
    link: "/community/github",
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/30",
    hoverColor: "group-hover:border-purple-500/60"
  },
  {
    title: "Twitter Feed",
    description: "Stay updated with real-time security news and discussions",
    icon: Twitter,
    link: "/community/twitter",
    color: "from-sky-500/20 to-sky-600/5",
    borderColor: "border-sky-500/30",
    hoverColor: "group-hover:border-sky-500/60"
  },
  {
    title: "LinkedIn Network",
    description: "Connect with cybersecurity professionals and organizations",
    icon: Linkedin,
    link: "/community/linkedin",
    color: "from-blue-600/20 to-blue-700/5",
    borderColor: "border-blue-600/30",
    hoverColor: "group-hover:border-blue-600/60"
  },
  {
    title: "Discord Servers",
    description: "Join real-time chat communities for learning and collaboration",
    icon: MessageSquare,
    link: "/community/discord",
    color: "from-indigo-500/20 to-indigo-600/5",
    borderColor: "border-indigo-500/30",
    hoverColor: "group-hover:border-indigo-500/60"
  },
  {
    title: "Reddit Communities",
    description: "Engage with cybersecurity enthusiasts on various subreddits",
    icon: Globe,
    link: "/community/reddit",
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "border-orange-500/30",
    hoverColor: "group-hover:border-orange-500/60"
  },
  {
    title: "Cybersecurity Blogs",
    description: "Read insights and articles from industry experts",
    icon: ExternalLink,
    link: "/community/blogs",
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-500/30",
    hoverColor: "group-hover:border-green-500/60"
  },
  {
    title: "Open Source Security Tools",
    description: "Discover and contribute to open-source security projects",
    icon: Github,
    link: "/community/open-source",
  },
  {
    title: "Security Influencers",
    description: "Follow top cybersecurity influencers for insights and updates",
    icon: Twitter,
    link: "/community/influencers",
    color: "from-sky-500/20 to-sky-600/5",
    borderColor: "border-sky-500/30",
    hoverColor: "group-hover:border-sky-500/60"
  },
  {
    title: "Cybersecurity News",
    description: "Stay informed with the latest cybersecurity news and trends",
    icon: ExternalLink,
    link: "/community/news",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    hoverColor: "group-hover:border-blue-500/60"
  },
  {
    title: "Professional Groups",
    description: "Join LinkedIn groups focused on cybersecurity topics",
    icon: Linkedin,
    link: "/community/groups",
    color: "from-blue-600/20 to-blue-700/5",
    borderColor: "border-blue-600/30",
    hoverColor: "group-hover:border-blue-600/60"
  },
  {
    title: "Industry Leaders",
    description: "Connect with industry leaders and expand your professional network",
    icon: ExternalLink,
    link: "/community/leaders",
    color: "from-teal-500/20 to-teal-600/5",
    borderColor: "border-teal-500/30",
    hoverColor: "group-hover:border-teal-500/60"
  },
  {
    title: "Cybersecurity Channels",
    description: "Participate in discussions on dedicated cybersecurity channels",
    icon: MessageSquare,
    link: "/community/channels",
    color: "from-indigo-500/20 to-indigo-600/5",
    borderColor: "border-indigo-500/30",
    hoverColor: "group-hover:border-indigo-500/60"
  },
  {
    title: "Learning Communities",
    description: "Join communities focused on learning and skill development",
    icon: ExternalLink,
    link: "/community/learning",
    color: "from-yellow-500/20 to-yellow-600/5",
    borderColor: "border-yellow-500/30",
    hoverColor: "group-hover:border-yellow-500/60"
  }
];

export default async function CommunityPage() {
  const resources = await getCommunityResources();

  return (
    <div className="min-h-screen bg-black">
      <SectionHeader
        title="Community"
        description="Connect with cybersecurity professionals, join discussions, and collaborate with peers across various platforms."
        icon={<Users className="h-12 w-12 text-white" />}
      />

      {/* Community Platforms Grid */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityPlatforms.map((platform, index) => (
                <Link key={index} href={platform.link} className="group">
                  <div className={`h-full p-6 rounded-lg border ${platform.borderColor} ${platform.hoverColor} transition-colors bg-gradient-to-b ${platform.color}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-900/50 flex items-center justify-center">
                        <platform.icon className="w-6 h-6 text-gray-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {platform.title}
                    </h3>
                    <p className="text-gray-400">
                      {platform.description}
                    </p>
                    </div>
                  </Link>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discord Servers Section */}
      <section id="discord" className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-8">
            <MessageSquare className="text-indigo-500 w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Discord Servers</h2>
          </div>
          
          {resources.discord.length === 0 ? (
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <MessageSquare className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No Discord Servers Yet</h3>
              <p className="text-gray-500 mb-6">
                We're currently curating a list of quality Discord servers for the cybersecurity community.
              </p>
              <Button asChild variant="outline">
                <Link href="/community/submit">
                  Suggest a Discord Server
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.discord.map(server => (
                <div key={server.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium">{server.name}</h3>
                    {server.is_verified && (
                      <Badge className="bg-green-700">
                        <Check className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  {server.member_count && (
                    <p className="text-sm text-gray-400 mb-3">
                      {server.member_count.toLocaleString()} members
                    </p>
                  )}
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {server.description}
                  </p>
                  
                  <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                    <a 
                      href={server.invite_link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Join Server
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
            ))}
          </div>
          )}
        </div>
      </section>
      
      {/* Reddit Communities Section */}
      <section id="reddit" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-8">
            <User className="text-orange-500 w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Reddit Communities</h2>
          </div>
          
          {resources.reddit.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <User className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No Reddit Communities Yet</h3>
              <p className="text-gray-500 mb-6">
                We're currently curating a list of quality Reddit communities for cybersecurity professionals.
              </p>
              <Button asChild variant="outline">
                <Link href="/community/submit">
                  Suggest a Reddit Community
                </Link>
              </Button>
          </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.reddit.map(community => (
                <div key={community.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium">{community.name}</h3>
                    {community.is_verified && (
                      <Badge className="bg-green-700">
                        <Check className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
        </div>
                  
                  {community.member_count && (
                    <p className="text-sm text-gray-400 mb-3">
                      {community.member_count.toLocaleString()} members
                    </p>
                  )}
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {community.description}
                  </p>
                  
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <a 
                      href={community.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                      className="flex items-center justify-center"
                    >
                      View Subreddit
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Skool Communities Section */}
      <section id="skool" className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-8">
            <Shield className="text-purple-500 w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Skool Forums</h2>
          </div>
          
          {resources.skool.length === 0 ? (
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <Shield className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No Skool Communities Yet</h3>
              <p className="text-gray-500 mb-6">
                We're currently curating a list of quality Skool forums for cybersecurity education and discussion.
              </p>
              <Button asChild variant="outline">
                <Link href="/community/submit">
                  Suggest a Skool Forum
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.skool.map(community => (
                <div key={community.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium">{community.name}</h3>
                    {community.is_verified && (
                      <Badge className="bg-green-700">
                        <Check className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  {community.member_count && (
                    <p className="text-sm text-gray-400 mb-3">
                      {community.member_count.toLocaleString()} members
                    </p>
                  )}
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {community.description}
                  </p>
                  
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <a 
                      href={community.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                      className="flex items-center justify-center"
                  >
                      Join Forum
                      <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  </Button>
                </div>
              ))}
              </div>
          )}
                </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Community Guidelines</h2>
            <p className="text-xl text-gray-400 mb-8">
              Our community thrives on mutual respect, knowledge sharing, and collaborative learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/community/guidelines" className="flex items-center gap-2">
                  View Guidelines
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/community/code-of-conduct" className="flex items-center gap-2">
                  Code of Conduct
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 