import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">About Cybernex</h1>
      
      <div className="space-y-6 text-gray-600 dark:text-gray-400">
        <p>
          At Cybernex, our mission is to empower individuals at every stage of their cybersecurity journey. Whether you're a beginner just stepping into the world of cybersecurity or an advanced professional looking to sharpen your skills, Cybernex is your one-stop destination for all the resources you need to succeed.
        </p>
        
        <p>
          The cybersecurity industry can be overwhelming, with countless tutorials, videos, and career paths to navigate. Cybernex simplifies this process by curating the best resources, tools, and guidance in one place. No more endless searching—just a clear, structured path to help you achieve your goals.
        </p>
        
        <p>
          For beginners, we provide step-by-step guidance on how to get started, including foundational tutorials, recommended projects, and career advice tailored to your interests. For seasoned professionals, we offer advanced training, industry insights, and opportunities to connect with like-minded individuals.
        </p>
        
        <p>
          Cybernex is more than just a platform—it's a community. We aim to break down the barriers of the cybersecurity industry by providing passionate individuals with the tools, knowledge, and support they need to thrive. Join us and take the next step in your cybersecurity journey.
        </p>
      </div>

      <Link 
        href="/" 
        className="mt-8 text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
      >
        <ArrowLeft className="mr-2" />
        Back to Home
      </Link>
    </div>
  )
}

