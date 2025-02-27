import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleLogout() {
    try {
      setError('');
      await logout();
      router.push('/');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h2>Dashboard</h2>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <div style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '0.25rem', marginBottom: '1rem' }}>
        <strong>Email:</strong> {currentUser?.email}
      </div>
      <button 
        onClick={handleLogout}
        style={{ padding: '0.5rem 1rem', background: '#0070f3', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}
      >
        Log Out
      </button>
    </div>
  );
}

