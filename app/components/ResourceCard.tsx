import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface ResourceCardProps {
  title: string
  description: string
  link: string
  icon?: string
  category?: string
  isExternal?: boolean
  isHighlighted?: boolean
  accentColor?: string
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  link,
  icon,
  category,
  isExternal = false,
  isHighlighted = false,
  accentColor,
}) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isExternal) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {children}
        </a>
      )
    }
    return <Link href={link}>{children}</Link>
  }

  return (
    <CardWrapper>
      <div className={`relative h-full overflow-hidden rounded-lg border ${isHighlighted ? 'border-yellow-500 shadow-lg shadow-yellow-500/20' : 'border-gray-800'} bg-black p-6 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/50`}>
        <div className="flex items-center gap-4">
          {icon && (
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={icon}
                alt={`${title} icon`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center">
              {title}
              {isHighlighted && <Star className="ml-2 h-4 w-4 text-yellow-500" fill="currentColor" />}
            </h3>
            {category && (
              <div className={`text-sm ${accentColor ? `text-${accentColor}-400` : 'text-blue-400'}`}>
                {category}
              </div>
            )}
          </div>
        </div>
        <p className="mt-4 text-gray-400">{description}</p>
      </div>
    </CardWrapper>
  )
}

export default ResourceCard 