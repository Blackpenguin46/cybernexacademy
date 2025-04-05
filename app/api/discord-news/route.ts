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
    // === Test 1: Basic Fetch to Base URL ===
    console.log('[API Route] Test 1: Basic fetch to Supabase base URL...');
    const testResponseBase = await fetch(supabaseUrl, { method: 'HEAD' }); 
    console.log(`[API Route] Test 1 status: ${testResponseBase.status}`);
    if (!testResponseBase.ok) {
        console.error(`[API Route] Test 1 FAILED: ${testResponseBase.status} ${testResponseBase.statusText}`);
        throw new Error(`Basic network test to Supabase URL failed: ${testResponseBase.status}`);
    }
    console.log('[API Route] Test 1 successful (Base URL reachable).');
    
    // === Test 2: Manual Fetch to PostgREST Endpoint ===
    console.log('[API Route] Test 2: Manual fetch to PostgREST endpoint (/rest/v1/newsfeed?select=id&limit=1)...');
    const postgrestUrl = `${supabaseUrl}/rest/v1/newsfeed?select=id&limit=1`;
    const testResponsePostgrest = await fetch(postgrestUrl, {
        method: 'GET',
        headers: {
            'apikey': supabaseServiceKey, // Use service key as apikey for direct PostgREST
            'Authorization': `Bearer ${supabaseServiceKey}`
        }
    });
    console.log(`[API Route] Test 2 status: ${testResponsePostgrest.status}`);
    
    // Read body for more info if available, especially on error
    let bodyText = await testResponsePostgrest.text();
    console.log(`[API Route] Test 2 response body (first 100 chars): ${bodyText.substring(0, 100)}`);

    if (!testResponsePostgrest.ok) {
        console.error(`[API Route] Test 2 FAILED: ${testResponsePostgrest.status} ${testResponsePostgrest.statusText}`);
        throw new Error(`Manual PostgREST fetch test failed: ${testResponsePostgrest.status}. Body: ${bodyText.substring(0, 100)}`);
    }
    console.log('[API Route] Test 2 successful (PostgREST endpoint reachable).');
    
    // Return success message - STILL return fallback for now
    return NextResponse.json({
        message: "Success: Both basic fetch and manual PostgREST fetch worked. Issue might be Supabase client internal.",
        source: "manual_postgrest_ok",
        articles: fallbackArticles 
    });

  } catch (catchError) {
    console.error('[API Route] ERROR during tests or execution:', catchError);
    let errorMsg = 'Unknown error';
    // Prioritize reporting the specific test failure
    if (catchError instanceof Error && catchError.message.startsWith('Basic network test')) {
        errorMsg = catchError.message; 
    } else if (catchError instanceof Error && catchError.message.startsWith('Manual PostgREST fetch test')) {
        errorMsg = catchError.message;
    } else if (catchError instanceof TypeError && catchError.message.includes('fetch failed')) {
        // This might still happen if the fetch call itself fails at OS level
        errorMsg = 'Network error during fetch execution. Check Vercel outbound connectivity / DNS.';
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