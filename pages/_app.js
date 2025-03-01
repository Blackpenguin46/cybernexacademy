import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

// Create the Supabase client outside of the component
const supabaseClient = createClientComponentClient()

// Standard Next.js App component with destructured props
function MyApp({ Component, pageProps }) {
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}

// Default export
export default MyApp 