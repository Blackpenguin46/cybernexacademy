import { NextResponse } from 'next/server';

// POST handler for seeding community resources
export async function POST() {
  // Skip actual seeding during build time to avoid environment variable errors
  if (process.env.VERCEL_ENV !== 'production') {
    return NextResponse.json({ 
      success: true, 
      message: 'Skipping seed operation during build time' 
    });
  }

  try {
    // Dynamically import Supabase only when needed
    const { supabase } = await import('@/lib/supabase');
    
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

    // Seed Discord servers
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

    const { error: discordSeedError } = await supabase
      .from('discord_servers')
      .upsert(discordServers, { onConflict: 'url' });

    if (discordSeedError) {
      console.error('Error seeding Discord servers:', discordSeedError);
      throw discordSeedError;
    }

    // Seed subreddits
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

    const { error: redditSeedError } = await supabase
      .from('subreddits')
      .upsert(subreddits, { onConflict: 'url' });

    if (redditSeedError) {
      console.error('Error seeding subreddits:', redditSeedError);
      throw redditSeedError;
    }

    // Seed Skool communities
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

    const { error: skoolSeedError } = await supabase
      .from('skool_communities')
      .upsert(skoolCommunities, { onConflict: 'url' });

    if (skoolSeedError) {
      console.error('Error seeding Skool communities:', skoolSeedError);
      throw skoolSeedError;
    }

    return NextResponse.json({
      success: true,
      results: {
        discord: { success: true, count: discordServers.length },
        reddit: { success: true, count: subreddits.length },
        skool: { success: true, count: skoolCommunities.length }
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