import React from 'react'
import Link from 'next/link'
import { withAuth } from '../../lib/withAuth'

// Export a config that disables SSG/ISR/SSR
export const config = {
  unstable_runtimeJS: true
}

// This ensures getStaticProps is minimal
export function getStaticProps() {
  return { props: {} }
}

function PremiumDashboard({ user }) {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9'
    }}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>Premium Dashboard</h1>
      
      <div style={{ 
        padding: '20px',
        backgroundColor: '#EDF7ED', 
        borderRadius: '8px',
        marginTop: '20px' 
      }}>
        <h2 style={{ fontSize: '1.5rem', color: '#2D3748' }}>
          Welcome to Premium Content
        </h2>
        <p>
          Hello, {user?.email || 'Premium Member'}! You now have access to exclusive cybersecurity content.
        </p>
      </div>
      
      <div style={{ 
        display: 'flex',
        gap: '15px',
        marginTop: '30px',
        flexWrap: 'wrap'
      }}>
        <Link href="/dashboard" style={{
          padding: '10px 15px',
          backgroundColor: '#3182CE',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none'
        }}>
          Main Dashboard
        </Link>
        
        <Link href="/" style={{
          padding: '10px 15px',
          backgroundColor: '#718096',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none'
        }}>
          Home
        </Link>
      </div>
    </div>
  )
}

// Wrap component with auth protection
export default withAuth(PremiumDashboard)
