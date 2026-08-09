'use client'

import { useState } from 'react'
import FormModal from '@/components/FormModal'

const handymanSteps = [
  { name: 'serviceType', label: 'Type of work', type: 'select', options: ['General repairs', 'Installations', 'Maintenance', 'Painting', 'Plumbing', 'Electrical', 'Furniture assembly', 'Other'] },
  { name: 'urgency', label: 'How soon do you need it?', type: 'select', options: ['Today', 'This week', 'Within 2 weeks', 'No rush'] },
  { name: 'description', label: 'Describe the work needed', type: 'textarea', placeholder: 'Tell us what needs to be done...' },
  { name: 'address', label: 'Job address', type: 'text', placeholder: 'Street, city, ZIP...' },
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'John Smith' },
  { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '(561) 555-0000' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
]

const services = [
  { title: 'General Repairs', desc: 'Drywall, doors, windows, fixtures, and everything in between.' },
  { title: 'Installations', desc: 'TV mounting, ceiling fans, shelving, appliances, and more.' },
  { title: 'Painting', desc: 'Interior and exterior painting with clean, sharp results.' },
  { title: 'Plumbing', desc: 'Faucets, garbage disposals, leaks, and minor plumbing work.' },
  { title: 'Electrical', desc: 'Light fixtures, outlets, switches, and small electrical jobs.' },
  { title: 'Furniture Assembly', desc: 'Fast and careful assembly of any furniture brand.' },
]

export default function HandymanPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Handyman Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Skilled professionals for repairs, installations, and maintenance around your home or business. Done right, on time.
          </p>
          <button onClick={() => setModalOpen(true)} className="bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg">
            Request a Free Quote
          </button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">What We Can Help With</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-boodow-navy mb-4">Have a project in mind?</h2>
          <p className="text-gray-600 mb-7">Answer a few quick questions and we'll get back to you with a quote.</p>
          <button onClick={() => setModalOpen(true)} className="bg-boodow-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-boodow-dark transition shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      <FormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} serviceName="Handyman Services" steps={handymanSteps} />
    </main>
  )
}
