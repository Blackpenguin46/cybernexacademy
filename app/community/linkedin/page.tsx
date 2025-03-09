import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LinkedInPage() {
  const popularGroups = [
    {
      name: "Cybersecurity Professionals",
      description: "The largest network of cybersecurity professionals sharing insights, job opportunities, and industry updates.",
      members: "500K+",
      url: "https://www.linkedin.com/groups/cybersecurity-professionals"
    },
    {
      name: "Information Security Community",
      description: "Discussion forum for InfoSec professionals, focusing on best practices, tools, and career development.",
      members: "300K+",
      url: "https://www.linkedin.com/groups/infosec-community"
    },
    {
      name: "Cloud Security Alliance",
      description: "Official group for cloud security professionals discussing standards, certifications, and best practices.",
      members: "200K+",
      url: "https://www.linkedin.com/groups/cloud-security-alliance"
    },
    {
      name: "Cyber Threat Intelligence",
      description: "Community of threat intelligence analysts sharing insights and discussing emerging threats.",
      members: "150K+",
      url: "https://www.linkedin.com/groups/cyber-threat-intel"
    },
    {
      name: "Security Certification Prep",
      description: "Support group for security certification preparation, including CISSP, CEH, and CISM.",
      members: "180K+",
      url: "https://www.linkedin.com/groups/security-cert-prep"
    },
    {
      name: "Women in Cybersecurity",
      description: "Network supporting and promoting women in cybersecurity careers.",
      members: "120K+",
      url: "https://www.linkedin.com/groups/women-in-cybersecurity"
    }
  ]

  const features = [
    {
      title: "Professional Networking",
      description: "Connect with industry leaders, recruiters, and fellow security professionals."
    },
    {
      title: "Job Opportunities",
      description: "Access exclusive cybersecurity job postings and career opportunities."
    },
    {
      title: "Industry Updates",
      description: "Stay informed about the latest trends, tools, and best practices."
    },
    {
      title: "Knowledge Sharing",
      description: "Share and learn from others' experiences and expertise."
    },
    {
      title: "Career Development",
      description: "Get advice on career paths, certifications, and skill development."
    },
    {
      title: "Mentorship",
      description: "Find mentors and mentees in the cybersecurity field."
    }
  ]

  const careerResources = [
    {
      title: "Resume Building",
      description: "Tips for creating an effective cybersecurity resume."
    },
    {
      title: "Interview Preparation",
      description: "Resources for technical and behavioral interviews."
    },
    {
      title: "Skill Assessment",
      description: "Tools to evaluate and showcase your security skills."
    },
    {
      title: "Career Paths",
      description: "Guidance on different cybersecurity career trajectories."
    }
  ]

  const guidelines = [
    "Keep your profile updated with relevant skills",
    "Engage professionally in group discussions",
    "Share valuable industry insights and news",
    "Network with purpose and authenticity",
    "Follow companies in your target industry",
    "Participate in relevant LinkedIn events",
    "Build meaningful professional connections",
    "Showcase your certifications and achievements"
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
              <Briefcase className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">LinkedIn Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Professional Cybersecurity Network
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Connect with cybersecurity professionals, find career opportunities, and grow your professional network.
            </p>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Join LinkedIn Network
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Groups Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Popular LinkedIn Groups
            </h2>
            <div className="space-y-6">
              {popularGroups.map((group, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        <Link
                          href={group.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-500 transition-colors inline-flex items-center"
                        >
                          {group.name}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </h3>
                      <p className="text-gray-400">{group.description}</p>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{group.members}</span>
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
              Network Benefits
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

      {/* Career Resources Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Career Resources
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {careerResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{resource.title}</h3>
                  <p className="text-gray-400">{resource.description}</p>
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
              LinkedIn Best Practices
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex-shrink-0">
                    <ThumbsUp className="w-5 h-5 text-blue-500" />
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
              Advance Your Career
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join our LinkedIn network and take your cybersecurity career to the next level.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Connect on LinkedIn
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