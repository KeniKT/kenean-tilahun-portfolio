import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') return response.status(405).json({ message: 'Method not allowed.' })
  const { name, email, message, company } = request.body ?? {}
  if (company) return response.status(200).json({ message: 'Message received.' })
  if (typeof name !== 'string' || !name.trim() || typeof email !== 'string' || !emailPattern.test(email) || typeof message !== 'string' || !message.trim()) return response.status(400).json({ message: 'Please provide a name, valid email, and message.' })
  if (name.length > 120 || email.length > 254 || message.length > 5000) return response.status(400).json({ message: 'One or more fields are too long.' })
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) return response.status(503).json({ message: 'The contact form is not configured yet. Please email directly.' })
  try {
    const resend = new Resend(RESEND_API_KEY)
    const { error } = await resend.emails.send({ from: CONTACT_FROM_EMAIL, to: CONTACT_TO_EMAIL, replyTo: email.trim(), subject: `Portfolio message from ${name.trim()}`, text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}` })
    if (error) throw error
    return response.status(200).json({ message: 'Message sent.' })
  } catch { return response.status(500).json({ message: 'Unable to send your message. Please email directly.' }) }
}
