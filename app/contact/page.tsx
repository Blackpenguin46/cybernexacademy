"use client"

import React, { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // In a real implementation, you would send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (err) {
      setError('There was an error submitting your message. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-6">
              We're here to help with any questions about our platform or services
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Email Contact */}
              <div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  </div>
                  <p className="text-blue-400 font-medium mb-2">support@cybernex.academy</p>
                  <p className="text-gray-400 text-sm">For general inquiries and support</p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                <p className="text-gray-300 mb-8">
                  Have a question or feedback? Fill out the form below and our team will get back to you as soon as possible.
                </p>
                
                {success ? (
                  <div className="bg-green-900/30 border border-green-800 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We'll respond to your inquiry as soon as possible.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-4 px-4 py-2 bg-green-800/50 hover:bg-green-800 text-white rounded-md transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-800 bg-gray-900/50 px-4 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-800 bg-gray-900/50 px-4 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-800 bg-gray-900/50 px-4 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-800 bg-gray-900/50 px-4 py-2 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 