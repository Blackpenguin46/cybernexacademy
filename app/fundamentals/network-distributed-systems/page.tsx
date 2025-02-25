import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function NetworkDistributedSystemsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Network and Distributed Systems</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Network and Distributed Systems in cybersecurity focus on protecting the communication infrastructure and
          distributed computing environments. This domain covers topics such as network protocols, firewalls, intrusion
          detection systems, virtual private networks (VPNs), and security in cloud and edge computing environments.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Securing networks and distributed systems is crucial in today's interconnected world. As organizations
          increasingly rely on distributed architectures and cloud services, understanding how to protect these systems
          becomes essential. Effective security in this domain helps prevent unauthorized access, data breaches, and
          service disruptions, ensuring the confidentiality, integrity, and availability of information across complex,
          interconnected environments.
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
              Network Security Fundamentals
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Distributed Systems Security: Challenges and Solutions
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cloud Security Architecture Explained
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
              href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST SP 800-53: Security and Privacy Controls for Information Systems and Organizations
            </a>
          </li>
          <li>
            <a
              href="https://www.cisco.com/c/en/us/products/security/what-is-network-security.html"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cisco: What Is Network Security?
            </a>
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/publications/detail/sp/800-144/final"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST SP 800-144: Guidelines on Security and Privacy in Public Cloud Computing
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

