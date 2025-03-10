"use client"

import FeedbackForm from "@/app/components/FeedbackForm"

export default function FeedbackPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Submit Feedback</h1>
        <p className="text-gray-400 mb-8">
          We value your input! Use this form to suggest new features, resources, or sections
          that you'd like to see on CyberNex Academy. Your feedback helps us improve and grow.
        </p>
        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
          <FeedbackForm />
        </div>
      </div>
    </div>
  )
} 