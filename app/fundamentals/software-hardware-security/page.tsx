import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function SoftwareHardwareSecurityPage() {
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
        Software and Hardware Security Engineering
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Software and Hardware Security Engineering focuses on designing, developing, and maintaining secure software
          applications and hardware systems. This domain covers topics such as secure coding practices, software
          development lifecycle security, hardware security modules, and secure hardware design principles.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Secure software and hardware engineering is crucial for building robust and resilient systems that can
          withstand cyber attacks. By integrating security throughout the development process, organizations can reduce
          vulnerabilities, minimize the attack surface, and create products that are inherently more secure. This
          proactive approach to security helps prevent data breaches, protects user privacy, and maintains the integrity
          of systems and networks.
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
              Secure Coding Practices: Best Practices and Common Pitfalls
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Introduction to Hardware Security Modules (HSMs)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Secure Software Development Lifecycle (SDLC) Explained
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
              href="https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              OWASP Secure Coding Practices Quick Reference Guide
            </a>
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/publications/detail/sp/800-64/rev-2/final"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST SP 800-64: Security Considerations in the System Development Life Cycle
            </a>
          </li>
          <li>
            <a
              href="https://www.cl.cam.ac.uk/~rja14/book.html"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Security Engineering: A Guide to Building Dependable Distributed Systems
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

