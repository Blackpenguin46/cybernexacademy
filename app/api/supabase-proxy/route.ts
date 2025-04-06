// This file creates a proxy API to work around DNS resolution issues
// between Vercel and Supabase (Error 1016)

import { NextResponse } from 'next/server';

// Edge runtime to maximize connectivity options
export const runtime = 'edge';

export async function GET(request: Request) {
  // Get Supabase credentials from environment
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // If no credentials, return error
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: 'Missing Supabase credentials' },
      { status: 500 }
    );
  }

  try {
    // Build the target Supabase URL for querying the newsfeed table
    const targetUrl = `${supabaseUrl}/rest/v1/newsfeed?select=*&order=created_at.desc&limit=20`;
    
    console.log(`Proxy attempting to connect to: ${targetUrl}`);

    // Attempt the fetch with full error handling
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
      },
      // Critical: Ensure fresh request every time
      cache: 'no-store'
    });

    // If response isn't OK, throw with status
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Supabase API returned ${response.status}: ${errorText}`);
    }

    // Get the data
    const data = await response.json();
    
    // Return successful response
    return NextResponse.json({
      news: data,
      source: 'proxy_api_success',
      timestamp: new Date().toISOString(),
      proxy_info: {
        status: response.status,
        statusText: response.statusText,
        // Simplify headers handling to avoid iterator issues
        headers: {
          contentType: response.headers.get('content-type'),
          contentLength: response.headers.get('content-length'),
          server: response.headers.get('server')
        }
      }
    });
  } catch (error: any) {
    console.error('Proxy API error:', error);
    
    // Return error response
    return NextResponse.json({
      error: error.message || 'Unknown error',
      source: 'proxy_api_error',
      timestamp: new Date().toISOString()
    }, { 
      status: 500 
    });
  }
} 