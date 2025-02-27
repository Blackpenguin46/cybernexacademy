"use client"

import { useState } from 'react'
import { Layout } from '@/components/layout'
import { Button, Input, Card } from '@/components/ui'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Mock form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setFormData({ name: '', email: '', message: '' })
    setSending(false)
  }

  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <Card className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              label="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Card>
      </main>
    </Layout>
  )
} 