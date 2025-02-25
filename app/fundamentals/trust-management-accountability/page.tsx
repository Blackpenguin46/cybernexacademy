import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function TrustManagementAccountabilityPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Trust Management and Accountability</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Trust Management and Accountability in cybersecurity focus on establishing, maintaining, and verifying trust
          relationships within digital systems and between entities. This domain covers topics such as trust models,
          reputation systems, digital identity management, and mechanisms for ensuring accountability in cyber
          operations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Trust management and accountability are crucial in cybersecurity as they form the foundation for secure
          interactions and transactions in digital environments. Effective trust management enables organizations to
          make informed decisions about the reliability and security of systems, services, and entities they interact
          with. Accountability mechanisms ensure that actions and transactions can be traced back to their origin,
          deterring malicious behavior and facilitating incident response and forensic investigations.
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
              Introduction to Trust Management in Cybersecurity
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Building Accountability in Cyber Operations
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Digital Identity and Trust: Best Practices
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
            <a
              href="https://www.sciencedirect.com/science/article/pii/S0167404818303808"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              A survey of trust management models for cloud computing
            </a>
          </li>
          <li>
            <a
              href="https://www.nist.gov/publications/zero-trust-architecture"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST Special Publication 800-207: Zero Trust Architecture
            </a>
          </li>
          <li>
            <a
              href="https://www.enisa.europa.eu/publications/exploring-the-opportunities-and-limitations-of-current-threat-intelligence-platforms"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ENISA: Exploring the opportunities and limitations of current Threat Intelligence Platforms
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

