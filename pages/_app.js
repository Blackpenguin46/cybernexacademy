import { useEffect } from 'react';
import '../styles/globals.css'
import { AuthProvider } from '../lib/auth'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    console.log('Client-side rendering');
  }
  
  return <Component {...pageProps} />;
}

export default MyApp; 