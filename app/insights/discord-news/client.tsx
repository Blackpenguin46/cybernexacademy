'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { DiscordMessage } from './page';

interface NewsClientProps {
  fallbackNews: DiscordMessage[];
  serverSupabaseUrl?: string;
  serverSupabaseKey?: string;
}

export function NewsClient({ fallbackNews, serverSupabaseUrl, serverSupabaseKey }: NewsClientProps) {
  const [news, setNews] = useState<DiscordMessage[]>(fallbackNews);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('initializing');
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState(new Date().toISOString());
  const [currentDomain, setCurrentDomain] = useState<string>('');
  const [envDebug, setEnvDebug] = useState<string>('Checking...');

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

  return (
    <>
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${source.includes('fallback') ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
          <h3 className="font-medium">Feed Information</h3>
          {loading && <span className="text-blue-500 animate-pulse">Loading...</span>}
        </div>
        <p>Source: <span className="font-mono">{source}</span></p>
        {error && <p>Error: <span className="font-mono text-red-500">{error}</span></p>}
        <p>Articles: {news.length}</p>
        <p>Last updated: {new Date(lastUpdated).toLocaleString()}</p>
        <p>Fetch mode: <span className="font-mono">client-side browser</span></p>
        {currentDomain && <p>Current domain: <span className="font-mono">{currentDomain}</span></p>}
        
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
      
      {loading && (
        <div className="fixed top-0 right-0 m-4 bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
          Fetching data...
        </div>
      )}
    </>
  );
} 