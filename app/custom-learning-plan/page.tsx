"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Book, Briefcase, Award, ArrowRight } from "lucide-react"

type LearningGoal = 'career-change' | 'skill-improvement' | 'certification' | 'general-knowledge'
type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced'
type InterestArea = 'network-security' | 'application-security' | 'cloud-security' | 'offensive-security' | 'defensive-security'

interface FormData {
  goal: LearningGoal | null
  experience: ExperienceLevel | null
  interests: InterestArea[]
  timeCommitment: number
}

interface LearningPlan {
  title: string
  description: string
  resources: Resource[]
  timeline: string
  nextSteps: string[]
}

interface Resource {
  title: string
  type: 'course' | 'book' | 'tool' | 'project'
  link: string
  description: string
}

export default function CustomLearningPlanPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    goal: null,
    experience: null,
    interests: [],
    timeCommitment: 5,
  })
  const [plan, setPlan] = useState<LearningPlan | null>(null)

  const generatePlan = (_goal: LearningGoal | null, _experience: ExperienceLevel | null, _interests: InterestArea[]) => {
    // This would typically call an API or use a more sophisticated algorithm
    // For now, we'll just return a mock plan
    return {
      title: "Cybersecurity Career Starter Plan",
      description: "A comprehensive plan to help you build foundational cybersecurity skills and prepare for entry-level positions.",
      resources: [
        {
          title: "CompTIA Security+ Certification",
          type: "course",
          link: "/courses/security-plus",
          description: "Industry-standard certification for cybersecurity fundamentals"
        },
        {
          title: "Network Security Fundamentals",
          type: "course",
          link: "/courses/network-security",
          description: "Learn the basics of securing networks and preventing unauthorized access"
        },
        {
          title: "Introduction to Cryptography",
          type: "course",
          link: "/courses/cryptography",
          description: "Understand encryption, hashing, and secure communication"
        },
        {
          title: "Practical Malware Analysis",
          type: "book",
          link: "https://example.com/book",
          description: "Learn to analyze and understand malicious software"
        }
      ],
      timeline: "3-6 months",
      nextSteps: [
        "Complete the Security+ certification",
        "Build a home lab for practice",
        "Join cybersecurity communities",
        "Start working on capture-the-flag challenges"
      ]
    }
  }

  const handleNext = () => {
    if (step === 4) {
      const generatedPlan = generatePlan(formData.goal, formData.experience, formData.interests)
      setPlan(generatedPlan)
    }
    setStep(step + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleNext()
  }

  const handleInterestToggle = (interest: InterestArea) => {
    setFormData(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
      return { ...prev, interests }
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Create Your Custom Learning Plan</h1>
      
      {step <= 4 ? (
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">Step {step} of 4</span>
              <span className="text-sm font-medium text-gray-500">{step * 25}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${step * 25}%` }}></div>
            </div>
          </div>
          
          {/* Form content based on current step */}
          {/* ... form steps ... */}
          
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {step === 4 ? "Generate Plan" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        plan && (
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Recommended Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plan.resources.map((resource, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h4 className="font-medium mb-2">{resource.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{resource.description}</p>
                    <a 
                      href={resource.link} 
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                    >
                      View Resource <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Estimated Timeline</h3>
              <p>{plan.timeline}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
              <ul className="list-disc pl-5 space-y-2">
                {plan.nextSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 mr-4"
              >
                Start Over
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Plan
              </button>
            </div>
          </div>
        )
      )}
    </div>
  )
}

