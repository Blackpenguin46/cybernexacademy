import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/auth';

export default function Dashboard() {
  const { user, loading, isAuthenticated, signOut } = useAuth();
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [loading, isAuthenticated, router]);

  // Show loading state
  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        Loading...
      </div>
    );
  }

  // If we get here and user is null, we're in the process of redirecting
  if (!user) {
    return null;
  }

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
        <p>Welcome, {user.email || 'User'}!</p>
        <p>You are now signed in to your account.</p>
      </div>
      
      <button
        onClick={async () => {
          await signOut();
          router.push('/');
        }}
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