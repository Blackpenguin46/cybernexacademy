"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Academy',
      links: [
        { label: 'Learning Paths', href: '/academy/paths' },
        { label: 'Hands-on Labs', href: '/academy/labs' },
        { label: 'Certifications', href: '/academy/certifications' },
        { label: 'Challenges', href: '/academy/challenges' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Discussion Forum', href: '/community/forum' },
        { label: 'Events', href: '/community/events' },
        { label: 'Mentorship', href: '/community/mentorship' },
        { label: 'Blog', href: '/community/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/resources/docs' },
        { label: 'Tools', href: '/resources/tools' },
        { label: 'Research', href: '/resources/research' },
        { label: 'Guides', href: '/resources/guides' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/company/about' },
        { label: 'Contact', href: '/company/contact' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Privacy Policy', href: '/company/privacy' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@cybernex.com', label: 'Email' },
  ];

  return (
    <footer className="bg-darker-bg border-t border-accent-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 neon-text">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-neon-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-accent-bg pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4 neon-text-pink">
              Stay Updated
            </h3>
            <p className="text-text-secondary mb-4">
              Subscribe to our newsletter for the latest cybersecurity insights and
              updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-accent-bg border border-neon-blue rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue"
              />
              <button
                type="submit"
                className="cyber-button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent-bg pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-text-secondary">
              © {currentYear} CyberNex Academy. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-neon-blue transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 