import Link from "next/link"
import { Shield, Book, Users, Briefcase, GraduationCap, PenToolIcon as Tool } from "lucide-react"
import Header from "./components/Header"
import AnimatedBackground from "./components/AnimatedBackground"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <AnimatedBackground />
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Welcome to CyberNex Academy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your gateway to cybersecurity knowledge and career growth. Explore our comprehensive resources, join our
            community, and advance your cybersecurity journey.
          </p>
        </section>

        {/* Main Navigation Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/learning-resources"
            className="group bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
          >
            <Book className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <h2 className="text-2xl font-semibold mb-2 text-white">Learning Resources</h2>
            <p className="text-gray-400">Access comprehensive cybersecurity learning materials and guides.</p>
          </Link>

          <Link
            href="/community"
            className="group bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
          >
            <Users className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <h2 className="text-2xl font-semibold mb-2 text-white">Community</h2>
            <p className="text-gray-400">Connect with fellow cybersecurity enthusiasts and professionals.</p>
          </Link>

          <Link
            href="/careers"
            className="group bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
          >
            <Briefcase className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <h2 className="text-2xl font-semibold mb-2 text-white">Careers</h2>
            <p className="text-gray-400">Explore cybersecurity career paths and job opportunities.</p>
          </Link>

          <Link
            href="/college-students"
            className="group bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
          >
            <GraduationCap className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <h2 className="text-2xl font-semibold mb-2 text-white">College Students</h2>
            <p className="text-gray-400">Resources and guidance specifically for college students.</p>
          </Link>

          <Link
            href="/tools-utilities"
            className="group bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
          >
            <Tool className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <h2 className="text-2xl font-semibold mb-2 text-white">Tools & Utilities</h2>
            <p className="text-gray-400">Access essential cybersecurity tools and utilities.</p>
          </Link>

          <Link
            href="/cybernex-plus"
            className="group bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
          >
            <Shield className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <h2 className="text-2xl font-semibold mb-2 text-white">CyberNex+</h2>
            <p className="text-gray-400">Unlock premium features and advanced learning resources.</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

