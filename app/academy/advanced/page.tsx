import { Zap, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdvancedPage() {
  const expertTopics = [
    {
      title: "Advanced Exploit Development",
      icon: Code,
      topics: [
        "Binary Exploitation",
        "Shellcode Development",
        "Kernel Exploitation",
        "Zero-Day Research"
      ],
      duration: "6-8 weeks",
      tools: [
        "IDA Pro",
        "GDB/WinDbg",
        "Immunity Debugger",
        "Ghidra"
      ]
    },
    {
      title: "Advanced Malware Analysis",
      icon: Brain,
      topics: [
        "Advanced Static Analysis",
        "Dynamic Analysis",
        "Memory Forensics",
        "Anti-Analysis Techniques"
      ],
      duration: "8-10 weeks",
      tools: [
        "x64dbg",
        "Volatility",
        "REMnux",
        "Cuckoo Sandbox"
      ]
    },
    {
      title: "Red Team Operations",
      icon: Target,
      topics: [
        "Advanced Persistence",
        "Evasion Techniques",
        "Command & Control",
        "Infrastructure Design"
      ],
      duration: "10-12 weeks",
      tools: [
        "Cobalt Strike",
        "Empire",
        "Covenant",
        "Custom C2"
      ]
    },
    {
      title: "Cloud Security Architecture",
      icon: Server,
      topics: [
        "Zero Trust Architecture",
        "Cloud Native Security",
        "Container Security",
        "Serverless Security"
      ],
      duration: "8-10 weeks",
      tools: [
        "AWS GuardDuty",
        "Azure Sentinel",
        "Kubernetes",
        "Terraform"
      ]
    }
  ]

  const researchProjects = [
    {
      title: "Vulnerability Research",
      description: "Conduct original security research and discover new vulnerabilities",
      areas: [
        "Protocol Analysis",
        "Source Code Auditing",
        "Fuzzing Techniques",
        "Exploit Development"
      ],
      deliverables: [
        "Research Paper",
        "Proof of Concept",
        "Security Advisory",
        "Mitigation Strategy"
      ]
    },
    {
      title: "Advanced Defense Systems",
      description: "Design and implement cutting-edge defense mechanisms",
      areas: [
        "AI-based Detection",
        "Behavioral Analysis",
        "Deception Technology",
        "Zero Trust Implementation"
      ],
      deliverables: [
        "System Architecture",
        "Implementation Guide",
        "Performance Analysis",
        "Deployment Strategy"
      ]
    },
    {
      title: "Threat Intelligence",
      description: "Develop advanced threat intelligence capabilities",
      areas: [
        "Threat Hunting",
        "APT Analysis",
        "Intelligence Gathering",
        "Attribution Techniques"
      ],
      deliverables: [
        "Intelligence Reports",
        "IOC Database",
        "Attribution Framework",
        "Hunting Playbooks"
      ]
    }
  ]

  const specializedTracks = [
    {
      name: "Advanced Red Team Operations",
      description: "Master advanced adversary simulation and red team methodologies",
      modules: [
        {
          title: "Advanced Persistence",
          topics: ["Rootkit Development", "Firmware Implants", "Custom Backdoors"]
        },
        {
          title: "Evasion Techniques",
          topics: ["AV/EDR Evasion", "AMSI Bypass", "Process Injection"]
        },
        {
          title: "Infrastructure Design",
          topics: ["C2 Architecture", "Domain Fronting", "Traffic Obfuscation"]
        }
      ]
    },
    {
      name: "Advanced Threat Detection",
      description: "Develop expertise in advanced threat detection and response",
      modules: [
        {
          title: "Advanced Analytics",
          topics: ["Machine Learning", "Behavioral Analysis", "Anomaly Detection"]
        },
        {
          title: "Threat Hunting",
          topics: ["Hunt Team Operations", "TTP Analysis", "Threat Intelligence"]
        },
        {
          title: "Incident Response",
          topics: ["Advanced Forensics", "Memory Analysis", "Timeline Analysis"]
        }
      ]
    },
    {
      name: "Security Research & Development",
      description: "Focus on security research and tool development",
      modules: [
        {
          title: "Research Methodology",
          topics: ["Vulnerability Research", "Exploit Development", "Tool Creation"]
        },
        {
          title: "Advanced Programming",
          topics: ["Low-level Programming", "Reverse Engineering", "Automation"]
        },
        {
          title: "Documentation",
          topics: ["Technical Writing", "Research Papers", "Presentations"]
        }
      ]
    }
  ]

  const certifications = [
    {
      name: "OSEE",
      description: "Offensive Security Exploitation Expert",
      topics: [
        "Advanced Windows Exploitation",
        "Kernel Exploitation",
        "Browser Exploitation",
        "Custom Exploit Development"
      ],
      prerequisites: [
        "OSCP Required",
        "Strong Programming Skills",
        "x86/x64 Assembly",
        "Windows Internals"
      ]
    },
    {
      name: "GXPN",
      description: "GIAC Exploit Researcher and Advanced Penetration Tester",
      topics: [
        "Advanced Penetration Testing",
        "Exploit Writing",
        "Advanced Web Attacks",
        "ROP Chain Development"
      ],
      prerequisites: [
        "GPEN Recommended",
        "C/C++ Programming",
        "Networking Knowledge",
        "Security Fundamentals"
      ]
    },
    {
      name: "CREST CCSAS",
      description: "CREST Certified Security Architecture & Senior Security Architect",
      topics: [
        "Enterprise Architecture",
        "Security Design",
        "Risk Assessment",
        "Compliance Frameworks"
      ],
      prerequisites: [
        "CISSP Recommended",
        "Architecture Experience",
        "Security Experience",
        "Technical Leadership"
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
              <span className="text-blue-500 font-medium">Advanced Learning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Master Advanced Security Skills
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Develop expert-level cybersecurity skills through advanced research, specialized training, and hands-on projects.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Topics Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Expert Topics
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {expertTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-600/10 rounded-lg">
                        <topic.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                        <div className="text-blue-500 text-sm">Duration: {topic.duration}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Advanced Topics</div>
                      <div className="space-y-2">
                        {topic.topics.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Flame className="w-4 h-4 text-blue-500 mr-2" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Professional Tools</div>
                      <div className="flex flex-wrap gap-2">
                        {topic.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Research Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {researchProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Research Areas</div>
                      <div className="space-y-2">
                        {project.areas.map((area, areaIndex) => (
                          <div
                            key={areaIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Target className="w-4 h-4 text-blue-500 mr-2" />
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Deliverables</div>
                      <div className="flex flex-wrap gap-2">
                        {project.deliverables.map((deliverable, deliverableIndex) => (
                          <span
                            key={deliverableIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Research
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Tracks Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Specialized Tracks
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {specializedTracks.map((track, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{track.name}</h3>
                      <p className="text-gray-400 text-sm">{track.description}</p>
                    </div>
                    <div className="space-y-4">
                      {track.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex}>
                          <div className="font-medium text-white mb-2">{module.title}</div>
                          <div className="space-y-2">
                            {module.topics.map((topic, topicIndex) => (
                              <div
                                key={topicIndex}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Certifications Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Expert Certifications
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                      <p className="text-gray-400 text-sm">{cert.description}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Topics</div>
                      <div className="space-y-2">
                        {cert.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Flame className="w-4 h-4 text-blue-500 mr-2" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Prerequisites</div>
                      <div className="flex flex-wrap gap-2">
                        {cert.prerequisites.map((prereq, prereqIndex) => (
                          <span
                            key={prereqIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {prereq}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for Expert-Level Training?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Take your cybersecurity expertise to the highest level with advanced research and specialized training.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Advanced Track
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/academy/research">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  View Research Projects
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 