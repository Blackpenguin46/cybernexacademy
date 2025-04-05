export interface RedditCommunity {
  name: string;
  description: string;
  members: string;
  url: string;
  categories: string[];
}

export const redditCommunities: RedditCommunity[] = [
  {
    name: "r/cybersecurity",
    description: "The central hub for cybersecurity professionals, featuring discussions on latest threats, tools, and career advice.",
    members: "1.1M+",
    url: "https://www.reddit.com/r/cybersecurity/",
    categories: ["general", "career"]
  },
  {
    name: "r/netsec",
    description: "Technical discussions about network and information security, with a focus on latest vulnerabilities and research.",
    members: "521K+",
    url: "https://www.reddit.com/r/netsec/",
    categories: ["technical", "networking"]
  },
  {
    name: "r/hacking",
    description: "Educational discussions about hacking techniques, tools, and methodologies in an ethical context.",
    members: "2.8M+",
    url: "https://www.reddit.com/r/hacking/",
    categories: ["pentesting", "technical"]
  },
  {
    name: "r/AskNetsec",
    description: "Q&A forum for network security professionals and beginners seeking advice on InfoSec topics.",
    members: "220K+",
    url: "https://www.reddit.com/r/AskNetsec/",
    categories: ["general", "networking", "career"]
  },
  {
    name: "r/reverseengineering",
    description: "Community focused on reverse engineering techniques and tools for software analysis.",
    members: "156K+",
    url: "https://www.reddit.com/r/reverseengineering/",
    categories: ["technical", "malware"]
  },
  {
    name: "r/networking",
    description: "Industry professionals discussing enterprise networking, infrastructure, and troubleshooting.",
    members: "375K+",
    url: "https://www.reddit.com/r/networking/",
    categories: ["networking"]
  },
  {
    name: "r/linuxadmin",
    description: "Linux system administration discussions with security implementations and best practices.",
    members: "222K+",
    url: "https://www.reddit.com/r/linuxadmin/",
    categories: ["technical", "networking"]
  },
  {
    name: "r/malware",
    description: "Analysis and discussion of malware, sharing techniques for detection and prevention.",
    members: "84K+",
    url: "https://www.reddit.com/r/malware/",
    categories: ["malware"]
  },
  {
    name: "r/ethicalhacking",
    description: "Legal and ethical hacking discussions, focusing on educational content and methodology.",
    members: "49K+",
    url: "https://www.reddit.com/r/ethicalhacking/",
    categories: ["pentesting"]
  },
  {
    name: "r/comptia",
    description: "CompTIA certification discussion forum for Security+, Network+, and other IT certifications.",
    members: "261K+",
    url: "https://www.reddit.com/r/comptia/",
    categories: ["career", "certification"]
  },
  {
    name: "r/cybersecurity101",
    description: "Beginner-friendly community for foundational cybersecurity concepts and learning resources.",
    members: "19K+",
    url: "https://www.reddit.com/r/cybersecurity101/",
    categories: ["general", "learning"]
  },
  {
    name: "r/sysadmin",
    description: "IT professionals discussing system administration, including security considerations.",
    members: "996K+",
    url: "https://www.reddit.com/r/sysadmin/",
    categories: ["technical", "networking"]
  },
  {
    name: "r/blueteamsec",
    description: "Focused on defensive security operations, threat detection, and incident response.",
    members: "51K+",
    url: "https://www.reddit.com/r/blueteamsec/",
    categories: ["blue_team", "technical"]
  },
  {
    name: "r/bugbounty",
    description: "Bug bounty hunters sharing experiences, methodologies, and program information.",
    members: "51K+",
    url: "https://www.reddit.com/r/bugbounty/",
    categories: ["pentesting", "bug_bounty"]
  },
  {
    name: "r/lockpicking",
    description: "Community focused on the art of lock picking as a hobby and skill relevant to physical security.",
    members: "248K+",
    url: "https://www.reddit.com/r/lockpicking/",
    categories: ["physical"]
  },
  {
    name: "r/OSINT",
    description: "Open Source Intelligence gathering techniques, tools, and methodologies.",
    members: "169K+",
    url: "https://www.reddit.com/r/OSINT/",
    categories: ["intelligence", "research"]
  },
  {
    name: "r/privacy",
    description: "Discussions about privacy in the digital age, tools, techniques, and legislation.",
    members: "1.4M+",
    url: "https://www.reddit.com/r/Privacy/",
    categories: ["privacy", "general"]
  },
  {
    name: "r/computerforensics",
    description: "Digital forensics professionals sharing techniques, tools, and case studies.",
    members: "74K+",
    url: "https://www.reddit.com/r/computerforensics/",
    categories: ["forensics", "technical"]
  },
  {
    name: "r/dfir",
    description: "Digital Forensics and Incident Response community sharing knowledge and experiences.",
    members: "3K+",
    url: "https://www.reddit.com/r/dfir/",
    categories: ["forensics", "incident_response"]
  },
  // Adding new verified subreddits
  {
    name: "r/howtohack",
    description: "Educational community for learning about hacking with practical guides and resources.",
    members: "503K+",
    url: "https://www.reddit.com/r/howtohack/",
    categories: ["learning", "pentesting", "technical"]
  },
  {
    name: "r/redteamsec",
    description: "Community focused on offensive security, red team operations, and adversary simulation.",
    members: "37K+",
    url: "https://www.reddit.com/r/redteamsec/",
    categories: ["red_team", "pentesting"]
  },
  {
    name: "r/cissp",
    description: "Forum for CISSP certification candidates and certified professionals to discuss exam preparation and topics.",
    members: "78K+",
    url: "https://www.reddit.com/r/cissp/",
    categories: ["certification", "career"]
  },
  {
    name: "r/ISO27001",
    description: "Discussion forum for ISO 27001 implementation, audits, and information security management systems.",
    members: "4.8K+",
    url: "https://www.reddit.com/r/ISO27001/",
    categories: ["compliance", "management"]
  },
  {
    name: "r/cloudcomputing",
    description: "Community discussing cloud platforms, security considerations, and best practices.",
    members: "31K+",
    url: "https://www.reddit.com/r/cloudcomputing/",
    categories: ["cloud", "technical"]
  },
  {
    name: "r/cybersecurityjobs",
    description: "Dedicated forum for cybersecurity job postings, career advice, and industry hiring trends.",
    members: "39K+",
    url: "https://www.reddit.com/r/cybersecurityjobs/",
    categories: ["career", "professional"]
  },
  {
    name: "r/securityCTF",
    description: "Community for Capture The Flag competitions, challenges, and discussions about security contests.",
    members: "50K+",
    url: "https://www.reddit.com/r/securityCTF/",
    categories: ["ctf", "learning"]
  },
  {
    name: "r/cryptography",
    description: "Discussions about cryptographic algorithms, implementations, and security considerations.",
    members: "78K+",
    url: "https://www.reddit.com/r/cryptography/",
    categories: ["technical", "research"]
  },
  {
    name: "r/tails",
    description: "Community focused on the Tails operating system for privacy and anonymity.",
    members: "113K+",
    url: "https://www.reddit.com/r/tails/",
    categories: ["privacy", "technical"]
  },
  {
    name: "r/splunk",
    description: "Community for Splunk users discussing SIEM implementations, queries, and security monitoring.",
    members: "20K+",
    url: "https://www.reddit.com/r/splunk/",
    categories: ["blue_team", "tools"]
  },
  {
    name: "r/wireshark",
    description: "Forum for network protocol analysis and using Wireshark for security investigation.",
    members: "9K+",
    url: "https://www.reddit.com/r/wireshark/",
    categories: ["networking", "tools"]
  },
  {
    name: "r/cybersecurityadvice",
    description: "Community providing advice on personal and professional cybersecurity practices.",
    members: "68K+",
    url: "https://www.reddit.com/r/cybersecurityadvice/",
    categories: ["general", "advice"]
  },
  {
    name: "r/blueTeamSec",
    description: "Community focused on defensive security, blue team operations, and security monitoring.",
    members: "Unknown",
    url: "https://www.reddit.com/r/blueTeamSec/",
    categories: ["blue_team", "defense", "technical"]
  },
  {
    name: "r/OSCP",
    description: "Community for OSCP certification candidates sharing tips, resources, and experiences.",
    members: "Unknown",
    url: "https://www.reddit.com/r/OSCP/",
    categories: ["certification", "pentesting", "learning"]
  },
  {
    name: "r/SecurityCareer",
    description: "Forum for cybersecurity career discussions, job hunting, and professional development.",
    members: "Unknown",
    url: "https://www.reddit.com/r/SecurityCareer/",
    categories: ["career", "professional", "advice"]
  },
  {
    name: "r/ThreatHunting",
    description: "Community dedicated to proactive threat detection, hunting techniques, and methodologies.",
    members: "Unknown",
    url: "https://www.reddit.com/r/ThreatHunting/",
    categories: ["blue_team", "detection", "technical"]
  },
  {
    name: "r/CyberSecurityBeginners",
    description: "Beginner-friendly community for those starting their cybersecurity journey.",
    members: "Unknown",
    url: "https://www.reddit.com/r/CyberSecurityBeginners/",
    categories: ["learning", "beginner", "career"]
  },
  {
    name: "r/learnprogramming",
    description: "Community focused on learning programming fundamentals with security considerations.",
    members: "Unknown",
    url: "https://www.reddit.com/r/learnprogramming/",
    categories: ["programming", "learning", "development"]
  },
  {
    name: "r/linux",
    description: "Linux community with discussions on security, configurations, and system hardening.",
    members: "Unknown",
    url: "https://www.reddit.com/r/linux/",
    categories: ["linux", "technical", "tools"]
  },
  {
    name: "r/blueteam",
    description: "Dedicated community for blue team security professionals and defensive security practices.",
    members: "Unknown",
    url: "https://www.reddit.com/r/blueteam/",
    categories: ["blue_team", "defense", "technical"]
  },
  {
    name: "r/pentest",
    description: "Community for penetration testing discussions, methodologies, and techniques.",
    members: "Unknown",
    url: "https://www.reddit.com/r/pentest/",
    categories: ["pentesting", "red_team", "technical"]
  },
  {
    name: "r/hacker101",
    description: "Community related to the Hacker101 learning platform focused on web security and bug bounty.",
    members: "Unknown",
    url: "https://www.reddit.com/r/hacker101/",
    categories: ["bug_bounty", "learning", "web_security"]
  },
  {
    name: "r/exploitdev",
    description: "Technical community focused on exploit development and vulnerability research.",
    members: "Unknown",
    url: "https://www.reddit.com/r/exploitdev/",
    categories: ["exploitation", "technical", "research"]
  },
  {
    name: "r/reverseengineering101",
    description: "Beginner-friendly community for learning reverse engineering fundamentals.",
    members: "Unknown",
    url: "https://www.reddit.com/r/reverseengineering101/",
    categories: ["reverse_engineering", "learning", "technical"]
  },
  {
    name: "r/CyberDefenders",
    description: "Community focused on defensive security challenges and blue team skill development.",
    members: "Unknown",
    url: "https://www.reddit.com/r/CyberDefenders/",
    categories: ["blue_team", "learning", "challenges"]
  },
  {
    name: "r/homelab",
    description: "Community for building personal lab environments for security testing and practice.",
    members: "Unknown",
    url: "https://www.reddit.com/r/homelab/",
    categories: ["learning", "technical", "lab"]
  },
  {
    name: "r/techsupport",
    description: "Technical support community with security-related troubleshooting and advice.",
    members: "Unknown",
    url: "https://www.reddit.com/r/techsupport/",
    categories: ["general", "technical", "support"]
  },
  {
    name: "r/netsecstudents",
    description: "Community for students and beginners in network security and cybersecurity.",
    members: "Unknown",
    url: "https://www.reddit.com/r/netsecstudents/",
    categories: ["learning", "networking", "beginner"]
  },
  {
    name: "r/zeroday",
    description: "Discussions about zero-day vulnerabilities, exploits, and security research.",
    members: "Unknown",
    url: "https://www.reddit.com/r/zeroday/",
    categories: ["technical", "vulnerabilities", "research"]
  },
  {
    name: "r/rce",
    description: "Community focused on remote code execution vulnerabilities and exploitation techniques.",
    members: "Unknown",
    url: "https://www.reddit.com/r/rce/",
    categories: ["exploitation", "technical", "research"]
  },
  {
    name: "r/programming",
    description: "Programming community with relevant discussions on secure coding practices.",
    members: "Unknown",
    url: "https://www.reddit.com/r/programming/",
    categories: ["programming", "development", "technical"]
  },
  {
    name: "r/informationsecurity",
    description: "Community focused on information security policies, governance, and management.",
    members: "Unknown",
    url: "https://www.reddit.com/r/informationsecurity/",
    categories: ["management", "governance", "general"]
  },
  {
    name: "r/securityresearch",
    description: "Forum for sharing and discussing cybersecurity research and academic papers.",
    members: "Unknown",
    url: "https://www.reddit.com/r/securityresearch/",
    categories: ["research", "technical", "academic"]
  },
  {
    name: "r/powershell",
    description: "Community for PowerShell discussions including security automation and blue team scripts.",
    members: "Unknown",
    url: "https://www.reddit.com/r/powershell/",
    categories: ["scripting", "tools", "automation"]
  },
  {
    name: "r/binaryanalysis",
    description: "Technical community focused on binary analysis techniques and tools.",
    members: "Unknown",
    url: "https://www.reddit.com/r/binaryanalysis/",
    categories: ["technical", "reverse_engineering", "research"]
  },
  {
    name: "r/exploit",
    description: "Community for discussions on exploits, vulnerabilities, and security research.",
    members: "Unknown",
    url: "https://www.reddit.com/r/exploit/",
    categories: ["technical", "exploitation", "vulnerabilities"]
  },
  {
    name: "r/infosectalk",
    description: "General discussions about information security topics and industry trends.",
    members: "Unknown",
    url: "https://www.reddit.com/r/infosectalk/",
    categories: ["general", "community", "discussion"]
  },
  {
    name: "r/NullByte",
    description: "Community related to the Null Byte website, focusing on ethical hacking tutorials.",
    members: "Unknown",
    url: "https://www.reddit.com/r/NullByte/",
    categories: ["pentesting", "learning", "tutorials"]
  },
  {
    name: "r/cyberlaws",
    description: "Discussions on cybersecurity laws, regulations, and legal considerations.",
    members: "Unknown",
    url: "https://www.reddit.com/r/cyberlaws/",
    categories: ["legal", "compliance", "policy"]
  },
  {
    name: "r/MalwareAnalysis",
    description: "Dedicated to in-depth analysis of malware, techniques, and tools.",
    members: "Unknown",
    url: "https://www.reddit.com/r/MalwareAnalysis/",
    categories: ["malware", "technical", "analysis"]
  },
  {
    name: "r/InfoSecNews",
    description: "Latest news and developments in the information security industry.",
    members: "Unknown",
    url: "https://www.reddit.com/r/InfoSecNews/",
    categories: ["news", "general", "industry"]
  },
  {
    name: "r/InfoSecJobs",
    description: "Job postings, career opportunities, and hiring discussions in information security.",
    members: "Unknown",
    url: "https://www.reddit.com/r/InfoSecJobs/",
    categories: ["career", "jobs", "professional"]
  },
  {
    name: "r/NIST",
    description: "Discussions on NIST standards, frameworks, and compliance requirements.",
    members: "Unknown",
    url: "https://www.reddit.com/r/NIST/",
    categories: ["compliance", "standards", "frameworks"]
  }
]; 