import { Layers, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Wrench } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IntermediatePage() {
  const advancedTopics = [
    {
      title: "Advanced Network Security",
      icon: Network,
      topics: [
        "Network Protocol Analysis",
        "IDS/IPS Implementation",
        "VPN Technologies",
        "Network Monitoring"
      ],
      duration: "4-5 weeks",
      tools: [
        "Wireshark",
        "Snort",
        "OpenVPN",
        "Nagios"
      ]
    },
    {
      title: "Web Application Security",
      icon: Lock,
      topics: [
        "OWASP Top 10",
        "Web Vulnerabilities",
        "Authentication Systems",
        "API Security"
      ],
      duration: "5-6 weeks",
      tools: [
        "Burp Suite",
        "OWASP ZAP",
        "SQLMap",
        "Postman"
      ]
    },
    {
      title: "System Security",
      icon: Server,
      topics: [
        "Advanced Windows Security",
        "Linux Hardening",
        "Access Controls",
        "Security Policies"
      ],
      duration: "4-5 weeks",
      tools: [
        "Sysinternals",
        "SELinux",
        "AppArmor",
        "Group Policy"
      ]
    },
    {
      title: "Security Automation",
      icon: Code,
      topics: [
        "Python for Security",
        "Bash Scripting",
        "PowerShell Security",
        "Automation Tools"
      ],
      duration: "5-6 weeks",
      tools: [
        "Python Libraries",
        "Ansible",
        "PowerShell ISE",
        "Git"
      ]
    }
  ]

  const handsonLabs = [
    {
      name: "Network Defense Lab",
      description: "Practice defending networks against common attacks",
      exercises: [
        "Network Traffic Analysis",
        "Firewall Configuration",
        "IDS Setup & Tuning",
        "Incident Response"
      ],
      duration: "2 weeks"
    },
    {
      name: "Web Security Testing",
      description: "Identify and exploit web application vulnerabilities",
      exercises: [
        "SQL Injection",
        "XSS Prevention",
        "CSRF Protection",
        "Security Headers"
      ],
      duration: "3 weeks"
    },
    {
      name: "System Hardening",
      description: "Implement system security controls and hardening measures",
      exercises: [
        "OS Hardening",
        "Service Hardening",
        "Access Control",
        "Audit Logging"
      ],
      duration: "2 weeks"
    },
    {
      name: "Security Automation",
      description: "Automate security tasks and incident response",
      exercises: [
        "Log Analysis Scripts",
        "Automated Scanning",
        "Response Playbooks",
        "Report Generation"
      ],
      duration: "3 weeks"
    }
  ]

  const specializations = [
    {
      track: "Offensive Security",
      description: "Focus on penetration testing and vulnerability assessment",
      skills: [
        "Web App Testing",
        "Network Pentesting",
        "Exploit Development",
        "Social Engineering"
      ],
      certifications: [
        "OSCP",
        "PenTest+",
        "eWPT",
        "GPEN"
      ]
    },
    {
      track: "Defensive Security",
      description: "Specialize in threat detection and incident response",
      skills: [
        "Security Monitoring",
        "Incident Handling",
        "Malware Analysis",
        "Digital Forensics"
      ],
      certifications: [
        "GCIH",
        "GCIA",
        "GCFE",
        "CCSP"
      ]
    },
    {
      track: "Cloud Security",
      description: "Master securing cloud infrastructure and applications",
      skills: [
        "AWS Security",
        "Azure Security",
        "Cloud Architecture",
        "DevSecOps"
      ],
      certifications: [
        "AWS Security",
        "Azure Security",
        "CCSK",
        "CCSP"
      ]
    }
  ]

  const projects = [
    {
      title: "Security Monitoring System",
      description: "Build a complete security monitoring solution",
      objectives: [
        "Set up log collection",
        "Configure alerts",
        "Create dashboards",
        "Implement response procedures"
      ],
      tools: [
        "ELK Stack",
        "Wazuh",
        "Grafana",
        "Alerting Tools"
      ]
    },
    {
      title: "Web Application Firewall",
      description: "Develop and deploy a custom WAF solution",
      objectives: [
        "Rule development",
        "Traffic analysis",
        "Attack detection",
        "Performance optimization"
      ],
      tools: [
        "ModSecurity",
        "NGINX",
        "Regular Expressions",
        "Python"
      ]
    },
    {
      title: "Automated Pentesting Framework",
      description: "Create an automated security testing framework",
      objectives: [
        "Scanner integration",
        "Report generation",
        "Vulnerability assessment",
        "Remediation tracking"
      ],
      tools: [
        "Python",
        "Nmap",
        "Metasploit",
        "Git"
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
              <span className="text-blue-500 font-medium">Intermediate Learning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Advance Your Security Skills
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Take your cybersecurity knowledge to the next level with advanced topics and hands-on practice.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Topics Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Advanced Topics
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {advancedTopics.map((topic, index) => (
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
                      <div className="text-sm text-gray-500 mb-2">Key Topics</div>
                      <div className="space-y-2">
                        {topic.topics.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Tools & Technologies</div>
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

      {/* Hands-on Labs Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Hands-on Labs
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {handsonLabs.map((lab, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{lab.name}</h3>
                        <span className="text-blue-500 text-sm">{lab.duration}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{lab.description}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Lab Exercises</div>
                      <div className="space-y-2">
                        {lab.exercises.map((exercise, exerciseIndex) => (
                          <div
                            key={exerciseIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Wrench className="w-4 h-4 text-blue-500 mr-2" />
                            {exercise}
                          </div>
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

      {/* Specialization Tracks Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Specialization Tracks
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {specializations.map((spec, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{spec.track}</h3>
                      <p className="text-gray-400 text-sm">{spec.description}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Skills</div>
                      <div className="space-y-2">
                        {spec.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Target className="w-4 h-4 text-blue-500 mr-2" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Recommended Certifications</div>
                      <div className="flex flex-wrap gap-2">
                        {spec.certifications.map((cert, certIndex) => (
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

      {/* Projects Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Hands-on Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {projects.map((project, index) => (
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
                      <div className="text-sm text-gray-500 mb-2">Project Objectives</div>
                      <div className="space-y-2">
                        {project.objectives.map((objective, objectiveIndex) => (
                          <div
                            key={objectiveIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />
                            {objective}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Tools Used</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Project
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
              Ready to Level Up?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Choose your specialization and start building advanced cybersecurity skills.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Learning
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/academy/advanced">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Explore Advanced Track
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