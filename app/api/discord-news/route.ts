import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Always use server-side rendering so we can access server environment variables
export const dynamic = 'force-dynamic';

// Define fallback messages in case the API fails
const fallbackArticles = [
  {
    id: '1',
    content: '[SECURITY ALERT] Microsoft has released patches for 147 vulnerabilities in their April 2024 Patch Tuesday update, including 5 actively exploited zero-days. https://thehackernews.com/2024/04/microsoft-april-2024-patch-tuesday.html',
    author: 'SecurityBot',
    timestamp: '2024-04-09T16:30:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/2024/04/microsoft-april-2024-patch-tuesday.html']
  },
  {
    id: '2',
    content: '[THREAT INTEL] New LockBit ransomware variant detected with enhanced evasion capabilities. Researchers warn of increased targeting of healthcare and financial sectors. https://thehackernews.com/2024/04/new-lockbit-30-ransomware-variant.html',
    author: 'SecurityBot',
    timestamp: '2024-04-10T14:15:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/2024/04/new-lockbit-30-ransomware-variant.html']
  },
  {
    id: '3',
    content: '[VULNERABILITY] Critical Adobe Acrobat zero-day vulnerability (CVE-2024-21412) being actively exploited. Update immediately! https://thehackernews.com/2024/04/critical-adobe-acrobat-zero-day-under.html',
    author: 'SecurityBot',
    timestamp: '2024-04-11T09:45:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/2024/04/critical-adobe-acrobat-zero-day-under.html']
  }
];

// Check if we're in a Vercel environment
const isVercelEnv = process.env.VERCEL === '1' || process.env.VERCEL_ENV !== undefined;

// Custom console log that includes environment info
function logWithEnv(message: string, ...args: any[]) {
  console.log(`[API:${isVercelEnv ? 'Vercel' : 'Local'}] ${message}`, ...args);
}

export async function GET() {
  logWithEnv('Discord news API route called');
  
  try {
    // Get Supabase environment variables
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
    
    // Log info about our connection
    logWithEnv('Using Supabase URL:', supabaseUrl ? '[SET]' : '[MISSING]');
    logWithEnv('Using Service Key:', supabaseServiceKey ? '[SET]' : '[MISSING]');
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback',
        message: 'Missing Supabase environment variables',
        time: new Date().toISOString()
      });
    }
    
    // Direct REST API call to bypass client issues
    logWithEnv('Making direct REST API call to Supabase...');
    
    // Construct the URL for the REST API
    const apiUrl = `${supabaseUrl}/rest/v1/newsfeed?select=*&order=timestamp.desc&limit=50`;
    
    // Set headers for authorization
    const headers = {
      'Content-Type': 'application/json',
      'apikey': supabaseServiceKey,
      'Authorization': `Bearer ${supabaseServiceKey}`,
      'Prefer': 'return=representation'
    };
    
    // Fetch the data
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      logWithEnv(`Supabase REST API error: ${response.status} - ${errorText}`);
      
      // Return fallback data
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback_error',
        message: `Supabase REST API error: ${response.status} - ${errorText}`,
        time: new Date().toISOString()
      });
    }
    
    // Parse the JSON response
    const articles = await response.json();
    
    // If no articles, return fallback
    if (!articles || articles.length === 0) {
      logWithEnv('No articles found in Supabase');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback_empty',
        message: 'No articles found in database',
        time: new Date().toISOString()
      });
    }
    
    // Return the articles
    logWithEnv(`Successfully retrieved ${articles.length} articles from Supabase`);
    return NextResponse.json({
      articles: articles,
      source: 'database',
      message: 'Retrieved from database',
      time: new Date().toISOString()
    });
  } catch (error) {
    // Log the error
    console.error('[API] Error fetching news:', error);
    
    // Return fallback data
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'fallback_error',
      message: `Error fetching news: ${error instanceof Error ? error.message : 'Unknown error'}`,
      error: error instanceof Error ? error.message : 'Unknown error',
      time: new Date().toISOString()
    });
  }
} 