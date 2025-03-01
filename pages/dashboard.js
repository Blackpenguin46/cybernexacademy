import React from 'react';
import Link from 'next/link';
import { withAuth } from '../lib/withAuth';

// Export a config that disables SSG/ISR/SSR
export const config = {
  unstable_runtimeJS: true
};

// This ensures getStaticProps is minimal
export function getStaticProps() {
  return { props: {} };
}

function Dashboard({ user }) {
  // Import signOut directly to avoid hooks during SSR
  const { useAuth } = require('../lib/auth');
  const { signOut } = useAuth();
  
  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

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
      <h1 style={{ fontSize: '2rem', color: '#333' }}>Dashboard</h1>
      
      <div style={{ marginTop: '20px' }}>
        <p>Welcome, {user?.email || 'User'}!</p>
        <p>You are now signed in to your account.</p>
      </div>
      
      <button
        onClick={handleSignOut}
        style={{
          backgroundColor: '#3182ce',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

// Wrap component with auth protection
export default withAuth(Dashboard); 