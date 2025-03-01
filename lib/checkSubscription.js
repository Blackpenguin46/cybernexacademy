import { supabase } from './supabase/client'

export async function checkSubscription(userId) {
  if (!userId) {
    return false
  }

  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .single()

    if (error || !data) {
      return false
    }

    return true
  } catch (error) {
    console.error('Error checking subscription:', error)
    return false
  }
}

