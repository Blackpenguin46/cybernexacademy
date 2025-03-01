import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signIn } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const { error } = await signIn(email, password);
      
      if (error) throw error;
      
      // Redirect to dashboard on success
      router.push('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError(error.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '500px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9'
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        Log In
      </h1>
      
      {error && (
        <div style={{ 
          backgroundColor: '#FEE2E2', 
          color: '#B91C1C', 
          padding: '10px', 
          borderRadius: '4px', 
          marginBottom: '20px' 
        }}>
          {error}
        </div>
      )}
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px',
            fontWeight: 'bold'
          }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px',
            fontWeight: 'bold'
          }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: '#3182ce',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            marginTop: '10px'
          }}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
      
      <p style={{ 
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#666'
      }}>
        Don't have an account?{' '}
        <Link href="/signup" style={{ color: '#3182ce', textDecoration: 'none' }}>
          Sign Up
        </Link>
      </p>
    </div>
  );
} 