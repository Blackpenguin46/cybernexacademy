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
  console.log('[API Route - Connection Test] Endpoint called at:', new Date().toISOString());

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log('[API Route - Connection Test] Read Supabase URL:', supabaseUrl ? supabaseUrl.substring(0, 20) + '...' : 'MISSING or Undefined');
  console.log('[API Route - Connection Test] Read Supabase Key:', supabaseKey ? '******' + supabaseKey.slice(-6) : 'MISSING or Undefined');

  if (!supabaseUrl || !supabaseKey) {
    console.error('[API Route - Connection Test] Env vars MISSING');
    return NextResponse.json({ message: "Error: Supabase environment variables missing in Vercel.", source: "error" }, { status: 500 });
  }

  try {
    console.log('[API Route - Connection Test] Attempting to create Supabase client...');
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('[API Route - Connection Test] Supabase client *created* successfully (no immediate error).');

    // Test a simple, non-data-intensive call if needed (optional)
    // console.log('[API Route - Connection Test] Attempting a test list function call...');
    // const { data, error } = await supabase.functions.list();
    // if(error) throw error; // Rethrow if the test call failed
    // console.log('[API Route - Connection Test] Test list function call successful.');

    // If client creation (and optional test) succeeded, return success
    // We still return fallback articles for now, just confirming connection
    return NextResponse.json({
      message: "Success: Supabase client created (connection likely OK). Returning fallback for test.",
      source: "connection_test_ok",
      articles: fallbackArticles
    });

  } catch (error) {
    console.error('[API Route - Connection Test] FAILED to create Supabase client or test call:', error);
    let errorMsg = 'Unknown connection error';
    if (error instanceof TypeError && error.message.includes('fetch failed')) {
        errorMsg = 'Network-level fetch failed connecting to Supabase.';
    } else if (error instanceof Error) {
        errorMsg = error.message;
    }
    return NextResponse.json({ 
        message: `Error: ${errorMsg}`, 
        source: "error", 
        details: error instanceof Error ? error.toString() : JSON.stringify(error),
        articles: fallbackArticles 
    }, { status: 500 });
  }
} 