import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, Send, Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TelegramPage() {
  const popularGroups = [
    {
      name: "Cyber Security Hub",
      description: "Active community discussing latest security news, tools, and techniques.",
      members: "100K+",
      url: "https://t.me/cybersecurityhub"
    },
    {
      name: "Bug Bounty World",
      description: "Bug bounty hunters sharing tips, writeups, and program updates.",
      members: "75K+",
      url: "https://t.me/bugbountyworld"
    },
    {
      name: "Malware Analysis",
      description: "Group focused on malware research, analysis, and reverse engineering.",
      members: "50K+",
      url: "https://t.me/malwareanalysis"
    },
    {
      name: "OSINT Techniques",
      description: "Open-source intelligence gathering methods and tools discussion.",
      members: "45K+",
      url: "https://t.me/osinttechniques"
    },
    {
      name: "CTF Players",
      description: "Capture The Flag players sharing challenges and solutions.",
      members: "60K+",
      url: "https://t.me/ctfplayers"
    },
    {
      name: "Security Alerts",
      description: "Real-time security alerts and vulnerability notifications.",
      members: "80K+",
      url: "https://t.me/securityalerts"
    }
  ]

  const features = [
    {
      title: "Instant Updates",
      description: "Get real-time notifications about security incidents and threats."
    },
    {
      title: "Private Discussions",
      description: "Engage in secure, encrypted conversations about security topics."
    },
    {
      title: "File Sharing",
      description: "Share and access security tools and resources securely."
    },
    {
      title: "Group Chats",
      description: "Join topic-specific groups for focused discussions."
    },
    {
      title: "Channel Updates",
      description: "Follow channels for curated security content and news."
    },
    {
      title: "Direct Messaging",
      description: "Connect privately with other security professionals."
    }
  ]

  const channels = [
    {
      title: "Vulnerability Feeds",
      description: "Latest CVE releases and vulnerability disclosures."
    },
    {
      title: "Tool Updates",
      description: "New releases and updates for security tools."
    },
    {
      title: "Research Papers",
      description: "Latest cybersecurity research and publications."
    },
    {
      title: "Job Opportunities",
      description: "Security job postings and career opportunities."
    }
  ]

  const guidelines = [
    "Use secure and updated Telegram clients",
    "Enable two-factor authentication",
    "Verify group authenticity before joining",
    "Keep sensitive information private",
    "Report suspicious activities",
    "Follow group-specific rules",
    "Use appropriate security measures",
    "Respect member privacy"
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-cyan-600/10 rounded-xl mb-4">
              <Send className="w-5 h-5 text-cyan-500 mr-2" />
              <span className="text-cyan-500 font-medium">Telegram Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Secure Cybersecurity Messaging
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Join secure groups and channels to discuss cybersecurity topics and receive real-time updates.
            </p>
            <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                Join Telegram Groups
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
              Popular Security Groups
            </h2>
            <div className="space-y-6">
              {popularGroups.map((group, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        <Link
                          href={group.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-500 transition-colors inline-flex items-center"
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

      {/* Channels Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Channels
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-400">{channel.description}</p>
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
              Security Guidelines
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex-shrink-0">
                    <Lock className="w-5 h-5 text-cyan-500" />
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
              Connect Securely
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join our Telegram groups and channels for secure cybersecurity discussions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  Download Telegram
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