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
    // Get environment variables for Supabase connection
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hpfpuljthcngnswwfkrb.supabase.co';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZnB1bGp0aGNuZ25zd3dma3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjkxMjAsImV4cCI6MjAyODAwNTEyMH0._YrJ9mZMfIikw-iXw20z_oDkUTLR5MwbY1qnoxpBOvY';
    
    logWithEnv(`Using Supabase URL: ${supabaseUrl.substring(0, 15)}...`);
    logWithEnv(`Using Supabase Key: ${supabaseKey.substring(0, 10)}...`);

    // Create Supabase client with more lenient timeout
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      },
      global: {
        fetch: (url, options) => {
          return fetch(url, { 
            ...options, 
            signal: AbortSignal.timeout(10000) // 10 second timeout
          });
        }
      }
    });

    // Simple straightforward query to get all articles
    logWithEnv('Querying newsfeed table in Supabase...');
    const { data: articles, error } = await supabase
      .from('newsfeed')
      .select('*')
      .order('timestamp', { ascending: false });
    
    // Handle query error
    if (error) {
      logWithEnv(`Supabase query error: ${error.message}`);
      logWithEnv(`Error details: ${JSON.stringify(error)}`);
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'database_error',
        message: `Database query error: ${error.message}`,
        time: new Date().toISOString(),
        debug: { error: error.message }
      });
    }
    
    // Handle no data returned
    if (!articles || articles.length === 0) {
      logWithEnv('No articles found in database');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'database_empty',
        message: 'No articles found in database',
        time: new Date().toISOString()
      });
    }
    
    // Success - return the articles
    logWithEnv(`Successfully retrieved ${articles.length} articles from database`);
    return NextResponse.json({
      articles: articles,
      source: 'database_success',
      message: `Retrieved ${articles.length} articles from database`,
      time: new Date().toISOString(),
      debug: {
        count: articles.length
      }
    });
    
  } catch (error) {
    // Catch-all for any unexpected errors
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    
    logWithEnv(`Unexpected error: ${errorMessage}`);
    logWithEnv(`Error stack: ${errorStack}`);
    
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'fetch_error',
      message: `Error connecting to database: ${errorMessage}`,
      time: new Date().toISOString(),
      debug: {
        error: errorMessage,
        stack: errorStack
      }
    });
  }
} 