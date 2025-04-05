import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://vxxpwaloyrtwvpmatzpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eHB3YWxveXJ0d3ZwbWF0enBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjA0NjQsImV4cCI6MjA1NTczNjQ2NH0.ef0feqGxtWeB9C2SLtPwEk_lcW8pcVngo7fz1SsznDM';
const supabase = createClient(supabaseUrl, supabaseKey);

// Example message format for fallback when Supabase API fails
const FALLBACK_MESSAGES = [
  {
    id: '1',
    content: '[SECURITY ALERT] Microsoft has released patches for 147 vulnerabilities in their April 2024 Patch Tuesday update, including 5 actively exploited zero-days. https://thehackernews.com/2024/04/microsoft-april-2024-patch-tuesday.html',
    author: 'SecurityBot',
    timestamp: '2024-04-09T16:30:00.000Z',
    attachments: []
  },
  {
    id: '2',
    content: '[THREAT INTEL] New LockBit ransomware variant detected with enhanced evasion capabilities. Researchers warn of increased targeting of healthcare and financial sectors. https://thehackernews.com/2024/04/new-lockbit-30-ransomware-variant.html',
    author: 'SecurityBot',
    timestamp: '2024-04-10T14:15:00.000Z',
    attachments: []
  },
  {
    id: '3',
    content: '[VULNERABILITY] Critical Adobe Acrobat zero-day vulnerability (CVE-2024-21412) being actively exploited. Update immediately! https://thehackernews.com/2024/04/critical-adobe-acrobat-zero-day-under.html',
    author: 'SecurityBot',
    timestamp: '2024-04-11T09:45:00.000Z',
    attachments: []
  }
];

// Function to log detailed information about an object
function logObject(name: string, obj: any) {
  console.log(`${name}:`, {
    type: typeof obj,
    isNull: obj === null,
    isUndefined: obj === undefined,
    keys: obj ? Object.keys(obj) : 'N/A',
    sample: obj && typeof obj === 'object' ? JSON.stringify(obj).substring(0, 200) + '...' : obj
  });
}

export async function GET() {
  console.log('Starting API request to fetch Discord news');
  
  try {
    // 1. First just check Supabase health
    console.log('Checking Supabase connection health...');
    const { data: healthData, error: healthError } = await supabase.from('_tables').select('name').limit(1);
    
    // If we can't even get table metadata, the connection is definitely broken
    if (healthError) {
      console.error('Supabase health check failed:', healthError.message);
      throw new Error(`Supabase connection error: ${healthError.message}`);
    }
    
    console.log('Supabase health check successful:', { healthData });
    
    // 2. Try to list all tables for debugging
    console.log('Fetching available tables...');
    const { data: tables, error: tablesError } = await supabase.from('_tables').select('*');
    
    if (tablesError) {
      console.log('Could not list tables (access restriction):', tablesError.message);
    } else {
      console.log('Available tables:', tables?.map(t => t.name).join(', ') || 'None found');
    }
    
    // 3. Now query the newsfeed table
    console.log('Querying newsfeed table...');
    const { data: newsData, error: newsError } = await supabase
      .from('newsfeed')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(10);
    
    console.log('Supabase query response:', { 
      success: !newsError, 
      errorCode: newsError?.code,
      errorMessage: newsError?.message,
      itemCount: newsData?.length || 0
    });
    
    if (newsError) {
      // If table doesn't exist, try listing all tables to find the right one
      if (newsError.code === '42P01') { // PostgreSQL error code for "table does not exist"
        console.log('The "newsfeed" table does not exist, checking for similar tables...');
        const { data: schema, error: schemaError } = await supabase.rpc('get_schema');
        
        if (schemaError) {
          console.log('Could not get schema:', schemaError.message);
        } else {
          console.log('Schema information:', schema);
        }
      }
      
      throw new Error(`Supabase query error: ${newsError.message} (code: ${newsError.code})`);
    }
    
    if (!newsData || newsData.length === 0) {
      console.log('Newsfeed table exists but has no data, returning fallback data');
      
      // Even though we're returning fallback data, we'll add a special flag to indicate
      // that the table connection worked but was empty
      return NextResponse.json({
        articles: FALLBACK_MESSAGES,
        source: 'fallback',
        databaseStatus: 'empty',
        message: 'Supabase connection successful but newsfeed table is empty'
      });
    }

    // Log the actual data structure for debugging
    console.log('First record structure:');
    logObject('First record', newsData[0]);
    
    // Check if any required fields are missing
    const missingFields = newsData.some(item => !item.content || !item.id || !item.timestamp);
    if (missingFields) {
      console.log('Warning: Some records are missing required fields');
    }
    
    // Map to the format expected by the frontend
    const articles = newsData.map((item, index) => ({
      id: item.id?.toString() || `item-${index}`,
      content: item.content || 'No content available',
      author: item.author || 'Unknown',
      timestamp: item.timestamp || new Date().toISOString(),
      attachments: []
    }));
    
    // Return complete debug info alongside the articles
    return NextResponse.json({ 
      articles,
      source: 'supabase',
      count: articles.length,
      message: 'Successfully retrieved news from Supabase',
      debug: {
        firstRecord: newsData[0],
        tableAccess: true,
        connectionTime: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Error in Discord news API:', error);
    
    return NextResponse.json({
      articles: FALLBACK_MESSAGES,
      source: 'fallback',
      databaseStatus: 'error',
      message: error instanceof Error ? error.message : 'Unknown error occurred',
      error: error instanceof Error ? error.message : 'Unknown error',
      errorTime: new Date().toISOString(),
      stack: error instanceof Error ? error.stack : null
    });
  }
} 