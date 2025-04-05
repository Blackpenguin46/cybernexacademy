import React from 'react';
import Link from 'next/link';
import { Sheet, ExternalLink, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Define an interface for the cheatsheet resource
interface CheatsheetResource {
  name: string;
  url: string;
  type: string;
}

export default function CheatsheetsPage() {

  const cheatsheetResources: CheatsheetResource[] = [
    { name: "SANS DFIR Poster", url: "https://www.sans.org/posters/", type: "Website/PDF" },
    { name: "Nmap Cheat Sheet", url: "https://svn.nmap.org/nmap/docs/nmap-refguide.pdf", type: "PDF" },
    { name: "MITRE ATT&CK Cheat Sheet", url: "https://www.sans.org/posters/mitre-attck-matrix/", type: "Website" },
    { name: "OWASP Top 10 Cheat Sheet Series", url: "https://cheatsheetseries.owasp.org/", type: "Website" },
    { name: "Burp Suite Cheatsheet", url: "https://github.com/coreb1t/BurpSuiteCheatSheet", type: "GitHub" },
    { name: "Linux Privilege Escalation (GTFOBins)", url: "https://gtfobins.github.io/", type: "Website" },
    { name: "PayloadsAllTheThings", url: "https://github.com/swisskyrepo/PayloadsAllTheThings", type: "GitHub" },
    { name: "HackTricks", url: "https://book.hacktricks.xyz/", type: "Website" },
    { name: "Active Directory Exploitation Cheat Sheet", url: "https://github.com/S1ckB0y1337/Active-Directory-Exploitation-Cheat-Sheet", type: "GitHub" },
    { name: "CyberSecLabs Cheatsheets", url: "https://www.cyberseclabs.co.uk/", type: "Website" }, // Needs login likely
    { name: "Red Team Cheat Sheet", url: "https://assets.tryhackme.com/img/redteam/cheatsheet.pdf", type: "PDF" },
    { name: "Blue Team Cheat Sheet", url: "https://blueteamlabs.online/resources", type: "Website" }, // Needs login likely
    { name: "Wireshark Filters Cheatsheet", url: "https://cheatography.com/hayden/cheat-sheets/wireshark/", type: "Website" },
    { name: "CyberChef Cheat Sheet / Docs", url: "https://gchq.github.io/CyberChef/", type: "Website" },
    { name: "Metasploit Cheat Sheet", url: "https://highon.coffee/blog/metasploit-pentesting-cheat-sheet/", type: "Blog/Website" },
    { name: "Linux Command Cheat Sheet", url: "https://files.fosswire.com/2007/08/fwunixref.pdf", type: "PDF" },
    { name: "PowerShell Cheat Sheet (Invoke-TheHash)", url: "https://github.com/peewpw/Invoke-TheHash/blob/master/cheatsheet.txt", type: "GitHub/Text" },
    { name: "Windows Command Line Cheatsheet", url: "https://www.cheatography.com/davechild/cheat-sheets/windows-command-line/", type: "Website" },
    { name: "SQL Injection Cheat Sheet", url: "https://portswigger.net/web-security/sql-injection/cheat-sheet", type: "Website" },
    { name: "Reverse Shell Cheat Sheet", url: "https://highon.coffee/blog/reverse-shell-cheat-sheet/", type: "Blog/Website" },
    { name: "Windows Privilege Escalation Methods", url: "https://www.abatchy.com/2017/04/windows-privilege-escalation-methods.html", type: "Blog/Website" },
    { name: "Web Security Academy Cheatsheets", url: "https://portswigger.net/web-security", type: "Website" },
    { name: "Buffer Overflow Cheatsheet (picoCTF)", url: "https://www.picoctf.org/resources", type: "Website" }, // General resources page
    { name: "TryHackMe Cheatsheets / Resources", url: "https://tryhackme.com/resources", type: "Website" },
    { name: "Cybersecurity Interview Notes", url: "https://github.com/0x4D31/Cybersecurity-Interview-Notes", type: "GitHub" },
    { name: "ICS Security Cheat Sheet", url: "https://www.sans.org/posters/ics-poster/", type: "Website/PDF" },
    { name: "Crontab Quick Reference", url: "https://www.adminschoice.com/crontab-quick-reference", type: "Website" },
    { name: "Regex Quickstart", url: "https://www.rexegg.com/regex-quickstart.html", type: "Website" },
    { name: "Firewall Rules Cheatsheet (Arch Wiki)", url: "https://wiki.archlinux.org/title/Firewalls", type: "Wiki/Website" },
    { name: "DNS Tools Collection", url: "https://github.com/trimstray/dnstools", type: "GitHub" },
    { name: "Bash Command Cheatsheet", url: "https://devhints.io/bash", type: "Website" },
    { name: "TLS/SSL Security Cheatsheet (Mozilla)", url: "https://infosec.mozilla.org/guidelines/modern/", type: "Website" },
    { name: "OSINT Cheat Sheet (Start.me)", url: "https://start.me/p/DPYpmz/osint", type: "Website/Collection" },
    { name: "Threat Hunting Cheatsheet", url: "https://www.sans.org/posters/threat-hunting/", type: "Website/PDF" },
    { name: "Ghidra Reversing Cheatsheet / Docs", url: "https://ghidra.re/", type: "Website" },
    { name: "Volatility Framework Docs / Repo", url: "https://github.com/volatilityfoundation", type: "GitHub" },
    { name: "YARA Rules Cheatsheet / Docs", url: "https://yara.readthedocs.io/en/stable/", type: "Documentation" },
    { name: "Impacket Command Reference / Repo", url: "https://github.com/SecureAuthCorp/impacket", type: "GitHub" },
    { name: "Digital Forensics Cheatsheet Series", url: "https://github.com/cheatsheetseries", type: "GitHub" },
    { name: "Web Pentest Cheatsheet (Awesome Pentest)", url: "https://github.com/enaqx/awesome-pentest", type: "GitHub" },
    { name: "Common Ports Cheat Sheet", url: "https://www.rapidtables.com/web/net/port-number.html", type: "Website" },
    { name: "Hashing Algorithms Chart", url: "https://www.tunnelsup.com/hash-analyzer/", type: "Website/Tool" },
    { name: "WiFi Hacking Cheatsheet (WiFi Arsenal)", url: "https://github.com/0x90/wifi-arsenal", type: "GitHub" },
    { name: "Cyber Kill Chain Cheatsheet", url: "https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html", type: "Website" },
    { name: "Cybersecurity Acronyms Cheat Sheet", url: "https://www.sans.org/posters/cybersecurity-acronyms-poster/", type: "Website/PDF" },
    { name: "Buffer Overflow Checklist", url: "https://overflow.today/pdfs/bof-checklist.pdf", type: "PDF" },
    { name: "Log4Shell Attack Cheat Sheet / Resources", url: "https://github.com/NCSC-NL/log4shell/tree/main", type: "GitHub" },
    { name: "Privilege Escalation Cheatsheet (Duplicate of #21)", url: "https://www.abatchy.com/2017/04/windows-privilege-escalation-methods.html", type: "Blog/Website" },
    { name: "Cloud Security Cheatsheets (CSA)", url: "https://cloudsecurityalliance.org/", type: "Website/Organization" },
    { name: "CTF Cheatsheet (Awesome CTF)", url: "https://github.com/apsdehal/awesome-ctf", type: "GitHub" },
  ]

  // Remove duplicates (like #48 which is same as #21)
  // Explicitly type the initial value for reduce as CheatsheetResource[]
  const uniqueCheatsheets = cheatsheetResources.reduce((acc: CheatsheetResource[], current) => {
    const x = acc.find(item => item.url === current.url);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, [] as CheatsheetResource[]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-teal-600/10 rounded-xl mb-4">
              <Sheet className="w-5 h-5 text-teal-400 mr-2" />
              <span className="text-teal-400 font-medium">Cheatsheets</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Cybersecurity Cheatsheets</h1>
            <p className="text-xl text-gray-400 mb-8">Quick reference guides and collections for essential cybersecurity tools, commands, and concepts.</p>
            <Link href="/academy" className="text-purple-400 hover:underline flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Academy
            </Link>
          </div>
        </div>
      </section>

      {/* Cheatsheets Grid Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Explore Cheatsheets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueCheatsheets.map((sheet, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-teal-500/50 transition-colors flex flex-col justify-between h-full"
              >
                <div>
                  <span className="inline-block bg-teal-900/30 text-teal-400 text-xs px-3 py-1 rounded-full mb-3">
                    {sheet.type}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{sheet.name}</h3>
                  {/* No description provided in the list, so we omit it */}
                </div>
                <a 
                  href={sheet.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-teal-400 hover:text-teal-300 text-sm font-medium"
                >
                  View Cheatsheet
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
            <h2 className="text-2xl font-bold text-white mb-6">Found a Useful Cheatsheet?</h2>
            <p className="text-lg text-gray-400 mb-8">
              If you know of another great cheatsheet, share it with the community!
            </p>
            <Link href="/community/submit">
              <Button className="bg-teal-600 hover:bg-teal-700">
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