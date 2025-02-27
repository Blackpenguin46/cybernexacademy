export default function ContactLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-1/4 mb-8"></div>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-1">
              <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-1">
              <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 