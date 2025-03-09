import { Route, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain, Compass } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RoadmapsPage() {
  const careerTracks = [
    {
      title: "Security Analyst",
      icon: Shield,
      description: "Monitor, detect, and respond to security threats and incidents",
      timeline: "12-18 months",
      phases: [
        {
          name: "Foundation",
          duration: "3-4 months",
          skills: [
            "Network Fundamentals",
            "Security Concepts",
            "Operating Systems",
            "Basic Scripting"
          ]
        },
        {
          name: "Core Skills",
          duration: "4-6 months",
          skills: [
            "SIEM Tools",
            "Threat Detection",
            "Incident Response",
            "Log Analysis"
          ]
        },
        {
          name: "Advanced",
          duration: "5-8 months",
          skills: [
            "Threat Hunting",
            "Malware Analysis",
            "Digital Forensics",
            "Advanced Analytics"
          ]
        }
      ],
      certifications: [
        "CompTIA Security+",
        "GCIH",
        "GCIA",
        "CISSP"
      ]
    },
    {
      title: "Penetration Tester",
      icon: Target,
      description: "Identify and exploit security vulnerabilities in systems and applications",
      timeline: "15-24 months",
      phases: [
        {
          name: "Foundation",
          duration: "4-6 months",
          skills: [
            "Networking",
            "Linux & Windows",
            "Web Technologies",
            "Programming Basics"
          ]
        },
        {
          name: "Core Skills",
          duration: "6-8 months",
          skills: [
            "Web App Testing",
            "Network Testing",
            "Exploitation",
            "Post-Exploitation"
          ]
        },
        {
          name: "Advanced",
          duration: "5-10 months",
          skills: [
            "Advanced Exploitation",
            "Mobile Testing",
            "Cloud Testing",
            "Red Teaming"
          ]
        }
      ],
      certifications: [
        "eJPT",
        "OSCP",
        "OSCE",
        "OSEE"
      ]
    },
    {
      title: "Security Engineer",
      icon: Code,
      description: "Design and implement security solutions and infrastructure",
      timeline: "18-24 months",
      phases: [
        {
          name: "Foundation",
          duration: "4-6 months",
          skills: [
            "System Administration",
            "Network Security",
            "Cloud Platforms",
            "Programming"
          ]
        },
        {
          name: "Core Skills",
          duration: "8-10 months",
          skills: [
            "Security Architecture",
            "DevSecOps",
            "IAM",
            "Cloud Security"
          ]
        },
        {
          name: "Advanced",
          duration: "6-8 months",
          skills: [
            "Zero Trust",
            "Container Security",
            "Automation",
            "Security Frameworks"
          ]
        }
      ],
      certifications: [
        "AWS Security",
        "CCSP",
        "CISSP",
        "CISM"
      ]
    }
  ]

  const skillPaths = [
    {
      name: "Offensive Security",
      areas: [
        {
          title: "Web Security",
          skills: ["XSS", "SQLi", "CSRF", "Authentication Bypass"]
        },
        {
          title: "Network Security",
          skills: ["Port Scanning", "Exploitation", "Pivoting", "C2"]
        },
        {
          title: "Application Security",
          skills: ["Code Review", "Fuzzing", "Binary Analysis", "Mobile"]
        }
      ]
    },
    {
      name: "Defensive Security",
      areas: [
        {
          title: "Security Operations",
          skills: ["SIEM", "EDR", "IDS/IPS", "Threat Intel"]
        },
        {
          title: "Incident Response",
          skills: ["Triage", "Containment", "Eradication", "Recovery"]
        },
        {
          title: "Digital Forensics",
          skills: ["Memory Analysis", "Disk Forensics", "Network Forensics", "Timeline"]
        }
      ]
    },
    {
      name: "Security Engineering",
      areas: [
        {
          title: "Cloud Security",
          skills: ["AWS", "Azure", "GCP", "Kubernetes"]
        },
        {
          title: "Application Security",
          skills: ["SDLC", "CI/CD Security", "Container Security", "API Security"]
        },
        {
          title: "Infrastructure Security",
          skills: ["Network Design", "IAM", "Encryption", "Monitoring"]
        }
      ]
    }
  ]

  const certificationPaths = [
    {
      level: "Entry Level",
      certs: [
        {
          name: "CompTIA Security+",
          duration: "2-3 months",
          focus: "Security Fundamentals"
        },
        {
          name: "eJPT",
          duration: "1-2 months",
          focus: "Basic Pentesting"
        },
        {
          name: "AWS Cloud Practitioner",
          duration: "1-2 months",
          focus: "Cloud Basics"
        }
      ]
    },
    {
      level: "Intermediate",
      certs: [
        {
          name: "OSCP",
          duration: "3-6 months",
          focus: "Penetration Testing"
        },
        {
          name: "GCIH",
          duration: "2-4 months",
          focus: "Incident Handling"
        },
        {
          name: "AWS Security Specialty",
          duration: "2-3 months",
          focus: "Cloud Security"
        }
      ]
    },
    {
      level: "Advanced",
      certs: [
        {
          name: "OSEE",
          duration: "6-12 months",
          focus: "Exploit Development"
        },
        {
          name: "CISSP",
          duration: "4-6 months",
          focus: "Security Management"
        },
        {
          name: "CREST CCSAS",
          duration: "6-8 months",
          focus: "Security Architecture"
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
              Follow structured learning paths designed to help you achieve your cybersecurity career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Career Tracks Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Career Tracks
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {careerTracks.map((track, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-600/10 rounded-lg">
                        <track.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{track.title}</h3>
                        <div className="text-blue-500 text-sm">Timeline: {track.timeline}</div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{track.description}</p>
                    <div className="space-y-4">
                      {track.phases.map((phase, phaseIndex) => (
                        <div key={phaseIndex}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-white">{phase.name}</div>
                            <div className="text-blue-500 text-sm">{phase.duration}</div>
                          </div>
                          <div className="space-y-2">
                            {phase.skills.map((skill, skillIndex) => (
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
                      ))}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Recommended Certifications</div>
                      <div className="flex flex-wrap gap-2">
                        {track.certifications.map((cert, certIndex) => (
                          <span
                            key={certIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {cert}
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

      {/* Skill Paths Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Skill Development Paths
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {skillPaths.map((path, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">{path.name}</h3>
                    <div className="space-y-4">
                      {path.areas.map((area, areaIndex) => (
                        <div key={areaIndex}>
                          <div className="font-medium text-white mb-2">{area.title}</div>
                          <div className="grid grid-cols-2 gap-2">
                            {area.skills.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                {skill}
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

      {/* Certification Paths Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Certification Paths
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {certificationPaths.map((path, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">{path.level}</h3>
                    <div className="space-y-4">
                      {path.certs.map((cert, certIndex) => (
                        <div
                          key={certIndex}
                          className="p-4 bg-gray-800/50 rounded-lg"
                        >
                          <div className="font-medium text-white mb-1">{cert.name}</div>
                          <div className="text-sm text-gray-400">Duration: {cert.duration}</div>
                          <div className="text-sm text-blue-400 mt-1">{cert.focus}</div>
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

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Learning Journey
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Choose your career path and begin your structured learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Courses
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/academy/foundational">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Start Learning
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