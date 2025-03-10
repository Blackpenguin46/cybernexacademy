"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Code, Database, Cloud, Server, Lock, Brain, Network, Terminal, FileCode, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

const learningPaths = [
  {
    id: 'offensive-security',
    title: 'Offensive Security',
    icon: Shield,
    description: 'Master penetration testing and ethical hacking through hands-on practice and real-world scenarios.',
    color: 'blue',
    levels: [
      {
        title: 'Beginner',
        description: 'Build foundational knowledge in security concepts and basic tools',
        skills: [
          'Basic networking concepts',
          'Linux fundamentals',
          'Command line basics',
          'Introduction to security tools'
        ],
        resources: [
          {
            title: 'TryHackMe - Complete Beginner Path',
            url: 'https://tryhackme.com/path/outline/beginner',
            type: 'Interactive Labs'
          },
          {
            title: 'OverTheWire - Bandit',
            url: 'https://overthewire.org/wargames/bandit/',
            type: 'Practice'
          },
          {
            title: 'Metasploit Unleashed',
            url: 'https://www.offensive-security.com/metasploit-unleashed/',
            type: 'Course'
          }
        ]
      },
      {
        title: 'Intermediate',
        description: 'Develop practical skills in vulnerability assessment and exploitation',
        skills: [
          'Web application security',
          'Network penetration testing',
          'Vulnerability assessment',
          'Basic exploit development'
        ],
        resources: [
          {
            title: 'HackTheBox Academy',
            url: 'https://academy.hackthebox.com/',
            type: 'Interactive Labs'
          },
          {
            title: 'PortSwigger Web Security Academy',
            url: 'https://portswigger.net/web-security',
            type: 'Course'
          },
          {
            title: 'OWASP Juice Shop',
            url: 'https://owasp.org/www-project-juice-shop/',
            type: 'Practice'
          }
        ]
      },
      {
        title: 'Advanced',
        description: 'Master advanced exploitation techniques and specialized security domains',
        skills: [
          'Advanced exploitation',
          'Malware analysis',
          'Reverse engineering',
          'Custom exploit development'
        ],
        resources: [
          {
            title: 'Offensive Security - PWK/OSCP',
            url: 'https://www.offensive-security.com/pwk-oscp/',
            type: 'Certification'
          },
          {
            title: 'Advanced Penetration Testing',
            url: 'https://www.elearnsecurity.com/course/advanced_penetration_testing/',
            type: 'Course'
          }
        ]
      }
    ]
  },
  {
    id: 'application-security',
    title: 'Application Security',
    icon: Code,
    description: 'Learn secure coding practices and application security testing methodologies.',
    color: 'green',
    levels: [
      {
        title: 'Beginner',
        description: 'Learn fundamental concepts of secure coding and common vulnerabilities',
        skills: [
          'Basic programming concepts',
          'Common vulnerabilities (OWASP Top 10)',
          'Secure coding principles',
          'Input validation'
        ],
        resources: [
          {
            title: 'OWASP Top 10',
            url: 'https://owasp.org/www-project-top-ten/',
            type: 'Guide'
          },
          {
            title: 'SecureFlag',
            url: 'https://www.secureflag.com/platform.html',
            type: 'Interactive Labs'
          }
        ]
      },
      {
        title: 'Intermediate',
        description: 'Master secure development practices and security testing',
        skills: [
          'Security testing automation',
          'Code review techniques',
          'Authentication & authorization',
          'API security'
        ],
        resources: [
          {
            title: 'Security Journey',
            url: 'https://www.securityjourney.com/',
            type: 'Course'
          },
          {
            title: 'Secure Code Warrior',
            url: 'https://www.securecodewarrior.com/',
            type: 'Interactive Labs'
          }
        ]
      },
      {
        title: 'Advanced',
        description: 'Advanced application security and secure architecture',
        skills: [
          'Secure architecture design',
          'Threat modeling',
          'Security frameworks',
          'DevSecOps practices'
        ],
        resources: [
          {
            title: 'CSSLP Certification',
            url: 'https://www.isc2.org/Certifications/CSSLP',
            type: 'Certification'
          },
          {
            title: 'SAFECode Training',
            url: 'https://safecode.org/training/',
            type: 'Course'
          }
        ]
      }
    ]
  },
  // ... similar detailed structures for Database Security and Cloud Security paths
];

export default function LearningPathsPage() {
  const [selectedPath, setSelectedPath] = useState(learningPaths[0]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[40vh] bg-gradient-to-b from-blue-500/20 via-blue-900/10 to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Learning Paths</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose your specialization and follow a structured path from beginner to expert in cybersecurity.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Path Selection */}
        <div className="flex flex-wrap gap-4 mb-12">
          {learningPaths.map((path) => (
            <Button
              key={path.id}
              variant={selectedPath.id === path.id ? "default" : "outline"}
              onClick={() => setSelectedPath(path)}
              className="flex items-center gap-2"
            >
              <path.icon className="w-4 h-4" />
              {path.title}
            </Button>
          ))}
        </div>

        {/* Selected Path Content */}
        <div className="space-y-12">
          {/* Path Overview */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <selectedPath.icon className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedPath.title}</h2>
                <p className="text-gray-400">{selectedPath.description}</p>
              </div>
            </div>
          </div>

          {/* Progression Levels */}
          {selectedPath.levels.map((level, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-2">{level.title}</h3>
                <p className="text-gray-400">{level.description}</p>
              </div>

              <div className="p-6 grid md:grid-cols-2 gap-6">
                {/* Skills */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Skills to Master</h4>
                  <ul className="space-y-2">
                    {level.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Learning Resources</h4>
                  <div className="space-y-3">
                    {level.resources.map((resource, resourceIndex) => (
                      <a
                        key={resourceIndex}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="text-white font-medium">{resource.title}</h5>
                            <span className="text-sm text-gray-400">{resource.type}</span>
                          </div>
                          <Globe className="w-4 h-4 text-blue-500" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 