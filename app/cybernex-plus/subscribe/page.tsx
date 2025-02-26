"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"
import { Check } from 'lucide-react'

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

export default function SubscribePage() {
  const searchParams = useSearchParams()
  const [plan, setPlan] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const planParam = searchParams?.get("plan")
    if (planParam) {
      setPlan(planParam)
    }
  }, [searchParams])

  const handleSubscribe = async () => {
    setLoading(true)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      })

      const session = await response.json()

      // Redirect to Stripe Checkout
      const stripe = await stripePromise
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        })

        if (error) {
          console.error("Error:", error)
          setLoading(false)
        }
      }
    } catch (error) {
      console.error("Error:", error)
      setLoading(false)
    }
  }

  const getPlanDetails = (planType: string) => {
    switch (planType) {
      case "plus":
        return { name: "CyberNex+", price: "$10/month" }
      case "pro":
        return { name: "CyberNex Pro", price: "$30/month" }
      default:
        return { name: "Unknown Plan", price: "N/A" }
    }
  }

  const planDetails = getPlanDetails(plan)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <h1 className="text-2xl font-bold">{planDetails.name} Subscription</h1>
          <p className="text-xl mt-2">{planDetails.price}</p>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">What's included:</h2>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Access to all premium courses</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Hands-on labs and exercises</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Certification preparation materials</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Community access</span>
            </li>
          </ul>
          
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition duration-200 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Subscribe Now"}
          </button>
        </div>
      </div>
    </div>
  )
}

