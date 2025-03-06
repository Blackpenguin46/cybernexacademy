"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Instagram, Youtube } from 'lucide-react';
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

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Home", href: "/" },
        { name: "Academy", href: "/academy" },
        { name: "Community", href: "/community" },
        { name: "Insights", href: "/insights" },
        { name: "Dashboard", href: "/dashboard" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Courses", href: "/learning/courses" },
        { name: "Learning Paths", href: "/academy/paths" },
        { name: "Tools", href: "/resources/tools" },
        { name: "Challenges", href: "/academy/challenges" },
        { name: "Events", href: "/community/events" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "FAQs", href: "/support/faq" },
        { name: "Contact Us", href: "/support/contact" },
        { name: "Terms of Service", href: "/legal/terms" },
        { name: "Privacy Policy", href: "/legal/privacy" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Team", href: "/about/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Blog", href: "/blog" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/cybernex" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/cybernex" },
    { name: "GitHub", icon: Github, href: "https://github.com/cybernex" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/cybernex" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/cybernex" }
  ];

  return (
    <footer className="border-t border-dark-border bg-dark-background/95 mt-auto">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2">
              <span className="text-neon-blue">Cyber</span>Nex
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Empowering cybersecurity professionals with cutting-edge education, resources, and community support.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-2 lg:col-span-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-dark-border mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} CyberNex Academy. All rights reserved.
            </p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <Link href="/legal/terms" className="text-xs text-gray-500 hover:text-neon-blue">
                Terms of Service
              </Link>
              <Link href="/legal/privacy" className="text-xs text-gray-500 hover:text-neon-blue">
                Privacy Policy
              </Link>
              <Link href="/legal/cookies" className="text-xs text-gray-500 hover:text-neon-blue">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;