require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { createClient } = require('@supabase/supabase-js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const supabaseUrl = 'https://vxxpwaloyrtwvpmatzpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4eHB3YWxveXJ0d3ZwbWF0enBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjA0NjQsImV4cCI6MjA1NTczNjQ2NH0.ef0feqGxtWeB9C2SLtPwEk_lcW8pcVngo7fz1SsznDM';
const supabase = createClient(supabaseUrl, supabaseKey);

const CHANNEL_ID = '1299032261470978159'; // Your Channel ID

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', async message => {
    if (message.channel.id === CHANNEL_ID) {
        console.log(`Message from ${message.author.username}: ${message.content}`);
        // Insert the message into Supabase
        const { error } = await supabase
            .from('newsfeed')
            .insert([{ author: message.author.username, content: message.content, timestamp: new Date() }]);
        if (error) console.error('Error inserting message:', error);
    }
});

client.login(process.env.DISCORD_BOT_TOKEN); 