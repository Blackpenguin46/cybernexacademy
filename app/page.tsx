import Link from "next/link"
import Image from "next/image"
import { 
  BookOpen, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Star,
  ArrowRight
} from "lucide-react"

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center px-4 py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-block animate-bounce-slow mb-4">
            <span className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-400 text-sm font-medium">
              New Courses Available
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white neon-text">
            Welcome to <br />
            <span className="cyber-gradient-text">CyberNex Academy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Your gateway to mastering cybersecurity skills with expert-led courses, 
            hands-on labs, and a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/learning/courses" 
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Start Learning
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              href="/about" 
              className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-cyan-500 w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10k+</div>
              <div className="text-gray-400">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Grid */}
      <section className="w-full px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Explore Our <span className="text-cyan-400">Platform</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/learning/courses" className="cyber-card group">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-colors"></div>
                  <div className="relative flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Learning Resources</h3>
                <p className="text-gray-400">Access our comprehensive library of courses and tutorials.</p>
              </div>
            </Link>

            <Link href="/community" className="cyber-card group">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-colors"></div>
                  <div className="relative flex items-center justify-center">
                    <Users className="w-12 h-12 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Community</h3>
                <p className="text-gray-400">Join our vibrant community of cybersecurity enthusiasts.</p>
              </div>
            </Link>

            <Link href="/careers" className="cyber-card group">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-colors"></div>
                  <div className="relative flex items-center justify-center">
                    <Briefcase className="w-12 h-12 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Careers</h3>
                <p className="text-gray-400">Explore career opportunities in cybersecurity.</p>
              </div>
            </Link>

            <Link href="/college" className="cyber-card group">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-colors"></div>
                  <div className="relative flex items-center justify-center">
                    <GraduationCap className="w-12 h-12 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">College Students</h3>
                <p className="text-gray-400">Special resources and programs for college students.</p>
              </div>
            </Link>

            <Link href="/tools" className="cyber-card group">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-colors"></div>
                  <div className="relative flex items-center justify-center">
                    <Wrench className="w-12 h-12 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Tools & Utilities</h3>
                <p className="text-gray-400">Essential tools for cybersecurity professionals.</p>
              </div>
            </Link>

            <Link href="/plus" className="cyber-card group">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-colors"></div>
                  <div className="relative flex items-center justify-center">
                    <Star className="w-12 h-12 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">CyberNex+</h3>
                <p className="text-gray-400">Premium features and exclusive content.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

