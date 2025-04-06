import { NextResponse } from 'next/server';

// Hardcoded credentials as a last resort
const SUPABASE_URL = 'https://hpfpuljthcngnswwfkrb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZnB1bGp0aGNuZ25zd3dma3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjkxMjAsImV4cCI6MjAyODAwNTEyMH0._YrJ9mZMfIikw-iXw20z_oDkUTLR5MwbY1qnoxpBOvY';

export async function GET() {
  try {
    console.log('Server-side news proxy: Starting fetch');
    
    // Construct a direct API call to Supabase REST API
    const apiUrl = `${SUPABASE_URL}/rest/v1/newsfeed?select=*&order=created_at.desc&limit=20`;
    
    // No CORS issues because this runs server-side
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      },
      // Ensure we don't use any caching
      cache: 'no-store'
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server proxy error: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log(`Server-side news proxy: Successfully fetched ${data.length} articles`);
    
    // Return the data with a timestamp
    return NextResponse.json({
      news: data,
      count: data.length,
      timestamp: new Date().toISOString(),
      source: 'server_proxy_successful'
    });
    
  } catch (error: any) {
    console.error('Server-side news proxy error:', error);
    
    // Return error with 200 status so client can handle it appropriately
    return NextResponse.json({
      error: error.message,
      source: 'server_proxy_error',
      timestamp: new Date().toISOString()
    }, { status: 200 });
  }
} 