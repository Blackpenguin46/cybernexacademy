import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function LegalAspectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Legal Aspects</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Legal Aspects in cybersecurity encompass the laws, regulations, and legal frameworks that govern digital
          security, data protection, and privacy. This domain covers topics such as cybercrime legislation, intellectual
          property protection, data breach notification laws, and international cybersecurity agreements.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Understanding the legal aspects of cybersecurity is crucial for organizations and professionals to ensure
          compliance, protect assets, and navigate the complex landscape of cyber law. It helps in developing policies
          that align with legal requirements, managing liability risks, and responding appropriately to security
          incidents. Knowledge of legal aspects also aids in international cooperation for combating cybercrime and
          addressing cross-border cyber threats.
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
              Introduction to Cybersecurity Law
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GDPR Explained: Compliance for Cybersecurity Professionals
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Legal Implications of Data Breaches
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
              href="https://www.congress.gov/bill/116th-congress/senate-bill/1084/text"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cybersecurity Legislation: NIST Small Business Cybersecurity Act
            </a>
          </li>
          <li>
            <a href="https://gdpr-info.eu/" className="text-blue-600 dark:text-blue-400 hover:underline">
              General Data Protection Regulation (GDPR) Full Text
            </a>
          </li>
          <li>
            <a
              href="https://www.enisa.europa.eu/topics/national-cyber-security-strategies/ncss-map"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ENISA National Cyber Security Strategies
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

