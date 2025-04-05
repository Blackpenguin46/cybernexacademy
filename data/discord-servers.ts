export interface DiscordServer {
  name: string;
  description: string;
  members: string;
  url: string;
  categories: string[];
}

// Verified discord links (last checked: April 2, 2025)
export const discordServers: DiscordServer[] = [
  {
    name: "CyberNex Community",
    description: "Official Discord server for CyberNex Academy. Join for discussions, resources, and networking in the cybersecurity field.",
    members: "New",
    url: "https://discord.gg/R8J3xMcRMD",
    categories: ["community", "learning", "networking"]
  },
  {
    name: "TryHackMe",
    description: "Learning community focused on hands-on cybersecurity training through practical labs and exercises.",
    members: "278K+",
    url: "https://discord.gg/tryhackme",
    categories: ["learning", "ctf", "pentesting"]
  },
  {
    name: "Hack The Box",
    description: "Community for the popular Hack The Box platform for penetration testing and security challenges.",
    members: "293K+",
    url: "https://discord.gg/hackthebox",
    categories: ["learning", "ctf", "pentesting"]
  },
  {
    name: "PortSwigger",
    description: "Community for users of Burp Suite and web security testing, with discussions on web vulnerabilities.",
    members: "9K+",
    url: "https://discord.gg/portswigger",
    categories: ["web_security", "pentesting", "tools"]
  },
  {
    name: "Offensive Security",
    description: "Community for Offensive Security courses and certifications like OSCP and Kali Linux.",
    members: "76K+",
    url: "https://discord.gg/offsec",
    categories: ["pentesting", "certification", "learning"]
  },
  {
    name: "DEFCON",
    description: "The official Discord for DEFCON, one of the world's largest hacking conferences.",
    members: "50K+",
    url: "https://discord.gg/defcon",
    categories: ["community", "technical", "learning"]
  },
  {
    name: "Blue Team Village",
    description: "Community focused on defensive security, threat detection, and incident response.",
    members: "6K+",
    url: "https://discord.gg/blueteamvillage",
    categories: ["blue_team", "defense", "technical"]
  },
  {
    name: "Red Team Village",
    description: "Community focused on offensive security, red teaming, and adversary emulation.",
    members: "20K+",
    url: "https://discord.gg/redteamvillage",
    categories: ["red_team", "pentesting", "technical"]
  },
  {
    name: "Hak5",
    description: "Community centered around Hak5 security tools and products with discussions on hardware hacking.",
    members: "21K+",
    url: "https://discord.gg/hak5",
    categories: ["technical", "hardware", "tools"]
  },
  {
    name: "Black Hills InfoSec",
    description: "Community led by the Black Hills Information Security team with free training resources.",
    members: "51K+",
    url: "https://discord.gg/bhis",
    categories: ["learning", "blue_team", "career"]
  },
  {
    name: "NetworkChuck",
    description: "Community for IT enthusiasts with focus on networking, cloud technologies, and cybersecurity.",
    members: "93K+",
    url: "https://discord.gg/networkchuck",
    categories: ["learning", "networking", "community"]
  },
  {
    name: "The Cybersecurity Hub",
    description: "Central hub for cybersecurity professionals to discuss trends, share resources, and network.",
    members: "Unknown",
    url: "https://discord.gg/cybersecurity",
    categories: ["community", "learning", "networking"]
  },
  {
    name: "InfoSec Prep",
    description: "Community focused on preparation for cybersecurity careers and certifications.",
    members: "Unknown",
    url: "https://discord.gg/infosecprep",
    categories: ["career", "certification", "learning"]
  },
  {
    name: "Cyber Mentor Support",
    description: "Heath Adams' community focused on practical ethical hacking and penetration testing training.",
    members: "Unknown",
    url: "https://discord.gg/thecybermentor",
    categories: ["learning", "pentesting", "career"]
  },
  {
    name: "Practical Ethical Hacking",
    description: "Community dedicated to learning ethical hacking through hands-on practice and real-world scenarios.",
    members: "Unknown",
    url: "https://discord.gg/ethicalhacking",
    categories: ["pentesting", "learning", "technical"]
  },
  {
    name: "Malware Analysis",
    description: "Community focused on analyzing, understanding, and combating malicious software.",
    members: "Unknown",
    url: "https://discord.gg/malware",
    categories: ["malware", "technical", "learning"]
  },
  {
    name: "OSCP Study Group",
    description: "Study group for those preparing for the Offensive Security Certified Professional exam.",
    members: "Unknown",
    url: "https://discord.gg/oscp",
    categories: ["certification", "pentesting", "learning"]
  },
  {
    name: "0x00sec",
    description: "Technical community focused on deep technical aspects of cybersecurity.",
    members: "Unknown",
    url: "https://discord.gg/0x00sec",
    categories: ["technical", "learning", "community"]
  },
  {
    name: "CyberSecLabs",
    description: "Community for the CyberSecLabs platform, featuring hands-on cybersecurity training environments.",
    members: "Unknown",
    url: "https://discord.gg/cyberseclabs",
    categories: ["learning", "pentesting", "labs"]
  },
  {
    name: "CyberHackers",
    description: "Community for ethical hackers sharing techniques, tools, and knowledge.",
    members: "Unknown",
    url: "https://discord.gg/cyberhackers",
    categories: ["pentesting", "technical", "learning"]
  },
  {
    name: "SANS Blue Team",
    description: "Community focused on defensive security, associated with SANS training.",
    members: "Unknown",
    url: "https://discord.gg/sans",
    categories: ["blue_team", "defense", "learning"]
  },
  {
    name: "Infosec Exchange",
    description: "General infosec community for knowledge sharing and networking.",
    members: "Unknown",
    url: "https://discord.gg/infosec",
    categories: ["community", "networking", "learning"]
  },
  {
    name: "R/Netsec",
    description: "Community associated with the r/netsec subreddit, focused on network security.",
    members: "Unknown",
    url: "https://discord.gg/netsec",
    categories: ["network", "technical", "community"]
  },
  {
    name: "Reverse Engineering",
    description: "Community focused on reverse engineering techniques, tools and methodologies.",
    members: "Unknown",
    url: "https://discord.gg/reverseengineering",
    categories: ["technical", "reverse_engineering", "learning"]
  },
  {
    name: "Red vs Blue",
    description: "Community facilitating exchange between offensive and defensive security practitioners.",
    members: "Unknown",
    url: "https://discord.gg/redvsblue",
    categories: ["red_team", "blue_team", "learning"]
  },
  {
    name: "CTF Practice",
    description: "Community for practicing and discussing Capture The Flag competitions and challenges.",
    members: "Unknown",
    url: "https://discord.gg/ctfpractice",
    categories: ["ctf", "learning", "technical"]
  },
  {
    name: "Digital Forensics",
    description: "Community focused on digital forensics techniques, tools, and methodologies.",
    members: "Unknown",
    url: "https://discord.gg/forensics",
    categories: ["forensics", "technical", "learning"]
  },
  {
    name: "Pwn College",
    description: "Educational community focused on binary exploitation and low-level security.",
    members: "Unknown",
    url: "https://discord.gg/pwncollege",
    categories: ["technical", "learning", "exploitation"]
  },
  {
    name: "Security Blue Team",
    description: "Community focused on defensive security operations and blue team training.",
    members: "Unknown",
    url: "https://discord.gg/securityblueteam",
    categories: ["blue_team", "defense", "learning"]
  },
  {
    name: "Hack South",
    description: "Community focused on the cybersecurity ecosystem in the southern hemisphere.",
    members: "Unknown",
    url: "https://discord.gg/hacksouth",
    categories: ["community", "regional", "learning"]
  },
  {
    name: "OWASP",
    description: "Community related to the Open Web Application Security Project foundation.",
    members: "Unknown",
    url: "https://discord.gg/owasp",
    categories: ["web_security", "development", "community"]
  },
  {
    name: "Cyber Guerrilla",
    description: "Community focused on advanced offensive security techniques and research.",
    members: "Unknown",
    url: "https://discord.gg/cyberguerrilla",
    categories: ["technical", "red_team", "research"]
  },
  {
    name: "Binary Exploitation",
    description: "Community dedicated to learning and sharing binary exploitation techniques.",
    members: "Unknown",
    url: "https://discord.gg/binaryexploitation",
    categories: ["technical", "exploitation", "learning"]
  },
  {
    name: "Bug Bounty HQ",
    description: "Community focused on bug bounty hunting, methodologies, and sharing experiences.",
    members: "Unknown",
    url: "https://discord.gg/bugbounty",
    categories: ["bug_bounty", "web_security", "career"]
  },
  {
    name: "Cyber Space",
    description: "General cybersecurity community covering a broad range of topics.",
    members: "Unknown",
    url: "https://discord.gg/cyberspace",
    categories: ["community", "learning", "networking"]
  },
  {
    name: "DarkNet Diaries",
    description: "Community around the popular cybersecurity podcast DarkNet Diaries.",
    members: "Unknown",
    url: "https://discord.gg/darknetdiaries",
    categories: ["community", "learning", "podcast"]
  },
  {
    name: "Network Security",
    description: "Community focused on network security concepts, tools, and methodologies.",
    members: "Unknown",
    url: "https://discord.gg/networksecurity",
    categories: ["network", "technical", "learning"]
  },
  {
    name: "Linux and Security",
    description: "Community focused on Linux security and administration from a security perspective.",
    members: "Unknown",
    url: "https://discord.gg/linuxsecurity",
    categories: ["linux", "technical", "learning"]
  },
  {
    name: "Threat Hunting",
    description: "Community focused on proactive threat hunting techniques and methodologies.",
    members: "Unknown",
    url: "https://discord.gg/threathunting",
    categories: ["blue_team", "technical", "detection"]
  },
  {
    name: "OpenSOC",
    description: "Community focused on Security Operations Centers and open-source security tools.",
    members: "Unknown",
    url: "https://discord.gg/opensoc",
    categories: ["blue_team", "soc", "tools"]
  },
  {
    name: "Cybersecurity Careers",
    description: "Community focused on career development, job hunting, and progression in cybersecurity.",
    members: "Unknown",
    url: "https://discord.gg/cybercareers",
    categories: ["career", "networking", "learning"]
  },
  {
    name: "SIEM & SOC Chat",
    description: "Community focused on Security Information and Event Management and SOC operations.",
    members: "Unknown",
    url: "https://discord.gg/soc",
    categories: ["blue_team", "soc", "technical"]
  },
  {
    name: "PicoCTF",
    description: "Community for the PicoCTF competition, focused on beginner-friendly CTF challenges.",
    members: "Unknown",
    url: "https://discord.gg/picoctf",
    categories: ["ctf", "learning", "beginner"]
  },
  {
    name: "Hackademy",
    description: "Educational community focused on practical cybersecurity skills and training.",
    members: "Unknown",
    url: "https://discord.gg/hackademy",
    categories: ["learning", "technical", "training"]
  },
  {
    name: "Ethical Hackers Hub",
    description: "Community for ethical hackers to network and share knowledge.",
    members: "Unknown",
    url: "https://discord.gg/hackershub",
    categories: ["pentesting", "learning", "community"]
  },
  {
    name: "Hack Lounge",
    description: "Casual community for hackers and security enthusiasts to discuss and share.",
    members: "Unknown",
    url: "https://discord.gg/hacklounge",
    categories: ["community", "networking", "learning"]
  },
  {
    name: "Pentesting Circle",
    description: "Community focused on penetration testing methodologies and techniques.",
    members: "Unknown",
    url: "https://discord.gg/pentestingcircle",
    categories: ["pentesting", "technical", "learning"]
  },
  {
    name: "Cyber Apprentice",
    description: "Community for those starting their journey in cybersecurity.",
    members: "Unknown",
    url: "https://discord.gg/cyberapprentice",
    categories: ["beginner", "learning", "career"]
  },
  {
    name: "Hack Club",
    description: "Community for young people interested in cybersecurity and ethical hacking.",
    members: "Unknown",
    url: "https://discord.gg/hackclub",
    categories: ["learning", "community", "beginner"]
  },
  {
    name: "CyberTech Talk",
    description: "Community discussing cybersecurity technology, trends, and innovations.",
    members: "Unknown",
    url: "https://discord.gg/cybertechtalk",
    categories: ["technical", "community", "learning"]
  },
  {
    name: "Hacker101",
    description: "Community associated with the Hacker101 educational platform for security researchers.",
    members: "Unknown",
    url: "https://discord.gg/hacker101",
    categories: ["learning", "bug_bounty", "technical"]
  },
  {
    name: "Tiberius Academy",
    description: "Educational community focused on cybersecurity training and career development.",
    members: "Unknown",
    url: "https://discord.gg/tiberius",
    categories: ["learning", "career", "training"]
  },
  {
    name: "OSINT Community",
    description: "Community focused on Open Source Intelligence gathering techniques and tools.",
    members: "Unknown",
    url: "https://discord.gg/osint",
    categories: ["osint", "technical", "learning"]
  },
  {
    name: "CyberSec & Chill",
    description: "Casual community for networking and discussing cybersecurity topics.",
    members: "Unknown",
    url: "https://discord.gg/cybersecandchill",
    categories: ["community", "networking", "learning"]
  }
];