"use client"

import React, { useState } from 'react'
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react'

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
  
  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@cybernex.academy",
      description: "For general inquiries and support"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Monday to Friday, 9am to 5pm EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Security Street, Cyber City, CS 12345",
      description: "Our headquarters location"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM EST",
      description: "We're closed on weekends and holidays"
    }
  ]
  
  // FAQ items
  const faqItems = [
    {
      question: "How can I get help with my account?",
      answer: "For account-related issues, please email support@cybernex.academy with your username and a description of the problem. Our team typically responds within 24 hours on business days."
    },
    {
      question: "Do you offer enterprise training solutions?",
      answer: "Yes, we provide customized cybersecurity training programs for organizations of all sizes. Please contact our enterprise team at enterprise@cybernex.academy for more information."
    },
    {
      question: "How can I report a bug or technical issue?",
      answer: "Technical issues can be reported through our support portal or by emailing bugs@cybernex.academy. Please include steps to reproduce the issue and any relevant screenshots."
    },
    {
      question: "Are there opportunities to join your team?",
      answer: "We're always looking for talented individuals passionate about cybersecurity education. Check our careers page for current openings or send your resume to careers@cybernex.academy."
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-6">
              We're here to help with any questions about our platform or services
            </p>
            <p className="text-blue-400 font-medium italic mb-8">
              "Knowledge Is Security, Security Is Power"
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-blue-400 font-medium mb-2">{item.details}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                      <div className="flex items-start">
                        <MessageSquare className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-medium text-white mb-2">{item.question}</h3>
                          <p className="text-gray-300 text-sm">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Location</h2>
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              {/* Placeholder for map - in a real implementation, you would embed a Google Map or similar */}
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-600" />
                <span className="ml-2 text-gray-400">Map Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 