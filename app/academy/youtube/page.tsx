"use client";

import React, { useState } from 'react'
import SectionHeader from '../../components/SectionHeader'
import ResourceCard from '../../components/ResourceCard'
import { Youtube, Star, Users, Clock, PlayCircle, ExternalLink, Bookmark, Filter, X, BookOpen, Code, Shield, Terminal, Server, Lock, Target, GraduationCap, Calculator, Brain, Cpu, Bug, Video } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '../../components/CategoryFilter'
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Define categories for filtering
const categories: Category[] = [
  { id: 'general-security', name: 'General Security', icon: Shield },
  { id: 'networking', name: 'Networking & Security', icon: Server },
  { id: 'certification', name: 'Certification Prep', icon: BookOpen },
  { id: 'technical-analysis', name: 'Technical Analysis', icon: Code },
  { id: 'penetration-testing', name: 'Penetration Testing', icon: Target },
  { id: 'malware-analysis', name: 'Malware Analysis', icon: Lock },
  { id: 'ethical-hacking', name: 'Ethical Hacking', icon: Terminal },
  { id: 'quantum-computing', name: 'Quantum Computing', icon: Calculator },
  { id: 'ai-cybersecurity', name: 'AI in Cybersecurity', icon: Brain },
  { id: 'general-cybersecurity', name: 'General Cybersecurity', icon: GraduationCap },
  { id: 'bug-bounty', name: 'Bug Bounty', icon: Bug },
  { id: 'conference-community', name: 'Conferences & Community', icon: Users },
];

// Define interface for resource
interface YouTubeResource {
  title: string;
  description: string;
  link: string;
  category: string;
  icon: string;
  isExternal: boolean;
  sectionTitle?: string;
}

// Define interface for section
interface ResourceSection {
  title: string;
  description: string;
  resources: YouTubeResource[];
}

const youtubeResources: ResourceSection[] = [
  {
    title: 'Beginner-Friendly Channels',
    description: 'Start your cybersecurity journey with these educational channels.',
    resources: [
      {
        title: 'NetworkChuck',
        description: 'Engaging tutorials on networking, Linux, and cybersecurity fundamentals.',
        link: 'https://www.youtube.com/c/NetworkChuck',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'David Bombal',
        description: 'Comprehensive tutorials on networking, security tools, and certification prep.',
        link: 'https://www.youtube.com/c/DavidBombal',
        category: 'networking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Professor Messer',
        description: 'Free certification training videos for CompTIA A+, Network+, and Security+.',
        link: 'https://www.youtube.com/user/professormesser',
        category: 'certification',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Dion Training',
        description: 'Provides training materials primarily focused on CompTIA certifications.',
        link: 'https://www.youtube.com/c/DionTraining',
        category: 'certification',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Computerphile',
        description: 'Explains computer science concepts, including many relevant to security.',
        link: 'https://www.youtube.com/user/Computerphile',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Cybersecurity Meg',
        description: 'Focuses on cybersecurity careers, learning resources, and industry insights.',
        link: 'https://www.youtube.com/@cybersecuritymeg',
        category: 'general-cybersecurity',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Computer Security Student',
        description: 'Shares experiences and tips for students learning cybersecurity.',
        link: 'https://www.youtube.com/c/ComputerSecurityStudent',
        category: 'general-cybersecurity',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      }
    ],
  },
  {
    title: 'Advanced Technical Channels',
    description: 'Deep dives into advanced cybersecurity topics and techniques.',
    resources: [
      {
        title: 'John Hammond',
        description: 'Malware analysis, CTF walkthroughs, and advanced security concepts.',
        link: 'https://www.youtube.com/c/JohnHammond010',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'IppSec',
        description: 'Detailed walkthroughs of HackTheBox machines and penetration testing.',
        link: 'https://www.youtube.com/c/ippsec',
        category: 'penetration-testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'LiveOverflow',
        description: 'In-depth explanations of exploits, vulnerabilities, and security research.',
        link: 'https://www.youtube.com/c/LiveOverflow',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'GynvaelEN',
        description: 'Live streams and videos covering reverse engineering, CTFs, and low-level topics.',
        link: 'https://www.youtube.com/c/GynvaelEN',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Malware Analysis For Hedgehogs',
        description: 'Focuses specifically on malware analysis techniques and tutorials.',
        link: 'https://www.youtube.com/@MalwareAnalysisForHedgehogs',
        category: 'malware-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Google Project Zero Blog',
        description: "Details vulnerability research and zero-day exploits found by Google's team.",
        link: 'https://googleprojectzero.blogspot.com/',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'CS50 Cybersecurity Lectures',
        description: "Harvard's introductory course lectures on cybersecurity concepts.",
        link: 'https://cs50.harvard.edu/cybersecurity/',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Specialized Topics & Ethical Hacking',
    description: 'Channels focusing on specific areas like ethical hacking, tools, and techniques.',
    resources: [
      {
        title: 'HackerSploit',
        description: 'Tutorials on penetration testing tools, methodologies, and ethical hacking.',
        link: 'https://www.youtube.com/c/HackerSploit',
        category: 'ethical-hacking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Null Byte',
        description: 'Practical tutorials on ethical hacking, security tools, and programming for security.',
        link: 'https://www.youtube.com/c/NullByteWHT',
        category: 'ethical-hacking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'DarkMode',
        description: 'Content often focusing on penetration testing labs and techniques.',
        link: 'https://www.youtube.com/c/DarkModeYT',
        category: 'penetration-testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'InfoSec Pat',
        description: 'Covers various cybersecurity topics including pentesting, labs, and career advice.',
        link: 'https://www.youtube.com/c/InfoSecPat',
        category: 'ethical-hacking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Tech Raj',
        description: 'Tutorials on ethical hacking, cybersecurity tools, and programming.',
        link: 'https://www.youtube.com/c/TechRaj',
        category: 'ethical-hacking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'The PC Security Channel',
        description: 'Tests and reviews antivirus software and discusses security practices.',
        link: 'https://www.youtube.com/c/ThePCSecurityChannel',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'DayCyberwox',
        description: 'Focuses on cybersecurity careers, learning paths, and certifications (like CISSP).',
        link: 'https://www.youtube.com/@DayCyberwox',
        category: 'certification',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Security News & Updates',
    description: 'Stay updated with the latest cybersecurity news and trends.',
    resources: [
      {
        title: 'Security Weekly',
        description: 'Weekly security news, interviews, and technical segments.',
        link: 'https://www.youtube.com/c/SecurityWeeklyTV',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'The Cyber Mentor',
        description: 'Career advice, ethical hacking tutorials, and certification guidance.',
        link: 'https://www.youtube.com/c/TheCyberMentor',
        category: 'ethical-hacking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'ThioJoeTech',
        description: 'Technology channel that sometimes covers security topics and news.',
        link: 'https://www.youtube.com/user/ThioJoe',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'AllThingsSec',
        description: 'Cybersecurity news, analysis, and discussions on recent events.',
        link: 'https://www.youtube.com/@AllThingsSec',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Bug Bounty & Web Security',
    description: 'Channels specializing in bug bounty hunting and web application security.',
    resources: [
      {
        title: 'NahamSec',
        description: 'Popular channel focusing on bug bounty hunting interviews, recon, and live hacking.',
        link: 'https://www.youtube.com/c/Nahamsec',
        category: 'bug-bounty',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'STÖK',
        description: 'Content centered around bug bounty, recon, and the hacker mindset.',
        link: 'https://www.youtube.com/c/STOKfredrik',
        category: 'bug-bounty',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'HackerOne Channel',
        description: 'Official channel for HackerOne, featuring hacker interviews, tutorials, and event coverage.',
        link: 'https://www.youtube.com/user/Hacker0x01',
        category: 'bug-bounty',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Bugcrowd University',
        description: 'Educational content from Bugcrowd focused on bug bounty hunting skills.',
        link: 'https://www.youtube.com/c/Bugcrowd',
        category: 'bug-bounty',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'InsiderPhD',
        description: 'Focuses on bug bounty hunting, web security, and recon techniques.',
        link: 'https://www.youtube.com/c/InsiderPhD',
        category: 'bug-bounty',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'NahamSec Bug Bounty Series (Playlist)',
        description: 'Specific playlist focusing on learning bug bounty hunting.',
        link: 'https://www.youtube.com/playlist?list=PL8bmg5zx1mj_8vj3kyPsqPrJjMHfF7zON',
        category: 'bug-bounty',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      }
    ]
  },
  {
    title: 'Conference Talks & Community',
    description: 'Recordings from major cybersecurity conferences and community channels.',
    resources: [
      {
        title: 'Black Hat Conference Talks',
        description: 'Official channel featuring recorded briefings from Black Hat conferences.',
        link: 'https://www.youtube.com/c/BlackHatOfficialYT',
        category: 'conference-community',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'DEFCON Media',
        description: 'Official channel for DEF CON conference talks and presentations.',
        link: 'https://www.youtube.com/c/DEFCONConference',
        category: 'conference-community',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Blue Team Village',
        description: 'Content focused on defensive security, often featuring talks from the DEF CON village.',
        link: 'https://www.youtube.com/c/BlueTeamVillage',
        category: 'conference-community',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'RedTeam Village',
        description: 'Content focused on offensive security, often featuring talks from the DEF CON village.',
        link: 'https://www.youtube.com/c/RedTeamVillage',
        category: 'conference-community',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'OWASP Global AppSec',
        description: 'Recordings of talks from OWASP Global AppSec conferences.',
        link: 'https://www.youtube.com/c/OWASPGLOBALAPPSEC',
        category: 'conference-community',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'HackInTheBox YouTube',
        description: 'Recordings of presentations from HITB security conferences.',
        link: 'https://www.youtube.com/@Hackintheboxconf',
        category: 'conference-community',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'SecTalks',
        description: 'Community providing platform for sharing security knowledge, often includes talk recordings.',
        link: 'https://www.youtube.com/c/SecTalks',
        category: 'conference-community',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Hack South YouTube',
        description: 'YouTube channel for the African cybersecurity community Hack South.',
        link: 'https://www.youtube.com/@HackSouth',
        category: 'conference-community',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      }
    ]
  },
  {
    title: 'Vendor & Platform Channels',
    description: 'Channels from security companies and learning platforms.',
    resources: [
      {
        title: 'SANS Institute YouTube',
        description: 'Webcasts, presentations, and course previews from SANS.',
        link: 'https://www.youtube.com/user/SANSInstitute',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Offensive Security',
        description: 'Official channel for Offensive Security, creators of Kali Linux and OSCP.',
        link: 'https://www.youtube.com/user/OffensiveSecurity',
        category: 'penetration-testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'TryHackMe YouTube',
        description: 'Official channel for the TryHackMe learning platform.',
        link: 'https://www.youtube.com/c/TryHackMe',
        category: 'ethical-hacking',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Hack The Box',
        description: 'Official channel for the Hack The Box platform, featuring machine walkthroughs and news.',
        link: 'https://www.youtube.com/c/HackTheBox',
        category: 'penetration-testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Rapid7',
        description: 'Features product demos, threat reports, and security insights from Rapid7.',
        link: 'https://www.youtube.com/c/Rapid7',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'PicoCTF Channel',
        description: 'Official channel related to the PicoCTF competition and platform.',
        link: 'https://www.youtube.com/c/picoCTF',
        category: 'conference-community',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Pentester Academy',
        description: 'Provides samples of training content and webinars on penetration testing.',
        link: 'https://www.youtube.com/user/pentestacademy',
        category: 'penetration-testing',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'CybSafe',
        description: 'Focuses on security awareness training and human risk management.',
        link: 'https://www.youtube.com/c/CybSafe',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'DevSecOps',
        description: 'Channel potentially dedicated to DevSecOps practices and tools.',
        link: 'https://www.youtube.com/c/DevSecOps',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'CyberKillChain',
        description: 'Content related to the Cyber Kill Chain framework and threat analysis.',
        link: 'https://www.youtube.com/c/CyberKillChain',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'SecurityFWD',
        description: 'Cybersecurity news, analysis, and interviews.',
        link: 'https://www.youtube.com/c/SecurityFWD',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Microsoft Security Blog',
        description: 'Official blog channel for Microsoft security updates and research (YouTube presence may vary).',
        link: 'https://www.microsoft.com/en-us/security/blog/',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Palo Alto Networks Blog',
        description: 'Channel complementing the blog with videos on threats, products, and trends.',
        link: 'https://www.paloaltonetworks.com/blog',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Check Point Research Blog',
        description: "YouTube content related to Check Point's threat intelligence research.",
        link: 'https://research.checkpoint.com/',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Fortinet Blog',
        description: "Video content related to Fortinet's products, threat research, and news.",
        link: 'https://www.fortinet.com/blog',
        category: 'general-security',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'SentinelOne Blog',
        description: "Video content related to SentinelOne's endpoint security and threat research.",
        link: 'https://www.sentinelone.com/blog/',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Digital Shadows Blog',
        description: 'Video content on digital risk, threat intelligence, and brand protection.',
        link: 'https://www.digitalshadows.com/blog-and-research/',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Unit 42 by Palo Alto',
        description: "Palo Alto Networks' threat intelligence team channel.",
        link: 'https://unit42.paloaltonetworks.com/',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Mandiant Newsroom',
        description: 'Video content from Mandiant (Google Cloud) on threat intelligence and incident response.',
        link: 'https://www.mandiant.com/resources',
        category: 'technical-analysis',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      },
      {
        title: 'Infosec Institute Blog',
        description: "Video content complementing Infosec Institute's training and articles.",
        link: 'https://resources.infosecinstitute.com/',
        category: 'certification',
        icon: '/images/youtube-icon.png',
        isExternal: true,
      }
    ]
  }
];

const quantumComputingCourses = [
  {
    title: "Math and Theory for Beginners",
    description: "Fundamental mathematical concepts and theoretical background for quantum computing",
    url: "https://www.youtube.com/watch?v=tsbCSkvHhMo&t=3037s",
    icon: Calculator,
    category: "beginner"
  },
  {
    title: "The Map of Quantum Computing - Quantum Computing Explained",
    description: "A comprehensive overview of quantum computing concepts and applications",
    url: "https://www.youtube.com/watch?v=-UlxHPIEVqA&t=60s",
    icon: GraduationCap,
    category: "beginner"
  },
  {
    title: "Quantum Computers Aren't What You Think — They're Cooler | Hartmut Neven | TED",
    description: "An insightful TED talk exploring quantum computing misconceptions and potential",
    url: "https://www.youtube.com/watch?v=UtDllX_MTbw",
    icon: Brain,
    category: "beginner"
  },
  {
    title: "Single qubit and its logic gates",
    description: "Understanding the fundamental building blocks of quantum computing",
    url: "https://www.youtube.com/watch?v=rD_fH7O-D5Y&t=683s",
    icon: Cpu,
    category: "intermediate"
  },
  {
    title: "Quantum Gates and Circuits",
    description: "Detailed explanation of quantum gates and circuit design",
    url: "https://www.youtube.com/watch?v=JOJ5zihcd6Q&t=1107s",
    icon: Lock,
    category: "intermediate"
  },
  {
    title: "Coding with Qiskit",
    description: "Practical tutorial series on programming quantum computers using Qiskit",
    url: "https://www.youtube.com/watch?v=oaAjxcIFLtM&list=PLOFEBzvs-VvrgHZt3exM_NNiNKtZlHvZi",
    icon: PlayCircle,
    category: "advanced"
  }
];

const aiCybersecurityVideos = [
  {
    title: "AI in Cybersecurity",
    description: "Overview of artificial intelligence applications in cybersecurity",
    url: "https://www.youtube.com/watch?v=4QzBdeUQ0Dc",
    icon: Brain,
    category: "beginner"
  },
  {
    title: "The AI Cybersecurity future is here",
    description: "Exploring how AI is transforming the cybersecurity landscape",
    url: "https://www.youtube.com/watch?v=S3QNDSax2IA",
    icon: Cpu,
    category: "intermediate"
  },
  {
    title: "Cybersecurity Strategy: Prioritizing AI and Risk Management",
    description: "Strategic approaches to implementing AI in cybersecurity operations",
    url: "https://www.youtube.com/watch?v=AtRJZxvkbUM",
    icon: Lock,
    category: "advanced"
  },
  {
    title: "How AI Can Accelerate Cybersecurity",
    description: "Practical applications of AI to enhance cybersecurity capabilities",
    url: "https://www.youtube.com/watch?v=utcYsBKL7e8",
    icon: PlayCircle,
    category: "intermediate"
  }
];

const generalCybersecurityVideos = [
  {
    title: "Getting Started in Cybersecurity",
    description: "Beginner's guide to entering the cybersecurity field",
    url: "https://www.youtube.com/watch?v=unaRNoGuPf0",
    icon: GraduationCap,
    category: "beginner"
  },
  {
    title: "Ethical Hacking Full Course",
    description: "Comprehensive course covering ethical hacking techniques",
    url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
    icon: Lock,
    category: "intermediate"
  },
  {
    title: "Network Security 101",
    description: "Fundamentals of securing computer networks",
    url: "https://www.youtube.com/watch?v=E03gh1huvW4",
    icon: PlayCircle,
    category: "beginner"
  }
];

export default function YouTubePage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  const getCategoryName = (id: string) => {
    return categories.find(cat => cat.id === id)?.name || id;
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const lowerSearchTerm = searchTerm.toLowerCase();

  const filteredSections = youtubeResources.map(section => ({
    ...section,
    resources: section.resources.filter(resource => {
      const lowerCategory = resource.category.toLowerCase();
      const lowerTitle = resource.title.toLowerCase();
      const lowerDescription = resource.description.toLowerCase();

      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(lowerCategory);
      const searchMatch = lowerSearchTerm === '' || lowerTitle.includes(lowerSearchTerm) || lowerDescription.includes(lowerSearchTerm);

      return categoryMatch && searchMatch;
    }),
  })).filter(section => section.resources.length > 0);

  const featuredCreators = [
    {
      name: "John Hammond",
      channel: "JohnHammond",
      subscribers: "500K+",
      focus: "CTF Walkthroughs, Malware Analysis",
      description: "In-depth technical analysis and hands-on cybersecurity tutorials",
      topPlaylists: [
        "Malware Analysis Fundamentals",
        "CTF Writeups",
        "Programming for Hackers"
      ],
      rating: "4.9/5",
      image: "/images/creators/john-hammond.jpg"
    },
    {
      name: "David Bombal",
      channel: "DavidBombal",
      subscribers: "1M+",
      focus: "Networking, Security Certifications",
      description: "Comprehensive networking and cybersecurity certification preparation",
      topPlaylists: [
        "CompTIA Security+",
        "Ethical Hacking",
        "Cisco CCNA"
      ],
      rating: "4.8/5",
      image: "/images/creators/david-bombal.jpg"
    },
    {
      name: "NetworkChuck",
      channel: "NetworkChuck",
      subscribers: "1.5M+",
      focus: "Networking, Linux, Cloud Security",
      description: "Engaging tutorials on networking, Linux, and cloud technologies",
      topPlaylists: [
        "Linux for Hackers",
        "Cloud Security",
        "Home Lab Setup"
      ],
      rating: "4.9/5",
      image: "/images/creators/networkchuck.jpg"
    }
  ]

  const topCourses = [
    {
      title: "Complete Ethical Hacking Bootcamp",
      creator: "TCM Security",
      duration: "25 hours",
      level: "Beginner to Intermediate",
      topics: [
        "Network Penetration Testing",
        "Web Application Security",
        "Active Directory Attacks",
        "OSINT Techniques"
      ],
      features: [
        "Hands-on Labs",
        "Real-world Examples",
        "Downloadable Resources",
        "Certificate of Completion"
      ],
      rating: "4.9/5",
      students: "50,000+"
    },
    {
      title: "Practical Malware Analysis & Triage",
      creator: "OALabs",
      duration: "20 hours",
      level: "Intermediate",
      topics: [
        "Static Analysis",
        "Dynamic Analysis",
        "Reverse Engineering",
        "Malware Behavior"
      ],
      features: [
        "Live Demonstrations",
        "Analysis Tools",
        "Sample Malware",
        "Case Studies"
      ],
      rating: "4.8/5",
      students: "25,000+"
    },
    {
      title: "Advanced Web Application Hacking",
      creator: "STÖK",
      duration: "30 hours",
      level: "Advanced",
      topics: [
        "Authentication Bypass",
        "SQL Injection",
        "XSS Attacks",
        "API Security"
      ],
      features: [
        "Bug Bounty Tips",
        "Live Hacking",
        "Methodology",
        "Tools & Techniques"
      ],
      rating: "4.7/5",
      students: "35,000+"
    }
  ]

  const playlists = [
    {
      category: "Beginner Fundamentals",
      series: [
        {
          title: "Linux for Beginners",
          creator: "NetworkChuck",
          videos: 15,
          duration: "8 hours"
        },
        {
          title: "Security+ Full Course",
          creator: "Professor Messer",
          videos: 25,
          duration: "15 hours"
        }
      ]
    },
    {
      category: "Penetration Testing",
      series: [
        {
          title: "Web App Penetration Testing",
          creator: "HackerSploit",
          videos: 20,
          duration: "12 hours"
        },
        {
          title: "Mobile App Security",
          creator: "Hak5",
          videos: 18,
          duration: "10 hours"
        }
      ]
    },
    {
      category: "Defensive Security",
      series: [
        {
          title: "Blue Team Techniques",
          creator: "13Cubed",
          videos: 22,
          duration: "14 hours"
        },
        {
          title: "Incident Response",
          creator: "BlackHills InfoSec",
          videos: 16,
          duration: "9 hours"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 pb-20">
      <SectionHeader
        title="YouTube Learning Resources"
        description="Curated collection of educational videos covering various cybersecurity topics"
        icon={<PlayCircle className="w-12 h-12 text-neon-blue" />}
      />
      
      <div className="mt-12 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 inline-block">Quantum Computing Courses</h2>
          <p className="text-gray-300 mb-8">Explore the intersection of quantum physics and computing with these educational videos covering theory, programming, and applications.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quantumComputingCourses.map((course, index) => (
              <a 
                href={course.url} 
                target="_blank" 
                rel="noopener noreferrer"
                key={index} 
                className="bg-gray-900/50 border border-neon-blue/20 rounded-lg p-5 hover:border-neon-blue/50 transition-all hover:shadow-lg hover:shadow-neon-blue/10 group"
              >
                <div className="flex items-start">
                  <div className="bg-gray-800/80 p-3 rounded-lg mr-4">
                    <course.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors">{course.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{course.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        course.category === "beginner" 
                          ? "bg-green-900/30 text-green-400" 
                          : course.category === "intermediate"
                            ? "bg-yellow-900/30 text-yellow-400"
                            : "bg-red-900/30 text-red-400"
                      }`}>
                        {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                      </span>
                      <span className="text-neon-blue text-sm flex items-center">
                        Watch <ExternalLink className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Cybersecurity YouTube Channels"
            description="Curated YouTube channels to enhance your cybersecurity knowledge and skills."
            icon={<Youtube className="h-10 w-10 text-red-500" />}
          />

          <section className="py-8 border-t border-b border-gray-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                placeholder="Search channels..."
                className="max-w-sm bg-gray-900 border-gray-700 placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-gray-900 border-gray-700 hover:bg-gray-800">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter by Category ({selectedCategories.length > 0 ? selectedCategories.map(getCategoryName).join(', ') : 'All'})
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-gray-700 text-white">
                  <DropdownMenuLabel>Filter Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  {categories.map((category) => (
                    <DropdownMenuCheckboxItem
                      key={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                      className="cursor-pointer focus:bg-gray-700"
                    >
                      {category.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {selectedCategories.length > 0 && (
                 <Button 
                   variant="ghost" 
                   size="sm" 
                   onClick={() => setSelectedCategories([])}
                   className="text-gray-400 hover:text-white hover:bg-gray-800"
                 >
                   Clear Filters <X className="w-4 h-4 ml-1.5" />
                 </Button>
               )}
            </div>
          </section>

          {filteredSections.length > 0 ? (
            filteredSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <h2 className="text-2xl font-semibold text-red-400 mb-2">{section.title}</h2>
                <p className="text-gray-400 mb-6">{section.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.resources.map((resource, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors flex flex-col justify-between h-full"
                    >
                      <div>
                        <span className="inline-block bg-red-900/30 text-red-400 text-xs px-3 py-1 rounded-full mb-3 capitalize">
                          {getCategoryName(resource.category) || resource.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{resource.description}</p>
                      </div>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center text-red-400 hover:text-red-300 text-sm font-medium"
                      >
                        Visit Channel
                        <ExternalLink className="w-4 h-4 ml-1.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              <p className="text-lg">No channels match your current search or filter criteria.</p>
              <p>Try adjusting your search term or clearing filters.</p>
            </div>
          )}
        </div>

        <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-500" /> Pro Tips for Learning from YouTube
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <PlayCircle className="h-6 w-6 flex-shrink-0 text-red-500 mt-1" />
              <div>
                <p className="text-white font-medium">Create playlists by topic</p>
                <p className="text-gray-400">Organize videos into playlists based on specific skills or concepts you want to learn.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="h-6 w-6 flex-shrink-0 text-red-500 mt-1" />
              <div>
                <p className="text-white font-medium">Use playback speed options</p>
                <p className="text-gray-400">Speed up basic content or slow down complex explanations to match your learning pace.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Bookmark className="h-6 w-6 flex-shrink-0 text-red-500 mt-1" />
              <div>
                <p className="text-white font-medium">Take notes while watching</p>
                <p className="text-gray-400">Active note-taking improves retention and creates a personal reference for future use.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to expand your knowledge?</h2>
          <p className="text-gray-400 mb-6">Explore our curated courses and certification paths to take your skills to the next level.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/academy/courses">
                Explore Courses
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/academy/certifications">
                View Certifications
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 