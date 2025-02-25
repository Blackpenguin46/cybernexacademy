interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {children}
    </div>
  )
} 