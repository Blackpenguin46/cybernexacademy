'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Book, Briefcase, Award } from 'lucide-react'

export default function CustomLearningPlanPage() {
  const [goal, setGoal] = useState('')
  const [experience, setExperience] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [plan, setPlan] = useState<any>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would involve more complex logic and possibly API calls
    const customPlan = generateCustomPlan(goal, experience, interests)
    setPlan(customPlan)
  }

  const generateCustomPlan = (goal: string, experience: string, interests: string[]) => {
    // This is a simplified version. In a real application, this would be more comprehensive
    const courses = [
      { title: "Introduction to Cybersecurity", duration: "4 weeks" },
      { title: "Network Security Fundamentals", duration: "6 weeks" },
      { title: "Ethical Hacking Basics", duration: "8 weeks" },
      { title: "Web Application Security", duration: "6 weeks" },
      { title: "Cloud Security Essentials", duration: "5 weeks" },
    ]

    const certifications = [
      "CompTIA Security+",
      "Certified Ethical Hacker (CEH)",
      "Certified Information Systems Security Professional (CISSP)",
    ]

    return {
      courses: courses.slice(0, 3), // Simplified: just return the first 3 courses
      certifications: certifications.slice(0, 2), // Simplified: just return the first 2 certifications
      projects: [
        "Build a simple firewall",
        "Perform a vulnerability assessment on a web application",
      ],
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Custom Learning Plan</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">What's your main goal?</label>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., Become a Security Analyst"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">What's your current experience level?</label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select experience level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Select your areas of interest:</label>
          <div className="space-y-2">
            {['Network Security', 'Web Security', 'Cloud Security', 'Ethical Hacking'].map((interest) => (
              <label key={interest} className="flex items-center">
                <input
                  type="checkbox"
                  value={interest}
                  checked={interests.includes(interest)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setInterests([...interests, interest])
                    } else {
                      setInterests(interests.filter(i => i !== interest))
                    }
                  }}
                  className="mr-2"
                />
                {interest}
              </label>
            ))}
          </div>
        </div>
        
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Generate Plan
        </button>
      </form>

      {plan && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Custom Learning Plan</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Recommended Courses</h3>
            <ul className="list-disc list-inside">
              {plan.courses.map((course: any, index: number) => (
                <li key={index}>{course.title} - {course.duration}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Recommended Certifications</h3>
            <ul className="list-disc list-inside">
              {plan.certifications.map((cert: string, index: number) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Suggested Projects</h3>
            <ul className="list-disc list-inside">
              {plan.projects.map((project: string, index: number) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline inline-flex items-center">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

