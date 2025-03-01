import React from 'react'

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }
  
  return (
    <div className={`spinner ${sizes[size]} ${className}`}>
      <div className="animate-spin rounded-full border-t-2 border-b-2 border-blue-500 h-full w-full"></div>
    </div>
  )
}

export default LoadingSpinner 