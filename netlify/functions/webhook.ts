import { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
})

export const handler: Handler = async (event) => {
  // Your webhook logic here
  // This will handle /api/webhook requests
} 