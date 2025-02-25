"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Video, MessageCircle, Folder } from "lucide-react"

export default function ClassroomPage() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState("") // Added state for subscription status
  const router = useRouter()

  useEffect(() => {
    // Check if the user is subscribed
    // In a real application, you would make an API call to your backend to verify the subscription status
    const checkSubscription = async () => {
      try {
        const response = await fetch("/api/check-subscription")
        const data = await response.json()
        setIsSubscribed(data.isSubscribed)
        setSubscriptionStatus(data.subscriptionStatus) // Update subscription status
      } catch (error) {
        console.error("Error checking subscription:", error)
        setIsSubscribed(false)
        setSubscriptionStatus("") // Set to empty string on error
      }
    }

    checkSubscription()
  }, [])

  if (!isSubscribed) {
    router.push("/cybernex-plus")
    return null
  }

  // Mock content - replace with actual content based on subscription
  const courses =
    subscriptionStatus === "pro"
      ? [
          // Pro plan courses
          { id: 1, title: "Advanced Network Security", instructor: "Jane Doe" },
          { id: 2, title: "Ethical Hacking Masterclass", instructor: "John Smith" },
          { id: 3, title: "Cloud Security Fundamentals", instructor: "Alice Johnson" },
          { id: 4, title: "Advanced Penetration Testing", instructor: "Bob Williams" },
          { id: 5, title: "Malware Analysis and Reverse Engineering", instructor: "Charlie Brown" },
        ]
      : [
          // Basic plan courses
          { id: 1, title: "Introduction to Networking", instructor: "Eve Jackson" },
          { id: 2, title: "Cybersecurity Fundamentals", instructor: "Mallory Davis" },
        ]

  const projects =
    subscriptionStatus === "pro"
      ? [
          // Pro plan projects
          { id: 1, title: "Build a Secure Web Application" },
          { id: 2, title: "Implement a Zero Trust Network" },
          { id: 3, title: "Develop a Threat Intelligence Platform" },
          { id: 4, title: "Advanced Persistent Threat (APT) Simulation" },
        ]
      : [
          // Basic plan projects
          { id: 1, title: "Set up a Simple Firewall" },
          { id: 2, title: "Password Manager with Encryption" },
        ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">CyberNex+ Classroom</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Video Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Video className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Instructor: {course.instructor}</p>
              <Link href={`/cybernex-plus/classroom/course/${course.id}`} className="text-blue-600 hover:underline">
                Start Course
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Premium Discord Community</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <MessageCircle className="w-8 h-8 text-blue-600 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Join Our Exclusive Community</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Connect with industry professionals and fellow CyberNex+ members in our private Discord server.
          </p>
          <Link href="https://discord.gg/cybernex-plus" className="text-blue-600 hover:underline">
            Join Discord
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Custom Projects and Labs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Folder className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <Link href={`/cybernex-plus/classroom/project/${project.id}`} className="text-blue-600 hover:underline">
                Start Project
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 text-center">
        <Link href="/cybernex-plus/dashboard" className="text-blue-600 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}

