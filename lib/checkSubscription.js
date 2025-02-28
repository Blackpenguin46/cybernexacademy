import { supabase } from "./supabase"

export async function checkSubscription(userId: string) {
  const { data, error } = await supabase
    .from("subscriptions")
    .select("plan")
    .eq("user_id", userId)
    .gte("end_date", new Date().toISOString())
    .single()

  if (error || !data) {
    return null
  }

  return data.plan
}

