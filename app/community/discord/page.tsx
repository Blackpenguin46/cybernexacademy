import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DiscordPage() {
  const popularServers = [
    {
      name: "Cybersecurity Lounge",
      description: "A welcoming community for cybersecurity professionals and enthusiasts to discuss security topics.",
      members: "50K+",
      url: "#" // Replace with actual Discord invite link
    },
    {
      name: "Security Research Lab",
      description: "Focus on security research, vulnerability analysis, and exploit development discussions.",
      members: "35K+",
      url: "#"
    },
    {
      name: "Blue Team Community",
      description: "Dedicated to defensive security, incident response, and threat hunting.",
      members: "28K+",
      url: "#"
    },
    {
      name: "Red Team Ops",
      description: "Offensive security discussions, penetration testing, and ethical hacking.",
      members: "25K+",
      url: "#"
    },
    {
      name: "Security Certifications",
      description: "Support group for various security certifications (CISSP, CEH, Security+, etc.).",
      members: "42K+",
      url: "#"
    }
  ]

  const guidelines = [
    "Use appropriate channels for different topics",
    "Be respectful and professional with other members",
    "No spamming or self-promotion without permission",
    "Keep discussions security-focused and relevant",
    "Don't share sensitive or personal information",
    "Follow the server's verification process",
    "Use code blocks for sharing code snippets",
    "Help others and contribute positively to discussions"
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-600/10 rounded-xl mb-4">
              <Shield className="w-5 h-5 text-indigo-500 mr-2" />
              <span className="text-indigo-500 font-medium">Discord Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join Our Cybersecurity Discord Servers
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Connect with cybersecurity professionals in real-time, participate in discussions, and learn from the community through Discord.
            </p>
            <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Join Discord
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Servers Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Popular Cybersecurity Servers
            </h2>
            <div className="space-y-6">
              {popularServers.map((server, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-indigo-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        <Link
                          href={server.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-indigo-500 transition-colors inline-flex items-center"
                        >
                          {server.name}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </h3>
                      <p className="text-gray-400">{server.description}</p>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{server.members}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Server Guidelines
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex-shrink-0">
                    <ThumbsUp className="w-5 h-5 text-indigo-500" />
                  </div>
                  <p className="text-gray-300">{guideline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Join Our Discord Community?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Discussions</h3>
                <p className="text-gray-400">
                  Engage in live conversations with security professionals and get immediate responses to your questions.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Knowledge Sharing</h3>
                <p className="text-gray-400">
                  Share resources, tools, and experiences with fellow security enthusiasts and experts.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Community Events</h3>
                <p className="text-gray-400">
                  Participate in CTFs, workshops, and community-driven learning sessions.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Networking</h3>
                <p className="text-gray-400">
                  Connect with like-minded individuals and build your professional network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join the Conversation?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join our Discord servers and become part of a thriving cybersecurity community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Join Our Servers
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