const https = require('https');
const fs = require('fs');

// Hardcode the discord servers since we can't directly import the TS file
const discordServers = [
  {
    name: "TryHackMe",
    url: "https://discord.gg/tryhackme"
  },
  {
    name: "Hack The Box",
    url: "https://discord.gg/hackthebox"
  },
  {
    name: "SANS",
    url: "https://discord.gg/sans"
  },
  {
    name: "PortSwigger",
    url: "https://discord.gg/portswigger"
  },
  {
    name: "Offensive Security",
    url: "https://discord.gg/offsec"
  },
  {
    name: "Snyk",
    url: "https://discord.gg/snyk"
  },
  {
    name: "Kali Linux",
    url: "https://discord.gg/kalilinux"
  },
  {
    name: "DEFCON",
    url: "https://discord.gg/defcon"
  },
  {
    name: "HackerOne",
    url: "https://discord.gg/hackerone"
  },
  {
    name: "Blue Team Village",
    url: "https://discord.gg/blueteamvillage"
  },
  {
    name: "Red Team Village",
    url: "https://discord.gg/redteamvillage"
  },
  {
    name: "Hak5",
    url: "https://discord.gg/hak5"
  },
  {
    name: "Black Hills InfoSec",
    url: "https://discord.gg/bhis"
  },
  {
    name: "NetworkChuck",
    url: "https://discord.gg/networkchuck"
  },
  {
    name: "Metasploit",
    url: "https://discord.gg/metasploit"
  }
];

// Function to check a Discord invite with proper headers
async function checkDiscordInvite(invite) {
  return new Promise((resolve) => {
    const inviteCode = invite.includes('discord.gg/') 
      ? invite.split('discord.gg/')[1]
      : invite.includes('discord.com/invite/') 
        ? invite.split('discord.com/invite/')[1] 
        : invite;
    
    // Use the Discord API directly to check the invite
    const options = {
      hostname: 'discord.com',
      path: `/api/v9/invites/${inviteCode}?with_counts=true`,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.guild) {
            resolve({ 
              valid: true, 
              name: response.guild.name,
              members: response.approximate_member_count 
                ? `${Math.floor(response.approximate_member_count/1000)}K+` 
                : 'Unknown'
            });
          } else {
            resolve({ valid: false, error: response.message || 'Unknown error' });
          }
        } catch (e) {
          resolve({ valid: false, error: 'Invalid response' });
        }
      });
    });
    
    req.on('error', (error) => {
      resolve({ valid: false, error: error.message });
    });
    
    req.end();
  });
}

async function main() {
  console.log('Verifying Discord invite links...\n');
  
  const results = {
    valid: [],
    invalid: []
  };
  
  for (const server of discordServers) {
    console.log(`Checking ${server.name}...`);
    const result = await checkDiscordInvite(server.url);
    
    if (result.valid) {
      console.log(`✅ ${server.name}: Valid (${result.members} members)`);
      results.valid.push({
        name: server.name,
        url: server.url,
        members: result.members
      });
    } else {
      console.log(`❌ ${server.name}: Invalid (${result.error})`);
      results.invalid.push({
        name: server.name,
        url: server.url,
        error: result.error
      });
    }
    
    // Add delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 2000));
  }
  
  console.log('\nSummary:');
  console.log(`✅ Valid: ${results.valid.length}`);
  console.log(`❌ Invalid: ${results.invalid.length}`);
  
  // Save results to file
  fs.writeFileSync('discord-verification-results.json', JSON.stringify(results, null, 2));
  console.log('\nResults saved to discord-verification-results.json');

  if (results.valid.length > 0) {
    // Create code to update
    const validServersCode = `
// Here are valid Discord invite links verified on ${new Date().toLocaleString()}
export const verifiedDiscordServers = [
${results.valid.map(server => `  {
    name: "${server.name}",
    url: "${server.url}",
    members: "${server.members}"
  }`).join(',\n')}
];`;
    fs.writeFileSync('verified-discord-servers.js', validServersCode);
    console.log('\nGenerated verified-discord-servers.js with working links');
  }
}

main(); 