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
  },
  {
    name: "Cybersecurity Lab",
    description: "Hands-on lab environment for practicing cybersecurity skills.",
    students: "Unknown",
    url: "https://skool.com/cybersecurity-lab",
    categories: ["learning", "lab", "technical"]
  },
  {
    name: "Red Team Academy",
    description: "Training and community focused on offensive security and red teaming.",
    students: "Unknown",
    url: "https://skool.com/red-team-academy",
    categories: ["red_team", "pentesting", "learning"]
  },
  {
    name: "Blue Teamers Hub",
    description: "Community hub for blue team professionals focused on defensive security.",
    students: "Unknown",
    url: "https://skool.com/blue-teamers-hub",
    categories: ["blue_team", "defense", "community"]
  },
  {
    name: "OSCP Bootcamp",
    description: "Intensive training program focused on preparing for the OSCP certification.",
    students: "Unknown",
    url: "https://skool.com/oscp-bootcamp",
    categories: ["certification", "pentesting", "bootcamp"]
  },
  {
    name: "Threat Intel Collective",
    description: "Community focused on sharing and discussing cyber threat intelligence.",
    students: "Unknown",
    url: "https://skool.com/threat-intel",
    categories: ["intelligence", "threat", "research"]
  },
  {
    name: "CTF Strategy Room",
    description: "Community for discussing strategies and techniques for Capture The Flag competitions.",
    students: "Unknown",
    url: "https://skool.com/ctf-strategy",
    categories: ["ctf", "learning", "strategy"]
  },
  {
    name: "InfoSec Roundtable",
    description: "Forum for discussions on various information security topics and industry trends.",
    students: "Unknown",
    url: "https://skool.com/infosec-roundtable",
    categories: ["general", "community", "discussion"]
  },
  {
    name: "Cyber Risk Circle",
    description: "Community focused on cyber risk management and assessment strategies.",
    students: "Unknown",
    url: "https://skool.com/cyber-risk-circle",
    categories: ["management", "risk", "compliance"]
  },
  {
    name: "GRC and Compliance Hub",
    description: "Hub for professionals focusing on Governance, Risk, and Compliance in cybersecurity.",
    students: "Unknown",
    url: "https://skool.com/grc-hub",
    categories: ["compliance", "governance", "risk"]
  },
  {
    name: "Secure Coding Skool",
    description: "Community focused on secure software development practices and principles.",
    students: "Unknown",
    url: "https://skool.com/secure-coding",
    categories: ["development", "appsec", "learning"]
  },
  {
    name: "Malware Analysts Union",
    description: "Community for malware analysts to share techniques, tools, and findings.",
    students: "Unknown",
    url: "https://skool.com/malware-union",
    categories: ["malware", "analysis", "technical"]
  },
  {
    name: "Cloud Security Group",
    description: "Group focused on discussing cloud security best practices and challenges.",
    students: "Unknown",
    url: "https://skool.com/cloudsec",
    categories: ["cloud", "security", "technical"]
  },
  {
    name: "Ethical Hacking Academy",
    description: "Academy focused on teaching ethical hacking and penetration testing skills.",
    students: "Unknown",
    url: "https://skool.com/ethical-hacking-academy",
    categories: ["pentesting", "hacking", "learning"]
  },
  {
    name: "SOC Analyst Lab",
    description: "Hands-on lab environment for training Security Operations Center analysts.",
    students: "Unknown",
    url: "https://skool.com/soc-analyst-lab",
    categories: ["blue_team", "soc", "lab"]
  },
  {
    name: "Security+ Study Circle",
    description: "Study group for individuals preparing for the CompTIA Security+ certification.",
    students: "Unknown",
    url: "https://skool.com/securityplus",
    categories: ["certification", "learning", "career"]
  },
  {
    name: "Cyber Career Builders",
    description: "Community focused on building and advancing careers in the cybersecurity field.",
    students: "Unknown",
    url: "https://skool.com/career-builders",
    categories: ["career", "professional", "networking"]
  },
  {
    name: "CTF Challenge Center",
    description: "Center for hosting and participating in various Capture The Flag challenges.",
    students: "Unknown",
    url: "https://skool.com/ctf-challenges",
    categories: ["ctf", "learning", "challenges"]
  },
  {
    name: "Cybersecurity Internships",
    description: "Community focused on finding and discussing cybersecurity internship opportunities.",
    students: "Unknown",
    url: "https://skool.com/cyber-internships",
    categories: ["career", "internship", "beginner"]
  },
  {
    name: "Security Certifications Prep",
    description: "Community for preparing for various cybersecurity certifications.",
    students: "Unknown",
    url: "https://skool.com/cert-prep",
    categories: ["certification", "learning", "career"]
  },
  {
    name: "Bug Bounty Hive",
    description: "Community hive for bug bounty hunters to share tips and collaborate.",
    students: "Unknown",
    url: "https://skool.com/bug-bounty",
    categories: ["bug_bounty", "web_security", "community"]
  },
  {
    name: "Reverse Engineering Core",
    description: "Core community focused on software reverse engineering techniques.",
    students: "Unknown",
    url: "https://skool.com/reverse-engineering",
    categories: ["reverse_engineering", "technical", "malware"]
  },
  {
    name: "Incident Response Workshop",
    description: "Workshop environment for practicing and learning incident response procedures.",
    students: "Unknown",
    url: "https://skool.com/ir-workshop",
    categories: ["incident_response", "blue_team", "learning"]
  },
  {
    name: "DFIR Academy",
    description: "Academy focused on Digital Forensics and Incident Response training.",
    students: "Unknown",
    url: "https://skool.com/dfir-academy",
    categories: ["forensics", "incident_response", "learning"]
  },
  {
    name: "Security Research Corner",
    description: "Corner for discussing and sharing cybersecurity research papers and findings.",
    students: "Unknown",
    url: "https://skool.com/research-corner",
    categories: ["research", "technical", "academic"]
  },
  {
    name: "Cyber Labs Access",
    description: "Community providing access to various cybersecurity lab environments.",
    students: "Unknown",
    url: "https://skool.com/cyber-labs",
    categories: ["lab", "learning", "technical"]
  },
  {
    name: "Hack the Planet Group",
    description: "General hacking and cybersecurity discussion group.",
    students: "Unknown",
    url: "https://skool.com/htp",
    categories: ["hacking", "community", "general"]
  },
  {
    name: "Blue Team Bootcamp",
    description: "Intensive training bootcamp focused on blue team and defensive security skills.",
    students: "Unknown",
    url: "https://skool.com/blue-team-bootcamp",
    categories: ["blue_team", "defense", "bootcamp"]
  },
  {
    name: "Cyber Law & Ethics",
    description: "Community discussing legal and ethical considerations within cybersecurity.",
    students: "Unknown",
    url: "https://skool.com/cyberlaw",
    categories: ["legal", "ethics", "compliance"]
  },
  {
    name: "DevSecOps Skool",
    description: "Community focused on integrating security into DevOps practices.",
    students: "Unknown",
    url: "https://skool.com/devsecops",
    categories: ["development", "appsec", "devops"]
  },
  {
    name: "IoT Security Zone",
    description: "Zone dedicated to discussions on Internet of Things (IoT) security challenges.",
    students: "Unknown",
    url: "https://skool.com/iot-security",
    categories: ["iot", "technical", "hardware"]
  },
  {
    name: "AI in Cybersecurity",
    description: "Community exploring the applications and implications of AI in cybersecurity.",
    students: "Unknown",
    url: "https://skool.com/ai-cyber",
    categories: ["ai", "technical", "research"]
  },
  {
    name: "Cyber Resilience Hub",
    description: "Hub focused on building cyber resilience strategies for organizations.",
    students: "Unknown",
    url: "https://skool.com/resilience-hub",
    categories: ["management", "risk", "strategy"]
  },
  {
    name: "Governance Risk Compliance",
    description: "Academy focused on GRC principles and practices in cybersecurity.",
    students: "Unknown",
    url: "https://skool.com/grc-academy",
    categories: ["compliance", "governance", "risk"]
  },
  {
    name: "Purple Team Space",
    description: "Space for collaboration between red and blue teams to improve security posture.",
    students: "Unknown",
    url: "https://skool.com/purple-team",
    categories: ["red_team", "blue_team", "collaboration"]
  },
  {
    name: "Cybersecurity Mentorship",
    description: "Community connecting mentors and mentees in the cybersecurity field.",
    students: "Unknown",
    url: "https://skool.com/mentorship",
    categories: ["career", "networking", "mentorship"]
  },
  {
    name: "Zero Trust Study Group",
    description: "Study group focused on understanding and implementing Zero Trust architecture.",
    students: "Unknown",
    url: "https://skool.com/zero-trust",
    categories: ["architecture", "networking", "technical"]
  },
  {
    name: "Cyber Intel Lab",
    description: "Lab environment focused on cyber intelligence gathering and analysis.",
    students: "Unknown",
    url: "https://skool.com/cyber-intel-lab",
    categories: ["intelligence", "threat", "lab"]
  },
  {
    name: "Skool4Hackers",
    description: "General learning community for aspiring and current hackers.",
    students: "Unknown",
    url: "https://skool.com/skool4hackers",
    categories: ["hacking", "learning", "community"]
  },
  {
    name: "Infosec Networking Zone",
    description: "Zone focused on networking concepts specifically for information security professionals.",
    students: "Unknown",
    url: "https://skool.com/networking-zone",
    categories: ["networking", "technical", "learning"]
  },
  {
    name: "Secure API Training",
    description: "Training community focused on securing APIs and web services.",
    students: "Unknown",
    url: "https://skool.com/api-security",
    categories: ["web_security", "development", "appsec"]
  },
  {
    name: "Cybersecurity Startups",
    description: "Community for founders and professionals involved in cybersecurity startups.",
    students: "Unknown",
    url: "https://skool.com/startup-cyber",
    categories: ["business", "career", "networking"]
  },
  {
    name: "Advanced CTF Team",
    description: "Community for experienced CTF players to collaborate and compete.",
    students: "Unknown",
    url: "https://skool.com/advanced-ctf",
    categories: ["ctf", "advanced", "competition"]
  },
  {
    name: "Red vs Blue Arena",
    description: "Arena for red team vs blue team exercises and simulations.",
    students: "Unknown",
    url: "https://skool.com/redvsblue",
    categories: ["red_team", "blue_team", "simulation"]
  },
  {
    name: "Student Hack Club",
    description: "Hack club community specifically for students interested in cybersecurity.",
    students: "Unknown",
    url: "https://skool.com/hackclub",
    categories: ["learning", "community", "beginner"]
  },
  {
    name: "Cybersecurity UX Design",
    description: "Community focused on the intersection of user experience design and cybersecurity.",
    students: "Unknown",
    url: "https://skool.com/ux-security",
    categories: ["design", "usability", "technical"]
  },
  {
    name: "Operational Tech Security",
    description: "Community focused on the security of operational technology (OT) systems.",
    students: "Unknown",
    url: "https://skool.com/ot-sec",
    categories: ["ot", "ics", "technical"]
  },
  {
    name: "Security Think Tank",
    description: "Think tank community for discussing advanced security concepts and future trends.",
    students: "Unknown",
    url: "https://skool.com/think-tank",
    categories: ["research", "strategy", "discussion"]
  },
  {
    name: "Cyber Futures Forum",
    description: "Forum discussing the future of cybersecurity, emerging threats, and technologies.",
    students: "Unknown",
    url: "https://skool.com/futures",
    categories: ["trends", "research", "discussion"]
  },
  {
    name: "Digital Forensics Room",
    description: "Dedicated room for discussions and resources related to digital forensics.",
    students: "Unknown",
    url: "https://skool.com/df-room",
    categories: ["forensics", "technical", "learning"]
  },
  {
    name: "Dark Web Analysts",
    description: "Community for analysts focused on monitoring and analyzing dark web activities.",
    students: "Unknown",
    url: "https://skool.com/darkweb-analysts",
    categories: ["intelligence", "threat", "research"]
  }
]; 