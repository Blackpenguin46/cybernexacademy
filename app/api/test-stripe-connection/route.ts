import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
})

export async function GET() {
  try {
    // Attempt to list customers (this will fail if the API key is invalid)
    await stripe.customers.list({ limit: 1 })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error testing Stripe connection:", error)
    return NextResponse.json({ success: false, error: "Failed to connect to Stripe" }, { status: 500 })
  }
}

