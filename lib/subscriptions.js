import { supabase } from './supabase/client'

export async function getUserSubscription(userId) {
  if (!userId) {
    return null
  }

  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*, prices(*, products(*))')
      .eq('user_id', userId)
      .eq('status', 'active')
      .single()

    if (error) throw error

    return data
  } catch (error) {
    console.error('Error getting user subscription:', error)
    return null
  }
}

export async function getSubscriptionPrices() {
  try {
    const { data, error } = await supabase
      .from('prices')
      .select('*, products(*)')
      .eq('active', true)
      .order('unit_amount')

    if (error) throw error

    return data
  } catch (error) {
    console.error('Error getting subscription prices:', error)
    return []
  }
}

export async function updateUserSubscription(userId: string, plan: string, status: string) {
  const { data, error } = await supabase
    .from("subscriptions")
    .upsert({ user_id: userId, plan, status })
    .select()
    .single()

  if (error) {
    console.error("Error updating subscription:", error)
    return null
  }

  return data
}

