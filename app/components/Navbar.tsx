"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Terminal, Shield, Book, Users } from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const mainNavItems = [
    {
      title: 'Academy',
      icon: Terminal,
      items: [
        { name: 'Learning Paths', href: '/academy/paths', description: 'Structured learning tracks for all levels' },
        { name: 'Hands-on Labs', href: '/academy/labs', description: 'Practice in real-world environments' },
        { name: 'Certifications', href: '/academy/certifications', description: 'Professional certification prep' },
        { name: 'Challenges', href: '/academy/challenges', description: 'Test your skills with CTF challenges' },
      ],
    },
    {
      title: 'Community',
      icon: Users,
      items: [
        { name: 'Discussion Forum', href: '/community/forum', description: 'Engage with the community' },
        { name: 'Events', href: '/community/events', description: 'Upcoming webinars and meetups' },
        { name: 'Mentorship', href: '/community/mentorship', description: 'Connect with industry experts' },
        { name: 'Blog', href: '/community/blog', description: 'Latest insights and articles' },
      ],
    },
    {
      title: 'Resources',
      icon: Book,
      items: [
        { name: 'Documentation', href: '/resources/docs', description: 'Comprehensive guides and references' },
        { name: 'Tools', href: '/resources/tools', description: 'Cybersecurity tools and utilities' },
        { name: 'Research', href: '/resources/research', description: 'Latest security research' },
        { name: 'Guides', href: '/resources/guides', description: 'Step-by-step tutorials' },
      ],
    },
    {
      title: 'Security',
      icon: Shield,
      items: [
        { name: 'Threat Intel', href: '/security/threats', description: 'Real-time threat intelligence' },
        { name: 'Advisories', href: '/security/advisories', description: 'Security advisories and alerts' },
        { name: 'Best Practices', href: '/security/practices', description: 'Security best practices' },
        { name: 'News', href: '/security/news', description: 'Latest security news' },
      ],
    },
  ];

  return (
    <nav className="bg-darker-bg border-b border-accent-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex">
            {mainNavItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center px-4 py-3 text-sm font-medium transition-colors
                    ${
                      activeDropdown === item.title
                        ? 'text-neon-blue bg-accent-bg'
                        : 'text-text-secondary hover:text-neon-blue hover:bg-accent-bg'
                    }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>

                {/* Mega Menu Dropdown */}
                <div
                  className={`absolute left-0 mt-0 w-64 opacity-0 invisible group-hover:opacity-100 
                    group-hover:visible transition-all duration-300 z-50`}
                >
                  <div className="cyber-card py-2 shadow-xl">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-accent-bg transition-colors"
                      >
                        <div className="text-sm font-medium text-text-primary">
                          {subItem.name}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {subItem.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-4 px-4">
            <Link
              href="/search"
              className="text-text-secondary hover:text-neon-blue transition-colors"
            >
              Quick Search
            </Link>
            <div className="h-4 w-px bg-accent-bg"></div>
            <Link
              href="/dashboard"
              className="text-text-secondary hover:text-neon-blue transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 