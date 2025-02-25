import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function HumanAspectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Human Aspects</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Human Aspects in cybersecurity focus on the role of human behavior, psychology, and social factors in
          maintaining or compromising security. This domain encompasses topics such as social engineering, security
          awareness, human error, and the development of security cultures within organizations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Understanding human aspects is crucial in cybersecurity because humans are often considered the weakest link
          in security systems. Social engineering attacks exploit human psychology, and human errors can lead to
          significant breaches. By addressing these human factors, organizations can significantly enhance their overall
          security posture and reduce the risk of successful attacks.
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
              The Psychology of Social Engineering
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Building a Security-Aware Culture in Your Organization
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Human Error in Cybersecurity: Causes and Mitigations
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
              href="https://www.sans.org/security-awareness-training/resources/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SANS Security Awareness Resources
            </a>
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/publications/detail/sp/800-50/final"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST SP 800-50: Building an Information Technology Security Awareness and Training Program
            </a>
          </li>
          <li>
            <a
              href="https://www.enisa.europa.eu/topics/cybersecurity-education"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ENISA Cybersecurity Education
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

