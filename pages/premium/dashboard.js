import React from 'react';
import dynamic from 'next/dynamic';

// Static fallback component that shows during SSR
function PremiumDashboardFallback() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '40px auto',
      padding: '30px',
      textAlign: 'center'
    }}>
      <h2>Loading Premium Dashboard...</h2>
    </div>
  );
}

// Dynamically import the component with auth (client-side only)
const PremiumDashboardWithAuth = dynamic(
  () => import('../../components/PremiumDashboardContent'),
  { 
    ssr: false,
    loading: () => <PremiumDashboardFallback />
  }
);

// Main export - simply returns the dynamic component
export default function PremiumDashboard() {
  return <PremiumDashboardWithAuth />;
}

// This tells Next.js not to try to render this page during build
export async function getStaticProps() {
  return {
    props: {}
  };
}
