"use client"

import Link from "next/link"
import { 
  Linkedin, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Globe, 
  Shield 
} from "lucide-react"

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
    { icon: Linkedin, href: 'https://linkedin.com/company/cybernex-academy', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/cybernexacademy', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/cybernexacademy', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/c/cybernexacademy', label: 'YouTube' },
    { icon: Mail, href: 'mailto:contact@cybernex.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">CyberNex</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your gateway to mastering cybersecurity skills with expert-led courses, 
              hands-on labs, and a supportive community.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learning" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Learning
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Tools & Utilities
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/documentation" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest cybersecurity insights and updates.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-500 text-xs">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} CyberNex Academy. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/sitemap" className="text-gray-500 hover:text-blue-400 text-xs">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-gray-500 hover:text-blue-400 text-xs">
              Accessibility
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-blue-400 text-xs">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 