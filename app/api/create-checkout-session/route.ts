import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY || ''
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2022-11-15',
    })

    const searchParams = request.nextUrl.searchParams
    const priceId = searchParams.get('priceId') || ''
    const userId = searchParams.get('userId') || ''

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${request.nextUrl.origin}/cybernex-plus/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/cybernex-plus`,
      metadata: {
        userId,
      },
    })

    return NextResponse.json({ id: session.id })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    )
  }
}

