"use client";

import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import ResourceCard from '../../components/ResourceCard'

const certificationPaths = [
  {
    title: 'Entry Level Certifications',
    description: 'Start your cybersecurity journey with these foundational certifications.',
    resources: [
      {
        title: 'CompTIA Security+',
        description: 'Foundational IT security certification covering network security, cryptography, and security concepts.',
        link: 'https://www.comptia.org/certifications/security',
        category: 'Essential Certification',
        icon: '/images/comptia-icon.png',
        isExternal: true,
      },
      {
        title: 'GIAC Security Essentials (GSEC)',
        description: 'Proves mastery of information security beyond simple terminology and concepts.',
        link: 'https://www.giac.org/certification/security-essentials-gsec',
        category: 'Essential Certification',
        icon: '/images/giac-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Intermediate Certifications',
    description: 'Advance your career with these specialized security certifications.',
    resources: [
      {
        title: 'CEH (Certified Ethical Hacker)',
        description: 'Learn to think like a hacker and conduct controlled penetration tests.',
        link: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
        category: 'Penetration Testing',
        icon: '/images/ceh-icon.png',
        isExternal: true,
      },
      {
        title: 'CCNA Security',
        description: 'Cisco certification focusing on network security infrastructure.',
        link: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html',
        category: 'Network Security',
        icon: '/images/cisco-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Advanced Certifications',
    description: 'Expert-level certifications for security professionals.',
    resources: [
      {
        title: 'CISSP',
        description: 'Gold standard in information security certifications, covering eight security domains.',
        link: 'https://www.isc2.org/Certifications/CISSP',
        category: 'Advanced Security',
        icon: '/images/cissp-icon.png',
        isExternal: true,
      },
      {
        title: 'OSCP',
        description: 'Advanced penetration testing certification with hands-on examination.',
        link: 'https://www.offensive-security.com/pwk-oscp/',
        category: 'Penetration Testing',
        icon: '/images/oscp-icon.png',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Specialized Certifications',
    description: 'Focus on specific areas of cybersecurity.',
    resources: [
      {
        title: 'Cloud Security Certifications',
        description: 'AWS Security, Azure Security Engineer, and Google Cloud Security certifications.',
        link: '/academy/certifications/cloud-security',
        category: 'Cloud Security',
        icon: '/images/cloud-icon.png',
        isExternal: false,
      },
      {
        title: 'Forensics Certifications',
        description: 'GCFE, GCFA, and other digital forensics certifications.',
        link: '/academy/certifications/forensics',
        category: 'Digital Forensics',
        icon: '/images/forensics-icon.png',
        isExternal: false,
      },
    ],
  },
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-black">
      <SectionHeader
        title="Certification Paths"
        description="Explore cybersecurity certifications from beginner to advanced levels. Find study materials, exam guides, and preparation resources."
        icon={
          <svg
            className="h-12 w-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        }
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {certificationPaths.map((section, index) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
            <p className="text-gray-400 mb-6">{section.description}</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.resources.map((resource) => (
                <ResourceCard
                  key={resource.title}
                  {...resource}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 