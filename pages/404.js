import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <a 
        href="/"
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.25rem',
          fontSize: '1rem'
        }}
      >
        Return Home
      </a>
    </div>
  )
} 