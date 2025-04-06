import { NextResponse } from 'next/server';

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
    console.log(`[DISCORD-NEWS-API] Testing with ${keyType} key`);
    
    // Try to access the actual API endpoint for the newsfeed table
    const apiUrl = `${url}/rest/v1/newsfeed?select=*&limit=10`;
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
      
      // Check for the specific "requested path is invalid" error
      if (responseText.includes("requested path is invalid")) {
        // Try one alternative endpoint format with the schema prefix
        try {
          console.log(`[DISCORD-NEWS-API] First attempt failed with 'invalid path'. Trying with schema prefix...`);
          const alternativeUrl = `${url}/rest/v1/public/newsfeed?select=*&limit=10`;
          console.log(`[DISCORD-NEWS-API] Trying alternative URL: ${alternativeUrl}`);
          
          const alternativeResponse = await fetch(alternativeUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'apikey': key,
              'Authorization': `Bearer ${key}`,
            },
            cache: 'no-store'
          });
          
          if (alternativeResponse.ok) {
            const data = await alternativeResponse.json();
            console.log(`[DISCORD-NEWS-API] Alternative path successful! Fetched data with ${keyType} key:`, data);
            
            return NextResponse.json({
              articles: data.length > 0 ? data : fallbackArticles,
              source: 'database_success_alt_path',
              message: `Retrieved ${data.length} articles using ${keyType} key and alternative path`,
              key_used: keyType,
              time: new Date().toISOString(),
              count: data.length,
              note: "Used alternative URL format with schema prefix"
            });
          }
        } catch (altError) {
          console.error(`[DISCORD-NEWS-API] Alternative path also failed:`, altError);
        }
        
        // If alternative also failed, return original error with auth suggestions
        return NextResponse.json({
          articles: fallbackArticles,
          source: 'path_error',
          message: 'Unable to access the newsfeed table. Path validation failed.',
          error_details: {
            type: 'InvalidPathError',
            response: responseText,
            suggestions: [
              'Verify your API keys have proper permissions to access the table',
              'Your table exists but the API keys might not have access rights',
              'Check Row Level Security (RLS) policies on the newsfeed table',
              'Try using the service_role key which can bypass RLS policies',
              'Verify that the case of "newsfeed" matches exactly (Supabase is case-sensitive)'
            ]
          },
          time: new Date().toISOString()
        });
      }
      
      // Handle successful response
      if (response.ok) {
        const data = JSON.parse(responseText);
        return NextResponse.json({
          articles: data.length > 0 ? data : fallbackArticles,
          source: 'database_success',
          message: `Retrieved ${data.length} articles using ${keyType} key`,
          key_used: keyType,
          time: new Date().toISOString(),
          count: data.length
        });
      } else {
        // Handle other response errors
        return NextResponse.json({
          articles: fallbackArticles,
          source: 'response_error',
          message: 'Failed to fetch data from the newsfeed table.',
          error_details: {
            type: 'ResponseError',
            response: responseText,
            suggestions: [
              'Check the API endpoint and parameters',
              'Ensure the API key is valid and has access rights'
            ]
          },
          time: new Date().toISOString()
        });
      }
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
    // Test connectivity to multiple sites to see if it's only Supabase that's failing
    // or if all external connections are blocked
    const testSites = [
      'https://google.com',
      'https://cloudflare.com',
      'https://api.github.com',
      'https://vxxpwaloyrtwvpmatzpc.supabase.co'
    ];
    
    console.log('[DISCORD-NEWS-API] Running connectivity tests to various sites');
    const connectivityResults = await Promise.all(testSites.map(site => testConnectivity(site)));
    
    const connectivityReport = testSites.map((site, index) => ({
      site,
      ...connectivityResults[index]
    }));
    
    console.log('[DISCORD-NEWS-API] Connectivity test results:', connectivityReport);
    
    // Check if any external sites are reachable
    const canReachExternal = connectivityResults.some(result => result.success);
    
    // Special handling for network connectivity issues
    if (!canReachExternal) {
      console.log('[DISCORD-NEWS-API] No external sites are reachable - network is fully blocked');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'network_error',
        message: 'Cannot connect to any external sites. The server appears to be completely isolated from the internet.',
        error_details: {
          type: 'CompleteNetworkIsolation',
          connectivity_tests: connectivityReport,
          suggestions: [
            'This server has no internet access at all',
            'Check your hosting provider settings - outbound connections are blocked',
            'If using a cloud service, check network/firewall settings',
            'Consider setting up a proxy server or using environment-specific configuration'
          ]
        },
        time: new Date().toISOString()
      });
    }
    
    // Check if only Supabase is unreachable
    const supabaseResult = connectivityReport.find(r => r.site.includes('supabase.co'));
    if (canReachExternal && supabaseResult && !supabaseResult.success) {
      console.log('[DISCORD-NEWS-API] Can reach some sites but not Supabase specifically');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'supabase_specific_error',
        message: 'Can connect to some external sites but not to Supabase specifically.',
        error_details: {
          type: 'SupabaseSpecificBlockage',
          connectivity_tests: connectivityReport,
          suggestions: [
            'Your network may be blocking Supabase specifically',
            'Check if Supabase is accessible from your region',
            'Try using a different Supabase project or region',
            'Consider using a different database solution'
          ]
        },
        time: new Date().toISOString()
      });
    }
    
    // If we can reach Supabase but previous attempts to fetch data failed,
    // then it's likely an authentication or table access issue
    if (supabaseResult && supabaseResult.success) {
      console.log('[DISCORD-NEWS-API] Can reach Supabase, trying to access data');
      
      const supabaseUrl = 'https://vxxpwaloyrtwvpmatzpc.supabase.co';
      
      // Use environment variables if available, otherwise fall back to a placeholder
      const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
                     process.env.SUPABASE_ANON_KEY || 
                     // This is just a placeholder - you'll need to get the actual key from your Supabase dashboard
                     'REPLACE_WITH_YOUR_ANON_KEY';
      
      // Try to get service role key from any relevant environment variable
      const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 
                           process.env.SUPABASE_SERVICE_KEY || 
                           '';
      
      console.log('[DISCORD-NEWS-API] Will attempt with both anon key and service role key if available');
      
      // Try first with the service role key if it exists
      if (serviceRoleKey) {
        try {
          console.log('[DISCORD-NEWS-API] Attempting with service role key');
          const result = await tryWithKey(supabaseUrl, serviceRoleKey, 'service_role');
          if (result) return result;
        } catch (serviceKeyError) {
          console.log('[DISCORD-NEWS-API] Service role key failed, falling back to anon key');
        }
      }
      
      // Fall back to anonymous key
      try {
        console.log('[DISCORD-NEWS-API] Attempting with anon key');
        const result = await tryWithKey(supabaseUrl, anonKey, 'anon');
        if (result) return result;
      } catch (anonKeyError) {
        console.error('[DISCORD-NEWS-API] Both keys failed to authenticate');
        
        // If we got here, both keys failed, return a clear error
        return NextResponse.json({
          articles: fallbackArticles,
          source: 'key_authentication_error',
          message: 'Both service role and anon keys failed to authenticate',
          error_details: {
            type: 'SupabaseKeyError',
            connectivity_tests: connectivityReport,
            suggestions: [
              'Verify your Supabase API keys in the project settings',
              'Check if the API keys have the necessary permissions',
              'Ensure your keys have not expired',
              'Try regenerating your API keys in the Supabase dashboard'
            ]
          },
          time: new Date().toISOString()
        });
      }
    }
    
    // Fallback response if we reached this point but don't have specific diagnosis
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'unknown_connectivity_issue',
      message: 'Connectivity tests complete, but could not determine the exact issue',
      error_details: {
        connectivity_tests: connectivityReport,
        suggestions: [
          'Check all network and firewall settings',
          'Verify Supabase project status',
          'Check browser console for more detailed errors'
        ]
      },
      time: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('[DISCORD-NEWS-API] Error running connectivity tests:', error);
    
    // Final fallback for any unexpected errors
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'api_error',
      message: error instanceof Error ? error.message : 'Unknown error during connectivity tests',
      error_details: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack?.split('\n').slice(0, 3).join('\n')
      } : 'Unknown error object',
      time: new Date().toISOString()
    });
  }
} 