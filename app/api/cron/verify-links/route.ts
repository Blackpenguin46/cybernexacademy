import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase with service role to bypass RLS
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Main link verification function
export async function GET(request: NextRequest) {
  // Check for API key for security
  const { searchParams } = new URL(request.url);
  const apiKey = searchParams.get('key');
  const configuredApiKey = process.env.NEXT_PUBLIC_LINK_VERIFICATION_API_KEY || '';
  
  // Skip detailed validation for preview deployments using placeholder values
  const isPreviewPlaceholder = configuredApiKey.includes('placeholder') || configuredApiKey.includes('preview');
  
  if (!isPreviewPlaceholder && apiKey !== configuredApiKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const results = {
      discord: await verifyDiscordLinks(),
      reddit: await verifyRedditLinks(),
      skool: await verifySkoolLinks(),
      timestamp: new Date().toISOString()
    };
    
    // Log the verification run
    await supabase
      .from('link_verification_log')
      .insert({
        verified_at: results.timestamp,
        discord_verified: results.discord.verified,
        discord_total: results.discord.total,
        reddit_verified: results.reddit.verified,
        reddit_total: results.reddit.total,
        skool_verified: results.skool.verified,
        skool_total: results.skool.total
      });
      
    return NextResponse.json(results);
  } catch (error) {
    console.error('Link verification error:', error);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}

// Verify Discord server links
async function verifyDiscordLinks() {
  // Get all Discord server links
  const { data: servers, error } = await supabase
    .from('discord_servers')
    .select('*');
    
  if (error) throw error;
  
  let verifiedCount = 0;
  
  // Process each server
  for (const server of servers || []) {
    try {
      const isValid = await isValidUrl(server.invite_link);
      
      // Update verification status
      await supabase
        .from('discord_servers')
        .update({ 
          is_verified: isValid,
          last_verified: new Date().toISOString()
        })
        .eq('id', server.id);
        
      if (isValid) verifiedCount++;
    } catch (error) {
      console.error(`Error verifying Discord server ${server.id}:`, error);
    }
  }
  
  return {
    total: servers?.length || 0,
    verified: verifiedCount
  };
}

// Verify Reddit community links
async function verifyRedditLinks() {
  // Get all Reddit community links
  const { data: communities, error } = await supabase
    .from('reddit_communities')
    .select('*');
    
  if (error) throw error;
  
  let verifiedCount = 0;
  
  // Process each community
  for (const community of communities || []) {
    try {
      const isValid = await isValidUrl(community.url);
      
      // Update verification status
      await supabase
        .from('reddit_communities')
        .update({ 
          is_verified: isValid,
          last_verified: new Date().toISOString()
        })
        .eq('id', community.id);
        
      if (isValid) verifiedCount++;
    } catch (error) {
      console.error(`Error verifying Reddit community ${community.id}:`, error);
    }
  }
  
  return {
    total: communities?.length || 0,
    verified: verifiedCount
  };
}

// Verify Skool community links
async function verifySkoolLinks() {
  // Get all Skool community links
  const { data: communities, error } = await supabase
    .from('skool_communities')
    .select('*');
    
  if (error) throw error;
  
  let verifiedCount = 0;
  
  // Process each community
  for (const community of communities || []) {
    try {
      const isValid = await isValidUrl(community.url);
      
      // Update verification status
      await supabase
        .from('skool_communities')
        .update({ 
          is_verified: isValid,
          last_verified: new Date().toISOString()
        })
        .eq('id', community.id);
        
      if (isValid) verifiedCount++;
    } catch (error) {
      console.error(`Error verifying Skool community ${community.id}:`, error);
    }
  }
  
  return {
    total: communities?.length || 0,
    verified: verifiedCount
  };
}

// Helper to check if a URL is still valid
async function isValidUrl(url: string): Promise<boolean> {
  if (!url) return false;
  
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      headers: {
        'User-Agent': 'Cybernex-Link-Verifier/1.0'
      }
    });
    
    // Valid responses are 2xx or 3xx (redirects)
    return response.status >= 200 && response.status < 400;
  } catch (error) {
    console.error(`Failed to validate URL ${url}:`, error);
    return false;
  }
} 