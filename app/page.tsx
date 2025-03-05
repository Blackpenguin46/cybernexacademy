import Link from "next/link"
import { 
  BookOpen, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Star 
} from "lucide-react"

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center px-4 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white neon-text">
            Welcome to CyberNex Academy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Your gateway to mastering cybersecurity skills with expert-led courses, 
            hands-on labs, and a supportive community.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/learning/courses" 
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Learning
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Main Navigation Grid */}
      <section className="w-full px-4 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/learning/courses" className="cyber-card group">
            <div className="p-8 flex flex-col items-center text-center">
              <BookOpen className="w-12 h-12 mb-4 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">Learning Resources</h3>
              <p className="text-gray-400">Access our comprehensive library of courses and tutorials.</p>
            </div>
          </Link>

          <Link href="/community" className="cyber-card group">
            <div className="p-8 flex flex-col items-center text-center">
              <Users className="w-12 h-12 mb-4 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-400">Join our vibrant community of cybersecurity enthusiasts.</p>
            </div>
          </Link>

          <Link href="/careers" className="cyber-card group">
            <div className="p-8 flex flex-col items-center text-center">
              <Briefcase className="w-12 h-12 mb-4 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">Careers</h3>
              <p className="text-gray-400">Explore career opportunities in cybersecurity.</p>
            </div>
          </Link>

          <Link href="/college" className="cyber-card group">
            <div className="p-8 flex flex-col items-center text-center">
              <GraduationCap className="w-12 h-12 mb-4 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">College Students</h3>
              <p className="text-gray-400">Special resources and programs for college students.</p>
            </div>
          </Link>

          <Link href="/tools" className="cyber-card group">
            <div className="p-8 flex flex-col items-center text-center">
              <Wrench className="w-12 h-12 mb-4 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">Tools & Utilities</h3>
              <p className="text-gray-400">Essential tools for cybersecurity professionals.</p>
            </div>
          </Link>

          <Link href="/plus" className="cyber-card group">
            <div className="p-8 flex flex-col items-center text-center">
              <Star className="w-12 h-12 mb-4 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">CyberNex+</h3>
              <p className="text-gray-400">Premium features and exclusive content.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

