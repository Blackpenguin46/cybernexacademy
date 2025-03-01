import React from 'react';
import { useAuth } from '../../../lib/AuthContext';

export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Premium Dashboard</h1>
        <p className="text-lg">Please sign in to access your premium dashboard.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Premium Dashboard</h1>
      <p className="text-lg">Welcome, {user.email}!</p>
      <p className="text-lg">This is your premium member dashboard.</p>
    </div>
  );
} 