export interface DiscordServer {
  name: string;
  description: string;
  members: string;
  url: string;
  categories: string[];
}

export const discordServers: DiscordServer[] = [
  {
    name: "The Cyber Mentor",
    description: "Heath Adams' community focused on practical ethical hacking and penetration testing training.",
    members: "100K+",
    url: "https://discord.gg/thecybermentor",
    categories: ["learning", "pentesting", "career"]
  },
  {
    name: "Darknet Diaries",
    description: "Official community for the popular cybersecurity podcast, discussing true stories from the dark side of the Internet.",
    members: "75K+",
    url: "https://discord.gg/darknetdiaries",
    categories: ["community"]
  },
  {
    name: "TryHackMe",
    description: "Learning community focused on hands-on cybersecurity training through practical labs and exercises.",
    members: "150K+",
    url: "https://discord.gg/tryhackme",
    categories: ["learning", "ctf", "pentesting"]
  },
  {
    name: "Hack The Box",
    description: "Community for the popular Hack The Box platform for penetration testing and security challenges.",
    members: "180K+",
    url: "https://discord.gg/hackthebox",
    categories: ["learning", "ctf", "pentesting"]
  },
  {
    name: "The Many Hats Club",
    description: "Diverse cybersecurity community covering various topics from ethical hacking to threat intelligence.",
    members: "45K+",
    url: "https://discord.gg/themanyhatsclub",
    categories: ["community", "pentesting", "blue_team"]
  },
  {
    name: "Practical Ethical Hacking",
    description: "Community dedicated to ethical hacking methodologies and practical security training.",
    members: "70K+",
    url: "https://discord.gg/ethicalhacking",
    categories: ["learning", "pentesting"]
  },
  {
    name: "John Hammond's Community",
    description: "Active learning community led by popular cybersecurity YouTuber John Hammond.",
    members: "80K+",
    url: "https://discord.gg/johnhammond",
    categories: ["learning", "ctf", "pentesting"]
  },
  {
    name: "InfoSec Prep",
    description: "Focus on certification preparation and career development in information security.",
    members: "60K+",
    url: "https://discord.gg/infosecprep",
    categories: ["career", "learning"]
  },
  {
    name: "Cybersecurity Career Network",
    description: "Network focused on cybersecurity career development and job opportunities.",
    members: "40K+",
    url: "https://discord.gg/cybercareernetwork",
    categories: ["career"]
  },
  {
    name: "Black Hat Ethical Hacking",
    description: "Community for aspiring ethical hackers and security professionals.",
    members: "55K+",
    url: "https://discord.gg/blackhat",
    categories: ["pentesting", "learning"]
  },
  {
    name: "Blue Team Village",
    description: "Community focused on defensive security, threat detection, and incident response.",
    members: "30K+",
    url: "https://discord.gg/blueteamvillage",
    categories: ["blue_team"]
  },
  {
    name: "CTF Time",
    description: "Group dedicated to Capture The Flag competitions and challenges.",
    members: "25K+",
    url: "https://discord.gg/ctftime",
    categories: ["ctf"]
  },
  {
    name: "MalwareTech",
    description: "Community focused on malware analysis and reverse engineering.",
    members: "35K+",
    url: "https://discord.gg/malwaretech",
    categories: ["malware", "technical"]
  },
  {
    name: "OSCP Study Group",
    description: "Support community for those preparing for the OSCP certification.",
    members: "50K+",
    url: "https://discord.gg/oscp",
    categories: ["career", "pentesting", "certification"]
  },
  {
    name: "OverTheWire",
    description: "Community for discussing OverTheWire wargames and challenges.",
    members: "20K+",
    url: "https://discord.gg/overthewire",
    categories: ["ctf", "learning"]
  },
  {
    name: "Bug Bounty Hunter's Hangout",
    description: "Community for bug bounty hunters to share tips and experiences.",
    members: "45K+",
    url: "https://discord.gg/bugbounty",
    categories: ["pentesting", "career"]
  },
  // Adding new Discord servers from shared resources
  {
    name: "Hak5",
    description: "Community centered around Hak5 security tools and products with discussions on hardware hacking.",
    members: "60K+",
    url: "https://discord.gg/hak5",
    categories: ["technical", "hardware", "learning"]
  },
  {
    name: "Cyber Defenders",
    description: "A supportive community for cyber defenders focused on blue team operations and defense strategies.",
    members: "38K+",
    url: "https://discord.gg/cyberdefenders",
    categories: ["blue_team", "learning"]
  },
  {
    name: "DFIR Community",
    description: "Digital Forensics and Incident Response community sharing techniques and case studies.",
    members: "33K+",
    url: "https://discord.gg/dfir",
    categories: ["blue_team", "technical", "forensics"]
  },
  {
    name: "NullByte",
    description: "Technical discussions on various security topics from the popular NullByte community.",
    members: "42K+",
    url: "https://discord.gg/nullbyte",
    categories: ["technical", "learning", "pentesting"]
  },
  {
    name: "SecOps Community",
    description: "Security Operations-focused community discussing SOC practices, SIEM tools, and threat hunting.",
    members: "28K+",
    url: "https://discord.gg/secops",
    categories: ["blue_team", "technical"]
  },
  {
    name: "DevSecOps",
    description: "Community bridging development, security, and operations with focus on secure CI/CD pipelines.",
    members: "31K+",
    url: "https://discord.gg/devsecops",
    categories: ["technical", "career", "development"]
  },
  {
    name: "CyberSecurity Career Hub",
    description: "Space dedicated to cybersecurity job hunting, career transitions, and professional development.",
    members: "52K+",
    url: "https://discord.gg/cscareerhub",
    categories: ["career"]
  },
  {
    name: "Cloud Security Alliance",
    description: "Community focused on cloud security best practices, tools, and certifications.",
    members: "36K+",
    url: "https://discord.gg/cloudsecurity",
    categories: ["technical", "cloud", "learning"]
  },
  {
    name: "Binary Adventures",
    description: "Community focused on reverse engineering, malware analysis, and exploit development.",
    members: "29K+",
    url: "https://discord.gg/binaryadventures",
    categories: ["technical", "malware", "learning"]
  },
  {
    name: "Security Professionals",
    description: "General cybersecurity professionals network for discussions across all disciplines.",
    members: "65K+",
    url: "https://discord.gg/securitypro",
    categories: ["community", "career", "networking"]
  },
  {
    name: "Cybersecurity Mentorship",
    description: "Mentorship-focused community pairing experienced professionals with those starting their journey.",
    members: "44K+",
    url: "https://discord.gg/cybermentorship",
    categories: ["career", "learning", "community"]
  }
]; 