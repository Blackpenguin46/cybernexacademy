import { NextResponse } from 'next/server';

// This would ideally come from a database or external API
const getDiscordServers = async () => {
  // In a real implementation, this could fetch from:
  // - A database (Supabase)
  // - Discord API (with proper authentication)
  // - A third-party service that aggregates Discord servers
  
  // Mock data for demonstration
  return [
    {
      name: "The Cyber Mentor",
      description: "Heath Adams' community focused on practical ethical hacking and penetration testing training.",
      members: "100K+",
      url: "https://discord.gg/thecybermentor",
      categories: ["learning", "pentesting", "career"],
      lastVerified: new Date().toISOString()
    },
    // Other servers would be fetched from the data source
  ];
};

export async function GET() {
  try {
    const servers = await getDiscordServers();
    
    return NextResponse.json({ 
      success: true, 
      count: servers.length,
      data: servers,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching Discord servers:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch Discord servers' },
      { status: 500 }
    );
  }
} 