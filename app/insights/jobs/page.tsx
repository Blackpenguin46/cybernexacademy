import { Briefcase, ExternalLink, Clock, Tag, TrendingUp, Filter, Building2, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function JobMarketPage() {
  const marketTrends = [
    {
      title: "Security Engineer",
      growth: "+45%",
      avgSalary: "$125,000",
      demand: "Very High",
      description: "Growing demand for professionals who can design and implement security systems.",
      skills: ["Cloud Security", "DevSecOps", "Incident Response"]
    },
    {
      title: "Threat Intelligence Analyst",
      growth: "+38%",
      avgSalary: "$95,000",
      demand: "High",
      description: "Increasing need for experts in threat detection and analysis.",
      skills: ["Threat Hunting", "OSINT", "Malware Analysis"]
    },
    {
      title: "Cloud Security Architect",
      growth: "+52%",
      avgSalary: "$145,000",
      demand: "Very High",
      description: "Rapid growth in cloud security positions across industries.",
      skills: ["AWS/Azure/GCP", "Zero Trust", "IAM"]
    }
  ]

  const featuredJobs = [
    {
      title: "Senior Security Engineer",
      company: "Tech Giant Corp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130,000 - $180,000",
      posted: "2 days ago",
      description: "Leading security infrastructure development and implementation.",
      requirements: ["5+ years experience", "Cloud security", "CISSP"],
      url: "#"
    },
    {
      title: "Threat Intelligence Manager",
      company: "CyberDefense Inc",
      location: "Remote",
      type: "Full-time",
      salary: "$110,000 - $150,000",
      posted: "3 days ago",
      description: "Managing threat intelligence operations and team.",
      requirements: ["7+ years experience", "Team leadership", "SANS certifications"],
      url: "#"
    },
    {
      title: "Cloud Security Architect",
      company: "FinTech Solutions",
      location: "New York, NY",
      type: "Full-time",
      salary: "$140,000 - $190,000",
      posted: "1 day ago",
      description: "Designing and implementing cloud security architecture.",
      requirements: ["8+ years experience", "AWS/Azure", "Security architecture"],
      url: "#"
    }
  ]

  const skillsInDemand = [
    {
      category: "Technical Skills",
      skills: [
        { name: "Cloud Security", demand: "Very High", growth: "+55%" },
        { name: "DevSecOps", demand: "High", growth: "+45%" },
        { name: "Incident Response", demand: "High", growth: "+40%" },
        { name: "Threat Hunting", demand: "High", growth: "+38%" }
      ]
    },
    {
      category: "Certifications",
      skills: [
        { name: "CISSP", demand: "Very High", growth: "+50%" },
        { name: "CEH", demand: "High", growth: "+35%" },
        { name: "AWS Security", demand: "High", growth: "+48%" },
        { name: "SANS GIAC", demand: "High", growth: "+42%" }
      ]
    }
  ]

  const industryInsights = [
    {
      title: "Remote Work Trends",
      description: "70% increase in remote cybersecurity positions since 2020",
      change: "+70%",
      impact: "High"
    },
    {
      title: "Salary Growth",
      description: "Average cybersecurity salaries up 25% year-over-year",
      change: "+25%",
      impact: "High"
    },
    {
      title: "Skills Gap",
      description: "3.5 million unfilled cybersecurity positions expected by 2025",
      change: "3.5M",
      impact: "Critical"
    },
    {
      title: "Industry Demand",
      description: "Financial services leading cybersecurity hiring with 40% growth",
      change: "+40%",
      impact: "High"
    }
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
              <Briefcase className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-green-500 font-medium">Job Market</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Career Insights
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore the latest trends, opportunities, and insights in the cybersecurity job market.
            </p>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Market Trends
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {marketTrends.map((trend, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{trend.title}</h3>
                    <span className="text-green-500 font-medium">{trend.growth}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{trend.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Average Salary</span>
                      <span className="text-white">{trend.avgSalary}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Market Demand</span>
                      <span className="text-green-500">{trend.demand}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {trend.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-white">
                Featured Positions
              </h2>
              <Button variant="outline" className="border-gray-700">
                <Filter className="w-4 h-4 mr-2" />
                Filter Jobs
              </Button>
            </div>
            <div className="space-y-6">
              {featuredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-green-500 text-sm font-medium">{job.type}</span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.posted}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        <Link
                          href={job.url}
                          className="hover:text-green-500 transition-colors"
                        >
                          {job.title}
                        </Link>
                      </h3>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-gray-400 flex items-center">
                          <Building2 className="w-4 h-4 mr-1" />
                          {job.company}
                        </span>
                        <span className="text-gray-400 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, reqIndex) => (
                          <span
                            key={reqIndex}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-6 flex flex-col items-end">
                      <div className="text-white font-medium mb-4">{job.salary}</div>
                      <Link
                        href={job.url}
                        className="text-green-500 hover:text-green-400 transition-colors inline-flex items-center"
                      >
                        Apply Now
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

      {/* Skills in Demand Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Skills in Demand
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {skillsInDemand.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <div className="text-gray-300 font-medium">{skill.name}</div>
                          <div className="text-sm text-gray-500">Demand: {skill.demand}</div>
                        </div>
                        <div className="text-green-500 font-medium">{skill.growth}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Industry Insights
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {industryInsights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{insight.title}</h3>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">{insight.change}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-3">{insight.description}</p>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500">Impact:</span>
                    <span className="ml-2 text-sm font-medium text-green-500">{insight.impact}</span>
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
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Explore opportunities and connect with top employers in cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                View All Jobs
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