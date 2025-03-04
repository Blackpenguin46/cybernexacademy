import Link from "next/link"
import { Shield, Book, Users, Briefcase, GraduationCap, PenToolIcon as Tool } from "lucide-react"
import AnimatedBackground from "./components/AnimatedBackground"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient">
              Welcome to CyberNex Academy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Your gateway to cybersecurity knowledge and career growth. Explore our comprehensive resources, join our
              community, and advance your cybersecurity journey.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/get-started"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/courses"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/learning-resources"
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1"
              >
                <Book className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h2 className="text-2xl font-semibold mb-2 text-white">Learning Resources</h2>
                <p className="text-gray-400">Access comprehensive cybersecurity learning materials and guides.</p>
              </Link>

              <Link
                href="/community"
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1"
              >
                <Users className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h2 className="text-2xl font-semibold mb-2 text-white">Community</h2>
                <p className="text-gray-400">Connect with fellow cybersecurity enthusiasts and professionals.</p>
              </Link>

              <Link
                href="/careers"
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1"
              >
                <Briefcase className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h2 className="text-2xl font-semibold mb-2 text-white">Careers</h2>
                <p className="text-gray-400">Explore cybersecurity career paths and job opportunities.</p>
              </Link>

              <Link
                href="/college-students"
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1"
              >
                <GraduationCap className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h2 className="text-2xl font-semibold mb-2 text-white">College Students</h2>
                <p className="text-gray-400">Resources and guidance specifically for college students.</p>
              </Link>

              <Link
                href="/tools-utilities"
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1"
              >
                <Tool className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h2 className="text-2xl font-semibold mb-2 text-white">Tools & Utilities</h2>
                <p className="text-gray-400">Access essential cybersecurity tools and utilities.</p>
              </Link>

              <Link
                href="/cybernex-plus"
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1"
              >
                <Shield className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h2 className="text-2xl font-semibold mb-2 text-white">CyberNex+</h2>
                <p className="text-gray-400">Unlock premium features and advanced learning resources.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">10K+</div>
                <div className="text-gray-400">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-400">Video Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

