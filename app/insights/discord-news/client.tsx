'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { DiscordMessage } from './page';

interface NewsClientProps {
  fallbackNews: DiscordMessage[];
}

export function NewsClient({ fallbackNews }: NewsClientProps) {
  const [news, setNews] = useState<DiscordMessage[]>(fallbackNews);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('initializing');
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState(new Date().toISOString());

  useEffect(() => {
    // Client-side Supabase fetch
    async function fetchNewsFromSupabase() {
      try {
        setLoading(true);
        
        // Create Supabase client in the browser
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        
        // Validate credentials
        if (!supabaseUrl || !supabaseKey) {
          console.error('Missing Supabase credentials in client');
          setError('Missing Supabase credentials');
          setSource('fallback_missing_credentials_client');
          return;
        }
        
        // Log for debugging
        console.log('Client-side: Creating Supabase client with:', { 
          url: supabaseUrl.substring(0, 15) + '...' 
        });
        
        // Create client
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        // Fetch data
        console.log('Client-side: Fetching from newsfeed table');
        const { data, error: fetchError } = await supabase
          .from('newsfeed')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(20);
          
        if (fetchError) {
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
        console.error('Client-side fetch error:', fetchError);
        setError(fetchError.message);
        setSource('fallback_client_error');
      } finally {
        setLoading(false);
        setLastUpdated(new Date().toISOString());
      }
    }

    fetchNewsFromSupabase();
  }, [fallbackNews]);
  
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