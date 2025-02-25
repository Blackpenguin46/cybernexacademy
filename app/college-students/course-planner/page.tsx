"use client"
import { useState } from "react"
import { Upload, BookOpen, GraduationCap, CheckCircle, ArrowRight } from "lucide-react"

export default function CollegeSection() {
  // State for file upload
  const [file, setFile] = useState<File | null>(null)

  // State for user answers
  const [answers, setAnswers] = useState({
    careerInterest: "",
    preferredSkills: "",
    timeCommitment: "",
  })

  // State for generated roadmap
  const [roadmap, setRoadmap] = useState<string[]>([])

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  // Handle input changes for questions
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }))
  }

  // Generate roadmap based on inputs
  const generateRoadmap = () => {
    // Example logic for generating a roadmap
    const { careerInterest, preferredSkills, timeCommitment } = answers

    const roadmapSteps: string[] = []

    if (careerInterest === "cybersecurity") {
      roadmapSteps.push(
        "1. Take foundational courses in networking and operating systems.",
        "2. Enroll in cybersecurity-specific courses like ethical hacking and digital forensics.",
        "3. Participate in cybersecurity clubs or competitions.",
        "4. Pursue internships in cybersecurity roles.",
        "5. Obtain certifications like CompTIA Security+ or CEH.",
      )
    } else if (careerInterest === "software-development") {
      roadmapSteps.push(
        "1. Focus on programming courses like Python, Java, and C++.",
        "2. Learn web development frameworks like React or Angular.",
        "3. Contribute to open-source projects or build a portfolio.",
        "4. Apply for internships in software development.",
        "5. Prepare for technical interviews and coding challenges.",
      )
    }

    if (preferredSkills === "technical") {
      roadmapSteps.push("6. Deepen your knowledge in algorithms and data structures.")
    } else if (preferredSkills === "management") {
      roadmapSteps.push("6. Take courses in project management and leadership.")
    }

    if (timeCommitment === "full-time") {
      roadmapSteps.push("7. Dedicate 30+ hours per week to studies and projects.")
    } else if (timeCommitment === "part-time") {
      roadmapSteps.push("7. Allocate 10-20 hours per week for focused learning.")
    }

    setRoadmap(roadmapSteps)
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        <GraduationCap className="inline-block w-10 h-10 mr-2 text-blue-600" />
        College Roadmap Planner
      </h1>

      <p className="text-xl mb-12 text-gray-600 dark:text-gray-400">
        Upload your college course planner or major checksheet, answer a few questions, and get a personalized roadmap
        to reinforce your studies and achieve your career goals.
      </p>

      {/* File Upload Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          <Upload className="inline-block w-6 h-6 mr-2 text-blue-600" />
          Upload Your Course Planner
        </h2>
        <input
          type="file"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
        {file && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Uploaded: <span className="font-medium">{file.name}</span>
          </p>
        )}
      </div>

      {/* Questions Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          <BookOpen className="inline-block w-6 h-6 mr-2 text-blue-600" />
          Answer a Few Questions
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2 text-gray-900 dark:text-gray-100">
              What is your primary career interest?
            </label>
            <select
              name="careerInterest"
              value={answers.careerInterest}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            >
              <option value="">Select an option</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="software-development">Software Development</option>
              <option value="data-science">Data Science</option>
              <option value="it-management">IT Management</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2 text-gray-900 dark:text-gray-100">
              What skills do you want to focus on?
            </label>
            <select
              name="preferredSkills"
              value={answers.preferredSkills}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            >
              <option value="">Select an option</option>
              <option value="technical">Technical Skills</option>
              <option value="management">Management Skills</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2 text-gray-900 dark:text-gray-100">
              How much time can you commit weekly?
            </label>
            <select
              name="timeCommitment"
              value={answers.timeCommitment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            >
              <option value="">Select an option</option>
              <option value="full-time">Full-Time (30+ hours)</option>
              <option value="part-time">Part-Time (10-20 hours)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Generate Roadmap Button */}
      <button
        onClick={generateRoadmap}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
      >
        <ArrowRight className="w-5 h-5 mr-2" />
        Generate My Roadmap
      </button>

      {/* Roadmap Display Section */}
      {roadmap.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            <CheckCircle className="inline-block w-6 h-6 mr-2 text-blue-600" />
            Your Personalized Roadmap
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {roadmap.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

