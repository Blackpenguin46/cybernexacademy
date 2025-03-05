import Link from "next/link";
import { Shield, Book, Users, Briefcase, GraduationCap, PenToolIcon as Tool, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 relative z-10">
          <h1 className="text-5xl font-bold mb-6 glow-text">
            Welcome to <span className="text-blue-500">CyberNex Academy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your gateway to mastering cybersecurity skills with expert-led courses, hands-on labs, and a supportive community.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link 
              href="/learning-resources" 
              className="cta-button"
            >
              Start Learning <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 border border-gray-600 rounded-md hover:border-blue-500 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Courses", value: "50+" },
            { label: "Students", value: "10k+" },
            { label: "Success Rate", value: "95%" },
            { label: "Support", value: "24/7" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Courses Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link href="/courses" className="text-blue-500 hover:text-blue-400 flex items-center">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((id) => (
              <div key={id} className="course-card">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold">Cybersecurity Fundamentals {id}</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Learn the basics of cybersecurity and build a strong foundation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$49.99</span>
                  <Link
                    href={`/courses/${id}`}
                    className="cta-button"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Navigation Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Explore Our Platform</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/learning-resources"
              className="course-card flex flex-col"
            >
              <Book className="w-12 h-12 mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">Learning Resources</h2>
              <p className="text-gray-400">Access comprehensive cybersecurity learning materials and guides.</p>
            </Link>

            <Link
              href="/community"
              className="course-card flex flex-col"
            >
              <Users className="w-12 h-12 mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">Community</h2>
              <p className="text-gray-400">Connect with fellow cybersecurity enthusiasts and professionals.</p>
            </Link>

            <Link
              href="/careers"
              className="course-card flex flex-col"
            >
              <Briefcase className="w-12 h-12 mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">Careers</h2>
              <p className="text-gray-400">Explore cybersecurity career paths and job opportunities.</p>
            </Link>

            <Link
              href="/college-students"
              className="course-card flex flex-col"
            >
              <GraduationCap className="w-12 h-12 mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">College Students</h2>
              <p className="text-gray-400">Resources and guidance specifically for college students.</p>
            </Link>

            <Link
              href="/tools-utilities"
              className="course-card flex flex-col"
            >
              <Tool className="w-12 h-12 mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">Tools & Utilities</h2>
              <p className="text-gray-400">Access essential cybersecurity tools and utilities.</p>
            </Link>

            <Link
              href="/cybernex-plus"
              className="course-card flex flex-col"
            >
              <Shield className="w-12 h-12 mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">CyberNex+</h2>
              <p className="text-gray-400">Unlock premium features and advanced learning resources.</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}