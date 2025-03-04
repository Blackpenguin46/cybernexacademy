"use client"

import Link from "next/link"
import { Shield, Book, Users, Briefcase, GraduationCap, PenToolIcon as Tool } from "lucide-react"

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-7xl font-bold mb-6 animate-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              CyberNex Academy
            </span>
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your gateway to cybersecurity knowledge and career growth. Join our community of learners and advance your
            cybersecurity journey today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/academy/courses"
              className="group relative px-8 py-3 overflow-hidden rounded-lg bg-transparent"
            >
              <div className="absolute inset-0 w-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-white group-hover:text-white font-semibold">Start Learning</span>
            </Link>
            <Link
              href="/community"
              className="group relative px-8 py-3 overflow-hidden rounded-lg bg-transparent border border-cyan-400"
            >
              <div className="absolute inset-0 w-0 bg-cyan-400/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-cyan-400 group-hover:text-cyan-300 font-semibold">Join Community</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Why Choose CyberNex Academy?
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <Book className="w-12 h-12 mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Comprehensive Curriculum</h3>
              <p className="text-cyan-100">
                Access a wide range of courses designed by industry experts, covering both fundamentals and advanced topics.
              </p>
            </div>

            <div className="group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <Users className="w-12 h-12 mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Active Community</h3>
              <p className="text-cyan-100">
                Connect with fellow learners, share knowledge, and grow together in our vibrant community.
              </p>
            </div>

            <div className="group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <Briefcase className="w-12 h-12 mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Career Support</h3>
              <p className="text-cyan-100">
                Get guidance on career paths, job opportunities, and professional development in cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-2">10K+</div>
              <div className="text-cyan-100">Active Students</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-2">500+</div>
              <div className="text-cyan-100">Video Lessons</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-2">50+</div>
              <div className="text-cyan-100">Expert Instructors</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-2">95%</div>
              <div className="text-cyan-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-cyan-100 mb-8">Join thousands of students already learning with CyberNex Academy.</p>
          <Link
            href="/auth/signup"
            className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-lg bg-transparent"
          >
            <div className="absolute inset-0 w-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-white group-hover:text-white font-semibold">Get Started Today</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

