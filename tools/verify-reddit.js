const https = require('https');

// List of subreddits to verify (including existing ones and new ones to add)
const subreddits = [
  // Existing subreddits
  "cybersecurity",
  "netsec",
  "hacking",
  "AskNetsec",
  "reverseengineering",
  "networking",
  "linuxadmin",
  "malware",
  "ethicalhacking",
  "comptia",
  "cybersecurity101",
  "sysadmin",
  "blueteamsec",
  "infosecjobs",  // Reported as banned/invalid
  "bugbounty",
  "lockpicking",
  "OSINT",
  "privacy",
  "computerforensics",
  "dfir",
  
  // Potential new subreddits to add
  "redteamsec",
  "howtohack",
  "cyberlaws",
  "ISO27001",
  "cissp",
  "cloudcomputing",
  "cybersecurityjobs",
  "hardening",
  "securityCTF",
  "securityonion",
  "cryptography",
  "AWSsecurity",
  "Azure",
  "tails",
  "antiforensics",
  "passwordresearch",
  "cve",
  "HackBloc",
  "Malwarebytes",
  "rootkit",
  "splunk",
  "wireshark",
  "cybersecurityadvice",
  "techsupport",
  "identity"
];

async function checkSubreddit(name) {
  return new Promise((resolve) => {
    const url = `https://www.reddit.com/r/${name}.json`;
    
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
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
            const jsonData = JSON.parse(data);
            if (jsonData.error || (jsonData.data && jsonData.data.children && jsonData.data.children.length === 0)) {
              resolve({ name, valid: false, reason: 'Empty or error data' });
            } else {
              const subscribers = jsonData.data?.children[0]?.data?.subreddit_subscribers || 'Unknown';
              resolve({ name, valid: true, subscribers });
            }
          } catch (e) {
            resolve({ name, valid: false, reason: 'JSON parse error' });
          }
        } else if (res.statusCode === 404 || res.statusCode === 403) {
          resolve({ name, valid: false, reason: res.statusCode === 403 ? 'Private or banned' : 'Not found' });
        } else {
          resolve({ name, valid: false, reason: `HTTP ${res.statusCode}` });
        }
      });
    });
    
    req.on('error', (err) => {
      resolve({ name, valid: false, reason: err.message });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({ name, valid: false, reason: 'Timeout' });
    });
  });
}

async function main() {
  console.log("Checking subreddits...");
  const results = [];
  
  for (const subreddit of subreddits) {
    try {
      const result = await checkSubreddit(subreddit);
      results.push(result);
      console.log(`r/${subreddit}: ${result.valid ? '✅ VALID' : '❌ INVALID'} ${result.valid ? `(${result.subscribers} subscribers)` : `(${result.reason})`}`);
    } catch (err) {
      console.error(`Error checking r/${subreddit}:`, err);
    }
  }
  
  console.log("\nValid Subreddits:");
  results.filter(r => r.valid).forEach(r => console.log(`- r/${r.name} (${r.subscribers} subscribers)`));
  
  console.log("\nInvalid Subreddits:");
  results.filter(r => !r.valid).forEach(r => console.log(`- r/${r.name} (${r.reason})`));
}

main(); 