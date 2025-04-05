import React from 'react';
import Link from 'next/link';
import { BookOpen, ExternalLink, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function DocumentationPage() {

  const documentationResources = [
    {
      name: "OWASP Official Documentation",
      url: "https://owasp.org/",
      description: "Extensive resources on web application security, including Top 10, testing guides, and projects.",
      type: "Framework / Community"
    },
    {
      name: "MITRE ATT&CK Framework",
      url: "https://attack.mitre.org/",
      description: "Globally-accessible knowledge base of adversary tactics and techniques.",
      type: "Framework"
    },
    {
      name: "NIST Cybersecurity Framework",
      url: "https://www.nist.gov/cyberframework",
      description: "Voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity risk.",
      type: "Framework / Standard"
    },
    {
      name: "CISA Guidance Library",
      url: "https://www.cisa.gov/resources-tools/resources",
      description: "Library of alerts, best practices, and guidance from the US Cybersecurity & Infrastructure Security Agency.",
      type: "Government Guidance"
    },
    {
      name: "NIST SP 800-53",
      url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf",
      description: "Security and Privacy Controls for Information Systems and Organizations.",
      type: "Standard (PDF)"
    },
    {
      name: "NIST SP 800-171",
      url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r2.pdf",
      description: "Protecting Controlled Unclassified Information in Nonfederal Systems.",
      type: "Standard (PDF)"
    },
    {
      name: "ISO/IEC 27001 Overview",
      url: "https://www.iso.org/isoiec-27001-information-security.html",
      description: "International standard for information security management systems (ISMS).",
      type: "Standard Overview"
    },
    {
      name: "CIS Controls",
      url: "https://www.cisecurity.org/controls/cis-controls-list/",
      description: "Prioritized set of actions to protect organizations and data from known cyber attack vectors.",
      type: "Best Practice / Control List"
    },
    {
      name: "Linux Man Pages",
      url: "https://man7.org/linux/man-pages/",
      description: "Online manual pages for Linux commands and system calls.",
      type: "Tool Documentation"
    },
    {
      name: "Wireshark User Guide",
      url: "https://www.wireshark.org/docs/wsug_html_chunked/",
      description: "Official user guide for the Wireshark network protocol analyzer.",
      type: "Tool Documentation"
    },
    {
      name: "Kali Linux Docs",
      url: "https://www.kali.org/docs/",
      description: "Official documentation for the Kali Linux penetration testing distribution.",
      type: "OS Documentation"
    },
    {
      name: "Metasploit Unleashed",
      url: "https://www.offensive-security.com/metasploit-unleashed/",
      description: "Free course providing comprehensive documentation for the Metasploit Framework.",
      type: "Tool Documentation / Course"
    },
    {
      name: "Burp Suite Documentation",
      url: "https://portswigger.net/burp/documentation",
      description: "Official documentation for the Burp Suite web vulnerability scanner.",
      type: "Tool Documentation"
    },
    {
      name: "Suricata Documentation",
      url: "https://suricata.io/docs/",
      description: "Documentation for the Suricata Intrusion Detection System (IDS/IPS).",
      type: "Tool Documentation"
    },
    {
      name: "Snort User Manual",
      url: "https://snort.org/documents",
      description: "Documentation and manuals for the Snort Intrusion Prevention System (IPS).",
      type: "Tool Documentation"
    },
    {
      name: "OSINT Framework",
      url: "https://osintframework.com/",
      description: "A collection of OSINT tools categorized for easy reference (visual framework).",
      type: "Resource Framework"
    },
    {
      name: "CyberChef Docs",
      url: "https://gchq.github.io/CyberChef/",
      description: "Documentation and usage guide for the CyberChef data manipulation tool.",
      type: "Tool Documentation"
    },
    {
      name: "Sigma Rules Documentation",
      url: "https://github.com/SigmaHQ/sigma",
      description: "Generic signature format for SIEM systems, documentation hosted on GitHub.",
      type: "Rule Format / Repository"
    },
    {
      name: "Splunk Docs",
      url: "https://docs.splunk.com/",
      description: "Official documentation for the Splunk data platform.",
      type: "Platform Documentation"
    },
    {
      name: "ELK Stack Docs (Elastic)",
      url: "https://www.elastic.co/guide/",
      description: "Documentation for Elasticsearch, Logstash, Kibana, and Beats.",
      type: "Platform Documentation"
    },
    {
      name: "Shodan API Documentation",
      url: "https://developer.shodan.io/",
      description: "Documentation for the Shodan search engine API.",
      type: "API Documentation"
    },
    {
      name: "VirusTotal API Docs",
      url: "https://developers.virustotal.com/",
      description: "Documentation for the VirusTotal API for file and URL analysis.",
      type: "API Documentation"
    },
    {
      name: "Sysinternals Documentation",
      url: "https://docs.microsoft.com/en-us/sysinternals/",
      description: "Documentation for the Windows Sysinternals suite of utilities.",
      type: "Tool Documentation"
    },
    {
      name: "MITRE Engage",
      url: "https://engage.mitre.org/",
      description: "Framework for planning and discussing adversary engagement operations and denial/deception.",
      type: "Framework"
    },
    {
      name: "Cuckoo Sandbox Docs",
      url: "https://cuckoosandbox.org/",
      description: "Documentation for the Cuckoo automated malware analysis sandbox.",
      type: "Tool Documentation"
    },
    {
      name: "Tanium Docs",
      url: "https://docs.tanium.com/",
      description: "Official documentation for the Tanium endpoint management and security platform.",
      type: "Platform Documentation"
    },
    {
      name: "OSQuery Docs",
      url: "https://osquery.io/",
      description: "Documentation for OSQuery, allowing SQL-based querying of operating system information.",
      type: "Tool Documentation"
    },
    {
      name: "Zeek Documentation",
      url: "https://docs.zeek.org/",
      description: "Documentation for the Zeek network security monitoring framework.",
      type: "Tool Documentation"
    },
    {
      name: "OpenVAS Docs",
      url: "https://greenbone.github.io/docs/",
      description: "Documentation for the OpenVAS vulnerability scanner (part of Greenbone).",
      type: "Tool Documentation"
    },
    {
      name: "Ghidra Software Docs",
      url: "https://ghidra.re/", // Link to main site with docs
      description: "Documentation for the Ghidra software reverse engineering framework.",
      type: "Tool Documentation"
    },
    {
      name: "Autopsy Forensics Docs",
      url: "https://www.sleuthkit.org/autopsy/docs.php",
      description: "Documentation for the Autopsy digital forensics platform.",
      type: "Tool Documentation"
    },
    {
      name: "Volatility Framework Docs",
      url: "https://volatility3.readthedocs.io/", // Volatility 3 docs
      description: "Documentation for the Volatility memory forensics framework.",
      type: "Tool Documentation"
    },
    {
      name: "Sigma Rules for SOC",
      url: "https://sigmahq.io/",
      description: "Main website for Sigma rules, including documentation and usage guides.",
      type: "Rule Format / Resource"
    },
    {
      name: "Suricata Rule Documentation",
      url: "https://suricata.readthedocs.io/en/latest/rules/intro.html",
      description: "Specific documentation on writing and understanding Suricata rules.",
      type: "Tool Documentation"
    },
    {
      name: "Cisco Secure Documentation",
      url: "https://www.cisco.com/c/en/us/support/security/secure-endpoint/series.html",
      description: "Support and documentation for Cisco Secure Endpoint (formerly AMP).",
      type: "Vendor Documentation"
    },
    {
      name: "Windows Security Baselines (Microsoft)",
      url: "https://learn.microsoft.com/en-us/windows/security/",
      description: "Microsoft documentation on security features and recommended baselines for Windows.",
      type: "OS Documentation"
    },
    {
      name: "Active Directory Security Guidance",
      url: "https://adsecurity.org/",
      description: "Resource site dedicated to Active Directory security concepts and best practices.",
      type: "Resource / Guide"
    },
    {
      name: "PowerShell Security Guide",
      url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/security/overview?view=powershell-7.4",
      description: "Microsoft documentation covering PowerShell security features and considerations.",
      type: "Tool Documentation"
    },
    {
      name: "TShark CLI Manual",
      url: "https://www.wireshark.org/docs/man-pages/tshark.html",
      description: "Manual page for TShark, the command-line version of Wireshark.",
      type: "Tool Documentation"
    },
    {
      name: "TLS/SSL Explained",
      url: "https://tls.ulfheim.net/",
      description: "An online book explaining the concepts behind TLS/SSL protocols.",
      type: "Guide / Explanation"
    },
    {
      name: "Nmap Docs",
      url: "https://nmap.org/book/",
      description: "Official documentation and book for the Nmap network scanner.",
      type: "Tool Documentation"
    },
    {
      name: "Nessus Essentials Guide",
      url: "https://docs.tenable.com/nessus/",
      description: "Documentation for Nessus vulnerability scanners from Tenable.",
      type: "Tool Documentation"
    },
    {
      name: "Ansible Security Automation Docs",
      url: "https://www.ansible.com/use-cases/security-automation",
      description: "Documentation on using Ansible for security automation tasks.",
      type: "Automation Documentation"
    },
    {
      name: "AWS Security Documentation",
      url: "https://docs.aws.amazon.com/security/",
      description: "Official AWS documentation covering security services and best practices.",
      type: "Cloud Documentation"
    },
    {
      name: "Azure Security Documentation",
      url: "https://learn.microsoft.com/en-us/security/",
      description: "Official Microsoft Azure documentation for security center, services, and best practices.",
      type: "Cloud Documentation"
    },
    {
      name: "Google Cloud Security Docs",
      url: "https://cloud.google.com/security",
      description: "Official Google Cloud documentation covering security products and practices.",
      type: "Cloud Documentation"
    },
    {
      name: "Mozilla Security Guidelines",
      url: "https://infosec.mozilla.org/",
      description: "Mozilla's information security guidelines and policies.",
      type: "Vendor Guidance"
    },
    {
      name: "Tor Project Documentation",
      url: "https://support.torproject.org/",
      description: "Support and documentation for the Tor Browser and network.",
      type: "Tool Documentation"
    },
    {
      name: "Cybersecurity Maturity Model Certification (CMMC)",
      url: "https://dodcio.defense.gov/CMMC/",
      description: "Official documentation regarding the CMMC framework for DoD contractors.",
      type: "Standard / Certification"
    },
    {
      name: "PCI DSS Documentation",
      url: "https://www.pcisecuritystandards.org/document_library",
      description: "Official document library for the Payment Card Industry Data Security Standard.",
      type: "Standard"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-600/10 rounded-xl mb-4">
              <BookOpen className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-400 font-medium">Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Cybersecurity Documentation</h1>
            <p className="text-xl text-gray-400 mb-8">Essential documentation for widely-used cybersecurity tools, frameworks, and standards.</p>
            <Link href="/academy" className="text-purple-400 hover:underline flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Academy
            </Link>
          </div>
        </div>
      </section>

      {/* Documentation Grid Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Explore Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentationResources.map((doc, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-indigo-500/50 transition-colors flex flex-col justify-between h-full"
              >
                <div>
                  <span className="inline-block bg-indigo-900/30 text-indigo-400 text-xs px-3 py-1 rounded-full mb-3">
                    {doc.type}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{doc.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{doc.description}</p>
                </div>
                <a 
                  href={doc.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                >
                  Read Docs
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
            <h2 className="text-2xl font-bold text-white mb-6">Need Help Finding Something?</h2>
            <p className="text-lg text-gray-400 mb-8">
              If you can't find the documentation you need, ask the community or suggest a resource.
            </p>
            <Link href="/community/submit">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Suggest a Resource
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 