import { Lightbulb, ExternalLink, Clock, Tag, FileText, Users, Globe, Star, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResearchPage() {
  const featuredResearch = [
    {
      title: "Zero-Day Vulnerability Detection Using AI",
      authors: ["Dr. Sarah Chen", "Dr. Michael Roberts"],
      institution: "MIT Cybersecurity Lab",
      date: "March 2024",
      category: "Artificial Intelligence",
      impact: "High",
      abstract: "Novel approach using deep learning models to detect zero-day vulnerabilities in software systems with 92% accuracy.",
      citations: 145,
      link: "#"
    },
    {
      title: "Quantum-Resistant Cryptography Implementation",
      authors: ["Dr. James Wilson", "Dr. Elena Martinez"],
      institution: "Stanford Security Research",
      date: "February 2024",
      category: "Cryptography",
      impact: "Very High",
      abstract: "Implementation and analysis of post-quantum cryptographic algorithms for secure communication in the quantum era.",
      citations: 178,
      link: "#"
    },
    {
      title: "Advanced Persistent Threats Detection Framework",
      authors: ["Dr. Alex Thompson", "Dr. Lisa Wang"],
      institution: "Berkeley Security Group",
      date: "January 2024",
      category: "Threat Detection",
      impact: "High",
      abstract: "Novel framework combining behavioral analysis and machine learning for early detection of APTs.",
      citations: 132,
      link: "#"
    }
  ]

  const researchCategories = [
    {
      name: "Artificial Intelligence & Security",
      papers: [
        {
          title: "AI-Driven Malware Detection",
          authors: ["Dr. Robert Brown"],
          date: "March 2024",
          abstract: "Using deep learning for real-time malware detection and classification."
        },
        {
          title: "Neural Networks in Threat Analysis",
          authors: ["Dr. Emily White"],
          date: "February 2024",
          abstract: "Application of neural networks for advanced threat pattern recognition."
        }
      ]
    },
    {
      name: "Quantum Computing Security",
      papers: [
        {
          title: "Post-Quantum Encryption Methods",
          authors: ["Dr. David Lee"],
          date: "March 2024",
          abstract: "Analysis of encryption methods resistant to quantum computing attacks."
        },
        {
          title: "Quantum Key Distribution",
          authors: ["Dr. Sarah Miller"],
          date: "January 2024",
          abstract: "Implementation of quantum key distribution for secure communication."
        }
      ]
    },
    {
      name: "Zero Trust Architecture",
      papers: [
        {
          title: "Zero Trust Implementation Framework",
          authors: ["Dr. John Smith"],
          date: "February 2024",
          abstract: "Comprehensive framework for implementing zero trust in enterprises."
        },
        {
          title: "Zero Trust Access Control",
          authors: ["Dr. Maria Garcia"],
          date: "January 2024",
          abstract: "Novel approach to access control in zero trust environments."
        }
      ]
    }
  ]

  const innovations = [
    {
      title: "AI-Powered Security Orchestration",
      category: "Artificial Intelligence",
      stage: "Advanced Research",
      impact: "Revolutionary",
      description: "Automated security response and threat mitigation using advanced AI algorithms.",
      benefits: [
        "90% faster threat response",
        "Reduced false positives",
        "Automated incident handling"
      ]
    },
    {
      title: "Quantum-Safe Blockchain",
      category: "Quantum Computing",
      stage: "Early Development",
      impact: "Transformative",
      description: "Blockchain technology resistant to quantum computing attacks.",
      benefits: [
        "Future-proof security",
        "Enhanced transaction privacy",
        "Quantum-resistant consensus"
      ]
    },
    {
      title: "Behavioral Biometrics System",
      category: "Authentication",
      stage: "Field Testing",
      impact: "Significant",
      description: "Advanced user authentication using behavioral patterns and biometrics.",
      benefits: [
        "Continuous authentication",
        "Reduced fraud rates",
        "Non-intrusive security"
      ]
    }
  ]

  const researchInstitutions = [
    {
      name: "MIT Cybersecurity Lab",
      focus: "AI Security & Privacy",
      projects: 45,
      researchers: 120,
      publications: 280,
      website: "#"
    },
    {
      name: "Stanford Security Research",
      focus: "Quantum Cryptography",
      projects: 38,
      researchers: 95,
      publications: 245,
      website: "#"
    },
    {
      name: "Berkeley Security Group",
      focus: "Zero Trust Architecture",
      projects: 42,
      researchers: 110,
      publications: 260,
      website: "#"
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
              <Lightbulb className="w-5 h-5 text-purple-500 mr-2" />
              <span className="text-purple-500 font-medium">Research & Innovation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Research & Innovations
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore groundbreaking research, innovations, and technological advancements in cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Research Papers
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {featuredResearch.map((paper, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-500 text-sm">{paper.category}</span>
                        <span className="text-sm bg-purple-900/50 text-purple-300 px-2 py-1 rounded">
                          Impact: {paper.impact}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{paper.title}</h3>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <Users className="w-4 h-4 mr-1" />
                        {paper.authors.join(", ")}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Globe className="w-4 h-4 mr-1" />
                        {paper.institution}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{paper.abstract}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {paper.date}
                      </div>
                      <div className="flex items-center text-sm text-purple-500">
                        <Star className="w-4 h-4 mr-1" />
                        {paper.citations} citations
                      </div>
                    </div>
                    <Link
                      href={paper.link}
                      className="inline-flex items-center text-purple-500 hover:text-purple-400 transition-colors text-sm"
                    >
                      Read Full Paper
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Categories Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Research Categories
            </h2>
            <div className="space-y-8">
              {researchCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.name}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.papers.map((paper, paperIndex) => (
                      <div
                        key={paperIndex}
                        className="bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="mb-3">
                          <h4 className="font-medium text-white mb-1">{paper.title}</h4>
                          <div className="flex items-center text-sm text-gray-400">
                            <Users className="w-4 h-4 mr-1" />
                            {paper.authors.join(", ")}
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{paper.abstract}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {paper.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Latest Innovations
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {innovations.map((innovation, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-500 text-sm">{innovation.category}</span>
                        <span className="text-sm bg-purple-900/50 text-purple-300 px-2 py-1 rounded">
                          {innovation.stage}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{innovation.title}</h3>
                      <p className="text-gray-400 text-sm">{innovation.description}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Benefits</div>
                      <div className="space-y-2">
                        {innovation.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="text-sm text-purple-500">
                        Impact: {innovation.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Institutions Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Leading Research Institutions
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {researchInstitutions.map((institution, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{institution.name}</h3>
                      <div className="text-purple-500 text-sm mb-4">{institution.focus}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-white mb-1">{institution.projects}</div>
                        <div className="text-xs text-gray-500">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-white mb-1">{institution.researchers}</div>
                        <div className="text-xs text-gray-500">Researchers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-white mb-1">{institution.publications}</div>
                        <div className="text-xs text-gray-500">Publications</div>
                      </div>
                    </div>
                    <Link
                      href={institution.website}
                      className="inline-flex items-center text-purple-500 hover:text-purple-400 transition-colors text-sm"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
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
              Contribute to Research
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join our community of researchers and innovators in cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Submit Research
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