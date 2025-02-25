import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function AssuranceAuditCertificationPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Assurance, Audit, and Certification</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Assurance, Audit, and Certification in cybersecurity encompass the processes, methodologies, and standards
          used to evaluate, verify, and validate the security posture of information systems and organizations. This
          domain focuses on ensuring that security controls are effectively implemented, maintained, and compliant with
          relevant regulations and industry standards.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          This domain is crucial because it provides stakeholders with confidence in the security of information
          systems. It helps organizations identify vulnerabilities, assess risks, and demonstrate compliance with legal
          and regulatory requirements. Regular audits and certifications also contribute to continuous improvement in
          security practices and can enhance an organization's reputation and trustworthiness.
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
              Introduction to IT Auditing
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Understanding ISO 27001 Certification
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cybersecurity Audit Best Practices
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
              href="https://www.isaca.org/resources/isaca-journal"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ISACA Journal
            </a>
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST Special Publication 800-53
            </a>
          </li>
          <li>
            <a
              href="https://www.iso.org/isoiec-27001-information-security.html"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ISO/IEC 27001 Information Security Management
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

