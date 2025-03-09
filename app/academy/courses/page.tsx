import { BookOpen, Code, Network, Shield, Terminal, Server, Lock, ExternalLink, CheckCircle2, Target, Flame, Brain, Star, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CoursesPage() {
  const featuredCourses = [
    {
      title: "Complete Cybersecurity Bootcamp",
      level: "Beginner to Intermediate",
      duration: "6 months",
      rating: 4.8,
      students: "15,000+",
      description: "Comprehensive cybersecurity training covering fundamentals to advanced topics",
      topics: [
        "Security Fundamentals",
        "Network Security",
        "Web Security",
        "Cryptography",
        "Incident Response",
        "Ethical Hacking"
      ],
      includes: [
        "80+ Hours of Video",
        "300+ Practice Labs",
        "Certificate of Completion",
        "Career Support"
      ],
      price: "$999"
    },
    {
      title: "Advanced Penetration Testing",
      level: "Advanced",
      duration: "3 months",
      rating: 4.9,
      students: "8,000+",
      description: "Master advanced penetration testing techniques and methodologies",
      topics: [
        "Advanced Exploitation",
        "Web App Testing",
        "Network Testing",
        "Mobile Security",
        "Cloud Security",
        "Report Writing"
      ],
      includes: [
        "40+ Hours of Video",
        "150+ Practice Labs",
        "Certificate of Completion",
        "Private Community"
      ],
      price: "$799"
    },
    {
      title: "Security Operations & Incident Response",
      level: "Intermediate",
      duration: "4 months",
      rating: 4.7,
      students: "10,000+",
      description: "Learn to detect, analyze, and respond to security incidents",
      topics: [
        "SIEM Implementation",
        "Threat Detection",
        "Incident Handling",
        "Digital Forensics",
        "Threat Hunting",
        "SOC Operations"
      ],
      includes: [
        "60+ Hours of Video",
        "200+ Practice Labs",
        "Certificate of Completion",
        "Mentorship"
      ],
      price: "$899"
    }
  ]

  const courseCategories = [
    {
      name: "Offensive Security",
      icon: Target,
      courses: [
        {
          title: "Web Application Hacking",
          duration: "8 weeks",
          level: "Intermediate",
          price: "$499"
        },
        {
          title: "Mobile Security Testing",
          duration: "6 weeks",
          level: "Intermediate",
          price: "$449"
        },
        {
          title: "Advanced Exploit Development",
          duration: "12 weeks",
          level: "Advanced",
          price: "$899"
        }
      ]
    },
    {
      name: "Defensive Security",
      icon: Shield,
      courses: [
        {
          title: "Security Operations Center",
          duration: "10 weeks",
          level: "Intermediate",
          price: "$599"
        },
        {
          title: "Malware Analysis",
          duration: "8 weeks",
          level: "Advanced",
          price: "$699"
        },
        {
          title: "Digital Forensics",
          duration: "8 weeks",
          level: "Intermediate",
          price: "$549"
        }
      ]
    },
    {
      name: "Cloud Security",
      icon: Server,
      courses: [
        {
          title: "AWS Security",
          duration: "6 weeks",
          level: "Intermediate",
          price: "$449"
        },
        {
          title: "Azure Security",
          duration: "6 weeks",
          level: "Intermediate",
          price: "$449"
        },
        {
          title: "Cloud Security Architecture",
          duration: "10 weeks",
          level: "Advanced",
          price: "$799"
        }
      ]
    },
    {
      name: "Application Security",
      icon: Code,
      courses: [
        {
          title: "Secure Coding Practices",
          duration: "8 weeks",
          level: "Intermediate",
          price: "$499"
        },
        {
          title: "DevSecOps Implementation",
          duration: "10 weeks",
          level: "Advanced",
          price: "$699"
        },
        {
          title: "Container Security",
          duration: "6 weeks",
          level: "Intermediate",
          price: "$449"
        }
      ]
    }
  ]

  const certPrep = [
    {
      cert: "OSCP",
      duration: "12 weeks",
      description: "Comprehensive preparation for the OSCP certification exam",
      includes: [
        "Practice Labs",
        "Mock Exams",
        "Study Guide",
        "Support"
      ],
      price: "$999"
    },
    {
      cert: "CISSP",
      duration: "16 weeks",
      description: "Complete preparation program for the CISSP certification",
      includes: [
        "Video Lectures",
        "Practice Tests",
        "Study Materials",
        "Mentoring"
      ],
      price: "$1,299"
    },
    {
      cert: "Security+",
      duration: "8 weeks",
      description: "Structured learning path for CompTIA Security+ certification",
      includes: [
        "Video Content",
        "Practice Exams",
        "Lab Access",
        "Community"
      ],
      price: "$499"
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
              <span className="text-blue-500 font-medium">Courses</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Expert-Led Cybersecurity Courses
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Learn from industry experts through structured courses and hands-on labs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Courses
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {featuredCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                        <span className="text-blue-500 font-bold">{course.price}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {course.rating}
                        </div>
                        <div>{course.students} students</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <div className="text-blue-500">{course.level}</div>
                        <div className="flex items-center text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{course.description}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">What You'll Learn</div>
                      <div className="grid grid-cols-2 gap-2">
                        {course.topics.map((topic, topicIndex) => (
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
                      <div className="text-sm text-gray-500 mb-2">Course Includes</div>
                      <div className="flex flex-wrap gap-2">
                        {course.includes.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Enroll Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Course Categories
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {courseCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-600/10 rounded-lg">
                        <category.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
                        >
                          <div>
                            <div className="font-medium text-white mb-1">{course.title}</div>
                            <div className="flex items-center space-x-3 text-sm">
                              <span className="text-gray-400">{course.duration}</span>
                              <span className="text-blue-500">{course.level}</span>
                            </div>
                          </div>
                          <div className="text-white font-bold">{course.price}</div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View All Courses
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
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
            <div className="grid gap-8 md:grid-cols-3">
              {certPrep.map((program, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{program.cert}</h3>
                        <span className="text-blue-500 font-bold">{program.price}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{program.description}</p>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Program Includes</div>
                      <div className="space-y-2">
                        {program.includes.map((item, itemIndex) => (
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
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Choose your course and begin your cybersecurity journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Browse All Courses
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/academy/roadmaps">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  View Learning Paths
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