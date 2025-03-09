import { BookOpen, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FoundationalPage() {
  const coreConcepts = [
    {
      title: "Information Security Fundamentals",
      icon: Shield,
      topics: [
        "CIA Triad (Confidentiality, Integrity, Availability)",
        "Risk Management Basics",
        "Security Controls & Frameworks",
        "Common Attack Types & Threats"
      ],
      duration: "2-3 weeks",
      resources: [
        "Interactive Lessons",
        "Video Tutorials",
        "Practice Quizzes",
        "Real-world Examples"
      ]
    },
    {
      title: "Networking Basics",
      icon: Network,
      topics: [
        "OSI Model & TCP/IP",
        "Common Protocols",
        "Network Architecture",
        "Basic Network Security"
      ],
      duration: "3-4 weeks",
      resources: [
        "Network Diagrams",
        "Protocol Analysis",
        "Virtual Labs",
        "Hands-on Tools"
      ]
    },
    {
      title: "Operating Systems",
      icon: Server,
      topics: [
        "Windows Fundamentals",
        "Linux Basics",
        "File Systems",
        "User Management"
      ],
      duration: "3-4 weeks",
      resources: [
        "VM Environments",
        "Command Line Practice",
        "System Administration",
        "Security Settings"
      ]
    },
    {
      title: "Programming Essentials",
      icon: Code,
      topics: [
        "Basic Python",
        "Shell Scripting",
        "HTML & JavaScript",
        "SQL Fundamentals"
      ],
      duration: "4-5 weeks",
      resources: [
        "Coding Exercises",
        "Script Examples",
        "Project Tasks",
        "Debug Challenges"
      ]
    }
  ]

  const practicalSkills = [
    {
      name: "Command Line Proficiency",
      description: "Learn to navigate and use command line interfaces effectively",
      exercises: [
        "Basic Navigation Commands",
        "File Management",
        "Text Processing",
        "System Information"
      ]
    },
    {
      name: "Security Tools",
      description: "Introduction to essential cybersecurity tools and utilities",
      exercises: [
        "Network Analysis Tools",
        "Security Scanners",
        "Log Analysis",
        "Monitoring Tools"
      ]
    },
    {
      name: "Documentation",
      description: "Learn to read and write technical documentation",
      exercises: [
        "Reading Technical Docs",
        "Writing Reports",
        "Incident Documentation",
        "Process Documentation"
      ]
    },
    {
      name: "Problem Solving",
      description: "Develop analytical and troubleshooting skills",
      exercises: [
        "Logic Puzzles",
        "Debug Exercises",
        "Root Cause Analysis",
        "Case Studies"
      ]
    }
  ]

  const learningPath = [
    {
      phase: "Phase 1: Core Knowledge",
      duration: "4-6 weeks",
      objectives: [
        "Understand basic security concepts",
        "Learn networking fundamentals",
        "Master basic system administration",
        "Introduction to programming concepts"
      ],
      outcomes: [
        "Grasp of security principles",
        "Network protocol understanding",
        "Basic system management skills",
        "Simple script writing ability"
      ]
    },
    {
      phase: "Phase 2: Practical Skills",
      duration: "6-8 weeks",
      objectives: [
        "Work with security tools",
        "Practice command line usage",
        "Learn documentation skills",
        "Develop problem-solving abilities"
      ],
      outcomes: [
        "Tool proficiency",
        "CLI comfort",
        "Documentation skills",
        "Analytical thinking"
      ]
    },
    {
      phase: "Phase 3: Integration",
      duration: "4-6 weeks",
      objectives: [
        "Complete practical projects",
        "Work on real-world scenarios",
        "Build a home lab",
        "Prepare for certifications"
      ],
      outcomes: [
        "Hands-on experience",
        "Project portfolio",
        "Lab environment",
        "Certification readiness"
      ]
    }
  ]

  const certificationPrep = [
    {
      name: "CompTIA Security+",
      topics: [
        "Security Concepts",
        "Network Security",
        "Compliance",
        "Threats & Vulnerabilities"
      ],
      resources: [
        "Study Guides",
        "Practice Tests",
        "Video Courses",
        "Lab Exercises"
      ]
    },
    {
      name: "CompTIA Network+",
      topics: [
        "Network Architecture",
        "Network Operations",
        "Network Security",
        "Troubleshooting"
      ],
      resources: [
        "Course Materials",
        "Practice Exams",
        "Virtual Labs",
        "Study Groups"
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
              <span className="text-blue-500 font-medium">Foundational Learning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Start Your Cybersecurity Journey
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Build a strong foundation in cybersecurity with our comprehensive beginner-friendly curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concepts Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Core Concepts
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {coreConcepts.map((concept, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-600/10 rounded-lg">
                        <concept.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{concept.title}</h3>
                        <div className="text-blue-500 text-sm">Duration: {concept.duration}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Topics</div>
                      <div className="space-y-2">
                        {concept.topics.map((topic, topicIndex) => (
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
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Learning Resources</div>
                      <div className="flex flex-wrap gap-2">
                        {concept.resources.map((resource, resourceIndex) => (
                          <span
                            key={resourceIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {resource}
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

      {/* Practical Skills Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Practical Skills Development
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {practicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                      <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Practice Exercises</div>
                      <div className="space-y-2">
                        {skill.exercises.map((exercise, exerciseIndex) => (
                          <div
                            key={exerciseIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
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

      {/* Learning Path Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Learning Path
            </h2>
            <div className="space-y-8">
              {learningPath.map((phase, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{phase.phase}</h3>
                      <span className="text-blue-500">{phase.duration}</span>
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Learning Objectives</div>
                      <div className="space-y-2">
                        {phase.objectives.map((objective, objectiveIndex) => (
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
                      <div className="text-sm text-gray-500 mb-2">Expected Outcomes</div>
                      <div className="space-y-2">
                        {phase.outcomes.map((outcome, outcomeIndex) => (
                          <div
                            key={outcomeIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {outcome}
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

      {/* Certification Prep Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Certification Preparation
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {certificationPrep.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Exam Topics</div>
                      <div className="space-y-2">
                        {cert.topics.map((topic, topicIndex) => (
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
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Study Resources</div>
                      <div className="flex flex-wrap gap-2">
                        {cert.resources.map((resource, resourceIndex) => (
                          <span
                            key={resourceIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {resource}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Preparation
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
              Begin Your Learning Journey
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Start building your cybersecurity foundation with structured learning paths and hands-on practice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Learning
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/academy/roadmaps">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  View Full Roadmap
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