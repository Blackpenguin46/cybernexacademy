import { GraduationCap, ExternalLink, Clock, Tag, Star, Users, BarChart, Book } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CoursesPage() {
  const featuredCourses = [
    {
      title: "Cybersecurity Fundamentals",
      level: "Beginner",
      duration: "12 weeks",
      rating: "4.8/5",
      students: "15,000+",
      topics: [
        "Network Security",
        "Web Security",
        "Cryptography",
        "Security Operations"
      ],
      description: "Comprehensive introduction to core cybersecurity concepts and practices.",
      features: [
        "Hands-on Labs",
        "Video Lectures",
        "Practice Tests",
        "Industry Projects"
      ],
      certification: "Certificate of Completion",
      price: "Free"
    },
    {
      title: "Ethical Hacking Masterclass",
      level: "Intermediate",
      duration: "16 weeks",
      rating: "4.9/5",
      students: "12,000+",
      topics: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Exploit Development",
        "Web App Security"
      ],
      description: "Learn advanced ethical hacking techniques and methodologies.",
      features: [
        "Virtual Lab Access",
        "Real-world Scenarios",
        "CTF Challenges",
        "Professional Tools"
      ],
      certification: "Certified Ethical Hacker Prep",
      price: "Premium"
    },
    {
      title: "Cloud Security Engineering",
      level: "Advanced",
      duration: "14 weeks",
      rating: "4.7/5",
      students: "8,000+",
      topics: [
        "AWS Security",
        "Azure Security",
        "Cloud Architecture",
        "DevSecOps"
      ],
      description: "Master cloud security engineering and architecture.",
      features: [
        "Cloud Labs",
        "Architecture Reviews",
        "Security Controls",
        "Case Studies"
      ],
      certification: "Cloud Security Certification",
      price: "Premium"
    }
  ]

  const courseTracks = [
    {
      name: "Security Operations",
      courses: [
        {
          title: "SOC Analyst Training",
          level: "Beginner to Intermediate",
          duration: "10 weeks"
        },
        {
          title: "Incident Response",
          level: "Intermediate",
          duration: "8 weeks"
        }
      ]
    },
    {
      name: "Application Security",
      courses: [
        {
          title: "Secure Coding Practices",
          level: "Intermediate",
          duration: "12 weeks"
        },
        {
          title: "Web App Security",
          level: "Intermediate to Advanced",
          duration: "14 weeks"
        }
      ]
    },
    {
      name: "Infrastructure Security",
      courses: [
        {
          title: "Network Defense",
          level: "Intermediate",
          duration: "10 weeks"
        },
        {
          title: "Cloud Security",
          level: "Advanced",
          duration: "12 weeks"
        }
      ]
    }
  ]

  const certificationPaths = [
    {
      certification: "CompTIA Security+",
      level: "Foundation",
      duration: "12 weeks",
      courses: [
        "Security Fundamentals",
        "Network Security",
        "Cryptography Basics"
      ]
    },
    {
      certification: "CISSP",
      level: "Advanced",
      duration: "24 weeks",
      courses: [
        "Security Management",
        "Asset Security",
        "Security Architecture"
      ]
    },
    {
      certification: "OSCP",
      level: "Expert",
      duration: "16 weeks",
      courses: [
        "Penetration Testing",
        "Exploit Development",
        "Advanced Security"
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
              <GraduationCap className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Academy Courses</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Master Cybersecurity
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Comprehensive cybersecurity courses designed for all skill levels, from beginners to advanced practitioners.
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
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-500 text-sm font-medium">{course.level}</span>
                        <span className="text-sm bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                          {course.price}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                      <p className="text-gray-400 text-sm">{course.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="text-white">{course.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Students</div>
                        <div className="text-white">{course.students}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Topics Covered</div>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, topicIndex) => (
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
                      <div className="text-sm text-gray-500 mb-2">Features</div>
                      <div className="space-y-2">
                        {course.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 mr-1" />
                          {course.rating}
                        </div>
                        <div className="text-sm text-gray-500">
                          {course.certification}
                        </div>
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

      {/* Course Tracks Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Specialized Tracks
            </h2>
            <div className="space-y-8">
              {courseTracks.map((track, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{track.name}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {track.courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-3">
                          <div className="font-medium text-white mb-1">{course.title}</div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-blue-500">{course.level}</span>
                            <span className="text-gray-400">{course.duration}</span>
                          </div>
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
                  <div className="space-y-4">
                    <div>
                      <div className="text-blue-500 text-sm font-medium mb-2">{path.level}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{path.certification}</h3>
                      <div className="text-sm text-gray-400">Duration: {path.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Required Courses</div>
                      <div className="space-y-2">
                        {path.courses.map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Book className="w-4 h-4 text-blue-500 mr-2" />
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-950">
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
              Start Learning Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of students and begin your cybersecurity journey.
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