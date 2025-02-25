"use client"

import { useState, useEffect } from "react"

export default function StripeConnectionTest() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const testStripeConnection = async () => {
      try {
        const response = await fetch("/api/test-stripe-connection")
        const data = await response.json()

        if (data.success) {
          setStatus("success")
          setMessage("Stripe connection successful!")
        } else {
          setStatus("error")
          setMessage("Stripe connection failed. Check your environment variables.")
        }
      } catch (error) {
        setStatus("error")
        setMessage("Error testing Stripe connection. Check the console for details.")
        console.error("Error testing Stripe connection:", error)
      }
    }

    testStripeConnection()
  }, [])

  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-lg font-semibold mb-2">Stripe Connection Test</h2>
      {status === "loading" && <p>Testing Stripe connection...</p>}
      {status === "success" && <p className="text-green-600">{message}</p>}
      {status === "error" && <p className="text-red-600">{message}</p>}
    </div>
  )
}

