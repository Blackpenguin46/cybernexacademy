// Simpler API proxy using JS instead of TS
import { NextResponse } from 'next/server';

// Hardcoded credentials as a last resort
const SUPABASE_URL = 'https://hpfpuljthcngnswwfkrb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZnB1bGp0aGNuZ25zd3dma3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjkxMjAsImV4cCI6MjAyODAwNTEyMH0._YrJ9mZMfIikw-iXw20z_oDkUTLR5MwbY1qnoxpBOvY';

export async function GET() {
  try {
    // Log the attempt
    console.log('Simple news API: Starting fetch');
    
    // Use minimal URL to avoid any parsing issues
    const apiUrl = `${SUPABASE_URL}/rest/v1/newsfeed`;
    
    // Make the simplest possible fetch request
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    });
    
    // Check response
    if (!response.ok) {
      return NextResponse.json({
        error: `API error: ${response.status}`,
        timestamp: new Date().toISOString()
      });
    }
    
    // Parse data
    const data = await response.json();
    
    // Return success
    return NextResponse.json({
      news: data,
      count: data.length,
      status: 'success',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    // Return any errors
    return NextResponse.json({
      error: error.message || 'Unknown error',
      status: 'error',
      timestamp: new Date().toISOString()
    });
  }
} 