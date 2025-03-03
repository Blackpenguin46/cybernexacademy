import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section 
        className="bg-black text-white py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to CyberNex
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your central hub for all things cybersecurity, from beginner to professional.
          </motion.p>
        </div>
      </motion.section>

      {/* Explore Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Explore CyberNex
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {exploreCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="relative"
              >
                <Link 
                  href={card.href}
                  className="block bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-200 h-full transform-gpu"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">{card.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-gray-400">{card.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  )
} 