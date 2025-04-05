const https = require('https');

// New Discord links to verify
const links = [
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

async function checkDiscordLink(url) {
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 8000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        if (res.headers.location.includes('invite-invalid')) {
          resolve({ url, valid: false, redirect: res.headers.location });
        } else {
          resolve({ url, valid: true, redirect: res.headers.location });
        }
      } else if (res.statusCode >= 200 && res.statusCode < 300) {
        resolve({ url, valid: true });
      } else {
        resolve({ url, valid: false, status: res.statusCode });
      }
    });

    req.on('error', (err) => {
      resolve({ url, valid: false, error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ url, valid: false, error: 'Timeout' });
    });
  });
}

async function main() {
  console.log("Checking Discord invite links...");
  const results = [];
  
  for (const link of links) {
    try {
      const result = await checkDiscordLink(link);
      results.push(result);
      console.log(`${link}: ${result.valid ? '✅ VALID' : '❌ INVALID'}${result.redirect ? ` (redirects to ${result.redirect})` : ''}`);
    } catch (err) {
      console.error(`Error checking ${link}:`, err);
    }
  }
  
  console.log("\nValid Links:");
  results.filter(r => r.valid).forEach(r => console.log(`- ${r.url}`));
}

main(); 