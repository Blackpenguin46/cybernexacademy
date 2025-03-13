"use client";

import { useState } from 'react';

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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            CyberNex Academy
          </h1>
        </div>

        {/* Coming Soon Message */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">
          Your Ultimate Cybersecurity Resource Hub
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
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
          <p className="text-sm text-gray-500 mt-2">
            Be the first to know when we launch.
          </p>
        </form>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Career Guidance</h3>
            <p className="text-gray-400">Personalized roadmaps for various cybersecurity career paths, from SOC Analyst to Penetration Tester</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Curated Resources</h3>
            <p className="text-gray-400">Hand-picked courses, training materials, and certification guides from trusted providers</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Smart Recommendations</h3>
            <p className="text-gray-400">AI-powered suggestions for certifications and learning paths based on your goals</p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Community Reviews</h3>
            <p className="text-gray-400">Real feedback from cybersecurity professionals on courses, certifications, and training programs</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Resource Comparison</h3>
            <p className="text-gray-400">Compare different learning options, certifications, and career paths to make informed decisions</p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-12 p-6 rounded-lg bg-blue-900/20 border border-blue-800 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Why Choose CyberNex Academy?</h3>
          <ul className="text-gray-300 space-y-2 text-left">
            <li>✓ Comprehensive database of cybersecurity courses, certifications, and training programs</li>
            <li>✓ Personalized learning paths based on your experience level and career goals</li>
            <li>✓ Expert insights and community feedback to help you make the best choices</li>
            <li>✓ Regular updates on new resources and industry trends</li>
          </ul>
        </div>
      </div>
    </main>
  );
}


