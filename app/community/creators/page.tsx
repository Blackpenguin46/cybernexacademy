"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Youtube, Instagram, MessageCircle, Globe, Users } from 'lucide-react';

const ContentCreatorsPage = () => {
  const platforms = [
    {
      name: 'YouTube',
      icon: Youtube,
      color: 'red-500',
      creators: [
        {
          name: 'John Hammond',
          handle: '@_JohnHammond',
          description: 'Cybersecurity education, CTF walkthroughs, and malware analysis',
          url: 'https://youtube.com/@_JohnHammond',
          subscribers: '1M+',
          topics: ['CTF', 'Malware Analysis', 'Python'],
        },
        {
          name: 'David Bombal',
          handle: '@davidbombal',
          description: 'Networking, cybersecurity certifications, and ethical hacking',
          url: 'https://youtube.com/@davidbombal',
          subscribers: '2.5M+',
          topics: ['Networking', 'Certifications', 'Ethical Hacking'],
        },
        {
          name: 'NetworkChuck',
          handle: '@NetworkChuck',
          description: 'IT career guidance, networking, and cybersecurity tutorials',
          url: 'https://youtube.com/@NetworkChuck',
          subscribers: '1.8M+',
          topics: ['Career Guidance', 'Linux', 'Cloud Security'],
        },
        {
          name: 'LiveOverflow',
          handle: '@LiveOverflow',
          description: 'Deep dives into cybersecurity concepts and bug bounty hunting',
          url: 'https://youtube.com/@LiveOverflow',
          subscribers: '500K+',
          topics: ['Bug Bounty', 'Reverse Engineering', 'CTF'],
        },
      ],
    },
    {
      name: 'Reddit',
      icon: MessageCircle,
      color: 'orange-500',
      communities: [
        {
          name: 'r/netsec',
          members: '1.2M+',
          description: 'Network security news and discussions',
          url: 'https://reddit.com/r/netsec',
          type: 'Technical Discussion',
        },
        {
          name: 'r/cybersecurity',
          members: '800K+',
          description: 'General cybersecurity discussions and news',
          url: 'https://reddit.com/r/cybersecurity',
          type: 'General Discussion',
        },
        {
          name: 'r/HowToHack',
          members: '500K+',
          description: 'Ethical hacking tutorials and resources',
          url: 'https://reddit.com/r/HowToHack',
          type: 'Learning',
        },
        {
          name: 'r/AskNetsec',
          members: '300K+',
          description: 'Q&A forum for security professionals',
          url: 'https://reddit.com/r/AskNetsec',
          type: 'Q&A',
        },
      ],
    },
    {
      name: 'Discord',
      icon: Globe,
      color: 'indigo-500',
      communities: [
        {
          name: 'Hack The Box',
          members: '500K+',
          description: 'Official HTB community for CTF and pentesting',
          inviteUrl: 'https://discord.gg/hackthebox',
          focus: 'CTF & Pentesting',
        },
        {
          name: 'TryHackMe',
          members: '400K+',
          description: 'Learning-focused cybersecurity community',
          inviteUrl: 'https://discord.gg/tryhackme',
          focus: 'Learning & Training',
        },
        {
          name: 'Offensive Security',
          members: '200K+',
          description: 'OSCP and offensive security discussions',
          inviteUrl: 'https://discord.gg/offsec',
          focus: 'Certification & Training',
        },
        {
          name: 'Security Blue Team',
          members: '150K+',
          description: 'Blue team and defensive security community',
          inviteUrl: 'https://discord.gg/securityblueteam',
          focus: 'Blue Team Operations',
        },
      ],
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'pink-500',
      creators: [
        {
          name: 'Cyber Security Hub',
          handle: '@thecybersecurityhub',
          followers: '500K+',
          description: 'Daily cybersecurity tips and news',
          focus: 'News & Tips',
        },
        {
          name: 'Hacker News',
          handle: '@thehackernews',
          followers: '400K+',
          description: 'Breaking cybersecurity news and updates',
          focus: 'News',
        },
        {
          name: 'Security Awareness',
          handle: '@securityawareness',
          followers: '300K+',
          description: 'Security awareness tips and training',
          focus: 'Training',
        },
        {
          name: 'Cyber Skills',
          handle: '@cyberskills',
          followers: '250K+',
          description: 'Skill development and career guidance',
          focus: 'Career Development',
        },
      ],
    },
    {
      name: 'Skool',
      icon: Users,
      color: 'purple-500',
      communities: [
        {
          name: 'Ethical Hacking Academy',
          members: '50K+',
          description: 'Comprehensive ethical hacking courses and community',
          focus: 'Ethical Hacking',
          instructor: 'David Miller',
        },
        {
          name: 'Blue Team Operations',
          members: '30K+',
          description: 'Defensive security and SOC training',
          focus: 'Blue Team',
          instructor: 'Sarah Johnson',
        },
        {
          name: 'Cloud Security Mastery',
          members: '40K+',
          description: 'AWS, Azure, and GCP security training',
          focus: 'Cloud Security',
          instructor: 'Michael Chen',
        },
        {
          name: 'Web App Security',
          members: '35K+',
          description: 'Web application security and bug bounty hunting',
          focus: 'Web Security',
          instructor: 'Emma Williams',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Cybersecurity Content Creators
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the best cybersecurity content creators and communities across different platforms.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="space-y-16">
          {platforms.map((platform, platformIndex) => (
            <motion.section
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: platformIndex * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <platform.icon className={`w-8 h-8 text-${platform.color}`} />
                <h2 className="text-3xl font-bold text-white">{platform.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(platform.creators || platform.communities)?.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.name}
                    </h3>
                    {'handle' in item && (
                      <p className="text-blue-400 text-sm mb-3">{item.handle}</p>
                    )}
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {'topics' in item
                        ? item.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                            >
                              {topic}
                            </span>
                          ))
                        : null}
                      {'focus' in item && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          {item.focus}
                        </span>
                      )}
                    </div>
                    {'url' in item && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Visit Channel →
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCreatorsPage; 