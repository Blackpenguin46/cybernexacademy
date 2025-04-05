import { NextResponse } from 'next/server';

// Define interface for RSS2JSON response
interface RSS2JSONResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    description: string;
  };
  items: RSS2JSONItem[];
}

// Define interface for RSS item
interface RSS2JSONItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  description?: string;
  [key: string]: any; // For any additional properties
}

// The RSS feed URL
const FEED_URL = 'https://feeds.feedburner.com/TheHackersNews';
// RSS2JSON API
const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json';

export async function GET() {
  console.log('API Route: Starting to fetch RSS feed using RSS2JSON service');
  try {
    // Use the RSS2JSON service to convert the feed to JSON
    const response = await fetch(`${RSS2JSON_API}?rss_url=${encodeURIComponent(FEED_URL)}&api_key=hfizqfvvfbl8plwkvrhppjnz07juuiscscdecjkl`);
    
    console.log('API Route: RSS2JSON response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`RSS2JSON API returned status: ${response.status}`);
    }
    
    const data = await response.json() as RSS2JSONResponse;
    console.log('API Route: RSS2JSON returned data structure:', Object.keys(data));
    
    if (!data.items || !Array.isArray(data.items)) {
      console.error('API Route: Invalid data structure from RSS2JSON:', data);
      throw new Error('Invalid data structure from RSS2JSON');
    }
    
    // Extract only the necessary data
    const newsItems = data.items.slice(0, 5).map((item: RSS2JSONItem) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      // Add thumbnail and description if available
      thumbnail: item.thumbnail || '',
      description: item.description || ''
    }));
    
    console.log('API Route: Processed news items:', newsItems);
    
    // Return the news items as JSON
    return NextResponse.json(newsItems);
  } catch (error) {
    console.error('API Route: Error fetching or parsing RSS feed:', error);
    // Return an error response
    return NextResponse.json(
      { error: 'Failed to fetch news feed', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// Optional: Revalidate the data periodically (e.g., every hour)
// export const revalidate = 3600; // Revalidate every hour 