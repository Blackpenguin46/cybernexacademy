import { useState } from 'react';

export default function Home() {
  // Using basic React patterns without complex logic
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif', 
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>
        CyberNex Academy
      </h1>
      
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        Your gateway to cybersecurity education.
      </p>
      
      <div style={{ marginTop: '2rem' }}>
        <p>Interactive counter demonstration:</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '0.5rem'
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#f3f3f3',
            color: '#333',
            border: '1px solid #ddd',
            borderRadius: '0.25rem',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
} 