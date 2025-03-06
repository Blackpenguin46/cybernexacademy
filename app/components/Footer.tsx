"use client";

import Link from "next/link";
import { Shield, Github, Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink, MessagesSquare } from 'lucide-react';
import { motion } from "framer-motion";
import { footerLinks } from '../config/navigation';

// Define interface for footer links to include isExternal property
interface FooterLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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

  const itemVariants = {
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

  const socialLinks = [
    {
      name: 'Discord',
      href: 'https://discord.gg/cybernex',
      icon: MessagesSquare,
      color: '#5865F2',
      isExternal: true,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/cybernexacademy',
      icon: Instagram, 
      color: '#E1306C',
      isExternal: true,
    },
  ];

  const sections = [
    {
      title: "Company",
      links: footerLinks.company
    },
    {
      title: "Academy",
      links: footerLinks.academy
    },
    {
      title: "Community",
      links: footerLinks.community
    },
    {
      title: "Insights",
      links: footerLinks.insights
    },
  ];

  return (
    <footer className="bg-dark-card border-t border-dark-border mt-auto relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo and company info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Shield className="w-7 h-7 text-neon-blue mr-2" />
              <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                CyberNex
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm">
              Your free cybersecurity resource hub with expert-curated content, community support, and structured learning paths.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                  style={{ 
                    backgroundColor: `${social.color}20`,
                    color: social.color 
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://discord.gg/cybernex" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors flex items-center">
                  Discord Server
                  <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/cybernexacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors flex items-center">
                  Instagram
                  <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />
                </a>
              </li>
              <li>
                <Link href="/community/hub" className="text-gray-400 hover:text-neon-green transition-colors">
                  Community Hub
                </Link>
              </li>
              <li>
                <Link href="/community/events" className="text-gray-400 hover:text-neon-green transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Insights</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/insights/news" className="text-gray-400 hover:text-[#E1306C] transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/insights/blog" className="text-gray-400 hover:text-[#E1306C] transition-colors">
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link href="/insights/trends" className="text-gray-400 hover:text-[#E1306C] transition-colors">
                  Industry Trends
                </Link>
              </li>
              <li>
                <Link href="/insights/jobs" className="text-gray-400 hover:text-[#E1306C] transition-colors">
                  Job Market
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Academy</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/academy/paths" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href="/academy/certifications" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/academy/youtube" className="text-gray-400 hover:text-neon-blue transition-colors">
                  YouTube Channels
                </Link>
              </li>
              <li>
                <Link href="/academy/careers" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Career Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CyberNex Academy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/about" className="text-gray-500 hover:text-gray-300 text-sm">
              About Us
            </Link>
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;