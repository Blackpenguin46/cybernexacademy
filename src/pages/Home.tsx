import type React from "react"
import Link from "next/link"

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to CyberNex</h1>
      <p className="text-xl mb-8">Your gateway to cybersecurity knowledge and skills.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Learn Cybersecurity</h2>
          <p className="mb-4">Start your journey into cybersecurity fundamentals.</p>
          <Link 
            href="/about-fundamentals" 
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Get Started
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">CyberNex Plus</h2>
          <p className="mb-4">Access premium content and advanced training.</p>
          <Link 
            href="/cybernex-plus" 
            className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Career Opportunities</h2>
        <p className="mb-4">Explore cybersecurity career paths and job opportunities.</p>
        <Link 
          href="/careers/jobs" 
          className="inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          View Careers
        </Link>
      </div>
    </div>
  )
}

export default Home

