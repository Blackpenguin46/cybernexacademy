"use client"

import React from 'react'

const Select = ({
  label,
  id,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`
          block w-full px-3 py-2 border rounded-md shadow-sm
          ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 
                   'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}
        `}
        {...props}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default Select 