import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/AuthContext'

export default function Dashboard() {
  const { currentUser, signOut } = useAuth();
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleLogout() {
    try {
      await signOut();
      router.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="bg-white p-4 rounded shadow">
        <strong>Email:</strong> {currentUser?.email}
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

