import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * Creates necessary tables for community resources if they don't exist
 */
async function setupTables() {
  // Create discord_servers table
  const { error: discordError } = await supabase.rpc('create_discord_servers_table', {});
  if (discordError && !discordError.message.includes('already exists')) {
    console.error('Error creating discord_servers table:', discordError);
    throw discordError;
  }

  // Create subreddits table
  const { error: redditError } = await supabase.rpc('create_subreddits_table', {});
  if (redditError && !redditError.message.includes('already exists')) {
    console.error('Error creating subreddits table:', redditError);
    throw redditError;
  }

  // Create skool_communities table
  const { error: skoolError } = await supabase.rpc('create_skool_communities_table', {});
  if (skoolError && !skoolError.message.includes('already exists')) {
    console.error('Error creating skool_communities table:', skoolError);
    throw skoolError;
  }

  return { success: true };
}

/**
 * Seeds initial data for Discord servers
 */
async function seedDiscordServers() {
  const discordServers = [
    {
      name: "The Cyber Mentor",
      description: "Heath Adams' community focused on practical ethical hacking and penetration testing training.",
      members: "100K+",
      url: "https://discord.gg/thecybermentor",
      categories: ["learning", "pentesting", "career"],
      iconUrl: null,
      lastUpdated: new Date().toISOString()
    },
    // Add more initial Discord servers...
  ];

  const { error } = await supabase.from('discord_servers').upsert(
    discordServers,
    { onConflict: 'url' }
  );

  if (error) {
    console.error('Error seeding Discord servers:', error);
    throw error;
  }

  return { success: true, count: discordServers.length };
}

/**
 * Seeds initial data for subreddits
 */
async function seedSubreddits() {
  const subreddits = [
    {
      name: "r/cybersecurity",
      description: "The central hub for cybersecurity professionals, featuring discussions on latest threats, tools, and career advice.",
      members: "584K+",
      url: "https://www.reddit.com/r/cybersecurity/",
      categories: ["general", "career"],
      iconUrl: null,
      lastUpdated: new Date().toISOString()
    },
    // Add more initial subreddits...
  ];

  const { error } = await supabase.from('subreddits').upsert(
    subreddits,
    { onConflict: 'url' }
  );

  if (error) {
    console.error('Error seeding subreddits:', error);
    throw error;
  }

  return { success: true, count: subreddits.length };
}

/**
 * Seeds initial data for Skool communities
 */
async function seedSkoolCommunities() {
  const skoolCommunities = [
    {
      name: "Cybersecurity Fundamentals",
      description: "Learn the core concepts and principles of cybersecurity for beginners.",
      students: "25K+",
      url: "https://www.skool.com/cybersecurityfundamentals",
      imageUrl: null,
      lastUpdated: new Date().toISOString()
    },
    // Add more initial Skool communities...
  ];

  const { error } = await supabase.from('skool_communities').upsert(
    skoolCommunities,
    { onConflict: 'url' }
  );

  if (error) {
    console.error('Error seeding Skool communities:', error);
    throw error;
  }

  return { success: true, count: skoolCommunities.length };
}

/**
 * POST handler for seeding community resources
 */
export async function POST() {
  try {
    // Set up tables first
    await setupTables();

    // Seed initial data
    const discordResult = await seedDiscordServers();
    const redditResult = await seedSubreddits();
    const skoolResult = await seedSkoolCommunities();

    return NextResponse.json({
      success: true,
      results: {
        discord: discordResult,
        reddit: redditResult,
        skool: skoolResult
      }
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'Failed to seed community resources' },
      { status: 500 }
    );
  }
} 