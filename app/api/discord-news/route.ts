import { NextResponse } from 'next/server';

// Example message format for fallback when Discord API fails
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

export async function GET() {
  // Use the specific channel ID for testing
  const channelId = '1299032261470978159'; // Hardcoded for testing
  console.log('Fetching Discord news from specific channel ID:', channelId);
  
  // Print partial token for debugging (first 5 chars only, for security)
  const botToken = process.env.DISCORD_BOT_TOKEN || '';
  console.log('Bot token starts with:', botToken.substring(0, 5) + '...');
  console.log('Bot token length:', botToken.length);
  
  // Fallback news data in case of API failure
  const fallbackData = {
    articles: [
      {
        id: 'fallback-1',
        content: '[ALERT] Critical vulnerability discovered in widely used OpenSSL library. Update to version 3.2.1 immediately to patch potential remote code execution vulnerability.',
        author: 'Security Bot',
        timestamp: new Date().toISOString(),
        attachments: []
      },
      {
        id: 'fallback-2',
        content: '[THREAT] New ransomware campaign targeting healthcare organizations detected. Phishing emails contain malicious attachments disguised as patient records.',
        author: 'Security Bot',
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        attachments: []
      },
      {
        id: 'fallback-3',
        content: '[UPDATE] Microsoft has released patches for 3 critical vulnerabilities affecting Windows Server. CVE-2023-xxxxx allows privilege escalation. Apply updates ASAP.',
        author: 'Security Bot',
        timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        attachments: []
      }
    ],
    source: 'fallback',
    message: 'Could not connect to Discord API or no messages found.'
  };
  
  try {
    if (!process.env.DISCORD_BOT_TOKEN) {
      console.error('Missing bot token for Discord API');
      return NextResponse.json({
        ...fallbackData,
        message: 'Missing Discord bot token configuration.'
      });
    }
    
    const token = process.env.DISCORD_BOT_TOKEN;
    
    // Try different API formats (v10, v9, etc)
    const apiFormats = [
      {
        url: `https://discord.com/api/v10/channels/${channelId}/messages?limit=100`,
        description: "Discord API v10"
      },
      {
        url: `https://discord.com/api/v9/channels/${channelId}/messages?limit=100`,
        description: "Discord API v9"
      },
      {
        url: `https://discord.com/api/channels/${channelId}/messages?limit=100`,
        description: "Discord API (no version)"
      }
    ];
    
    let lastError = null;
    let messages = null;
    
    // Try each API format until one works
    for (const api of apiFormats) {
      try {
        console.log(`Trying ${api.description}: ${api.url}`);
        
        const headers = {
          'Authorization': `Bot ${token}`,
          'Content-Type': 'application/json'
        };
        
        const response = await fetch(api.url, {
          headers,
          cache: 'no-store' // Disable caching for fresh results
        });
        
        console.log(`${api.description} response status:`, response.status, response.statusText);
        
        // Extract headers safely
        const responseHeaders: Record<string, string> = {};
        response.headers.forEach((value, key) => {
          responseHeaders[key] = value;
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`${api.description} error details:`, errorText);
          lastError = `${api.description} error: ${response.status} - ${response.statusText}`;
          continue; // Try next API format
        }
        
        // If we got here, the request was successful
        messages = await response.json();
        console.log(`${api.description} success! Received ${messages.length} messages`);
        break; // Exit the loop, we got our messages
      
      } catch (apiError) {
        console.error(`Error with ${api.description}:`, apiError);
        lastError = `${api.description} fetch error: ${apiError instanceof Error ? apiError.message : String(apiError)}`;
        // Continue to next API format
      }
    }
    
    // If we tried all formats and none worked
    if (!messages) {
      console.error("All Discord API formats failed:", lastError);
      return NextResponse.json({
        ...fallbackData,
        message: `Discord API unavailable: ${lastError}`
      });
    }
    
    // Process messages
    console.log(`Processing ${messages.length} messages from Discord channel`);
    
    // Log message details for debugging
    messages.forEach((msg: any, index: number) => {
      console.log(`Message ${index + 1}:`, {
        id: msg.id,
        author: msg.author?.username || 'Unknown',
        content: msg.content?.substring(0, 30) + '...' || 'No content',
        hasAttachments: msg.attachments?.length > 0
      });
    });

    // Filter messages with actual content
    const filteredMessages = messages.filter((msg: any) => {
      // Now include ANY message with content, not just from bots
      const hasContent = msg.content && msg.content.trim().length > 0;
      return hasContent;
    });
    
    console.log(`Found ${filteredMessages.length} valid messages out of ${messages.length} total messages`);

    if (filteredMessages.length === 0) {
      console.log('No messages with content found, using fallback data');
      return NextResponse.json({
        ...fallbackData,
        message: 'No messages found in the Discord channel.'
      });
    }

    // Map to a clean format for the frontend
    const articles = filteredMessages.map((msg: any) => ({
      id: msg.id,
      content: msg.content,
      author: msg.author?.username || 'Unknown',
      timestamp: msg.timestamp,
      attachments: msg.attachments || [],
    }));

    return NextResponse.json({ 
      articles,
      source: 'discord',
      count: articles.length,
      message: 'Successfully retrieved Discord messages.'
    });
    
  } catch (error) {
    console.error('Error fetching Discord news:', error);
    return NextResponse.json({
      ...fallbackData,
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
} 