import React from 'react';
import { useAuth } from '../../../lib/AuthContext';

export default function Mentorship() {
  const { user, loading } = useAuth();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Mentorship Program</h1>
      
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <p className="text-lg">Welcome, {user.email}!</p>
          <p className="text-lg">Connect with experienced mentors in the field!</p>
        </div>
      ) : (
        <p className="text-lg">Sign in to connect with mentors in the field!</p>
      )}
    </div>
  );
} 