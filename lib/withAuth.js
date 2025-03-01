import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// HOC to safely handle authentication in pages
export function withAuth(Component) {
  // Return a new component that handles auth
  return function WithAuth(props) {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    
    // Effect to run only on client
    useEffect(() => {
      setIsClient(true)
    }, [])
    
    // Server-side / during build - return simple placeholder
    if (!isClient) {
      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
          <p>Loading...</p>
        </div>
      )
    }
    
    // Client-side - import auth dynamically
    // This is why we need the isClient check first
    const { useAuth } = require('./auth')
    const { user, loading, isAuthenticated } = useAuth()
    
    // Handle authentication redirects
    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push('/login')
      }
    }, [loading, isAuthenticated, router])
    
    // Show loading or component based on auth state
    if (loading || !isAuthenticated) {
      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
          <p>Checking authentication...</p>
        </div>
      )
    }
    
    // Render the protected component with all props and user
    return <Component {...props} user={user} />
  }
} 