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
  useEffect(() => {
    // Add global error handler
    window.addEventListener('error', (event) => {
      console.error('Caught in global handler:', event.error);
    });
  }, []);

  return (
    <AuthProvider>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </AuthProvider>
  )
}

export default MyApp 