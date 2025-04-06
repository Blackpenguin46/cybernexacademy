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

export async function GET(request: Request) {
  console.log('[DISCORD-NEWS-API] Route called at ' + new Date().toISOString());
  
  try {
    // Test if the Supabase table exists by making a direct fetch to the REST API
    console.log('[DISCORD-NEWS-API] Attempting to test Supabase table');
    
    const supabaseUrl = 'https://hpfpuljthcngnswwfkrb.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZnB1bGp0aGNuZ25zd3dma3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjkxMjAsImV4cCI6MjAyODAwNTEyMH0._YrJ9mZMfIikw-iXw20z_oDkUTLR5MwbY1qnoxpBOvY';
    
    // Step 1: Simply test if the table exists with a count query
    const testUrl = `${supabaseUrl}/rest/v1/newsfeed?select=count`;
    console.log(`[DISCORD-NEWS-API] Testing table with URL: ${testUrl}`);
    
    const testResponse = await fetch(testUrl, {
      method: 'HEAD',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
      },
      cache: 'no-store'
    });
    
    console.log(`[DISCORD-NEWS-API] Table test response status: ${testResponse.status}`);
    
    if (testResponse.status === 404) {
      throw new Error('Table "newsfeed" not found. The table may not exist in your Supabase project.');
    }
    
    if (!testResponse.ok) {
      const errorText = await testResponse.text();
      console.error(`[DISCORD-NEWS-API] Table test failed: ${testResponse.status} - ${errorText}`);
      throw new Error(`Could not connect to database table: ${testResponse.status}`);
    }
    
    // If we reach here, table exists, so fetch the actual data
    console.log('[DISCORD-NEWS-API] Table exists, fetching data');
    
    // Step 2: Fetch the actual data with full details
    const apiUrl = `${supabaseUrl}/rest/v1/newsfeed?select=*&order=created_at.desc`;
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
      },
      cache: 'no-store'
    });
    
    if (!response.ok) {
      const responseText = await response.text();
      console.error(`[DISCORD-NEWS-API] Data fetch error: ${response.status} - ${responseText}`);
      throw new Error(`Database error: ${response.status} - ${responseText.substring(0, 100)}`);
    }
    
    const data = await response.json();
    console.log(`[DISCORD-NEWS-API] Successfully fetched ${data.length} records from database`);
    
    // No articles found, return notification with fallback
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.log('[DISCORD-NEWS-API] No articles found in database, using fallback');
      return NextResponse.json({
        articles: fallbackArticles,
        source: 'database_empty',
        message: 'Database connection successful but no articles found',
        time: new Date().toISOString(),
        count: 0
      });
    }
    
    // Success - log a sample record to verify structure
    if (data.length > 0) {
      console.log('[DISCORD-NEWS-API] Sample record:', JSON.stringify(data[0]));
    }
    
    // Return the actual data from the database
    return NextResponse.json({
      articles: data,
      source: 'database_success',
      message: `Retrieved ${data.length} articles from database`,
      time: new Date().toISOString(),
      count: data.length
    });
    
  } catch (error) {
    console.error('[DISCORD-NEWS-API] Error:', error);
    
    // Include error details in the response
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'api_error',
      message: error instanceof Error ? error.message : 'Unknown database error',
      error_details: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack?.split('\n').slice(0, 3).join('\n')
      } : 'Unknown error object',
      time: new Date().toISOString()
    });
  }
} 