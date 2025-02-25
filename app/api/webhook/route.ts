import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
})

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    // Type guard to ensure err is Error
    const error = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Webhook Error: ${error}` }, { status: 400 })
  }

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      const subscription = event.data.object as Stripe.Subscription
      const planType = subscription.items.data[0].price.id === 
        process.env.STRIPE_CYBERNEX_PRO_PRICE_ID ? 'pro' : 'plus'

      await supabase
        .from('subscriptions')
        .upsert({
          user_id: subscription.metadata.user_id,
          plan_type: planType,
          stripe_subscription_id: subscription.id,
          updated_at: new Date().toISOString(),
        })
      break

    case 'customer.subscription.deleted':
      const deletedSubscription = event.data.object as Stripe.Subscription
      await supabase
        .from('subscriptions')
        .delete()
        .eq('stripe_subscription_id', deletedSubscription.id)
      break
  }

  return NextResponse.json({ received: true })
} 