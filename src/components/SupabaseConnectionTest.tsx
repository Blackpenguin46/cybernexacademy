"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"

const SupabaseConnectionTest: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<string>("Testing...")

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from("test").select("*").limit(1)
        if (error) throw error
        setConnectionStatus("Connected successfully to Supabase!")
      } catch (error) {
        console.error("Error connecting to Supabase:", error)
        setConnectionStatus("Failed to connect to Supabase. Check console for details.")
      }
    }

    testConnection()
  }, [])

  return (
    <div className="bg-gray-100 border border-gray-300 rounded p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Supabase Connection Test</h2>
      <p>{connectionStatus}</p>
    </div>
  )
}

export default SupabaseConnectionTest

