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

// List of possible table names to try
const possibleTableNames = ['newsfeed', 'news_feed', 'discord_news', 'news', 'feed'];

export async function GET() {
  console.log('Starting Supabase news fetch process');
  
  // Fallback news data in case of API failure
  const fallbackData = {
    articles: FALLBACK_MESSAGES,
    source: 'fallback',
    message: 'Could not connect to Supabase or no news found.'
  };
  
  try {
    console.log('Supabase connection info:', {
      url: supabaseUrl,
      keyPrefix: supabaseKey.substring(0, 10) + '...',
      tablesToTry: possibleTableNames
    });

    // First, try to list all tables to see what's available
    const { data: tableList, error: tableError } = await supabase
      .from('_tables')
      .select('*')
      .limit(20);
    
    if (tableError) {
      console.log('Error listing tables:', tableError.message);
      console.log('Will still try known table names');
    } else {
      console.log('Available tables:', tableList);
    }
    
    let newsData = null;
    let lastError: any = null;
    let usedTable = '';
    
    // Try each possible table name until we find one that works
    for (const tableName of possibleTableNames) {
      try {
        console.log(`Trying to query table: ${tableName}`);
        
        const { data, error } = await supabase
          .from(tableName)
          .select('*')
          .order('timestamp', { ascending: false })
          .limit(100);
        
        if (error) {
          console.log(`Error querying ${tableName}:`, error.message);
          lastError = error;
          continue; // Try next table
        }
        
        if (data && data.length > 0) {
          console.log(`Success! Found ${data.length} records in table ${tableName}`);
          newsData = data;
          usedTable = tableName;
          break; // Found data, exit loop
        } else {
          console.log(`Table ${tableName} exists but has no data`);
        }
      } catch (err) {
        console.log(`Error with table ${tableName}:`, err);
        lastError = err;
      }
    }
    
    // If we tried all tables and found nothing
    if (!newsData) {
      console.log('Could not find data in any table, using fallback');
      return NextResponse.json({
        ...fallbackData,
        message: `No news found. Last error: ${lastError?.message || 'Unknown error'}`,
        tablesChecked: possibleTableNames
      });
    }

    // Log a sample of the data we found
    console.log(`Data sample from ${usedTable}:`, {
      count: newsData.length,
      firstItem: newsData[0] ? {
        id: newsData[0].id,
        author: newsData[0].author,
        contentPreview: newsData[0].content?.substring(0, 50) + '...' || 'No content'
      } : 'No items'
    });
    
    // Map to the format expected by the frontend
    const articles = newsData.map((item) => ({
      id: item.id?.toString() || `fallback-${Math.random()}`,
      content: item.content || 'No content available',
      author: item.author || 'Unknown',
      timestamp: item.timestamp || new Date().toISOString(),
      attachments: []
    }));
    
    console.log(`Mapped ${articles.length} items for frontend from table ${usedTable}`);
    
    // Return a successful response with the articles
    return NextResponse.json({ 
      articles,
      source: 'supabase',
      count: articles.length,
      message: `Successfully retrieved news from ${usedTable} table.`,
      debugInfo: {
        usedTable: usedTable,
        recordCount: newsData.length
      }
    });
    
  } catch (error) {
    console.error('Error in Discord news API:', error);
    return NextResponse.json({
      ...fallbackData,
      message: error instanceof Error ? error.message : 'Unknown error occurred',
      detail: 'Server-side error in discord news API'
    });
  }
} 