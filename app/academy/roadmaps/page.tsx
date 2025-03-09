import { Route, MapPin, Target, Milestone, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RoadmapsPage() {
  const careerPaths = [
    {
      title: "Security Analyst",
      description: "Monitor, detect, and respond to security threats and incidents",
      timeline: "12-18 months",
      salary: "$65,000 - $95,000",
      skills: [
        "Security Information and Event Management (SIEM)",
        "Incident Response",
        "Network Security",
        "Log Analysis",
        "Security Controls",
        "Threat Intelligence"
      ],
      certifications: [
        "CompTIA Security+",
        "SSCP",
        "GCIH"
      ],
      milestones: [
        {
          title: "Foundation (3-4 months)",
          skills: [
            "Network Fundamentals",
            "Security Concepts",
            "Operating Systems"
          ]
        },
        {
          title: "Core Skills (4-6 months)",
          skills: [
            "SIEM Tools",
            "Incident Handling",
            "Security Controls"
          ]
        },
        {
          title: "Advanced Topics (5-8 months)",
          skills: [
            "Threat Hunting",
            "Forensics Basics",
            "Automation"
          ]
        }
      ]
    },
    {
      title: "Penetration Tester",
      description: "Identify and exploit security vulnerabilities in systems and applications",
      timeline: "18-24 months",
      salary: "$75,000 - $120,000",
      skills: [
        "Network Penetration Testing",
        "Web Application Security",
        "Exploit Development",
        "Social Engineering",
        "Scripting",
        "Vulnerability Assessment"
      ],
      certifications: [
        "OSCP",
        "CEH",
        "GPEN"
      ],
      milestones: [
        {
          title: "Foundation (4-6 months)",
          skills: [
            "Programming Basics",
            "Networking",
            "Linux Systems"
          ]
        },
        {
          title: "Core Skills (6-8 months)",
          skills: [
            "Web Security",
            "Network Security",
            "Exploitation"
          ]
        },
        {
          title: "Advanced Topics (8-10 months)",
          skills: [
            "Advanced Exploitation",
            "Mobile Security",
            "Cloud Security"
          ]
        }
      ]
    },
    {
      title: "Security Engineer",
      description: "Design and implement security solutions and infrastructure",
      timeline: "24-36 months",
      salary: "$90,000 - $140,000",
      skills: [
        "Security Architecture",
        "Cloud Security",
        "Identity and Access Management",
        "Security Automation",
        "DevSecOps",
        "Cryptography"
      ],
      certifications: [
        "CISSP",
        "CCSP",
        "AWS Security Specialty"
      ],
      milestones: [
        {
          title: "Foundation (6-8 months)",
          skills: [
            "System Administration",
            "Cloud Platforms",
            "Programming"
          ]
        },
        {
          title: "Core Skills (8-12 months)",
          skills: [
            "Security Architecture",
            "IAM Solutions",
            "Network Security"
          ]
        },
        {
          title: "Advanced Topics (10-16 months)",
          skills: [
            "Zero Trust",
            "Cloud Security",
            "Security Automation"
          ]
        }
      ]
    }
  ]

  const learningTracks = [
    {
      name: "Beginner Track",
      duration: "6-8 months",
      description: "Build a strong foundation in cybersecurity fundamentals",
      modules: [
        {
          title: "Introduction to Cybersecurity",
          duration: "4 weeks",
          topics: ["Security Concepts", "Risk Management", "Security Controls"]
        },
        {
          title: "Networking Fundamentals",
          duration: "6 weeks",
          topics: ["TCP/IP", "Network Protocols", "Network Security"]
        },
        {
          title: "Operating System Security",
          duration: "6 weeks",
          topics: ["Windows Security", "Linux Security", "Access Control"]
        },
        {
          title: "Security Tools & Practices",
          duration: "8 weeks",
          topics: ["Security Tools", "Best Practices", "Documentation"]
        }
      ]
    },
    {
      name: "Intermediate Track",
      duration: "8-12 months",
      description: "Advance your skills with hands-on security practices",
      modules: [
        {
          title: "Web Application Security",
          duration: "8 weeks",
          topics: ["OWASP Top 10", "Web Vulnerabilities", "Secure Coding"]
        },
        {
          title: "Network Security",
          duration: "10 weeks",
          topics: ["Firewalls", "IDS/IPS", "VPNs"]
        },
        {
          title: "Incident Response",
          duration: "6 weeks",
          topics: ["IR Process", "Digital Forensics", "Threat Hunting"]
        },
        {
          title: "Cloud Security",
          duration: "8 weeks",
          topics: ["Cloud Platforms", "Security Controls", "Compliance"]
        }
      ]
    },
    {
      name: "Advanced Track",
      duration: "12-18 months",
      description: "Master advanced security techniques and specializations",
      modules: [
        {
          title: "Advanced Penetration Testing",
          duration: "12 weeks",
          topics: ["Exploit Development", "Red Team Ops", "Advanced Web Hacking"]
        },
        {
          title: "Malware Analysis",
          duration: "10 weeks",
          topics: ["Static Analysis", "Dynamic Analysis", "Reverse Engineering"]
        },
        {
          title: "Security Architecture",
          duration: "10 weeks",
          topics: ["Zero Trust", "Enterprise Security", "Architecture Patterns"]
        },
        {
          title: "DevSecOps",
          duration: "8 weeks",
          topics: ["CI/CD Security", "Container Security", "Infrastructure as Code"]
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
              <span className="text-blue-500 font-medium">Learning Roadmaps</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Your Path to Cybersecurity Success
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Choose your career path and follow our structured learning roadmaps to achieve your goals in cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Career Paths
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {careerPaths.map((path, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{path.title}</h3>
                      <p className="text-gray-400 text-sm">{path.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Timeline</div>
                        <div className="text-white">{path.timeline}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Salary Range</div>
                        <div className="text-white">{path.salary}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Required Skills</div>
                      <div className="space-y-2">
                        {path.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Recommended Certifications</div>
                      <div className="flex flex-wrap gap-2">
                        {path.certifications.map((cert, certIndex) => (
                          <span
                            key={certIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-4">Learning Milestones</div>
                      <div className="space-y-4">
                        {path.milestones.map((milestone, milestoneIndex) => (
                          <div
                            key={milestoneIndex}
                            className="relative pl-4 border-l-2 border-blue-500/30"
                          >
                            <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-blue-500"></div>
                            <div className="font-medium text-white mb-2">{milestone.title}</div>
                            <div className="space-y-1">
                              {milestone.skills.map((skill, skillIndex) => (
                                <div
                                  key={skillIndex}
                                  className="text-sm text-gray-400"
                                >
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start This Path
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Learning Tracks
            </h2>
            <div className="space-y-8">
              {learningTracks.map((track, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{track.name}</h3>
                      <span className="text-blue-500">{track.duration}</span>
                    </div>
                    <p className="text-gray-400">{track.description}</p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    {track.modules.map((module, moduleIndex) => (
                      <div
                        key={moduleIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-3">
                          <div className="font-medium text-white mb-1">{module.title}</div>
                          <div className="text-sm text-blue-500">{module.duration}</div>
                        </div>
                        <div className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <div
                              key={topicIndex}
                              className="flex items-center text-sm text-gray-400"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Choose your path and begin your cybersecurity career today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/academy/courses">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Browse Courses
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                Get Career Advice
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 