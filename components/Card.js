import Link from 'next/link'
import Image from 'next/image'

const Card = ({ title, description, href, imageSrc }) => {
  return (
    <Link href={href} className="block bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow">
      {imageSrc && (
        <div className="relative w-full h-48 mb-4">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

export default Card 