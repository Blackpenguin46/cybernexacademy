import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function GET() {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY || ''
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2022-11-15',
    })

    // Test the connection by fetching a list of customers
    const customers = await stripe.customers.list({ limit: 1 })

    return NextResponse.json({ success: true, message: 'Connection successful', count: customers.data.length })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to connect to Stripe' },
      { status: 500 }
    )
  }
}

