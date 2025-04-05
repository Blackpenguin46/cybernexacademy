"use client";

import { useEffect, useState } from 'react';
import { ExternalLink, RefreshCw, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
  category: string;
  imageUrl?: string;
}

interface NewsApiResponse {
  news: NewsItem[];
  lastUpdated: string;
}

export default function LiveNewsFeed() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/news');
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const data: NewsApiResponse = await response.json();
        setNewsData(data.news);
        setLastUpdated(data.lastUpdated);
        setError(null);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Unable to load the latest cybersecurity updates');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Convert ISO date to "X hours/minutes ago" format
  const getTimeAgo = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch (err) {
      return 'recently';
    }
  };

  // Get formatted last updated time
  const getLastUpdatedTime = () => {
    if (!lastUpdated) return 'Never';
    return getTimeAgo(lastUpdated);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Vulnerabilities':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Threats':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Technology':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Compliance':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Events':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Industry':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (error) {
    return (
      <div className="bg-gray-900/50 border border-red-500/20 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-red-400" />
            Error Loading News Feed
          </h2>
        </div>
        <p className="text-gray-300 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md flex items-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 border border-neon-blue/20 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Cybersecurity News (Last 24 Hours)</h2>
        <div className="text-sm text-gray-400 flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>Updated {getLastUpdatedTime()}</span>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-4 bg-gray-700/50 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-700/30 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {newsData.slice(0, 5).map((item, index) => (
              <div 
                key={index} 
                className="border-b border-gray-800 last:border-0 pb-3 last:pb-0"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <Link 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-neon-blue font-medium flex items-start group"
                    >
                      <span>{item.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <div className="flex items-center mt-1 space-x-2 text-xs">
                      <span className="text-gray-400">{item.source}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">{getTimeAgo(item.publishedAt)}</span>
                      <span className={`px-2 py-0.5 rounded border ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link 
              href="/insights/news" 
              className="inline-flex items-center text-neon-blue hover:text-blue-400 text-sm font-medium"
            >
              <span>View all cybersecurity news</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </>
      )}
    </div>
  );
} 