export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px' 
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1a365d' }}>
        CyberNex Academy
      </h1>
      <p style={{ fontSize: '1.1rem' }}>
        Your gateway to cybersecurity education and training.
      </p>
      <div style={{ 
        background: '#f9f9f9',
        borderRadius: '8px',
        padding: '25px',
        marginTop: '30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ fontSize: '1.8rem' }}>Welcome</h2>
        <p>
          We're working on our platform to bring you the best cybersecurity education experience.
        </p>
      </div>
    </div>
  );
} 