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

    const { data: profile, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', session.user.id)
      .single()

    if (error) throw error

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const data = await request.json()
  
  try {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { error } = await supabase
      .from('user_profiles')
      .upsert({
        id: session.user.id,
        ...data,
        updated_at: new Date().toISOString()
      })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 