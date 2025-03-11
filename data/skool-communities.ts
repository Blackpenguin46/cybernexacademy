export interface SkoolCommunity {
  name: string;
  description: string;
  students: string;
  url: string;
  categories?: string[];
}

export const skoolCommunities: SkoolCommunity[] = [
  {
    name: "Cybersecurity Fundamentals",
    description: "Learn the core concepts and principles of cybersecurity for beginners.",
    students: "25K+",
    url: "https://www.skool.com/cybersecurityfundamentals",
    categories: ["beginner", "fundamentals"]
  },
  {
    name: "Ethical Hacking Skool",
    description: "Master ethical hacking techniques and methodologies through hands-on practice.",
    students: "22K+",
    url: "https://www.skool.com/ethicalhacking",
    categories: ["pentesting", "hacking"]
  },
  {
    name: "Cyber Career Mastery",
    description: "Navigate your cybersecurity career path with guidance from industry professionals.",
    students: "18K+",
    url: "https://www.skool.com/cybercareermastery",
    categories: ["career", "professional"]
  },
  {
    name: "Advanced Penetration Testing",
    description: "Advanced techniques for penetration testing and vulnerability assessment.",
    students: "15K+",
    url: "https://www.skool.com/advancedpentesting",
    categories: ["advanced", "pentesting"]
  },
  {
    name: "Cloud Security Academy",
    description: "Specialized training in securing cloud environments and services.",
    students: "20K+",
    url: "https://www.skool.com/cloudsecurityacademy",
    categories: ["cloud", "security"]
  },
  {
    name: "SOC Analyst Training",
    description: "Comprehensive training for security operations center analysts.",
    students: "17K+",
    url: "https://www.skool.com/socanalyst",
    categories: ["blue_team", "monitoring"]
  },
  {
    name: "Malware Analysis Masterclass",
    description: "Deep dive into malware analysis techniques and tools.",
    students: "12K+",
    url: "https://www.skool.com/malwareanalysis",
    categories: ["malware", "analysis"]
  },
  {
    name: "Bug Bounty Hunters",
    description: "Community for aspiring and experienced bug bounty hunters.",
    students: "19K+",
    url: "https://www.skool.com/bugbountyhunters",
    categories: ["bug_bounty", "web_security"]
  },
  {
    name: "OSCP Preparation",
    description: "Structured preparation course for the OSCP certification.",
    students: "23K+",
    url: "https://www.skool.com/oscpprep",
    categories: ["certification", "pentesting"]
  },
  {
    name: "Secure Coding Practices",
    description: "Learn to develop secure applications and avoid common vulnerabilities.",
    students: "14K+",
    url: "https://www.skool.com/securecodingpractices",
    categories: ["development", "appsec"]
  }
]; 