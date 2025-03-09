import { Shield, ExternalLink, Clock, Tag, Newspaper, Filter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NewsPage() {
  const featuredNews = [
    {
      title: "Major Zero-Day Vulnerability Discovered",
      description: "Critical vulnerability affecting widely-used software infrastructure. Immediate patching recommended.",
      date: "2024-03-20",
      category: "Vulnerabilities",
      source: "CyberNews",
      url: "#"
    },
    {
      title: "New Ransomware Strain Targets Healthcare",
      description: "Sophisticated ransomware campaign specifically targeting healthcare institutions discovered.",
      date: "2024-03-19",
      category: "Threats",
      source: "SecurityWeek",
      url: "#"
    },
    {
      title: "Global Cybersecurity Summit Announced",
      description: "Leading experts to gather for annual cybersecurity summit addressing emerging threats.",
      date: "2024-03-18",
      category: "Events",
      source: "InfoSec Today",
      url: "#"
    }
  ]

  const latestNews = [
    {
      title: "AI-Powered Security Tools Show Promise",
      description: "New research demonstrates effectiveness of AI in threat detection and response.",
      date: "2024-03-17",
      category: "Technology",
      source: "Tech Insights",
      url: "#"
    },
    {
      title: "Critical Infrastructure Protection Guidelines Updated",
      description: "Government releases new guidelines for protecting critical infrastructure.",
      date: "2024-03-16",
      category: "Compliance",
      source: "Gov Security",
      url: "#"
    },
    {
      title: "Major Data Breach Affects Millions",
      description: "Large-scale data breach exposes sensitive information of users worldwide.",
      date: "2024-03-15",
      category: "Incidents",
      source: "Breach Report",
      url: "#"
    },
    {
      title: "New Security Framework Released",
      description: "Industry consortium releases updated cybersecurity framework for organizations.",
      date: "2024-03-14",
      category: "Standards",
      source: "Security Standards",
      url: "#"
    },
    {
      title: "Emerging Threat Landscape Report",
      description: "Analysis of current and emerging cybersecurity threats facing organizations.",
      date: "2024-03-13",
      category: "Analysis",
      source: "Threat Intel",
      url: "#"
    }
  ]

  const categories = [
    "Vulnerabilities",
    "Threats",
    "Events",
    "Technology",
    "Compliance",
    "Incidents",
    "Standards",
    "Analysis",
    "Research",
    "Industry"
  ]

  const sources = [
    {
      name: "CyberNews",
      url: "#",
      description: "Breaking cybersecurity news and analysis"
    },
    {
      name: "SecurityWeek",
      url: "#",
      description: "Enterprise security news and insights"
    },
    {
      name: "InfoSec Today",
      url: "#",
      description: "Daily security updates and coverage"
    },
    {
      name: "Tech Insights",
      url: "#",
      description: "Technology and security analysis"
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
              <Newspaper className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">News & Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Latest Cybersecurity News
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Stay informed with the latest cybersecurity news, updates, and developments from trusted sources.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Stories
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {featuredNews.map((news, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-500 text-sm font-medium">{news.category}</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {news.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      <Link
                        href={news.url}
                        className="hover:text-blue-500 transition-colors"
                      >
                        {news.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">{news.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-gray-500 text-sm">{news.source}</span>
                      <Link
                        href={news.url}
                        className="text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center"
                      >
                        Read More
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-white">
                Latest Updates
              </h2>
              <Button variant="outline" className="border-gray-700">
                <Filter className="w-4 h-4 mr-2" />
                Filter News
              </Button>
            </div>
            <div className="space-y-6">
              {latestNews.map((news, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-blue-500 text-sm font-medium">{news.category}</span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        <Link
                          href={news.url}
                          className="hover:text-blue-500 transition-colors"
                        >
                          {news.title}
                        </Link>
                      </h3>
                      <p className="text-gray-400">{news.description}</p>
                    </div>
                    <div className="ml-6 flex flex-col items-end">
                      <span className="text-gray-500 text-sm mb-2">{news.source}</span>
                      <Link
                        href={news.url}
                        className="text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center"
                      >
                        Read More
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              News Categories
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 hover:border-blue-500/50 transition-colors"
                >
                  <span className="text-gray-300 hover:text-blue-500 transition-colors inline-flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    {category}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Trusted Sources
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {sources.map((source, index) => (
                <Link
                  key={index}
                  href={source.url}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-500">
                    {source.name}
                  </h3>
                  <p className="text-gray-400">{source.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our newsletter for daily cybersecurity news and updates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Subscribe Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/insights">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Explore More Insights
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