import { BookOpen, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2 } from "lucide-react"
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

export default function FoundationalPage() {
  const resourceCategories: ResourceCategory[] = [
    {
      title: "Learning Platforms",
      icon: BookOpen,
      resources: [
        {
          name: "TryHackMe",
          description: "Interactive cybersecurity training platform with beginner-friendly rooms",
          url: "https://tryhackme.com",
          type: "Interactive Platform",
          free: true
        },
        {
          name: "Hack The Box",
          description: "Gamified cybersecurity training platform with hands-on penetration testing labs",
          url: "https://www.hackthebox.com",
          type: "Interactive Platform",
          free: true
        },
        {
          name: "PortSwigger Web Security Academy",
          description: "Free, online web security training from the creators of Burp Suite",
          url: "https://portswigger.net/web-security",
          type: "Interactive Training",
          free: true
        },
        {
          name: "Cybrary",
          description: "Free online cybersecurity courses and training",
          url: "https://www.cybrary.it",
          type: "Online Course",
          free: true
        },
        {
          name: "Cisco Networking Academy",
          description: "Free courses on networking, cybersecurity, and IT fundamentals from Cisco",
          url: "https://www.netacad.com/",
          type: "Training Platform",
          free: true
        },
        {
          name: "Professor Messer",
          description: "Free training videos and resources for CompTIA certifications",
          url: "https://www.professormesser.com/",
          type: "Training Videos",
          free: true
        },
        {
          name: "Hacksplaining",
          description: "Interactive tutorials explaining common vulnerabilities in web applications",
          url: "https://www.hacksplaining.com/",
          type: "Interactive Tutorials",
          free: true
        },
        {
          name: "Coursera Google Cybersecurity Certificate",
          description: "Entry-level cybersecurity certification program covering fundamentals and essential tools",
          url: "https://www.coursera.org/professional-certificates/google-cybersecurity",
          type: "Certification Course",
          free: false
        }
      ]
    },
    {
      title: "Documentation & Guides",
      icon: Shield,
      resources: [
        {
          name: "NIST Cybersecurity Framework",
          description: "Comprehensive framework for managing cybersecurity risk",
          url: "https://www.nist.gov/cyberframework",
          type: "Framework"
        },
        {
          name: "OWASP Top 10",
          description: "Top 10 web application security risks and prevention strategies",
          url: "https://owasp.org/www-project-top-ten",
          type: "Security Guide"
        },
        {
          name: "Surveillance Self-Defense",
          description: "EFF's guide to defending yourself against surveillance",
          url: "https://ssd.eff.org/",
          type: "Security Guide",
          free: true
        },
        {
          name: "Linux Journey",
          description: "Learn Linux fundamentals through interactive lessons",
          url: "https://linuxjourney.com",
          type: "Tutorial"
        },
        {
          name: "Introduction to Linux",
          description: "Comprehensive guide to Linux basics from Texas Tech University",
          url: "https://www.depts.ttu.edu/itts/apps/handouts/Introduction_to_Linux_1.pdf",
          type: "PDF Guide",
          free: true
        },
        {
          name: "Linux Handbook Bash Guide",
          description: "Complete guide to Bash scripting fundamentals",
          url: "https://linuxhandbook.com/bash/",
          type: "Tutorial",
          free: true
        },
        {
          name: "Microsoft Security Digital Defense Report",
          description: "Annual report providing insights on current cybersecurity threats",
          url: "https://www.microsoft.com/en-us/security/security-insider/intelligence-reports/microsoft-digital-defense-report-2024",
          type: "Report",
          free: true
        },
        {
          name: "Microsoft Learn - Security",
          description: "Official Microsoft security learning resources",
          url: "https://learn.microsoft.com/security",
          type: "Documentation"
        }
      ]
    },
    {
      title: "Essential Tools",
      icon: Terminal,
      resources: [
        {
          name: "Kali Linux",
          description: "Security-focused Linux distribution with hundreds of preinstalled penetration testing tools",
          url: "https://www.kali.org/",
          type: "Operating System",
          free: true
        },
        {
          name: "Wireshark",
          description: "Network protocol analyzer for network troubleshooting and security analysis",
          url: "https://www.wireshark.org",
          type: "Network Analysis",
          free: true
        },
        {
          name: "Nmap",
          description: "Network discovery and security auditing tool",
          url: "https://nmap.org",
          type: "Network Scanner",
          free: true
        },
        {
          name: "VirtualBox",
          description: "Virtualization software for security labs",
          url: "https://www.virtualbox.org",
          type: "Virtualization",
          free: true
        },
        {
          name: "John the Ripper",
          description: "Password cracking tool for Unix/Linux passwords",
          url: "https://www.openwall.com/john/",
          type: "Password Cracker",
          free: true
        },
        {
          name: "Hashcat",
          description: "Advanced password recovery tool",
          url: "https://hashcat.net/hashcat/",
          type: "Password Cracker",
          free: true
        },
        {
          name: "CrackStation",
          description: "Online hash cracking service using massive pre-computed lookup tables",
          url: "https://crackstation.net/",
          type: "Online Tool",
          free: true
        }
      ]
    },
    {
      title: "Practice Environments",
      icon: Server,
      resources: [
        {
          name: "VulnHub",
          description: "Vulnerable virtual machines for hands-on experience",
          url: "https://www.vulnhub.com",
          type: "VM Collection",
          free: true
        },
        {
          name: "OWASP Juice Shop",
          description: "Intentionally vulnerable web application for security training",
          url: "https://owasp.org/www-project-juice-shop",
          type: "Web App",
          free: true
        },
        {
          name: "PicoCTF",
          description: "Free computer security education program with challenges and tutorials",
          url: "https://picoctf.org/",
          type: "CTF Platform",
          free: true
        },
        {
          name: "CryptoHack",
          description: "Fun platform for learning cryptography through challenges",
          url: "https://cryptohack.org/",
          type: "Challenge Platform",
          free: true
        },
        {
          name: "Security Lab in VirtualBox",
          description: "Guide to building your own security lab environment using VirtualBox",
          url: "https://benheater.com/building-a-security-lab-in-virtualbox/",
          type: "Tutorial",
          free: true
        }
      ]
    },
    {
      title: "Books & Reading Materials",
      icon: BookOpen,
      resources: [
        {
          name: "CompTIA Security+ Study Guide",
          author: "Mike Chapple & David Seidl",
          description: "Comprehensive guide for Security+ certification",
          url: "https://www.amazon.com/CompTIA-Security-Study-Guide-SY0-601/dp/1119736250",
          type: "Book"
        },
        {
          name: "The Web Application Hacker's Handbook",
          author: "Dafydd Stuttard & Marcus Pinto",
          description: "Essential guide to web application security testing",
          url: "https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470",
          type: "Book"
        },
        {
          name: "Linux Basics for Hackers",
          author: "OccupyTheWeb",
          description: "Linux fundamentals for cybersecurity professionals",
          url: "https://www.amazon.com/Linux-Basics-Hackers-Networking-Scripting/dp/1593278551",
          type: "Book"
        },
        {
          name: "Cybersecurity Resources Collection",
          description: "Comprehensive collection of cybersecurity learning resources, tools, and references",
          url: "https://github.com/bst04/cybersources",
          type: "GitHub Repository",
          free: true
        },
        {
          name: "30 Cybersecurity Projects with Python",
          description: "Collection of hands-on Python projects for cybersecurity practice",
          url: "https://denizhalil.com/2025/01/24/30-cybersecurity-projects-with-python/",
          type: "Blog Article",
          free: true
        }
      ]
    },
    {
      title: "Video Resources",
      icon: Code,
      resources: [
        {
          name: "NetworkChuck",
          description: "Networking and cybersecurity tutorials with hands-on demonstrations",
          url: "https://www.youtube.com/networkchuck",
          type: "YouTube Channel",
          free: true
        },
        {
          name: "John Hammond",
          description: "Cybersecurity tutorials and CTF walkthroughs",
          url: "https://www.youtube.com/c/johnhammond010",
          type: "YouTube Channel",
          free: true
        },
        {
          name: "David Bombal",
          description: "Networking and cybersecurity courses",
          url: "https://www.youtube.com/davidbombal",
          type: "YouTube Channel",
          free: true
        },
        {
          name: "Linux Tutorials For Beginners",
          description: "Comprehensive Linux tutorial series with practical examples",
          url: "https://youtu.be/v7BNtpw53AA?si=Ffg1zAj-WXCHQcP1",
          type: "YouTube Video",
          free: true
        },
        {
          name: "Bash Shell Scripting Tutorial",
          description: "Introduction to shell scripting for beginners",
          url: "https://www.youtube.com/watch?v=TGmjaK_dUGc",
          type: "YouTube Video",
          free: true
        },
        {
          name: "Cybersecurity Fundamentals",
          description: "Complete introduction to cybersecurity basics for beginners",
          url: "https://youtu.be/WV7KTqVstb0?si=hL4mhxFBDJKVZxOR",
          type: "YouTube Video",
          free: true
        },
        {
          name: "Professor Messer's CompTIA Security+ Videos",
          description: "Free complete course covering the Security+ certification objectives",
          url: "https://www.youtube.com/playlist?list=PLIhvC56v63IJVXv0GJcl9vO5Z6znCVb1P",
          type: "YouTube Playlist",
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
              <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Foundational Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Learning Resources
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              A curated collection of foundational cybersecurity resources, tools, and learning materials.
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