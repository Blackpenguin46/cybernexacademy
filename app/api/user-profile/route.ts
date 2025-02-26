import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // This is a mock response for demonstration
    // In a real app, you would fetch the user profile from Supabase
    return NextResponse.json({
      id: '123',
      username: 'johndoe',
      full_name: 'John Doe',
      bio: 'Cybersecurity enthusiast',
      avatar_url: 'https://example.com/avatar.jpg',
      created_at: '2023-01-01T00:00:00Z'
    })
  } catch (error) {
    console.error('Error in user profile API:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const data = await request.json()
  
  try {
    const { error } = await supabase
      .from('profiles')
      .update({
        username: data.username,
        full_name: data.full_name,
        bio: data.bio,
        avatar_url: data.avatar_url,
        updated_at: new Date().toISOString()
      })
      .eq('id', data.id)
    
    if (error) throw error
    
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error updating profile:', error)
    return NextResponse.json({ error: error.message || 'Failed to update profile' }, { status: 500 })
  }
} 