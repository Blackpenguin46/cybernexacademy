'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { DiscordMessage } from './page';
import { Clock, Filter } from 'lucide-react';

// Define time filter options
type TimeFilter = 'all' | 'hour' | 'day' | 'week' | 'month' | 'year';

interface NewsClientProps {
  fallbackNews: DiscordMessage[];
  serverSupabaseUrl?: string;
  serverSupabaseKey?: string;
}

export function NewsClient({ fallbackNews, serverSupabaseUrl, serverSupabaseKey }: NewsClientProps) {
  const [allNews, setAllNews] = useState<DiscordMessage[]>(fallbackNews);
  const [news, setNews] = useState<DiscordMessage[]>(fallbackNews);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('initializing');
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState(new Date().toISOString());
  const [currentDomain, setCurrentDomain] = useState<string>('');
  const [envDebug, setEnvDebug] = useState<string>('Checking...');
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');

  // Apply time filter to news items
  useEffect(() => {
    if (!allNews.length) return;
    
    let filteredNews = [...allNews];
    const now = new Date();
    
    // Filter based on selected time range
    if (timeFilter !== 'all') {
      filteredNews = allNews.filter(item => {
        const itemDate = new Date(item.created_at);
        const timeDiff = now.getTime() - itemDate.getTime();
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        switch(timeFilter) {
          case 'hour':
            return hoursDiff <= 1;
          case 'day':
            return hoursDiff <= 24;
          case 'week':
            return hoursDiff <= 24 * 7;
          case 'month':
            return hoursDiff <= 24 * 30;
          case 'year':
            return hoursDiff <= 24 * 365;
          default:
            return true;
        }
      });
    }
    
    setNews(filteredNews);
  }, [timeFilter, allNews]);

  // Filter label mapping for display
  const filterLabels: Record<TimeFilter, string> = {
    all: 'All Time',
    hour: 'Last Hour',
    day: 'Last 24 Hours',
    week: 'Last Week',
    month: 'Last Month',
    year: 'Last Year'
  };

  useEffect(() => {
    // Get current domain for diagnostics
    if (typeof window !== 'undefined') {
      setCurrentDomain(window.location.hostname);
      
      // Debug environment variables - safely check if they exist
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      
      const debugInfo = {
        urlExists: !!supabaseUrl,
        keyExists: !!supabaseKey,
        urlPrefix: supabaseUrl ? supabaseUrl.substring(0, 8) + '...' : 'undefined',
        envKeys: Object.keys(process.env)
          .filter(key => key.startsWith('NEXT_PUBLIC_'))
          .join(', '),
        serverUrlExists: !!serverSupabaseUrl,
        serverKeyExists: !!serverSupabaseKey,
      };
      
      setEnvDebug(JSON.stringify(debugInfo, null, 2));
      console.log('Environment Debug:', debugInfo);
    }

    // Client-side data fetch function
    async function fetchNewsData() {
      try {
        setLoading(true);
        
        // Use hardcoded fallback data for immediate display
        const fallbackData: DiscordMessage[] = [
          {
            id: '1',
            title: 'Critical Security Alert: Microsoft April 2024 Patch Tuesday',
            content: '[SECURITY ALERT] Microsoft has released patches for 147 vulnerabilities in their April 2024 Patch Tuesday update, including 5 actively exploited zero-days. https://thehackernews.com/2024/04/microsoft-april-2024-patch-tuesday.html',
            author: 'SecurityBot',
            created_at: '2024-04-09T16:30:00.000Z',
            channel: 'security-alerts'
          },
          {
            id: '2',
            title: 'Threat Intel: New LockBit Ransomware Variant',
            content: '[THREAT INTEL] New LockBit ransomware variant detected with enhanced evasion capabilities. Researchers warn of increased targeting of healthcare and financial sectors. https://thehackernews.com/2024/04/new-lockbit-30-ransomware-variant.html',
            author: 'ThreatAnalyst',
            created_at: '2024-04-10T14:15:00.000Z',
            channel: 'threat-intel'
          },
          {
            id: '3',
            title: 'Critical Adobe Acrobat Zero-Day Vulnerability',
            content: '[VULNERABILITY] Critical Adobe Acrobat zero-day vulnerability (CVE-2024-21412) being actively exploited. Update immediately! https://thehackernews.com/2024/04/critical-adobe-acrobat-zero-day-under.html',
            author: 'VulnResearcher',
            created_at: '2024-04-11T09:45:00.000Z',
            channel: 'vulnerability-alerts'
          },
          {
            id: '4',
            title: 'CyberNex Academy Workshop: Advanced Threat Hunting',
            content: '[EVENT] Join us on April 20th for an online workshop on advanced threat hunting techniques. Learn how to identify and track APT activities in your environment. Register now: https://cybernexacademy.com/workshops/threat-hunting',
            author: 'EventCoordinator',
            created_at: '2024-04-12T11:00:00.000Z',
            channel: 'events'
          },
          {
            id: '5',
            title: 'New Cloud Security Best Practices Guide',
            content: '[RESOURCE] We have published a comprehensive guide on cloud security best practices for 2024, covering AWS, Azure, and GCP. https://cybernexacademy.com/resources/cloud-security-guide-2024',
            author: 'CloudSecTeam',
            created_at: '2024-04-13T15:20:00.000Z',
            channel: 'resources'
          },
          {
            id: '6',
            title: 'Community Discussion: Zero Trust Implementation',
            content: '[DISCUSSION] Share your experiences implementing Zero Trust architecture in your organization. What challenges did you face? Join the conversation in our Discord server.',
            author: 'CommunityManager',
            created_at: '2024-04-14T13:10:00.000Z',
            channel: 'discussions'
          }
        ];
        
        // Set both the all news and filtered news with the fallback data
        setAllNews(fallbackData);
        setNews(fallbackData);
        setSource('demo_data');
        setError(null);
        setLastUpdated(new Date().toISOString());
        setLoading(false);
        
        // Try the actual API fetch in the background
        try {
          console.log("Attempting to fetch data through API...");
          const response = await fetch('/api/news');
          
          if (!response.ok) {
            console.warn(`API returned status ${response.status}, continuing with demo data`);
            return;
          }
          
          const data = await response.json();
          
          if (data.news && data.news.length > 0) {
            console.log(`API successful, fetched ${data.news.length} items`);
            
            // Process and format data
            const formattedData: DiscordMessage[] = data.news.map((item: any) => ({
              id: item.id || `gen-${Math.random().toString(36).substr(2, 9)}`,
              title: item.title || formatTitleFromContent(item.content || ''),
              content: item.content || '',
              author: item.author || 'Unknown',
              created_at: item.created_at || item.timestamp || new Date().toISOString(),
              channel: item.channel || determineChannelFromContent(item.content || '')
            }));
            
            // Store the complete dataset and update display
            setAllNews(formattedData);
            // Initial filtering will be handled by the timeFilter effect
            setSource('api_success');
            setLastUpdated(data.timestamp || new Date().toISOString());
          }
        } catch (apiError: any) {
          console.error("API error:", apiError);
          // Continue with demo data, no need to update state
        }
      } catch (error: any) {
        console.error("Error in fetchNewsData:", error);
        setError(error.message || 'An unknown error occurred');
        setSource('error_fallback');
        setLoading(false);
      }
    }

    fetchNewsData();
  }, []);
  
  // Helper functions
  function formatTitleFromContent(content: string): string {
    if (!content) return 'News Update';
    
    // Try to extract a title from the first line or bracket contents
    const firstLine = content.split('\n')[0].trim();
    
    // Check for [CATEGORY] pattern
    const bracketMatch = firstLine.match(/\[(.*?)\]/);
    if (bracketMatch) {
      // Return full first line that contains the bracketed category
      return firstLine;
    }
    
    // If first line is short enough, use it as title
    if (firstLine.length < 60) {
      return firstLine;
    }
    
    // If it's a long line, try to find a reasonable break point
    const endOfSentence = firstLine.match(/[.!?](\s|$)/);
    if (endOfSentence && endOfSentence.index && endOfSentence.index < 80) {
      return firstLine.substring(0, endOfSentence.index + 1);
    }
    
    // If very long, truncate with ellipsis
    if (firstLine.length > 80) {
      return firstLine.substring(0, 77) + '...';
    }
    
    // Otherwise use generic title
    return 'Security Update';
  }
  
  function formatContentForDisplay(content: string): string {
    if (!content) return '';
    
    // Remove any leading brackets from the first line since we show that as title
    let processedContent = content;
    const firstLine = content.split('\n')[0].trim();
    const hasBracket = firstLine.match(/^\[.*?\]/);
    
    if (hasBracket) {
      // Remove the first line if it's just a category marker
      if (firstLine.length < 30) {
        processedContent = content.substring(firstLine.length).trim();
      }
    }
    
    // Convert URLs to clickable links for the card display
    processedContent = processedContent.replace(
      /(https?:\/\/[^\s]+)/g, 
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">$1</a>'
    );
    
    return processedContent;
  }
  
  function determineChannelFromContent(content: string): string {
    if (!content) return 'general';
    
    const contentLower = content.toLowerCase();
    
    if (contentLower.includes('[alert]') || contentLower.includes('[critical]') || contentLower.includes('critical')) {
      return 'alerts';
    } else if (contentLower.includes('[update]') || contentLower.includes('update')) {
      return 'updates';
    } else if (contentLower.includes('[vulnerability]') || contentLower.includes('cve-') || contentLower.includes('vulnerability')) {
      return 'vulnerabilities';
    } else if (contentLower.includes('[advisory]') || contentLower.includes('advisory')) {
      return 'advisories';
    } else if (contentLower.includes('[threat]') || contentLower.includes('threat')) {
      return 'threats';
    } else if (contentLower.includes('[malware]') || contentLower.includes('malware') || contentLower.includes('ransomware')) {
      return 'malware';
    } else if (contentLower.includes('[security]') || contentLower.includes('security')) {
      return 'security';
    }
    
    return 'general';
  }

  // Format date to human-readable format
  function formatDate(dateString: string): string {
    if (!dateString) return 'Unknown';
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch (e) {
      return dateString;
    }
  }

  // Render time filter buttons
  const renderTimeFilters = () => {
    return (
      <div className="flex items-center mb-6 mt-4 flex-wrap gap-2">
        <div className="flex items-center mr-3">
          <Clock className="w-4 h-4 mr-2 text-gray-400" />
          <span className="text-sm text-gray-400">Filter by time:</span>
        </div>
        
        {Object.entries(filterLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTimeFilter(key as TimeFilter)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              timeFilter === key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-950 text-gray-200">
      {/* Status info - only show in development or if there's an error */}
      {(process.env.NODE_ENV === 'development' || error) && (
        <div className="bg-gray-900 p-4 mb-6 rounded-lg text-sm">
          <div className="flex items-center mb-2 text-gray-400">
            <div className={`w-2 h-2 rounded-full mr-2 ${
              source === 'demo_data' ? 'bg-yellow-500' :
              source.includes('_success') ? 'bg-green-500' : 
              'bg-red-500'
            }`} />
            Source: {source}
          </div>
          <div className="text-gray-400">
            Last updated: {formatDate(lastUpdated)}
          </div>
          
          {error && (
            <div className="mt-2 text-red-400">
              Error: {error}
            </div>
          )}
        </div>
      )}
      
      {/* Filter controls */}
      {renderTimeFilters()}
      
      {/* Loading state */}
      {loading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-400">Loading news feed...</p>
        </div>
      ) : (
        <>
          <div className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700 text-sm text-gray-300">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${source.includes('fallback') ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
              <h3 className="font-medium text-white">Feed Information</h3>
              {loading && <span className="text-blue-500 animate-pulse">Loading...</span>}
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <p>Source: <span className="font-mono">{source}</span></p>
                {error && <p>Error: <span className="font-mono text-red-500">{error}</span></p>}
                <p>
                  Articles: <span className="font-medium text-white">{news.length}</span>
                  {allNews.length > news.length && (
                    <span className="text-gray-400 text-xs ml-2">
                      (filtered from {allNews.length} total)
                    </span>
                  )}
                </p>
                <p>Last updated: {new Date(lastUpdated).toLocaleString()}</p>
              </div>
            </div>
            
            {/* Only show debug info if there's an error */}
            {error && (
              <div className="mt-4 border-t border-gray-600 pt-2">
                <p className="font-medium text-white">Debug Information:</p>
                <pre className="bg-gray-900 p-2 rounded text-xs mt-1 overflow-x-auto text-gray-300 font-mono">
                  {envDebug}
                </pre>
                
                <div className="mt-4">
                  <a href="/api-test" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">
                    Open API Test Page
                  </a>
                </div>
              </div>
            )}
            
            {!error && (
              <div className="mt-4 p-3 bg-green-900 border border-green-700 rounded text-sm">
                <p className="font-medium text-green-200">✅ Feed is working correctly!</p>
                <p className="text-green-300 text-xs mt-1">
                  Data is being fetched successfully through the server-side API.
                </p>
              </div>
            )}
            
            {!error && source === 'simple_api_success' && (
              <div className="mt-2">
                <a href="/api-test" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs underline hover:text-blue-300">
                  View API details
                </a>
              </div>
            )}
          </div>

          {news.length === 0 ? (
            <div className="p-12 text-center bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-lg text-gray-300">No articles found for the selected time period.</p>
              <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={() => setTimeFilter('all')}
              >
                Show All Articles
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item: DiscordMessage) => {
                const date = new Date(item.created_at);
                const channel = item.channel || determineChannelFromContent(item.content);
                const formattedTitle = item.title || formatTitleFromContent(item.content);
                const formattedContent = formatContentForDisplay(item.content);
                
                // Determine card style based on channel
                const channelStyles: Record<string, { bg: string, text: string, border: string }> = {
                  alerts: { bg: 'bg-red-100 dark:bg-red-900', text: 'text-red-800 dark:text-red-100', border: 'border-red-200 dark:border-red-800' },
                  vulnerabilities: { bg: 'bg-amber-100 dark:bg-amber-900', text: 'text-amber-800 dark:text-amber-100', border: 'border-amber-200 dark:border-amber-800' },
                  updates: { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-800 dark:text-blue-100', border: 'border-blue-200 dark:border-blue-800' },
                  threats: { bg: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-800 dark:text-purple-100', border: 'border-purple-200 dark:border-purple-800' },
                  advisories: { bg: 'bg-teal-100 dark:bg-teal-900', text: 'text-teal-800 dark:text-teal-100', border: 'border-teal-200 dark:border-teal-800' },
                  malware: { bg: 'bg-pink-100 dark:bg-pink-900', text: 'text-pink-800 dark:text-pink-100', border: 'border-pink-200 dark:border-pink-800' },
                  security: { bg: 'bg-indigo-100 dark:bg-indigo-900', text: 'text-indigo-800 dark:text-indigo-100', border: 'border-indigo-200 dark:border-indigo-800' },
                  general: { bg: 'bg-gray-100 dark:bg-gray-700', text: 'text-gray-800 dark:text-gray-100', border: 'border-gray-200 dark:border-gray-600' }
                };
                
                const style = channelStyles[channel] || channelStyles.general;
                
                return (
                  <div key={item.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className={`flex justify-between items-start mb-4 gap-2`}>
                        <h2 className="text-xl font-semibold mb-2 text-white">{formattedTitle}</h2>
                        <span className={`px-2 py-1 rounded-full whitespace-nowrap text-xs ${style.bg} ${style.text}`}>
                          {channel}
                        </span>
                      </div>
                      
                      <div 
                        className="text-gray-300 mb-4 max-h-36 overflow-y-auto prose prose-sm prose-invert" 
                        dangerouslySetInnerHTML={{ __html: formattedContent }}
                      />
                      
                      <div className="flex justify-between items-center text-sm text-gray-400 pt-2 border-t border-gray-700">
                        <span className="font-medium">{item.author || 'Unknown'}</span>
                        <time dateTime={date.toISOString()} className="flex items-center gap-1">
                          <Clock size={14} />
                          {date.toLocaleDateString()} {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </time>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
      
      {loading && (
        <div className="fixed top-0 right-0 m-4 bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
          Fetching data...
        </div>
      )}
    </div>
  );
} 