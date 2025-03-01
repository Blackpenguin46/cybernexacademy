import React from 'react'
import { createBrowserClient } from '@supabase/ssr'
import dynamic from 'next/dynamic'

// Import real AuthProvider only on client-side
const DynamicAuthProvider = dynamic(
  () => import('../lib/auth').then(mod => mod.AuthProvider),
  { ssr: false }
)

// Standard Next.js App component with destructured props
function MyApp({ Component, pageProps }) {
  // Create Supabase client on the client side only
  const [supabaseClient, setSupabaseClient] = React.useState(null)
  
  // Create a wrapper component for client-side rendering
  const ClientOnly = ({ children }) => {
    const [mounted, setMounted] = React.useState(false)
    
    React.useEffect(() => {
      setMounted(true)
      
      // Initialize Supabase client on the client side
      if (!supabaseClient) {
        const client = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        )
        setSupabaseClient(client)
      }
    }, [])
    
    return mounted ? children : null
  }

  return (
    <ClientOnly>
      {supabaseClient && (
        <DynamicAuthProvider supabaseClient={supabaseClient}>
          <Component {...pageProps} />
        </DynamicAuthProvider>
      )}
    </ClientOnly>
  )
}

// Default export
export default MyApp 