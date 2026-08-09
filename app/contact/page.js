'use client'

import { useState } from 'react'
import axios from 'axios'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      await axios.post('/api/submit-form', {
        serviceName: 'Contact Form',
        formData,
        timestamp: new Date().toISOString(),
      })
      setMessage('✓ Message sent! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Questions, quotes, or partnerships — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-boodow-navy mb-1">Email</h3>
              <p className="text-sm text-gray-600">info@boodowsolutions.com</p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-boodow-navy mb-1">Location</h3>
              <p className="text-sm text-gray-600">20423 State Road 7, Suite 357<br/>Boca Raton, FL 33498</p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-boodow-navy mb-1">Service Area</h3>
              <p className="text-sm text-gray-600">Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, and surrounding South Florida areas.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-boodow-navy/30 focus:border-boodow-navy"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(561) 555-0000" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-boodow-navy/30 focus:border-boodow-navy"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-boodow-navy/30 focus:border-boodow-navy"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-boodow-navy/30 focus:border-boodow-navy"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
              <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us more..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-boodow-navy/30 focus:border-boodow-navy resize-none"/>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-boodow-navy text-white font-bold py-4 rounded-xl hover:bg-boodow-dark transition disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {message && <p className={`text-center text-sm font-medium ${message.startsWith('✓') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}
