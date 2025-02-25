import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function DataSecurityPrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Data Security and Privacy</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Data Security and Privacy focuses on protecting sensitive information from unauthorized access, use,
          disclosure, disruption, modification, or destruction. It encompasses the practices, policies, and technologies
          used to ensure data confidentiality, integrity, and availability while respecting individuals' privacy rights.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          In our increasingly digital world, data has become one of the most valuable assets for individuals and
          organizations. Protecting this data is crucial for maintaining trust, complying with regulations, and
          safeguarding against financial and reputational damage. As cyber threats evolve and data breaches become more
          common, robust data security and privacy measures are essential for protecting personal information,
          intellectual property, and critical business data.
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
              Introduction to Data Security
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Privacy by Design: Principles and Best Practices
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GDPR Explained: Data Protection for the Digital Age
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
              href="https://www.nist.gov/privacy-framework"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST Privacy Framework
            </a>
          </li>
          <li>
            <a
              href="https://owasp.org/www-project-top-10-privacy-risks/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              OWASP Top 10 Privacy Risks
            </a>
          </li>
          <li>
            <a
              href="https://iapp.org/resources/article/privacy-by-design-the-7-foundational-principles/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Privacy by Design: The 7 Foundational Principles
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

