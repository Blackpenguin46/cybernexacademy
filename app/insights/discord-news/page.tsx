import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Shield, AlertTriangle, ExternalLink, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@supabase/supabase-js';
import { RefreshButton } from './RefreshButton';

// Add Edge runtime directive to bypass Node.js network restrictions
export const runtime = 'edge';

// Just keep the revalidation
export const revalidate = 60; // revalidate more frequently

// Define fallback data in case of errors
const fallbackArticles = [
  {
    id: '1',
    content: '[SECURITY ALERT] Microsoft has released patches for 147 vulnerabilities in their April 2024 Patch Tuesday update, including 5 actively exploited zero-days. https://thehackernews.com/2024/04/microsoft-april-2024-patch-tuesday.html',
    author: 'SecurityBot',
    timestamp: '2024-04-09T16:30:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/2024/04/microsoft-april-2024-patch-tuesday.html']
  },
  {
    id: '2',
    content: '[THREAT INTEL] New LockBit ransomware variant detected with enhanced evasion capabilities. Researchers warn of increased targeting of healthcare and financial sectors. https://thehackernews.com/2024/04/new-lockbit-30-ransomware-variant.html',
    author: 'SecurityBot',
    timestamp: '2024-04-10T14:15:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/2024/04/new-lockbit-30-ransomware-variant.html']
  },
  {
    id: '3',
    content: '[VULNERABILITY] Critical Adobe Acrobat zero-day vulnerability (CVE-2024-21412) being actively exploited. Update immediately! https://thehackernews.com/2024/04/critical-adobe-acrobat-zero-day-under.html',
    author: 'SecurityBot',
    timestamp: '2024-04-11T09:45:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/2024/04/critical-adobe-acrobat-zero-day-under.html']
  }
];

// Define proper types
export interface DiscordMessage {
  id: string;
  created_at: string;
  title: string;
  content: string;
  author: string;
  channel: string;
}

// Enhanced fallback for better user experience
const enhancedFallbackArticles: DiscordMessage[] = [
  {
    id: '1',
    created_at: new Date().toISOString(),
    title: 'Welcome to CyberNex Academy News',
    content: 'Our system is currently displaying fallback content while we establish connection to our live database. Please check back soon for real-time updates.',
    author: 'CyberNex Team',
    channel: 'announcements'
  },
  {
    id: '2',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    title: 'Security Best Practices Workshop',
    content: 'Join us for a workshop on implementing security best practices in your organization.',
    author: 'Security Team',
    channel: 'events'
  },
  {
    id: '3',
    created_at: new Date(Date.now() - 172800000).toISOString(),
    title: 'New Cybersecurity Course Released',
    content: 'We\'ve just released a new course on advanced threat hunting techniques.',
    author: 'Education Team',
    channel: 'course-updates'
  },
  {
    id: '4',
    created_at: new Date(Date.now() - 259200000).toISOString(),
    title: 'Upcoming Webinar on Cloud Security',
    content: 'Don\'t miss our webinar on securing cloud infrastructure next week.',
    author: 'Cloud Team',
    channel: 'events'
  },
  {
    id: '5',
    created_at: new Date(Date.now() - 345600000).toISOString(),
    title: 'Community Discussion: Latest Vulnerabilities',
    content: 'Join the conversation on how to protect against recently discovered vulnerabilities.',
    author: 'Community Manager',
    channel: 'discussions'
  }
];

// Function to determine message type and color
function getMessageType(content: string) {
  // Check for specific tags or keywords in the content
  if (content.includes('[ALERT]') || content.includes('[CRITICAL]') || content.includes('ALERT:')) {
    return { type: 'Alert', color: 'bg-red-500 text-white' };
  } else if (content.includes('[UPDATE]') || content.includes('UPDATE:')) {
    return { type: 'Update', color: 'bg-blue-500 text-white' };
  } else if (content.includes('[THREAT]') || content.includes('THREAT:')) {
    return { type: 'Threat', color: 'bg-orange-500 text-white' };
  } else if (content.includes('[VULNERABILITY]') || content.includes('CVE-')) {
    return { type: 'Vulnerability', color: 'bg-yellow-500 text-black' };
  } else if (content.includes('[SECURITY]')) {
    return { type: 'Security', color: 'bg-purple-500 text-white' };
  } else if (content.includes('http') || content.includes('www.')) {
    return { type: 'News Link', color: 'bg-green-500 text-white' };
  }
  // Default case
  return { type: 'News', color: 'bg-gray-500 text-white' };
}

// Format content to show links as clickable
function formatContentWithLinks(content: string) {
  if (!content) return null;
  
  // Regular expression to find URLs in text
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // Replace URLs with markers to split content
  const contentWithMarkers = content.replace(urlRegex, '###URL###$1###URL###');
  
  // Split by markers
  const parts = contentWithMarkers.split('###URL###');
  
  // Create array of JSX elements
  return (
    <>
      {parts.map((part, index) => {
        // Check if this part is a URL
        if (urlRegex.test(part)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline break-all"
            >
              {part} <ExternalLink className="inline w-3 h-3 mb-1" />
            </a>
          );
        }
        // Return regular text
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

// Format date to a more readable format
function formatDate(dateString: string) {
  if (!dateString) return 'Unknown date';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    
    return date.toLocaleDateString('en-US', options);
  } catch (error) {
    return dateString;
  }
}

// Use proxy API to work around DNS resolution issues
async function getDiscordNews(): Promise<{ news: DiscordMessage[], source: string, error?: string, lastUpdated: string }> {
  console.log("Starting getDiscordNews function with proxy approach");
  
  try {
    // APPROACH 1: Try our proxy API first
    console.log("Attempting to fetch data through proxy API");
    
    // Build the URL for our proxy - use relative URL for better compatibility
    const proxyUrl = '/api/supabase-proxy';
    
    const proxyResponse = await fetch(proxyUrl, { 
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    
    if (proxyResponse.ok) {
      const proxyData = await proxyResponse.json();
      console.log("Proxy API successful:", proxyData.source);
      
      if (proxyData.news && proxyData.news.length > 0) {
        // Map the API response to our DiscordMessage format
        const formattedData: DiscordMessage[] = proxyData.news.map((item: any) => ({
          id: item.id,
          title: item.title || formatTitleFromContent(item.content),
          content: item.content,
          author: item.author || 'Unknown',
          created_at: item.created_at || item.timestamp || new Date().toISOString(),
          channel: item.channel || determineChannelFromContent(item.content)
        }));
        
        return {
          news: formattedData,
          source: "proxy_api_success",
          lastUpdated: proxyData.timestamp || new Date().toISOString()
        };
      }
    } else {
      console.log("Proxy API failed with status:", proxyResponse.status);
      const errorText = await proxyResponse.text();
      console.error("Proxy error:", errorText);
    }
    
    // APPROACH 2: Fall back to direct Supabase access if proxy fails
    console.log("Falling back to direct Supabase access");
    
    // Get Supabase credentials - use hardcoded as a guaranteed fallback
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hpfpuljthcngnswwfkrb.supabase.co';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZnB1bGp0aGNuZ25zd3dma3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjkxMjAsImV4cCI6MjAyODAwNTEyMH0._YrJ9mZMfIikw-iXw20z_oDkUTLR5MwbY1qnoxpBOvY';
    
    // Direct REST API call to Supabase (bypassing the client library)
    const apiUrl = `${supabaseUrl}/rest/v1/newsfeed?select=*&order=created_at.desc&limit=20`;
    
    console.log("Making direct REST API call to Supabase");
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      },
      // Ensure we don't use any caching
      cache: 'no-store'
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Supabase API error: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log(`Successfully fetched ${data.length} articles from Supabase`);
    
    if (!data || data.length === 0) {
      return {
        news: enhancedFallbackArticles,
        source: "fallback_empty_data",
        error: "No data found in database",
        lastUpdated: new Date().toISOString()
      };
    }
    
    // Map the API response to our DiscordMessage format
    const formattedData: DiscordMessage[] = data.map((item: any) => ({
      id: item.id,
      title: item.title || formatTitleFromContent(item.content),
      content: item.content,
      author: item.author || 'Unknown',
      created_at: item.created_at || item.timestamp || new Date().toISOString(),
      channel: item.channel || determineChannelFromContent(item.content)
    }));
    
    return {
      news: formattedData,
      source: "supabase_direct_api",
      lastUpdated: new Date().toISOString()
    };
  } catch (error: any) {
    console.error("Error fetching from all sources:", error);
    
    return {
      news: enhancedFallbackArticles,
      source: "fallback_all_methods_failed",
      error: error.message,
      lastUpdated: new Date().toISOString()
    };
  }
}

// Extract a title from content if none is provided
function formatTitleFromContent(content: string): string {
  if (!content) return 'News Update';
  
  // Try to extract a title from the first line or bracket contents
  const firstLine = content.split('\n')[0];
  
  // Check for [CATEGORY] pattern
  const bracketMatch = firstLine.match(/\[(.*?)\]/);
  if (bracketMatch) {
    return firstLine.trim();
  }
  
  // If first line is short enough, use it as title
  if (firstLine.length < 60) {
    return firstLine.trim();
  }
  
  // Otherwise use generic title
  return 'Security Update';
}

// Determine channel from content if none is provided
function determineChannelFromContent(content: string): string {
  if (!content) return 'general';
  
  if (content.includes('[ALERT]') || content.includes('[CRITICAL]')) {
    return 'alerts';
  } else if (content.includes('[UPDATE]')) {
    return 'updates';
  } else if (content.includes('[VULNERABILITY]') || content.includes('CVE-')) {
    return 'vulnerabilities';
  } else if (content.includes('[ADVISORY]')) {
    return 'advisories';
  } else if (content.includes('[THREAT]')) {
    return 'threats';
  }
  
  return 'general';
}

// Format the news content for display - this will parse titles and content from Supabase format
function formatNewsContent(content: string, urls?: string[]) {
  // If content includes a title followed by content (common format from Supabase)
  const parts = content.split('\n\n');
  
  // Extract title from first part
  let title = 'News Update';
  let contentText = content;
  
  if (parts.length > 1) {
    title = parts[0];
    contentText = parts.slice(1).join('\n\n');
  }
  
  // Remove any "Links:" section from the content if we have URLs array
  if (urls && urls.length > 0) {
    contentText = contentText.replace(/Links:\n(https?:\/\/[^\s]+\n?)+/g, '');
  }
  
  return {
    title,
    content: contentText
  };
}

export default async function DiscordNewsPage() {
  const { news, source, error, lastUpdated } = await getDiscordNews();
  
  return (
    <div className="pt-20 pb-8 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Discord News Feed</h1>
            <p className="text-gray-500 mt-1">Latest cybersecurity updates from our community</p>
          </div>
          <RefreshButton />
        </div>
        
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${source.includes('fallback') ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
            <h3 className="font-medium">Feed Information</h3>
          </div>
          <p>Source: <span className="font-mono">{source}</span></p>
          {error && <p>Error: <span className="font-mono text-red-500">{error}</span></p>}
          <p>Articles: {news.length}</p>
          <p>Last updated: {new Date(lastUpdated).toLocaleString()}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item: DiscordMessage) => {
            const date = new Date(item.created_at);
            return (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full whitespace-nowrap">
                      {item.channel}
                    </span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 mb-4 max-h-36 overflow-y-auto">
                    {item.content}
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span>{item.author}</span>
                    <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 