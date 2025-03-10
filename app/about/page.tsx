"use client";

import React from 'react'
import Link from 'next/link'
import { Shield, Users, BookOpen, Award, Zap, Globe, Target } from 'lucide-react'

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Sam Oakes",
      role: "Founder & CEO",
      bio: "Cybersecurity enthusiast and educator with a passion for Governance, Risk, and Compliance (GRC). Conducted research on risk management in emerging technologies and presented on quantum computing business integration to a Fortune 500 company. Founded Cybernex Academy in 2024 to help others navigate the cybersecurity field more efficiently.",
      image: "/images/team/sam.jpg"
    }
  ]
  
  // Core values
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our educational content and business practices."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster an inclusive, supportive community where everyone can learn and grow together."
    },
    {
      icon: BookOpen,
      title: "Excellence",
      description: "We are committed to providing the highest quality cybersecurity education and resources."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our platform and content to reflect the rapidly changing security landscape."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We make cybersecurity education accessible to learners of all backgrounds and experience levels."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We measure our success by the positive impact we have on our students' careers and the security community."
    }
  ]
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Cybernex Academy</h1>
            <p className="text-xl text-gray-300 mb-6">
              Accelerating your journey in cybersecurity education
            </p>
            <p className="text-blue-400 font-medium italic mb-8">
              "Knowledge Is Security, Security Is Power"
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 mb-4">
                  Cybernex Academy exists to streamline the cybersecurity learning journey by providing a centralized repository of high-quality resources for learners at all levels.
                </p>
                <p className="text-gray-300">
                  We are committed to bridging the cybersecurity skills gap by helping students and professionals find the right resources quickly, saving them valuable time in their educational journey.
                </p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 mb-4">
                  We envision a world where anyone interested in cybersecurity can quickly find the resources they need to excel, without wasting years searching for the right materials.
                </p>
                <p className="text-gray-300">
                  Cybernex Academy aims to be the premier platform for cybersecurity resource curation, fostering a community of learners who can accelerate their growth in the field and contribute to a more secure digital future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Story</h2>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-4">
                Cybernex Academy was founded in 2024 by Sam Oakes. As a college student navigating the field of cybersecurity, Sam spent a great deal of time trying to find the resources necessary to excel in the field.
              </p>
              <p className="text-gray-300 mb-4">
                By the time he was a junior, he had built up a good set of resources and was starting to excel in cybersecurity. He felt that he had wasted two years though finding all the right places to help him learn and wished there was a resource that could provide everything necessary to get started or continue learning cybersecurity.
              </p>
              <p className="text-gray-300 mb-4">
                That's where the idea for Cybernex Academy began. With a passion to educate and help others, Sam developed a repository of resources for people interested in cybersecurity to get started faster and help close the skills gap in the field of cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                    <value.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden">
                <div className="aspect-square bg-gray-800 flex items-center justify-center">
                  {/* Placeholder for team member image */}
                  <Users className="w-16 h-16 text-gray-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Access our curated cybersecurity resources and accelerate your learning journey with Cybernex Academy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/signup" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Create Free Account
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-transparent hover:bg-gray-800 text-white border border-gray-700 hover:border-gray-600 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 