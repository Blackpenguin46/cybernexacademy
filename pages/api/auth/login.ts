import type { NextApiRequest, NextApiResponse } from "next"
import { sign } from "jsonwebtoken"
import { supabase } from "../../../lib/supabase"

const SECRET_KEY = process.env.JWT_SECRET

if (!SECRET_KEY) {
  console.error("JWT_SECRET is not set in environment variables")
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      if (!SECRET_KEY) {
        throw new Error("JWT_SECRET is not set")
      }

      const token = sign({ userId: data.user.id, email: data.user.email }, SECRET_KEY, { expiresIn: "1h" })

      res.status(200).json({ token })
    } catch (error) {
      console.error("Login error:", error)
      res.status(401).json({ message: "Invalid credentials" })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}

