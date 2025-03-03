import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="CyberNex Academy">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              CyberNex Academy
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Start your cybersecurity journey with free resources, hands-on labs, and community support
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/free/learning" 
                className="px-8 py-3 bg-white text-blue-900 rounded-md font-semibold hover:bg-blue-50">
                Start Learning
              </Link>
              <Link href="/free/community" 
                className="px-8 py-3 border border-white text-white rounded-md font-semibold hover:bg-blue-800">
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/free/learning" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
              <p className="text-gray-600">Access free cybersecurity courses, labs, and certification guides.</p>
            </Link>

            <Link href="/free/students" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Student Resources</h2>
              <p className="text-gray-600">Find scholarships, internships, and CTF competitions.</p>
            </Link>

            <Link href="/free/careers" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Career Development</h2>
              <p className="text-gray-600">Explore job opportunities and career roadmaps.</p>
            </Link>

            <Link href="/free/community" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Community</h2>
              <p className="text-gray-600">Join forums, events, and mentorship programs.</p>
            </Link>

            <Link href="/blog" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Blog & News</h2>
              <p className="text-gray-600">Stay updated with cybersecurity trends and insights.</p>
            </Link>

            <Link href="/about" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600">Learn about our mission and community.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">"The free resources helped me land my first cybersecurity role. The community support was invaluable."</p>
              <p className="font-semibold">- Security Analyst</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">"Found my internship through CyberNex. The hands-on labs prepared me well."</p>
              <p className="font-semibold">- Security Engineer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">"The certification guides and practice labs made a huge difference in my preparation."</p>
              <p className="font-semibold">- SOC Analyst</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 