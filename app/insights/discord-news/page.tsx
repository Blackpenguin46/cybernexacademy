"use client"

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Shield, AlertTriangle, ExternalLink, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DiscordMessage {
  id: string;
  content: string;
  author: string;
  timestamp: string;
  attachments: any[];
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
              {part}
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

  // Wrap fetchNews in useCallback to prevent unnecessary recreation
  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      setError(''); // Clear previous errors on fetch
      console.log('Fetching Discord news...');
      const response = await fetch('/api/discord-news', {
        cache: 'no-store',
        next: { revalidate: 0 } // Ensure fresh data
      });
      
      const data = await response.json(); // Try parsing JSON regardless of status
      console.log('Received data from API (raw):', JSON.stringify(data, null, 2));
      
      // More detailed debugging
      console.log('API Response Status:', response.status);
      console.log('Articles array exists:', Boolean(data.articles));
      console.log('Articles count:', data.articles?.length || 0);
      
      if (data.articles && data.articles.length > 0) {
        console.log('First article sample:');
        console.table({
          id: data.articles[0].id,
          content: data.articles[0].content?.substring(0, 50) + '...' || 'No content',
          author: data.articles[0].author,
          timestamp: data.articles[0].timestamp,
        });
      } else {
        console.log('No articles found in the response');
      }

      // Save all information for debugging
      setDebug({
        responseStatus: response.status,
        responseData: data,
        time: new Date().toISOString()
      });

      if (!response.ok) {
         // Use message from API response if available, otherwise generic error
        throw new Error(data.message || `Failed to fetch news: ${response.status} ${response.statusText}`);
      }
      
      if (!data.articles || !Array.isArray(data.articles)) {
        console.error('API response does not contain articles array:', data);
        throw new Error('Invalid API response format: missing articles array');
      }
      
      setNews(data.articles || []);
      setSource(data.source || 'unknown');
      setStatusMsg(data.message || '');
      
      // Show a more specific message if using fallback data
      if (data.source === 'fallback') {
        console.warn('Using fallback data:', data.message || 'No news available');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(`Failed to load news. ${errorMessage}`); // Updated error message
      console.error('Error loading news:', err);
      
      // Save error for debugging
      setDebug((prev: any) => ({ ...prev, error: errorMessage, time: new Date().toISOString() }));
      setNews([]); // Clear news on error
      setSource('error'); // Set source to error
    } finally {
      setLoading(false);
    }
  }, []); // Empty dependency array means fetchNews is created once

  useEffect(() => {
    fetchNews(); // Initial fetch
    
    // Set up periodic refresh - every 2 minutes
    const intervalId = setInterval(fetchNews, 2 * 60 * 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [fetchNews]); // Include fetchNews in dependency array
  
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
  const formatNewsContent = (content: string) => {
    // If content includes a title followed by content (common format from Supabase)
    const parts = content.split('\n\n');
    if (parts.length > 1) {
      return {
        title: parts[0],
        content: parts.slice(1).join('\n\n')
      };
    }
    // Default format if no clear title/content separation
    return {
      title: 'News Update',
      content: content
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
          <Button 
            variant="outline"
            size="sm"
            onClick={fetchNews} 
            disabled={loading}
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Refreshing...' : 'Refresh Feed'}
          </Button>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Cybersecurity News Feed</h1>
        <p className="text-lg text-gray-300 mb-8">
          Real-time cybersecurity news and alerts, typically sourced from our Discord channel.
        </p>
        
        {/* Show fallback status message if applicable */}
        {statusDisplay}
        
        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-pulse flex flex-col items-center">
               <RefreshCw className="h-8 w-8 text-purple-600/50 mb-4 animate-spin" />
               <p className="text-purple-400/80">Loading latest news...</p>
            </div>
          </div>
        )}
        
        {error && !loading && ( // Only show error if not loading
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
        
        {!loading && !error && news.length === 0 && source !== 'fallback' && ( // Show only if not loading, no error, no news, and not already showing fallback message
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
        
        {!loading && !error && news.length > 0 && (
          <div className="space-y-6">
            {news.map((item) => {
              const { title, content } = formatNewsContent(item.content);
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
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
} 