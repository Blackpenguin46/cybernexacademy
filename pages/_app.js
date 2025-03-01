import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import dynamic from 'next/dynamic'

// Import real AuthProvider only on client-side
const DynamicAuthProvider = dynamic(
  () => import('../lib/auth').then(mod => mod.AuthProvider),
  { ssr: false }
)

// Create the Supabase client outside of the component
const supabaseClient = createClientComponentClient()

// Standard Next.js App component with destructured props
function MyApp({ Component, pageProps }) {
  // Create a wrapper component for client-side rendering
  const ClientOnly = ({ children }) => {
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])
    return mounted ? children : null
  }

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <ClientOnly>
        <DynamicAuthProvider>
          <Component {...pageProps} />
        </DynamicAuthProvider>
      </ClientOnly>
    </SessionContextProvider>
  )
}

// Default export
export default MyApp 