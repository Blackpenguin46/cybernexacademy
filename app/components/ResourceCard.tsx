import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ResourceCardProps {
  title: string
  description: string
  link: string
  icon?: string
  category?: string
  isExternal?: boolean
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  link,
  icon,
  category,
  isExternal = false,
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
      <div className="relative h-full overflow-hidden rounded-lg border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/50">
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
          <div className="flex-1">
            <h3 className="font-semibold text-white group-hover:text-gray-300">
              {title}
            </h3>
            {category && (
              <p className="text-sm text-gray-400">{category}</p>
            )}
          </div>
          {isExternal && (
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </div>
        <p className="mt-4 text-sm text-gray-400">{description}</p>
      </div>
    </CardWrapper>
  )
}

export default ResourceCard 