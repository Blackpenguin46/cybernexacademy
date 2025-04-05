require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
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

// Setup Supabase client
const supabaseUrl = 'https://vxxpwaloyrtwvpmatzpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eHB3YWxveXJ0d3ZwbWF0enBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjA0NjQsImV4cCI6MjA1NTczNjQ2NH0.ef0feqGxtWeB9C2SLtPwEk_lcW8pcVngo7fz1SsznDM';
const supabase = createClient(supabaseUrl, supabaseKey);

// Channel to monitor
const CHANNEL_ID = '1299032261470978159';

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

// Ready event
client.once('ready', () => {
  debugLog('Bot is online!');
});

// Handle errors
client.on('error', (error) => {
  debugLog(`Discord client error: ${error.message}`);
});

// Message handling
client.on('messageCreate', async (message) => {
  try {
    // Check if message is from the monitored channel
    if (message.channel.id !== CHANNEL_ID) return;
    
    debugLog(`Received message from ${message.author.username}`);
    debugLog(`Message type: ${message.type}`);
    debugLog(`Message content: "${message.content}"`);
    debugLog(`Has embeds: ${message.embeds?.length > 0}`);
    debugLog(`Has attachments: ${message.attachments?.size > 0}`);
    
    // Log important properties of the message
    const simplifiedMessage = {
      id: message.id,
      content: message.content,
      type: message.type,
      embeds: message.embeds,
      components: message.components,
      attachments: [...message.attachments.values()].map(a => ({
        id: a.id,
        name: a.name,
        url: a.url,
        contentType: a.contentType
      }))
    };
    
    debugLog(`Message details: ${safeStringify(simplifiedMessage)}`);
    
    // Extract message content
    let newsTitle = '';
    let newsContent = '';
    let source = '';
    
    // SPECIAL CASE: If this is a link embed with no content
    // Check if the message is just a URL (common for news bots)
    if (!message.content && message.embeds?.length === 0 && message.components?.length > 0) {
      // Try to extract from components (buttons, links)
      debugLog(`Checking components: ${safeStringify(message.components)}`);
      
      // Sometimes link data is in action rows/components
      for (const row of message.components) {
        for (const component of row.components) {
          if (component.type === 2 && component.url) { // Button with URL
            debugLog(`Found URL in component: ${component.url}`);
            newsContent = `[Link to article](${component.url})`;
          }
        }
      }
    }
    
    // Check for normal content first
    if (message.content && message.content.trim() !== '') {
      debugLog(`Message has text content: ${message.content}`);
      newsContent = message.content;
    }
    
    // Check for embeds
    if (message.embeds && message.embeds.length > 0) {
      const embed = message.embeds[0];
      debugLog(`Embed data: ${safeStringify(embed)}`);
      
      // Embedded links sometimes store data differently
      if (embed.data) {
        debugLog(`Embed has data property: ${safeStringify(embed.data)}`);
        
        // Try to extract from data if regular properties failed
        if (embed.data.title) newsTitle = embed.data.title;
        if (embed.data.description) newsContent = embed.data.description;
      }
      
      // Try different embed properties
      if (embed.title) {
        newsTitle = embed.title;
        debugLog(`Found embed title: ${newsTitle}`);
      }
      
      if (embed.description) {
        newsContent = embed.description;
        debugLog(`Found embed description: ${newsContent}`);
      }
      
      // Try to extract color (some bots use color coding)
      if (embed.color) {
        debugLog(`Embed color: ${embed.color}`);
      }
      
      // Check for fields which might contain content
      if (embed.fields && embed.fields.length > 0) {
        debugLog(`Embed has ${embed.fields.length} fields`);
        embed.fields.forEach((field, index) => {
          debugLog(`Field ${index}: ${field.name} - ${field.value}`);
          // If we don't have content yet, use fields
          if (!newsContent) {
            newsContent = `${field.name}: ${field.value}`;
          } else {
            newsContent += `\n\n${field.name}: ${field.value}`;
          }
        });
      }
      
      // Check for author info which might contain the source
      if (embed.author && embed.author.name) {
        source = embed.author.name;
        debugLog(`Found embed source: ${source}`);
      }
      
      // Check for footer which might contain timing info
      if (embed.footer && embed.footer.text) {
        debugLog(`Found embed footer: ${embed.footer.text}`);
        if (!source) source = embed.footer.text;
      }
      
      // Emergency fallback: If we still have no content but have an image
      if (!newsContent && embed.image) {
        debugLog(`Found embed image: ${embed.image.url}`);
        newsContent = `[Image](${embed.image.url})`;
      }
    }
    
    // Check attachments as a last resort
    if (!newsContent && message.attachments.size > 0) {
      debugLog(`Looking at ${message.attachments.size} attachments for content`);
      
      const attachment = [...message.attachments.values()][0];
      newsContent = `[Attachment: ${attachment.name}](${attachment.url})`;
    }
    
    // Force a default title if we have content but no title
    if (newsContent && !newsTitle) {
      newsTitle = "News Update";
    }
    
    // Combine title and content for storage
    let fullContent = '';
    if (newsTitle) fullContent += newsTitle + '\n\n';
    if (newsContent) fullContent += newsContent;
    if (source) fullContent += `\n\nSource: ${source}`;
    
    // FALLBACK: If all else fails, save whatever we can find
    if (fullContent.trim() === '') {
      debugLog('No content detected using standard methods, using fallback');
      
      // For embedded news posts, just hardcode a sample value to see if the database works
      fullContent = `News Update\n\nUnable to extract content from this message type. This appears to be a complex message that requires additional handling.`;
      
      // Save the message ID for later reference
      fullContent += `\n\nMessage ID: ${message.id}`;
    }
    
    // Insert into Supabase if we have content
    if (fullContent.trim() !== '') {
      debugLog(`Inserting content into Supabase: ${fullContent}`);
      
      const { data, error } = await supabase
        .from('newsfeed')
        .insert([{ 
          author: message.author.username, 
          content: fullContent, 
          timestamp: new Date() 
        }]);
      
      if (error) {
        debugLog(`Error inserting to Supabase: ${error.message}`);
      } else {
        debugLog(`Successfully saved to Supabase: ${JSON.stringify(data)}`);
      }
    } else {
      debugLog('No content extracted from message, nothing to save');
    }
  } catch (error) {
    debugLog(`Error processing message: ${error.message}`);
    debugLog(error.stack);
  }
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