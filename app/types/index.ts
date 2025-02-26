export type Subscription = {
  id: string
  user_id: string
  status: 'active' | 'inactive' | 'trialing' | 'canceled'
  plan: 'free' | 'plus' | 'pro'
  current_period_end: string
  created_at?: string
  updated_at?: string
} 