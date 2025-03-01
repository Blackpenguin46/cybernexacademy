import React, { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { AuthProvider } from '../lib/auth'

// Create the Supabase client outside of the component
const supabaseClient = createClientComponentClient()

// Standard Next.js App component with destructured props
function MyApp({ Component, pageProps }) {
  // Track if we're on client side
  const [isMounted, setIsMounted] = useState(false)
  
  // Only run on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Get any defined layout from the page component
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {isMounted ? (
        // Only render AuthProvider on client-side
        <AuthProvider>
          {getLayout(<Component {...pageProps} />)}
        </AuthProvider>
      ) : (
        // Simple fallback for SSR without auth
        getLayout(<Component {...pageProps} />)
      )}
    </SessionContextProvider>
  )
}

// Default export
export default MyApp 