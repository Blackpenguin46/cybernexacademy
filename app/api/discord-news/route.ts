import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Define fallback messages in case the API fails
const fallbackArticles = [
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

// Debug function to log objects safely
function logObject(label: string, obj: any) {
  console.log(`${label}: ${JSON.stringify(obj, null, 2)}`);
}

export async function GET() {
  console.log('Discord news API endpoint called at:', new Date().toISOString());
  
  // Initialize Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  // Return fallback data if environment variables are missing
  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables');
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'fallback',
      error: 'Missing Supabase environment variables'
    });
  }
  
  try {
    // Create Supabase client
    console.log('Initializing Supabase client with URL:', supabaseUrl);
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Directly query the newsfeed table
    console.log('Querying newsfeed table...');
    const { data: articles, error } = await supabase
      .from('newsfeed')
      .select('*')
      .order('timestamp', { ascending: false });
    
    // Log query results for debugging
    if (error) {
      console.error('Error querying newsfeed table:', error);
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback',
        databaseStatus: 'error',
        message: `Supabase query error: ${error.message}`,
        error: error.message,
        errorTime: new Date().toISOString()
      });
    }
    
    console.log(`Query successful, retrieved ${articles?.length || 0} items`);
    if (articles && articles.length > 0) {
      console.log('Sample article:', articles[0]);
      console.log('Sample article timestamp:', articles[0].timestamp);
      console.log('Sample article author:', articles[0].author);
      console.log('Sample article content length:', articles[0].content?.length || 0);
      console.log('Sample article has urls?', Array.isArray(articles[0].urls));
      console.log('Article array is empty?', articles.length === 0);
      
      try {
        // Make sure any urls are parsed from JSON if stored as string
        const processedArticles = articles.map(article => {
          // Check if urls exists and needs parsing
          if (article.urls && typeof article.urls === 'string') {
            try {
              article.urls = JSON.parse(article.urls);
            } catch (e) {
              console.log('Error parsing urls JSON:', e);
              article.urls = [];
            }
          }
          
          // Ensure urls is always an array
          if (!article.urls) {
            article.urls = [];
          }
          
          return article;
        });
        
        // Return processed articles
        console.log('Returning processed articles with urls');
        return NextResponse.json({
          articles: processedArticles,
          source: 'database',
          count: processedArticles.length,
          timestamp: new Date().toISOString()
        });
      } catch (err) {
        console.error('Error processing articles:', err);
        return NextResponse.json({
          articles: articles,
          source: 'database',
          count: articles.length,
          timestamp: new Date().toISOString(),
          processingError: err instanceof Error ? err.message : 'Unknown error'
        });
      }
    } else {
      console.log('No items found in newsfeed table, returning fallback data');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback',
        message: 'No items found in database'
      });
    }
  } catch (error) {
    console.error('Unexpected error in Discord news API:', error);
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'fallback',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      errorTime: new Date().toISOString()
    });
  }
} 