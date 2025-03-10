"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { supabase } from "@/lib/supabase"
import { useToast } from "./ui/use-toast"

const FeedbackForm = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("feature")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from("feedback")
        .insert([{ title, description, type }])

      if (error) throw error

      toast({
        title: "Feedback submitted",
        description: "Thank you for your feedback! We'll review it soon.",
      })

      // Reset form
      setTitle("")
      setDescription("")
      setType("feature")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="type" className="block text-sm font-medium text-gray-200">
          Feedback Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-sm text-gray-200 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="feature">New Feature Request</option>
          <option value="resource">New Resource Suggestion</option>
          <option value="section">New Section Suggestion</option>
          <option value="improvement">General Improvement</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-200">
          Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Brief title for your feedback"
          required
          className="bg-gray-900 border-gray-800 text-gray-200"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-200">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Please provide detailed information about your suggestion..."
          required
          className="min-h-[150px] bg-gray-900 border-gray-800 text-gray-200"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </Button>
    </form>
  )
}

export default FeedbackForm 