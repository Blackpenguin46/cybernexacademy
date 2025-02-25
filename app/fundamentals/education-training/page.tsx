import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Video, FileText } from "lucide-react"

export default function EducationTrainingPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/fundamentals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Fundamentals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Education and Training</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Education and Training in cybersecurity focuses on developing the knowledge, skills, and abilities necessary
          to protect digital assets and systems. It encompasses formal academic programs, professional certifications,
          hands-on training, and continuous learning initiatives designed to keep pace with the rapidly evolving threat
          landscape.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Lightbulb className="mr-2" />
          Importance for Cybersecurity
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Education and training are critical in cybersecurity due to the field's dynamic nature and the constant
          emergence of new threats and technologies. Well-trained professionals are essential for organizations to
          effectively defend against cyber attacks, comply with regulations, and implement robust security measures.
          Continuous learning ensures that cybersecurity practitioners stay ahead of adversaries and can adapt to new
          challenges.
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
              Cybersecurity Career Paths Explained
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Top Cybersecurity Certifications in 2023
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              How to Build a Home Lab for Cybersecurity Learning
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
              href="https://www.nist.gov/itl/applied-cybersecurity/nice/resources/nice-cybersecurity-workforce-framework"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NICE Cybersecurity Workforce Framework
            </a>
          </li>
          <li>
            <a
              href="https://www.sans.org/cyber-security-skills-roadmap/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SANS Cyber Security Skills Roadmap
            </a>
          </li>
          <li>
            <a
              href="https://www.cyberseek.org/pathway.html"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              CyberSeek Career Pathway
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

