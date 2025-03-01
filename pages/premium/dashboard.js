import { useEffect, useState } from 'react'

// This tells Next.js not to prerender this page
export const config = {
  unstable_runtimeJS: true,
}

export default function PremiumDashboard() {
  const [Component, setComponent] = useState(null)
  
  // Only load the real component on client side
  useEffect(() => {
    import('../../components/PremiumDashboardContent').then((mod) => {
      setComponent(() => mod.default)
    })
  }, [])
  
  // Show loading state until client component is loaded
  if (!Component) {
    return (
      <div style={{ 
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '40px auto',
        padding: '30px',
        textAlign: 'center'
      }}>
        <h2>Loading premium dashboard...</h2>
      </div>
    )
  }
  
  // Render the dynamically loaded component
  return <Component />
}
