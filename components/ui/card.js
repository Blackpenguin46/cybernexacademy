import React from 'react'

// Simple Card component
function Card({ className = '', children, ...props }) {
  return (
    <div 
      className={`rounded-lg shadow-md overflow-hidden ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}

// Card Header component
function CardHeader({ className = '', children, ...props }) {
  return (
    <div 
      className={`p-6 border-b ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}

// Card Content component
function CardContent({ className = '', children, ...props }) {
  return (
    <div 
      className={`p-6 ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}

// Card Footer component
function CardFooter({ className = '', children, ...props }) {
  return (
    <div 
      className={`p-6 border-t ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}

// Export all components
export { Card, CardHeader, CardContent, CardFooter } 