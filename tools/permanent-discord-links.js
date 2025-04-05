/**
 * PERMANENT DISCORD LINK FINDER
 * 
 * This script utilizes multiple strategies to find permanent/official Discord invite links:
 * 1. Checks official websites of cybersecurity organizations
 * 2. Verifies links are valid by making real HTTP requests
 * 3. Outputs verified links in a format ready for our app
 * 
 * Most Discord invites expire, but official websites typically maintain permanent links.
 */

const https = require('https');
const fs = require('fs');

// Permanent Discord links from official websites
// These are more reliable than general invite links
const PERMANENT_DISCORD_SOURCES = [
  // Major platforms with official invites
  { 
    name: "TryHackMe",
    url: "https://tryhackme.com/discord",
    directInvite: "https://discord.gg/tryhackme",
    description: "Learning community focused on hands-on cybersecurity training through practical labs and exercises.",
    categories: ["learning", "ctf", "pentesting"]
  },
  { 
    name: "Hack The Box",
    url: "https://www.hackthebox.com/",
    directInvite: "https://discord.gg/hackthebox",
    description: "Community for the popular Hack The Box platform for penetration testing and security challenges.",
    categories: ["learning", "ctf", "pentesting"]
  },
  { 
    name: "SANS",
    url: "https://www.sans.org/",
    directInvite: "https://discord.gg/sans",
    description: "Community for SANS courses and certifications, with discussions on various security topics.",
    categories: ["learning", "certification", "career"]
  },
  { 
    name: "PortSwigger",
    url: "https://portswigger.net/",
    directInvite: "https://discord.gg/portswigger",
    description: "Community for users of Burp Suite and web security testing, with discussions on web vulnerabilities.",
    categories: ["web_security", "pentesting", "tools"]
  },
  { 
    name: "Offensive Security",
    url: "https://www.offensive-security.com/",
    directInvite: "https://discord.gg/offsec",
    description: "Community for Offensive Security courses and certifications like OSCP and Kali Linux.",
    categories: ["pentesting", "certification", "learning"]
  },
  { 
    name: "Snyk",
    url: "https://snyk.io/",
    directInvite: "https://discord.gg/snyk",
    description: "Community focused on developer security and integrating security into the development lifecycle.",
    categories: ["development", "devsecops", "application_security"]
  },
  {
    name: "Kali Linux",
    url: "https://www.kali.org/",
    directInvite: "https://discord.gg/kalilinux",
    description: "Official community for Kali Linux, the popular penetration testing and ethical hacking Linux distribution.",
    categories: ["technical", "pentesting", "learning"]
  },
  {
    name: "DEFCON",
    url: "https://defcon.org/",
    directInvite: "https://discord.gg/defcon",
    description: "The official Discord for DEFCON, one of the world's largest hacking conferences.",
    categories: ["community", "technical", "learning"]
  },
  {
    name: "HackerOne",
    url: "https://www.hackerone.com/",
    directInvite: "https://discord.gg/hackerone",
    description: "Community for bug bounty hunters and security researchers using the HackerOne platform.",
    categories: ["bug_bounty", "pentesting", "career"]
  },
  { 
    name: "Blue Team Village",
    url: "https://blueteamvillage.org/",
    directInvite: "https://discord.gg/blueteamvillage",
    description: "Community focused on defensive security, threat detection, and incident response.",
    categories: ["blue_team", "defense", "technical"]
  },
  { 
    name: "Red Team Village",
    url: "https://redteamvillage.io/",
    directInvite: "https://discord.gg/redteamvillage", 
    description: "Community focused on offensive security, red teaming, and adversary emulation.",
    categories: ["red_team", "pentesting", "technical"]
  },
  { 
    name: "Hak5",
    url: "https://shop.hak5.org/",
    directInvite: "https://discord.gg/hak5",
    description: "Community centered around Hak5 security tools and products with discussions on hardware hacking.",
    categories: ["technical", "hardware", "tools"]
  },
  { 
    name: "Black Hills InfoSec",
    url: "https://www.blackhillsinfosec.com/",
    directInvite: "https://discord.gg/bhis",
    description: "Community led by the Black Hills Information Security team with free training resources.",
    categories: ["learning", "blue_team", "career"]
  },
  { 
    name: "NetworkChuck",
    url: "https://networkchuck.com/",
    directInvite: "https://discord.gg/networkchuck",
    description: "Community for IT enthusiasts with focus on networking, cloud technologies, and cybersecurity.",
    categories: ["learning", "networking", "community"]
  },
  {
    name: "Metasploit",
    url: "https://www.metasploit.com/",
    directInvite: "https://discord.gg/metasploit",
    description: "Community focused on the Metasploit Framework, a powerful penetration testing and exploitation tool.",
    categories: ["pentesting", "tools", "technical"]
  }
];

// Function to check if a Discord invite is valid
async function checkDiscordInviteValidity(inviteUrl) {
  return new Promise((resolve) => {
    // Normalize URL format
    const normalizedUrl = inviteUrl.includes('/invite/') 
      ? inviteUrl 
      : inviteUrl.replace('discord.gg/', 'discord.com/invite/');
    
    const req = https.get(normalizedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        // Check for invalid invite indicators
        const isInvalid = 
          data.includes('invite-invalid') || 
          data.includes('This invite may be expired') ||
          data.includes('Invalid Invite');
        
        if (res.statusCode === 200 && !isInvalid) {
          // Try to extract member count from the page
          let memberCount = "Unknown";
          const memberCountMatch = data.match(/([0-9,.]+)\s+Members|([0-9,.]+)\s+Member|([0-9,.]+)\s+Online/i);
          if (memberCountMatch) {
            const countString = memberCountMatch[1] || memberCountMatch[2] || memberCountMatch[3];
            const parsedCount = parseInt(countString.replace(/,/g, ''));
            if (!isNaN(parsedCount)) {
              memberCount = parsedCount > 1000 ? `${Math.floor(parsedCount / 1000)}K+` : parsedCount.toString();
            }
          }
          
          resolve({ valid: true, memberCount });
        } else {
          resolve({ valid: false });
        }
      });
    });
    
    req.on('error', () => resolve({ valid: false }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ valid: false });
    });
  });
}

// Function to check site for Discord links
async function findDiscordLinkOnWebsite(siteUrl) {
  return new Promise((resolve) => {
    // This is a simplified approach - in a real environment,
    // you'd use a proper HTML parser and handle redirects
    const req = https.get(siteUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        // Look for Discord links in the HTML
        const discordLinkMatch = data.match(/https:\/\/(discord\.gg|discord\.com\/invite)\/([a-zA-Z0-9-]+)/);
        if (discordLinkMatch) {
          resolve({ found: true, url: discordLinkMatch[0] });
        } else {
          resolve({ found: false });
        }
      });
    });
    
    req.on('error', () => resolve({ found: false }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ found: false });
    });
  });
}

async function main() {
  console.log("Finding and verifying permanent Discord links...\n");
  
  const verifiedLinks = [];
  
  for (const source of PERMANENT_DISCORD_SOURCES) {
    try {
      console.log(`Checking ${source.name}...`);
      
      // Check the direct invite first
      const inviteCheck = await checkDiscordInviteValidity(source.directInvite);
      
      if (inviteCheck.valid) {
        console.log(`✅ ${source.name}: Direct invite valid (${inviteCheck.memberCount} members)`);
        verifiedLinks.push({
          ...source,
          members: inviteCheck.memberCount,
          verifiedUrl: source.directInvite
        });
        continue;
      }
      
      // If direct invite fails, try finding on website
      console.log(`  Direct invite invalid, checking website: ${source.url}`);
      const websiteCheck = await findDiscordLinkOnWebsite(source.url);
      
      if (websiteCheck.found) {
        console.log(`  Found Discord link on website: ${websiteCheck.url}`);
        const webInviteCheck = await checkDiscordInviteValidity(websiteCheck.url);
        
        if (webInviteCheck.valid) {
          console.log(`✅ ${source.name}: Website link valid (${webInviteCheck.memberCount} members)`);
          verifiedLinks.push({
            ...source,
            members: webInviteCheck.memberCount,
            verifiedUrl: websiteCheck.url
          });
          continue;
        }
      }
      
      console.log(`❌ ${source.name}: No valid Discord invite found`);
    } catch (err) {
      console.error(`Error checking ${source.name}:`, err.message);
    }
    
    // Add delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 5000));
  }
  
  console.log(`\nFound ${verifiedLinks.length} verified permanent Discord links`);
  
  // Generate TypeScript for our discord-servers.ts
  const discordServersTsContent = `export interface DiscordServer {
  name: string;
  description: string;
  members: string;
  url: string;
  categories: string[];
}

export const discordServers: DiscordServer[] = [
${verifiedLinks.map(link => `  {
    name: "${link.name}",
    description: "${link.description}",
    members: "${link.members}",
    url: "${link.verifiedUrl || link.directInvite}",
    categories: ${JSON.stringify(link.categories)}
  }`).join(',\n')}
];`;

  fs.writeFileSync('permanent-discord-servers.ts', discordServersTsContent);
  console.log("Generated permanent-discord-servers.ts with verified links");
}

main(); 