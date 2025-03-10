import { Route, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain, Map } from "lucide-react"
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

export default function RoadmapsPage() {
  const resourceCategories: ResourceCategory[] = [
    {
      title: "Career Path Roadmaps",
      icon: Route,
      resources: [
        {
          name: "Penetration Testing Path",
          description: "Comprehensive guide to becoming a penetration tester",
          url: "https://www.hackthebox.com/blog/penetration-testing-career-path",
          type: "Career Guide",
          free: true
        },
        {
          name: "Incident Response Path",
          description: "Career roadmap for incident response and digital forensics",
          url: "https://www.sans.org/cyber-security-career-roadmap",
          type: "Career Guide",
          free: true
        },
        {
          name: "Security Engineering Path",
          description: "Guide to becoming a security engineer",
          url: "https://tldrsec.com/guides/seceng",
          type: "Career Guide",
          free: true
        },
        {
          name: "Application Security Path",
          description: "Career path for application security professionals",
          url: "https://portswigger.net/web-security/learning-path",
          type: "Career Guide",
          free: true
        }
      ]
    },
    {
      title: "Certification Roadmaps",
      icon: Shield,
      resources: [
        {
          name: "CompTIA Certification Pathway",
          description: "Progressive certification path from Security+ to CySA+ to CASP+",
          url: "https://www.comptia.org/certifications/which-certification/stackable-certifications",
          type: "Certification Path"
        },
        {
          name: "Offensive Security Path",
          description: "Progressive path through OffSec certifications",
          url: "https://www.offensive-security.com/courses-and-certifications",
          type: "Certification Path"
        },
        {
          name: "(ISC)² Certification Path",
          description: "Path to CISSP and advanced certifications",
          url: "https://www.isc2.org/Certifications/Career-Pathway",
          type: "Certification Path"
        },
        {
          name: "GIAC Certification Roadmap",
          description: "Comprehensive GIAC certification progression",
          url: "https://www.giac.org/certifications/get-certified/roadmap",
          type: "Certification Path"
        }
      ]
    },
    {
      title: "Skill Development Paths",
      icon: Target,
      resources: [
        {
          name: "TryHackMe Learning Paths",
          description: "Structured paths for different security roles",
          url: "https://tryhackme.com/paths",
          type: "Learning Path",
          free: false
        },
        {
          name: "HackTheBox Academy Paths",
          description: "Role-based learning paths with hands-on labs",
          url: "https://academy.hackthebox.com/paths",
          type: "Learning Path",
          free: false
        },
        {
          name: "INE Security Paths",
          description: "Comprehensive cybersecurity training paths",
          url: "https://ine.com/learning/paths",
          type: "Learning Path",
          free: false
        }
      ]
    },
    {
      title: "Specialization Tracks",
      icon: Brain,
      resources: [
        {
          name: "Cloud Security Path",
          description: "Guide to cloud security specialization",
          url: "https://cloudacademy.com/learning-paths/cloud-security-engineer",
          type: "Specialization",
          free: false
        },
        {
          name: "Malware Analysis Track",
          description: "Path to becoming a malware analyst",
          url: "https://www.sans.org/cyber-security-careers/malware-analyst",
          type: "Specialization",
          free: true
        },
        {
          name: "DevSecOps Path",
          description: "Guide to DevSecOps career progression",
          url: "https://www.practical-devsecops.com/devsecops-university",
          type: "Specialization",
          free: false
        }
      ]
    },
    {
      title: "Industry Frameworks",
      icon: Map,
      resources: [
        {
          name: "NICE Cybersecurity Framework",
          description: "National Initiative for Cybersecurity Education framework",
          url: "https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center",
          type: "Framework",
          free: true
        },
        {
          name: "MITRE ATT&CK Framework",
          description: "Globally-accessible knowledge base of adversary tactics",
          url: "https://attack.mitre.org",
          type: "Framework",
          free: true
        },
        {
          name: "CIS Controls",
          description: "Prioritized set of actions to protect organizations",
          url: "https://www.cisecurity.org/controls",
          type: "Framework",
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
              <Route className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Career Roadmaps</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Career Paths
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore comprehensive roadmaps and learning paths for various cybersecurity careers.
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