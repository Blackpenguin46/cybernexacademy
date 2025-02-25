import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function SteganographyWatermarkingPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Steganography and Watermarking</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Steganography and Watermarking are techniques used to hide information within other data or media.
          Steganography focuses on concealing the existence of a message, while watermarking is used to embed
          identifying information in a way that is difficult to remove. This domain covers various methods for embedding
          and detecting hidden information in digital media.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Understanding steganography and watermarking is crucial for cybersecurity professionals as these techniques
          can be used for both defensive and offensive purposes. They can help protect intellectual property, detect
          data exfiltration attempts, and provide covert communication channels. However, they can also be misused by
          malicious actors to hide malware or secretly transmit sensitive information. Knowledge of these techniques is
          essential for developing effective detection and prevention strategies.
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
              Introduction to Steganography: Hiding Information in Plain Sight
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Digital Watermarking Techniques and Applications
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Steganalysis: Detecting Hidden Information in Digital Media
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
              href="https://link.springer.com/book/10.1007/978-3-319-78597-4"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Digital Watermarking and Steganography: Fundamentals and Techniques
            </a>
          </li>
          <li>
            <a
              href="https://www.sciencedirect.com/science/article/pii/S2214212617300297"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              A comprehensive review of audio steganography
            </a>
          </li>
          <li>
            <a
              href="https://www.researchgate.net/publication/220334404_Digital_Watermarking_and_Steganography"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Digital Watermarking and Steganography (Research Paper)
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

