const https = require('https');
const fs = require('fs');

// All Discord invite links - both original and new ones to verify
const discordLinks = [
  // Original links that might be working
  "https://discord.gg/infosec",
  "https://discord.gg/peh", 
  "https://discord.gg/5MTpnKM",
  "https://discord.gg/cybercareernetwork",
  "https://discord.gg/ctftime",
  "https://discord.gg/oscp",
  "https://discord.gg/overthewire", 
  "https://discord.gg/cyberdefenders",
  "https://discord.gg/dfir",
  "https://discord.gg/nullbyte",
  "https://discord.gg/secops",
  "https://discord.gg/devsecops",
  "https://discord.gg/cloudsecurity",
  "https://discord.gg/binaryadventures",
  "https://discord.gg/securitypro",
  "https://discord.gg/cybermentorship",
  "https://discord.gg/theratpack",
  "https://discord.gg/insiderphd",
  "https://discord.gg/nahamsec",
  "https://discord.gg/hackersploit",
  "https://discord.gg/tib3rius",
  
  // Known working links to keep
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
  
  // New links to verify
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

// Function to check if a Discord invite is actually valid
function checkDiscordInvite(url) {
  return new Promise((resolve) => {
    // First normalize the URL to extract just the invite code
    let inviteCode = url.replace("https://discord.gg/", "")
                        .replace("https://discord.com/invite/", "");
    
    // Use the Discord API to check if the invite is valid
    const apiUrl = `https://discord.com/api/v9/invites/${inviteCode}?with_counts=true`;
    
    const req = https.get(apiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'
      },
      timeout: 8000
    }, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const invite = JSON.parse(data);
            let serverName = invite.guild?.name || 'Unknown';
            let memberCount = invite.approximate_member_count || 'Unknown';
            
            resolve({
              url,
              valid: true,
              serverName,
              memberCount,
              inviteCode
            });
          } catch (e) {
            resolve({ url, valid: false, reason: 'JSON parse error', inviteCode });
          }
        } else if (res.statusCode === 404) {
          resolve({ url, valid: false, reason: 'Invite not found', inviteCode });
        } else {
          resolve({ url, valid: false, reason: `HTTP ${res.statusCode}`, inviteCode });
        }
      });
    });
    
    req.on('error', (err) => {
      resolve({ url, valid: false, reason: err.message, inviteCode });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, valid: false, reason: 'Timeout', inviteCode });
    });
  });
}

async function main() {
  console.log("Comprehensive Discord invite verification");
  console.log("---------------------------------------");
  console.log(`Testing ${discordLinks.length} Discord invites...\n`);
  
  const results = [];
  
  for (const link of discordLinks) {
    try {
      const result = await checkDiscordInvite(link);
      results.push(result);
      
      const statusIcon = result.valid ? '✅' : '❌';
      if (result.valid) {
        console.log(`${statusIcon} ${link}: VALID - "${result.serverName}" (${result.memberCount} members)`);
      } else {
        console.log(`${statusIcon} ${link}: INVALID - ${result.reason}`);
      }
    } catch (err) {
      console.error(`Error checking ${link}:`, err);
      results.push({ url: link, valid: false, reason: 'Error', inviteCode: link.split('/').pop() });
    }
  }
  
  // Get valid and invalid links
  const validLinks = results.filter(r => r.valid);
  const invalidLinks = results.filter(r => !r.valid);
  
  console.log("\n---------------------------------------");
  console.log(`SUMMARY: ${validLinks.length} valid, ${invalidLinks.length} invalid`);
  
  console.log("\nVALID DISCORD INVITES:");
  validLinks.forEach(link => {
    console.log(`- ${link.url} ("${link.serverName}", ${link.memberCount} members)`);
  });
  
  console.log("\nINVALID DISCORD INVITES:");
  invalidLinks.forEach(link => {
    console.log(`- ${link.url} (${link.reason})`);
  });
  
  // Save the results to a file for reference
  const output = {
    timestamp: new Date().toISOString(),
    summary: {
      total: results.length,
      valid: validLinks.length,
      invalid: invalidLinks.length
    },
    validLinks: validLinks.map(l => ({
      url: l.url,
      serverName: l.serverName,
      memberCount: l.memberCount
    })),
    invalidLinks: invalidLinks.map(l => ({
      url: l.url,
      reason: l.reason
    }))
  };
  
  fs.writeFileSync('discord-validation-results.json', JSON.stringify(output, null, 2));
  console.log("\nResults saved to discord-validation-results.json");
}

main(); 