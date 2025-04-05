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
    
    console.log('[API Route] Querying ONLY id from newsfeed table...');
    const { data: articles, error } = await supabase
      .from('newsfeed')
      .select('id')
      .order('timestamp', { ascending: false })
      .limit(50); 
    
    console.log('[API Route] Supabase query completed.');
    
    let finalArticles = fallbackArticles;
    let source = 'fallback';
    message = 'Using fallback data due to query error or no data';

    if (error) {
      console.error('[API Route] Error querying newsfeed table (even with simplified query):', error?.message || error);
      if (error.message.includes('permission denied') || error.code === '42501') {
          message = 'Supabase Row Level Security (RLS) likely preventing read access.';
      } else {
          message = `Supabase query error: ${error.message}`;
      }
    } else if (articles && articles.length > 0) {
      console.log(`[API Route] Query successful (simplified), retrieved ${articles.length} items`);
      source = 'database_simplified_query_ok'; 
      message = `Simplified query OK (${articles.length} IDs found). Returning fallback for now.`;
      finalArticles = fallbackArticles; 
    } else {
      console.log('[API Route] No items found in newsfeed table (simplified query)');
      message = 'No items found in database (simplified query)';
    }
    
    console.log(`[API Route] Returning ${finalArticles.length} articles with source: ${source}`);
    return NextResponse.json({
      articles: finalArticles,
      source: source,
      count: articles ? articles.length : 0,
      message: message,
      timestamp: new Date().toISOString()
    });

  } catch (catchError) {
    console.error('[API Route] Unexpected error in API handler:', catchError);
    let errorMsg = 'Unknown error';
    if (catchError instanceof TypeError && catchError.message.includes('fetch failed')) {
        errorMsg = 'Network error connecting/querying database. Check Vercel env vars & Supabase connectivity/permissions.';
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