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
        
        // Create minimal fallback data in case API fails
        const minimalFallback: DiscordMessage[] = [
          {
            id: '1',
            title: 'Loading database content...',
            content: 'If you see this message, the database connection may not be working. Please check your Supabase configuration and ensure the API routes are functioning correctly.',
            author: 'System',
            created_at: new Date().toISOString(),
            channel: 'general'
          }
        ];
        
        // Try the actual API fetch in the background
        try {
          console.log("Attempting to fetch data from API...");
          
          // Add timestamp to prevent caching
          const timestamp = new Date().getTime();
          const response = await fetch(`/api/discord-news?t=${timestamp}`);
          
          if (!response.ok) {
            console.warn(`API returned status ${response.status}, falling back to minimal content`);
            const errorText = await response.text();
            console.error("API error details:", errorText);
            
            setAllNews(minimalFallback);
            setNews(minimalFallback);
            setSource('api_error');
            setError(`API error: ${response.status} - ${errorText.substring(0, 100)}`);
            setLoading(false);
            return;
          }
          
          const data = await response.json();
          console.log("API response:", data);
          
          // Always set the source accurately from the API response
          setSource(data.source || 'unknown_source');
          setLastUpdated(data.time || new Date().toISOString());
          
          // Add this to store connectivity tests
          // Store connectivity test results if available
          if (data.connectivity_tests) {
            console.log('Connectivity test results:', data.connectivity_tests);
            setEnvDebug(prev => 
              prev + '\n\nConnectivity Tests:\n' + 
              JSON.stringify(data.connectivity_tests, null, 2)
            );
          }
          
          // Check for detailed error information
          if (data.error_details) {
            console.log('Error details from API:', data.error_details);
            setEnvDebug(prev => prev + '\n\nAPI Error Details:\n' + JSON.stringify(data.error_details, null, 2));
          }
          
          // Even if we get an api_error source, check if we have articles
          if (data.articles && data.articles.length > 0) {
            console.log(`API response contains ${data.articles.length} articles from source: ${data.source}`);
            
            // Process and format data from the actual database based on screenshot structure
            const formattedData: DiscordMessage[] = data.articles.map((item: any) => {
              console.log("Processing article:", item);
              return {
                id: item.id || `gen-${Math.random().toString(36).substr(2, 9)}`,
                // Title is either directly from item.title or use the content
                title: item.title || item.content || 'News Update',
                content: item.content || '',
                author: item.author || 'CyberSecurity Bot', 
                created_at: item.timestamp || item.created_at || new Date().toISOString(),
                channel: determineChannelFromContent(item.content || '')
              };
            });
            
            console.log("Formatted data:", formattedData.length, "articles");
            
            // Store the complete dataset and update display
            setAllNews(formattedData);
            setNews(formattedData);
            setError(null);
            
          } else {
            console.warn('API returned empty data array');
            setAllNews(minimalFallback);
            setNews(minimalFallback);
            setSource('empty_database');
            setError('No articles found in database');
          }

          // Add this to store key information
          if (data.key_used) {
            console.log('Key used for connection:', data.key_used);
            setEnvDebug(prev => 
              prev + '\n\nAPI Key Used: ' + data.key_used
            );
          }
        } catch (apiError: any) {
          console.error("API error:", apiError);
          setAllNews(minimalFallback);
          setNews(minimalFallback);
          setSource('api_error');
          setError(`Error fetching from API: ${apiError.message}`);
        }
      } catch (error: any) {
        console.error("Error in fetchNewsData:", error);
        setError(error.message || 'An unknown error occurred');
        setSource('error_fallback');
      } finally {
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

  // Determine channel based on item.channel or content
  function determineChannel(channelName?: string): string {
    if (channelName) return channelName.toLowerCase();
    
    // Default fallback channel
    return 'general';
  }
  
  // Get style for a given channel
  function getStyleForChannel(channel: string): { bg: string, text: string } {
    const channelStyles: Record<string, { bg: string, text: string }> = {
      'security-alerts': { bg: 'bg-red-900', text: 'text-red-100' },
      'vulnerability-alerts': { bg: 'bg-yellow-900', text: 'text-yellow-100' },
      'threat-intel': { bg: 'bg-orange-900', text: 'text-orange-100' },
      'events': { bg: 'bg-blue-900', text: 'text-blue-100' },
      'resources': { bg: 'bg-green-900', text: 'text-green-100' },
      'discussions': { bg: 'bg-purple-900', text: 'text-purple-100' },
      'general': { bg: 'bg-gray-700', text: 'text-gray-100' }
    };
    
    return channelStyles[channel] || channelStyles.general;
  }
  
  // Format content with clickable links
  function formatContentWithLinks(content: string): string {
    if (!content) return '<p class="text-gray-400 italic">No content available</p>';
    
    // Regular expression to find URLs in text
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    // Replace URLs with HTML link tags
    const htmlContent = content.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">$1</a>');
    
    // Wrap in paragraph tags if not already HTML
    if (!htmlContent.includes('<p>')) {
      return `<p>${htmlContent}</p>`;
    }
    
    return htmlContent;
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
            {(error || source === 'api_error') && (
              <div className="mt-4 border-t border-gray-600 pt-2">
                <p className="font-medium text-white">Debug Information:</p>
                <pre className="bg-gray-900 p-2 rounded text-xs mt-1 overflow-x-auto max-h-48 text-gray-300 font-mono">
                  {envDebug}
                </pre>
                
                <div className="mt-4 flex space-x-4">
                  <a 
                    href={`/api/discord-news?t=${new Date().getTime()}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    View Raw API Response
                  </a>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-green-400 underline hover:text-green-300"
                  >
                    Reload Page
                  </button>
                </div>
              </div>
            )}
            
            {!error && 
              !source.includes('error') && 
              source !== 'fallback_error' && 
              source !== 'database_empty' && (
              <div className={`mt-4 p-3 rounded text-sm ${
                source === 'server_verified_fallback' ? 'bg-yellow-900 border border-yellow-700' : 'bg-green-900 border border-green-700'
              }`}>
                {source === 'server_verified_fallback' ? (
                  <>
                    <p className="font-medium text-yellow-200">⚠️ Using verified test data</p>
                    <p className="text-yellow-300 text-xs mt-1">
                      The API is working but using test data while database connection is being established.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-medium text-green-200">✅ Feed is working correctly!</p>
                    <p className="text-green-300 text-xs mt-1">
                      Data is being fetched successfully through the server-side API.
                    </p>
                  </>
                )}
              </div>
            )}
            
            {source === 'api_error' && !error && (
              <div className="mt-4 p-3 bg-red-900 border border-red-700 rounded text-sm">
                <p className="font-medium text-red-200">❌ Database connection error</p>
                <p className="text-red-300 text-xs mt-1">
                  The API is returning fallback data because it couldn't connect to the database.
                </p>
              </div>
            )}

            {source === 'network_error' && (
              <div className="mt-4 p-3 bg-red-900 border border-red-700 rounded text-sm">
                <p className="font-medium text-red-200">🔌 Network Connectivity Error</p>
                <p className="text-red-300 text-xs mt-1">
                  The server cannot connect to the Supabase database due to network restrictions.
                </p>
                <div className="mt-2 p-2 bg-red-950 rounded border border-red-800">
                  <p className="text-xs text-red-300 font-medium">Troubleshooting suggestions:</p>
                  <ul className="list-disc list-inside text-xs text-red-300 mt-1 space-y-1">
                    <li>Check if your server has internet access</li>
                    <li>Verify your hosting provider allows external API calls</li>
                    <li>Try running the app on a different network</li>
                    <li>Test with a local database instead</li>
                  </ul>
                </div>
              </div>
            )}

            {source === 'supabase_specific_error' && (
              <div className="mt-4 p-3 bg-orange-900 border border-orange-700 rounded text-sm">
                <p className="font-medium text-orange-200">🚫 Supabase Connection Blocked</p>
                <p className="text-orange-300 text-xs mt-1">
                  Your server can connect to some external sites but not to Supabase specifically.
                </p>
                <div className="mt-2 p-2 bg-orange-950 rounded border border-orange-800">
                  <p className="text-xs text-orange-300 font-medium">Troubleshooting suggestions:</p>
                  <ul className="list-disc list-inside text-xs text-orange-300 mt-1 space-y-1">
                    <li>Your network may be blocking Supabase specifically</li>
                    <li>Try accessing Supabase from a different network or VPN</li>
                    <li>Check if your hosting provider blocks certain domains</li>
                    <li>Try using a different database service</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-orange-800 flex items-center justify-between">
                    <a 
                      href="https://vxxpwaloyrtwvpmatzpc.supabase.co"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-yellow-300 text-xs hover:text-yellow-200 flex items-center"
                    >
                      <span className="mr-1">🔄</span> Test Supabase Connection Directly
                    </a>
                    <span className="text-orange-400 text-xs">|</span>
                    <a 
                      href="https://app.supabase.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-yellow-300 text-xs hover:text-yellow-200 flex items-center"
                    >
                      <span className="mr-1">🔑</span> Supabase Dashboard
                    </a>
                  </div>
                </div>
              </div>
            )}

            {source === 'supabase_auth_error' && (
              <div className="mt-4 p-3 bg-yellow-900 border border-yellow-700 rounded text-sm">
                <p className="font-medium text-yellow-200">🔑 Supabase Authentication Error</p>
                <p className="text-yellow-300 text-xs mt-1">
                  Your server can connect to Supabase, but the authentication or table access failed.
                </p>
                <div className="mt-2 p-2 bg-yellow-950 rounded border border-yellow-800">
                  <p className="text-xs text-yellow-300 font-medium">Troubleshooting suggestions:</p>
                  <ul className="list-disc list-inside text-xs text-yellow-300 mt-1 space-y-1">
                    <li>Check your Supabase API key permissions</li>
                    <li>Verify the "newsfeed" table exists in your project</li>
                    <li>Check Row Level Security settings for the table</li>
                    <li>Confirm your Supabase project is active</li>
                  </ul>
                </div>
              </div>
            )}

            {source === 'key_authentication_error' && (
              <div className="mt-4 p-3 bg-purple-900 border border-purple-700 rounded text-sm">
                <p className="font-medium text-purple-200">🔐 API Key Authentication Failed</p>
                <p className="text-purple-300 text-xs mt-1">
                  Your server can connect to Supabase, but both API keys failed to authenticate.
                </p>
                <div className="mt-2 p-2 bg-purple-950 rounded border border-purple-800">
                  <p className="text-xs text-purple-300 font-medium">Troubleshooting suggestions:</p>
                  <ul className="list-disc list-inside text-xs text-purple-300 mt-1 space-y-1">
                    <li>Verify your API keys in the Supabase dashboard</li>
                    <li>Try regenerating your API keys</li>
                    <li>Check for expired keys</li>
                    <li>Ensure Row Level Security policies allow access</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-purple-800">
                    <a 
                      href="https://app.supabase.com/project/_/settings/api" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-pink-300 text-xs hover:text-pink-200 flex items-center"
                    >
                      <span className="mr-1">🔑</span> Get your API keys from Supabase Dashboard
                    </a>
                  </div>
                </div>
              </div>
            )}

            {source === 'path_error' && (
              <div className="mt-4 p-3 bg-indigo-900 border border-indigo-700 rounded text-sm">
                <p className="font-medium text-indigo-200">🔒 Table Access Permission Error</p>
                <p className="text-indigo-300 text-xs mt-1">
                  Your server can connect to Supabase and the table exists, but API access is being denied.
                </p>
                <div className="mt-2 p-2 bg-indigo-950 rounded border border-indigo-800">
                  <p className="text-xs text-indigo-300 font-medium">Troubleshooting suggestions:</p>
                  <ul className="list-disc list-inside text-xs text-indigo-300 mt-1 space-y-1">
                    <li>Verify your API keys have permission to access the table</li>
                    <li>Check Row Level Security (RLS) policies on the table</li>
                    <li>Try using a service_role key which can bypass RLS</li>
                    <li>Make sure the table name case is exactly "newsfeed"</li>
                  </ul>
                  <div className="mt-3 pt-2 border-t border-indigo-800 flex justify-between">
                    <a 
                      href="https://app.supabase.com/project/_/auth/policies" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-300 text-xs hover:text-blue-200 flex items-center"
                    >
                      <span className="mr-1">🔒</span> Check RLS Policies
                    </a>
                    <a 
                      href="https://app.supabase.com/project/_/settings/api" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-300 text-xs hover:text-blue-200 flex items-center"
                    >
                      <span className="mr-1">🔑</span> Get Service Role Key
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Add after this a collapsible connectivity report section */}
          {envDebug && envDebug.includes('Connectivity Tests') && (
            <div className="mt-4 border-t border-gray-600 pt-4">
              <details className="group">
                <summary className="flex cursor-pointer items-center text-sm font-medium text-blue-400 hover:text-blue-300">
                  <span className="mr-2">👁️</span> View Network Connectivity Details
                  <span className="ml-auto text-xs text-gray-500 group-open:hidden">Click to expand</span>
                  <span className="ml-auto hidden text-xs text-gray-500 group-open:inline">Click to collapse</span>
                </summary>
                <div className="mt-3 bg-gray-900 rounded-md border border-gray-700 p-3">
                  <p className="text-xs text-gray-400 mb-2">
                    These tests check if your server can connect to various sites:
                  </p>
                  <pre className="bg-black p-2 rounded text-xs overflow-x-auto max-h-36 text-green-300 font-mono">
                    {envDebug.split('Connectivity Tests:')[1]}
                  </pre>
                  <p className="text-xs text-gray-400 mt-2">
                    ✅ = Site is reachable | ❌ = Site is blocked or unreachable
                  </p>
                </div>
              </details>
            </div>
          )}

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
                const channel = determineChannel(item.channel);
                const style = getStyleForChannel(channel);
                const date = new Date(item.created_at);
                
                // Format title, defaulting to first sentence of content if no title
                const formattedTitle = item.title || formatTitleFromContent(item.content || 'Unknown Post');
                
                // Format content with links
                const formattedContent = item.content 
                  ? formatContentWithLinks(item.content)
                  : '<p class="text-gray-400 italic">No content available</p>';
                
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