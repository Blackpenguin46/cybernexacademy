import { supabase } from '../lib/supabase';
import fs from 'fs';
import path from 'path';

// Import resource data
import { discordServers } from '../data/discord-servers';
import { redditCommunities } from '../data/reddit-communities';
import { skoolCommunities } from '../data/skool-communities';

async function populateDatabase() {
  console.log('Starting database population...');
  
  // Populate Discord servers
  console.log('Populating Discord servers...');
  const { data: existingDiscordServers, error: discordFetchError } = await supabase
    .from('discord_servers')
    .select('url');
    
  if (discordFetchError) {
    console.error('Error fetching existing Discord servers:', discordFetchError);
    return;
  }
  
  const existingDiscordUrls = new Set(existingDiscordServers?.map(server => server.url));
  
  for (const server of discordServers) {
    // Skip if already exists
    if (existingDiscordUrls.has(server.url)) {
      console.log(`Skipping existing Discord server: ${server.name}`);
      continue;
    }
    
    const { error } = await supabase
      .from('discord_servers')
      .insert({
        name: server.name,
        description: server.description,
        members: server.members,
        url: server.url,
        categories: server.categories,
        is_verified: false,
        last_verified: new Date().toISOString()
      });
      
    if (error) {
      console.error(`Error inserting Discord server ${server.name}:`, error);
    } else {
      console.log(`Inserted Discord server: ${server.name}`);
    }
  }
  
  // Populate Reddit communities
  console.log('Populating Reddit communities...');
  const { data: existingRedditCommunities, error: redditFetchError } = await supabase
    .from('reddit_communities')
    .select('url');
    
  if (redditFetchError) {
    console.error('Error fetching existing Reddit communities:', redditFetchError);
    return;
  }
  
  const existingRedditUrls = new Set(existingRedditCommunities?.map(community => community.url));
  
  for (const community of redditCommunities) {
    // Skip if already exists
    if (existingRedditUrls.has(community.url)) {
      console.log(`Skipping existing Reddit community: ${community.name}`);
      continue;
    }
    
    const { error } = await supabase
      .from('reddit_communities')
      .insert({
        name: community.name,
        description: community.description,
        members: community.members,
        url: community.url,
        categories: community.categories,
        is_verified: false,
        last_verified: new Date().toISOString()
      });
      
    if (error) {
      console.error(`Error inserting Reddit community ${community.name}:`, error);
    } else {
      console.log(`Inserted Reddit community: ${community.name}`);
    }
  }
  
  // Populate Skool communities
  console.log('Populating Skool communities...');
  const { data: existingSkoolCommunities, error: skoolFetchError } = await supabase
    .from('skool_communities')
    .select('url');
    
  if (skoolFetchError) {
    console.error('Error fetching existing Skool communities:', skoolFetchError);
    return;
  }
  
  const existingSkoolUrls = new Set(existingSkoolCommunities?.map(community => community.url));
  
  for (const community of skoolCommunities) {
    // Skip if already exists
    if (existingSkoolUrls.has(community.url)) {
      console.log(`Skipping existing Skool community: ${community.name}`);
      continue;
    }
    
    const { error } = await supabase
      .from('skool_communities')
      .insert({
        name: community.name,
        description: community.description,
        students: community.students,
        url: community.url,
        categories: community.categories || [],
        is_verified: false,
        last_verified: new Date().toISOString()
      });
      
    if (error) {
      console.error(`Error inserting Skool community ${community.name}:`, error);
    } else {
      console.log(`Inserted Skool community: ${community.name}`);
    }
  }
  
  console.log('Database population completed!');
}

// Execute the function
populateDatabase()
  .then(() => {
    console.log('Script completed successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
  }); 