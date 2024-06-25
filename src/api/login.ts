// src/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from './supabaseClient'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const { error, session } = await supabase.auth.signIn({ email, password })

    if (error) {
      return res.status(401).json({ error: error.message })
    }

    return res.status(200).json({ session })
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
