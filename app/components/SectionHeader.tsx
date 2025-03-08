import React from 'react'

interface SectionHeaderProps {
  title: string
  description: string
  icon?: React.ReactNode
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, icon }) => {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-50" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {icon && (
            <div className="mb-4 flex justify-center">
              {icon}
            </div>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader 