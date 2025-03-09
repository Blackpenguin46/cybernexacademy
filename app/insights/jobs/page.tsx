import { Briefcase, ExternalLink, TrendingUp, Building2, Clock, DollarSign, GraduationCap, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function JobMarketPage() {
  const jobTrends = [
    {
      role: "Security Engineer",
      growth: "+35%",
      avgSalary: "$120,000 - $180,000",
      demand: "Very High",
      requirements: [
        "Bachelor's in CS/Cybersecurity",
        "5+ years experience",
        "Security certifications (CISSP, CEH)",
        "Cloud security expertise"
      ],
      skills: [
        "Cloud Security",
        "DevSecOps",
        "Threat Modeling",
        "Incident Response"
      ]
    },
    {
      role: "Threat Intelligence Analyst",
      growth: "+28%",
      avgSalary: "$95,000 - $145,000",
      demand: "High",
      requirements: [
        "Bachelor's in Cybersecurity/IT",
        "3+ years experience",
        "SANS certifications",
        "Malware analysis skills"
      ],
      skills: [
        "Threat Analysis",
        "Malware Analysis",
        "OSINT",
        "Incident Handling"
      ]
    },
    {
      role: "Cloud Security Architect",
      growth: "+42%",
      avgSalary: "$140,000 - $200,000",
      demand: "Very High",
      requirements: [
        "Bachelor's/Master's in CS",
        "8+ years experience",
        "Cloud certifications",
        "Architecture experience"
      ],
      skills: [
        "AWS/Azure/GCP Security",
        "Zero Trust Architecture",
        "IAM",
        "Security Frameworks"
      ]
    }
  ]

  const industryDemand = [
    {
      sector: "Financial Services",
      openings: "15,000+",
      topRoles: [
        "Security Operations Analyst",
        "Application Security Engineer",
        "Compliance Specialist"
      ],
      requirements: "Strong focus on regulatory compliance and financial security"
    },
    {
      sector: "Healthcare",
      openings: "12,000+",
      topRoles: [
        "Healthcare Security Specialist",
        "Privacy Officer",
        "Security Compliance Manager"
      ],
      requirements: "HIPAA expertise and medical device security knowledge"
    },
    {
      sector: "Technology",
      openings: "25,000+",
      topRoles: [
        "Cloud Security Engineer",
        "DevSecOps Engineer",
        "Product Security Engineer"
      ],
      requirements: "Strong coding skills and cloud security expertise"
    }
  ]

  const certifications = [
    {
      name: "CISSP",
      level: "Advanced",
      avgSalaryIncrease: "25%",
      timeToComplete: "6-12 months",
      requirements: "5 years experience",
      demandLevel: "Very High"
    },
    {
      name: "CEH",
      level: "Intermediate",
      avgSalaryIncrease: "15%",
      timeToComplete: "3-6 months",
      requirements: "2 years experience",
      demandLevel: "High"
    },
    {
      name: "Security+",
      level: "Entry",
      avgSalaryIncrease: "10%",
      timeToComplete: "2-3 months",
      requirements: "No experience required",
      demandLevel: "High"
    }
  ]

  const skillsInDemand = [
    {
      category: "Technical Skills",
      skills: [
        "Cloud Security",
        "DevSecOps",
        "Threat Detection",
        "Incident Response",
        "Penetration Testing"
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        "Communication",
        "Problem Solving",
        "Team Collaboration",
        "Project Management",
        "Risk Assessment"
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        "SIEM Platforms",
        "Cloud Platforms",
        "Security Automation",
        "Threat Intelligence",
        "Vulnerability Scanners"
      ]
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
              <Briefcase className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Career Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Job Market
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore current trends, opportunities, and requirements in the cybersecurity job market.
            </p>
          </div>
        </div>
      </section>

      {/* Job Trends Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              In-Demand Roles
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {jobTrends.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Growth</div>
                        <div className="text-blue-500 font-medium">{job.growth}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Demand</div>
                        <div className="text-blue-500 font-medium">{job.demand}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Salary Range</div>
                      <div className="text-white">{job.avgSalary}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Requirements</div>
                      <div className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <div
                            key={reqIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Key Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded border border-blue-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Demand Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Industry Demand
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {industryDemand.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{industry.sector}</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500">Current Openings</div>
                      <div className="text-blue-500 font-medium text-lg">{industry.openings}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Top Roles</div>
                      <div className="space-y-2">
                        {industry.topRoles.map((role, roleIndex) => (
                          <div
                            key={roleIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <Briefcase className="w-4 h-4 text-blue-500 mr-2" />
                            {role}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {industry.requirements}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              High-Value Certifications
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                      <div className="text-sm text-blue-500">{cert.level}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Salary Impact</div>
                        <div className="text-blue-500">+{cert.avgSalaryIncrease}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Demand</div>
                        <div className="text-blue-500">{cert.demandLevel}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Time to Complete</div>
                      <div className="text-gray-300">{cert.timeToComplete}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Requirements</div>
                      <div className="text-gray-300">{cert.requirements}</div>
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
            <div className="grid gap-8 md:grid-cols-3">
              {skillsInDemand.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center text-gray-300"
                      >
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                        {skill}
                      </div>
                    ))}
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
              Start Your Cybersecurity Career
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get personalized guidance on your career path in cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Career Paths
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/insights">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  View More Insights
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