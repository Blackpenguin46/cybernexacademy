require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Initialize Discord client with all needed intents
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Message, Partials.Channel]
});

// Setup REST API client
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

// Setup Supabase client
const supabaseUrl = 'https://vxxpwaloyrtwvpmatzpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eHB3YWxveXJ0d3ZwbWF0enBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjA0NjQsImV4cCI6MjA1NTczNjQ2NH0.ef0feqGxtWeB9C2SLtPwEk_lcW8pcVngo7fz1SsznDM';
const supabase = createClient(supabaseUrl, supabaseKey);

// Channel to monitor
const CHANNEL_ID = '1299032261470978159';

// Set to track processed messages to avoid duplicates
const processedMessages = new Set();

// Debugging log function that writes to file and console
function debugLog(message) {
  const logMessage = `[${new Date().toISOString()}] ${message}`;
  console.log(logMessage);
  fs.appendFileSync('bot-debug.log', logMessage + '\n');
}

// Function to safely stringify objects with circular references
function safeStringify(obj) {
  const seen = new WeakSet();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return '[Circular]';
      }
      seen.add(value);
    }
    return value;
  }, 2);
}

// Function to extract content from message
async function extractAndSaveContent(message, source = 'websocket') {
  try {
    debugLog(`Processing message ${message.id} from ${source}`);
    
    // Skip if we've already processed this message
    if (processedMessages.has(message.id)) {
      debugLog(`Message ${message.id} already processed, skipping`);
      return;
    }
    
    // Mark as processed
    processedMessages.add(message.id);
    
    // Extract message content
    let newsTitle = '';
    let newsContent = '';
    let sourceInfo = '';
    
    debugLog(`Message content: "${message.content}"`);
    debugLog(`Has embeds: ${message.embeds?.length > 0}`);
    
    // Check for normal content first
    if (message.content && message.content.trim() !== '') {
      debugLog(`Message has text content: ${message.content}`);
      newsContent = message.content;
    }
    
    // Check for embeds
    if (message.embeds && message.embeds.length > 0) {
      debugLog(`Message has ${message.embeds.length} embeds`);
      
      const embed = message.embeds[0];
      debugLog(`Embed data: ${safeStringify(embed)}`);
      
      // Extract title
      if (embed.title) {
        newsTitle = embed.title;
        debugLog(`Found embed title: ${newsTitle}`);
      }
      
      // Extract description
      if (embed.description) {
        newsContent = embed.description;
        debugLog(`Found embed description: ${newsContent}`);
      }
      
      // Check for fields
      if (embed.fields && embed.fields.length > 0) {
        debugLog(`Embed has ${embed.fields.length} fields`);
        embed.fields.forEach((field, index) => {
          debugLog(`Field ${index}: ${field.name} - ${field.value}`);
          if (!newsContent) {
            newsContent = `${field.name}: ${field.value}`;
          } else {
            newsContent += `\n\n${field.name}: ${field.value}`;
          }
        });
      }
      
      // Check for author info
      if (embed.author && embed.author.name) {
        sourceInfo = embed.author.name;
        debugLog(`Found embed source: ${sourceInfo}`);
      }
      
      // Check for footer
      if (embed.footer && embed.footer.text) {
        debugLog(`Found embed footer: ${embed.footer.text}`);
        if (!sourceInfo) sourceInfo = embed.footer.text;
      }
    }
    
    // Force a default title if we have content but no title
    if (newsContent && !newsTitle) {
      newsTitle = "News Update";
    }
    
    // Combine title and content for storage
    let fullContent = '';
    if (newsTitle) fullContent += newsTitle + '\n\n';
    if (newsContent) fullContent += newsContent;
    if (sourceInfo) fullContent += `\n\nSource: ${sourceInfo}`;
    
    // Handle the case where we can't extract content normally
    if (fullContent.trim() === '') {
      debugLog('No content detected using standard methods, trying raw approach');
      
      // Try to extract content from the raw message data
      try {
        const rawData = safeStringify(message);
        
        // Look for content within the raw data using regex
        const titleRegex = /"title":"([^"]+)"/;
        const descRegex = /"description":"([^"]+)"/;
        
        const titleMatch = rawData.match(titleRegex);
        const descMatch = rawData.match(descRegex);
        
        if (titleMatch && titleMatch[1]) {
          newsTitle = titleMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
          debugLog(`Extracted title from raw data: ${newsTitle}`);
        }
        
        if (descMatch && descMatch[1]) {
          newsContent = descMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
          debugLog(`Extracted content from raw data: ${newsContent}`);
        }
        
        // Rebuild the full content
        fullContent = '';
        if (newsTitle) fullContent += newsTitle + '\n\n';
        if (newsContent) fullContent += newsContent;
      } catch (err) {
        debugLog(`Error in raw extraction: ${err.message}`);
      }
    }
    
    // Final fallback if we still have nothing
    if (fullContent.trim() === '') {
      debugLog('All extraction methods failed, using fallback');
      fullContent = `News Update\n\nUnable to extract content from this message type. This appears to be a complex message that requires additional handling.\n\nMessage ID: ${message.id}`;
    }
    
    // Insert into Supabase
    debugLog(`Inserting content into Supabase: ${fullContent}`);
    
    const { data, error } = await supabase
      .from('newsfeed')
      .insert([{ 
        author: message.author?.username || 'Discord Bot', 
        content: fullContent, 
        timestamp: new Date() 
      }]);
    
    if (error) {
      debugLog(`Error inserting to Supabase: ${error.message}`);
    } else {
      debugLog(`Successfully saved to Supabase: ${JSON.stringify(data)}`);
    }
  } catch (error) {
    debugLog(`Error processing message: ${error.message}`);
    debugLog(error.stack);
  }
}

// Function to fetch and process messages using REST API
async function fetchAndProcessMessages() {
  try {
    debugLog('Fetching recent messages using REST API');
    
    // Fetch the 10 most recent messages
    const messages = await rest.get(Routes.channelMessages(CHANNEL_ID, { limit: 10 }));
    debugLog(`Fetched ${messages.length} messages via REST API`);
    
    // Process each message
    for (const message of messages) {
      // Skip if already processed
      if (processedMessages.has(message.id)) continue;
      
      debugLog(`Processing message ${message.id} from REST API`);
      debugLog(`Raw message from REST API: ${safeStringify(message)}`);
      
      // Process this message
      await extractAndSaveContent(message, 'rest-api');
    }
    
    debugLog('Finished processing REST API messages');
  } catch (error) {
    debugLog(`Error fetching messages via REST API: ${error.message}`);
    debugLog(error.stack);
  }
}

// Ready event
client.once('ready', () => {
  debugLog('Bot is online!');
  
  // Immediately fetch messages
  fetchAndProcessMessages();
  
  // Set up periodic fetching
  setInterval(fetchAndProcessMessages, 60000); // Check every minute
});

// Handle errors
client.on('error', (error) => {
  debugLog(`Discord client error: ${error.message}`);
});

// WebSocket message handling
client.on('messageCreate', async (message) => {
  // Check if message is from the monitored channel
  if (message.channel.id !== CHANNEL_ID) return;
  
  debugLog(`Received message from ${message.author.username}`);
  debugLog(`Message via WebSocket: ${safeStringify(message)}`);
  
  // Process the message
  await extractAndSaveContent(message, 'websocket');
});

// Login to Discord
client.login(process.env.DISCORD_BOT_TOKEN).catch(error => {
  debugLog(`Failed to login: ${error.message}`);
});

// Handle process errors
process.on('uncaughtException', (error) => {
  debugLog(`Uncaught Exception: ${error.message}`);
  debugLog(error.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  debugLog(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
});