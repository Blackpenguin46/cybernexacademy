import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

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

// Debug function to log objects safely
function logObject(label: string, obj: any) {
  console.log(`${label}: ${JSON.stringify(obj, null, 2)}`);
}

export async function GET() {
  console.log('[API Route] Endpoint called at:', new Date().toISOString());
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    console.error('[API Route] Missing Supabase environment variables');
    return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback',
        error: 'Missing Supabase environment variables'
      });
  }
  
  let message = 'Operation started';
  try {
    console.log('[API Route] Initializing Supabase client...');
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('[API Route] Supabase client initialized.');
    
    console.log('[API Route] Querying newsfeed table...');
    const { data: articles, error } = await supabase
      .from('newsfeed')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(50); 
    
    console.log('[API Route] Supabase query completed.');
    
    let finalArticles = fallbackArticles;
    let source = 'fallback';
    message = 'Using fallback data due to query error or no data';

    if (error) {
      console.error('[API Route] Error querying newsfeed table:', error);
      // Check if it's an RLS error specifically
      if (error.message.includes('permission denied') || error.code === '42501') {
          message = 'Supabase Row Level Security (RLS) likely preventing read access.';
      } else {
          message = `Supabase query error: ${error.message}`;
      }
    } else if (articles && articles.length > 0) {
      console.log(`[API Route] Query successful, retrieved ${articles.length} items`);
      try {
        const processedArticles = articles.map(article => {
          // ... (Keep URL processing logic) ...
          if (article.urls && typeof article.urls === 'string') {
            try { article.urls = JSON.parse(article.urls); } catch (e) { article.urls = []; }
          }
          if (!article.urls || article.urls.length === 0) {
            const urlRegex = /(https?:\/\/[^\s]+)/g;
            article.urls = article.content ? article.content.match(urlRegex) || [] : [];
          }
          if (!Array.isArray(article.urls)) { article.urls = []; }
          return article;
        });
        finalArticles = processedArticles;
        source = 'database';
        message = 'Retrieved from database';
      } catch (processingError) {
         console.error('[API Route] Error processing articles:', processingError);
         message = `Error processing articles: ${processingError instanceof Error ? processingError.message : 'Unknown processing error'}`;
      }
    } else {
      console.log('[API Route] No items found in newsfeed table, using fallback data');
      message = 'No items found in database';
    }
    
    console.log(`[API Route] Returning ${finalArticles.length} articles with source: ${source}`);
    return NextResponse.json({
      articles: finalArticles,
      source: source,
      count: finalArticles.length,
      message: message,
      timestamp: new Date().toISOString()
    });

  } catch (catchError) {
    console.error('[API Route] Unexpected error in API handler:', catchError);
    let errorMsg = 'Unknown error';
    if (catchError instanceof TypeError && catchError.message.includes('fetch failed')) {
        errorMsg = 'Network error connecting to database. Check Vercel env vars & Supabase connectivity.';
    } else if (catchError instanceof Error) {
        errorMsg = catchError.message;
    }
    
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'fallback',
      error: `API Handler Error: ${errorMsg}`,
      message: errorMsg,
      errorTime: new Date().toISOString()
    });
  }
} 