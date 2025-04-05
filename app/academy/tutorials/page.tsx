import React from 'react';
import Link from 'next/link';
import { Code, ExternalLink, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TutorialsPage() {

  const tutorials = [
    {
      name: "TryHackMe Tutorials",
      url: "https://tryhackme.com",
      description: "Platform offering numerous rooms and modules that function as hands-on tutorials.",
      type: "Platform"
    },
    {
      name: "Hack The Box Writeups & Walkthroughs",
      url: "https://app.hackthebox.com/writeups",
      description: "Official and community writeups for Hack The Box machines, serving as practical tutorials.",
      type: "Platform Writeups"
    },
    {
      name: "TCM Security Blog Tutorials",
      url: "https://tcm-sec.com/blog/",
      description: "Blog posts often containing detailed tutorials on ethical hacking techniques and tools.",
      type: "Blog"
    },
    {
      name: "LinuxCommand.org",
      url: "http://linuxcommand.org/",
      description: "Tutorials for learning the Linux command line, essential for cybersecurity.",
      type: "Documentation"
    },
    {
      name: "OverTheWire Wargames",
      url: "https://overthewire.org/wargames/",
      description: "Interactive wargames that teach security concepts in a tutorial-like progression.",
      type: "Challenges"
    },
    {
      name: "OWASP Juice Shop Tutorial",
      url: "https://owasp.org/www-project-juice-shop/",
      description: "An intentionally insecure web application with hacking tutorials built-in.",
      type: "Interactive App"
    },
    {
      name: "PentesterLab Exercises",
      url: "https://pentesterlab.com/exercises",
      description: "Hands-on exercises teaching web penetration testing techniques.",
      type: "Labs"
    },
    {
      name: "HackTricks",
      url: "https://book.hacktricks.xyz/",
      description: "Extensive collection of hacking tricks, techniques, and cheat sheets.",
      type: "Documentation / Wiki"
    },
    {
      name: "HackThisSite Tutorials",
      url: "https://www.hackthissite.org/pages/tutorials/",
      description: "Tutorials covering various hacking topics available on the HackThisSite platform.",
      type: "Platform Tutorials"
    },
    {
      name: "Null Byte Tutorials (WonderHowTo)",
      url: "https://null-byte.wonderhowto.com/",
      description: "Blog covering a wide range of ethical hacking and security tutorials.",
      type: "Blog"
    },
    {
      name: "Cybrary Tutorials",
      url: "https://www.cybrary.it",
      description: "Platform offering courses and labs, many of which serve as tutorials.",
      type: "Platform"
    },
    {
      name: "Red Team Tips",
      url: "https://redteamtips.com/",
      description: "Blog focusing on offensive security techniques and red teaming tutorials.",
      type: "Blog"
    },
    {
      name: "Blue Team Tips",
      url: "https://blueteamtips.com/",
      description: "Blog focusing on defensive security techniques and blue teaming tutorials.",
      type: "Blog"
    },
    {
      name: "Hacker101 CTF Walkthroughs",
      url: "https://ctf.hacker101.com/",
      description: "Walkthroughs for Hacker101 CTF challenges, useful as learning tutorials.",
      type: "CTF Writeups"
    },
    {
      name: "PicoCTF Solutions",
      url: "https://picoctf.org/resources",
      description: "Resources and potential writeups for PicoCTF challenges, aiding learning.",
      type: "CTF Resources"
    },
    {
      name: "SecurityTube Python Scripting",
      url: "http://www.securitytube.net/groups?operation=view&groupId=9",
      description: "Video tutorials focused on Python scripting for information security tasks.",
      type: "Video Tutorials"
    },
    {
      name: "BishopFox Labs",
      url: "https://bishopfox.com/resources",
      description: "Security consulting firm blog and resources, often containing technical tutorials.",
      type: "Blog / Research"
    },
    {
      name: "PortSwigger Web Security Academy",
      url: "https://portswigger.net/web-security",
      description: "Comprehensive set of free online labs and tutorials for web security.",
      type: "Labs / Platform"
    },
    {
      name: "DigitalOcean Security Tutorials",
      url: "https://www.digitalocean.com/community/tutorials/tags/security",
      description: "Tutorials focused on server security, firewalls, and related topics.",
      type: "Blog / Documentation"
    },
    {
      name: "Hackernoon Security",
      url: "https://hackernoon.com/tagged/cybersecurity",
      description: "Technology publication with articles often detailing security concepts and tutorials.",
      type: "Publication"
    },
    {
      name: "The DFIR Diva Blog",
      url: "https://dfirdiva.com",
      description: "Blog focusing on Digital Forensics and Incident Response, including tutorials.",
      type: "Blog"
    },
    {
      name: "SANS Cyber Aces Tutorials",
      url: "https://www.cyberaces.org",
      description: "Free introductory cybersecurity courses and tutorials from SANS.",
      type: "Platform / Courses"
    },
    {
      name: "Blue Team Labs Tutorial Scenarios",
      url: "https://blueteamlabs.online/",
      description: "Hands-on labs for defensive security that function as practical tutorials.",
      type: "Labs"
    },
    {
      name: "TryHackMe Room Writeups",
      url: "https://tryhackme-writeups.github.io/",
      description: "Community collection of writeups for TryHackMe rooms.",
      type: "Community Writeups"
    },
    {
      name: "Malware Traffic Analysis",
      url: "https://www.malware-traffic-analysis.net/",
      description: "Blog providing PCAPs and analysis tutorials for malware network traffic.",
      type: "Blog / Analysis"
    },
    {
      name: "FireEye Threat Research Tutorials",
      url: "https://www.mandiant.com/resources", // Mandiant resources
      description: "Mandiant/FireEye resources often include technical deep dives and analysis tutorials.",
      type: "Vendor Research"
    },
    {
      name: "Cybersecurity Career Tutorials (PDF)",
      url: "https://www.sans.org/posters/cybersecurity-career-roadmap/",
      description: "While a roadmap, it guides towards skills often learned via tutorials.",
      type: "Resource / Guide"
    },
    {
      name: "Tenable Blog Tutorials",
      url: "https://www.tenable.com/blog",
      description: "Blog from Tenable covering vulnerability management, often with how-to guides.",
      type: "Vendor Blog"
    },
    {
      name: "Kali Linux Documentation",
      url: "https://docs.kali.org/",
      description: "Official documentation for Kali Linux tools, serving as usage tutorials.",
      type: "Documentation"
    },
    {
      name: "Exploit-DB Tutorials",
      url: "https://www.exploit-db.com/docs",
      description: "Papers and articles section containing tutorials related to exploits and vulnerabilities.",
      type: "Documentation / Articles"
    },
    {
      name: "Shellcode Resources (PDF)",
      url: "https://packetstormsecurity.com/files/147935/shellcode_tutorial.pdf",
      description: "A specific tutorial focused on understanding and writing shellcode.",
      type: "PDF Tutorial"
    },
    {
      name: "Root Me Challenges",
      url: "https://www.root-me.org/",
      description: "Platform offering hacking challenges across various categories, with learning potential.",
      type: "Challenges"
    },
    {
      name: "Red Team Notes",
      url: "https://www.redteamnotes.com/",
      description: "Notes and tutorials related to red team operations and techniques.",
      type: "Documentation / Wiki"
    },
    {
      name: "Hacking Articles",
      url: "https://www.hackingarticles.in/",
      description: "Website publishing articles and tutorials on ethical hacking and penetration testing.",
      type: "Blog"
    },
    {
      name: "Hack The Box Academy Modules",
      url: "https://academy.hackthebox.com/",
      description: "Interactive modules covering cybersecurity topics in a tutorial format.",
      type: "Platform / Modules"
    },
    {
      name: "Practical Networking",
      url: "https://www.practicalnetworking.net/",
      description: "Website offering tutorials and explanations of networking concepts.",
      type: "Blog / Documentation"
    },
    {
      name: "CyberSecLabs",
      url: "https://www.cyberseclabs.co.uk/",
      description: "Online labs for practicing penetration testing skills.",
      type: "Labs"
    },
    {
      name: "Computerphile - Security Tutorials",
      url: "https://www.youtube.com/user/Computerphile",
      description: "YouTube channel explaining computer science concepts, including security topics.",
      type: "Video Tutorials"
    },
    {
      name: "DFIR.training Tutorials",
      url: "https://www.dfir.training/",
      description: "Index of DFIR training resources, including tutorials and how-to guides.",
      type: "Resource Index"
    },
    {
      name: "Cybersecurity Breakdowns",
      url: "https://cybersecuritybreakdown.com/",
      description: "Blog breaking down complex cybersecurity topics into understandable tutorials.",
      type: "Blog"
    },
    {
      name: "TryHackMe AttackBox Guide (PDF)",
      url: "https://assets.tryhackme.com/img/attackbox/attackbox-guide.pdf",
      description: "Guide/tutorial for using the TryHackMe browser-based attack machine.",
      type: "PDF Guide"
    },
    {
      name: "OWASP Top 10 Explained",
      url: "https://owasp.org/www-project-top-ten/",
      description: "The OWASP Top 10 project itself serves as a tutorial on major web risks.",
      type: "Documentation / Standard"
    },
    {
      name: "Cydefe Tutorials",
      url: "https://www.cydefe.com/tutorials",
      description: "Tutorials related to the Cydefe cybersecurity training platform.",
      type: "Platform Tutorials"
    },
    {
      name: "OffSec Free Labs",
      url: "https://training.offensive-security.com/labs/", // Often refers to PG Practice
      description: "Offensive Security's practice labs (PG Practice), requiring subscription.",
      type: "Labs"
    },
    {
      name: "OpenSecurityTraining.info",
      url: "https://opensecuritytraining.info/",
      description: "Archive of free, deep technical training materials on security topics.",
      type: "Courses / Training Materials"
    },
    {
      name: "HackNite Blog",
      url: "https://hacknite.com/",
      description: "Blog featuring cybersecurity tutorials, CTF writeups, and tips.",
      type: "Blog"
    },
    {
      name: "Sektor7 Research",
      url: "https://institute.sektor7.net/",
      description: "Training institute focused on malware development and red teaming techniques.",
      type: "Training Provider"
    },
    {
      name: "ThreatSim Tutorials",
      url: "https://www.threatsim.com/", // May be part of Proofpoint now
      description: "Platform historically offering phishing simulation and training tutorials.",
      type: "Platform (Phishing)"
    },
    {
      name: "GitHub - Awesome Hacking Tutorials",
      url: "https://github.com/Hack-with-Github/Awesome-Hacking",
      description: "A curated list on GitHub pointing to various hacking tutorials and resources.",
      type: "Resource List"
    },
    {
      name: "The Cyber Mentor YouTube (Tutorial Playlist)",
      url: "https://www.youtube.com/c/TheCyberMentor",
      description: "YouTube channel offering numerous ethical hacking tutorials and guides.",
      type: "Video Tutorials"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-cyan-600/10 rounded-xl mb-4">
              <Code className="w-5 h-5 text-cyan-500 mr-2" />
              <span className="text-cyan-500 font-medium">Tutorials</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Cybersecurity Tutorials</h1>
            <p className="text-xl text-gray-400 mb-8">Practical, step-by-step guides for learning specific cybersecurity skills, tools, and techniques.</p>
            <Link href="/academy" className="text-purple-400 hover:underline flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Academy
            </Link>
          </div>
        </div>
      </section>

      {/* Tutorials Grid Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Explore Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-colors flex flex-col justify-between h-full"
              >
                <div>
                  <span className="inline-block bg-cyan-900/30 text-cyan-400 text-xs px-3 py-1 rounded-full mb-3">
                    {tutorial.type}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{tutorial.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{tutorial.description}</p>
                </div>
                <a 
                  href={tutorial.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  View Tutorial
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
            <h2 className="text-2xl font-bold text-white mb-6">Learn by Doing</h2>
            <p className="text-lg text-gray-400 mb-8">
              Dive into these tutorials and gain practical cybersecurity skills.
            </p>
            <Link href="/academy/labs">
              <Button className="bg-cyan-600 hover:bg-cyan-700">
                Try Hands-on Labs
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 