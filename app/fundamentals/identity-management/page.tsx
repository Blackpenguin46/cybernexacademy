import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function IdentityManagementPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Identity Management</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Identity Management in cybersecurity involves the processes and technologies used to identify, authenticate,
          and authorize individuals or entities in computer systems and networks. It encompasses user authentication,
          access control, and the management of digital identities throughout their lifecycle.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Effective identity management is crucial for maintaining the security and integrity of systems and data. It
          ensures that only authorized users can access specific resources, helps prevent unauthorized access and data
          breaches, and supports compliance with various regulations. As organizations increasingly rely on digital
          systems and remote access, robust identity management becomes even more critical in protecting against
          identity-based attacks and maintaining user privacy.
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
              Introduction to Identity and Access Management (IAM)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Multi-Factor Authentication Explained
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Zero Trust Architecture and Identity Management
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
              href="https://csrc.nist.gov/publications/detail/sp/800-63/3/final"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST SP 800-63: Digital Identity Guidelines
            </a>
          </li>
          <li>
            <a
              href="https://www.owasp.org/index.php/Authentication_Cheat_Sheet"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              OWASP Authentication Cheat Sheet
            </a>
          </li>
          <li>
            <a href="https://www.idmanagement.gov/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Federal Identity, Credential, and Access Management (FICAM)
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

