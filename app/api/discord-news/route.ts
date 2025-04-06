import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Explicitly force dynamic rendering for this route
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

// Debug function to log objects safely
function logObject(label: string, obj: any) {
  try {
    console.log(`${label}: ${JSON.stringify(obj, null, 2)}`);
  } catch (e: any) {
    console.log(`${label}: [Could not stringify object: ${e.message}]`, obj);
  }
}

// Simple response format for diagnostics
interface DiagnosticResult {
  success: boolean;
  status?: number;
  message: string;
  timing: number;
  error?: any;
  data?: any;
}

// Test fetch to external endpoint
async function testExternalFetch(url: string): Promise<DiagnosticResult> {
  const start = Date.now();
  try {
    console.log(`[DIAGNOSTIC] Testing fetch to: ${url}`);
    const response = await fetch(url, { method: 'GET' });
    const status = response.status;
    const result: DiagnosticResult = {
      success: response.ok,
      status,
      message: response.ok ? 'Success' : `Error: HTTP ${status}`,
      timing: Date.now() - start
    };
    
    if (response.ok) {
      try {
        result.data = await response.json();
      } catch (e) {
        result.data = await response.text();
      }
    }
    
    return result;
  } catch (error: any) {
    console.error(`[DIAGNOSTIC] Fetch error to ${url}:`, error);
    return {
      success: false,
      message: `Fetch error: ${error.message || 'Unknown error'}`,
      timing: Date.now() - start,
      error
    };
  }
}

// Test direct REST API call to Supabase
async function testSupabaseREST(supabaseUrl: string, apiKey: string): Promise<DiagnosticResult> {
  const start = Date.now();
  try {
    console.log(`[DIAGNOSTIC] Testing direct REST call to Supabase`);
    const endpoint = `${supabaseUrl}/rest/v1/newsfeed?select=*&limit=1`;
    
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`
      }
    });
    
    const status = response.status;
    const data = await response.json();
    
    return {
      success: response.ok,
      status,
      message: response.ok ? 'Success' : `Error: HTTP ${status}`,
      timing: Date.now() - start,
      data
    };
  } catch (error: any) {
    console.error(`[DIAGNOSTIC] Supabase REST error:`, error);
    return {
      success: false,
      message: `Supabase REST error: ${error.message || 'Unknown error'}`,
      timing: Date.now() - start,
      error
    };
  }
}

export async function GET() {
  console.log('[API Route] *** GET function entered *** Timestamp:', new Date().toISOString());
  
  const diagnostics: Record<string, any> = {};

  console.log('[API Route] Endpoint called at:', new Date().toISOString());
  
  // Use non-public, server-side environment variables
  const supabaseUrl = process.env.SUPABASE_URL; 
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; 
  
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

  // Run diagnostics
  console.log('[DIAGNOSTIC] Running connectivity diagnostics tests...');
  
  // Test basic fetch capability to a public API
  diagnostics.httpBinTest = await testExternalFetch('https://httpbin.org/get');
  console.log('[DIAGNOSTIC] HTTP Bin Test Result:', 
    diagnostics.httpBinTest.success ? 'SUCCESS' : 'FAILED', 
    `(${diagnostics.httpBinTest.timing}ms)`
  );
  
  // Test connectivity to Supabase base URL
  const supabaseBaseUrl = supabaseUrl.replace(/\/$/, '');
  diagnostics.supabaseBaseTest = await testExternalFetch(supabaseBaseUrl);
  console.log('[DIAGNOSTIC] Supabase Base URL Test Result:', 
    diagnostics.supabaseBaseTest.success ? 'SUCCESS' : 'FAILED', 
    `(${diagnostics.supabaseBaseTest.timing}ms)`
  );
  
  // Test direct REST API
  diagnostics.supabaseRestTest = await testSupabaseREST(supabaseBaseUrl, supabaseServiceKey);
  console.log('[DIAGNOSTIC] Supabase REST API Test Result:', 
    diagnostics.supabaseRestTest.success ? 'SUCCESS' : 'FAILED', 
    `(${diagnostics.supabaseRestTest.timing}ms)`
  );
  
  let message = 'Operation started';
  try {
    console.log('[API Route] Initializing Supabase client with Service Key...');
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
        auth: { persistSession: false } 
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
      message = `Supabase query error: ${error.message}`;
    } else if (articles && articles.length > 0) {
      console.log(`[API Route] Query successful, retrieved ${articles.length} items`);
      try {
        // Process articles if needed
        finalArticles = articles;
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
      message: message,
      diagnostics: diagnostics
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
      errorTime: new Date().toISOString(),
      diagnostics: diagnostics
    });
  }
} 