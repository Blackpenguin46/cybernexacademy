"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { loadStripe } from '@stripe/stripe-js'
import { Shield, Check, Zap, Crown } from 'lucide-react'

const STRIPE_LINKS = {
  plus: 'https://buy.stripe.com/7sIbJP95iaHk1GgcMM',
  pro: 'https://buy.stripe.com/5kA9BH5T64iWbgQ289'
}

export default function PricingPage() {
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  const handleSubscribe = async (plan: 'plus' | 'pro') => {
    if (!user) {
      router.push('/login?redirect=/pricing')
      return
    }

    window.location.href = STRIPE_LINKS[plan]
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Choose Your Learning Path
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Access cybersecurity resources that match your learning needs
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {/* Free Tier */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Free</h2>
              <Shield className="w-8 h-8 text-gray-400" />
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Start your cybersecurity journey
            </p>
            <p className="mt-8 text-4xl font-bold text-gray-900 dark:text-white">
              $0
              <span className="text-base font-normal text-gray-600 dark:text-gray-400">/month</span>
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Access to basic learning resources</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Community forum access</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Basic cybersecurity tools</span>
              </li>
            </ul>

            <button
              onClick={() => router.push('/content')}
              className="mt-8 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* CyberNex+ */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-blue-500">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">CyberNex+</h2>
              <Zap className="w-8 h-8 text-blue-500" />
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Advanced learning and resources
            </p>
            <p className="mt-8 text-4xl font-bold text-gray-900 dark:text-white">
              $19
              <span className="text-base font-normal text-gray-600 dark:text-gray-400">/month</span>
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Everything in Free</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Advanced tutorials and labs</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Premium tools access</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Monthly webinars</span>
              </li>
            </ul>

            <button
              onClick={() => handleSubscribe('plus')}
              disabled={loading}
              className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              {loading ? 'Processing...' : 'Subscribe to Plus'}
            </button>
          </div>
        </div>

        {/* CyberNex Pro */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">CyberNex Pro</h2>
              <Crown className="w-8 h-8 text-purple-500" />
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Professional development and mentoring
            </p>
            <p className="mt-8 text-4xl font-bold text-gray-900 dark:text-white">
              $49
              <span className="text-base font-normal text-gray-600 dark:text-gray-400">/month</span>
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Everything in Plus</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">1-on-1 mentoring sessions</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Career guidance</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">Certification preparation</span>
              </li>
            </ul>

            <button
              onClick={() => handleSubscribe('pro')}
              disabled={loading}
              className="mt-8 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              {loading ? 'Processing...' : 'Subscribe to Pro'}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>All plans include access to our community and basic resources.</p>
        <p className="mt-2">
          Need help choosing? <a href="/contact" className="text-blue-600 hover:text-blue-800">Contact us</a>
        </p>
      </div>
    </div>
  )
} 