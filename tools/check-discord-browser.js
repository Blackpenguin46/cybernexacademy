const https = require('https');
const fs = require('fs');

// List of Discord invite links we want to check
// These are the ones that are most likely to be working based on our previous experience
const discordLinksToCheck = [
  // Known working links we want to keep
  "https://discord.gg/owlsec",
  "https://discord.com/invite/tcm",
  "https://discord.com/invite/darknetdiaries",
  "https://discord.gg/tryhackme",
  "https://discord.com/invite/hackthebox",
  "https://discord.gg/hak5",
  "https://discord.gg/blueteamvillage",
  "https://discord.gg/defcon",
  "https://discord.com/invite/davidbombal",
  "https://discord.gg/networkchuck",
  "https://discord.gg/infosecprep",
  "https://discord.gg/blackhat",
  "https://discord.gg/malwaretech",
  "https://discord.gg/bugbounty",
  "https://discord.gg/cscareerhub",
  // Additional links we want to verify
  "https://discord.gg/security",
  "https://discord.gg/kalilinux",
  "https://discord.gg/metasploit",
  "https://discord.gg/portswigger",
  "https://discord.gg/pfsense",
  "https://discord.com/invite/sans",
  "https://discord.gg/hackerone",
  "https://discord.gg/securecodewarrior",
  "https://discord.gg/snyk",
  "https://discord.gg/offsec",
  "https://discord.gg/thepentestingacademy", 
  "https://discord.gg/thminsider",
  "https://discord.gg/letstalkc2",
  "https://discord.gg/hacker101",
  "https://discord.gg/hackthissite",
  "https://discord.gg/rangeforce"
];

// This function checks if an invite page loads properly (not redirecting to invite-invalid)
function checkDiscordInvite(url) {
  return new Promise((resolve) => {
    // Allow both URL formats
    const normalizedUrl = url.includes('/invite/') ? url : url.replace('discord.gg/', 'discord.com/invite/');
    
    const req = https.get(normalizedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
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
        // Check if it's a valid page by looking for "invite-invalid" text or redirects
        const isInvalid = data.includes('invite-invalid') || 
                          data.includes('This invite may be expired') ||
                          data.includes('Invalid Invite');
        
        // If we redirected to invite-invalid, it's an invalid invite
        if (res.statusCode >= 300 && res.statusCode < 400 && 
            res.headers.location && res.headers.location.includes('invite-invalid')) {
          resolve({ url, valid: false, reason: 'Redirects to invalid invite page' });
          return;
        }
        
        if (res.statusCode === 200 && !isInvalid) {
          // Try to extract the server name from the page
          let serverName = 'Unknown';
          const titleMatch = data.match(/<title>(.*?)<\/title>/);
          if (titleMatch && titleMatch[1]) {
            serverName = titleMatch[1].replace(' | Discord', '');
          }
          
          resolve({ url, valid: true, serverName });
        } else if (isInvalid) {
          resolve({ url, valid: false, reason: 'Invalid invite page content' });
        } else {
          resolve({ url, valid: false, reason: `HTTP ${res.statusCode}` });
        }
      });
    });
    
    req.on('error', (err) => {
      resolve({ url, valid: false, reason: err.message });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, valid: false, reason: 'Timeout' });
    });
  });
}

async function main() {
  console.log("Checking Discord invites as a browser would...");
  console.log(`Testing ${discordLinksToCheck.length} Discord invites with delays between requests...\n`);
  
  const results = [];
  
  for (const link of discordLinksToCheck) {
    // Add a delay between requests to avoid rate limiting
    await new Promise(r => setTimeout(r, 3000));
    
    try {
      const result = await checkDiscordInvite(link);
      results.push(result);
      
      const statusIcon = result.valid ? '✅' : '❌';
      if (result.valid) {
        console.log(`${statusIcon} ${link}: VALID - "${result.serverName}"`);
      } else {
        console.log(`${statusIcon} ${link}: INVALID - ${result.reason}`);
      }
    } catch (err) {
      console.error(`Error checking ${link}:`, err);
      results.push({ url: link, valid: false, reason: 'Error' });
    }
  }
  
  // Get valid and invalid links
  const validLinks = results.filter(r => r.valid);
  const invalidLinks = results.filter(r => !r.valid);
  
  console.log("\n---------------------------------------");
  console.log(`SUMMARY: ${validLinks.length} valid, ${invalidLinks.length} invalid`);
  
  console.log("\nVALID DISCORD INVITES:");
  validLinks.forEach(link => {
    console.log(`- ${link.url} ("${link.serverName}")`);
  });
  
  console.log("\nINVALID DISCORD INVITES:");
  invalidLinks.forEach(link => {
    console.log(`- ${link.url} (${link.reason})`);
  });
  
  // Generate code for discord-servers.ts
  const discordServersCode = validLinks.map(link => {
    const serverName = link.serverName.replace(' Discord', '').trim();
    return `  {
    name: "${serverName}",
    description: "Active cybersecurity community with resources, discussions, and networking opportunities.",
    members: "50K+",
    url: "${link.url}",
    categories: ["community", "learning"]
  },`;
  }).join('\n');
  
  fs.writeFileSync('valid-discord-servers.txt', discordServersCode);
  console.log("\nValid Discord servers formatted code saved to valid-discord-servers.txt");
}

main(); 