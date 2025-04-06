import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Always use server-side rendering so we can access server environment variables
export const dynamic = 'force-dynamic';

// Define fallback messages in case the API fails
const fallbackArticles = [
  {
    id: '1',
    title: 'Critical vulnerability found in popular VPN software',
    content: 'Researchers have discovered a critical remote code execution vulnerability in a widely-used VPN application affecting over 10 million users. The vulnerability (CVE-2024-1234) allows attackers to execute malicious code with system privileges. Vendor has released a patch - update immediately!',
    author: 'SecurityResearcher',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/sample/vpn-vulnerability']
  },
  {
    id: '2',
    title: 'Ransomware attacks increase by 40% in healthcare sector',
    content: 'New report from CyberInsight reveals a 40% increase in ransomware attacks targeting healthcare organizations in Q1 2024. Attackers are specifically exploiting outdated remote access infrastructure and phishing campaigns directed at medical staff. Implement MFA and conduct security awareness training immediately.',
    author: 'ThreatIntelTeam',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://www.healthcybersecurity.org/report/q1-2024']
  },
  {
    id: '3',
    title: 'New AI-powered security platform launches',
    content: 'CyberNex Security has announced a new AI-powered threat detection platform that reduces false positives by 75%. The platform uses machine learning algorithms to identify patterns of malicious behavior across network traffic, user activity, and endpoint data. Early access program now open for enterprise security teams.',
    author: 'TechReporter',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://cybernexsecurity.io/ai-platform-launch']
  },
  {
    id: '4',
    title: 'Government introduces new cybersecurity regulations',
    content: 'The Department of Homeland Security has announced new cybersecurity regulations for critical infrastructure. Organizations will be required to implement zero-trust architecture, conduct regular penetration testing, and report security incidents within 72 hours. Compliance deadline set for January 2025.',
    author: 'PolicyAnnouncer',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://www.dhs.gov/cybersecurity/new-regulations-2024']
  },
  {
    id: '5',
    title: 'Major data breach affects millions of customers',
    content: 'A major e-commerce platform has disclosed a data breach affecting approximately 7.2 million customer records. Compromised data includes names, email addresses, phone numbers, and partial payment information. The breach was caused by an unsecured API endpoint. Affected users should change passwords immediately.',
    author: 'BreachAnalyst',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://www.databreachregistry.com/ecommerce-breach-april2024']
  },
  {
    id: '6',
    title: 'International Cybersecurity Conference announces keynote speakers',
    content: 'The annual International Cybersecurity Conference (ICyCon 2024) has announced its keynote speakers, including renowned security researchers, industry leaders, and government officials. Topics will focus on zero-trust architecture, cloud security, AI-based threats, and ransomware evolution. Registration now open for the June event.',
    author: 'EventCoordinator',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://icycon2024.org/speakers']
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