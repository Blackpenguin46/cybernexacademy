import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function SecurityMeasurementsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Security Measurements</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Security Measurements in cybersecurity involve the methods and metrics used to assess, quantify, and report on
          the effectiveness of security controls and overall security posture. This domain covers topics such as
          security metrics development, vulnerability assessment, penetration testing, and security program evaluation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Security measurements are crucial for understanding the effectiveness of an organization's cybersecurity
          efforts. They provide quantifiable data that helps in decision-making, resource allocation, and continuous
          improvement of security programs. Effective security measurements enable organizations to identify
          vulnerabilities, assess risks, demonstrate compliance, and communicate the value of security investments to
          stakeholders.
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
              Introduction to Cybersecurity Metrics
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Measuring Security ROI: Best Practices
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Vulnerability Assessment and Penetration Testing Explained
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
              href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-55r1.pdf"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST SP 800-55: Performance Measurement Guide for Information Security
            </a>
          </li>
          <li>
            <a
              href="https://www.sans.org/reading-room/whitepapers/auditing/measuring-information-security-balanced-scorecard-approach-33537"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SANS: Measuring Information Security: The Balanced Scorecard Approach
            </a>
          </li>
          <li>
            <a
              href="https://www.isaca.org/resources/isaca-journal/issues/2018/volume-3/security-metrics-to-measure-progress-and-demonstrate-value"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ISACA: Security Metrics to Measure Progress and Demonstrate Value
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

