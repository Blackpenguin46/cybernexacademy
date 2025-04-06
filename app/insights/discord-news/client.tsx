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
        
        // Try the new simple API first (added 'news' route)
        try {
          console.log("Attempting to fetch data through simple API at /api/news");
          
          // This should be easier for Vercel to handle
          const response = await fetch('/api/news');
          
          if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
          }
          
          const data = await response.json();
          
          if (data.error) {
            console.error("API error:", data.error);
            throw new Error(data.error);
          }
          
          if (data.news && data.news.length > 0) {
            console.log(`API successful, fetched ${data.news.length} items`);
            
            // Process and format data
            const formattedData: DiscordMessage[] = data.news.map((item: any) => ({
              id: item.id,
              title: formatTitleFromContent(item.content),
              content: item.content,
              author: item.author || 'Unknown',
              created_at: item.created_at || item.timestamp || new Date().toISOString(),
              channel: determineChannelFromContent(item.content)
            }));
            
            // Store the complete dataset
            setAllNews(formattedData);
            // Initialize with all news (filter effect will handle filtering)
            setNews(formattedData);
            setSource('simple_api_success');
            setError(null);
            setLastUpdated(data.timestamp || new Date().toISOString());
            return;
          }
        } catch (apiError: any) {
          console.error("Simple API error:", apiError);
          // Continue to next approach
        }
        
        // If simple API fails, try the news-proxy API
        try {
          console.log("Attempting to fetch data through server-side API proxy");
          
          // This is a server-side API route in the same Next.js app
          const proxyResponse = await fetch('/api/news-proxy', { 
            cache: 'no-store',
          });
          
          if (proxyResponse.ok) {
            const proxyData = await proxyResponse.json();
            
            if (proxyData.error) {
              console.error("Server proxy returned error:", proxyData.error);
              throw new Error(proxyData.error);
            }
            
            if (proxyData.news && proxyData.news.length > 0) {
              console.log(`Server-side proxy successful, fetched ${proxyData.news.length} items`);
              
              // Map the API response to our DiscordMessage format
              const formattedData: DiscordMessage[] = proxyData.news.map((item: any) => ({
                id: item.id,
                title: formatTitleFromContent(item.content),
                content: item.content,
                author: item.author || 'Unknown',
                created_at: item.created_at || item.timestamp || new Date().toISOString(),
                channel: determineChannelFromContent(item.content)
              }));
              
              setNews(formattedData);
              setSource('server_proxy_success');
              setError(null);
              setLastUpdated(proxyData.timestamp || new Date().toISOString());
              return;
            }
          } else {
            console.error("Proxy API failed with status:", proxyResponse.status);
            throw new Error(`Server proxy error: ${proxyResponse.status}`);
          }
        } catch (proxyError: any) {
          console.error("Server proxy error:", proxyError);
        }
        
        // APPROACH 3: Try client-side Supabase fetch if server proxies fail
        console.log("Server proxies failed, trying direct Supabase client approach");
        
        // Try using client-side env vars first, then server-provided values, then hardcoded defaults
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 
                            serverSupabaseUrl || 
                            'https://hpfpuljthcngnswwfkrb.supabase.co';
                            
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
                            serverSupabaseKey || 
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZnB1bGp0aGNuZ25zd3dma3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjkxMjAsImV4cCI6MjAyODAwNTEyMH0._YrJ9mZMfIikw-iXw20z_oDkUTLR5MwbY1qnoxpBOvY';
        
        // Log domain information for debugging
        console.log(`Running on domain: ${window.location.hostname}`);
        console.log(`Full URL: ${window.location.href}`);
        console.log('Environment variables:', { 
          urlExists: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          keyExists: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          usingServerVars: !process.env.NEXT_PUBLIC_SUPABASE_URL && !!serverSupabaseUrl,
          usingHardcodedVars: !process.env.NEXT_PUBLIC_SUPABASE_URL && !serverSupabaseUrl
        });
        
        // Log which values we're using
        console.log('Client-side: Creating Supabase client with:', { 
          url: supabaseUrl.substring(0, 15) + '...',
          domain: window.location.hostname,
          source: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'client_env' : 
                 serverSupabaseUrl ? 'server_props' : 'hardcoded'
        });
        
        // Create client with more options for debugging
        const supabase = createClient(supabaseUrl, supabaseKey, {
          auth: {
            autoRefreshToken: true,
            persistSession: true
          }
        });
        
        // Fetch data
        console.log('Client-side: Fetching from newsfeed table');
        const { data, error: fetchError } = await supabase
          .from('newsfeed')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(20);
          
        if (fetchError) {
          // Check if this is a CORS error
          const errorMessage = fetchError.message || '';
          if (errorMessage.includes('CORS') || 
              errorMessage.includes('cross-origin') ||
              errorMessage.includes('Access-Control')) {
            throw new Error(`CORS error: This preview deployment (${window.location.hostname}) may not be allowed in Supabase settings. Error: ${errorMessage}`);
          }
          throw new Error(`Supabase client error: ${fetchError.message}`);
        }
        
        if (!data || data.length === 0) {
          console.log('Client-side: No data found, using fallback');
          setSource('fallback_empty_data_client');
          setError('No data found in database');
          return;
        }
        
        // Process and format data
        console.log(`Client-side: Successfully fetched ${data.length} items`);
        const formattedData: DiscordMessage[] = data.map((item: any) => ({
          id: item.id,
          title: formatTitleFromContent(item.content),
          content: item.content,
          author: item.author || 'Unknown',
          created_at: item.created_at || item.timestamp || new Date().toISOString(),
          channel: determineChannelFromContent(item.content)
        }));
        
        // Update state
        setNews(formattedData);
        setSource('client_supabase_success');
        setError(null);
        
      } catch (fetchError: any) {
        console.error('Data fetch error:', fetchError);
        
        // Special handling for preview deployment errors
        if (window.location.hostname.includes('vercel.app')) {
          setError(`Preview deployment error: ${fetchError.message}. API route may be failing.`);
          setSource('fallback_preview_error');
        } else {
          setError(fetchError.message);
          setSource('fallback_client_error');
        }
      } finally {
        setLoading(false);
        setLastUpdated(new Date().toISOString());
      }
    }

    fetchNewsData();
  }, [fallbackNews, serverSupabaseUrl, serverSupabaseKey]);
  
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

  return (
    <>
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${source.includes('fallback') ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
          <h3 className="font-medium">Feed Information</h3>
          {loading && <span className="text-blue-500 animate-pulse">Loading...</span>}
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <p>Source: <span className="font-mono">{source}</span></p>
            {error && <p>Error: <span className="font-mono text-red-500">{error}</span></p>}
            <p>
              Articles: <span className="font-medium">{news.length}</span>
              {allNews.length > news.length && (
                <span className="text-gray-500 text-xs ml-2">
                  (filtered from {allNews.length} total)
                </span>
              )}
            </p>
            <p>Last updated: {new Date(lastUpdated).toLocaleString()}</p>
          </div>
          
          {/* Time filters */}
          <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
            <div className="text-gray-500 flex items-center gap-1">
              <Filter size={14} />
              <span>Filter:</span>
            </div>
            {(Object.keys(filterLabels) as TimeFilter[]).map(filter => (
              <button
                key={filter}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  timeFilter === filter 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}
                onClick={() => setTimeFilter(filter)}
              >
                {filterLabels[filter]}
              </button>
            ))}
          </div>
        </div>
        
        {/* Only show debug info if there's an error */}
        {error && (
          <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-2">
            <p className="font-medium">Debug Information:</p>
            <pre className="bg-gray-800 dark:bg-gray-900 p-2 rounded text-xs mt-1 overflow-x-auto text-white font-mono">
              {envDebug}
            </pre>
            
            <div className="mt-4">
              <a href="/api-test" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Open API Test Page
              </a>
            </div>
          </div>
        )}
        
        {!error && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded text-sm">
            <p className="font-medium text-green-800 dark:text-green-200">✅ Feed is working correctly!</p>
            <p className="text-green-700 dark:text-green-300 text-xs mt-1">
              Data is being fetched successfully through the server-side API.
            </p>
          </div>
        )}
        
        {!error && source === 'simple_api_success' && (
          <div className="mt-2">
            <a href="/api-test" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs underline">
              View API details
            </a>
          </div>
        )}
      </div>

      {news.length === 0 ? (
        <div className="p-12 text-center bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-lg text-gray-500 dark:text-gray-400">No articles found for the selected time period.</p>
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
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className={`flex justify-between items-start mb-4 gap-2`}>
                    <h2 className="text-xl font-semibold mb-2">{formattedTitle}</h2>
                    <span className={`px-2 py-1 rounded-full whitespace-nowrap text-xs ${style.bg} ${style.text}`}>
                      {channel}
                    </span>
                  </div>
                  
                  <div 
                    className="text-gray-600 dark:text-gray-300 mb-4 max-h-36 overflow-y-auto prose prose-sm" 
                    dangerouslySetInnerHTML={{ __html: formattedContent }}
                  />
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 pt-2 border-t border-gray-100 dark:border-gray-700">
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
      
      {loading && (
        <div className="fixed top-0 right-0 m-4 bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
          Fetching data...
        </div>
      )}
    </>
  );
} 