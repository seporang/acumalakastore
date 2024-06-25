// src/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from './supabaseClient'

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const { error, user } = await supabase.auth.signUp({ email, password })

    if (error) {
      return res.status(400).json({ error: error.message })
    }

    return res.status(200).json({ user })
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
