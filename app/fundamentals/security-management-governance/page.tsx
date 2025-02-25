import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function SecurityManagementGovernancePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Security Management and Governance</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Security Management and Governance in cybersecurity involves the processes, policies, and practices used to
          manage an organization's overall security posture. This domain covers topics such as risk management, security
          policy development, compliance, security awareness programs, and the integration of security into
          organizational strategy and operations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Effective security management and governance are crucial for establishing a comprehensive and sustainable
          cybersecurity program. They ensure that security measures align with business objectives, comply with
          regulatory requirements, and are consistently applied across the organization. Good governance helps in
          prioritizing security investments, managing risks effectively, and fostering a culture of security awareness
          throughout the organization.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Video className="mr-2" />
          Videos
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Introduction to Information Security Governance
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Implementing an Effective Cybersecurity Program
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Risk Management in Cybersecurity
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <FileText className="mr-2" />
          Readings
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
          <li>
            <a href="https://www.nist.gov/cyberframework" className="text-blue-600 dark:text-blue-400 hover:underline">
              NIST Cybersecurity Framework
            </a>
          </li>
          <li>
            <a
              href="https://www.isaca.org/resources/cobit"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ISACA COBIT Framework
            </a>
          </li>
          <li>
            <a
              href="https://www.iso.org/isoiec-27001-information-security.html"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ISO/IEC 27001 - Information Security Management
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

