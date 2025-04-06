import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

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
  console.log('[API] Discord news API route called');
  
  try {
    // Initialize Supabase client with service role key
    const supabaseUrl = process.env.SUPABASE_URL || 'https://hpfpuljthcngnswwfkrb.supabase.co';
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
    
    console.log('[API] Using Supabase URL:', supabaseUrl);
    console.log('[API] Supabase Service Key exists:', !!supabaseServiceKey);
    
    if (!supabaseServiceKey) {
      console.error('[API] Missing Supabase service key');
      return NextResponse.json(
        { 
          articles: fallbackArticles, 
          source: 'fallback', 
          message: 'Missing Supabase credentials, using fallback data',
          time: new Date().toISOString()
        }, 
        { status: 200 }
      );
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Query the newsfeed table
    console.log('[API] Querying newsfeed table...');
    const { data: articles, error } = await supabase
      .from('newsfeed')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(50);
    
    if (error) {
      console.error('[API] Supabase query error:', error);
      return NextResponse.json(
        { 
          articles: fallbackArticles, 
          source: 'fallback_error', 
          message: `Supabase query error: ${error.message}`,
          error: error.message,
          time: new Date().toISOString()
        }, 
        { status: 200 }
      );
    }
    
    // Empty results - return fallback
    if (!articles || articles.length === 0) {
      console.log('[API] No items found in database, using fallback');
      return NextResponse.json(
        { 
          articles: fallbackArticles, 
          source: 'fallback_empty', 
          message: 'No items found in database, using fallback data',
          time: new Date().toISOString()
        }, 
        { status: 200 }
      );
    }
    
    // Success - return actual data
    console.log(`[API] Success: Retrieved ${articles.length} items from database`);
    return NextResponse.json(
      { 
        articles, 
        source: 'database', 
        message: 'Retrieved from database',
        time: new Date().toISOString()
      }, 
      { status: 200 }
    );
    
  } catch (error) {
    console.error('[API] Unexpected error:', error);
    // Return fallback data with error info
    return NextResponse.json(
      {
        articles: fallbackArticles,
        source: 'fallback_error',
        message: `Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error: error instanceof Error ? error.message : 'Unknown error',
        time: new Date().toISOString()
      },
      { status: 200 }
    );
  }
} 