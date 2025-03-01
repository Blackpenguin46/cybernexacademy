import Link from 'next/link';

export default function SignupSuccess() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '500px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        color: '#333',
        marginBottom: '20px'
      }}>
        Sign Up Successful!
      </h1>
      
      <div style={{
        backgroundColor: '#EDF7ED',
        color: '#1E4620',
        padding: '15px',
        borderRadius: '4px',
        marginBottom: '25px'
      }}>
        <p>Your account has been created successfully.</p>
        <p>Please check your email for verification instructions.</p>
      </div>
      
      <Link href="/login" style={{
        display: 'inline-block',
        backgroundColor: '#3182ce',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        textDecoration: 'none',
        fontSize: '16px'
      }}>
        Go to Login
      </Link>
    </div>
  );
} 