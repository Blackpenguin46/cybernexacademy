import Link from "next/link"
import { ArrowLeft, Globe } from "lucide-react"

interface ProjectWalkthroughProps {
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
  steps: {
    title: string
    description: string
  }[]
  videoTutorial: string
  onlineResources: {
    title: string
    url: string
  }[]
}

export default function ProjectWalkthrough({
  title,
  description,
  difficulty,
  category,
  steps,
  videoTutorial,
  onlineResources,
}: ProjectWalkthroughProps) {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6">
        <ArrowLeft className="mr-2" />
        Back to Projects
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

      <div className="flex items-center mb-6">
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mr-4">{category}</span>
        <span
          className={`text-sm font-medium px-2 py-1 rounded ${
            difficulty === "Beginner"
              ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
              : difficulty === "Intermediate"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
          }`}
        >
          {difficulty}
        </span>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Project Steps</h2>
      <ol className="list-decimal list-inside space-y-4 mb-8">
        {steps.map((step, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{step.title}</span>: {step.description}
          </li>
        ))}
      </ol>

      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Video Tutorial</h2>
      <div className="aspect-w-16 aspect-h-9 mb-8">
        <iframe
          src={videoTutorial}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Additional Resources</h2>
      <ul className="space-y-2">
        {onlineResources.map((resource, index) => (
          <li key={index}>
            <Link
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              <Globe className="mr-2" />
              {resource.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

