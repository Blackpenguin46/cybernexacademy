import { Microscope, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain, BookOpen, Laptop } from "lucide-react"
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

export default function ResearchPage() {
  const resourceCategories: ResourceCategory[] = [
    {
      title: "Academic Research Papers",
      icon: BookOpen,
      resources: [
        {
          name: "IEEE Security & Privacy",
          description: "Leading academic journal for security research",
          url: "https://www.computer.org/csdl/magazine/sp",
          type: "Journal",
          free: false
        },
        {
          name: "USENIX Security Symposium",
          description: "Premier venue for security research presentations",
          url: "https://www.usenix.org/conference/usenixsecurity23",
          type: "Conference",
          free: true
        },
        {
          name: "ACM CCS Proceedings",
          description: "Conference on Computer and Communications Security",
          url: "https://dl.acm.org/conference/ccs",
          type: "Conference",
          free: false
        },
        {
          name: "arXiv Computer Security",
          description: "Preprint repository for security research papers",
          url: "https://arxiv.org/list/cs.CR/recent",
          type: "Repository",
          free: true
        }
      ]
    },
    {
      title: "Vulnerability Research",
      icon: Microscope,
      resources: [
        {
          name: "Project Zero Blog",
          description: "Google's security research team blog",
          url: "https://googleprojectzero.blogspot.com",
          type: "Research Blog",
          free: true
        },
        {
          name: "Exploit Database",
          description: "Archive of public exploits and vulnerabilities",
          url: "https://www.exploit-db.com",
          type: "Database",
          free: true
        },
        {
          name: "Microsoft Security Research",
          description: "Microsoft's security research and advisories",
          url: "https://www.microsoft.com/security/blog/topic/research",
          type: "Research Portal",
          free: true
        },
        {
          name: "NVD Database",
          description: "National Vulnerability Database",
          url: "https://nvd.nist.gov",
          type: "Database",
          free: true
        }
      ]
    },
    {
      title: "Research Tools",
      icon: Terminal,
      resources: [
        {
          name: "Binary Ninja",
          description: "Advanced reverse engineering platform",
          url: "https://binary.ninja",
          type: "Analysis Tool",
          free: false
        },
        {
          name: "Ghidra",
          description: "Software reverse engineering framework by NSA",
          url: "https://ghidra-sre.org",
          type: "Analysis Tool",
          free: true
        },
        {
          name: "IDA Pro",
          description: "Professional disassembler and debugger",
          url: "https://hex-rays.com/ida-pro",
          type: "Analysis Tool",
          free: false
        },
        {
          name: "Radare2",
          description: "Open source reverse engineering framework",
          url: "https://rada.re",
          type: "Analysis Tool",
          free: true
        }
      ]
    },
    {
      title: "Threat Research",
      icon: Target,
      resources: [
        {
          name: "MITRE ATT&CK",
          description: "Knowledge base of adversary tactics and techniques",
          url: "https://attack.mitre.org",
          type: "Framework",
          free: true
        },
        {
          name: "VirusTotal Blog",
          description: "Malware research and analysis blog",
          url: "https://blog.virustotal.com",
          type: "Research Blog",
          free: true
        },
        {
          name: "FireEye Threat Research",
          description: "Advanced threat research and analysis",
          url: "https://www.mandiant.com/resources/blog",
          type: "Research Blog",
          free: true
        },
        {
          name: "Recorded Future Blog",
          description: "Threat intelligence research and analysis",
          url: "https://www.recordedfuture.com/blog",
          type: "Research Blog",
          free: true
        }
      ]
    },
    {
      title: "Research Communities",
      icon: Brain,
      resources: [
        {
          name: "DEFCON Groups",
          description: "Local security research and hacking communities",
          url: "https://defcongroups.org",
          type: "Community",
          free: true
        },
        {
          name: "Reddit /r/netsec",
          description: "Network security news and discussion",
          url: "https://reddit.com/r/netsec",
          type: "Forum",
          free: true
        },
        {
          name: "HackerOne Hacktivity",
          description: "Public bug bounty reports and research",
          url: "https://hackerone.com/hacktivity",
          type: "Platform",
          free: true
        },
        {
          name: "Security Research Labs",
          description: "Directory of academic security research labs",
          url: "https://www.secureworldexpo.com/industry-news/top-cybersecurity-research-labs",
          type: "Directory",
          free: true
        }
      ]
    },
    {
      title: "Emerging Technologies Research",
      icon: Flame,
      resources: [
        {
          name: "Quantum Security Research",
          description: "Post-quantum cryptography research",
          url: "https://csrc.nist.gov/Projects/post-quantum-cryptography",
          type: "Research Project",
          free: true
        },
        {
          name: "AI Security Research",
          description: "Microsoft AI security research papers",
          url: "https://www.microsoft.com/en-us/research/research-area/security-privacy-cryptography",
          type: "Research Portal",
          free: true
        },
        {
          name: "Blockchain Security",
          description: "Trail of Bits blockchain security research",
          url: "https://blog.trailofbits.com/category/blockchain",
          type: "Research Blog",
          free: true
        },
        {
          name: "IoT Security Research",
          description: "Internet of Things security analysis",
          url: "https://www.iotsecurityfoundation.org/tag/research",
          type: "Research Portal",
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
              <Microscope className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Security Research</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Research Resources
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore academic papers, research tools, and cutting-edge security research.
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