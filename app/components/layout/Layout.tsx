import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { Toast } from '../ui/Toast'
import { useAuth } from '@/contexts/AuthContext'

type LayoutProps = {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

export function Layout({ 
  children, 
  showNav = true, 
  showFooter = true 
}: LayoutProps) {
  const { error, clearError } = useAuth()

  return (
    <div className="min-h-screen flex flex-col">
      {showNav && <Navigation />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
      {error && (
        <Toast
          message={error}
          type="error"
          onClose={clearError}
        />
      )}
    </div>
  )
} 