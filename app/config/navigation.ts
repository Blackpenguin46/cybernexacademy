import { 
  BookOpen, 
  Users, 
  Briefcase, 
  GraduationCap, 
  PenToolIcon as Tool, 
  Shield, 
  Search, 
  HelpCircle, 
  Zap, 
  TrendingUp, 
  FileText, 
  Terminal, 
  Code, 
  Cpu, 
  Award, 
  BookMarked, 
  BarChart, 
  Newspaper, 
  Youtube, 
  Flame, 
  GraduationCap as Graduation,
  Building2, 
  CircleUser,
  LucideIcon,
  MessagesSquare,
  Globe,
  Instagram,
  ArrowUpRight,
  BookText,
  LayoutDashboard
} from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  description?: string;
  icon?: any;
  items?: NavItem[];
  isExternal?: boolean;
}

export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  level?: string;
  category: string;
  type: string;
  source?: string;
  url?: string;
  icon: LucideIcon;
}

// Main navigation structure based on CIA triad
export const mainNavigation: NavItem[] = [
  {
    name: 'Community',
    href: '/community',
    items: [
      { name: 'Discord Server', href: 'https://discord.gg/R8J3xMcRMD', icon: MessagesSquare, isExternal: true },
      { name: 'Instagram', href: 'https://instagram.com/cybernexacademy', icon: Instagram, isExternal: true },
      { name: 'Community Hub', href: '/community/hub', icon: Users },
      { name: 'Online Spaces', href: '/community/spaces', icon: Globe },
      { name: 'Events', href: '/community/events', icon: FileText },
    ],
  },
  {
    name: 'Insights',
    href: '/insights',
    items: [
      { name: 'News', href: '/insights/news', icon: Newspaper },
      { name: 'Blog', href: '/insights/blog', icon: FileText },
      { name: 'Industry Trends', href: '/insights/trends', icon: BarChart },
      { name: 'Job Market', href: '/insights/jobs', icon: Building2 },
    ],
  },
  {
    name: 'Academy',
    href: '/academy',
    items: [
      { name: 'Learning Paths', href: '/academy/paths', icon: BookOpen },
      { name: 'YouTube Channels', href: '/academy/youtube', icon: Youtube },
      { name: 'Certifications', href: '/academy/certifications', icon: Award },
      { name: 'Hands-on Labs', href: '/academy/labs', icon: Terminal },
      { name: 'College Students', href: '/academy/college', icon: Graduation },
      { name: 'Job Resources', href: '/academy/careers', icon: Briefcase },
    ],
  },
  { name: 'About', href: '/about' },
];

export const featuredLinks: NavItem[] = [
  { 
    name: 'Getting Started', 
    href: '/academy/getting-started',
    icon: Flame
  },
  { 
    name: 'Trending Resources', 
    href: '/resources/latest',
    icon: TrendingUp
  },
];

export const utilityLinks: NavItem[] = [
  { 
    name: 'Search', 
    href: '/search',
    icon: Search
  },
  { 
    name: 'Help', 
    href: '/help',
    icon: HelpCircle
  },
];

// Platform features for homepage
export const platformFeatures: NavItem[] = [
  {
    name: 'Community',
    href: '/community',
    icon: Users,
    description: 'Connect with fellow cybersecurity enthusiasts in our Discord, Instagram, and other online spaces.'
  },
  {
    name: 'Insights',
    href: '/insights',
    icon: Newspaper,
    description: 'Stay updated with the latest cybersecurity news, blogs, and industry trends.'
  },
  {
    name: 'Learning Paths',
    href: '/academy/paths',
    icon: BookOpen,
    description: 'Follow structured learning paths designed for different cybersecurity career tracks.'
  },
  {
    name: 'College Resources',
    href: '/academy/college',
    icon: GraduationCap,
    description: 'Access scholarships, study materials, and career guidance for college students.'
  },
  {
    name: 'Certification Guides',
    href: '/academy/certifications',
    icon: Award,
    description: 'Study resources for top cybersecurity certifications like Security+, CEH, and CISSP.'
  },
  {
    name: 'Career Resources',
    href: '/academy/careers',
    icon: Briefcase,
    description: 'Improve your resume, prepare for interviews, and find job opportunities in cybersecurity.'
  },
];

// Featured Resources (replacing courses)
export const featuredResources: ResourceItem[] = [
  {
    id: '1',
    slug: 'tryhackme-complete-beginner-path',
    title: 'TryHackMe: Complete Beginner Path',
    description: 'A comprehensive introduction to cybersecurity with hands-on labs and challenges.',
    level: 'Beginner',
    category: 'Hands-on Learning',
    type: 'Platform',
    source: 'TryHackMe',
    url: 'https://tryhackme.com/path/outline/beginner',
    icon: Terminal
  },
  {
    id: '2',
    slug: 'networkchuck-youtube',
    title: 'NetworkChuck YouTube Channel',
    description: 'Engaging videos covering networking, cybersecurity, and ethical hacking topics.',
    level: 'Beginner to Intermediate',
    category: 'Video Content',
    type: 'YouTube',
    source: 'NetworkChuck',
    url: 'https://www.youtube.com/c/NetworkChuck',
    icon: Youtube
  },
  {
    id: '3',
    slug: 'security-plus-study-guide',
    title: 'CompTIA Security+ Study Guide',
    description: 'Comprehensive study materials for the Security+ certification exam.',
    level: 'Intermediate',
    category: 'Certification',
    type: 'Guide',
    source: 'CompTIA',
    url: 'https://www.comptia.org/certifications/security',
    icon: BookText
  },
  {
    id: '4',
    slug: 'hackthebox-starting-point',
    title: 'Hack The Box: Starting Point',
    description: 'Beginner-friendly labs to get started with penetration testing concepts.',
    level: 'Beginner',
    category: 'Hands-on Learning',
    type: 'Platform',
    source: 'Hack The Box',
    url: 'https://app.hackthebox.com/starting-point',
    icon: Terminal
  },
  {
    id: '5',
    slug: 'portswigger-web-security-academy',
    title: 'PortSwigger: Web Security Academy',
    description: 'Free, online web security training from the creators of Burp Suite.',
    level: 'Beginner to Advanced',
    category: 'Web Security',
    type: 'Platform',
    source: 'PortSwigger',
    url: 'https://portswigger.net/web-security',
    icon: Code
  },
  {
    id: '6',
    slug: 'blue-team-labs-online',
    title: 'Blue Team Labs Online',
    description: 'Hands-on labs focused on defensive security and incident response.',
    level: 'Beginner to Intermediate',
    category: 'Defensive Security',
    type: 'Platform',
    source: 'Blue Team Labs',
    url: 'https://blueteamlabs.online/',
    icon: Shield
  },
  {
    id: '7',
    slug: 'lets-defend',
    title: 'LetsDefend',
    description: 'Real-world SOC analyst training platform with simulated incidents.',
    level: 'Beginner to Intermediate',
    category: 'Defensive Security',
    type: 'Platform',
    source: 'LetsDefend',
    url: 'https://letsdefend.io/',
    icon: Shield
  },
  {
    id: '8',
    slug: 'aws-security-fundamentals',
    title: 'AWS Security Fundamentals',
    description: 'Official AWS training covering fundamental cloud security concepts.',
    level: 'Beginner',
    category: 'Cloud Security',
    type: 'Training',
    source: 'AWS',
    url: 'https://aws.amazon.com/training/digital/aws-security-fundamentals/',
    icon: Cpu
  },
  {
    id: '9',
    slug: 'azure-security-engineer',
    title: 'Azure Security Engineer (AZ-500 Path)',
    description: 'Microsoft Learn path for the Azure Security Engineer certification.',
    level: 'Intermediate',
    category: 'Cloud Security',
    type: 'Certification Path',
    source: 'Microsoft',
    url: 'https://learn.microsoft.com/en-us/users/microsoftlearn/collections/17671615',
    icon: Cpu
  },
  {
    id: '10',
    slug: 'cloud-security-alliance-resources',
    title: 'Cloud Security Alliance Resources',
    description: 'Resources and best practices for cloud security from the CSA.',
    level: 'Intermediate to Advanced',
    category: 'Cloud Security',
    type: 'Organization',
    source: 'CSA',
    url: 'https://cloudsecurityalliance.org/research/guidance/',
    icon: Cpu
  },
];

// Learning paths replacing course structure
export const learningPaths = [
  {
    id: '1',
    slug: 'ethical-hacker',
    title: 'Ethical Hacker Path',
    description: 'Learn the skills needed to become an ethical hacker or penetration tester.',
    icon: Terminal,
    resources: [
      'tryhackme-complete-beginner-path',
      'hackthebox-starting-point',
      'portswigger-web-security-academy'
    ]
  },
  {
    id: '2',
    slug: 'security-analyst',
    title: 'Security Analyst Path',
    description: 'Prepare for a career as a SOC analyst or security operations specialist.',
    icon: Shield,
    resources: [
      'security-plus-study-guide',
      'blue-team-labs-online',
      'lets-defend'
    ]
  },
  {
    id: '3',
    slug: 'cloud-security',
    title: 'Cloud Security Path',
    description: 'Master cloud security concepts for AWS, Azure, and Google Cloud.',
    icon: Cpu,
    resources: [
      'aws-security-fundamentals',
      'azure-security-engineer',
      'cloud-security-alliance-resources'
    ]
  },
];

// Footer links updated for new structure
export const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Contributors', href: '/contributors' },
    { name: 'Sponsors', href: '/sponsors' },
  ],
  academy: [
    { name: 'Learning Paths', href: '/academy/paths' },
    { name: 'YouTube Channels', href: '/academy/youtube' },
    { name: 'Certifications', href: '/academy/certifications' },
    { name: 'Labs & CTFs', href: '/academy/labs' },
  ],
  community: [
    { name: 'Discord Server', href: 'https://discord.gg/cybernex', isExternal: true },
    { name: 'Instagram', href: 'https://instagram.com/cybernexacademy', isExternal: true },
    { name: 'Online Spaces', href: '/community/spaces' },
    { name: 'Events', href: '/community/events' },
  ],
  insights: [
    { name: 'News', href: '/insights/news' },
    { name: 'Blog', href: '/insights/blog' },
    { name: 'Industry Trends', href: '/insights/trends' },
    { name: 'Job Market', href: '/insights/jobs' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}; 