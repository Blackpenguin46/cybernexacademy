import { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

export const handler: Handler = async (event) => {
  // Your checkout session logic here
  // This will handle /api/create-checkout-session requests
} 