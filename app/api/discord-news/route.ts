import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://vxxpwaloyrtwvpmatzpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eHB3YWxveXJ0d3ZwbWF0enBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjA0NjQsImV4cCI6MjA1NTczNjQ2NH0.ef0feqGxtWeB9C2SLtPwEk_lcW8pcVngo7fz1SsznDM';
const supabase = createClient(supabaseUrl, supabaseKey);

// Example message format for fallback when Supabase API fails
const FALLBACK_MESSAGES = [
  {
    id: '1',
    content: '[SECURITY ALERT] Microsoft has released patches for 147 vulnerabilities in their April 2024 Patch Tuesday update, including 5 actively exploited zero-days. https://thehackernews.com/2024/04/microsoft-april-2024-patch-tuesday.html',
    author: 'SecurityBot',
    timestamp: '2024-04-09T16:30:00.000Z',
    attachments: []
  },
  {
    id: '2',
    content: '[THREAT INTEL] New LockBit ransomware variant detected with enhanced evasion capabilities. Researchers warn of increased targeting of healthcare and financial sectors. https://thehackernews.com/2024/04/new-lockbit-30-ransomware-variant.html',
    author: 'SecurityBot',
    timestamp: '2024-04-10T14:15:00.000Z',
    attachments: []
  },
  {
    id: '3',
    content: '[VULNERABILITY] Critical Adobe Acrobat zero-day vulnerability (CVE-2024-21412) being actively exploited. Update immediately! https://thehackernews.com/2024/04/critical-adobe-acrobat-zero-day-under.html',
    author: 'SecurityBot',
    timestamp: '2024-04-11T09:45:00.000Z',
    attachments: []
  }
];

export async function GET() {
  console.log('Fetching news from Supabase newsfeed table');
  
  // Fallback news data in case of API failure
  const fallbackData = {
    articles: FALLBACK_MESSAGES,
    source: 'fallback',
    message: 'Could not connect to Supabase or no news found.'
  };
  
  try {
    // Fetch news articles from Supabase
    console.log('Querying Supabase newsfeed table...');
    
    // Log the Supabase connection details (partial, for security)
    console.log('Supabase URL:', supabaseUrl);
    console.log('Supabase key (first 10 chars):', supabaseKey.substring(0, 10) + '...');
    
    const { data: newsData, error } = await supabase
      .from('newsfeed')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(100);
    
    if (error) {
      console.error('Error fetching from Supabase:', error.message);
      throw new Error(error.message);
    }
    
    console.log(`Retrieved ${newsData?.length || 0} news items from Supabase`);
    
    // Log a sample of the data for debugging
    if (newsData && newsData.length > 0) {
      console.log('First news item sample:', {
        id: newsData[0].id,
        author: newsData[0].author,
        timestamp: newsData[0].timestamp,
        contentPreview: newsData[0].content?.substring(0, 50) + '...' || 'No content'
      });
    }
    
    if (!newsData || newsData.length === 0) {
      console.log('No news found in Supabase, using fallback data');
      return NextResponse.json({
        ...fallbackData,
        message: 'No news found in the database.'
      });
    }

    // Map to the format expected by the frontend
    const articles = newsData.map((item) => ({
      id: item.id?.toString() || Math.random().toString(),
      content: item.content || 'No content available',
      author: item.author || 'Unknown',
      timestamp: item.timestamp || new Date().toISOString(),
      attachments: []
    }));
    
    console.log(`Mapped ${articles.length} items for frontend`);
    
    // Return a successful response with the articles
    return NextResponse.json({ 
      articles,
      source: 'supabase',
      count: articles.length,
      message: 'Successfully retrieved news from database.'
    });
    
  } catch (error) {
    console.error('Error fetching news from Supabase:', error);
    return NextResponse.json({
      ...fallbackData,
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
} 