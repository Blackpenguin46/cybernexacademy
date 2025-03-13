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
              <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
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
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
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
        <section id="features" className="py-16 bg-gray-900/50">
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
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Cybersecurity Pros Are Saying</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Early feedback from our beta testers in the cybersecurity community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial cards would go here in production version */}
              <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                    <span className="font-bold text-white">JS</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Jane Smith</h4>
                    <p className="text-sm text-gray-400">Security Analyst</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"As someone transitioning into cybersecurity, having all these resources organized in one place is exactly what I needed."</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                    <span className="font-bold text-white">MJ</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Michael Johnson</h4>
                    <p className="text-sm text-gray-400">Penetration Tester</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"The platform helped me discover specialized training for advanced techniques that I wouldn't have found otherwise."</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-3">
                    <span className="font-bold text-white">AP</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Alex Peterson</h4>
                    <p className="text-sm text-gray-400">Security Engineer</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"The certification comparison tool alone saved me hours of research and helped me make better career decisions."</p>
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
                
                <div className="mt-8 text-center">
                  <button 
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    onClick={() => document.querySelector('input[type="email"]')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Join the Waitlist
                  </button>
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
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-500 text-sm">© 2023 CyberNex Academy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


