import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function OperatingSystemsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Operating Systems Security</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Operating Systems Security focuses on the principles and practices of securing operating systems, which form
          the foundation of most computing devices. This domain covers topics such as access control, process isolation,
          memory protection, file system security, and OS hardening techniques.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Understanding operating systems security is crucial for cybersecurity professionals as it forms the basis for
          protecting individual devices and entire networks. Secure operating systems help prevent unauthorized access,
          protect sensitive data, and provide a stable foundation for running applications securely. As operating
          systems are often the primary target for attackers, knowledge of OS security principles is essential for
          effective threat prevention, detection, and response.
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
              Introduction to Operating System Security
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Linux Security Fundamentals
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Windows Security Best Practices
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
              href="https://csrc.nist.gov/publications/detail/sp/800-123/final"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST SP 800-123: Guide to General Server Security
            </a>
          </li>
          <li>
            <a
              href="https://www.cisecurity.org/benchmark/microsoft_windows_desktop"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              CIS Microsoft Windows Desktop Benchmarks
            </a>
          </li>
          <li>
            <a
              href="https://www.redhat.com/en/topics/linux/what-is-linux-security"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Red Hat: What is Linux Security?
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

