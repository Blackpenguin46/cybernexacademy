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
const rest = new REST({ version: '10' });
if (process.env.DISCORD_BOT_TOKEN) {
  rest.setToken(process.env.DISCORD_BOT_TOKEN);
  debugLog('REST API token set successfully');
} else {
  debugLog('ERROR: DISCORD_BOT_TOKEN not found in environment');
}

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

// Function to extract URLs from text content
function extractUrls(text) {
  if (!text) return [];
  // Regular expression to find URLs in text
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex) || [];
}

// Helper function to extract embed content
function extractEmbedContent(embed) {
  debugLog('Extracting content from embed');
  
  let content = {
    title: '',
    description: '',
    urls: [],
    fullContent: ''
  };
  
  // Extract from title
  if (embed.title) {
    content.title = embed.title;
    content.urls = content.urls.concat(extractUrls(embed.title));
  }
  
  // Extract from description
  if (embed.description) {
    content.description = embed.description;
    content.urls = content.urls.concat(extractUrls(embed.description));
  }
  
  // Extract from fields
  if (embed.fields && embed.fields.length > 0) {
    embed.fields.forEach(field => {
      if (content.description) content.description += '\n\n';
      content.description += `${field.name}: ${field.value}`;
      content.urls = content.urls.concat(extractUrls(field.name));
      content.urls = content.urls.concat(extractUrls(field.value));
    });
  }
  
  // Additional sources of URLs
  if (embed.url) content.urls.push(embed.url);
  if (embed.image && embed.image.url) content.urls.push(embed.image.url);
  if (embed.thumbnail && embed.thumbnail.url) content.urls.push(embed.thumbnail.url);
  
  // Build the full content
  content.fullContent = content.title ? content.title + '\n\n' : '';
  content.fullContent += content.description || '';
  
  return content;
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
    
    // Initialize variables
    let newsTitle = '';
    let newsContent = '';
    let urls = [];
    
    // Handle different message types based on source
    if (source === 'rest-api') {
      debugLog('Processing as REST API message');
      
      // Extract basic content
      if (message.content) {
        newsContent = message.content;
        urls = urls.concat(extractUrls(message.content));
      }
      
      // Handle embeds from REST API
      if (message.embeds && message.embeds.length > 0) {
        debugLog(`Message has ${message.embeds.length} embeds via REST API`);
        
        message.embeds.forEach(embed => {
          const embedContent = extractEmbedContent(embed);
          
          if (embedContent.title && !newsTitle) {
            newsTitle = embedContent.title;
          }
          
          if (embedContent.description) {
            if (newsContent) newsContent += '\n\n';
            newsContent += embedContent.description;
          }
          
          urls = urls.concat(embedContent.urls);
        });
      }
      
      // Handle attachments
      if (message.attachments && message.attachments.length > 0) {
        message.attachments.forEach(attachment => {
          if (attachment.url) urls.push(attachment.url);
        });
      }
    } else {
      // WebSocket message handling (Discord.js objects)
      if (message.content) {
        newsContent = message.content;
        urls = urls.concat(extractUrls(message.content));
      }
      
      // Handle Discord.js embeds
      if (message.embeds && message.embeds.length > 0) {
        debugLog(`Message has ${message.embeds.length} embeds via WebSocket`);
        
        message.embeds.forEach(embed => {
          const embedContent = extractEmbedContent(embed);
          
          if (embedContent.title && !newsTitle) {
            newsTitle = embedContent.title;
          }
          
          if (embedContent.description) {
            if (newsContent) newsContent += '\n\n';
            newsContent += embedContent.description;
          }
          
          urls = urls.concat(embedContent.urls);
        });
      }
      
      // Handle attachments
      if (message.attachments && message.attachments.size > 0) {
        message.attachments.forEach(attachment => {
          if (attachment.url) urls.push(attachment.url);
        });
      }
    }
    
    // Force a default title if we have content but no title
    if (!newsTitle) {
      newsTitle = message.author?.username === 'CyberSecurity Bot' ? "Cybersecurity News" : "News Update";
    }
    
    // Combine title and content for storage
    let fullContent = newsTitle + '\n\n';
    if (newsContent) fullContent += newsContent;
    
    // Remove duplicate URLs
    urls = [...new Set(urls)];
    debugLog(`Extracted ${urls.length} unique URLs`);
    
    // Final fallback if we still have nothing meaningful
    if (fullContent.trim() === newsTitle.trim()) {
      debugLog('Extraction produced empty content, using raw approach');
      
      try {
        // Try to access raw message data
        let rawContent = '';
        
        if (source === 'rest-api' && message.embeds && message.embeds.length > 0) {
          // REST API handling for image embeds
          const embed = message.embeds[0];
          if (embed.image) {
            rawContent = `[Image] ${embed.image.url}`;
            if (!urls.includes(embed.image.url)) urls.push(embed.image.url);
          } else if (embed.thumbnail) {
            rawContent = `[Thumbnail] ${embed.thumbnail.url}`;
            if (!urls.includes(embed.thumbnail.url)) urls.push(embed.thumbnail.url);
          }
        } else if (source === 'websocket') {
          // WebSocket handling for complex embeds
          if (message.embeds && message.embeds.length > 0) {
            const embed = message.embeds[0];
            // Try to extract from raw data
            if (embed.data && JSON.stringify(embed.data).length > 2) {
              rawContent = `Complex embed message with data: ${JSON.stringify(embed.data).substring(0, 100)}...`;
              
              // Extract any URLs from the raw data
              const rawDataStr = JSON.stringify(embed.data);
              const urlMatches = rawDataStr.match(/"url":"(https?:\/\/[^"]+)"/g) || [];
              urlMatches.forEach(match => {
                const url = match.replace(/"url":"/, '').replace(/"$/, '');
                if (!urls.includes(url)) urls.push(url);
              });
            }
          }
        }
        
        if (rawContent) {
          fullContent += '\n\n' + rawContent;
        }
      } catch (err) {
        debugLog(`Error in raw extraction: ${err.message}`);
      }
    }
    
    // Add URLs if found and not already in the content
    if (urls.length > 0) {
      fullContent += '\n\nLinks:';
      urls.forEach(url => {
        fullContent += `\n${url}`;
      });
    }
    
    // Final fallback if everything failed
    if (fullContent.trim() === newsTitle.trim()) {
      debugLog('All extraction methods failed, using fallback with message ID');
      fullContent = `${newsTitle}\n\nUnable to extract detailed content from this message type. This appears to be a complex message that requires additional handling.\n\nMessage ID: ${message.id}`;
    }
    
    // Insert into Supabase
    debugLog(`Inserting content into Supabase with ${urls.length} URLs`);
    
    const { data, error } = await supabase
      .from('newsfeed')
      .insert([{ 
        author: message.author?.username || 'Discord Bot', 
        content: fullContent, 
        timestamp: new Date(),
        urls: urls.length > 0 ? urls : null  // Store URLs as JSON array if found
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