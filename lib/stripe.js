import Stripe from 'stripe'
import { supabase } from './supabase/client'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY')
}

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error('Missing required environment variable: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY')
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(stripeSecretKey)

export const getStripePublicKey = () => {
  return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
}

export async function createCheckoutSession(userId, priceId) {
  // Create a checkout session
  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/premium?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/premium?canceled=true`,
    metadata: {
      userId: userId,
    },
  });

  return checkoutSession;
}

export async function createPortalSession(customerId) {
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/premium`,
  });

  return portalSession;
} 