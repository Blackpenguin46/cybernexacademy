export function LoadingSpinner({ size = "default", className = "" }: { size?: "small" | "default" | "large", className?: string }) {
  const sizeClasses = {
    small: "h-4 w-4",
    default: "h-6 w-6",
    large: "h-8 w-8"
  }

  return (
    <div className={`animate-spin rounded-full border-2 border-current border-t-transparent ${sizeClasses[size]} ${className}`} />
  )
} 