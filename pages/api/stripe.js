import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (req.body.action === 'create-checkout') {
      try {
        const { userId, priceId } = req.body
        
        // Get the user's email from Supabase
        const { data: userData, error: userError } = await supabase
          .from('profiles')
          .select('email')
          .eq('id', userId)
          .single()
          
        if (userError) throw userError
        
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
          success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/premium/dashboard?success=true`,
          cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/premium?canceled=true`,
          customer_email: userData.email,
          client_reference_id: userId,
        })
        
        res.status(200).json({ sessionId: session.id })
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
    } 
    else if (req.body.action === 'webhook') {
      const sig = req.headers['stripe-signature']
      
      try {
        const event = stripe.webhooks.constructEvent(
          req.body,
          sig,
          process.env.STRIPE_WEBHOOK_SECRET
        )
        
        // Handle the event
        switch (event.type) {
          case 'checkout.session.completed':
            const session = event.data.object
            
            // Update the user's subscription status in Supabase
            await supabase
              .from('subscriptions')
              .upsert({
                user_id: session.client_reference_id,
                stripe_customer_id: session.customer,
                status: 'active',
                price_id: session.display_items?.[0]?.price?.id,
              })
            
            break
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
            const subscription = event.data.object
            
            // Update the subscription status
            await supabase
              .from('subscriptions')
              .update({
                status: subscription.status,
              })
              .eq('stripe_customer_id', subscription.customer)
            
            break
          default:
            console.log(`Unhandled event type ${event.type}`)
        }
        
        res.status(200).json({ received: true })
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
    }
    else {
      res.status(400).json({ error: 'Invalid action' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
} 