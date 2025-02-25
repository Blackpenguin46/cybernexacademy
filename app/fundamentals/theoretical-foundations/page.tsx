import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function TheoreticalFoundationsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Theoretical Foundations</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Theoretical Foundations in cybersecurity encompass the fundamental mathematical and computer science
          principles that underpin security concepts and technologies. This domain covers topics such as formal methods,
          complexity theory, information theory, and the theoretical basis for cryptographic algorithms and security
          protocols.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Understanding the theoretical foundations of cybersecurity is crucial for developing robust security solutions
          and analyzing their effectiveness. These principles provide the basis for proving the security of systems,
          designing new cryptographic algorithms, and understanding the fundamental limits of security measures. A
          strong grasp of theoretical foundations enables cybersecurity professionals to approach complex problems with
          a rigorous, analytical mindset and to evaluate the security of systems at a fundamental level.
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
              Introduction to Formal Methods in Cybersecurity
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Complexity Theory and Its Applications in Security
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Information Theory: The Foundation of Modern Cryptography
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
              href="https://www.springer.com/gp/book/9783319261485"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Foundations of Security Analysis and Design
            </a>
          </li>
          <li>
            <a
              href="https://www.cs.cornell.edu/~rafael/papers/sigcrypto.pdf"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              The Foundations of Cryptography - A Primer
            </a>
          </li>
          <li>
            <a
              href="https://www.sciencedirect.com/science/article/pii/S0167404804001890"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              On the Foundations of Quantitative Information Flow
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

