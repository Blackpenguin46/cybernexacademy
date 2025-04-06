import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Always use server-side rendering
export const dynamic = 'force-dynamic';

// Define fallback messages in case the API fails
const fallbackArticles = [
  {
    id: '1',
    title: 'Critical vulnerability found in popular VPN software',
    content: 'Researchers have discovered a critical remote code execution vulnerability in a widely-used VPN application affecting over 10 million users. The vulnerability (CVE-2024-1234) allows attackers to execute malicious code with system privileges. Vendor has released a patch - update immediately!',
    author: 'SecurityResearcher',
    timestamp: '2024-04-05T10:52:00.000Z',
    urls: ['https://thehackernews.com/sample/vpn-vulnerability']
  },
  {
    id: '2',
    title: 'Ransomware attacks increase by 40% in healthcare sector',
    content: 'New report from CyberInsight reveals a 40% increase in ransomware attacks targeting healthcare organizations in Q1 2024. Attackers are specifically exploiting outdated remote access infrastructure and phishing campaigns directed at medical staff. Implement MFA and conduct security awareness training immediately.',
    author: 'ThreatIntelTeam',
    timestamp: '2024-04-05T10:52:00.000Z',
    urls: ['https://www.healthcybersecurity.org/report/q1-2024']
  },
  {
    id: '3',
    title: 'New AI-powered security platform launches',
    content: 'CyberNex Security has announced a new AI-powered threat detection platform that reduces false positives by 75%. The platform uses machine learning algorithms to identify patterns of malicious behavior across network traffic, user activity, and endpoint data. Early access program now open for enterprise security teams.',
    author: 'TechReporter',
    timestamp: '2024-04-05T10:52:00.000Z',
    urls: ['https://cybernexsecurity.io/ai-platform-launch']
  },
  {
    id: '4',
    title: 'Government introduces new cybersecurity regulations',
    content: 'The Department of Homeland Security has announced new cybersecurity regulations for critical infrastructure. Organizations will be required to implement zero-trust architecture, conduct regular penetration testing, and report security incidents within 72 hours. Compliance deadline set for January 2025.',
    author: 'PolicyAnnouncer',
    timestamp: '2024-04-05T10:52:00.000Z',
    urls: ['https://www.dhs.gov/cybersecurity/new-regulations-2024']
  },
  {
    id: '5',
    title: 'Major data breach affects millions of customers',
    content: 'A major e-commerce platform has disclosed a data breach affecting approximately 7.2 million customer records. Compromised data includes names, email addresses, phone numbers, and partial payment information. The breach was caused by an unsecured API endpoint. Affected users should change passwords immediately.',
    author: 'BreachAnalyst',
    timestamp: '2024-04-05T10:52:00.000Z',
    urls: ['https://www.databreachregistry.com/ecommerce-breach-april2024']
  },
  {
    id: '6',
    title: 'International Cybersecurity Conference announces keynote speakers',
    content: 'The annual International Cybersecurity Conference (ICyCon 2024) has announced its keynote speakers, including renowned security researchers, industry leaders, and government officials. Topics will focus on zero-trust architecture, cloud security, AI-based threats, and ransomware evolution. Registration now open for the June event.',
    author: 'EventCoordinator',
    timestamp: '2024-04-05T10:52:00.000Z',
    urls: ['https://icycon2024.org/speakers']
  }
];

// Debug function to check environment variables (safe way to log without exposing keys)
function getEnvironmentInfo() {
  return {
    urlExists: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    keyExists: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    urlPrefix: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 15) + '...',
    envKeys: Object.keys(process.env).filter(key => key.includes('SUPABASE')).join(', '),
    serverUrlExists: !!process.env.SUPABASE_URL,
    serverKeyExists: !!process.env.SUPABASE_ANON_KEY,
    serviceKeyExists: !!process.env.SUPABASE_SERVICE_KEY
  };
}

export async function GET(request: Request) {
  console.log('[DISCORD-NEWS-API] Route called at ' + new Date().toISOString());
  
  try {
    // Log environment info for debugging
    const envInfo = getEnvironmentInfo();
    console.log('[DISCORD-NEWS-API] Environment info:', envInfo);
    
    // Get Supabase URL - checking all possible environment variable names
    // Try server-side URL first (no NEXT_PUBLIC prefix)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vxxpwaloyrtwvpmatzpc.supabase.co';
    
    // For API routes, we should use the service key which has higher privileges
    const serviceKey = process.env.SUPABASE_SERVICE_KEY;
    
    // Fallback to the anon key if no service key is found
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    // Determine which key to use - prefer service key for server operations
    const useServiceKey = !!serviceKey;
    const apiKey = serviceKey || anonKey;
    
    // Check the request headers and origin
    const requestUrl = request.url;
    const origin = request.headers.get('origin') || new URL(requestUrl).origin;
    console.log('[DISCORD-NEWS-API] Request origin:', origin);
    console.log('[DISCORD-NEWS-API] Request URL:', requestUrl);
    
    // Log which key we're using (without exposing the actual key)
    console.log('[DISCORD-NEWS-API] Using', useServiceKey ? 'SERVICE_KEY' : 'ANON_KEY', 'for Supabase with URL:', supabaseUrl);
    
    if (!apiKey) {
      console.error('[DISCORD-NEWS-API] No valid API key found in environment variables');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'missing_api_key',
        message: 'No API key available in environment variables',
        debug_info: {
          environment: envInfo,
          suggestion: "Check that SUPABASE_SERVICE_KEY and NEXT_PUBLIC_SUPABASE_ANON_KEY are correctly set in Vercel"
        },
        time: new Date().toISOString()
      });
    }
    
    // Create Supabase client with proper options
    const supabase = createClient(supabaseUrl, apiKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
    
    // Execute the query
    console.log('[DISCORD-NEWS-API] Querying newsfeed table using', useServiceKey ? 'service key' : 'anon key');
    const { data, error } = await supabase
      .from('newsfeed')
      .select()
      .order('timestamp', { ascending: false });
    
    // Handle errors
    if (error) {
      console.error('[DISCORD-NEWS-API] Supabase query error:', error);
      
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'database_error',
        message: `Database error: ${error.message}`,
        error_details: {
          code: error.code,
          message: error.message,
          hint: error.hint,
          details: error.details,
          using_service_key: useServiceKey,
          environment: envInfo,
          request_origin: origin
        },
        time: new Date().toISOString()
      });
    }
    
    // Handle success
    if (data && data.length > 0) {
      console.log(`[DISCORD-NEWS-API] Successfully retrieved ${data.length} articles using ${useServiceKey ? 'SERVICE_KEY' : 'ANON_KEY'}`);
      console.log('[DISCORD-NEWS-API] Sample article:', data[0]);
      
      return NextResponse.json({
        articles: data,
        source: 'database_success',
        message: `Retrieved ${data.length} articles`,
        time: new Date().toISOString(),
        count: data.length
      });
    }
    
    // Handle empty results
    console.log('[DISCORD-NEWS-API] No articles found in database');
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'empty_results',
      message: 'No articles found in the database',
      time: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('[DISCORD-NEWS-API] Unexpected error:', error);
    
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'api_error',
      message: error instanceof Error ? error.message : 'Unknown error',
      error_details: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack?.split('\n').slice(0, 3).join('\n')
      } : 'Unknown error object',
      time: new Date().toISOString()
    });
  }
} 