import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>CyberNex</h1>
      <p>Welcome to your cybersecurity learning platform</p>
      <div style={{ marginTop: '1rem' }}>
        <Link href="/login">
          <span style={{ padding: '0.5rem 1rem', background: '#0070f3', color: 'white', borderRadius: '0.25rem', cursor: 'pointer' }}>Login</span>
        </Link>
      </div>
    </div>
  );
}
