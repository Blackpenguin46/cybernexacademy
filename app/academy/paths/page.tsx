import React from 'react';
import Link from 'next/link';
import { Route, ExternalLink, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function LearningPathsPage() {

  const learningPaths = [
    {
      name: "TryHackMe Complete Beginner Path",
      url: "https://tryhackme.com/path/outline/complete-beginner",
      description: "A comprehensive path for absolute beginners starting their cybersecurity journey.",
      provider: "TryHackMe"
    },
    {
      name: "TryHackMe Pre Security Path",
      url: "https://tryhackme.com/path/outline/presecurity",
      description: "Covers foundational security concepts before diving into deeper topics.",
      provider: "TryHackMe"
    },
    {
      name: "TryHackMe Offensive Pentesting",
      url: "https://tryhackme.com/path/outline/pentesting",
      description: "Structured learning path focused on offensive penetration testing skills.",
      provider: "TryHackMe"
    },
    {
      name: "TryHackMe Red Teaming Path",
      url: "https://tryhackme.com/path/outline/redteam",
      description: "Focuses on red teaming techniques, adversary simulation, and advanced attacks.",
      provider: "TryHackMe"
    },
    {
      name: "Hack The Box Starting Point",
      url: "https://app.hackthebox.com/starting-point",
      description: "Guided labs designed for beginners to learn fundamental hacking concepts.",
      provider: "Hack The Box"
    },
    {
      name: "Hack The Box Pro Labs",
      url: "https://academy.hackthebox.com/path/overview", // Academy overview page
      description: "Realistic corporate network environments for practicing penetration testing skills.",
      provider: "Hack The Box"
    },
    {
      name: "HTB Bug Bounty Hunter Path",
      url: "https://academy.hackthebox.com/path/preview/bug-bounty-hunter",
      description: "Learning path dedicated to skills required for bug bounty hunting.",
      provider: "Hack The Box"
    },
    {
      name: "Security Blue Team - SOC Analyst 1",
      url: "https://securityblue.team/collections/soc-analyst-1",
      description: "Training focused on foundational skills for a Tier 1 SOC Analyst role.",
      provider: "Security Blue Team"
    },
    {
      name: "CyberDefenders Career Paths",
      url: "https://cyberdefenders.org/",
      description: "Platform offering blue team challenges and potentially structured paths.",
      provider: "CyberDefenders"
    },
    {
      name: "SANS Cybersecurity Career Roadmap (PDF)",
      url: "https://www.sans.org/posters/cybersecurity-career-roadmap/",
      description: "Visual roadmap outlining various cybersecurity roles and recommended SANS training.",
      provider: "SANS"
    },
    {
      name: "Cisco Networking Academy CyberOps Associate",
      url: "https://www.netacad.com/courses/cybersecurity",
      description: "Training path preparing for the Cisco Certified CyberOps Associate certification.",
      provider: "Cisco"
    },
    {
      name: "Google Cybersecurity Certificate",
      url: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      description: "Professional certificate program on Coursera covering foundational cybersecurity skills.",
      provider: "Google / Coursera"
    },
    {
      name: "IBM Cybersecurity Analyst Path",
      url: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",
      description: "Professional certificate program on Coursera for aspiring cybersecurity analysts.",
      provider: "IBM / Coursera"
    },
    {
      name: "CompTIA Security+ Learning Plan",
      url: "https://www.comptia.org/certifications/security",
      description: "Resources and objectives for preparing for the CompTIA Security+ certification.",
      provider: "CompTIA"
    },
    {
      name: "EC-Council CEH Path",
      url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      description: "Training path leading to the Certified Ethical Hacker (CEH) certification.",
      provider: "EC-Council"
    },
    {
      name: "Cybrary SOC Analyst Path",
      url: "https://www.cybrary.it/catalog/learning-path/soc-analyst/",
      description: "Learning path designed for individuals pursuing a SOC Analyst role.",
      provider: "Cybrary"
    },
    {
      name: "Cybrary Penetration Tester Path",
      url: "https://www.cybrary.it/catalog/learning-path/penetration-tester/",
      description: "Structured learning path for aspiring penetration testers.",
      provider: "Cybrary"
    },
    {
      name: "Cybrary Threat Hunter Path",
      url: "https://www.cybrary.it/catalog/learning-path/threat-hunter/",
      description: "Learning path focused on proactive threat hunting skills and techniques.",
      provider: "Cybrary"
    },
    {
      name: "Cybrary NIST Cybersecurity Framework Path",
      url: "https://www.cybrary.it/catalog/learning-path/nist-framework/",
      description: "Path focused on understanding and implementing the NIST Cybersecurity Framework.",
      provider: "Cybrary"
    },
    {
      name: "Infosec Skills Career Paths",
      url: "https://www.infosecinstitute.com/skills/career-paths/",
      description: "Role-based learning paths covering various cybersecurity careers.",
      provider: "Infosec Institute"
    },
    {
      name: "LinkedIn Cybersecurity Learning Path",
      url: "https://www.linkedin.com/learning/paths/become-a-cybersecurity-professional",
      description: "Collection of courses on LinkedIn Learning aimed at cybersecurity professionals.",
      provider: "LinkedIn Learning"
    },
    {
      name: "Microsoft Cybersecurity Pathway",
      url: "https://learn.microsoft.com/en-us/training/paths/introduction-security-compliance-identity/",
      description: "Microsoft Learn path covering fundamentals of security, compliance, and identity.",
      provider: "Microsoft Learn"
    },
    {
      name: "AWS Security Learning Path",
      url: "https://explore.skillbuilder.aws/learn/course/13400/aws-security-essentials",
      description: "Learning path focused on AWS security fundamentals and services.",
      provider: "AWS Skill Builder"
    },
    {
      name: "FreeCodeCamp Cybersecurity Path",
      url: "https://www.freecodecamp.org/news/tag/cybersecurity/",
      description: "Collection of articles and potentially courses related to cybersecurity.",
      provider: "FreeCodeCamp"
    },
    {
      name: "PentesterLab Path (Web Security)",
      url: "https://pentesterlab.com/",
      description: "Hands-on labs and exercises focused heavily on web application security.",
      provider: "PentesterLab"
    },
    {
      name: "OverTheWire Wargames",
      url: "https://overthewire.org/wargames/",
      description: "Series of wargames designed to teach security concepts through challenges.",
      provider: "OverTheWire"
    },
    {
      name: "PicoCTF Curriculum",
      url: "https://picoctf.org/resources",
      description: "Educational resources associated with the PicoCTF competition platform.",
      provider: "PicoCTF / CMU"
    },
    {
      name: "Linux Foundation Cybersecurity Training",
      url: "https://training.linuxfoundation.org/",
      description: "Training courses offered by the Linux Foundation, including cybersecurity topics.",
      provider: "Linux Foundation"
    },
    {
      name: "EDX Cybersecurity MicroMasters",
      url: "https://www.edx.org/micromasters/ritx-cybersecurity",
      description: "MicroMasters program from RIT on edX covering cybersecurity fundamentals.",
      provider: "edX / RIT"
    },
    {
      name: "University of Maryland Cyber MOOC",
      url: "https://www.coursera.org/specializations/cyber-security",
      description: "Specialization on Coursera covering hardware, software, and cryptography.",
      provider: "Coursera / UMD"
    },
    {
      name: "Stanford Online – Computer and Network Security",
      url: "https://online.stanford.edu/courses/soe-ycssec1-computer-and-network-security",
      description: "Online course covering fundamental concepts of computer and network security.",
      provider: "Stanford Online"
    },
    {
      name: "Harvard Cybersecurity MOOC",
      url: "https://pll.harvard.edu/subject/cybersecurity",
      description: "Online courses and programs related to cybersecurity offered by Harvard.",
      provider: "Harvard"
    },
    {
      name: "Open University Cybersecurity Path",
      url: "https://www.open.edu/openlearn/science-maths-technology/introduction-cyber-security/content-section-overview",
      description: "Introductory cybersecurity course materials from The Open University.",
      provider: "The Open University"
    },
    {
      name: "Skillshare Cybersecurity Course Tracks",
      url: "https://www.skillshare.com/en/browse/cybersecurity",
      description: "Various courses related to cybersecurity available on the Skillshare platform.",
      provider: "Skillshare"
    },
    {
      name: "Pluralsight Security Pathways",
      url: "https://www.pluralsight.com/paths/security-fundamentals",
      description: "Learning paths focused on security fundamentals and specific roles on Pluralsight.",
      provider: "Pluralsight"
    },
    {
      name: "TCM Security Academy",
      url: "https://academy.tcm-sec.com/",
      description: "Offers practical ethical hacking courses and certification paths.",
      provider: "TCM Security"
    },
    {
      name: "StationX Career Roadmap",
      url: "https://www.stationx.net/",
      description: "Provides cybersecurity training bundles and career roadmaps.",
      provider: "StationX"
    },
    {
      name: "Security Tube – Ethical Hacking Path",
      url: "http://www.securitytube.net/",
      description: "Platform with numerous video courses on ethical hacking and security (check for recent content).",
      provider: "Security Tube"
    },
    {
      name: "Hacker101 Free Training Path",
      url: "https://www.hacker101.com/",
      description: "Free web security classes provided by HackerOne.",
      provider: "HackerOne"
    },
    {
      name: "DFIR.training Learning Paths",
      url: "https://www.dfir.training/",
      description: "Website indexing Digital Forensics and Incident Response training resources.",
      provider: "DFIR.training"
    },
    {
      name: "NIST NICE Cybersecurity Workforce Framework (PDF)",
      url: "https://www.nist.gov/system/files/documents/2019/11/14/nice-framework-graphic-v1.0.pdf",
      description: "Framework providing a taxonomy of cybersecurity work roles and knowledge/skills/abilities.",
      provider: "NIST NICE"
    },
    {
      name: "Cyber Career Pathways Tool (NICE)",
      url: "https://niccs.cisa.gov/workforce-development/cyber-career-pathways-tool",
      description: "Interactive tool based on the NICE Framework to explore cyber career paths.",
      provider: "NIST NICE / CISA"
    },
    {
      name: "ISACA Cybersecurity Nexus Career Path",
      url: "https://www.isaca.org/credentialing/cybersecurity-nexus",
      description: "ISACA's resources and certifications aligned with cybersecurity career paths.",
      provider: "ISACA"
    },
    {
      name: "Offensive Security Certifications Map",
      url: "https://www.offsec.com/courses-and-certifications/",
      description: "Overview of Offensive Security's courses and certifications (OSCP, etc.).",
      provider: "Offensive Security"
    },
    {
      name: "BlueTeam Labs Career Track",
      url: "https://blueteamlabs.online/",
      description: "Hands-on labs and challenges focused on defensive cybersecurity skills.",
      provider: "BlueTeam Labs Online"
    },
    {
      name: "Pentester Academy Learning Tracks",
      url: "https://www.pentesteracademy.com/",
      description: "Provides various learning tracks and labs focused on penetration testing.",
      provider: "Pentester Academy"
    },
    {
      name: "Heimdall Cybersecurity Path",
      url: "https://heimdallcybersecurity.com/",
      description: "Offers training paths focused on practical cybersecurity skills.",
      provider: "Heimdall Cybersecurity"
    },
    {
      name: "Hack South – Career Development Path",
      url: "https://www.hacksouth.africa/",
      description: "African cybersecurity community potentially offering career guidance resources.",
      provider: "Hack South"
    },
    {
      name: "R Street Institute Cyber Talent Pipeline",
      url: "https://www.rstreet.org/",
      description: "Think tank resources related to cybersecurity policy and workforce development.",
      provider: "R Street Institute"
    },
    {
      name: "Cybersecurity Lab at Harvard (Interactive Path)",
      url: "https://www.pbs.org/wgbh/nova/labs/lab/cyber/",
      description: "Interactive lab from NOVA/PBS introducing basic cybersecurity concepts.",
      provider: "NOVA Labs / Harvard"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-purple-600/10 rounded-xl mb-4">
              <Route className="w-5 h-5 text-purple-500 mr-2" />
              <span className="text-purple-500 font-medium">Learning Paths</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Cybersecurity Learning Paths</h1>
            <p className="text-xl text-gray-400 mb-8">Structured paths from various providers designed to guide you through specific cybersecurity roles or domains.</p>
            <Link href="/academy" className="text-purple-400 hover:underline flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Academy
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Paths Grid Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Explore Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors flex flex-col justify-between h-full"
              >
                <div>
                  <span className="inline-block bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full mb-3">
                    {path.provider}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{path.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{path.description}</p>
                </div>
                <a 
                  href={path.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  View Path
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Find Your Path</h2>
            <p className="text-lg text-gray-400 mb-8">
              Choose a path that aligns with your career goals and start learning today.
            </p>
            <Link href="/academy/courses">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Explore Courses
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 