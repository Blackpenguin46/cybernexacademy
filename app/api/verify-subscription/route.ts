import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripeKey = process.env.STRIPE_SECRET_KEY || '';

const stripe = new Stripe(stripeKey, {
  apiVersion: "2022-11-15",
})

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get("session_id")

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

    let plan = ""
    if (subscription.items.data[0].price.id === process.env.STRIPE_CYBERNEX_PLUS_PRICE_ID) {
      plan = "CyberNex+"
    } else if (subscription.items.data[0].price.id === process.env.STRIPE_CYBERNEX_PRO_PRICE_ID) {
      plan = "CyberNex Pro"
    }

    return NextResponse.json({ status: "success", plan })
  } catch (error) {
    console.error("Error verifying subscription:", error)
    return NextResponse.json({ error: "Error verifying subscription" }, { status: 500 })
  }
}

