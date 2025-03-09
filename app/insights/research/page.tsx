import { Shield, ExternalLink, Clock, Tag, BookOpen, Filter, Download, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResearchPage() {
  const featuredPapers = [
    {
      title: "Advanced AI-Driven Threat Detection Systems",
      description: "Novel approach to using deep learning models for real-time cyber threat detection and analysis.",
      authors: ["Dr. Sarah Chen", "Dr. Michael Roberts"],
      institution: "MIT Cybersecurity Lab",
      date: "2024-03",
      category: "Artificial Intelligence",
      citations: 156,
      url: "#"
    },
    {
      title: "Quantum-Resistant Cryptographic Protocols",
      description: "Development of new cryptographic methods resistant to quantum computing attacks.",
      authors: ["Dr. James Wilson", "Dr. Elena Popov"],
      institution: "Stanford Security Research",
      date: "2024-02",
      category: "Cryptography",
      citations: 89,
      url: "#"
    },
    {
      title: "Zero-Trust Architecture Implementation",
      description: "Comprehensive framework for implementing zero-trust security in enterprise environments.",
      authors: ["Dr. David Kim", "Dr. Lisa Anderson"],
      institution: "Berkeley Security Group",
      date: "2024-02",
      category: "Network Security",
      citations: 123,
      url: "#"
    }
  ]

  const latestResearch = [
    {
      title: "Blockchain-Based Identity Management",
      description: "Novel approach to decentralized identity management using blockchain technology.",
      authors: ["Dr. Mark Thompson"],
      institution: "ETH Zurich",
      date: "2024-03",
      category: "Blockchain",
      citations: 45,
      url: "#"
    },
    {
      title: "Machine Learning for Malware Detection",
      description: "Advanced techniques for detecting polymorphic malware using machine learning.",
      authors: ["Dr. Rachel Brown"],
      institution: "Carnegie Mellon",
      date: "2024-03",
      category: "Machine Learning",
      citations: 67,
      url: "#"
    },
    {
      title: "IoT Security Framework",
      description: "Comprehensive security framework for Internet of Things devices and networks.",
      authors: ["Dr. Alex Martinez"],
      institution: "Georgia Tech",
      date: "2024-02",
      category: "IoT Security",
      citations: 89,
      url: "#"
    },
    {
      title: "Supply Chain Attack Prevention",
      description: "Analysis and prevention strategies for software supply chain attacks.",
      authors: ["Dr. Emily White"],
      institution: "Oxford Cyber Lab",
      date: "2024-02",
      category: "Supply Chain",
      citations: 34,
      url: "#"
    }
  ]

  const researchAreas = [
    {
      title: "Artificial Intelligence",
      description: "AI and machine learning applications in cybersecurity",
      papers: 156,
      researchers: 45
    },
    {
      title: "Quantum Computing",
      description: "Post-quantum cryptography and security",
      papers: 89,
      researchers: 32
    },
    {
      title: "Zero Trust Security",
      description: "Zero trust architecture and implementation",
      papers: 123,
      researchers: 38
    },
    {
      title: "Cloud Security",
      description: "Security in cloud computing environments",
      papers: 145,
      researchers: 42
    },
    {
      title: "IoT Security",
      description: "Security for Internet of Things devices",
      papers: 178,
      researchers: 51
    },
    {
      title: "Blockchain Security",
      description: "Security aspects of blockchain technology",
      papers: 134,
      researchers: 39
    }
  ]

  const topInstitutions = [
    {
      name: "MIT Cybersecurity Lab",
      papers: 245,
      researchers: 68,
      description: "Leading research in AI-driven security solutions"
    },
    {
      name: "Stanford Security Research",
      papers: 198,
      researchers: 55,
      description: "Pioneering work in cryptography and privacy"
    },
    {
      name: "Berkeley Security Group",
      papers: 176,
      researchers: 48,
      description: "Advanced network security research"
    },
    {
      name: "ETH Zurich Cyber Lab",
      papers: 167,
      researchers: 45,
      description: "Innovative blockchain security research"
    }
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
              <BookOpen className="w-5 h-5 text-purple-500 mr-2" />
              <span className="text-purple-500 font-medium">Research & Innovations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Research Papers
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore cutting-edge cybersecurity research, innovations, and academic contributions from leading institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Papers Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Research Papers
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {featuredPapers.map((paper, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-purple-500 text-sm font-medium">{paper.category}</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {paper.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      <Link
                        href={paper.url}
                        className="hover:text-purple-500 transition-colors"
                      >
                        {paper.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">{paper.description}</p>
                    <div className="flex flex-col gap-2 mt-auto">
                      <div className="text-gray-500 text-sm">
                        {paper.authors.join(", ")}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">{paper.institution}</span>
                        <Link
                          href={paper.url}
                          className="text-purple-500 hover:text-purple-400 transition-colors inline-flex items-center"
                        >
                          Download PDF
                          <Download className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Research Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-white">
                Latest Research
              </h2>
              <Button variant="outline" className="border-gray-700">
                <Filter className="w-4 h-4 mr-2" />
                Filter Papers
              </Button>
            </div>
            <div className="space-y-6">
              {latestResearch.map((paper, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-purple-500 text-sm font-medium">{paper.category}</span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {paper.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        <Link
                          href={paper.url}
                          className="hover:text-purple-500 transition-colors"
                        >
                          {paper.title}
                        </Link>
                      </h3>
                      <p className="text-gray-400 mb-2">{paper.description}</p>
                      <div className="text-gray-500 text-sm">
                        {paper.authors.join(", ")} - {paper.institution}
                      </div>
                    </div>
                    <div className="ml-6 flex flex-col items-end">
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Users className="w-4 h-4 mr-1" />
                        {paper.citations} citations
                      </div>
                      <Link
                        href={paper.url}
                        className="text-purple-500 hover:text-purple-400 transition-colors inline-flex items-center"
                      >
                        Download PDF
                        <Download className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Research Areas
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {researchAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-400 mb-4">{area.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{area.papers} papers</span>
                    <span>{area.researchers} researchers</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Institutions Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Leading Research Institutions
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {topInstitutions.map((institution, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{institution.name}</h3>
                  <p className="text-gray-400 mb-4">{institution.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{institution.papers} papers</span>
                    <span>{institution.researchers} researchers</span>
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
              Submit Your Research
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contribute to the cybersecurity research community by submitting your papers and findings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Submit Paper
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