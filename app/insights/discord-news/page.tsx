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
  const [debugData, setDebugData] = useState<any>({});
  const [showDebugPanel, setShowDebugPanel] = useState(true);
  
  // Refs to track state reliably across renders
  const newsRef = useRef<DiscordMessage[]>([]);
  const loadingRef = useRef(true);
  
  // Function to toggle debug panel visibility
  const toggleDebugPanel = () => {
    setShowDebugPanel(prev => !prev);
  };
  
  // Fetch news data
  const fetchNews = useCallback(async () => {
    let currentLoading = true;
    let currentError = '';
    let currentNews: DiscordMessage[] = [];
    let currentSource = '';
    let currentStatusMsg = '';
    
    setLoading(true); // Set loading immediately
    loadingRef.current = true;
    setError(''); // Clear previous errors
    
    console.log('[FETCH] Starting fetch...');
    
    const loadingTimeout = setTimeout(() => {
      if (loadingRef.current) {
        console.warn('[FETCH] Loading timeout reached! Forcing loading state off.');
        currentLoading = false;
        loadingRef.current = false;
        if (newsRef.current.length === 0) {
          currentError = 'Loading timed out. Please try refreshing.';
        }
        // Update state outside the try/catch/finally block
        setLoading(currentLoading);
        setError(currentError);
      }
    }, 10000); // 10 seconds timeout
    
    try {
      const response = await fetch('/api/discord-news', {
        cache: 'no-store',
        next: { revalidate: 0 }
      });
      
      clearTimeout(loadingTimeout); // Clear timeout if fetch completes
      
      const data = await response.json();
      console.log('[FETCH] API Response Data:', data);
      
      setDebugData({ // Update debug info
        responseStatus: response.status,
        responseData: data,
        time: new Date().toISOString()
      });

      if (!response.ok) {
        throw new Error(data.message || `API Error: ${response.status} ${response.statusText}`);
      }
      
      if (!data.articles || !Array.isArray(data.articles)) {
        throw new Error('Invalid API response: missing articles array');
      }
      
      console.log(`[FETCH] Success: Received ${data.articles.length} articles from source: ${data.source}`);
      currentNews = data.articles;
      newsRef.current = data.articles;
      currentSource = data.source || 'unknown';
      currentStatusMsg = data.message || '';
      currentError = ''; // Clear error on success
      
    } catch (err) {
      console.error('[FETCH] Error loading news:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      currentError = `Failed to load news. ${errorMessage}`;
      setDebugData((prev: any) => ({ ...prev, error: errorMessage, time: new Date().toISOString() }));
      currentNews = []; // Clear news on error
      newsRef.current = [];
      currentSource = 'error';
    } finally {
      console.log('[FETCH] Finally block: Setting final state');
      currentLoading = false;
      loadingRef.current = false;
      
      // Update all states together at the end
      setLoading(currentLoading);
      setError(currentError);
      setNews(currentNews);
      setSource(currentSource);
      setStatusMsg(currentStatusMsg);
      
      console.log('[FETCH] Final State Set:', { loading: currentLoading, error: currentError, newsCount: currentNews.length });
    }
  }, []); // No dependencies needed if not using external props/state

  // Initial fetch and interval setup
  useEffect(() => {
    console.log('[EFFECT] Initial fetch executing...');
    fetchNews();
    
    const intervalId = setInterval(() => {
      console.log('[EFFECT] Interval fetch executing...');
      fetchNews();
    }, 2 * 60 * 1000); // 2 minutes
    
    // Cleanup interval on unmount
    return () => {
      console.log('[EFFECT] Cleaning up interval');
      clearInterval(intervalId);
    };
  }, [fetchNews]); // Rerun if fetchNews function identity changes (it shouldn't with useCallback)

  // Log state just before rendering
  console.log(`[RENDER] Rendering component - Loading: ${loading}, Error: ${error || 'none'}, News Count: ${news.length}`);
  
  // Determine status message to display (only if not loading and no error)
  let statusDisplay = null;
  if (!loading && !error) {
    if (source === 'fallback') {
      statusDisplay = (
        <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4 mb-6">
          <div className="flex items-center text-yellow-400 mb-2">
            <AlertTriangle className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">Using Fallback Data</h3>
          </div>
          <p className="text-yellow-300">
            Could not fetch live data. {statusMsg}. Displaying sample news.
          </p>
        </div>
      );
    } else if (news.length === 0 && source !== 'error') { // Don't show if there was an error
      statusDisplay = (
        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 mb-8">
          <div className="flex items-center text-blue-400 mb-2">
            <AlertTriangle className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">No Recent News Found</h3>
          </div>
          <p className="text-blue-300">
            No recent news articles found in the database.
          </p>
          {showDebugPanel && <pre className="mt-2 text-xs text-blue-400/50 overflow-auto max-h-20">Debug Info: {JSON.stringify(debugData, null, 2)}</pre>}
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header and Controls */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/insights" className="text-purple-400 hover:underline flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
          <div className="flex gap-2">
            <Button 
              variant="outline" size="sm"
              onClick={toggleDebugPanel} 
              className="bg-gray-800 border-gray-700 hover:bg-gray-700"
              id="toggleDebugBtn" name="toggleDebugBtn"
            >
              {showDebugPanel ? 'Hide Debug' : 'Show Debug'}
            </Button>
            <Button 
              variant="outline" size="sm"
              onClick={fetchNews} 
              disabled={loading}
              className="bg-gray-800 border-gray-700 hover:bg-gray-700 disabled:opacity-50"
              id="refreshFeedBtn" name="refreshFeedBtn"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Refreshing...' : 'Refresh Feed'}
            </Button>
          </div>
        </div>
        
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-4">Cybersecurity News Feed</h1>
        <p className="text-lg text-gray-300 mb-8">
          Real-time cybersecurity news and alerts, typically sourced from our Discord channel.
        </p>
        
        {/* Debug Panel (Conditional) */}
        {showDebugPanel && (
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-6 font-mono text-xs text-gray-500">
            <h3 className="font-semibold text-gray-400 mb-2">Debug Info</h3>
            <p>Loading: {loading ? 'true' : 'false'}</p>
            <p>Error: {error || 'none'}</p>
            <p>News Count: {news.length}</p>
            <p>Source: {source || 'N/A'}</p>
            <p>Status Message: {statusMsg || 'N/A'}</p>
            <p>Last API Response: <pre className="overflow-auto max-h-20 mt-1">{JSON.stringify(debugData, null, 2)}</pre></p>
          </div>
        )}
        
        {/* Display Area */} 
        <div>
          {/* Loading Indicator */}
          {loading && (
            <div className="flex justify-center py-12">
              <div className="animate-pulse flex flex-col items-center">
                <RefreshCw className="h-8 w-8 text-purple-600/50 mb-4 animate-spin" />
                <p className="text-purple-400/80">Loading latest news...</p>
              </div>
            </div>
          )}
          
          {/* Error Message */}
          {!loading && error && (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 mb-8">
              <div className="flex items-center text-red-400 mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Error Loading Feed</h3>
              </div>
              <p className="text-red-300 mb-3">{error}</p>
              <Button 
                variant="outline" size="sm"
                onClick={fetchNews} 
                className="bg-red-900/30 border-red-800/50 hover:bg-red-800/50"
                id="tryAgainBtn" name="tryAgainBtn"
              >
                <RefreshCw className="w-4 h-4 mr-2" /> Try Again
              </Button>
              {showDebugPanel && <pre className="mt-4 p-3 bg-red-900/30 rounded border border-red-800/50 text-xs text-red-300 font-mono overflow-auto max-h-20">Debug Info: {JSON.stringify(debugData, null, 2)}</pre>}
            </div>
          )}
          
          {/* Status Message (Fallback or No News) */}
          {!loading && !error && statusDisplay}
          
          {/* News Content */}
          {!loading && !error && news.length > 0 && (
            <div className="space-y-6">
              {news.map((item) => {
                const { title, content } = formatNewsContent(item.content, item.urls);
                const messageType = getMessageType(content);
                
                return (
                  <div key={item.id} className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
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
          )}
        </div> 
      </div>
    </div>
  );
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