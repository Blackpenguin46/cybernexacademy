import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  
  try {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { data: subscription, error } = await supabase
      .from('subscriptions')
      .select('plan_type, status')
      .eq('user_id', session.user.id)
      .eq('status', 'active')
      .single()

    if (error) throw error

    return NextResponse.json({ plan: subscription?.plan_type || null })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

