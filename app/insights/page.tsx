"use client";

import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Newspaper, FileText, BarChart, Building2, ArrowRight, Clock, Eye, Badge } from 'lucide-react';
import SectionHeader from '../components/SectionHeader'
import ResourceCard from '../components/ResourceCard'

// Insights sections with resources
const insightSections = [
  {
    title: 'Cybersecurity News & Trends',
    description: 'Stay updated with the latest cybersecurity news, breaches, and industry updates.',
    resources: [
      {
        title: 'BleepingComputer',
        description: 'Breaking news about cyber breaches, malware, and the latest security updates.',
        link: 'https://www.bleepingcomputer.com',
        category: 'News',
        icon: '/images/bleeping-icon.png',
        isExternal: true,
      },
      {
        title: 'Dark Reading',
        description: 'In-depth coverage of cyber risks, vulnerabilities, and industry insights.',
        link: 'https://www.darkreading.com',
        category: 'News',
        icon: '/images/darkreading-icon.png',
        isExternal: true,
      },
      {
        title: 'Krebs on Security',
        description: 'Investigative journalism covering cybercrime, breaches, and security trends.',
        link: 'https://krebsonsecurity.com',
        category: 'News',
        icon: '/images/krebs-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Job Market & Industry Reports',
    description: 'Explore cybersecurity job trends, salary data, and industry analysis.',
    resources: [
      {
        title: 'CyberSeek',
        description: 'Interactive tools and data for cybersecurity career planning and job market analysis.',
        link: 'https://www.cyberseek.org',
        category: 'Career Intel',
        icon: '/images/cyberseek-icon.png',
        isExternal: true,
      },
      {
        title: 'ISC2 Workforce Study',
        description: 'Comprehensive analysis of the global cybersecurity workforce and industry trends.',
        link: 'https://www.isc2.org/Research',
        category: 'Industry Research',
        icon: '/images/isc2-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'CVE & Vulnerability Feeds',
    description: 'Track the latest vulnerabilities, exploits, and security advisories.',
    resources: [
      {
        title: 'CVE Database',
        description: 'Comprehensive database of publicly known cybersecurity vulnerabilities.',
        link: 'https://cve.mitre.org',
        category: 'Vulnerabilities',
        icon: '/images/cve-icon.png',
        isExternal: true,
      },
      {
        title: 'Exploit Database',
        description: 'Archive of public exploits and corresponding vulnerable software.',
        link: 'https://www.exploit-db.com',
        category: 'Exploits',
        icon: '/images/exploitdb-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Incident Response & Threat Intelligence',
    description: 'Access threat intelligence and incident response resources.',
    resources: [
      {
        title: 'CISA Alerts',
        description: 'Official cybersecurity alerts and technical guidance from CISA.',
        link: 'https://www.cisa.gov/news-events/cybersecurity-advisories',
        category: 'Government Alerts',
        icon: '/images/cisa-icon.png',
        isExternal: true,
      },
      {
        title: 'Mandiant Threat Intel',
        description: 'Research and analysis on APT groups and emerging cyber threats.',
        link: 'https://www.mandiant.com/resources',
        category: 'Threat Research',
        icon: '/images/mandiant-icon.png',
        isExternal: true,
      },
    ],
  },
];

const InsightsPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  // Featured articles
  const featuredArticles = [
    {
      title: 'Understanding Zero-Day Vulnerabilities',
      description: 'A comprehensive guide to zero-day vulnerabilities, how they work, and why they are so dangerous.',
      category: 'Security Concepts',
      readTime: '8 min read',
      views: '1.2K',
      date: 'June 10, 2023',
      href: '/insights/blog/understanding-zero-day-vulnerabilities',
    },
    {
      title: 'The Rise of Ransomware-as-a-Service',
      description: 'Exploring how ransomware has evolved into a service-based model and what that means for organizations.',
      category: 'Threat Intelligence',
      readTime: '12 min read',
      views: '3.5K',
      date: 'May 22, 2023',
      href: '/insights/blog/rise-of-ransomware-as-a-service',
    },
    {
      title: 'Securing Your Cloud Infrastructure',
      description: 'Best practices for implementing robust security measures in cloud environments.',
      category: 'Cloud Security',
      readTime: '10 min read',
      views: '2.8K',
      date: 'April 15, 2023',
      href: '/insights/blog/securing-cloud-infrastructure',
    },
  ];

  // Latest news
  const latestNews = [
    {
      title: 'Major Banking System Hit by Sophisticated Cyber Attack',
      date: 'June 15, 2023',
      source: 'Cybersecurity Today',
      href: '/insights/news/banking-system-cyber-attack',
    },
    {
      title: 'New Vulnerability Found in Popular IoT Devices',
      date: 'June 12, 2023',
      source: 'Tech Security News',
      href: '/insights/news/iot-vulnerability-discovered',
    },
    {
      title: 'Government Releases Updated Cybersecurity Framework',
      date: 'June 8, 2023',
      source: 'Policy Watch',
      href: '/insights/news/government-cybersecurity-framework',
    },
    {
      title: 'Global Ransomware Attacks Increased by 300% in Q2',
      date: 'June 5, 2023',
      source: 'Threat Intelligence Review',
      href: '/insights/news/ransomware-attacks-q2-report',
    },
  ];

  const insightResources = [
    {
      title: 'Krebs on Security',
      description: 'In-depth security news and investigation by Brian Krebs, focusing on cybercrime, privacy, and computer security.',
      link: 'https://krebsonsecurity.com',
      category: 'News & Analysis',
      icon: '/images/krebs-icon.png',
      isExternal: true,
    },
    {
      title: 'The Hacker News',
      description: 'Leading source of trusted news on cybersecurity, hacking, technology, and infosec.',
      link: 'https://thehackernews.com',
      category: 'News & Analysis',
      icon: '/images/thn-icon.png',
      isExternal: true,
    },
    {
      title: 'Dark Reading',
      description: 'Comprehensive source for cybersecurity news, connecting the IT security community.',
      link: 'https://www.darkreading.com',
      category: 'News & Analysis',
      icon: '/images/darkreading-icon.png',
      isExternal: true,
    },
    {
      title: 'Cybersecurity Market Trends',
      description: 'Latest market insights, job trends, and salary information in the cybersecurity industry.',
      link: '/insights/market-trends',
      category: 'Market Intelligence',
      icon: '/images/market-icon.png',
      isExternal: false,
    },
    {
      title: 'Security Weekly',
      description: 'Weekly podcasts and articles covering technical security topics and industry news.',
      link: 'https://securityweekly.com',
      category: 'Podcasts & Media',
      icon: '/images/secweekly-icon.png',
      isExternal: true,
    },
    {
      title: 'SANS Internet Storm Center',
      description: 'Daily security news and analysis from the SANS Technology Institute.',
      link: 'https://isc.sans.edu',
      category: 'Research & Analysis',
      icon: '/images/sans-icon.png',
      isExternal: true,
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <SectionHeader
        title="Insights"
        description="Stay informed with the latest cybersecurity news, trends, vulnerabilities, and industry analysis from trusted sources."
        icon={
          <svg
            className="h-12 w-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        }
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {insightSections.map((section, index) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
            <p className="text-gray-400 mb-6">{section.description}</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.resources.map((resource) => (
                <ResourceCard
                  key={resource.title}
                  {...resource}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsPage;