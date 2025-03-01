import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back home
      </a>
    </div>
  )
} 