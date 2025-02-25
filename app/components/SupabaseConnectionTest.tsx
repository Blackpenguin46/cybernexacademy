"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function SupabaseConnectionTest() {
  const [connectionStatus, setConnectionStatus] = useState<"testing" | "success" | "error">("testing")

  useEffect(() => {
    async function testConnection() {
      try {
        if (!supabase) {
          throw new Error("Supabase client not initialized")
        }
        const { data, error } = await supabase.from("profiles").select("id").limit(1)
        if (error) throw error
        setConnectionStatus("success")
      } catch (error) {
        console.error("Supabase connection error:", error)
        setConnectionStatus("error")
      }
    }

    testConnection()
  }, [])

  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-lg font-semibold mb-2">Supabase Connection Status:</h2>
      {connectionStatus === "testing" && <p>Testing connection...</p>}
      {connectionStatus === "success" && <p className="text-green-600">Connected successfully!</p>}
      {connectionStatus === "error" && <p className="text-red-600">Connection failed. Check console for details.</p>}
    </div>
  )
}

