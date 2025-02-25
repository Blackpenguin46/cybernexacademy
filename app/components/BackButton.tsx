"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const BackButton = ({ href }: { href: string }) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </button>
  )
}

export default BackButton

