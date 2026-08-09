'use client'

import { useState } from 'react'
import FormModal from '@/components/FormModal'

const steps = [
  { name: 'businessType', label: 'Type of business', type: 'select', options: ['Office', 'Retail store', 'Restaurant / Café', 'Condominium / HOA', 'Medical / Clinic', 'Other'] },
  { name: 'squareFootage', label: 'Approximate space size (sq ft)', type: 'text', placeholder: 'e.g. 3,000' },
  { name: 'frequency', label: 'How often?', type: 'select', options: ['One time', 'Daily', 'Weekly', 'Bi-weekly', 'Monthly'] },
  { name: 'specialNeeds', label: 'Any special requirements?', type: 'textarea', placeholder: 'After-hours access, sanitization, floor care...' },
  { name: 'address', label: 'Business address', type: 'text', placeholder: 'Street, city, ZIP...' },
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'John Smith' },
  { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '(561) 555-0000' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
]

const services = [
  { title: 'Office Cleaning', desc: 'A clean workspace your team and clients will notice.' },
  { title: 'Retail Stores', desc: 'Keep your storefront inviting for every customer.' },
  { title: 'Restaurants & Cafés', desc: 'Sanitary, health-code-ready cleaning for food businesses.' },
  { title: 'Condominiums & HOAs', desc: 'Common area maintenance for residential communities.' },
  { title: 'Specialized Disinfection', desc: 'Deep sanitization for high-touch environments.' },
  { title: 'Custom Programs', desc: 'Cleaning plans tailored to your schedule and needs.' },
]

export default function CommercialCleaningPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Commercial Cleaning</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Professional cleaning programs for offices, stores, restaurants, and communities across South Florida.
          </p>
          <button onClick={() => setModalOpen(true)} className="bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg">
            Request a Free Quote
          </button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">Solutions for Every Business</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-boodow-navy mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-boodow-navy mb-4">Let's talk about your space</h2>
          <p className="text-gray-600 mb-7">Answer a few quick questions and we'll build a plan for your business.</p>
          <button onClick={() => setModalOpen(true)} className="bg-boodow-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-boodow-dark transition shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      <FormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} serviceName="Commercial Cleaning" steps={steps} />
    </main>
  )
}
