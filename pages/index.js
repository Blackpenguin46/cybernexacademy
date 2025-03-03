import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  const exploreCards = [
    {
      icon: "🎓",
      title: "College Students",
      description: "Resources tailored for students starting their cybersecurity journey",
      href: "/students"
    },
    {
      icon: "📚",
      title: "Learning Resources",
      description: "Explore career paths and resources in cybersecurity",
      href: "/learn"
    },
    {
      icon: "💻",
      title: "Projects",
      description: "Explore hands-on cybersecurity projects to build your skills",
      href: "/projects"
    },
    {
      icon: "🏆",
      title: "Certifications",
      description: "Discover essential cybersecurity certifications",
      href: "/certifications"
    },
    {
      icon: "🎯",
      title: "Events and CTFs",
      description: "Discover cybersecurity events and Capture The Flag competitions",
      href: "/events"
    },
    {
      icon: "🛠",
      title: "Tools & Utilities",
      description: "Explore essential cybersecurity tools and utilities",
      href: "/tools"
    },
    {
      icon: "👨‍💻",
      title: "Advanced Professionals",
      description: "Resources for experienced cybersecurity professionals",
      href: "/advanced"
    },
    {
      icon: "🛡",
      title: "Fundamentals",
      description: "Explore the core concepts and principles of cybersecurity",
      href: "/fundamentals"
    },
    {
      icon: "💬",
      title: "CyberNex Community",
      description: "Connect with other cybersecurity enthusiasts in our community",
      href: "/community"
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 opacity-100 transition-opacity duration-500">
            Welcome to CyberNex
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto opacity-100 transition-opacity duration-500 delay-200">
            Your central hub for all things cybersecurity, from beginner to professional.
          </p>
        </div>
      </section>

      {/* Explore Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Explore CyberNex
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCards.map((card, index) => (
              <div
                key={index}
                className="relative transform transition-transform duration-200 hover:scale-105"
              >
                <Link 
                  href={card.href}
                  className="block bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-200 h-full"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">{card.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-gray-400">{card.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
} 