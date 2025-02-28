import Link from 'next/link'

export default function Card({ title, description, href, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {image && (
        <div className="relative h-48 w-full">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {href && (
          <Link 
            href={href}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Learn more →
          </Link>
        )}
      </div>
    </div>
  )
} 