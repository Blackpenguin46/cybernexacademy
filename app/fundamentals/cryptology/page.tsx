import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function CryptologyPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cryptology</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Cryptology is the science of secure communication, encompassing both cryptography (the practice of creating
          secure communication systems) and cryptanalysis (the study of breaking those systems). It involves the use of
          mathematical algorithms to encrypt and decrypt information, ensuring confidentiality, integrity, and
          authenticity of data.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Cryptology is fundamental to cybersecurity as it provides the backbone for secure communication and data
          protection. It enables secure online transactions, protects sensitive information from unauthorized access,
          and ensures the privacy of digital communications. As cyber threats evolve, robust cryptographic systems are
          essential for maintaining the security of digital infrastructure and protecting against data breaches and
          cyber attacks.
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
              Introduction to Cryptography
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Public Key Cryptography Explained
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Quantum Cryptography: The Future of Secure Communication
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
              href="https://www.coursera.org/learn/crypto"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cryptography I - Stanford University (Coursera)
            </a>
          </li>
          <li>
            <a href="https://cryptobook.nakov.com/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Practical Cryptography for Developers
            </a>
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST Cryptographic Standards and Guidelines
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

