import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    // Generate JWT token if needed
    const token = jwt.sign(
      { userId: data.user.id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    )

    return NextResponse.json({ 
      user: data.user,
      token 
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 401 }
    )
  }
} 