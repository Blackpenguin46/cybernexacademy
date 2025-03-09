import { Microscope, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain, Compass, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResearchPage() {
  const activeProjects = [
    {
      title: "Zero-Day Vulnerability Research",
      category: "Offensive Security",
      icon: Target,
      status: "Active",
      team: "5 Researchers",
      duration: "6-12 months",
      description: "Research into discovering and responsibly disclosing zero-day vulnerabilities in popular software and systems",
      areas: [
        "Binary Analysis",
        "Fuzzing Techniques",
        "Exploit Development",
        "Vulnerability Assessment"
      ],
      requirements: [
        "Advanced C/C++ Knowledge",
        "Assembly Experience",
        "Reverse Engineering Skills",
        "Security Research Background"
      ]
    },
    {
      title: "AI-Powered Threat Detection",
      category: "Defensive Security",
      icon: Brain,
      status: "Active",
      team: "8 Researchers",
      duration: "12-18 months",
      description: "Development of machine learning models for advanced threat detection and anomaly identification",
      areas: [
        "Machine Learning",
        "Behavioral Analysis",
        "Pattern Recognition",
        "Data Processing"
      ],
      requirements: [
        "ML/AI Experience",
        "Python Programming",
        "Data Science Skills",
        "Security Knowledge"
      ]
    },
    {
      title: "Quantum Cryptography",
      category: "Cryptography",
      icon: Lock,
      status: "Active",
      team: "6 Researchers",
      duration: "24 months",
      description: "Research into quantum-resistant cryptographic algorithms and post-quantum security",
      areas: [
        "Quantum Computing",
        "Cryptographic Algorithms",
        "Mathematical Analysis",
        "Protocol Design"
      ],
      requirements: [
        "Advanced Mathematics",
        "Cryptography Knowledge",
        "Quantum Computing Basics",
        "Algorithm Design"
      ]
    }
  ]

  const researchAreas = [
    {
      name: "Malware Research",
      description: "Analysis of emerging malware threats and development of detection techniques",
      topics: [
        {
          title: "Advanced Persistent Threats",
          focus: ["APT Analysis", "Attribution", "Campaign Tracking"]
        },
        {
          title: "Ransomware Evolution",
          focus: ["Encryption Methods", "Distribution Channels", "Prevention"]
        },
        {
          title: "Mobile Malware",
          focus: ["Android Security", "iOS Threats", "App Analysis"]
        }
      ]
    },
    {
      name: "Cloud Security",
      description: "Research into securing cloud infrastructure and services",
      topics: [
        {
          title: "Container Security",
          focus: ["Runtime Security", "Image Analysis", "Orchestration"]
        },
        {
          title: "Serverless Security",
          focus: ["Function Security", "Event Chains", "Access Control"]
        },
        {
          title: "Cloud Native Threats",
          focus: ["Attack Vectors", "Defense Strategies", "Compliance"]
        }
      ]
    },
    {
      name: "IoT Security",
      description: "Investigation of security challenges in Internet of Things devices",
      topics: [
        {
          title: "Firmware Security",
          focus: ["Binary Analysis", "Vulnerability Research", "Updates"]
        },
        {
          title: "Protocol Security",
          focus: ["Communication", "Authentication", "Encryption"]
        },
        {
          title: "Device Protection",
          focus: ["Hardware Security", "Access Control", "Monitoring"]
        }
      ]
    }
  ]

  const publications = [
    {
      title: "Advanced Persistent Threat Detection Using Machine Learning",
      authors: "Research Team Alpha",
      date: "2024",
      type: "Technical Paper",
      topics: ["Machine Learning", "APT Detection", "Network Security"],
      impact: "High - Cited by 50+ papers"
    },
    {
      title: "Zero-Day Vulnerability Discovery in Cloud Platforms",
      authors: "Security Research Group",
      date: "2024",
      type: "Research Paper",
      topics: ["Cloud Security", "Vulnerability Research", "Exploit Development"],
      impact: "Medium - Implemented by major cloud providers"
    },
    {
      title: "Quantum-Safe Cryptography Implementation Guide",
      authors: "Cryptography Team",
      date: "2023",
      type: "White Paper",
      topics: ["Quantum Computing", "Cryptography", "Security Protocols"],
      impact: "High - Industry standard reference"
    }
  ]

  const collaborations = [
    {
      partner: "Academic Institutions",
      projects: [
        "Advanced Cryptography Research",
        "Security Education Programs",
        "Student Research Opportunities"
      ],
      benefits: [
        "Access to Research Facilities",
        "Academic Publications",
        "Knowledge Exchange"
      ]
    },
    {
      partner: "Industry Partners",
      projects: [
        "Threat Intelligence Sharing",
        "Tool Development",
        "Security Testing"
      ],
      benefits: [
        "Real-world Applications",
        "Industry Expertise",
        "Resource Sharing"
      ]
    },
    {
      partner: "Research Labs",
      projects: [
        "Innovation Projects",
        "Security Research",
        "Technology Development"
      ],
      benefits: [
        "Advanced Resources",
        "Collaborative Research",
        "Publication Opportunities"
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
              <span className="text-blue-500 font-medium">Research Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Research & Innovation
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Join cutting-edge research projects and contribute to the future of cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Active Projects Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Active Research Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {activeProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-600/10 rounded-lg">
                        <project.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <div className="text-blue-500 text-sm">{project.category}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-1" />
                        {project.team}
                      </div>
                      <span className="text-green-500">{project.status}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Research Areas</div>
                      <div className="space-y-2">
                        {project.areas.map((area, areaIndex) => (
                          <div
                            key={areaIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Flame className="w-4 h-4 text-blue-500 mr-2" />
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Requirements</div>
                      <div className="flex flex-wrap gap-2">
                        {project.requirements.map((req, reqIndex) => (
                          <span
                            key={reqIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Join Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Research Areas
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {researchAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{area.name}</h3>
                      <p className="text-gray-400 text-sm">{area.description}</p>
                    </div>
                    <div className="space-y-4">
                      {area.topics.map((topic, topicIndex) => (
                        <div key={topicIndex}>
                          <div className="font-medium text-white mb-2">{topic.title}</div>
                          <div className="grid grid-cols-2 gap-2">
                            {topic.focus.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                {item}
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

      {/* Publications Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Recent Publications
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{pub.title}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{pub.authors}</span>
                        <span className="text-blue-500">{pub.date}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Research Topics</div>
                      <div className="flex flex-wrap gap-2">
                        {pub.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Publication Type</div>
                      <div className="text-gray-300">{pub.type}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Impact</div>
                      <div className="text-gray-300">{pub.impact}</div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Read Paper
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Research Collaborations
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {collaborations.map((collab, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">{collab.partner}</h3>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Active Projects</div>
                      <div className="space-y-2">
                        {collab.projects.map((project, projectIndex) => (
                          <div
                            key={projectIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Partnership Benefits</div>
                      <div className="flex flex-wrap gap-2">
                        {collab.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {benefit}
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

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Research Community
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contribute to groundbreaking cybersecurity research and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Apply for Research Position
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/academy/advanced">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  View Advanced Courses
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