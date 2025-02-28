import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client with service role key for admin privileges
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  // Verify that the request is authenticated somehow
  // This is an example - in a real app, you'd need better auth checking
  const apiKey = req.headers['x-api-key']
  if (apiKey !== process.env.INTERNAL_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (req.method === 'GET') {
    const { table, id } = req.query
    
    if (!table) {
      return res.status(400).json({ error: 'Table is required' })
    }
    
    try {
      let query = supabase.from(table).select('*')
      
      if (id) {
        query = query.eq('id', id)
      }
      
      const { data, error } = await query
      
      if (error) throw error
      
      res.status(200).json({ data })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  } 
  else if (req.method === 'POST') {
    const { table, record } = req.body
    
    if (!table || !record) {
      return res.status(400).json({ error: 'Table and record are required' })
    }
    
    try {
      const { data, error } = await supabase
        .from(table)
        .insert(record)
      
      if (error) throw error
      
      res.status(200).json({ data })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  else if (req.method === 'PUT') {
    const { table, id, record } = req.body
    
    if (!table || !id || !record) {
      return res.status(400).json({ error: 'Table, id, and record are required' })
    }
    
    try {
      const { data, error } = await supabase
        .from(table)
        .update(record)
        .eq('id', id)
      
      if (error) throw error
      
      res.status(200).json({ data })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  else if (req.method === 'DELETE') {
    const { table, id } = req.body
    
    if (!table || !id) {
      return res.status(400).json({ error: 'Table and id are required' })
    }
    
    try {
      const { data, error } = await supabase
        .from(table)
        .delete()
        .eq('id', id)
      
      if (error) throw error
      
      res.status(200).json({ data })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
} 