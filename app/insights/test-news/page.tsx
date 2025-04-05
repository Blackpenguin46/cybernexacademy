"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Newspaper, Clock, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Define the structure for a news item fetched from the API
interface NewsItem {
  title?: string;
  link?: string;
  pubDate?: string;
  thumbnail?: string;
  description?: string;
}

export default function TestNewsPage() {
  const [newsFeed, setNewsFeed] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      console.log("Attempting to fetch from test API...");
      
      try {
        // Add a timestamp to prevent caching
        const timestamp = new Date().getTime();
        const response = await fetch(`/api/test-api?t=${timestamp}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
          }
        });
        
        console.log("Test page response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Test API data received:", data);
        
        setNewsFeed(data);
      } catch (e: unknown) {
        let errorMessage = "Failed to load test data.";
        if (e instanceof Error) {
          errorMessage = e.message;
        }
        console.error("Failed to fetch from test API:", e);
        setError(errorMessage);
        setNewsFeed([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Function to format date
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'Date unknown';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
    } catch (e) {
      return 'Invalid date';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center text-purple-400 mb-2">
            <Newspaper className="w-5 h-5 mr-2" />
            <span>Test API</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Test News Page</h1>
          <p className="text-lg text-gray-300 mb-6">This page tests the API functionality with mock data.</p>
        </div>

        <div className="bg-gray-900/30 border border-purple-500/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Newspaper className="w-5 h-5 text-purple-400 mr-2" />
            Test Articles
          </h2>
          <div className="space-y-5">
            {loading && <p className="text-gray-400">Loading test data...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && newsFeed.length === 0 && <p className="text-gray-400">No test data found.</p>}
            {!loading && !error && newsFeed.map((item, index) => (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index} 
                className="block bg-gray-900/50 p-4 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  {item.thumbnail && (
                    <div className="min-w-[100px] w-24 h-16 overflow-hidden rounded">
                      <img src={item.thumbnail} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors mb-1">{item.title || 'No title'}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-400 mb-2 line-clamp-2">{
                        item.description.replace(/<[^>]*>/g, '').substring(0, 150)}...
                      </p>
                    )}
                    <div className="text-xs text-gray-400 flex items-center">
                      <Clock className="w-3 h-3 mr-1.5" /> 
                      {formatDate(item.pubDate)}
                      <ExternalLink className="w-3 h-3 ml-auto text-gray-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <Link href="/insights/news">
               <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10">
                  Go to News Feed
               </Button>
            </Link>
            <Link href="/insights">
               <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/10">
                  Back to Insights
               </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 