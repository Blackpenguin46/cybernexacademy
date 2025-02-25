"use client"

import Link from "next/link"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function AboutFundamentalsPage() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  // Toggle section visibility
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">About Cybersecurity Fundamentals</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Cybersecurity fundamentals are the foundation of protecting systems, networks, and data from digital threats.
          Learn why they are essential and how they apply to your daily life and career.
        </p>
      </header>

      {/* Back Button */}
      <div className="mb-12">
        <Link
          href="/general-resources"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Cybersecurity Fundamentals
        </Link>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {/* What is Cybersecurity? */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <button
            onClick={() => toggleSection("what-is-cybersecurity")}
            className="w-full flex justify-between items-center text-left"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">What is Cybersecurity?</h2>
            {openSection === "what-is-cybersecurity" ? (
              <ChevronUp className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            )}
          </button>
          {openSection === "what-is-cybersecurity" && (
            <div className="mt-4 text-gray-600 dark:text-gray-400">
              <p>
                Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks.
                These attacks are usually aimed at accessing, changing, or destroying sensitive information, extorting
                money, or interrupting normal business processes.
              </p>
              <p className="mt-4">
                Implementing effective cybersecurity measures is challenging today because there are more devices than
                people, and attackers are becoming more innovative.
              </p>
            </div>
          )}
        </div>

        {/* Why is Cybersecurity Important? */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <button
            onClick={() => toggleSection("why-cybersecurity")}
            className="w-full flex justify-between items-center text-left"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Why is Cybersecurity Important?</h2>
            {openSection === "why-cybersecurity" ? (
              <ChevronUp className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            )}
          </button>
          {openSection === "why-cybersecurity" && (
            <div className="mt-4 text-gray-600 dark:text-gray-400">
              <p>
                Cybersecurity is critical because it helps protect sensitive data, such as personal information,
                intellectual property, and government or industry information systems.
              </p>
              <p className="mt-4">
                Without a robust cybersecurity strategy, organizations are at risk of falling victim to data breaches,
                financial losses, and reputational damage.
              </p>
            </div>
          )}
        </div>

        {/* Key Concepts in Cybersecurity */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <button
            onClick={() => toggleSection("key-concepts")}
            className="w-full flex justify-between items-center text-left"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Key Concepts in Cybersecurity</h2>
            {openSection === "key-concepts" ? (
              <ChevronUp className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            )}
          </button>
          {openSection === "key-concepts" && (
            <div className="mt-4 text-gray-600 dark:text-gray-400">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Confidentiality:</strong> Ensuring that sensitive information is accessible only to authorized
                  individuals.
                </li>
                <li>
                  <strong>Integrity:</strong> Protecting data from being altered or tampered with by unauthorized
                  parties.
                </li>
                <li>
                  <strong>Availability:</strong> Ensuring that systems and data are accessible when needed.
                </li>
                <li>
                  <strong>Authentication:</strong> Verifying the identity of users and systems.
                </li>
                <li>
                  <strong>Authorization:</strong> Granting access to resources based on user roles and permissions.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

