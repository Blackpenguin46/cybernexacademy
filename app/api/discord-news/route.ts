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

// Helper function to test connectivity
async function testConnectivity(url: string): Promise<{success: boolean, status?: number, error?: string}> {
  try {
    console.log(`[DISCORD-NEWS-API] Testing connectivity to: ${url}`);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const response = await fetch(url, { 
      method: 'HEAD',
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'User-Agent': 'CyberNex-Connectivity-Test/1.0' }
    });
    
    clearTimeout(timeoutId);
    console.log(`[DISCORD-NEWS-API] Connectivity test to ${url}: ${response.status}`);
    
    return { 
      success: response.ok, 
      status: response.status 
    };
  } catch (error) {
    console.error(`[DISCORD-NEWS-API] Connectivity test failed for ${url}:`, error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Helper function to try Supabase access with a specific key
async function tryWithKey(
  url: string, 
  key: string, 
  keyType: 'anon' | 'service_role'
): Promise<Response | null> {
  try {
    console.log(`[DISCORD-NEWS-API] Testing with ${keyType} key and exact table structure`);
    
    // Try to access the actual API endpoint for the newsfeed table
    // Include selecting the exact columns that exist in the schema
    const apiUrl = `${url}/rest/v1/newsfeed?select=id,author,content,timestamp,urls&order=timestamp.desc&limit=50`;
    console.log(`[DISCORD-NEWS-API] Trying to access: ${apiUrl}`);
    
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': key,
          'Authorization': `Bearer ${key}`,
        },
        cache: 'no-store'
      });
      
      const responseText = await response.text();
      console.log(`[DISCORD-NEWS-API] Response status: ${response.status}, Content type: ${response.headers.get('content-type')}`);
      
      // Handle successful response
      if (response.ok) {
        try {
          const data = JSON.parse(responseText);
          console.log(`[DISCORD-NEWS-API] Successfully retrieved ${data.length} articles`);
          
          if (data.length > 0) {
            console.log(`[DISCORD-NEWS-API] Sample record:`, data[0]);
          }
          
          return NextResponse.json({
            articles: data.length > 0 ? data : fallbackArticles,
            source: 'database_success',
            message: `Retrieved ${data.length} articles using ${keyType} key`,
            key_used: keyType,
            time: new Date().toISOString(),
            count: data.length
          });
        } catch (parseError) {
          console.error(`[DISCORD-NEWS-API] JSON parse error:`, parseError);
          return NextResponse.json({
            articles: fallbackArticles,
            source: 'parse_error',
            message: 'Failed to parse JSON response from the database.',
            error_details: {
              type: 'JsonParseError',
              response: responseText.substring(0, 1000),
              error: parseError instanceof Error ? parseError.message : String(parseError)
            },
            time: new Date().toISOString()
          });
        }
      }
      
      // Check for the specific "requested path is invalid" error
      if (responseText.includes("requested path is invalid")) {
        console.log(`[DISCORD-NEWS-API] First attempt failed with 'invalid path'. Trying alternative formats...`);
        
        // Try both formats suggested by Supabase
        const alternativeUrls = [
          // Format with slash
          `${url}/rest/v1/public/newsfeed?select=id,author,content,timestamp,urls&order=timestamp.desc&limit=50`,
          // Format with dot (as suggested in the docs)
          `${url}/rest/v1/public.newsfeed?select=id,author,content,timestamp,urls&order=timestamp.desc&limit=50`
        ];
        
        for (const altUrl of alternativeUrls) {
          console.log(`[DISCORD-NEWS-API] Trying alternative URL: ${altUrl}`);
          
          try {
            const alternativeResponse = await fetch(altUrl, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'apikey': key,
                'Authorization': `Bearer ${key}`,
              },
              cache: 'no-store'
            });
            
            if (alternativeResponse.ok) {
              try {
                const data = await alternativeResponse.json();
                console.log(`[DISCORD-NEWS-API] Alternative path successful! Retrieved ${data.length} articles`);
                
                if (data.length > 0) {
                  console.log(`[DISCORD-NEWS-API] Sample record:`, data[0]);
                }
                
                return NextResponse.json({
                  articles: data.length > 0 ? data : fallbackArticles,
                  source: 'database_success_alt_path',
                  message: `Retrieved ${data.length} articles using ${keyType} key and alternative path`,
                  key_used: keyType,
                  url_used: altUrl,
                  time: new Date().toISOString(),
                  count: data.length
                });
              } catch (parseError) {
                console.error(`[DISCORD-NEWS-API] JSON parse error with alternative URL:`, parseError);
              }
            } else {
              const errText = await alternativeResponse.text();
              console.log(`[DISCORD-NEWS-API] Alternative path failed: ${alternativeResponse.status} - ${errText}`);
            }
          } catch (pathError) {
            console.error(`[DISCORD-NEWS-API] Error trying path ${altUrl}:`, pathError);
          }
        }
        
        // Show curl command for manual debugging
        const curlCommand = `curl -X GET "${url}/rest/v1/newsfeed?select=id,author,content,timestamp,urls" \\
  -H "apikey: YOUR_ANON_KEY" \\
  -H "Authorization: Bearer YOUR_ANON_KEY"`;
        
        console.log(`[DISCORD-NEWS-API] All alternative paths failed. Try this curl command:\n${curlCommand}`);
        
        // Try to diagnose by getting list of available tables
        let tableInfo = "";
        let availableTables: string[] = [];
        
        try {
          console.log(`[DISCORD-NEWS-API] Attempting to get table structure for diagnosis`);
          // Try to get a list of available tables
          const tablesUrl = `${url}/rest/v1/?apikey=${encodeURIComponent(key)}`;
          const tablesResponse = await fetch(tablesUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'apikey': key,
              'Authorization': `Bearer ${key}`,
            },
            cache: 'no-store'
          });
          
          if (tablesResponse.ok) {
            const tablesData = await tablesResponse.json();
            console.log(`[DISCORD-NEWS-API] Available tables:`, tablesData);
            tableInfo = "Tables available in the database: " + JSON.stringify(tablesData);
            
            if (typeof tablesData === 'object') {
              availableTables = Object.keys(tablesData);
            }
          } else {
            const tablesErrorText = await tablesResponse.text();
            tableInfo = `Error retrieving tables: ${tablesResponse.status} - ${tablesErrorText}`;
          }
        } catch (tableCheckError) {
          console.error(`[DISCORD-NEWS-API] Error checking table structure:`, tableCheckError);
          tableInfo = `Error during table structure check: ${tableCheckError instanceof Error ? tableCheckError.message : String(tableCheckError)}`;
        }
        
        // Return error response with table information
        return NextResponse.json({
          articles: fallbackArticles,
          source: 'path_error',
          message: 'Unable to access the newsfeed table. Path validation failed.',
          error_details: {
            type: 'InvalidPathError',
            response: responseText,
            table_info: tableInfo,
            available_tables: availableTables,
            curl_command: curlCommand,
            suggestions: [
              'Verify that "newsfeed" table exists (Supabase is case-sensitive)',
              'Check Row Level Security (RLS) policies on the newsfeed table',
              'Try the curl command above replacing YOUR_ANON_KEY with your actual key',
              'Verify your API keys have proper permissions',
              'Check the Supabase dashboard: https://app.supabase.com/project/_/api'
            ]
          },
          time: new Date().toISOString()
        });
      }
      
      // Handle other response errors
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'response_error',
        message: 'Failed to fetch data from the newsfeed table.',
        error_details: {
          type: 'ResponseError',
          status: response.status,
          headers: Object.fromEntries(response.headers.entries()),
          response: responseText.substring(0, 1000),
          suggestions: [
            'Check the API endpoint and parameters',
            'Ensure the API key is valid and has access rights',
            'Verify that the newsfeed table exists and has the expected columns'
          ]
        },
        time: new Date().toISOString()
      });
    } catch (error) {
      console.error(`[DISCORD-NEWS-API] Fetch error:`, error);
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'fetch_error',
        message: 'An error occurred while fetching data.',
        error_details: {
          type: 'FetchError',
          error: error instanceof Error ? error.message : String(error)
        },
        time: new Date().toISOString()
      });
    }
  } catch (outerError) {
    console.error(`[DISCORD-NEWS-API] Unexpected error with ${keyType} key:`, outerError);
    return null;
  }
}

export async function GET(request: Request) {
  console.log('[DISCORD-NEWS-API] Route called at ' + new Date().toISOString());
  
  try {
    // Get Supabase credentials from environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    console.log('[DISCORD-NEWS-API] Credentials:', { 
      supabaseUrl: supabaseUrl ? '✓ Present' : '✗ Missing',
      supabaseKey: supabaseKey ? '✓ Present' : '✗ Missing'
    });
    
    // Check if we have the necessary credentials
    if (!supabaseUrl || !supabaseKey) {
      console.error('[DISCORD-NEWS-API] Missing Supabase credentials');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'missing_credentials',
        message: 'Supabase credentials are missing from environment variables',
        missing: {
          url: !supabaseUrl,
          key: !supabaseKey
        },
        time: new Date().toISOString()
      });
    }
    
    // Create Supabase client with proper options
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false, // Don't persist session
        autoRefreshToken: false // Don't auto-refresh token
      },
      global: {
        fetch: fetch // Use the global fetch
      }
    });
    
    console.log('[DISCORD-NEWS-API] Attempting to fetch newsfeed data');
    
    // Execute the query with proper error handling
    const { data, error } = await supabase
      .from('newsfeed')
      .select('*')
      .order('timestamp', { ascending: false });
    
    // Log the result for debugging
    if (error) {
      console.error('[DISCORD-NEWS-API] Supabase error:', error);
      
      // Try to get available tables to help troubleshoot
      const { data: tables, error: tablesError } = await supabase
        .from('information_schema.tables')
        .select('table_name')
        .eq('table_schema', 'public');
      
      let availableTables = [];
      if (!tablesError && tables) {
        availableTables = tables.map(t => t.table_name);
        console.log('[DISCORD-NEWS-API] Available tables:', availableTables);
      }
      
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'database_error',
        message: `Database error: ${error.message}`,
        error_details: {
          code: error.code,
          message: error.message,
          hint: error.hint || 'No hint provided',
          details: error.details || 'No details provided',
          available_tables: availableTables,
          troubleshooting: [
            'Check if RLS policies are blocking access',
            'Verify the table exists with correct name (case-sensitive)',
            'Ensure your API key has the necessary permissions',
            'Try using the Supabase web interface to query the table directly'
          ]
        },
        time: new Date().toISOString()
      });
    }
    
    if (!data || data.length === 0) {
      console.log('[DISCORD-NEWS-API] No data found in table');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'empty_table',
        message: 'No data found in the newsfeed table',
        time: new Date().toISOString()
      });
    }
    
    console.log(`[DISCORD-NEWS-API] Successfully retrieved ${data.length} articles`);
    
    // Return the data
    return NextResponse.json({
      articles: data,
      source: 'database_success',
      message: `Retrieved ${data.length} articles from Supabase`,
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