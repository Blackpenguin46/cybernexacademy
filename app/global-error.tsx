'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: '0 1rem',
          backgroundColor: '#111',
          color: 'white',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{
            maxWidth: '500px',
            padding: '2rem',
            backgroundColor: '#222',
            borderRadius: '0.5rem',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            border: '1px solid #333'
          }}>
            <h1 style={{
              color: '#ff4747',
              fontSize: '1.875rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Critical Error
            </h1>
            <p style={{ marginBottom: '1.5rem' }}>
              We're sorry, but there was a critical error loading the application.
            </p>
            <div style={{
              padding: '1rem',
              backgroundColor: '#333',
              borderRadius: '0.25rem',
              marginBottom: '1.5rem',
              textAlign: 'left',
              overflow: 'auto'
            }}>
              <code style={{ color: '#ff8080', fontSize: '0.875rem' }}>
                {error.message || 'Unknown error'}
              </code>
            </div>
            <button
              onClick={() => reset()}
              style={{
                padding: '0.5rem 1.5rem',
                backgroundColor: '#5a2ca0',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 