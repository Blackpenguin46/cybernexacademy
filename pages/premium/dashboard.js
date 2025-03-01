import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Create a client-side only component that uses auth
const PremiumDashboardContent = () => {
  const router = useRouter();
  
  // Import auth hook dynamically to avoid SSR issues
  const { useAuth } = require('../../lib/auth');
  const { user, loading, isAuthenticated } = useAuth();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login?redirect=/premium/dashboard');
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

  // If we get here and not authenticated, we're in the process of redirecting
  if (!isAuthenticated) {
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
  );
};

// Create a loading component for initial render
function LoadingFallback() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '40px auto',
      padding: '30px',
      textAlign: 'center'
    }}>
      <h2>Loading...</h2>
    </div>
  );
}

// Export a dynamic component with SSR disabled
export default function PremiumDashboard() {
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true on component mount
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Show loading fallback until client-side
  if (!isClient) {
    return <LoadingFallback />;
  }
  
  return <PremiumDashboardContent />;
}
