const https = require('https');
const http = require('http');
const fs = require('fs');

// List of URLs to check
const urls = [
  // Discord links
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
  // New verified Discord links
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
  "https://discord.gg/rangeforce",
  
  // Reddit links
  "https://www.reddit.com/r/cybersecurity/",
  "https://www.reddit.com/r/netsec/",
  "https://www.reddit.com/r/hacking/",
  "https://www.reddit.com/r/AskNetsec/",
  "https://www.reddit.com/r/reverseengineering/",
  "https://www.reddit.com/r/networking/",
  "https://www.reddit.com/r/linuxadmin/",
  "https://www.reddit.com/r/malware/",
  "https://www.reddit.com/r/ethicalhacking/",
  "https://www.reddit.com/r/comptia/",
  "https://www.reddit.com/r/cybersecurity101/",
  "https://www.reddit.com/r/sysadmin/",
  "https://www.reddit.com/r/blueteamsec/",
  "https://www.reddit.com/r/bugbounty/",
  "https://www.reddit.com/r/lockpicking/",
  "https://www.reddit.com/r/OSINT/",
  "https://www.reddit.com/r/Privacy/",
  "https://www.reddit.com/r/computerforensics/",
  "https://www.reddit.com/r/dfir/",
  "https://www.reddit.com/r/howtohack/",
  "https://www.reddit.com/r/redteamsec/",
  "https://www.reddit.com/r/cissp/",
  "https://www.reddit.com/r/ISO27001/",
  "https://www.reddit.com/r/cloudcomputing/",
  "https://www.reddit.com/r/cybersecurityjobs/",
  "https://www.reddit.com/r/securityCTF/",
  "https://www.reddit.com/r/cryptography/",
  "https://www.reddit.com/r/tails/",
  "https://www.reddit.com/r/splunk/",
  "https://www.reddit.com/r/wireshark/",
  "https://www.reddit.com/r/cybersecurityadvice/",
  
  // External resources
  "https://therecord.media/",
  "https://tcm-sec.com/",
  "https://www.hackthebox.com/",
  "https://tryhackme.com/",
  "https://www.linkedin.com/company/cybersecurity-resource-hub",
  "https://krebsonsecurity.com/",
  "https://thehackernews.com/",
  "https://www.cybrary.it/",
  "https://www.sans.org/",
  "https://portswigger.net/web-security"
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
      },
      timeout: 10000
    }, (res) => {
      // Discord invite links return 200 even if they're invalid, but they redirect to /invite-invalid
      if (url.includes('discord') && res.headers.location && res.headers.location.includes('invite-invalid')) {
        resolve({ url, status: 'INVALID', statusCode: res.statusCode, redirects: res.headers.location });
        return;
      }
      
      // If we get a redirect, we'll consider it valid
      if (res.statusCode >= 300 && res.statusCode < 400) {
        resolve({ url, status: 'VALID', statusCode: res.statusCode, redirects: res.headers.location });
        return;
      }
      
      // Any 2xx status code is valid
      if (res.statusCode >= 200 && res.statusCode < 300) {
        resolve({ url, status: 'VALID', statusCode: res.statusCode });
        return;
      }
      
      // Anything else is invalid
      resolve({ url, status: 'INVALID', statusCode: res.statusCode });
    });

    req.on('error', (err) => {
      resolve({ url, status: 'ERROR', error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 'TIMEOUT' });
    });
  });
}

async function checkAllUrls() {
  console.log("Starting link validation check...");
  const results = [];
  
  for (const url of urls) {
    console.log(`Checking: ${url}`);
    const result = await checkUrl(url);
    results.push(result);
    console.log(`${url}: ${result.status}${result.statusCode ? ` (${result.statusCode})` : ''}${result.redirects ? ` -> ${result.redirects}` : ''}`);
  }
  
  // Count results
  const valid = results.filter(r => r.status === 'VALID').length;
  const invalid = results.filter(r => r.status === 'INVALID').length;
  const errors = results.filter(r => r.status === 'ERROR' || r.status === 'TIMEOUT').length;
  
  console.log('\n--- Summary ---');
  console.log(`Total URLs checked: ${results.length}`);
  console.log(`Valid: ${valid}`);
  console.log(`Invalid: ${invalid}`);
  console.log(`Errors: ${errors}`);
  
  console.log('\n--- Invalid/Error URLs ---');
  results
    .filter(r => r.status !== 'VALID')
    .forEach(r => {
      console.log(`${r.url}: ${r.status}${r.error ? ` (${r.error})` : ''}`);
    });
    
  // Save results to file
  const output = {
    timestamp: new Date().toISOString(),
    summary: {
      total: results.length,
      valid,
      invalid,
      errors
    },
    results
  };
  
  fs.writeFileSync('link-check-results.json', JSON.stringify(output, null, 2));
  console.log('\nResults saved to link-check-results.json');
}

checkAllUrls(); 