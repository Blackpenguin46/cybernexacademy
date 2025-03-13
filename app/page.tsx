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
          Coming Soon
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Your journey into cybersecurity excellence begins here. 
          We're building something special to help you master cybersecurity skills.
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
            <p className={`text-sm mt-2 ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
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
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Expert-Led Training</h3>
            <p className="text-gray-400">Learn from industry professionals with real-world experience</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Hands-On Labs</h3>
            <p className="text-gray-400">Practice in realistic environments with guided exercises</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Community</h3>
            <p className="text-gray-400">Connect with fellow cybersecurity enthusiasts</p>
          </div>
        </div>
      </div>
    </main>
  );
}

