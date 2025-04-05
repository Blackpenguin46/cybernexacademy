export interface DiscordServer {
  name: string;
  description: string;
  members: string;
  url: string;
  categories: string[];
}

export const discordServers: DiscordServer[] = [
  {
    name: "TryHackMe",
    description: "Learning community focused on hands-on cybersecurity training through practical labs and exercises.",
    members: "278K+",
    url: "https://discord.gg/tryhackme",
    categories: ["learning","ctf","pentesting"]
  },
  {
    name: "Hack The Box",
    description: "Community for the popular Hack The Box platform for penetration testing and security challenges.",
    members: "293K+",
    url: "https://discord.gg/hackthebox",
    categories: ["learning","ctf","pentesting"]
  },
  {
    name: "SANS",
    description: "Community for SANS courses and certifications, with discussions on various security topics.",
    members: "Unknown",
    url: "https://discord.gg/sans",
    categories: ["learning","certification","career"]
  },
  {
    name: "PortSwigger",
    description: "Community for users of Burp Suite and web security testing, with discussions on web vulnerabilities.",
    members: "9K+",
    url: "https://discord.gg/portswigger",
    categories: ["web_security","pentesting","tools"]
  },
  {
    name: "Offensive Security",
    description: "Community for Offensive Security courses and certifications like OSCP and Kali Linux.",
    members: "76K+",
    url: "https://discord.gg/offsec",
    categories: ["pentesting","certification","learning"]
  },
  {
    name: "Snyk",
    description: "Community focused on developer security and integrating security into the development lifecycle.",
    members: "Unknown",
    url: "https://discord.gg/snyk",
    categories: ["development","devsecops","application_security"]
  },
  {
    name: "Kali Linux",
    description: "Official community for Kali Linux, the popular penetration testing and ethical hacking Linux distribution.",
    members: "Unknown",
    url: "https://discord.gg/kalilinux",
    categories: ["technical","pentesting","learning"]
  },
  {
    name: "DEFCON",
    description: "The official Discord for DEFCON, one of the world's largest hacking conferences.",
    members: "50K+",
    url: "https://discord.gg/defcon",
    categories: ["community","technical","learning"]
  },
  {
    name: "HackerOne",
    description: "Community for bug bounty hunters and security researchers using the HackerOne platform.",
    members: "Unknown",
    url: "https://discord.gg/hackerone",
    categories: ["bug_bounty","pentesting","career"]
  },
  {
    name: "Blue Team Village",
    description: "Community focused on defensive security, threat detection, and incident response.",
    members: "6K+",
    url: "https://discord.gg/blueteamvillage",
    categories: ["blue_team","defense","technical"]
  },
  {
    name: "Red Team Village",
    description: "Community focused on offensive security, red teaming, and adversary emulation.",
    members: "20K+",
    url: "https://discord.gg/redteamvillage",
    categories: ["red_team","pentesting","technical"]
  },
  {
    name: "Hak5",
    description: "Community centered around Hak5 security tools and products with discussions on hardware hacking.",
    members: "21K+",
    url: "https://discord.gg/hak5",
    categories: ["technical","hardware","tools"]
  },
  {
    name: "Black Hills InfoSec",
    description: "Community led by the Black Hills Information Security team with free training resources.",
    members: "51K+",
    url: "https://discord.gg/bhis",
    categories: ["learning","blue_team","career"]
  },
  {
    name: "NetworkChuck",
    description: "Community for IT enthusiasts with focus on networking, cloud technologies, and cybersecurity.",
    members: "93K+",
    url: "https://discord.gg/networkchuck",
    categories: ["learning","networking","community"]
  },
  {
    name: "Metasploit",
    description: "Community focused on the Metasploit Framework, a powerful penetration testing and exploitation tool.",
    members: "Unknown",
    url: "https://discord.gg/metasploit",
    categories: ["pentesting","tools","technical"]
  }
];