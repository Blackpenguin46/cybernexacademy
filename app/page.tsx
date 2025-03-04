"use client"

import Link from "next/link"
import { Shield, Book, Users, Briefcase, GraduationCap, PenToolIcon as Tool } from "lucide-react"
import AnimatedBackground from "./components/AnimatedBackground"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative pt-16">
        {/* Hero Section */}
        <section className="py-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient">
              Welcome to CyberNex Academy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Your gateway to cybersecurity knowledge and career growth. Join our community of learners and advance your
              cybersecurity journey today.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/academy/courses"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Start Learning
              </Link>
              <Link
                href="/community"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Join Community
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose CyberNex Academy?</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1">
                <Book className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-2xl font-semibold mb-2 text-white">Comprehensive Curriculum</h3>
                <p className="text-gray-400">
                  Access a wide range of courses designed by industry experts, covering both fundamentals and advanced topics.
                </p>
              </div>

              <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1">
                <Users className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-2xl font-semibold mb-2 text-white">Active Community</h3>
                <p className="text-gray-400">
                  Connect with fellow learners, share knowledge, and grow together in our vibrant community.
                </p>
              </div>

              <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1">
                <Briefcase className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-2xl font-semibold mb-2 text-white">Career Support</h3>
                <p className="text-gray-400">
                  Get guidance on career paths, job opportunities, and professional development in cybersecurity.
                </p>
              </div>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">Join thousands of students already learning with CyberNex Academy.</p>
            <Link
              href="/auth/signup"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

