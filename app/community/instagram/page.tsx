import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare, Camera, Hash } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InstagramPage() {
  const popularAccounts = [
    {
      name: "HackerNews Daily",
      description: "Daily updates on cybersecurity news, tools, and techniques with visual explanations.",
      followers: "250K+",
      url: "https://www.instagram.com/hackernews"
    },
    {
      name: "CyberAwareness",
      description: "Educational content about cybersecurity awareness, tips, and best practices.",
      followers: "180K+",
      url: "https://www.instagram.com/cyberawareness"
    },
    {
      name: "SecurityTips",
      description: "Quick security tips and tricks for both professionals and everyday users.",
      followers: "150K+",
      url: "https://www.instagram.com/securitytips"
    },
    {
      name: "HackersGuide",
      description: "Step-by-step guides on ethical hacking and penetration testing techniques.",
      followers: "200K+",
      url: "https://www.instagram.com/hackersguide"
    },
    {
      name: "CyberDefenders",
      description: "Blue team focused content sharing defense strategies and tools.",
      followers: "120K+",
      url: "https://www.instagram.com/cyberdefenders"
    },
    {
      name: "SecurityMemes",
      description: "Lighthearted cybersecurity memes and infographics for the community.",
      followers: "300K+",
      url: "https://www.instagram.com/securitymemes"
    }
  ]

  const features = [
    {
      title: "Visual Learning",
      description: "Complex security concepts explained through infographics and visual guides."
    },
    {
      title: "Quick Tips",
      description: "Bite-sized security advice and best practices in visual format."
    },
    {
      title: "Community Stories",
      description: "Share your cybersecurity journey and experiences through photos and reels."
    },
    {
      title: "Live Sessions",
      description: "Join live streams with security experts and community leaders."
    },
    {
      title: "Daily Updates",
      description: "Stay informed with daily posts about security news and trends."
    },
    {
      title: "Interactive Content",
      description: "Engage with polls, quizzes, and interactive stories about security."
    }
  ]

  const popularHashtags = [
    "#CyberSecurity",
    "#EthicalHacking",
    "#InfoSec",
    "#CyberAwareness",
    "#HackingTips",
    "#SecurityAwareness",
    "#CyberDefense",
    "#HackersLife",
    "#CyberCrime",
    "#DigitalSecurity",
    "#NetworkSecurity",
    "#SecurityTips"
  ]

  const guidelines = [
    "Share valuable and accurate information",
    "Use relevant security hashtags",
    "Engage with the community positively",
    "Credit original content creators",
    "Follow security disclosure guidelines",
    "Keep sensitive information private",
    "Report misleading security content",
    "Support fellow security enthusiasts"
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-pink-600/10 rounded-xl mb-4">
              <Camera className="w-5 h-5 text-pink-500 mr-2" />
              <span className="text-pink-500 font-medium">Instagram Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Visual Cybersecurity Content
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Follow top cybersecurity accounts and stay updated with visual content, tips, and community stories.
            </p>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Join Instagram Community
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
              Popular Security Accounts
            </h2>
            <div className="space-y-6">
              {popularAccounts.map((account, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-pink-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        <Link
                          href={account.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-pink-500 transition-colors inline-flex items-center"
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
              Content Features
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
              Popular Hashtags
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {popularHashtags.map((hashtag, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 hover:border-pink-500/50 transition-colors"
                >
                  <span className="text-gray-300 hover:text-pink-500 transition-colors">
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
              Posting Guidelines
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex-shrink-0">
                    <ThumbsUp className="w-5 h-5 text-pink-500" />
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
              Join the Visual Security Community
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Follow our Instagram accounts and become part of the cybersecurity visual learning community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  Follow on Instagram
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