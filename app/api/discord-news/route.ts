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
    // 1. Check Environment Variables - Log them for debugging
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    // Log environment variables (safely)
    logWithEnv('Environment variables check:');
    logWithEnv('SUPABASE_URL:', supabaseUrl ? 'Set - ' + supabaseUrl.substring(0, 15) + '...' : 'NOT SET');
    logWithEnv('SUPABASE_SERVICE_KEY:', supabaseServiceKey ? 'Set - First 5 chars: ' + supabaseServiceKey.substring(0, 5) + '...' : 'NOT SET');
    logWithEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set - First 5 chars: ' + supabaseAnonKey.substring(0, 5) + '...' : 'NOT SET');
    
    // 2. Validate URLs by trying to access them
    if (!supabaseUrl) {
      logWithEnv('Missing Supabase URL - cannot proceed with database connection');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback',
        message: 'Missing Supabase URL environment variable',
        time: new Date().toISOString(),
        debug: {
          env: isVercelEnv ? 'vercel' : 'local',
          variables: {
            supabaseUrl: !!supabaseUrl,
            supabaseServiceKey: !!supabaseServiceKey,
            supabaseAnonKey: !!supabaseAnonKey
          }
        }
      });
    }
    
    // Use the service key if available, otherwise use anon key
    const apiKey = supabaseServiceKey || supabaseAnonKey;
    
    if (!apiKey) {
      logWithEnv('Missing Supabase API keys - cannot proceed with database connection');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback',
        message: 'Missing Supabase API keys',
        time: new Date().toISOString(),
        debug: {
          env: isVercelEnv ? 'vercel' : 'local',
          variables: {
            supabaseUrl: !!supabaseUrl,
            supabaseServiceKey: !!supabaseServiceKey,
            supabaseAnonKey: !!supabaseAnonKey
          }
        }
      });
    }
    
    // 3. Test basic network connectivity
    logWithEnv('Testing basic network connectivity with httpbin...');
    try {
      const networkTestResponse = await fetch('https://httpbin.org/get');
      logWithEnv('Network test response:', networkTestResponse.status);
      
      if (!networkTestResponse.ok) {
        logWithEnv('Network test failed with status:', networkTestResponse.status);
        throw new Error(`Network test failed with status: ${networkTestResponse.status}`);
      }
    } catch (networkErr) {
      logWithEnv('Network connectivity test failed:', networkErr);
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback_error',
        message: `Network connectivity test failed: ${networkErr instanceof Error ? networkErr.message : String(networkErr)}`,
        time: new Date().toISOString(),
        debug: {
          env: isVercelEnv ? 'vercel' : 'local',
          error: networkErr instanceof Error ? networkErr.message : String(networkErr),
          variables: {
            supabaseUrl: !!supabaseUrl,
            supabaseServiceKey: !!supabaseServiceKey,
            supabaseAnonKey: !!supabaseAnonKey
          }
        }
      });
    }
    
    // 4. Test Supabase URL accessibility
    logWithEnv('Testing Supabase URL accessibility...');
    try {
      const supabaseTestResponse = await fetch(supabaseUrl);
      logWithEnv('Supabase URL test response:', supabaseTestResponse.status);
      
      if (!supabaseTestResponse.ok && supabaseTestResponse.status !== 404) {
        // 404 is actually expected for the base URL - it's not a REST endpoint
        logWithEnv('Supabase URL test failed with status:', supabaseTestResponse.status);
        throw new Error(`Supabase URL test failed with status: ${supabaseTestResponse.status}`);
      }
    } catch (supabaseUrlErr) {
      logWithEnv('Supabase URL accessibility test failed:', supabaseUrlErr);
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback_error',
        message: `Supabase URL accessibility test failed: ${supabaseUrlErr instanceof Error ? supabaseUrlErr.message : String(supabaseUrlErr)}`,
        time: new Date().toISOString(),
        debug: {
          env: isVercelEnv ? 'vercel' : 'local',
          error: supabaseUrlErr instanceof Error ? supabaseUrlErr.message : String(supabaseUrlErr),
          variables: {
            supabaseUrl: !!supabaseUrl,
            supabaseServiceKey: !!supabaseServiceKey,
            supabaseAnonKey: !!supabaseAnonKey
          }
        }
      });
    }
    
    // 5. Try both approaches: Supabase client and direct REST API
    logWithEnv('Attempting to query data using Supabase client...');
    
    // 5.1 First try with Supabase client
    try {
      const supabase = createClient(supabaseUrl, apiKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        }
      });
      
      const { data: articles, error: clientError } = await supabase
        .from('newsfeed')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(50);
      
      if (clientError) {
        logWithEnv('Supabase client query error:', clientError);
        // Don't return yet - try the direct REST approach
      } else if (articles && articles.length > 0) {
        logWithEnv(`Supabase client query success: ${articles.length} items`);
        return NextResponse.json({
          articles: articles,
          source: 'database_client',
          message: 'Retrieved from database using Supabase client',
          time: new Date().toISOString(),
          debug: {
            method: 'supabase_client',
            count: articles.length,
            env: isVercelEnv ? 'vercel' : 'local'
          }
        });
      }
    } catch (clientErr) {
      logWithEnv('Supabase client error:', clientErr);
      // Don't return yet - try the direct REST approach
    }
    
    // 5.2 Try direct REST API call as fallback
    logWithEnv('Attempting to query data using direct REST API...');
    try {
      const restApiUrl = `${supabaseUrl}/rest/v1/newsfeed?select=*&order=timestamp.desc&limit=50`;
      
      const response = await fetch(restApiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': apiKey,
          'Authorization': `Bearer ${apiKey}`,
          'Prefer': 'return=representation'
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        logWithEnv(`Supabase REST API error: ${response.status} - ${errorText}`);
        throw new Error(`Supabase REST API error: ${response.status} - ${errorText}`);
      }
      
      const articles = await response.json();
      
      if (!articles || articles.length === 0) {
        logWithEnv('No articles found in Supabase');
        return NextResponse.json({
          articles: fallbackArticles,
          source: 'fallback_empty',
          message: 'No articles found in database',
          time: new Date().toISOString(),
          debug: {
            method: 'rest_api',
            env: isVercelEnv ? 'vercel' : 'local'
          }
        });
      }
      
      logWithEnv(`REST API query success: ${articles.length} items`);
      return NextResponse.json({
        articles: articles,
        source: 'database_rest',
        message: 'Retrieved from database using REST API',
        time: new Date().toISOString(),
        debug: {
          method: 'rest_api',
          count: articles.length,
          env: isVercelEnv ? 'vercel' : 'local'
        }
      });
    } catch (restErr) {
      logWithEnv('REST API error:', restErr);
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fallback_error',
        message: `Both Supabase client and REST API failed. Last error: ${restErr instanceof Error ? restErr.message : String(restErr)}`,
        time: new Date().toISOString(),
        debug: {
          env: isVercelEnv ? 'vercel' : 'local',
          error: restErr instanceof Error ? restErr.message : String(restErr),
          variables: {
            supabaseUrl: !!supabaseUrl,
            supabaseServiceKey: !!supabaseServiceKey,
            supabaseAnonKey: !!supabaseAnonKey
          }
        }
      });
    }
  } catch (error) {
    // Catch-all for any unexpected errors
    logWithEnv('Unexpected error:', error);
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'fallback_error',
      message: `Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      time: new Date().toISOString(),
      debug: {
        env: isVercelEnv ? 'vercel' : 'local',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    });
  }
} 