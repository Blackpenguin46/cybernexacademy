import React from 'react'

const Button = ({ 
  className = '', 
  children, 
  variant = 'default', 
  size = 'md',
  ...props 
}) => {
  // Define variant classes
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
    primary: 'bg-blue-700 text-white hover:bg-blue-800'
  }

  // Define size classes
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-6 text-lg'
  }

  return (
    <button
      className={`rounded font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 