import React from 'react'

interface SectionHeaderProps {
  title: string
  description: string
  icon?: React.ReactNode
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, icon }) => {
  return (
    <div className="relative w-full py-20 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-blue-900/20 to-gray-900/80 opacity-70" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {icon && (
            <div className="mb-6 flex justify-center">
              {icon}
            </div>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-purple-500">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:text-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader 