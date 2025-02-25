import type React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to CyberNex</h1>
      <p className="text-xl mb-8">Your gateway to cybersecurity knowledge and skills.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          to="/learn"
          className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-2">Learn</h2>
          <p>Explore our comprehensive learning resources.</p>
        </Link>
        <Link
          to="/certifications-careers"
          className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-2">Certifications & Careers</h2>
          <p>Discover cybersecurity career paths and certifications.</p>
        </Link>
        <Link
          to="/tools-utilities"
          className="bg-purple-500 text-white p-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-2">Tools & Utilities</h2>
          <p>Access essential cybersecurity tools and utilities.</p>
        </Link>
        <Link
          to="/community"
          className="bg-red-500 text-white p-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-2">Community</h2>
          <p>Connect with fellow cybersecurity enthusiasts.</p>
        </Link>
      </div>
    </div>
  )
}

export default Home

