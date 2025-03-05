"use client"

import { useEffect, useState } from 'react';
import Link from "next/link"
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Book, Users, Briefcase, GraduationCap, PenToolIcon as Tool } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-bg" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 neon-text"
          >
            Master Cybersecurity.
            <br />
            Stay Ahead of Threats.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            Join the elite community of cybersecurity professionals. Learn, practice,
            and master the art of digital defense.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link href="/auth/register" className="cyber-button glow-effect">
              Start Your Journey
            </Link>
            <Link
              href="/academy/paths"
              className="cyber-button bg-darker-bg hover:bg-accent-bg"
            >
              Explore Courses
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 cyber-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 neon-text">
            Why Choose CyberNex Academy?
          </h2>
          
          <div className="cyber-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-card p-6"
              >
                <feature.icon className="w-12 h-12 text-neon-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-darker-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text-pink">
                Join Our Thriving Community
              </h2>
              <p className="text-text-secondary mb-8">
                Connect with like-minded cybersecurity enthusiasts, share knowledge,
                and grow together. Our community is your gateway to networking,
                mentorship, and collaborative learning.
              </p>
              <div className="space-y-4">
                {communityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <ArrowRight className="w-5 h-5 text-neon-pink" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/community"
                className="cyber-button mt-8 inline-block"
              >
                Join the Community
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="cyber-card p-8">
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-l-2 border-neon-blue pl-4"
                    >
                      <p className="text-text-secondary mb-2">
                        "{testimonial.text}"
                      </p>
                      <p className="font-medium">
                        {testimonial.name}
                        <span className="text-text-secondary ml-2">
                          {testimonial.title}
                        </span>
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cyber-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 neon-text"
          >
            Ready to Begin Your Cybersecurity Journey?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            Start learning today and join thousands of cybersecurity professionals
            who trust CyberNex Academy for their career growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/auth/register" className="cyber-button glow-effect">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    icon: Shield,
    title: "Comprehensive Learning Paths",
    description:
      "Structured courses designed for all skill levels, from beginners to advanced professionals.",
  },
  {
    icon: Book,
    title: "Certification Preparation",
    description:
      "Comprehensive study materials and practice tests for major cybersecurity certifications.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description:
      "Learn from industry professionals and get guidance for your cybersecurity career.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description:
      "Get guidance on career paths, job opportunities, and professional development in cybersecurity.",
  },
];

const communityFeatures = [
  "24/7 Discussion Forums",
  "Live Webinars & Workshops",
  "Networking Opportunities",
  "Mentorship Programs",
  "CTF Competitions",
];

const testimonials = [
  {
    text: "CyberNex Academy transformed my career. The hands-on labs and mentorship program were invaluable.",
    name: "Sarah Chen",
    title: "Security Engineer",
  },
  {
    text: "The community here is amazing. I learned more in 6 months than I did in 2 years of self-study.",
    name: "Michael Rodriguez",
    title: "Penetration Tester",
  },
];

