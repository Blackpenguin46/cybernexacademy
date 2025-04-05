const https = require('https');
const fs = require('fs');

// Target list of Discord communities that are likely to have valid invites
// These are from official sources, permanent invites, and verified communities
const targetDiscords = [
  // Well-established cybersecurity Discords with permanent links
  { name: "TryHackMe", url: "https://discord.gg/tryhackme" },
  { name: "Hack The Box", url: "https://discord.gg/hackthebox" },
  { name: "The Cyber Mentor", url: "https://discord.gg/tcm" },
  { name: "NetworkChuck", url: "https://discord.gg/networkchuck" },
  { name: "Certification Station", url: "https://discord.gg/certstation" },
  { name: "Infosec Community", url: "https://discord.gg/infosec" },
  { name: "John Hammond", url: "https://discord.gg/johnhammond" },
  { name: "DEFCON", url: "https://discord.gg/defcon" },
  { name: "pwnED", url: "https://discord.gg/pwned" },
  { name: "NahamSec", url: "https://discord.gg/nahamsec" },
  { name: "RansomwareHunterTeam", url: "https://discord.gg/rtht" },
  { name: "InsiderPhD", url: "https://discord.gg/insiderphd" },
  { name: "Red Team Village", url: "https://discord.gg/redteamvillage" },
  { name: "Blue Team Village", url: "https://discord.gg/blueteamvillage" },
  { name: "MalwareTech", url: "https://discord.gg/malwaretech" },
  { name: "IoT Village", url: "https://discord.gg/iotvillage" },
  { name: "Security BSides", url: "https://discord.gg/bsides" },
  { name: "BugCrowd", url: "https://discord.gg/bugcrowd" },
  { name: "Cybery", url: "https://discord.gg/cybery" },
  { name: "CryptoHackers", url: "https://discord.gg/cryptohackers" },
  { name: "CyberDefenders", url: "https://discord.gg/cyberdefenders" },
  { name: "HackTheBox Academy", url: "https://discord.gg/htb-academy" },
  { name: "SANS", url: "https://discord.gg/sans" },
  { name: "CyberWarrior", url: "https://discord.gg/cyberwarrior" },
  { name: "HackerSploit", url: "https://discord.gg/hackersploit" },
  { name: "IppSec", url: "https://discord.gg/ippsec" },
  { name: "TheCyberMentor", url: "https://discord.gg/thecybermentor" },
  { name: "HackerHouse", url: "https://discord.gg/hackerhouse" },
  { name: "LiveOverflow", url: "https://discord.gg/liveoverflow" },
  { name: "CTFtime", url: "https://discord.gg/ctftime" },
  { name: "InfographicSecurity", url: "https://discord.gg/infosecjobs" },
  { name: "CompTIA", url: "https://discord.gg/comptia" },
  { name: "Offensive Security", url: "https://discord.gg/offsec" },
  { name: "DC Cybersecurity Pros", url: "https://discord.gg/dcinfosec" },
  { name: "NullByte", url: "https://discord.gg/nullbyte" },
  { name: "Hackster.io", url: "https://discord.gg/hackster" },
  { name: "Kali Linux", url: "https://discord.gg/kalilinux" },
  { name: "PortSwigger", url: "https://discord.gg/portswigger" },
  { name: "Snyk", url: "https://discord.gg/snyk" },
  { name: "BlackHillsInfoSec", url: "https://discord.gg/bhis" },
  { name: "HackerOne", url: "https://discord.gg/hackerone" },
  { name: "Seytonic", url: "https://discord.gg/seytonic" },
  { name: "CISA", url: "https://discord.gg/cisa" },
  { name: "Metasploit", url: "https://discord.gg/metasploit" },
  { name: "Hak5", url: "https://discord.gg/hak5" },
  { name: "Black Hat", url: "https://discord.gg/blackhat" },
  { name: "David Bombal", url: "https://discord.gg/davidbombal" },
  { name: "PenetrationTesting", url: "https://discord.gg/pentest" },
  { name: "NIST", url: "https://discord.gg/nist" },
  { name: "Darknet Diaries", url: "https://discord.gg/darknetdiaries" },
  { name: "OWASP", url: "https://discord.gg/owasp" },
  { name: "Security Weekly", url: "https://discord.gg/securityweekly" },
  { name: "Cyber Defenders", url: "https://discord.gg/cyberdefense" },
  { name: "EthicalHackers", url: "https://discord.gg/ethicalhackers" },
  { name: "BugBountyHunters", url: "https://discord.gg/bugbounty" },
  { name: "NetsecFocus", url: "https://discord.gg/netsec" },
  { name: "SOCAnalysts", url: "https://discord.gg/socanalyst" },
  { name: "CyberCrime", url: "https://discord.gg/cybercrime" },
  { name: "DigitalForensics", url: "https://discord.gg/digitalforensics" },
  { name: "ApplySec", url: "https://discord.gg/applysec" },
  { name: "InfoSecPrep", url: "https://discord.gg/infosecprep" }
];

// This function checks if an invite page loads properly (not redirecting to invite-invalid)
function checkDiscordInvite(inviteInfo) {
  return new Promise((resolve) => {
    const { name, url } = inviteInfo;
    
    // Normalize the URL
    const normalizedUrl = url.includes('/invite/') ? url : url.replace('discord.gg/', 'discord.com/invite/');
    
    const req = https.get(normalizedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      },
      timeout: 15000
    }, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        // Look for multiple indicators of invalid invites
        const isInvalid = 
          data.includes('invite-invalid') || 
          data.includes('This invite may be expired') ||
          data.includes('Invalid Invite') ||
          data.includes('This invite is invalid');
        
        // If we got redirected to invite-invalid, it's an invalid invite
        if (res.statusCode >= 300 && res.statusCode < 400 && 
            res.headers.location && res.headers.location.includes('invite-invalid')) {
          resolve({ 
            name, 
            url, 
            valid: false, 
            reason: 'Redirects to invalid invite page',
            statusCode: res.statusCode,
            location: res.headers.location
          });
          return;
        }
        
        // For successful responses, check content
        if (res.statusCode === 200) {
          if (isInvalid) {
            resolve({ 
              name, 
              url, 
              valid: false, 
              reason: 'Invalid invite page content',
              statusCode: res.statusCode
            });
          } else {
            // Try to extract the server name and member count from the page
            let serverName = name;
            let memberCount = 'Unknown';
            
            // Try to get the server name from meta tags or title
            const titleMatch = data.match(/<meta\s+property="og:title"\s+content="([^"]+)"/);
            if (titleMatch && titleMatch[1]) {
              serverName = titleMatch[1].replace(' | Discord Server', '');
            } else {
              const pageTitle = data.match(/<title>([^<]+)<\/title>/);
              if (pageTitle && pageTitle[1]) {
                serverName = pageTitle[1].replace(' | Discord', '');
              }
            }
            
            // Try to extract member count from the page
            const memberCountMatch = data.match(/([0-9,.]+)\s+Online|([0-9,.]+)\s+Members|([0-9,.]+)\s+Member/i);
            if (memberCountMatch) {
              const countString = memberCountMatch[1] || memberCountMatch[2] || memberCountMatch[3];
              const parsedCount = parseInt(countString.replace(/,/g, ''));
              if (!isNaN(parsedCount)) {
                memberCount = parsedCount > 1000 ? `${Math.floor(parsedCount/1000)}K+` : parsedCount;
              }
            }
            
            resolve({ 
              name: serverName, 
              url, 
              valid: true,
              memberCount,
              statusCode: res.statusCode
            });
          }
        } else {
          resolve({ 
            name, 
            url, 
            valid: false, 
            reason: `HTTP ${res.statusCode}`,
            statusCode: res.statusCode
          });
        }
      });
    });
    
    req.on('error', (err) => {
      resolve({ 
        name, 
        url, 
        valid: false, 
        reason: err.message 
      });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({ 
        name, 
        url, 
        valid: false, 
        reason: 'Request timeout' 
      });
    });
  });
}

async function main() {
  console.log("Thorough Discord invite verification");
  console.log(`Testing ${targetDiscords.length} Discord servers with 5-second delays to avoid rate limits...\n`);
  
  const validServers = [];
  const invalidServers = [];
  
  for (const discord of targetDiscords) {
    // Add a delay between requests to avoid rate limiting
    await new Promise(r => setTimeout(r, 5000));
    
    try {
      console.log(`Checking ${discord.name} (${discord.url})...`);
      const result = await checkDiscordInvite(discord);
      
      if (result.valid) {
        validServers.push(result);
        console.log(`✅ ${result.name}: VALID (${result.memberCount} members)\n`);
      } else {
        invalidServers.push(result);
        console.log(`❌ ${result.name}: INVALID - ${result.reason}\n`);
      }
    } catch (err) {
      console.error(`Error checking ${discord.name}:`, err);
      invalidServers.push({ ...discord, valid: false, reason: 'Checking error' });
    }
  }
  
  console.log("\n---------------------------------------");
  console.log(`SUMMARY: ${validServers.length} valid, ${invalidServers.length} invalid`);
  
  // Generate Discord server entries for our data file
  let discordServersTsContent = `export interface DiscordServer {
  name: string;
  description: string;
  members: string;
  url: string;
  categories: string[];
}

export const discordServers: DiscordServer[] = [`;

  // Add entries for valid servers
  validServers.forEach(server => {
    const entry = `
  {
    name: "${server.name}",
    description: "Active cybersecurity community focused on tools, techniques, and knowledge sharing for security professionals.",
    members: "${server.memberCount}",
    url: "${server.url}",
    categories: ["community", "learning"]
  },`;
    
    discordServersTsContent += entry;
  });

  // Close the array
  discordServersTsContent += `
];`;

  // Save the valid servers to a new file
  fs.writeFileSync('verified-discord-servers.ts', discordServersTsContent);
  console.log("\nVerified Discord servers data saved to verified-discord-servers.ts");
  
  // Also save the raw results
  fs.writeFileSync('discord-verification-results.json', JSON.stringify({
    timestamp: new Date().toISOString(),
    validServers,
    invalidServers
  }, null, 2));
  console.log("Full results saved to discord-verification-results.json");
}

main(); 