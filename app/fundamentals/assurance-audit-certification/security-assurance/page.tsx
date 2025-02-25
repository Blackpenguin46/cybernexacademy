import Link from 'next/link'
import { ClipboardCheck, CheckCircle } from 'lucide-react'

const topics = [
  {
    title: "Security Assurance Frameworks",
    content: [
      "Common Criteria (ISO/IEC 15408)",
      "NIST Risk Management Framework",
      "Security Technical Implementation Guides (STIGs)",
      "System and Organization Controls (SOC)",
    ]
  },
  {
    title: "Security Assessment",
    content: [
      "Security Control Assessment",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Security Architecture Review"
    ]
  },
  {
    title: "Continuous Monitoring",
    content: [
      "Security Metrics and Measurements",
      "Security Information and Event Management",
      "Continuous Diagnostics and Mitigation",
      "Security Control Monitoring"
    ]
  }
]

export default function SecurityAssurancePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Security Assurance</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore security assurance frameworks, assessment methodologies, and continuous monitoring practices essential for maintaining robust cybersecurity measures.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{topic.title}</h2>
            <ul className="space-y-2">
              {topic.content.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/fundamentals/assurance-audit-certification" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Assurance, Audit, and Certification
        </Link>
      </div>
    </div>
  )
}

