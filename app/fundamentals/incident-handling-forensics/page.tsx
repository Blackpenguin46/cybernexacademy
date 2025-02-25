import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function IncidentHandlingForensicsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Incident Handling and Digital Forensics
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Incident Handling and Digital Forensics involve the processes and techniques used to detect, respond to, and
          investigate cybersecurity incidents. This domain covers the entire lifecycle of incident management, from
          preparation and detection to containment, eradication, recovery, and post-incident analysis. Digital forensics
          focuses on the collection, preservation, and analysis of digital evidence to support investigations and
          potential legal proceedings.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Effective incident handling and digital forensics are critical components of a robust cybersecurity strategy.
          They enable organizations to quickly detect and respond to security breaches, minimize damage, and prevent
          future incidents. Proper incident handling can significantly reduce the impact of cyber attacks, while digital
          forensics provides valuable insights into attack methods and helps in attributing attacks to specific threat
          actors. These disciplines also play a crucial role in maintaining regulatory compliance and supporting legal
          proceedings related to cybercrime.
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
              Incident Response Process Explained
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Digital Forensics: Collecting and Analyzing Evidence
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cybersecurity Incident Handling: Best Practices
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
              href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST SP 800-61: Computer Security Incident Handling Guide
            </a>
          </li>
          <li>
            <a
              href="https://www.sans.org/white-papers/34017/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SANS Digital Forensics and Incident Response Poster
            </a>
          </li>
          <li>
            <a
              href="https://www.enisa.europa.eu/topics/csirts-in-europe/csirt-capabilities"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ENISA CSIRT Capabilities
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

