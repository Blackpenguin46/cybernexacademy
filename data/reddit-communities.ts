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
    members: "584K+",
    url: "https://www.reddit.com/r/cybersecurity/",
    categories: ["general", "career"]
  },
  {
    name: "r/netsec",
    description: "Technical discussions about network and information security, with a focus on latest vulnerabilities and research.",
    members: "495K+",
    url: "https://www.reddit.com/r/netsec/",
    categories: ["technical", "networking"]
  },
  {
    name: "r/hacking",
    description: "Educational discussions about hacking techniques, tools, and methodologies in an ethical context.",
    members: "2.1M+",
    url: "https://www.reddit.com/r/hacking/",
    categories: ["pentesting", "technical"]
  },
  {
    name: "r/AskNetsec",
    description: "Q&A forum for network security professionals and beginners seeking advice on InfoSec topics.",
    members: "198K+",
    url: "https://www.reddit.com/r/AskNetsec/",
    categories: ["general", "networking", "career"]
  },
  {
    name: "r/reverseengineering",
    description: "Community focused on reverse engineering techniques and tools for software analysis.",
    members: "150K+",
    url: "https://www.reddit.com/r/reverseengineering/",
    categories: ["technical", "malware"]
  },
  {
    name: "r/networking",
    description: "Industry professionals discussing enterprise networking, infrastructure, and troubleshooting.",
    members: "300K+",
    url: "https://www.reddit.com/r/networking/",
    categories: ["networking"]
  },
  {
    name: "r/linuxadmin",
    description: "Linux system administration discussions with security implementations and best practices.",
    members: "180K+",
    url: "https://www.reddit.com/r/linuxadmin/",
    categories: ["technical", "networking"]
  },
  {
    name: "r/malware",
    description: "Analysis and discussion of malware, sharing techniques for detection and prevention.",
    members: "130K+",
    url: "https://www.reddit.com/r/malware/",
    categories: ["malware"]
  },
  {
    name: "r/ethicalhacking",
    description: "Legal and ethical hacking discussions, focusing on educational content and methodology.",
    members: "120K+",
    url: "https://www.reddit.com/r/ethicalhacking/",
    categories: ["pentesting"]
  },
  {
    name: "r/comptia",
    description: "CompTIA certification discussion forum for Security+, Network+, and other IT certifications.",
    members: "170K+",
    url: "https://www.reddit.com/r/comptia/",
    categories: ["career"]
  },
  {
    name: "r/cybersecurity101",
    description: "Beginner-friendly community for foundational cybersecurity concepts and learning resources.",
    members: "75K+",
    url: "https://www.reddit.com/r/cybersecurity101/",
    categories: ["general"]
  },
  {
    name: "r/sysadmin",
    description: "IT professionals discussing system administration, including security considerations.",
    members: "700K+",
    url: "https://www.reddit.com/r/sysadmin/",
    categories: ["technical", "networking"]
  },
  {
    name: "r/blueteamsec",
    description: "Focused on defensive security operations, threat detection, and incident response.",
    members: "50K+",
    url: "https://www.reddit.com/r/blueteamsec/",
    categories: ["general"]
  },
  {
    name: "r/infosecjobs",
    description: "Information security job postings and career advice for security professionals.",
    members: "40K+",
    url: "https://www.reddit.com/r/infosecjobs/",
    categories: ["career"]
  },
  {
    name: "r/bugbounty",
    description: "Bug bounty hunters sharing experiences, methodologies, and program information.",
    members: "85K+",
    url: "https://www.reddit.com/r/bugbounty/",
    categories: ["pentesting"]
  },
  {
    name: "r/lockpicking",
    description: "Community focused on the art of lock picking as a hobby and skill relevant to physical security.",
    members: "230K+",
    url: "https://www.reddit.com/r/lockpicking/",
    categories: ["physical"]
  },
  {
    name: "r/OSINT",
    description: "Open Source Intelligence gathering techniques, tools, and methodologies.",
    members: "150K+",
    url: "https://www.reddit.com/r/OSINT/",
    categories: ["intelligence", "research"]
  },
  {
    name: "r/privacy",
    description: "Discussions about privacy in the digital age, tools, techniques, and legislation.",
    members: "1.1M+",
    url: "https://www.reddit.com/r/Privacy/",
    categories: ["privacy", "general"]
  },
  {
    name: "r/computerforensics",
    description: "Digital forensics professionals sharing techniques, tools, and case studies.",
    members: "110K+",
    url: "https://www.reddit.com/r/computerforensics/",
    categories: ["forensics", "technical"]
  },
  {
    name: "r/dfir",
    description: "Digital Forensics and Incident Response community sharing knowledge and experiences.",
    members: "60K+",
    url: "https://www.reddit.com/r/dfir/",
    categories: ["forensics", "incident_response"]
  }
]; 