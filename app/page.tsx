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
            <span className="cyber-gradient-text">
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
              className="cyber-button"
            >
              Start Learning
            </Link>
            <Link
              href="/community"
              className="cyber-button"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="cyber-gradient-text">
              Why Choose CyberNex Academy?
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="cyber-card">
              <Book className="w-12 h-12 mb-4 text-cyan-400" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Comprehensive Curriculum</h3>
              <p className="text-cyan-100">
                Access a wide range of courses designed by industry experts, covering both fundamentals and advanced topics.
              </p>
            </div>

            <div className="cyber-card">
              <Users className="w-12 h-12 mb-4 text-cyan-400" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Active Community</h3>
              <p className="text-cyan-100">
                Connect with fellow learners, share knowledge, and grow together in our vibrant community.
              </p>
            </div>

            <div className="cyber-card">
              <Briefcase className="w-12 h-12 mb-4 text-cyan-400" />
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="cyber-box p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-cyan-100">Active Students</div>
            </div>
            <div className="cyber-box p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-cyan-100">Video Lessons</div>
            </div>
            <div className="cyber-box p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-cyan-100">Expert Instructors</div>
            </div>
            <div className="cyber-box p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-cyan-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="cyber-box mx-4 md:mx-auto max-w-4xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-cyan-100 mb-8">Join thousands of students already learning with CyberNex Academy.</p>
          <Link
            href="/auth/signup"
            className="cyber-button"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

