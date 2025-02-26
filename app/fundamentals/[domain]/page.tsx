"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { createClientComponent } from "@/lib/auth"

type Topic = {
  id: string
  title: string
  content: string
  domain: string
  order: number
}

export default function DomainPage() {
  const params = useParams()
  const domain = params.domain as string
  const [topics, setTopics] = useState<Topic[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)
  const supabase = createClientComponent()

  useEffect(() => {
    async function fetchTopics() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('topics')
          .select('*')
          .eq('domain', domain)
          .order('order', { ascending: true })
        
        if (error) throw error
        
        setTopics(data || [])
      } catch (error: unknown) {
        console.error('Error fetching topics:', error)
        const err = error as Error
        setError(err.message || 'Failed to load topics')
      } finally {
        setLoading(false)
      }
    }

    if (domain) {
      fetchTopics()
    }
  }, [domain, supabase])

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link href="/fundamentals" className="inline-flex items-center text-blue-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Fundamentals
        </Link>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/fundamentals" className="inline-flex items-center text-blue-600 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Fundamentals
      </Link>
      
      <h1 className="text-3xl font-bold mb-8 capitalize">{domain.replace(/-/g, ' ')}</h1>
      
      {topics.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No topics found for this domain.
        </div>
      ) : (
        <div className="space-y-6">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleTopic(topic.id)}
                className="w-full px-6 py-4 flex justify-between items-center text-left font-medium"
              >
                <span>{topic.title}</span>
                {expandedTopic === topic.id ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              
              {expandedTopic === topic.id && (
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <div dangerouslySetInnerHTML={{ __html: topic.content }} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

