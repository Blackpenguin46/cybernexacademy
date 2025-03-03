import Layout from '../../components/Layout'
import Link from 'next/link'

export default function FreeHome() {
  return (
    <Layout title="Free Cybersecurity Resources">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Free Cybersecurity Resources
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Start your cybersecurity journey with our comprehensive free resources
            </p>
          </div>
        </div>
      </section>

      {/* Main Navigation Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Learning Resources */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link href="/free/learning/fundamentals" className="text-blue-600 hover:text-blue-800">
                    • Cybersecurity Fundamentals
                  </Link>
                </li>
                <li>
                  <Link href="/free/learning/labs" className="text-blue-600 hover:text-blue-800">
                    • Technical Labs
                  </Link>
                </li>
                <li>
                  <Link href="/free/learning/certifications" className="text-blue-600 hover:text-blue-800">
                    • Certification Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* Student Resources */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Student Resources</h2>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link href="/free/students/scholarships" className="text-blue-600 hover:text-blue-800">
                    • Scholarships
                  </Link>
                </li>
                <li>
                  <Link href="/free/students/internships" className="text-blue-600 hover:text-blue-800">
                    • Internships
                  </Link>
                </li>
                <li>
                  <Link href="/free/students/ctf" className="text-blue-600 hover:text-blue-800">
                    • CTF Competitions
                  </Link>
                </li>
                <li>
                  <Link href="/free/students/projects" className="text-blue-600 hover:text-blue-800">
                    • Student Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Career Development */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Career Development</h2>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link href="/free/careers/jobs" className="text-blue-600 hover:text-blue-800">
                    • Job Board
                  </Link>
                </li>
                <li>
                  <Link href="/free/careers/roadmaps" className="text-blue-600 hover:text-blue-800">
                    • Career Roadmaps
                  </Link>
                </li>
                <li>
                  <Link href="/free/careers/networking" className="text-blue-600 hover:text-blue-800">
                    • Personal Branding
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Community</h2>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link href="/free/community/forums" className="text-blue-600 hover:text-blue-800">
                    • Discussion Forums
                  </Link>
                </li>
                <li>
                  <Link href="/free/community/events" className="text-blue-600 hover:text-blue-800">
                    • Industry Events
                  </Link>
                </li>
                <li>
                  <Link href="/free/community/mentorship" className="text-blue-600 hover:text-blue-800">
                    • Mentorship Programs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog & Support */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Resources</h2>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link href="/free/blog" className="text-blue-600 hover:text-blue-800">
                    • Blog & News
                  </Link>
                </li>
                <li>
                  <Link href="/free/about" className="text-blue-600 hover:text-blue-800">
                    • About Us
                  </Link>
                </li>
                <li>
                  <Link href="/free/contact" className="text-blue-600 hover:text-blue-800">
                    • Contact & Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 