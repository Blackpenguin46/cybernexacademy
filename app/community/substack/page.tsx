import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, Newspaper, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SubstackPage() {
  const popularNewsletters = [
    {
      name: "Security Weekly",
      description: "Weekly deep dives into the latest cybersecurity news, vulnerabilities, and industry trends.",
      subscribers: "50K+",
      url: "https://securityweekly.substack.com"
    },
    {
      name: "Risky Business",
      description: "Analysis of major cybersecurity events and their impact on the industry.",
      subscribers: "45K+",
      url: "https://riskybusiness.substack.com"
    },
    {
      name: "Zero Day",
      description: "Breaking news and analysis of zero-day vulnerabilities and exploits.",
      subscribers: "35K+",
      url: "https://zeroday.substack.com"
    },
    {
      name: "The Privacy Newsletter",
      description: "Updates on privacy regulations, data protection, and privacy-enhancing technologies.",
      subscribers: "30K+",
      url: "https://privacy.substack.com"
    },
    {
      name: "Cloud Security Weekly",
      description: "Weekly updates on cloud security best practices, tools, and vulnerabilities.",
      subscribers: "40K+",
      url: "https://cloudsec.substack.com"
    },
    {
      name: "Threat Intel Digest",
      description: "Curated insights on emerging threats, APT groups, and defense strategies.",
      subscribers: "25K+",
      url: "https://threatintel.substack.com"
    }
  ]

  const features = [
    {
      title: "Expert Analysis",
      description: "Get in-depth analysis from cybersecurity professionals and researchers."
    },
    {
      title: "Breaking News",
      description: "Stay updated with the latest cybersecurity news and developments."
    },
    {
      title: "Technical Deep Dives",
      description: "Detailed technical explanations of vulnerabilities and attacks."
    },
    {
      title: "Industry Insights",
      description: "Understand trends and changes in the cybersecurity landscape."
    },
    {
      title: "Career Growth",
      description: "Learn from industry leaders about career development and opportunities."
    },
    {
      title: "Community Discussion",
      description: "Engage in discussions with other security professionals in the comments."
    }
  ]

  const topics = [
    {
      title: "Threat Intelligence",
      description: "Coverage of emerging threats and attack patterns."
    },
    {
      title: "Security Research",
      description: "Latest findings in vulnerability research and exploit development."
    },
    {
      title: "Privacy & Compliance",
      description: "Updates on regulations and privacy best practices."
    },
    {
      title: "Tool Reviews",
      description: "Analysis of security tools and technologies."
    }
  ]

  const guidelines = [
    "Subscribe to newsletters matching your interests",
    "Engage in meaningful discussions in comments",
    "Share insights with proper attribution",
    "Report misinformation or inaccuracies",
    "Keep discussions professional and constructive",
    "Support quality content creators",
    "Share your expertise when relevant",
    "Follow each newsletter's community guidelines"
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-green-600/10 rounded-xl mb-4">
              <Newspaper className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-green-500 font-medium">Substack Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Insights on Substack
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to top cybersecurity newsletters and stay informed with expert analysis and breaking news.
            </p>
            <Link href="https://substack.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Explore Newsletters
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Newsletters Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Popular Newsletters
            </h2>
            <div className="space-y-6">
              {popularNewsletters.map((newsletter, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        <Link
                          href={newsletter.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green-500 transition-colors inline-flex items-center"
                        >
                          {newsletter.name}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </h3>
                      <p className="text-gray-400">{newsletter.description}</p>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{newsletter.subscribers}</span>
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
              Newsletter Features
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

      {/* Topics Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Topics
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{topic.title}</h3>
                  <p className="text-gray-400">{topic.description}</p>
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
              Community Guidelines
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex-shrink-0">
                    <ThumbsUp className="w-5 h-5 text-green-500" />
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
              Stay Informed and Connected
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our curated cybersecurity newsletters and join the discussion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://substack.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Browse Newsletters
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