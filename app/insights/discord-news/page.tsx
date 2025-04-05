"use client"

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Shield, AlertTriangle, ExternalLink, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DiscordMessage {
  id: string;
  content: string;
  author: string;
  timestamp: string;
  attachments: any[];
  urls?: string[]; // Add optional urls array field
}

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

export default function DiscordNewsPage() {
  const [news, setNews] = useState<DiscordMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [source, setSource] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [debug, setDebug] = useState<any>({});
  const [stateCounter, setStateCounter] = useState(0);
  const [showDebugPanel, setShowDebugPanel] = useState(true);
  
  // Debugging refs to track state changes
  const newsRef = useRef<DiscordMessage[]>([]);
  const loadingRef = useRef(true);
  
  // Function to toggle debug panel visibility
  const toggleDebugPanel = () => {
    console.log("Toggle debug panel clicked, current state:", showDebugPanel);
    setShowDebugPanel(prev => !prev);
  };
  
  // Modified fetchNews function with better state handling
  const fetchNews = useCallback(async () => {
    try {
      console.log('Starting to fetch news, setting loading to true');
      setLoading(true);
      loadingRef.current = true;
      setError('');
      setStateCounter(prev => prev + 1);
      
      // Add loading timeout safety net
      const loadingTimeout = setTimeout(() => {
        if (loadingRef.current) {
          console.log('Loading timeout reached, forcing loading state to false');
          setLoading(false);
          loadingRef.current = false;
          setStateCounter(prev => prev + 1);
          if (newsRef.current.length === 0) {
            setError('Loading timed out. Please try refreshing.');
          }
        }
      }, 10000);
      
      console.log('Fetching Discord news...');
      const response = await fetch('/api/discord-news', {
        cache: 'no-store',
        next: { revalidate: 0 }
      });
      
      // Clear timeout since we got a response
      clearTimeout(loadingTimeout);
      
      const data = await response.json();
      console.log('Received data from API:', data);
      
      // More detailed debugging
      if (data.articles && data.articles.length > 0) {
        console.log('First article sample:', data.articles[0]);
      } else {
        console.log('No articles found in the response');
      }

      // Save debug info
      setDebug({
        responseStatus: response.status,
        responseData: data,
        time: new Date().toISOString()
      });

      if (!response.ok) {
        throw new Error(data.message || `Failed to fetch news: ${response.status} ${response.statusText}`);
      }
      
      if (!data.articles || !Array.isArray(data.articles)) {
        throw new Error('Invalid API response format: missing articles array');
      }
      
      console.log(`Setting news articles, count: ${data.articles.length}`);
      setNews(data.articles);
      newsRef.current = data.articles;
      setSource(data.source || 'unknown');
      setStatusMsg(data.message || '');
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(`Failed to load news. ${errorMessage}`);
      console.error('Error loading news:', err);
      
      setDebug((prev: any) => ({ ...prev, error: errorMessage, time: new Date().toISOString() }));
      setNews([]);
      newsRef.current = [];
      setSource('error');
    } finally {
      console.log('Setting loading to false');
      setLoading(false);
      loadingRef.current = false;
      setStateCounter(prev => prev + 1);
      console.log('Current state after fetch:', { 
        loading: false, 
        newsCount: newsRef.current.length,
        error: error ? 'yes' : 'no' 
      });
    }
  }, []);

  // Add side effect to log whenever state changes
  useEffect(() => {
    console.log(`State update - Loading: ${loading}, News count: ${news.length}, Error: ${error ? 'yes' : 'no'}`);
  }, [loading, news.length, error]);

  // Force reset loading if stuck
  useEffect(() => {
    const forceLoadingFalse = setTimeout(() => {
      if (loading) {
        console.log('Force setting loading to false due to stuck state');
        setLoading(false);
        loadingRef.current = false;
      }
    }, 15000);
    
    return () => clearTimeout(forceLoadingFalse);
  }, [loading]);

  // Initial fetch
  useEffect(() => {
    fetchNews();
    
    const intervalId = setInterval(fetchNews, 2 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [fetchNews]);

  // Determine what message to show to the user
  let statusDisplay = null;
  if (source === 'fallback' && !loading) { // Only show if not loading
    statusDisplay = (
      <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4 mb-6">
        <div className="flex items-center text-yellow-400 mb-2">
          <AlertTriangle className="w-5 h-5 mr-2" />
          <h3 className="font-semibold">Using Fallback Data</h3>
        </div>
        <p className="text-yellow-300">
          Could not fetch live data from database. {statusMsg}
          <br />
          Displaying sample news. Data might be outdated.
        </p>
      </div>
    );
  }

  // Format the news content for display - this will parse titles and content from Supabase format
  const formatNewsContent = (content: string, urls?: string[]) => {
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
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link href="/insights" className="text-purple-400 hover:underline flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
          <div className="flex gap-2">
            <Button 
              variant="outline"
              size="sm"
              onClick={toggleDebugPanel} 
              className="bg-gray-800 border-gray-700 hover:bg-gray-700"
              id="toggleDebugBtn"
              name="toggleDebugBtn"
            >
              {showDebugPanel ? 'Hide Debug' : 'Show Debug'}
            </Button>
            <Button 
              variant="outline"
              size="sm"
              onClick={fetchNews} 
              disabled={loading}
              className="bg-gray-800 border-gray-700 hover:bg-gray-700 disabled:opacity-50"
              id="refreshFeedBtn"
              name="refreshFeedBtn"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Refreshing...' : 'Refresh Feed'}
            </Button>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Cybersecurity News Feed</h1>
        <p className="text-lg text-gray-300 mb-8">
          Real-time cybersecurity news and alerts, typically sourced from our Discord channel.
        </p>
        
        {/* Debug panel - conditionally shown */}
        {showDebugPanel && (
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-6">
            <div className="flex items-center text-gray-400 mb-2">
              <h3 className="font-semibold">Debug Info</h3>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              <p>Loading: {loading ? 'true' : 'false'}</p>
              <p>Error: {error ? error : 'none'}</p>
              <p>News Count: {news.length}</p>
              <p>Source: {source}</p>
              <p>Status Message: {statusMsg}</p>
              <p>State Counter: {stateCounter}</p>
              <p>Render Time: {new Date().toISOString()}</p>
            </div>
          </div>
        )}
        
        {/* Show fallback status message if applicable */}
        {statusDisplay}
        
        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-pulse flex flex-col items-center">
              <RefreshCw className="h-8 w-8 text-purple-600/50 mb-4 animate-spin" />
              <p className="text-purple-400/80">Loading latest news...</p>
            </div>
          </div>
        )}
        
        {/* Error message */}
        {error && !loading && (
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 mb-8">
            <div className="flex items-center text-red-400 mb-2">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <h3 className="font-semibold">Error Loading Feed</h3>
            </div>
            <p className="text-red-300 mb-3">{error}</p>
            <Button 
              variant="outline"
              size="sm"
              onClick={fetchNews} 
              className="bg-red-900/30 border-red-800/50 hover:bg-red-800/50"
              id="tryAgainBtn"
              name="tryAgainBtn"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <div className="mt-4 p-3 bg-red-900/30 rounded border border-red-800/50 text-xs text-red-300 font-mono">
              <p>If the issue persists, ensure the database connection is working properly.</p>
              <p className="mt-1">Debug Info: <pre className="overflow-auto max-h-20 mt-1">{JSON.stringify(debug, null, 2)}</pre></p>
            </div>
          </div>
        )}
        
        {/* No news found message */}
        {!loading && !error && news.length === 0 && source !== 'fallback' && (
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 mb-8">
            <div className="flex items-center text-blue-400 mb-2">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <h3 className="font-semibold">No Recent News Found</h3>
            </div>
            <p className="text-blue-300">
              We couldn't find any recent news articles in our database. Please check back later.
            </p>
            <div className="mt-4 p-3 bg-blue-900/30 rounded border border-blue-800/50 text-xs text-blue-300 font-mono">
              <p>Debug Info: <pre className="overflow-auto max-h-20 mt-1">{JSON.stringify(debug, null, 2)}</pre></p>
            </div>
          </div>
        )}
        
        {/* News content - MODIFIED to show even if loading (helps debug) */}
        {news.length > 0 && (
          <div className="space-y-6">
            <div className={loading ? "opacity-50" : ""}>
              {news.map((item) => {
                const { title, content } = formatNewsContent(item.content, item.urls);
                const messageType = getMessageType(content);
                
                return (
                  <div key={item.id} className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden mb-6">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-white">{title}</h3>
                        <span className={`px-2 py-1 text-xs rounded ${messageType.color}`}>
                          {messageType.type}
                        </span>
                      </div>
                      
                      <div className="mb-3 text-sm text-gray-400 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{formatDate(item.timestamp)}</span>
                        {item.author && (
                          <>
                            <span className="mx-1">•</span>
                            <Shield className="w-3 h-3 mr-1" />
                            <span>{item.author}</span>
                          </>
                        )}
                      </div>
                      
                      <div className="text-gray-300 whitespace-pre-line">
                        {formatContentWithLinks(content)}
                      </div>
                      
                      {/* Display URLs if present */}
                      {item.urls && item.urls.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-gray-700">
                          <h4 className="text-sm font-medium text-gray-400 mb-2">Related Links:</h4>
                          <ul className="space-y-1">
                            {item.urls.map((url, idx) => (
                              <li key={idx} className="text-sm">
                                <a 
                                  href={url} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-purple-400 hover:underline flex items-start"
                                >
                                  <ExternalLink className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                                  <span className="break-all">{url}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 