import Link from "next/link"
import {
  Shield,
  Book,
  Award,
  Calendar,
  PenTool,
  GraduationCap,
  Code,
  Cpu,
  Lightbulb,
  Rocket,
  MessageSquare,
  ExternalLink,
} from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Welcome to CyberNex</h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
          Your central hub for all things cybersecurity, from beginner to professional.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Explore CyberNex</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            href="/college-students"
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">College Students</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Resources tailored for students starting their cybersecurity journey
            </p>
          </Link>
          <Link
            href="/learning-resources"
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <Book className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Learning Resources</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Explore career paths and resources in cybersecurity</p>
          </Link>
          <Link
            href="/projects"
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Projects</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Explore hands-on cybersecurity projects to build your skills
            </p>
          </Link>
          <Link
            href="/certifications"
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Certifications</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Discover essential cybersecurity certifications</p>
          </Link>
          <Link
            href="/events-and-ctfs"
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Events and CTFs</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Discover cybersecurity events and Capture The Flag competitions
            </p>
          </Link>
          <Link
            href="/tools-utilities"
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <PenTool className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Tools & Utilities</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Explore essential cybersecurity tools and utilities</p>
          </Link>
          <Link
            href="/advanced-professionals"
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Advanced Professionals</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Resources for experienced cybersecurity professionals</p>
          </Link>
          <Link
            href="/fundamentals"
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Fundamentals</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Explore the core concepts and principles of cybersecurity
            </p>
          </Link>
          <Link
            href="/community"
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <MessageSquare className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">CyberNex Community</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with other cybersecurity enthusiasts in our community
            </p>
          </Link>
          <Link
            href="/emerging-trends"
            className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Emerging Trends</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Explore cutting-edge technologies and their impact on cybersecurity
            </p>
          </Link>
          <Link
            href="/cybernex-plus"
            className="w-full bg-blue-600 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 transition-transform"
          >
            <div className="flex items-center mb-4">
              <Rocket className="w-8 h-8 mr-3" />
              <h3 className="font-semibold text-lg">CyberNex+</h3>
            </div>
            <p>Explore our premium features and personalized learning</p>
          </Link>
        </div>
      </section>

      <section className="mt-24 bg-blue-600 text-white p-8 rounded-lg shadow-lg max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Stay Connected and Informed</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">CyberNex Substack</h3>
            <p className="mb-4">
              Get the latest updates on cybersecurity trends, news, and insights delivered straight to your inbox.
            </p>
            <Link
              href="https://cybernex.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Subscribe to Our Substack
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">CyberNex Discord Community</h3>
            <p className="mb-4">
              Join our vibrant community of cybersecurity enthusiasts, professionals, and learners.
            </p>
            <Link
              href="https://discord.gg/cybernex"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Join Our Discord
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

