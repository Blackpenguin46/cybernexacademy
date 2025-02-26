"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"

interface Step {
  title: string
  content: string
}

interface ProjectWalkthroughProps {
  title: string
  description: string
  difficulty: "beginner" | "intermediate" | "advanced"
  duration: string
  prerequisites: string[]
  steps: Step[]
  resources: {
    title: string
    url: string
  }[]
}

export default function ProjectWalkthrough({
  title,
  description,
  difficulty,
  duration,
  prerequisites,
  steps,
  resources,
}: ProjectWalkthroughProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const toggleStep = (index: number) => {
    if (expandedStep === index) {
      setExpandedStep(null)
    } else {
      setExpandedStep(index)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Difficulty</h3>
          <span
            className={`inline-block px-2 py-1 rounded text-sm ${getDifficultyColor(
              difficulty
            )}`}
          >
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Estimated Time</h3>
          <p>{duration}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-medium mb-2">Prerequisites</h3>
          <ul className="list-disc list-inside text-sm">
            {prerequisites.map((prereq, index) => (
              <li key={index}>{prereq}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Project Steps</h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
            >
              <button
                onClick={() => toggleStep(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center font-medium"
              >
                <span>
                  {index + 1}. {step.title}
                </span>
                {expandedStep === index ? (
                  <ChevronDown className="h-5 w-5" />
                ) : (
                  <ChevronRight className="h-5 w-5" />
                )}
              </button>
              {expandedStep === index && (
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <div dangerouslySetInnerHTML={{ __html: step.content }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <ul className="space-y-2">
            {resources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

