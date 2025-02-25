'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Search, Shield, Zap, Code, Globe, Lock, Database, PenToolIcon as Tool, Brain, Bug, Activity, ExternalLink, Cloud, Award } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Tool {
  name: string;
  description: string;
  category: string;
  link: string;
}

export default function ToolsUtilitiesPage() {
  const tools: Tool[] = [
    // Penetration Testing and Ethical Hacking
    { name: "Metasploit Framework", description: "Comprehensive pentesting tool", category: "Penetration Testing and Ethical Hacking", link: "https://www.metasploit.com/" },
    { name: "Burp Suite", description: "Web vulnerability scanner and pentesting tool", category: "Penetration Testing and Ethical Hacking", link: "https://portswigger.net/burp" },
    { name: "Kali Linux", description: "OS with pre-installed hacking tools", category: "Penetration Testing and Ethical Hacking", link: "https://www.kali.org/" },
    { name: "Parrot Security OS", description: "OS for penetration testers", category: "Penetration Testing and Ethical Hacking", link: "https://www.parrotsec.org/" },
    { name: "OWASP ZAP", description: "Web application scanner", category: "Penetration Testing and Ethical Hacking", link: "https://www.zaproxy.org/" },
    { name: "Wireshark", description: "Network protocol analyzer", category: "Penetration Testing and Ethical Hacking", link: "https://www.wireshark.org/" },
    { name: "SQLmap", description: "Automatic SQL injection and database takeover tool", category: "Penetration Testing and Ethical Hacking", link: "http://sqlmap.org/" },
    { name: "Nmap", description: "Network discovery and security auditing", category: "Penetration Testing and Ethical Hacking", link: "https://nmap.org/" },
    { name: "John the Ripper", description: "Password cracking tool", category: "Penetration Testing and Ethical Hacking", link: "https://www.openwall.com/john/" },
    { name: "Aircrack-ng", description: "Suite for auditing Wi-Fi networks", category: "Penetration Testing and Ethical Hacking", link: "https://www.aircrack-ng.org/" },

    // Vulnerability Scanning
    { name: "Nessus", description: "Vulnerability scanner for networks", category: "Vulnerability Scanning", link: "https://www.tenable.com/products/nessus" },
    { name: "OpenVAS", description: "Open-source vulnerability scanning platform", category: "Vulnerability Scanning", link: "https://www.openvas.org/" },
    { name: "Qualys Cloud Platform", description: "Cloud-based vulnerability management", category: "Vulnerability Scanning", link: "https://www.qualys.com/" },
    { name: "Acunetix", description: "Web vulnerability scanner", category: "Vulnerability Scanning", link: "https://www.acunetix.com/" },
    { name: "Rapid7 Nexpose", description: "Enterprise vulnerability management", category: "Vulnerability Scanning", link: "https://www.rapid7.com/products/nexpose/" },

    // Threat Intelligence and Analysis
    { name: "MISP", description: "Threat intelligence sharing platform", category: "Threat Intelligence and Analysis", link: "https://www.misp-project.org/" },
    { name: "AlienVault OTX", description: "Open Threat Exchange", category: "Threat Intelligence and Analysis", link: "https://otx.alienvault.com/" },
    { name: "VirusTotal", description: "File and URL analysis", category: "Threat Intelligence and Analysis", link: "https://www.virustotal.com/" },
    { name: "Shodan", description: "Search engine for Internet-connected devices", category: "Threat Intelligence and Analysis", link: "https://www.shodan.io/" },
    { name: "Censys", description: "Internet data collection and search", category: "Threat Intelligence and Analysis", link: "https://censys.io/" },
    { name: "GreyNoise", description: "Network traffic threat analysis", category: "Threat Intelligence and Analysis", link: "https://www.greynoise.io/" },
    { name: "ThreatConnect", description: "Threat intelligence platform", category: "Threat Intelligence and Analysis", link: "https://threatconnect.com/" },
    { name: "IBM X-Force Exchange", description: "Threat intelligence sharing", category: "Threat Intelligence and Analysis", link: "https://exchange.xforce.ibmcloud.com/" },
    { name: "Recorded Future", description: "Threat intelligence", category: "Threat Intelligence and Analysis", link: "https://www.recordedfuture.com/" },
    { name: "CIRCL Passive DNS", description: "DNS analysis platform", category: "Threat Intelligence and Analysis", link: "https://www.circl.lu/services/passive-dns/" },

    // Digital Forensics
    { name: "Autopsy", description: "Open-source digital forensics tool", category: "Digital Forensics", link: "https://www.autopsy.com/" },
    { name: "Volatility", description: "Memory forensics framework", category: "Digital Forensics", link: "https://www.volatilityfoundation.org/" },
    { name: "FTK", description: "Forensic Toolkit - Comprehensive forensics suite", category: "Digital Forensics", link: "https://accessdata.com/products-services/forensic-toolkit-ftk" },
    { name: "Cellebrite", description: "Mobile device forensics", category: "Digital Forensics", link: "https://www.cellebrite.com/" },
    { name: "The Sleuth Kit", description: "File system forensics tools", category: "Digital Forensics", link: "https://www.sleuthkit.org/" },
    { name: "X-Ways Forensics", description: "Advanced forensic analysis tool", category: "Digital Forensics", link: "https://www.x-ways.net/forensics/" },

    // Security Training and Simulations
    { name: "Hack The Box", description: "Penetration testing labs and challenges", category: "Security Training and Simulations", link: "https://www.hackthebox.eu/" },
    { name: "TryHackMe", description: "Cybersecurity labs for learning", category: "Security Training and Simulations", link: "https://tryhackme.com/" },
    { name: "OverTheWire", description: "Wargames for security education", category: "Security Training and Simulations", link: "https://overthewire.org/" },
    { name: "RangeForce", description: "Cybersecurity training platform", category: "Security Training and Simulations", link: "https://www.rangeforce.com/" },
    { name: "Cyberbit", description: "Cyber range platform", category: "Security Training and Simulations", link: "https://www.cyberbit.com/" },
    { name: "Immersive Labs", description: "Hands-on cybersecurity labs", category: "Security Training and Simulations", link: "https://www.immersivelabs.com/" },
    { name: "CTFtime", description: "Competitive CTF tracking platform", category: "Security Training and Simulations", link: "https://ctftime.org/" },
    { name: "Pentester Academy", description: "Security training platform", category: "Security Training and Simulations", link: "https://www.pentesteracademy.com/" },
    { name: "CyberSecLabs", description: "Virtual labs for learning cybersecurity", category: "Security Training and Simulations", link: "https://www.cyberseclabs.co.uk/" },

    // Malware Analysis
    { name: "Cuckoo Sandbox", description: "Open-source malware sandbox", category: "Malware Analysis", link: "https://cuckoosandbox.org/" },
    { name: "REMnux", description: "Linux toolkit for reverse engineering malware", category: "Malware Analysis", link: "https://remnux.org/" },
    { name: "IDA Pro", description: "Disassembler for malware analysis", category: "Malware Analysis", link: "https://www.hex-rays.com/products/ida/" },
    { name: "Ghidra", description: "Reverse engineering framework", category: "Malware Analysis", link: "https://ghidra-sre.org/" },
    { name: "PEStudio", description: "Malware behavior analysis", category: "Malware Analysis", link: "https://www.winitor.com/" },
    { name: "YARA", description: "Pattern matching for malware", category: "Malware Analysis", link: "https://virustotal.github.io/yara/" },
    { name: "MalwareBazaar", description: "Repository for malware samples", category: "Malware Analysis", link: "https://bazaar.abuse.ch/" },

    // Logging, Monitoring, and Incident Response
    { name: "Splunk", description: "Log management and analytics", category: "Logging, Monitoring, and Incident Response", link: "https://www.splunk.com/" },
    { name: "ELK Stack", description: "Elasticsearch, Logstash, Kibana - Log management and visualization", category: "Logging, Monitoring, and Incident Response", link: "https://www.elastic.co/what-is/elk-stack" },
    { name: "SIEMonster", description: "Open-source SIEM platform", category: "Logging, Monitoring, and Incident Response", link: "https://siemonster.com/" },

    // OSINT Tools
    { name: "Maltego", description: "Visual link analysis tool for gathering and connecting information for investigative tasks", category: "OSINT", link: "https://www.maltego.com/" },
    { name: "theHarvester", description: "Tool for gathering e-mail accounts, subdomains, hosts, employee names, open ports and banners from different public sources", category: "OSINT", link: "https://github.com/laramies/theHarvester" },
    { name: "Recon-ng", description: "Full-featured Web Reconnaissance framework written in Python", category: "OSINT", link: "https://github.com/lanmaster53/recon-ng" },
    { name: "SpiderFoot", description: "Automates OSINT collection for threat intelligence", category: "OSINT", link: "https://www.spiderfoot.net/" },

    // Red Team Tools
    { name: "Cobalt Strike", description: "Threat emulation software for red team operations and adversary simulations", category: "Red Team", link: "https://www.cobaltstrike.com/" },

    // Blue Team Tools
    { name: "Snort", description: "Open-source intrusion detection system capable of real-time traffic analysis", category: "Blue Team", link: "https://www.snort.org/" },
    { name: "OSSEC", description: "Open-source host-based intrusion detection system", category: "Blue Team", link: "https://www.ossec.net/" },
    { name: "Sysmon", description: "Windows system service and device driver that monitors and logs system activity to the Windows event log", category: "Blue Team", link: "https://docs.microsoft.com/en-us/sysinternals/downloads/sysmon" },

    // Frameworks
    { name: "MITRE ATT&CK", description: "Globally-accessible knowledge base of adversary tactics and techniques", category: "Framework", link: "https://attack.mitre.org/" },
    { name: "NIST Cybersecurity Framework", description: "Voluntary guidance, based on existing standards, guidelines, and practices for organizations to better manage and reduce cybersecurity risk", category: "Framework", link: "https://www.nist.gov/cyberframework" },
    { name: "ISO/IEC 27001", description: "International standard for information security management", category: "Framework", link: "https://www.iso.org/isoiec-27001-information-security.html" },
    { name: "OWASP Top 10", description: "Standard awareness document for developers and web application security", category: "Framework", link: "https://owasp.org/www-project-top-ten/" },
    { name: "CIS Controls", description: "Set of actions for cyber defense that provide specific ways to stop today's most pervasive and dangerous attacks", category: "Framework", link: "https://www.cisecurity.org/controls/" },

    // Encryption Tools
    { name: "VeraCrypt", description: "Disk encryption software based on TrueCrypt", category: "Encryption", link: "https://www.veracrypt.fr/" },
    { name: "GnuPG", description: "Complete and free implementation of the OpenPGP standard", category: "Encryption", link: "https://gnupg.org/" },
    { name: "OpenSSL", description: "Robust, commercial-grade, full-featured toolkit for TLS and SSL protocols", category: "Encryption", link: "https://www.openssl.org/" },
    { name: "Tor", description: "Free software for enabling anonymous communication", category: "Encryption", link: "https://www.torproject.org/" },
    { name: "Signal", description: "Encrypted messaging and voice calling application", category: "Encryption", link: "https://signal.org/" },

    // Network Security Tools
    { name: "pfSense", description: "Open-source firewall and router software distribution based on FreeBSD", category: "Network Security", link: "https://www.pfsense.org/" },
    { name: "Suricata", description: "High performance Network IDS, IPS and Network Security Monitoring engine", category: "Network Security", link: "https://suricata-ids.org/" },
    { name: "Zeek", description: "Powerful network analysis framework", category: "Network Security", link: "https://zeek.org/" },
    { name: "Kismet", description: "Wireless network detector, sniffer, and intrusion detection system", category: "Network Security", link: "https://www.kismetwireless.net/" },

    // Cloud Security Tools
    { name: "AWS GuardDuty", description: "Threat detection service that continuously monitors for malicious activity and unauthorized behavior", category: "Cloud Security", link: "https://aws.amazon.com/guardduty/" },
    { name: "Azure Security Center", description: "Unified infrastructure security management system that strengthens the security posture of your data centers", category: "Cloud Security", link: "https://azure.microsoft.com/en-us/services/security-center/" },
    { name: "Google Cloud Security Command Center", description: "Centralized security management system for Google Cloud resources", category: "Cloud Security", link: "https://cloud.google.com/security-command-center" },
    { name: "CloudSploit", description: "Cloud security configuration monitoring", category: "Cloud Security", link: "https://cloudsploit.com/" },
    { name: "Prowler", description: "AWS security best practices assessment, auditing, hardening and forensics readiness tool", category: "Cloud Security", link: "https://github.com/toniblyx/prowler" }
  ];

  const categories = Array.from(new Set(tools.map(tool => tool.category)));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Penetration Testing and Ethical Hacking":
        return Bug;
      case "Vulnerability Scanning":
        return Search;
      case "Threat Intelligence and Analysis":
        return Brain;
      case "Digital Forensics":
        return Database;
      case "Security Training and Simulations":
        return Tool;
      case "Malware Analysis":
        return Bug;
      case "Logging, Monitoring, and Incident Response":
        return Activity;
      case "OSINT":
        return Search;
      case "Red Team":
        return Zap;
      case "Blue Team":
        return Shield;
      case "Framework":
        return Code;
      case "Encryption":
        return Lock;
      case "Network Security":
        return Globe;
      case "Cloud Security":
        return Cloud;
      default:
        return Tool;
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Cybersecurity Tools & Utilities</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore a comprehensive collection of cybersecurity tools and utilities. 
        Click on each category to view detailed information and resources.
      </p>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {categories.map((category, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-xl font-semibold flex items-center">
              {React.createElement(getCategoryIcon(category), { className: "w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" })}
              {category}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {tools.filter(tool => tool.category === category).map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{tool.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>
                    <Link 
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center"
                    >
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="text-gray-600 dark:text-gray-400 mt-8">
        These tools can significantly boost your cybersecurity career. Remember to choose tools that align with your career goals and current experience level.
      </p>
    </div>
  )
}

