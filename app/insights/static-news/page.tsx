"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Newspaper, Clock, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Define the structure for a news item
interface NewsItem {
  title?: string;
  link?: string;
  pubDate?: string;
  thumbnail?: string;
  description?: string;
}

// Static fallback data in case the API fails
const STATIC_FALLBACK_DATA: NewsItem[] = [
  {
    title: "Critical Vulnerability Discovered in Popular Framework",
    link: "https://example.com/article1",
    pubDate: "2023-04-01T12:00:00Z",
    thumbnail: "https://via.placeholder.com/150",
    description: "Security researchers have discovered a critical vulnerability affecting millions of users. Patch immediately."
  },
  {
    title: "New Ransomware Campaign Targets Healthcare Sector",
    link: "https://example.com/article2",
    pubDate: "2023-04-02T10:30:00Z",
    thumbnail: "https://via.placeholder.com/150",
    description: "A sophisticated ransomware campaign is targeting healthcare organizations worldwide with phishing emails."
  },
  {
    title: "Government Releases New Cybersecurity Framework",
    link: "https://example.com/article3",
    pubDate: "2023-04-03T14:15:00Z",
    thumbnail: "https://via.placeholder.com/150",
    description: "A new cybersecurity framework has been released to help organizations improve their security posture."
  },
  {
    title: "Major Tech Company Patches Zero-Day Vulnerability",
    link: "https://example.com/article4",
    pubDate: "2023-04-04T09:45:00Z",
    thumbnail: "https://via.placeholder.com/150",
    description: "A critical zero-day vulnerability being actively exploited in the wild has been patched. Update immediately."
  },
  {
    title: "New Data Privacy Regulations to Take Effect Next Month",
    link: "https://example.com/article5",
    pubDate: "2023-04-05T11:20:00Z",
    thumbnail: "https://via.placeholder.com/150",
    description: "Companies must prepare for stringent new data privacy regulations that will be enforced starting next month."
  }
];

export default function StaticNewsPage() {
  const [newsFeed, setNewsFeed] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      
      try {
        console.log("Static News Page: Attempting to fetch from static news API...");
        // Try to fetch from the API first
        const response = await fetch('/api/static-news');
        
        if (!response.ok) {
          console.log("Static News Page: API fetch failed, using static fallback data");
          // If the API fails, use the static fallback data
          setNewsFeed(STATIC_FALLBACK_DATA);
          setUsingFallback(true);
          setLoading(false);
          return;
        }
        
        const data = await response.json();
        console.log("Static News Page: Data received:", data);
        setNewsFeed(data);
      } catch (err) {
        console.error("Static News Page: Error:", err);
        // Use fallback data on any error
        setNewsFeed(STATIC_FALLBACK_DATA);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
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
            <span>Static News Feed</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Cybersecurity News</h1>
          <p className="text-lg text-gray-300 mb-6">Stay updated with the latest happenings in the cybersecurity world.</p>
          {usingFallback && (
            <div className="bg-yellow-500/20 text-yellow-400 p-4 rounded-lg mb-6">
              Note: Using static fallback data because the API could not be reached.
            </div>
          )}
        </div>

        <div className="bg-gray-900/30 border border-purple-500/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Newspaper className="w-5 h-5 text-purple-400 mr-2" />
            Latest Articles
          </h2>
          <div className="space-y-5">
            {loading && <p className="text-gray-400">Loading news...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && newsFeed.length === 0 && <p className="text-gray-400">No news articles found.</p>}
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
          <div className="mt-6 text-center">
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