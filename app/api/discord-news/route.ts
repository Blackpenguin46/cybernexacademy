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

export async function GET(request: Request) {
  console.log('[DISCORD-NEWS-API] Route called at ' + new Date().toISOString());
  
  try {
    // Use hardcoded values for testing and debugging
    // In production, these would come from environment variables
    const supabaseUrl = 'https://vxxpwaloyrtwvpmatzpc.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eHB3YWxveXJ0d3ZwbWF0enBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNDIyMTksImV4cCI6MjAyNzYxODIxOX0.SIGnZrmilJzgADnN1kVjBXo_hJ_-i5nZi79BXYvUbmI';
    
    // Check the request headers and origin to debug CORS issues
    const requestUrl = request.url;
    const origin = request.headers.get('origin') || new URL(requestUrl).origin;
    console.log('[DISCORD-NEWS-API] Request origin:', origin);
    console.log('[DISCORD-NEWS-API] Request URL:', requestUrl);
    
    console.log('[DISCORD-NEWS-API] Making direct API request to Supabase');
    
    // Make a direct fetch to the Supabase REST API
    // Add Origin header that matches one of the allowed redirect URLs
    const url = `${supabaseUrl}/rest/v1/newsfeed?select=*`;
    console.log('[DISCORD-NEWS-API] API URL:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        // Add allowed origins for Supabase security
        'Origin': 'https://cybernex-cybernexacademy.vercel.app'
      },
      cache: 'no-store',
      // Add a timeout to avoid hanging requests
      signal: AbortSignal.timeout(10000)
    });
    
    console.log('[DISCORD-NEWS-API] Response status:', response.status);
    console.log('[DISCORD-NEWS-API] Response headers:', Object.fromEntries(response.headers));
    
    // If response is not ok, try the alternative paths with Origin header
    if (!response.ok) {
      console.log('[DISCORD-NEWS-API] Initial request failed, trying public/newsfeed path');
      
      // Try the public/newsfeed path
      const altUrl = `${supabaseUrl}/rest/v1/public/newsfeed?select=*`;
      console.log('[DISCORD-NEWS-API] Alternative URL:', altUrl);
      
      const altResponse = await fetch(altUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Origin': 'https://cybernex-cybernexacademy.vercel.app'
        },
        cache: 'no-store',
        signal: AbortSignal.timeout(10000)
      });
      
      console.log('[DISCORD-NEWS-API] Alt response status:', altResponse.status);
      
      if (altResponse.ok) {
        const data = await altResponse.json();
        console.log('[DISCORD-NEWS-API] Alternative path successful, articles found:', data.length);
        
        if (data.length > 0) {
          console.log('[DISCORD-NEWS-API] Sample article:', data[0]);
        }
        
        return NextResponse.json({
          articles: data.length > 0 ? data : fallbackArticles,
          source: 'database_success_alt_path',
          message: `Retrieved ${data.length} articles using alternative path`,
          time: new Date().toISOString(),
          count: data.length
        });
      }
      
      // Try with a different domain from the allowed list
      console.log('[DISCORD-NEWS-API] Trying with v0-cybernex domain');
      
      const altResponse2 = await fetch(altUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Origin': 'https://v0-cybernex-r5aktld1jft.vercel.app'
        },
        cache: 'no-store',
        signal: AbortSignal.timeout(10000)
      });
      
      console.log('[DISCORD-NEWS-API] v0 domain response status:', altResponse2.status);
      
      if (altResponse2.ok) {
        const data = await altResponse2.json();
        console.log('[DISCORD-NEWS-API] v0 domain successful, articles found:', data.length);
        
        return NextResponse.json({
          articles: data.length > 0 ? data : fallbackArticles,
          source: 'database_success_v0_domain',
          message: `Retrieved ${data.length} articles using v0-cybernex domain`,
          time: new Date().toISOString(),
          count: data.length
        });
      }
      
      // Try directly with the Supabase client library as a final attempt
      console.log('[DISCORD-NEWS-API] Trying with Supabase client library');
      
      const supabase = createClient(supabaseUrl, supabaseKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        },
        global: {
          fetch: (url, options) => {
            // Add the required Origin header to the fetch options
            const fetchOptions = {
              ...options,
              headers: {
                ...options?.headers,
                'Origin': 'https://cybernex-cybernexacademy.vercel.app'
              }
            };
            return fetch(url, fetchOptions);
          }
        }
      });
      
      const { data: clientData, error: clientError } = await supabase
        .from('newsfeed')
        .select('*')
        .order('timestamp', { ascending: false });
      
      if (clientData && !clientError) {
        console.log('[DISCORD-NEWS-API] Supabase client successful, articles found:', clientData.length);
        
        return NextResponse.json({
          articles: clientData.length > 0 ? clientData : fallbackArticles,
          source: 'database_success_client',
          message: `Retrieved ${clientData.length} articles using Supabase client`,
          time: new Date().toISOString(),
          count: clientData.length
        });
      }
      
      if (clientError) {
        console.error('[DISCORD-NEWS-API] Supabase client error:', clientError);
      }
      
      // If all attempts fail, check available tables
      console.log('[DISCORD-NEWS-API] All paths failed, checking available tables');
      const tablesUrl = `${supabaseUrl}/rest/v1/?apikey=${encodeURIComponent(supabaseKey)}`;
      
      try {
        const tablesResponse = await fetch(tablesUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Origin': 'https://cybernex-cybernexacademy.vercel.app'
          },
          cache: 'no-store',
          signal: AbortSignal.timeout(10000)
        });
        
        if (tablesResponse.ok) {
          const tables = await tablesResponse.json();
          console.log('[DISCORD-NEWS-API] Available tables:', tables);
          
          const errorText = await response.text();
          return NextResponse.json({
            articles: fallbackArticles,
            source: 'path_error',
            message: 'Error accessing the newsfeed table - likely a CORS/domain issue',
            error_details: {
              status: response.status,
              error: errorText,
              tables: Object.keys(tables),
              debug_info: {
                url_attempted: url,
                alt_url_attempted: altUrl,
                headers_sent: {
                  'Content-Type': 'application/json',
                  'apikey': '[REDACTED]',
                  'Authorization': 'Bearer [REDACTED]',
                  'Origin': 'https://cybernex-cybernexacademy.vercel.app'
                },
                request_origin: origin,
                request_url: requestUrl
              },
              suggestion: "Ensure your Supabase project settings include the correct domain in 'API Settings > CORS Origin URLs'"
            },
            time: new Date().toISOString()
          });
        }
      } catch (tablesError) {
        console.error('[DISCORD-NEWS-API] Error checking tables:', tablesError);
      }
      
      // If we can't get the tables info either, return the original error
      const errorText = await response.text();
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'api_error',
        message: 'Failed to access the Supabase API - likely a CORS/domain restriction',
        error_details: {
          status: response.status,
          error: errorText,
          debug_info: {
            url_attempted: url,
            alt_url_attempted: altUrl,
            request_origin: origin,
            request_url: requestUrl,
            suggestion: "Check Supabase project settings > API > CORS Origins and ensure your domain is in the allowed list"
          }
        },
        time: new Date().toISOString()
      });
    }
    
    // If the response is ok, parse the JSON
    const data = await response.json();
    console.log('[DISCORD-NEWS-API] Data received, articles found:', data.length);
    
    if (data.length > 0) {
      console.log('[DISCORD-NEWS-API] Sample article:', data[0]);
    }
    
    return NextResponse.json({
      articles: data.length > 0 ? data : fallbackArticles,
      source: 'database_success',
      message: `Retrieved ${data.length} articles from database`,
      time: new Date().toISOString(),
      count: data.length
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