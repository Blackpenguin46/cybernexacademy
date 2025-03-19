export default function BasicPage() {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}>
        Basic CyberNex Page
      </h1>
      
      <p style={{
        marginBottom: '16px',
        lineHeight: '1.5',
      }}>
        This is a minimal page designed to load even if there are issues with the main site. 
        If you can see this page but not the main site, there may be an issue with the components 
        or layout on the main pages.
      </p>
      
      <div style={{
        padding: '16px',
        backgroundColor: '#333',
        borderRadius: '4px',
        marginBottom: '20px',
      }}>
        <p style={{
          margin: '0',
          color: '#ccc',
        }}>
          Environment: {process.env.NODE_ENV}
        </p>
      </div>
      
      <div>
        <a 
          href="/"
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#6b46c1',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            marginRight: '12px',
          }}
        >
          Home
        </a>
        
        <a 
          href="/diagnostics"
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#444',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
          }}
        >
          Run Diagnostics
        </a>
      </div>
    </div>
  );
} 