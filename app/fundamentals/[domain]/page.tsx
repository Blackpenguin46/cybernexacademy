"use client"

import Link from "next/link"
import { ArrowLeft, BookOpen, Lightbulb, Target, ChevronDown, ChevronUp } from "lucide-react"
import ErrorBoundary from "@/app/components/ErrorBoundary"
import { useState } from "react"

interface Resource {
  title: string
  url: string
  description: string
}

export interface DomainContent {
  title: string
  description: string
  importance: string
  useCases: string[]
  keyTopics: string[]
  resources: Resource[]
}

interface PageProps {
  params: { domain: string }
}

async function getDomainContent(domain: string): Promise<DomainContent> {
  try {
    const module = await import(`../content/${domain}`)
    return module.default
  } catch (error) {
    console.error(`Error loading content for domain: ${domain}`, error)
    throw new Error(`Failed to load content for ${domain}`)
  }
}

export default async function DomainPage({ params }: { params: { domain: string } }) {
  const [isOpen, setIsOpen] = useState(true) //This line was moved here from CollapsibleSection

  let domainContent: DomainContent

  try {
    domainContent = await getDomainContent(params.domain)
  } catch (error) {
    return (
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Error</h1>
        <p className="text-gray-600 dark:text-gray-400">Failed to load content for this domain.</p>
        <Link
          href="/fundamentals"
          className="inline-flex items-center mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="mr-2" />
          Back to Fundamentals
        </Link>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/fundamentals"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" />
          Back to Fundamentals
        </Link>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">{domainContent.title}</h1>

        {/* Overview Section */}
        <CollapsibleSection title="Overview" icon={<BookOpen className="w-6 h-6" />}>
          <p className="text-gray-600 dark:text-gray-400">{domainContent.description}</p>
        </CollapsibleSection>

        {/* Importance Section */}
        <CollapsibleSection title="Why It's Important" icon={<Lightbulb className="w-6 h-6" />}>
          <p className="text-gray-600 dark:text-gray-400">{domainContent.importance}</p>
        </CollapsibleSection>

        {/* Use Cases Section */}
        <CollapsibleSection title="Use Cases" icon={<Target className="w-6 h-6" />}>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            {domainContent.useCases.map((useCase, index) => (
              <li key={index} className="mb-2">
                {useCase}
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        {/* Key Topics Section */}
        <CollapsibleSection title="Key Topics">
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            {domainContent.keyTopics.map((topic, index) => (
              <li key={index} className="mb-2">
                {topic}
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        {/* Resources Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Resources</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domainContent.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </ErrorBoundary>
  )
}

// Collapsible Section Component
function CollapsibleSection({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <section className="mb-8">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </h2>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-gray-900 dark:text-gray-100" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-900 dark:text-gray-100" />
        )}
      </button>
      {isOpen && <div>{children}</div>}
    </section>
  )
}

