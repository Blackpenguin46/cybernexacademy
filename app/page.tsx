"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage(data.message);
        setEmail('');
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Failed to join waitlist');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <Image 
              src="/images/matrix-bg.png" 
              alt="Background Pattern" 
              fill
              quality={100}
            />
          </div>
          <div className="absolute inset-0 animated-gradient opacity-10"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              {/* Logo */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                CyberNex Academy
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">
                Your Ultimate Cybersecurity Resource Hub
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                CyberNex Academy is revolutionizing how you discover and access cybersecurity resources. 
                We&apos;re building the most comprehensive platform to guide your cybersecurity journey, 
                from beginner to expert.
              </p>

              {/* Email Signup Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Submitting...' : 'Notify Me'}
                  </button>
                </div>
                {message && (
                  <p className={`text-sm mt-2 ${message.includes('error') ? 'text-red-500' : 'text-green-500'} whitespace-pre-line`}>
                    {message}
                  </p>
                )}
                <p className="text-sm text-gray-400 mt-2">
                  Be the first to know when we launch. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Resources</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Access the best cybersecurity learning materials to accelerate your career.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Curated Resources</h3>
                <p className="text-gray-400 text-center">Hand-picked courses, training materials, and certification guides from trusted providers</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Resource Comparison</h3>
                <p className="text-gray-400 text-center">Compare different learning options, certifications, and career paths to make informed decisions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section id="why-us" className="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CyberNex Academy?</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We're building the resource hub we wish existed when we started our cybersecurity journeys.
              </p>
            </div>
            
            <div className="rounded-xl bg-blue-900/20 border border-blue-800 overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-200">Comprehensive database of cybersecurity courses, certifications, and training programs</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-200">Resource comparison tools to find the right learning options</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-200">Trusted information curated by industry experts</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-blue-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-200">Regular updates on new resources and industry trends</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                CyberNex
              </span>
              <p className="text-gray-400 mt-2">Your cybersecurity journey starts here.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-500 text-sm">© 2025 CyberNex Academy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


