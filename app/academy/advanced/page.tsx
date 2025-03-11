import { Zap, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain } from "lucide-react"
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

export default function AdvancedPage() {
  const resourceCategories: ResourceCategory[] = [
    {
      title: "Exploit Development Tools",
      icon: Code,
      resources: [
        {
          name: "IDA Pro",
          description: "Advanced multi-processor disassembler and debugger",
          url: "https://hex-rays.com/ida-pro",
          type: "Reverse Engineering",
          free: false
        },
        {
          name: "Binary Ninja",
          description: "Reverse engineering platform",
          url: "https://binary.ninja",
          type: "Reverse Engineering",
          free: false
        },
        {
          name: "WinDbg Preview",
          description: "Windows debugger for kernel and user mode",
          url: "https://apps.microsoft.com/store/detail/windbg-preview/9PGJGD53TN86",
          type: "Debugger",
          free: true
        },
        {
          name: "Frida",
          description: "Dynamic instrumentation toolkit",
          url: "https://frida.re",
          type: "Instrumentation",
          free: true
        },
        {
          name: "Ghidra",
          description: "Open-source software reverse engineering suite",
          url: "https://ghidra-sre.org",
          type: "Reverse Engineering",
          free: true
        },
        {
          name: "Radare2",
          description: "Open-source software for reverse engineering and analyzing binaries",
          url: "https://rada.re/n/radare2.html",
          type: "Reverse Engineering",
          free: true
        },
        {
          name: "Immunity Debugger",
          description: "Powerful debugger for analyzing malware and exploits",
          url: "https://www.immunityinc.com/products/debugger/",
          type: "Debugging Tool",
          free: false
        }
      ]
    },
    {
      title: "Advanced Malware Analysis",
      icon: Brain,
      resources: [
        {
          name: "FireEye FLARE VM",
          description: "Windows-based security distribution for malware analysis",
          url: "https://github.com/mandiant/flare-vm",
          type: "Analysis Suite",
          free: true
        },
        {
          name: "Ghidra",
          description: "Software reverse engineering framework by NSA",
          url: "https://ghidra-sre.org",
          type: "Reverse Engineering",
          free: true
        },
        {
          name: "x64dbg",
          description: "Open-source x64/x32 debugger for Windows",
          url: "https://x64dbg.com",
          type: "Debugger",
          free: true
        },
        {
          name: "Cutter",
          description: "Free and open-source reverse engineering platform",
          url: "https://cutter.re",
          type: "Reverse Engineering",
          free: true
        }
      ]
    },
    {
      title: "Red Team Operations",
      icon: Target,
      resources: [
        {
          name: "Cobalt Strike",
          description: "Advanced adversary simulation platform",
          url: "https://www.cobaltstrike.com",
          type: "C2 Framework",
          free: false
        },
        {
          name: "Covenant",
          description: ".NET command and control framework",
          url: "https://github.com/cobbr/Covenant",
          type: "C2 Framework",
          free: true
        },
        {
          name: "Havoc C2",
          description: "Modern and malleable post-exploitation command and control framework",
          url: "https://github.com/HavocFramework/Havoc",
          type: "C2 Framework",
          free: true
        },
        {
          name: "Sliver",
          description: "Cross-platform adversary emulation/red team framework",
          url: "https://github.com/BishopFox/sliver",
          type: "C2 Framework",
          free: true
        }
      ]
    },
    {
      title: "Advanced Research Materials",
      icon: Terminal,
      resources: [
        {
          name: "Windows Internals",
          description: "Deep dive into Windows architecture and internals",
          url: "https://www.amazon.com/Windows-Internals-Part-architecture-management/dp/0735684189",
          type: "Book",
          author: "Pavel Yosifovich, Alex Ionescu"
        },
        {
          name: "The Shellcoder's Handbook",
          description: "Guide to discovering and exploiting security holes",
          url: "https://www.amazon.com/Shellcoders-Handbook-Discovering-Exploiting-Security/dp/047008023X",
          type: "Book",
          author: "Chris Anley et al."
        },
        {
          name: "A Guide to Kernel Exploitation",
          description: "Attacking the core",
          url: "https://www.amazon.com/Guide-Kernel-Exploitation-Attacking-Core/dp/1597494860",
          type: "Book",
          author: "Enrico Perla, Massimiliano Oldani"
        }
      ]
    },
    {
      title: "Advanced Security Research",
      icon: Flame,
      resources: [
        {
          name: "Project Zero Blog",
          description: "Google's security research blog",
          url: "https://googleprojectzero.blogspot.com",
          type: "Research Blog",
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
          name: "Phrack Magazine",
          description: "Underground computer security publication",
          url: "http://www.phrack.org",
          type: "Publication",
          free: true
        }
      ]
    },
    {
      title: "Advanced Training & Certifications",
      icon: Shield,
      resources: [
        {
          name: "Offensive Security OSEE",
          description: "Advanced Windows exploitation course",
          url: "https://www.offensive-security.com/awe-osee",
          type: "Certification",
          free: false
        },
        {
          name: "SANS SEC760",
          description: "Advanced exploit development for penetration testers",
          url: "https://www.sans.org/cyber-security-courses/advanced-exploit-development-penetration-testers",
          type: "Training",
          free: false
        },
        {
          name: "Corelan Advanced Training",
          description: "Advanced exploit development training",
          url: "https://www.corelan-training.com",
          type: "Training",
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
              <Zap className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Advanced Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Expert-Level Security Resources
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              A curated collection of advanced cybersecurity tools, research materials, and specialized resources.
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