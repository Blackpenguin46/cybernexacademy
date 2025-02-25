import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
})

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'

export async function POST(request: Request) {
  try {
    const { plan, userId } = await request.json()
    
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    // Verify user matches session
    if (session.user.id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const priceId = plan === 'pro' 
      ? process.env.STRIPE_CYBERNEX_PRO_PRICE_ID 
      : process.env.STRIPE_CYBERNEX_PLUS_PRICE_ID

    const checkoutSession = await stripe.checkout.sessions.create({
      customer_email: session.user.email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${DOMAIN}/dashboard?success=true`,
      cancel_url: `${DOMAIN}/pricing?canceled=true`,
      metadata: {
        userId: userId,
        plan: plan,
      },
    })

    return NextResponse.json({ sessionId: checkoutSession.id })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

