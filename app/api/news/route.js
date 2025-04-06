// Simpler API proxy using JS instead of TS
import { NextResponse } from 'next/server';

// Hardcoded credentials as a last resort
const SUPABASE_URL = 'https://hpfpuljthcngnswwfkrb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZnB1bGp0aGNuZ25zd3dma3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjkxMjAsImV4cCI6MjAyODAwNTEyMH0._YrJ9mZMfIikw-iXw20z_oDkUTLR5MwbY1qnoxpBOvY';

export async function GET() {
  try {
    // Log the attempt
    console.log('Simple news API: Starting fetch');
    
    // Use precise URL with more parameters for better results
    const apiUrl = `${SUPABASE_URL}/rest/v1/newsfeed?select=*&order=created_at.desc&limit=50`;
    
    // Make the fetch request with more complete headers
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=representation'
      }
    });
    
    // Check response
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({
        error: `API error: ${response.status} - ${errorText}`,
        timestamp: new Date().toISOString()
      });
    }
    
    // Parse data
    const data = await response.json();
    
    // Log success
    console.log(`Fetched ${data.length} items from Supabase`);
    
    // Return success
    return NextResponse.json({
      news: data,
      count: data.length,
      status: 'success',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('News API error:', error);
    // Return any errors
    return NextResponse.json({
      error: error.message || 'Unknown error',
      status: 'error',
      timestamp: new Date().toISOString()
    });
  }
} 