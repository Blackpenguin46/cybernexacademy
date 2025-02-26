"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SupabaseConnectionTest() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    async function testConnection() {
      try {
        // Simple query to test the connection
        const { error } = await supabase.from('profiles').select('count', { count: 'exact' }).limit(0)
        
        if (error) throw error
        setStatus('connected')
      } catch (error: unknown) {
        console.error('Supabase connection error:', error)
        setStatus('error')
        const err = error as Error
        setErrorMessage(err.message || 'Unknown error')
      }
    }

    testConnection()
  }, [])

  if (status === 'loading') {
    return <div>Testing connection to Supabase...</div>
  }

  if (status === 'error') {
    return <div className="text-red-500">Failed to connect to Supabase: {errorMessage}</div>
  }

  return <div className="text-green-500">Successfully connected to Supabase!</div>
}

