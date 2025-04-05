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
  
  // Use non-public, server-side environment variables
  const supabaseUrl = process.env.SUPABASE_URL; 
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; // Use Service Role Key
  
  console.log('[API Route] Read SUPABASE_URL:', supabaseUrl ? supabaseUrl.substring(0, 20) + '...' : 'MISSING or Undefined');
  console.log('[API Route] Read SUPABASE_SERVICE_KEY:', supabaseServiceKey ? '******' + supabaseServiceKey.slice(-6) : 'MISSING or Undefined');

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('[API Route] Missing SUPABASE_URL or SUPABASE_SERVICE_KEY env vars');
    return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback',
        error: 'Missing Supabase server environment variables in Vercel.'
      });
  }
  
  let message = 'Operation started';
  try {
    // Basic fetch test (optional - can be kept or removed)
    console.log('[API Route] Performing basic fetch test to Supabase base URL...');
    const testResponse = await fetch(supabaseUrl, { method: 'HEAD' }); 
    console.log(`[API Route] Basic fetch test status: ${testResponse.status}`);
    if (!testResponse.ok) {
        console.error(`[API Route] Basic fetch test failed: ${testResponse.status} ${testResponse.statusText}`);
        throw new Error(`Basic network test to Supabase URL failed: ${testResponse.status}`);
    }
    console.log('[API Route] Basic fetch test successful.');
    
    console.log('[API Route] Initializing Supabase client with Service Key...');
    // Initialize with Service Role Key
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
        auth: { persistSession: false } // Recommended for server-side usage
    });
    console.log('[API Route] Supabase client initialized.');
    
    console.log('[API Route] Querying newsfeed table (select *)...');
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
      console.error('[API Route] Error querying newsfeed table:', error?.message || error);
      // No need to check for RLS error message specifically when using service key
      message = `Supabase query error: ${error.message}`;
    } else if (articles && articles.length > 0) {
      console.log(`[API Route] Query successful, retrieved ${articles.length} items`);
      try {
        const processedArticles = articles.map(article => {
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
      console.log('[API Route] No items found in newsfeed table');
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
    if (catchError instanceof Error && catchError.message.startsWith('Basic network test')) {
        errorMsg = catchError.message; // Use the specific message from our test
    } else if (catchError instanceof TypeError && catchError.message.includes('fetch failed')) {
        errorMsg = 'Network error connecting/querying database (PostgREST/Client issue?). Check Vercel env vars & Supabase connectivity/permissions.';
    } else if (catchError instanceof Error) {
        errorMsg = catchError.message;
    }
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'fallback_catch_error',
      error: `API Handler Error: ${errorMsg}`,
      message: errorMsg,
      errorTime: new Date().toISOString()
    });
  }
} 