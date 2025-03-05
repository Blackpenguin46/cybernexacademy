"use client"

import Link from "next/link"
import { 
  Linkedin, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Globe, 
  Shield,
  Facebook,
  Github
} from "lucide-react"

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Guides', href: '/guides' },
    { name: 'API Status', href: '/api-status' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Licensing', href: '/licensing' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
    },
  ],
}

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
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold cyber-gradient-text">CyberNex</span>
            </Link>
            <p className="text-gray-400 text-base">
              Empowering the next generation of cybersecurity professionals through
              expert-led training and hands-on experience.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-base text-gray-400">
                  Get the latest news and updates delivered to your inbox.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 px-4 py-2 text-base text-gray-300 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {currentYear} CyberNex Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 