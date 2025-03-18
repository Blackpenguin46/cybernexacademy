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
    url: "https://discord.com/invite/tcm",
    categories: ["learning", "pentesting", "career"]
  },
  {
    name: "Darknet Diaries",
    description: "Official community for the popular cybersecurity podcast, discussing true stories from the dark side of the Internet.",
    members: "75K+",
    url: "https://discord.com/invite/darknetdiaries",
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
    url: "https://discord.com/invite/hackthebox",
    categories: ["learning", "ctf", "pentesting"]
  },
  {
    name: "The Many Hats Club",
    description: "Diverse cybersecurity community covering various topics from ethical hacking to threat intelligence.",
    members: "45K+",
    url: "https://discord.gg/infosec",
    categories: ["community", "pentesting", "blue_team"]
  },
  {
    name: "Practical Ethical Hacking",
    description: "Community dedicated to ethical hacking methodologies and practical security training.",
    members: "70K+",
    url: "https://discord.com/invite/peh",
    categories: ["learning", "pentesting"]
  },
  {
    name: "John Hammond's Community",
    description: "Active learning community led by popular cybersecurity YouTuber John Hammond.",
    members: "80K+",
    url: "https://discord.com/invite/5MTpnKM",
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
  },
  // Adding new Discord servers from the KillSwitchX7 Medium article
  {
    name: "David Bombal",
    description: "Community focused on IT networking, cybersecurity tutorials, and career development in tech.",
    members: "50K+",
    url: "https://discord.com/invite/davidbombal",
    categories: ["learning", "career", "community"]
  },
  {
    name: "NetworkChuck",
    description: "Community for IT enthusiasts with focus on networking, cloud technologies, and cybersecurity.",
    members: "49K+",
    url: "https://discord.gg/networkchuck",
    categories: ["learning", "community"]
  },
  {
    name: "The Rat Pack",
    description: "Cybersecurity community with focus on various security topics and threat intelligence.",
    members: "3K+",
    url: "https://discord.gg/theratpack",
    categories: ["community", "technical"]
  },
  {
    name: "InsiderPhD",
    description: "Community led by InsiderPhD with focus on bug bounty and web security testing.",
    members: "2.5K+",
    url: "https://discord.gg/insiderphd",
    categories: ["pentesting", "learning"]
  },
  {
    name: "Nahamsec",
    description: "Community for all things infosec led by Nahamsec with emphasis on bug bounty hunting.",
    members: "15K+",
    url: "https://discord.com/invite/nahamsec",
    categories: ["pentesting", "community"]
  },
  {
    name: "HackerSploit",
    description: "Hub for infosec professionals and students interested in practical security training.",
    members: "30K+",
    url: "https://discord.gg/hackersploit",
    categories: ["learning", "pentesting"]
  },
  {
    name: "Tib3rius",
    description: "Security community focused on web application security and penetration testing.",
    members: "1K+",
    url: "https://discord.gg/tib3rius",
    categories: ["pentesting", "learning"]
  },
  {
    name: "Cyberspatial",
    description: "Cybersecurity community with diverse focus areas and learning resources.",
    members: "20K+",
    url: "https://discord.gg/ZKwR9CV",
    categories: ["community", "learning"]
  },
  {
    name: "TrustedSec",
    description: "Security company-led community for security professionals and enthusiasts.",
    members: "25K+",
    url: "https://discord.gg/4mM9puKjMB",
    categories: ["community", "technical"]
  },
  {
    name: "Hack This Site",
    description: "Community for ethical hackers with focus on website security and challenges.",
    members: "30K+",
    url: "https://discord.gg/4bgTqWPBmF",
    categories: ["ctf", "pentesting"]
  },
  {
    name: "DEFCON",
    description: "Official community for the world's largest hacking convention.",
    members: "100K+",
    url: "https://discord.gg/defcon",
    categories: ["community", "pentesting", "ctf"]
  },
  {
    name: "Hacker101",
    description: "Community for learning web security and participating in Hacker101 CTF challenges.",
    members: "40K+",
    url: "https://discord.gg/CJR9xtzPaa",
    categories: ["ctf", "learning", "pentesting"]
  },
  {
    name: "Bugcrowd Community",
    description: "Official community for Bugcrowd platform users and bug bounty hunters.",
    members: "45K+",
    url: "https://discord.com/invite/TWr3Brs",
    categories: ["pentesting", "career"]
  },
  {
    name: "InfoSec Writeups",
    description: "Community focused on security writeups, tutorials, and knowledge sharing.",
    members: "20K+",
    url: "https://discord.gg/4DZpgvV",
    categories: ["learning", "community"]
  },
  {
    name: "Certification Station",
    description: "Community dedicated to helping members prepare for IT and security certifications.",
    members: "35K+",
    url: "https://discord.gg/certstation",
    categories: ["career", "learning"]
  },
  {
    name: "Intercollegiate Discord",
    description: "Connecting students interested in cybersecurity across different colleges and universities.",
    members: "10K+",
    url: "https://discord.gg/zXYNfEKChu",
    categories: ["community", "learning"]
  },
  {
    name: "Pico CTF",
    description: "Community related to the popular educational CTF competition designed for beginners.",
    members: "30K+",
    url: "https://discord.com/invite/WQGdYaB",
    categories: ["ctf", "learning"]
  },
  {
    name: "Laptop Hacking Coffee",
    description: "Casual community for hackers and security enthusiasts to exchange ideas and knowledge.",
    members: "15K+",
    url: "https://discord.gg/k3RGz3x",
    categories: ["community", "technical"]
  },
  {
    name: "The OSINTion",
    description: "Community focused on Open Source Intelligence gathering techniques and tools.",
    members: "20K+",
    url: "https://discord.gg/RMv5Y8dfCz",
    categories: ["technical", "learning"]
  },
  {
    name: "Bellingcat",
    description: "OSINT and investigative journalism community for online investigations.",
    members: "15K+",
    url: "https://discord.gg/pCB9Xn8fK4",
    categories: ["technical", "community"]
  },
  {
    name: "The OSINT Curious Project",
    description: "Community dedicated to learning and sharing OSINT techniques and methodologies.",
    members: "15K+",
    url: "https://discord.gg/ykJXcXtEka",
    categories: ["technical", "learning"]
  },
  {
    name: "Digital Forensics",
    description: "Community focused on digital forensics techniques, tools, and investigations.",
    members: "20K+",
    url: "https://discord.gg/m4d6GvknvV",
    categories: ["forensics", "blue_team", "technical"]
  },
  {
    name: "Threat Hunter Community",
    description: "Focused on threat hunting, detection, and analysis of security threats.",
    members: "18K+",
    url: "https://discord.gg/B5zKchpcRW",
    categories: ["blue_team", "technical"]
  },
  {
    name: "Blue Team Labs Online",
    description: "Community for blue team security professionals with focus on defensive security exercises.",
    members: "25K+",
    url: "https://discord.gg/Vmv5Y3DQmk",
    categories: ["blue_team", "learning"]
  },
  {
    name: "Security Blue Team",
    description: "Community dedicated to blue team operations, defense strategies, and skill development.",
    members: "30K+",
    url: "https://discord.gg/kSNzeDsgpW",
    categories: ["blue_team", "learning"]
  },
  {
    name: "SOC Core Skills Training",
    description: "Focused on developing skills necessary for Security Operations Center analysts.",
    members: "22K+",
    url: "https://discord.gg/s5eHgFEAej",
    categories: ["blue_team", "learning", "career"]
  },
  {
    name: "Wild West Hackin' Fest",
    description: "Community for the popular cybersecurity conference with focus on practical skills.",
    members: "15K+",
    url: "https://discord.gg/qHpFHWJX9n",
    categories: ["community", "learning"]
  },
  {
    name: "Black Hills Information Security",
    description: "Community led by BHIS team with focus on offensive and defensive security topics.",
    members: "20K+",
    url: "https://discord.gg/mVRJXCPVBP",
    categories: ["community", "technical", "learning"]
  },
  {
    name: "Red Team Village",
    description: "Community focused on red team operations, offensive security, and penetration testing.",
    members: "25K+",
    url: "https://discord.com/invite/BXf3Bz6U2H",
    categories: ["pentesting", "technical"]
  },
  {
    name: "Unofficial INE / Elearn Security",
    description: "Community for students of INE and Elearn Security courses to discuss and collaborate.",
    members: "18K+",
    url: "https://discord.gg/ZSkMQdCXTK",
    categories: ["learning", "career"]
  },
  {
    name: "Bounty Hunters",
    description: "Community for bug bounty hunters to share techniques, tools, and experiences.",
    members: "30K+",
    url: "https://discord.gg/DjzZ9t6nuC",
    categories: ["pentesting", "career"]
  },
  {
    name: "Offensive Security",
    description: "Community for OffSec students and professionals with focus on offensive security.",
    members: "40K+",
    url: "https://discord.gg/sHJrrSWV9W",
    categories: ["pentesting", "learning", "career"]
  },
  {
    name: "Reverse Engineering",
    description: "Community focused on reverse engineering techniques, tools, and challenges.",
    members: "30K+",
    url: "https://discord.gg/xmgrBahpdE",
    categories: ["technical", "malware"]
  },
  {
    name: "SANS Offensive Operations",
    description: "Community for SANS offensive security courses and certifications.",
    members: "25K+",
    url: "https://discord.gg/f3R93W38gs",
    categories: ["pentesting", "learning", "career"]
  },
  {
    name: "SANS Defensive Operations",
    description: "Community for SANS blue team and defensive security courses and certifications.",
    members: "25K+",
    url: "https://discord.com/invite/bXv87xAzvA",
    categories: ["blue_team", "learning", "career"]
  }
];