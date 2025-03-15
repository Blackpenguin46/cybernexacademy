import { Layers, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Wrench } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Resource {
  name: string
  description: string
  url: string
  type: string
}

interface ResourceWithFree extends Resource {
  free: boolean
}

interface ResourceWithAuthor extends Resource {
  author: string
}

interface ResourceCategory {
  title: string
  icon: any
  resources: (Resource | ResourceWithFree | ResourceWithAuthor)[]
}

function hasAuthor(resource: Resource | ResourceWithFree | ResourceWithAuthor): resource is ResourceWithAuthor {
  return 'author' in resource;
}

function hasFree(resource: Resource | ResourceWithFree | ResourceWithAuthor): resource is ResourceWithFree {
  return 'free' in resource;
}

export default function IntermediatePage() {
  const resourceCategories: ResourceCategory[] = [
    {
      title: "Web Security Tools & Platforms",
      icon: Lock,
      resources: [
        {
          name: "Burp Suite Professional",
          description: "Advanced web vulnerability scanner and testing toolkit",
          url: "https://portswigger.net/burp/pro",
          type: "Security Tool",
          free: false
        },
        {
          name: "OWASP ZAP",
          description: "Integrated penetration testing tool for web applications",
          url: "https://www.zaproxy.org",
          type: "Security Tool",
          free: true
        },
        {
          name: "Web Security Academy",
          description: "Advanced web security training from PortSwigger",
          url: "https://portswigger.net/web-security",
          type: "Training Platform",
          free: true
        },
        {
          name: "ModSecurity",
          description: "Open-source web application firewall with powerful rule configuration",
          url: "https://modsecurity.org",
          type: "Security Tool",
          free: true
        },
        {
          name: "HackTheBox Web Challenges",
          description: "Hands-on web security challenges ranging from beginner to expert",
          url: "https://app.hackthebox.com/challenges/Web",
          type: "Practice Platform",
          free: true
        },
        {
          name: "OWASP WebGoat",
          description: "Deliberately insecure web application designed for teaching web security lessons",
          url: "https://owasp.org/www-project-webgoat/",
          type: "Training Platform",
          free: true
        },
        {
          name: "Netsparker",
          description: "Web application security scanner with automated vulnerability detection",
          url: "https://www.netsparker.com",
          type: "Security Tool",
          free: false
        },
        {
          name: "Acunetix",
          description: "Comprehensive web vulnerability scanner for detecting security issues",
          url: "https://www.acunetix.com",
          type: "Security Tool",
          free: false
        },
        {
          name: "PortSwigger SQL Injection Guide",
          description: "Comprehensive tutorial on SQL injection vulnerabilities and techniques",
          url: "https://portswigger.net/web-security/sql-injection",
          type: "Tutorial",
          free: true
        },
        {
          name: "Qualys Web Application Scanning",
          description: "Cloud-based web application scanner for identifying vulnerabilities",
          url: "https://www.qualys.com/apps/web-app-scanning/",
          type: "Security Tool",
          free: false
        }
      ]
    },
    {
      title: "Network Security Resources",
      icon: Network,
      resources: [
        {
          name: "Security Onion",
          description: "Linux distribution for intrusion detection and network security monitoring",
          url: "https://securityonionsolutions.com",
          type: "Security Suite"
        },
        {
          name: "Zeek (Bro)",
          description: "Powerful network analysis framework",
          url: "https://zeek.org",
          type: "Network Monitor"
        },
        {
          name: "Snort",
          description: "Open-source intrusion prevention system",
          url: "https://www.snort.org",
          type: "IDS/IPS"
        },
        {
          name: "Malcolm",
          description: "Network traffic analysis tool suite",
          url: "https://github.com/cisagov/Malcolm",
          type: "Analysis Tool",
          free: true
        },
        {
          name: "Let's Defend",
          description: "Hands-on SOC analyst training platform with realistic scenarios",
          url: "https://app.letsdefend.io/",
          type: "Training Platform",
          free: true
        },
        {
          name: "CyberDefenders",
          description: "Blue team challenge platform focusing on defensive security",
          url: "https://cyberdefenders.org/",
          type: "Challenge Platform",
          free: true
        },
        {
          name: "WPA-sec",
          description: "Collaborative WPA password recovery platform",
          url: "https://wpa-sec.stanev.org/",
          type: "Password Recovery",
          free: true
        }
      ]
    },
    {
      title: "Malware Analysis Tools",
      icon: Code,
      resources: [
        {
          name: "REMnux",
          description: "Linux toolkit for reverse-engineering and analyzing malware",
          url: "https://remnux.org",
          type: "Linux Distro",
          free: true
        },
        {
          name: "Cuckoo Sandbox",
          description: "Automated malware analysis system",
          url: "https://cuckoosandbox.org",
          type: "Analysis Tool",
          free: true
        },
        {
          name: "YARA",
          description: "Pattern matching swiss knife for malware researchers",
          url: "https://virustotal.github.io/yara",
          type: "Analysis Tool",
          free: true
        },
        {
          name: "Ghidra",
          description: "Software reverse engineering framework",
          url: "https://ghidra-sre.org",
          type: "RE Tool",
          free: true
        },
        {
          name: "Malicious Website Lookup Tools",
          description: "Curated list of tools for malware and malicious website analysis",
          url: "https://zeltser.com/lookup-malicious-websites/",
          type: "Resource List",
          free: true
        }
      ]
    },
    {
      title: "Digital Forensics Tools",
      icon: Server,
      resources: [
        {
          name: "Autopsy",
          description: "Digital forensics platform",
          url: "https://www.autopsy.com",
          type: "Forensics Tool",
          free: true
        },
        {
          name: "Volatility",
          description: "Advanced memory forensics framework",
          url: "https://www.volatilityfoundation.org",
          type: "Memory Analysis"
        },
        {
          name: "The Sleuth Kit",
          description: "Collection of command line tools for disk forensics",
          url: "https://www.sleuthkit.org",
          type: "Forensics Suite"
        },
        {
          name: "SANS DFIR",
          description: "Digital forensics and incident response resources",
          url: "https://www.sans.org/dfir",
          type: "Training",
          free: false
        }
      ]
    },
    {
      title: "Security Books & Documentation",
      icon: Terminal,
      resources: [
        {
          name: "The Web Application Hacker's Handbook",
          description: "Advanced web application security testing guide",
          url: "https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470",
          type: "Book",
          author: "Dafydd Stuttard & Marcus Pinto"
        },
        {
          name: "Practical Malware Analysis",
          description: "The hands-on guide to dissecting malicious software",
          url: "https://www.amazon.com/Practical-Malware-Analysis-Hands-Dissecting/dp/1593272901",
          type: "Book",
          author: "Michael Sikorski & Andrew Honig"
        },
        {
          name: "Red Team Field Manual",
          description: "Compact guide for security testing",
          url: "https://www.amazon.com/Rtfm-Red-Team-Field-Manual/dp/1494295504",
          type: "Book",
          author: "Ben Clark"
        },
        {
          name: "Total OSCP Guide",
          description: "Comprehensive guide for OSCP exam preparation",
          url: "https://sushant747.gitbooks.io/total-oscp-guide/content/",
          type: "Online Book",
          free: true
        },
        {
          name: "Security Blog Collection",
          description: "Collection of articles on small business cybersecurity threats and solutions",
          url: "https://www.webdyno.net/post/common-cyberattacks-understanding-the-threats",
          type: "Blog",
          free: true
        }
      ]
    },
    {
      title: "Password Cracking & Wordlists",
      icon: Target,
      resources: [
        {
          name: "SecLists",
          description: "Collection of multiple types of lists for security assessments",
          url: "https://github.com/danielmiessler/SecLists",
          type: "GitHub Repository",
          free: true
        },
        {
          name: "Awesome Password Cracking",
          description: "Curated list of password cracking resources, tools and techniques",
          url: "https://github.com/n0kovo/awesome-password-cracking",
          type: "GitHub Repository",
          free: true
        },
        {
          name: "Rolling Code Cracking",
          description: "Tools and techniques for cracking rolling codes",
          url: "https://rolling.pandwarf.com/",
          type: "Specialized Tool",
          free: true
        }
      ]
    },
    {
      title: "Online Training Platforms",
      icon: Target,
      resources: [
        {
          name: "PentesterLab PRO",
          description: "Hands-on web penetration testing exercises",
          url: "https://pentesterlab.com",
          type: "Training Platform",
          free: false
        },
        {
          name: "TCM Security",
          description: "Practical cybersecurity courses",
          url: "https://tcm-sec.com",
          type: "Training Platform",
          free: false
        },
        {
          name: "INE Security",
          description: "Advanced security training and labs",
          url: "https://ine.com/learning/areas/security",
          type: "Training Platform",
          free: false
        },
        {
          name: "Security Blue Team",
          description: "Specialized blue team training and certifications",
          url: "https://www.securityblue.team/",
          type: "Training Platform",
          free: false
        },
        {
          name: "Living Off The Land Binaries",
          description: "Documentation of binaries that can be used by attackers for LOLBins techniques",
          url: "https://lolbas-project.github.io/",
          type: "Documentation",
          free: true
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <Layers className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Intermediate Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Advanced Security Tools & Resources
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              A curated collection of intermediate-level cybersecurity tools, platforms, and learning materials.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {resourceCategories.map((category, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="flex items-center mb-8">
                  <category.icon className="w-6 h-6 text-blue-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {category.resources.map((resource, resourceIndex) => (
                    <a
                      key={resourceIndex}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-500 transition-colors">
                          {resource.name}
                        </h3>
                        <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded border border-blue-800">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        {resource.description}
                      </p>
                      {hasAuthor(resource) && (
                        <div className="text-sm text-blue-500">
                          By {resource.author}
                        </div>
                      )}
                      {hasFree(resource) && (
                        <div className="mt-2">
                          <span className={`text-xs px-2 py-1 rounded ${resource.free ? 'bg-green-900/50 text-green-400 border border-green-800' : 'bg-blue-900/50 text-blue-400 border border-blue-800'}`}>
                            {resource.free ? 'Free' : 'Paid'}
                          </span>
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 