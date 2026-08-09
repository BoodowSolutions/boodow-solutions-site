'use client'

import { useState } from 'react'
import FormModal from '@/components/FormModal'

const steps = [
  { name: 'cleaningType', label: 'Type of cleaning', type: 'select', options: ['Standard cleaning', 'Deep cleaning', 'Move-in / Move-out', 'Post-construction', 'Window cleaning'] },
  { name: 'squareFootage', label: 'Approximate home size (sq ft)', type: 'text', placeholder: 'e.g. 1,500' },
  { name: 'frequency', label: 'How often?', type: 'select', options: ['One time', 'Weekly', 'Bi-weekly', 'Monthly'] },
  { name: 'preferredDate', label: 'Preferred date', type: 'text', placeholder: 'e.g. Next Monday morning' },
  { name: 'address', label: 'Home address', type: 'text', placeholder: 'Street, city, ZIP...' },
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'John Smith' },
  { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '(561) 555-0000' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
]

const services = [
  { title: 'Standard Cleaning', desc: 'Regular upkeep to keep your home fresh and tidy.' },
  { title: 'Deep Cleaning', desc: 'A thorough, top-to-bottom clean for every corner.' },
  { title: 'Move-In / Move-Out', desc: 'Start fresh in your new place or leave the old one spotless.' },
  { title: 'Post-Construction', desc: 'Dust and debris removal after renovations or construction.' },
  { title: 'Window Cleaning', desc: 'Crystal-clear windows inside and out.' },
  { title: 'Recurring Service', desc: 'Weekly, bi-weekly, or monthly plans that fit your routine.' },
]

export default function ResidentialCleaningPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Residential Cleaning</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            A cleaner, healthier home without lifting a finger. Trusted professionals, flexible scheduling, spotless results.
          </p>
          <button onClick={() => setModalOpen(true)} className="bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg">
            Request a Free Quote
          </button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">Our Cleaning Services</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-boodow-navy mb-4">Ready for a spotless home?</h2>
          <p className="text-gray-600 mb-7">Answer a few quick questions and we'll send you a personalized quote.</p>
          <button onClick={() => setModalOpen(true)} className="bg-boodow-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-boodow-dark transition shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      <FormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} serviceName="Residential Cleaning" steps={steps} />
    </main>
  )
}
