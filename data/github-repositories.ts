export interface GitHubRepository {
  name: string;
  fullName: string;
  description: string;
  url: string;
  stars: string; // Using string to allow for "Unknown" values
  language: string;
  category: string;
  tags: string[];
}

export const githubRepositories: GitHubRepository[] = [
  {
    name: "awesome-security",
    fullName: "sbilly/awesome-security",
    description: "A collection of awesome software, libraries, documents, books, resources and cool stuff about security.",
    url: "https://github.com/sbilly/awesome-security",
    stars: "Unknown",
    language: "",
    category: "learning",
    tags: ["collection", "resources", "security"]
  },
  {
    name: "Awesome-Hacking",
    fullName: "Hack-with-Github/Awesome-Hacking",
    description: "A collection of various awesome lists for hackers, pentesters and security researchers.",
    url: "https://github.com/Hack-with-Github/Awesome-Hacking",
    stars: "Unknown",
    language: "",
    category: "learning",
    tags: ["collection", "resources", "hacking"]
  },
  {
    name: "awesome-pentest",
    fullName: "enaqx/awesome-pentest",
    description: "A collection of awesome penetration testing resources, tools and other shiny things.",
    url: "https://github.com/enaqx/awesome-pentest",
    stars: "Unknown",
    language: "",
    category: "pentesting",
    tags: ["resources", "tools", "collection"]
  },
  {
    name: "awesome-oscp",
    fullName: "infosec-au/awesome-oscp",
    description: "A comprehensive curated list of resources for OSCP certification preparation.",
    url: "https://github.com/infosec-au/awesome-oscp",
    stars: "Unknown",
    language: "",
    category: "learning",
    tags: ["oscp", "certification", "resources"]
  },
  {
    name: "awesome-incident-response",
    fullName: "meirwah/awesome-incident-response",
    description: "A curated list of tools and resources for security incident response, aimed to help security teams.",
    url: "https://github.com/meirwah/awesome-incident-response",
    stars: "Unknown",
    language: "",
    category: "defensive_security",
    tags: ["incident-response", "resources", "blue-team"]
  },
  {
    name: "Sn1per",
    fullName: "1N3/Sn1per",
    description: "Automated reconnaissance scanner for penetration testers that combines various tools into one framework.",
    url: "https://github.com/1N3/Sn1per",
    stars: "Unknown",
    language: "Shell",
    category: "pentesting",
    tags: ["scanner", "reconnaissance", "automation"]
  },
  {
    name: "Kali Linux",
    fullName: "kalilinux",
    description: "Official GitHub organization for Kali Linux, the popular penetration testing distribution.",
    url: "https://github.com/kalilinux",
    stars: "Unknown",
    language: "",
    category: "pentesting",
    tags: ["linux", "distribution", "tools"]
  },
  {
    name: "Metasploit Framework",
    fullName: "rapid7/metasploit-framework",
    description: "The most widely used penetration testing framework, with a large collection of exploits and modules.",
    url: "https://github.com/rapid7/metasploit-framework",
    stars: "Unknown",
    language: "Ruby",
    category: "pentesting",
    tags: ["exploitation", "framework", "tools"]
  },
  {
    name: "OWASP Juice Shop",
    fullName: "OWASP/juice-shop",
    description: "Intentionally vulnerable web application for security training, awareness demos, CTF events, etc.",
    url: "https://github.com/OWASP/juice-shop",
    stars: "Unknown",
    language: "TypeScript",
    category: "web_security",
    tags: ["vulnerable-app", "owasp", "training"]
  },
  {
    name: "ZAP",
    fullName: "zaproxy/zaproxy",
    description: "The OWASP Zed Attack Proxy (ZAP) web security testing tool and intercepting proxy.",
    url: "https://github.com/zaproxy/zaproxy",
    stars: "Unknown",
    language: "Java",
    category: "web_security",
    tags: ["scanner", "proxy", "owasp"]
  },
  {
    name: "Sublist3r",
    fullName: "aboul3la/Sublist3r",
    description: "Fast subdomains enumeration tool for penetration testers using various search engines and sources.",
    url: "https://github.com/aboul3la/Sublist3r",
    stars: "Unknown",
    language: "Python",
    category: "web_security",
    tags: ["subdomain", "enumeration", "reconnaissance"]
  },
  {
    name: "Nmap",
    fullName: "nmap/nmap",
    description: "Network mapper and security scanner used to discover hosts and services on a network.",
    url: "https://github.com/nmap/nmap",
    stars: "Unknown",
    language: "C",
    category: "network_security",
    tags: ["scanner", "network", "reconnaissance"]
  },
  {
    name: "Empire",
    fullName: "EmpireProject/Empire",
    description: "Post-exploitation framework that includes a pure-PowerShell Windows agent and a Python Linux/macOS agent.",
    url: "https://github.com/EmpireProject/Empire",
    stars: "Unknown",
    language: "PowerShell",
    category: "pentesting",
    tags: ["post-exploitation", "windows", "linux"]
  },
  {
    name: "Veil-Framework",
    fullName: "Veil-Framework/Veil",
    description: "Tool designed to generate payloads that bypass common anti-virus solutions and network detection.",
    url: "https://github.com/Veil-Framework/Veil",
    stars: "Unknown",
    language: "Python",
    category: "pentesting",
    tags: ["evasion", "payload", "anti-virus"]
  },
  {
    name: "AutoRecon",
    fullName: "Tib3rius/AutoRecon",
    description: "Multi-threaded network reconnaissance tool which automatically performs enumeration on detected services.",
    url: "https://github.com/Tib3rius/AutoRecon",
    stars: "Unknown",
    language: "Python",
    category: "pentesting",
    tags: ["scanner", "automation", "enumeration"]
  },
  {
    name: "recon-ng",
    fullName: "lanmaster53/recon-ng",
    description: "Full-featured web reconnaissance framework with modules for information gathering and attack surface mapping.",
    url: "https://github.com/lanmaster53/recon-ng",
    stars: "Unknown",
    language: "Python",
    category: "web_security",
    tags: ["reconnaissance", "framework", "osint"]
  },
  {
    name: "CyberChef",
    fullName: "gchq/CyberChef",
    description: "Web app for encryption, encoding, compression and data analysis, developed by the UK intelligence agency GCHQ.",
    url: "https://github.com/gchq/CyberChef",
    stars: "Unknown",
    language: "JavaScript",
    category: "cryptography",
    tags: ["encoding", "decoding", "analysis"]
  },
  {
    name: "PowerSploit",
    fullName: "PowerShellMafia/PowerSploit",
    description: "Collection of PowerShell modules for penetration testing and offensive security operations.",
    url: "https://github.com/PowerShellMafia/PowerSploit",
    stars: "Unknown",
    language: "PowerShell",
    category: "pentesting",
    tags: ["powershell", "post-exploitation", "windows"]
  },
  {
    name: "pupy",
    fullName: "n1nj4sec/pupy",
    description: "Cross-platform remote administration and post-exploitation tool written in Python.",
    url: "https://github.com/n1nj4sec/pupy",
    stars: "Unknown",
    language: "Python",
    category: "pentesting",
    tags: ["rat", "post-exploitation", "cross-platform"]
  },
  {
    name: "TheFatRat",
    fullName: "Screetsec/TheFatRat",
    description: "Exploiting toolkit for generating backdoors and payloads to bypass anti-virus solutions.",
    url: "https://github.com/Screetsec/TheFatRat",
    stars: "Unknown",
    language: "Shell",
    category: "pentesting",
    tags: ["backdoor", "payload", "evasion"]
  },
  {
    name: "evil-winrm",
    fullName: "Hackplayers/evil-winrm",
    description: "Ultimate WinRM shell for hacking/pentesting Windows remote machines using the WinRM protocol.",
    url: "https://github.com/Hackplayers/evil-winrm",
    stars: "Unknown",
    language: "Ruby",
    category: "pentesting",
    tags: ["winrm", "windows", "shell"]
  },
  {
    name: "sqlmap",
    fullName: "sqlmapproject/sqlmap",
    description: "Automatic SQL injection and database takeover tool to detect and exploit SQL injection flaws.",
    url: "https://github.com/sqlmapproject/sqlmap",
    stars: "Unknown",
    language: "Python",
    category: "web_security",
    tags: ["sql-injection", "automation", "database"]
  },
  {
    name: "radare2",
    fullName: "radareorg/radare2",
    description: "UNIX-like reverse engineering framework and command-line toolset for binary analysis.",
    url: "https://github.com/radareorg/radare2",
    stars: "Unknown",
    language: "C",
    category: "malware_analysis",
    tags: ["reverse-engineering", "disassembler", "debugger"]
  },
  {
    name: "pwntools",
    fullName: "Gallopsled/pwntools",
    description: "CTF framework and exploit development library designed for rapid prototyping and development.",
    url: "https://github.com/Gallopsled/pwntools",
    stars: "Unknown",
    language: "Python",
    category: "pentesting",
    tags: ["ctf", "exploitation", "development"]
  },
  {
    name: "fuzzdb",
    fullName: "fuzzdb-project/fuzzdb",
    description: "Dictionary of attack patterns and primitives for black-box application fault injection testing.",
    url: "https://github.com/fuzzdb-project/fuzzdb",
    stars: "Unknown",
    language: "",
    category: "web_security",
    tags: ["fuzzing", "payloads", "testing"]
  },
  {
    name: "openvas",
    fullName: "greenbone/openvas",
    description: "Open source vulnerability scanner and manager, part of the Greenbone Vulnerability Management (GVM) framework.",
    url: "https://github.com/greenbone/openvas",
    stars: "Unknown",
    language: "C",
    category: "web_security",
    tags: ["vulnerability-scanner", "management", "assessment"]
  },
  {
    name: "bettercap",
    fullName: "bettercap/bettercap",
    description: "Swiss Army knife for network attacks and monitoring with support for various protocols.",
    url: "https://github.com/bettercap/bettercap",
    stars: "Unknown",
    language: "Go",
    category: "network_security",
    tags: ["mitm", "network", "sniffing"]
  },
  {
    name: "MITMf",
    fullName: "byt3bl33d3r/MITMf",
    description: "Framework for Man-In-The-Middle attacks with various plugins for different attack vectors.",
    url: "https://github.com/byt3bl33d3r/MITMf",
    stars: "Unknown",
    language: "Python",
    category: "network_security",
    tags: ["mitm", "attacks", "network"]
  },
  {
    name: "WebGoat",
    fullName: "WebGoat/WebGoat",
    description: "Deliberately insecure Java web application designed to teach web application security lessons.",
    url: "https://github.com/WebGoat/WebGoat",
    stars: "Unknown",
    language: "Java",
    category: "web_security",
    tags: ["vulnerable-app", "training", "learning"]
  },
  {
    name: "Veil-Evasion",
    fullName: "Veil-Framework/Veil-Evasion",
    description: "Tool for generating undetectable payloads that bypass common anti-virus solutions.",
    url: "https://github.com/Veil-Framework/Veil-Evasion",
    stars: "Unknown",
    language: "Python",
    category: "pentesting",
    tags: ["evasion", "payload", "anti-virus"]
  },
  {
    name: "mimikatz",
    fullName: "gentilkiwi/mimikatz",
    description: "Tool that extracts passwords, hashes, PINs and tickets from Windows memory for credential harvesting.",
    url: "https://github.com/gentilkiwi/mimikatz",
    stars: "Unknown",
    language: "C",
    category: "pentesting",
    tags: ["windows", "credentials", "privilege-escalation"]
  },
  {
    name: "unicorn",
    fullName: "trustedsec/unicorn",
    description: "PowerShell downgrade attack and shellcode injection tool for penetration testers.",
    url: "https://github.com/trustedsec/unicorn",
    stars: "Unknown",
    language: "Python",
    category: "pentesting",
    tags: ["powershell", "shellcode", "injection"]
  },
  {
    name: "CrackMapExec",
    fullName: "byt3bl33d3r/CrackMapExec",
    description: "Swiss Army knife for pentesting networks, automating penetration testing tasks against Windows networks.",
    url: "https://github.com/byt3bl33d3r/CrackMapExec",
    stars: "Unknown",
    language: "Python",
    category: "pentesting",
    tags: ["windows", "active-directory", "network"]
  },
  {
    name: "hashcat",
    fullName: "hashcat/hashcat",
    description: "World's fastest and most advanced password recovery utility supporting various hashing algorithms.",
    url: "https://github.com/hashcat/hashcat",
    stars: "Unknown",
    language: "C",
    category: "pentesting",
    tags: ["password-cracking", "hashing", "gpu"]
  },
  {
    name: "JohnTheRipper",
    fullName: "magnumripper/JohnTheRipper",
    description: "Password cracking tool that supports hundreds of hash and cipher types.",
    url: "https://github.com/magnumripper/JohnTheRipper",
    stars: "Unknown",
    language: "C",
    category: "pentesting",
    tags: ["password-cracking", "hash", "cracking"]
  },
  {
    name: "airgeddon",
    fullName: "v1s1t0r1sh3r3/airgeddon",
    description: "Multi-use bash script for Linux systems to audit wireless networks with various attack methods.",
    url: "https://github.com/v1s1t0r1sh3r3/airgeddon",
    stars: "Unknown",
    language: "Shell",
    category: "network_security",
    tags: ["wireless", "wifi", "audit"]
  },
  {
    name: "routersploit",
    fullName: "threat9/routersploit",
    description: "Exploitation framework designed to exploit vulnerabilities in embedded devices and routers.",
    url: "https://github.com/threat9/routersploit",
    stars: "Unknown",
    language: "Python",
    category: "network_security",
    tags: ["router", "exploitation", "embedded"]
  },
  {
    name: "xsser",
    fullName: "epsylon/xsser",
    description: "Framework to detect, exploit and report XSS vulnerabilities in web applications.",
    url: "https://github.com/epsylon/xsser",
    stars: "Unknown",
    language: "Python",
    category: "web_security",
    tags: ["xss", "scanner", "exploitation"]
  },
  {
    name: "HiddenEye",
    fullName: "DarkSecDevelopers/HiddenEye",
    description: "Modern phishing tool with advanced functionality and multiple phishing templates.",
    url: "https://github.com/DarkSecDevelopers/HiddenEye",
    stars: "Unknown",
    language: "Python",
    category: "social_engineering",
    tags: ["phishing", "social-engineering", "credential-harvesting"]
  },
  {
    name: "hostilesubdomainfinder",
    fullName: "monosense/hostilesubdomainfinder",
    description: "Tool to scan websites for potential subdomain takeover vulnerabilities.",
    url: "https://github.com/monosense/hostilesubdomainfinder",
    stars: "Unknown",
    language: "Python",
    category: "web_security",
    tags: ["subdomain", "takeover", "vulnerability"]
  },
  {
    name: "dnsrecon",
    fullName: "darkoperator/dnsrecon",
    description: "DNS enumeration script for performing various DNS reconnaissance techniques.",
    url: "https://github.com/darkoperator/dnsrecon",
    stars: "Unknown",
    language: "Python",
    category: "network_security",
    tags: ["dns", "enumeration", "reconnaissance"]
  },
  {
    name: "wifite2",
    fullName: "derv82/wifite2",
    description: "Automated wireless attack tool designed for auditing wireless networks.",
    url: "https://github.com/derv82/wifite2",
    stars: "Unknown",
    language: "Python",
    category: "network_security",
    tags: ["wifi", "wireless", "cracking"]
  },
  {
    name: "arachni",
    fullName: "Arachni/arachni",
    description: "Feature-full, modular, high-performance Ruby framework for web application security scanning.",
    url: "https://github.com/Arachni/arachni",
    stars: "Unknown",
    language: "Ruby",
    category: "web_security",
    tags: ["scanner", "web-application", "audit"]
  },
  {
    name: "theHarvester",
    fullName: "laramies/theHarvester",
    description: "Tool for gathering open source intelligence (OSINT) during a penetration test.",
    url: "https://github.com/laramies/theHarvester",
    stars: "Unknown",
    language: "Python",
    category: "osint",
    tags: ["reconnaissance", "email", "subdomain"]
  },
  {
    name: "awesome-ctf-framework",
    fullName: "apsdehal/awesome-ctf-framework",
    description: "Framework and library for building Capture The Flag (CTF) competitions and challenges.",
    url: "https://github.com/apsdehal/awesome-ctf-framework",
    stars: "Unknown",
    language: "",
    category: "learning",
    tags: ["ctf", "framework", "competition"]
  },
  {
    name: "OSQuery",
    fullName: "osquery/osquery",
    description: "SQL-powered operating system instrumentation, monitoring, and analytics framework.",
    url: "https://github.com/osquery/osquery",
    stars: "Unknown",
    language: "C++",
    category: "defensive_security",
    tags: ["monitoring", "analytics", "endpoint"]
  },
  {
    name: "SecurityMonkey",
    fullName: "Netflix/security_monkey",
    description: "Netflix's tool to monitor AWS/GCP configurations for security-related changes and compliance issues.",
    url: "https://github.com/Netflix/security_monkey",
    stars: "Unknown",
    language: "Python",
    category: "cloud_security",
    tags: ["aws", "compliance", "monitoring"]
  },
  {
    name: "Pacu",
    fullName: "RhinoSecurityLabs/pacu",
    description: "AWS exploitation framework designed for testing the security of Amazon Web Services environments.",
    url: "https://github.com/RhinoSecurityLabs/pacu",
    stars: "Unknown",
    language: "Python",
    category: "cloud_security",
    tags: ["aws", "exploitation", "assessment"]
  },
  {
    name: "CloudGoat",
    fullName: "ShiftLeftSecurity/CloudGoat",
    description: "'Vulnerable by Design' AWS deployment designed to teach cloud security offensive and defensive techniques.",
    url: "https://github.com/ShiftLeftSecurity/CloudGoat",
    stars: "Unknown",
    language: "Python",
    category: "cloud_security",
    tags: ["aws", "vulnerable", "training"]
  },
  {
    name: "w3af",
    fullName: "andresriancho/w3af",
    description: "Web Application Attack and Audit Framework designed to find and exploit web application vulnerabilities.",
    url: "https://github.com/andresriancho/w3af",
    stars: "Unknown",
    language: "Python",
    category: "web_security",
    tags: ["scanner", "exploitation", "audit"]
  }
]; 