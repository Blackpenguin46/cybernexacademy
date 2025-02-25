"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function SubscribePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [plan, setPlan] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const planParam = searchParams.get("plan")
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
      const { error } = await stripe!.redirectToCheckout({
        sessionId: session.id,
      })

      if (error) {
        console.error("Error:", error)
        setLoading(false)
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
      <h1 className="text-3xl font-bold mb-8 text-center">Subscribe to {planDetails.name}</h1>

      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{planDetails.name}</h2>
        <p className="text-xl font-bold mb-4">{planDetails.price}</p>
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Subscribe Now"}
        </button>
      </div>
    </div>
  )
}

