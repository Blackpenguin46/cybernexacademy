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
      icon: <MessagesSquare className="w-5 h-5" />, 
      href: "https://discord.gg/cybernex", 
      label: "Discord",
      highlight: true
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://instagram.com/cybernexacademy", 
      label: "Instagram",
      highlight: true
    },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
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
    <footer className="relative bg-dark py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-neon-blue/10 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-neon-blue/10 w-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="relative">
                <Shield className="w-6 h-6 mr-2 text-neon-blue group-hover:text-primary-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-display font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-primary-500">
                CyberNex Academy
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your free hub for cybersecurity resources, structured learning paths, community connection, and industry insights.
            </p>

            {/* Social Media Highlight Section */}
            <div className="p-4 bg-dark-card rounded-lg border border-dark-border mb-6">
              <h3 className="text-white font-semibold mb-3">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://discord.gg/cybernex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 bg-[#5865F2]/20 hover:bg-[#5865F2]/30 rounded-md transition-colors duration-300 border border-[#5865F2]/30 hover:border-[#5865F2]/50"
                >
                  <MessagesSquare className="w-5 h-5 text-[#5865F2]" />
                  <span className="font-medium">Discord</span>
                </a>
                <a 
                  href="https://instagram.com/cybernexacademy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 bg-[#E1306C]/20 hover:bg-[#E1306C]/30 rounded-md transition-colors duration-300 border border-[#E1306C]/30 hover:border-[#E1306C]/50"
                >
                  <Instagram className="w-5 h-5 text-[#E1306C]" />
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-5 mb-8">
              {socialLinks.filter(link => !link.highlight).map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-lighter hover:bg-dark-card border border-dark-border hover:border-neon-blue/50 group transition-all duration-300"
                  aria-label={link.label}
                >
                  <span className="text-gray-400 group-hover:text-neon-blue transition-colors duration-300">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-neon-blue/70 mt-0.5" />
                <span className="text-gray-400">contact@cybernex.academy</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-neon-blue/70 mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-neon-blue/70 mt-0.5" />
                <span className="text-gray-400">123 Cyber Street, Digital City</span>
              </div>
            </div>
          </motion.div>

          {sections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-lg font-display font-bold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('http') ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon-blue group flex items-center transition-colors duration-300"
                      >
                        <span className="border-b border-transparent group-hover:border-neon-blue/30 pb-0.5">
                          {link.name}
                        </span>
                        <ExternalLink className="ml-1.5 w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                      </a>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-neon-blue group flex items-center transition-colors duration-300"
                      >
                        <span className="border-b border-transparent group-hover:border-neon-blue/30 pb-0.5">
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 pt-8 text-center text-gray-500 border-t border-dark-border relative"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
          <p className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
            <span>&copy; {currentYear} CyberNex Academy. All rights reserved.</span>
            <span className="hidden sm:block">•</span>
            <span>Empowering the cybersecurity community with free resources.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;