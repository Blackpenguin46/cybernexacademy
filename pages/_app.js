import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { AuthProvider } from '../lib/auth'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Client side error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Something went wrong.</h2>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{ 
              padding: '8px 16px', 
              background: '#0070f3', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer' 
            }}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

export default function MyApp({ Component, pageProps }) {
  // Create client-side Supabase client
  const supabaseClient = createClientComponentClient()

  return (
    <ErrorBoundary>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SessionContextProvider>
    </ErrorBoundary>
  )
} 