import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar({ links = [] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:block lg:flex-shrink-0`}>
        <div className="h-full flex flex-col w-64 border-r border-gray-200 bg-white">
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-4 py-4 space-y-1">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  {link.icon && (
                    <span className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500">
                      {link.icon}
                    </span>
                  )}
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
} 