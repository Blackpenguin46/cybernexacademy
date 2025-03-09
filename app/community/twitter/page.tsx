import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, Twitter, Hash } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TwitterPage() {
  const popularAccounts = [
    {
      name: "@SwiftOnSecurity",
      description: "Expert commentary on cybersecurity, system administration, and tech culture.",
      followers: "400K+",
      url: "https://twitter.com/SwiftOnSecurity"
    },
    {
      name: "@thegrugq",
      description: "Information security researcher sharing insights on cyber operations and security.",
      followers: "350K+",
      url: "https://twitter.com/thegrugq"
    },
    {
      name: "@troyhunt",
      description: "Creator of Have I Been Pwned, sharing web security insights and breach notifications.",
      followers: "500K+",
      url: "https://twitter.com/troyhunt"
    },
    {
      name: "@malwrhunterteam",
      description: "Real-time malware tracking and analysis from security researchers.",
      followers: "250K+",
      url: "https://twitter.com/malwrhunterteam"
    },
    {
      name: "@gcluley",
      description: "Cybersecurity veteran sharing news, analysis, and commentary on threats.",
      followers: "200K+",
      url: "https://twitter.com/gcluley"
    },
    {
      name: "@kevincollier",
      description: "Cybersecurity and privacy journalist covering breaking news and investigations.",
      followers: "150K+",
      url: "https://twitter.com/kevincollier"
    }
  ]

  const features = [
    {
      title: "Real-time Updates",
      description: "Get instant notifications about security incidents and vulnerabilities."
    },
    {
      title: "Expert Insights",
      description: "Follow leading security researchers and professionals."
    },
    {
      title: "Breaking News",
      description: "Stay informed about the latest cybersecurity developments."
    },
    {
      title: "Community Discussions",
      description: "Engage in conversations about security topics and trends."
    },
    {
      title: "Threat Alerts",
      description: "Receive early warnings about emerging security threats."
    },
    {
      title: "Resource Sharing",
      description: "Access tools, guides, and educational content shared by experts."
    }
  ]

  const popularHashtags = [
    "#Cybersecurity",
    "#InfoSec",
    "#HackingNews",
    "#CyberAttack",
    "#BugBounty",
    "#CyberThreats",
    "#OSINT",
    "#Malware",
    "#PrivacySec",
    "#ZeroDay",
    "#ThreatHunting",
    "#CyberIntel"
  ]

  const guidelines = [
    "Verify information before sharing",
    "Use content warnings for sensitive topics",
    "Follow responsible disclosure practices",
    "Credit sources and original researchers",
    "Engage in constructive discussions",
    "Support community members",
    "Share accurate threat information",
    "Maintain professional conduct"
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-sky-600/10 rounded-xl mb-4">
              <Twitter className="w-5 h-5 text-sky-500 mr-2" />
              <span className="text-sky-500 font-medium">X/Twitter Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Real-time Security Updates
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Follow cybersecurity experts and join real-time discussions about the latest security developments.
            </p>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                Join X/Twitter Community
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Accounts Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Must-Follow Security Experts
            </h2>
            <div className="space-y-6">
              {popularAccounts.map((account, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-sky-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        <Link
                          href={account.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-sky-500 transition-colors inline-flex items-center"
                        >
                          {account.name}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </h3>
                      <p className="text-gray-400">{account.description}</p>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{account.followers}</span>
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
              Platform Benefits
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

      {/* Hashtags Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Trending Security Hashtags
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {popularHashtags.map((hashtag, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 hover:border-sky-500/50 transition-colors"
                >
                  <span className="text-gray-300 hover:text-sky-500 transition-colors">
                    {hashtag}
                  </span>
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
                    <ThumbsUp className="w-5 h-5 text-sky-500" />
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
              Stay Connected
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the cybersecurity conversation on X/Twitter and stay updated with real-time security insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                  Follow on X/Twitter
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