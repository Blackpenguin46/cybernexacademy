"use client";

import Link from "next/link";
import { Shield, Github, Twitter, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";

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
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const sections = [
    {
      title: "Learning",
      links: [
        { name: "Learning Paths", href: "/learning/paths" },
        { name: "Hands-On Labs", href: "/learning/labs" },
        { name: "Certifications", href: "/learning/certifications" },
        { name: "CTF Challenges", href: "/learning/challenges" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Discussion Forum", href: "/community/forum" },
        { name: "Events", href: "/community/events" },
        { name: "Mentorship", href: "/community/mentorship" },
        { name: "Blog", href: "/community/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
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
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6 group">
              <div className="relative">
                <Shield className="w-6 h-6 mr-2 text-neon-blue group-hover:text-primary-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-display font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-primary-500">
                CyberNex
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your gateway to cybersecurity knowledge and career growth in an increasingly digital world.
            </p>
            <div className="flex items-center space-x-5 mb-8">
              {socialLinks.map((link, index) => (
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
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-neon-blue group flex items-center transition-colors duration-300"
                    >
                      <span className="border-b border-transparent group-hover:border-neon-blue/30 pb-0.5">
                        {link.name}
                      </span>
                      <ExternalLink className="ml-1.5 w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </Link>
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
            <span>Securing the digital future, one student at a time.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;