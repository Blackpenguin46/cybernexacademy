import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px' 
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1a365d' }}>
        About CyberNex Academy
      </h1>
      <p style={{ fontSize: '1.1rem' }}>
        We are dedicated to providing top-quality cybersecurity education for all skill levels.
      </p>
      <div style={{ 
        background: '#f9f9f9',
        borderRadius: '8px',
        padding: '25px',
        marginTop: '30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ fontSize: '1.8rem' }}>Our Mission</h2>
        <p>
          Our mission is to make cybersecurity education accessible to everyone, 
          empowering individuals and organizations to protect themselves in the digital world.
        </p>
      </div>
    </div>
  );
} 