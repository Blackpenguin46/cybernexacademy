import { supabase } from "./supabase"

export async function getUserSubscription(userId: string) {
  const { data, error } = await supabase.from("subscriptions").select("plan, status").eq("user_id", userId).single()

  if (error) {
    console.error("Error fetching subscription:", error)
    return null
  }

  return data
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

