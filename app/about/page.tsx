"use client";

import React from 'react'
import Link from 'next/link'
import { Shield, Users, BookOpen, Award, Zap, Globe, Target } from 'lucide-react'

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former CISO with 15+ years of experience in cybersecurity. PhD in Computer Science with a focus on security systems.",
      image: "/images/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Chief Learning Officer",
      bio: "Security researcher and educator with experience at leading tech companies. Specializes in making complex security concepts accessible.",
      image: "/images/team/michael.jpg"
    },
    {
      name: "David Rodriguez",
      role: "Head of Content",
      bio: "Cybersecurity author and former penetration tester. Passionate about creating engaging educational content.",
      image: "/images/team/david.jpg"
    },
    {
      name: "Emma Williams",
      role: "Community Director",
      bio: "Community builder with a background in cybersecurity training and mentorship programs. Focused on creating inclusive learning environments.",
      image: "/images/team/emma.jpg"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About CyberNex Academy</h1>
            <p className="text-xl text-gray-300 mb-6">
              Empowering the next generation of cybersecurity professionals
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
                  CyberNex Academy exists to democratize cybersecurity education, making it accessible, engaging, and effective for learners at all levels.
                </p>
                <p className="text-gray-300">
                  We are committed to bridging the cybersecurity skills gap by providing high-quality, practical training that prepares individuals for real-world challenges in the digital security landscape.
                </p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 mb-4">
                  We envision a world where organizations and individuals are empowered to protect themselves in the digital realm through knowledge and skills.
                </p>
                <p className="text-gray-300">
                  CyberNex Academy aims to be the premier platform for cybersecurity education, fostering a global community of skilled professionals who contribute to a more secure digital future.
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
                CyberNex Academy was founded in 2020 by Dr. Sarah Johnson, a former Chief Information Security Officer with a passion for education. After years of witnessing the growing cybersecurity skills gap and the challenges organizations face in finding qualified security professionals, Sarah decided to create a solution.
              </p>
              <p className="text-gray-300 mb-4">
                What began as a small collection of online courses quickly evolved into a comprehensive learning platform. By bringing together industry experts, innovative teaching methodologies, and a focus on practical, hands-on learning, CyberNex Academy has grown into a trusted resource for cybersecurity education.
              </p>
              <p className="text-gray-300">
                Today, CyberNex Academy serves learners in over 150 countries, from complete beginners to seasoned professionals looking to expand their skills. Our community-centered approach, rigorous curriculum, and commitment to staying at the cutting edge of cybersecurity have made us a leader in the field of security education.
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
              Become part of the CyberNex Academy community and start your journey toward cybersecurity mastery today.
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