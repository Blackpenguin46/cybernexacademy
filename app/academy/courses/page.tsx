import { GraduationCap, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain, BookOpen, Laptop } from "lucide-react"
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

export default function CoursesPage() {
  const resourceCategories: ResourceCategory[] = [
    {
      title: "Web Security Courses",
      icon: Lock,
      resources: [
        {
          name: "Web Security Academy",
          description: "Free, online web security training from PortSwigger",
          url: "https://portswigger.net/web-security",
          type: "Interactive Course",
          free: true
        },
        {
          name: "OWASP Top 10 Course",
          description: "Learn about the most critical web security risks",
          url: "https://owasp.org/www-project-top-ten",
          type: "Self-paced Course",
          free: true
        },
        {
          name: "Advanced Web Attacks and Exploitation",
          description: "Advanced web application security course by Offensive Security",
          url: "https://www.offensive-security.com/awae-oswe",
          type: "Certification Course",
          free: false
        },
        {
          name: "Web Application Penetration Testing",
          description: "Comprehensive web pentesting course by eLearnSecurity",
          url: "https://elearnsecurity.com/product/ewptx-certification",
          type: "Certification Course",
          free: false
        }
      ]
    },
    {
      title: "Network Security Courses",
      icon: Network,
      resources: [
        {
          name: "Practical Network Penetration Testing",
          description: "Hands-on network security and pentesting course",
          url: "https://www.offensive-security.com/pen300-osep",
          type: "Advanced Course",
          free: false
        },
        {
          name: "Network Defense Essentials",
          description: "Learn network security fundamentals and defense strategies",
          url: "https://www.sans.org/sec401",
          type: "Professional Course",
          free: false
        },
        {
          name: "Wireshark University",
          description: "Official Wireshark certification training",
          url: "https://www.wireshark.org/training",
          type: "Technical Course",
          free: false
        },
        {
          name: "Network Security 101",
          description: "TryHackMe's network security fundamentals path",
          url: "https://tryhackme.com/path/outline/network-fundamentals",
          type: "Interactive Course",
          free: false
        }
      ]
    },
    {
      title: "Malware Analysis & Reverse Engineering",
      icon: Code,
      resources: [
        {
          name: "Practical Malware Analysis & Triage",
          description: "SANS course on malware analysis fundamentals",
          url: "https://www.sans.org/sec402",
          type: "Professional Course",
          free: false
        },
        {
          name: "Reverse Engineering Malware",
          description: "Advanced malware analysis and reverse engineering",
          url: "https://www.sans.org/sec760",
          type: "Advanced Course",
          free: false
        },
        {
          name: "Binary Analysis Fundamentals",
          description: "HackTheBox Academy's reverse engineering course",
          url: "https://academy.hackthebox.com/course/preview/reverse-engineering",
          type: "Interactive Course",
          free: false
        },
        {
          name: "Malware Analysis for Beginners",
          description: "Learn malware analysis basics with practical labs",
          url: "https://malwareunicorn.org/workshops/re101.html",
          type: "Workshop",
          free: true
        }
      ]
    },
    {
      title: "Cloud Security Courses",
      icon: Server,
      resources: [
        {
          name: "AWS Security Specialty",
          description: "Official AWS cloud security certification course",
          url: "https://aws.amazon.com/certification/security-specialty",
          type: "Certification Course",
          free: false
        },
        {
          name: "Azure Security Engineer",
          description: "Microsoft's Azure security certification path",
          url: "https://learn.microsoft.com/certifications/azure-security-engineer",
          type: "Certification Course",
          free: false
        },
        {
          name: "Cloud Security Fundamentals",
          description: "INE's cloud security basics course",
          url: "https://ine.com/learning/paths/cloud-security",
          type: "Video Course",
          free: false
        },
        {
          name: "Container Security Essentials",
          description: "Learn container and Kubernetes security",
          url: "https://www.practical-devsecops.com/container-security",
          type: "Technical Course",
          free: false
        }
      ]
    },
    {
      title: "Incident Response & Forensics",
      icon: Flame,
      resources: [
        {
          name: "Digital Forensics Essentials",
          description: "SANS digital forensics and incident response course",
          url: "https://www.sans.org/sec504",
          type: "Professional Course",
          free: false
        },
        {
          name: "Memory Forensics with Volatility",
          description: "Learn memory analysis techniques and tools",
          url: "https://github.com/volatilityfoundation/volatility/wiki",
          type: "Technical Guide",
          free: true
        },
        {
          name: "Advanced Incident Response",
          description: "Enterprise incident response and threat hunting",
          url: "https://www.sans.org/sec508",
          type: "Advanced Course",
          free: false
        },
        {
          name: "Forensics Fundamentals",
          description: "TryHackMe's digital forensics learning path",
          url: "https://tryhackme.com/path/outline/forensics",
          type: "Interactive Course",
          free: false
        }
      ]
    },
    {
      title: "Specialized Security Courses",
      icon: Target,
      resources: [
        {
          name: "Mobile Security Testing",
          description: "Learn mobile application security testing",
          url: "https://mobsf.github.io/docs",
          type: "Technical Guide",
          free: true
        },
        {
          name: "IoT Security Fundamentals",
          description: "Understanding IoT security challenges and testing",
          url: "https://www.pentesteracademy.com/course?id=49",
          type: "Video Course",
          free: false
        },
        {
          name: "Car Hacking Course",
          description: "Automotive security testing and research",
          url: "https://carhacking.tools",
          type: "Specialized Course",
          free: false
        },
        {
          name: "Hardware Security",
          description: "Introduction to hardware security and testing",
          url: "https://www.riscure.com/academy",
          type: "Technical Course",
          free: false
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
              <GraduationCap className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Security Courses</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Training Courses
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore curated cybersecurity courses from leading platforms and training providers.
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