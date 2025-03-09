import { Shield, ExternalLink, ThumbsUp, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DiscordPage() {
  const popularServers = [
    {
      name: "The Cyber Mentor",
      description: "Heath Adams' community focused on practical ethical hacking and penetration testing training.",
      members: "100K+",
      url: "https://discord.gg/tcm"
    },
    {
      name: "Darknet Diaries",
      description: "Official community for the popular cybersecurity podcast, discussing true stories from the dark side of the Internet.",
      members: "75K+",
      url: "https://discord.gg/darknet"
    },
    {
      name: "TryHackMe",
      description: "Learning community focused on hands-on cybersecurity training through practical labs and exercises.",
      members: "150K+",
      url: "https://discord.gg/tryhackme"
    },
    {
      name: "Hack The Box",
      description: "Active hacking community with discussions about challenges, machines, and penetration testing.",
      members: "200K+",
      url: "https://discord.gg/hackthebox"
    },
    {
      name: "The Many Hats Club",
      description: "Diverse cybersecurity community covering various topics from ethical hacking to threat intelligence.",
      members: "45K+",
      url: "https://discord.gg/manyhats"
    },
    {
      name: "John Hammond's Community",
      description: "Active learning community led by popular cybersecurity YouTuber John Hammond.",
      members: "80K+",
      url: "https://discord.gg/johnhammond"
    },
    {
      name: "InfoSec Prep",
      description: "Focus on certification preparation and career development in information security.",
      members: "60K+",
      url: "https://discord.gg/infosecprep"
    },
    {
      name: "Blue Team Village",
      description: "Community dedicated to defensive security, incident response, and SOC operations.",
      members: "40K+",
      url: "https://discord.gg/blueteam"
    },
    {
      name: "CTF Time",
      description: "Active CTF community discussing challenges, writeups, and upcoming competitions.",
      members: "55K+",
      url: "https://discord.gg/ctftime"
    },
    {
      name: "OSCP Study Group",
      description: "Support community for OSCP certification preparation and practice.",
      members: "35K+",
      url: "https://discord.gg/oscp"
    }
  ]

  const additionalServers = [
    { name: "MalwareTech", url: "#" },
    { name: "OverTheWire", url: "#" },
    { name: "NullByte", url: "#" },
    { name: "Red Team Ops", url: "#" },
    { name: "SOC Analyst Training", url: "#" },
    { name: "CyberSec Labs", url: "#" },
    { name: "HackTricks", url: "#" },
    { name: "Bug Bounty Hunter's Hangout", url: "#" },
    { name: "CyberSec Jobs & Internships", url: "#" },
    { name: "Linux Security Enthusiasts", url: "#" },
    { name: "Threat Intelligence Exchange", url: "#" },
    { name: "Cybersecurity News & Updates", url: "#" },
    { name: "Black Hat Ethical Hacking", url: "#" },
    { name: "Practical Ethical Hacking (PEH)", url: "#" },
    { name: "Cybersecurity Career Network", url: "#" }
  ]

  const features = [
    {
      title: "Real-time Learning",
      description: "Engage in live discussions, workshops, and training sessions with security professionals."
    },
    {
      title: "Community Support",
      description: "Get help with challenges, certifications, and career guidance from experienced members."
    },
    {
      title: "CTF Events",
      description: "Participate in regular Capture The Flag events and security challenges."
    },
    {
      title: "Resource Sharing",
      description: "Access curated learning resources, tools, and security news."
    },
    {
      title: "Networking",
      description: "Connect with professionals, recruiters, and like-minded security enthusiasts."
    },
    {
      title: "Job Opportunities",
      description: "Find job postings, internships, and career opportunities in cybersecurity."
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

      {/* Features Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Join Our Discord Community?
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

      {/* Additional Servers Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              More Discord Communities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {additionalServers.map((server, index) => (
                <Link
                  key={index}
                  href={server.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors flex items-center justify-between"
                >
                  <span className="text-gray-300 hover:text-indigo-500">{server.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-500" />
                </Link>
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