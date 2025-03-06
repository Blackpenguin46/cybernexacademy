import { BookOpen, Users, Briefcase, GraduationCap, PenToolIcon as Tool, Shield, Search, HelpCircle, Zap, TrendingUp, FileText, Terminal, Code, Lock, Award, Cpu } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  description?: string;
  icon?: any;
  items?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    name: 'Learning',
    href: '/learning',
    items: [
      { name: 'Courses', href: '/learning/courses', icon: FileText },
      { name: 'Labs', href: '/learning/labs', icon: Zap },
      { name: 'Certifications', href: '/learning/certifications', icon: Award },
      { name: 'Learning Paths', href: '/learning/paths', icon: BookOpen },
    ],
  },
  {
    name: 'Community',
    href: '/community',
    items: [
      { name: 'Forums', href: '/community/forums', icon: Users },
      { name: 'Events', href: '/community/events', icon: FileText },
      { name: 'Blog', href: '/community/blog', icon: FileText },
      { name: 'Creators', href: '/community/creators', icon: Users },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    items: [
      { name: 'Tools', href: '/resources/tools', icon: Tool },
      { name: 'Documentation', href: '/resources/docs', icon: FileText },
      { name: 'Support', href: '/resources/support', icon: HelpCircle },
    ],
  },
  { name: 'About', href: '/about' },
];

export const featuredLinks: NavItem[] = [
  { 
    name: 'Featured', 
    href: '/featured',
    icon: Zap
  },
  { 
    name: 'Trending', 
    href: '/trending',
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

export const platformFeatures: NavItem[] = [
  {
    name: 'Learning Resources',
    href: '/learning-resources',
    icon: BookOpen,
    description: 'Access comprehensive cybersecurity learning materials and guides.'
  },
  {
    name: 'Community',
    href: '/community',
    icon: Users,
    description: 'Connect with fellow cybersecurity enthusiasts and professionals.'
  },
  {
    name: 'Careers',
    href: '/careers',
    icon: Briefcase,
    description: 'Explore cybersecurity career paths and job opportunities.'
  },
  {
    name: 'College Students',
    href: '/college-students',
    icon: GraduationCap,
    description: 'Resources and guidance specifically for college students.'
  },
  {
    name: 'Tools & Utilities',
    href: '/tools-utilities',
    icon: Tool,
    description: 'Access essential cybersecurity tools and utilities.'
  },
  {
    name: 'CyberNex+',
    href: '/cybernex-plus',
    icon: Shield,
    description: 'Unlock premium features and advanced learning resources.'
  },
];

export const featuredCourses = [
  {
    id: 1,
    slug: 'ethical-hacking-fundamentals',
    title: 'Ethical Hacking Fundamentals',
    description: 'Master the essential skills and techniques used by ethical hackers to secure systems.',
    price: 49.99,
    level: 'Beginner',
    duration: '8 weeks',
    icon: Terminal
  },
  {
    id: 2,
    slug: 'network-security-specialist',
    title: 'Network Security Specialist',
    description: 'Learn to protect networks from unauthorized access, misuse, and cyber threats.',
    price: 59.99,
    level: 'Intermediate',
    duration: '10 weeks',
    icon: Cpu
  },
  {
    id: 3,
    slug: 'secure-coding-practices',
    title: 'Secure Coding Practices',
    description: 'Develop applications with security in mind and prevent common vulnerabilities.',
    price: 54.99,
    level: 'Advanced',
    duration: '12 weeks',
    icon: Code
  },
];

export const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partners', href: '/partners' },
  ],
  learning: [
    { name: 'Learning Paths', href: '/learning/paths' },
    { name: 'Hands-On Labs', href: '/learning/labs' },
    { name: 'Certifications', href: '/learning/certifications' },
    { name: 'CTF Challenges', href: '/learning/challenges' },
  ],
  community: [
    { name: 'Discussion Forum', href: '/community/forum' },
    { name: 'Events', href: '/community/events' },
    { name: 'Mentorship', href: '/community/mentorship' },
    { name: 'Blog', href: '/community/blog' },
  ],
  resources: [
    { name: 'Tools', href: '/resources/tools' },
    { name: 'Documentation', href: '/resources/docs' },
    { name: 'Support', href: '/resources/support' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}; 