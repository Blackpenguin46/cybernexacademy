import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Shield, AlertTriangle, ExternalLink, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@supabase/supabase-js';
import { RefreshButton } from './RefreshButton';

// Add static generation with frequent revalidation
export const revalidate = 300; // revalidate every 5 minutes

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

async function getDiscordNews(): Promise<{ news: DiscordMessage[], source: string, error?: string, lastUpdated: string }> {
  console.log("Starting getDiscordNews function");
  
  // Check environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  console.log(`Supabase URL configured: ${supabaseUrl ? 'Yes' : 'No'}`);
  console.log(`Supabase Anon Key configured: ${supabaseAnonKey ? 'Yes (length: ' + supabaseAnonKey.length + ')' : 'No'}`);
  
  // Return fallback if credentials aren't available
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase credentials");
    return {
      news: enhancedFallbackArticles,
      source: "fallback_missing_credentials",
      error: "Missing Supabase credentials",
      lastUpdated: new Date().toISOString()
    };
  }

  try {
    // Create client with specific fetch options
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
      global: {
        fetch: (url, options) => {
          console.log(`Fetching from: ${url}`);
          return fetch(url, {
            ...options,
            cache: 'no-store',
            next: { revalidate: 0 },
          });
        }
      }
    });

    // Perform a simple test query to check connectivity
    console.log("Testing Supabase connection...");
    try {
      const { data: testData, error: testError } = await supabase
        .from('newsfeed')
        .select('count')
        .limit(1);
      
      if (testError) {
        throw new Error(`Supabase test connection failed: ${testError.message}`);
      }
      console.log("Supabase connection test successful:", testData);
    } catch (testError: any) {
      console.error("Supabase connection test error:", testError.message || testError);
      return {
        news: enhancedFallbackArticles,
        source: "fallback_connection_test_failed",
        error: testError.message || "Unknown connection error",
        lastUpdated: new Date().toISOString()
      };
    }

    // Main query
    console.log("Querying newsfeed table...");
    const { data, error } = await supabase
      .from('newsfeed')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) {
      console.error("Supabase query error:", error);
      return {
        news: enhancedFallbackArticles,
        source: "fallback_query_error",
        error: error.message,
        lastUpdated: new Date().toISOString()
      };
    }

    if (!data || data.length === 0) {
      console.log("No news articles found in database");
      return {
        news: enhancedFallbackArticles,
        source: "fallback_no_data",
        error: "No news articles found",
        lastUpdated: new Date().toISOString()
      };
    }

    console.log(`Found ${data.length} news articles`);
    return {
      news: data as DiscordMessage[],
      source: "supabase",
      lastUpdated: new Date().toISOString()
    };
  } catch (error: any) {
    console.error("Error fetching news:", error);
    return {
      news: enhancedFallbackArticles,
      source: "fallback_error",
      error: error.message || "Unknown error",
      lastUpdated: new Date().toISOString()
    };
  }
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Discord News Feed</h1>
        <RefreshButton />
      </div>
      
      <div className="mb-4 text-sm text-gray-500">
        <p>Source: {source}</p>
        {error && <p>Error: {error}</p>}
        <p>Articles: {news.length}</p>
        <p>Last updated: {new Date(lastUpdated).toLocaleString()}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item: DiscordMessage) => {
          const date = new Date(item.created_at);
          return (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full">
                    {item.channel}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.content}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{item.author}</span>
                  <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 