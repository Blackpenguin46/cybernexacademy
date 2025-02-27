type SpinnerProps = {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function LoadingSpinner({ size = 'medium', className = '' }: SpinnerProps) {
  const sizes = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12'
  }

  return (
    <div className={`${sizes[size]} ${className}`}>
      <div className="animate-spin rounded-full border-t-2 border-b-2 border-gray-900 h-full w-full"></div>
    </div>
  )
} 