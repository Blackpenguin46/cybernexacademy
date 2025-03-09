import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, BookOpen, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SkoolPage() {
  const popularCourses = [
    {
      name: "Practical Ethical Hacking",
      description: "Comprehensive ethical hacking course covering OSINT, scanning, enumeration, exploitation, and reporting.",
      students: "25K+",
      url: "https://www.skool.com/peh"
    },
    {
      name: "Windows Privilege Escalation",
      description: "Advanced techniques for escalating privileges in Windows environments, from enumeration to exploitation.",
      students: "15K+",
      url: "https://www.skool.com/winpriv"
    },
    {
      name: "Linux Privilege Escalation",
      description: "Master Linux privilege escalation techniques through hands-on labs and real-world scenarios.",
      students: "18K+",
      url: "https://www.skool.com/linpriv"
    },
    {
      name: "External Pentest Playbook",
      description: "Step-by-step methodology for conducting thorough external penetration tests.",
      students: "12K+",
      url: "https://www.skool.com/external"
    },
    {
      name: "OSCP Preparation",
      description: "Structured preparation course for the OSCP certification with practice labs and methodology.",
      students: "20K+",
      url: "https://www.skool.com/oscp"
    },
    {
      name: "Web Application Exploitation",
      description: "Deep dive into modern web application security testing and exploitation techniques.",
      students: "22K+",
      url: "https://www.skool.com/webapp"
    }
  ]

  const features = [
    {
      title: "Structured Learning",
      description: "Follow organized learning paths with clear progression and milestones."
    },
    {
      title: "Active Community",
      description: "Engage with fellow learners and instructors in course-specific discussions."
    },
    {
      title: "Hands-on Labs",
      description: "Practice in realistic environments with guided exercises and challenges."
    },
    {
      title: "Expert Instruction",
      description: "Learn from industry professionals with years of practical experience."
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning progress and achievements through detailed analytics."
    },
    {
      title: "Career Resources",
      description: "Access job preparation materials and career advancement guidance."
    }
  ]

  const benefits = [
    {
      title: "Self-Paced Learning",
      description: "Study at your own pace with lifetime access to course materials."
    },
    {
      title: "Regular Updates",
      description: "Content regularly updated to reflect the latest security trends and tools."
    },
    {
      title: "Practice Environments",
      description: "Access to dedicated labs and practice environments."
    },
    {
      title: "Community Support",
      description: "Get help from instructors and peers when you need it."
    }
  ]

  const guidelines = [
    "Complete exercises in order for best progression",
    "Participate actively in course discussions",
    "Share your knowledge and help fellow students",
    "Keep practice environment credentials private",
    "Report technical issues promptly",
    "Follow the code of conduct in all interactions",
    "Submit detailed questions when seeking help",
    "Document your learning journey and findings"
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-purple-600/10 rounded-xl mb-4">
              <GraduationCap className="w-5 h-5 text-purple-500 mr-2" />
              <span className="text-purple-500 font-medium">Skool Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Learn Cybersecurity on Skool
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Join our structured learning community and master cybersecurity through expert-led courses and hands-on practice.
            </p>
            <Link href="https://www.skool.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Start Learning
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Popular Courses
            </h2>
            <div className="space-y-6">
              {popularCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        <Link
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-purple-500 transition-colors inline-flex items-center"
                        >
                          {course.name}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </h3>
                      <p className="text-gray-400">{course.description}</p>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Platform Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Learning Benefits
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Learning Guidelines
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex-shrink-0">
                    <ThumbsUp className="w-5 h-5 text-purple-500" />
                  </div>
                  <p className="text-gray-300">{guideline}</p>
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
              Join our learning platform and start your journey to becoming a cybersecurity professional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://www.skool.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Enroll Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/community">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Explore Other Communities
                  <MessageSquare className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 