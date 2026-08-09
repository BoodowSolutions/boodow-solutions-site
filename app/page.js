'use client'

import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      await axios.post('/api/submit-form', {
        serviceName: 'Contato Geral',
        formData: contactForm,
        timestamp: new Date().toISOString(),
      })

      setMessage('✓ Mensagem enviada com sucesso!')
      setContactForm({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage('Erro ao enviar. Tente novamente.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-boodow-navy to-boodow-dark text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Serviços Profissionais para Casa e Empresa
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Handyman, limpeza residencial e comercial em South Florida. Ferramentas de coordenação para sua empresa.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/servicos"
              className="bg-boodow-gold text-boodow-navy px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition"
            >
              Ver Serviços
            </Link>
            <Link
              href="/produtos"
              className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-boodow-navy transition"
            >
              Nossos Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-boodow-navy mb-8 text-center">
              Entre em Contato Conosco
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-boodow-navy mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-boodow-gold"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-boodow-navy mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-boodow-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-boodow-navy mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-boodow-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-boodow-navy mb-1">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-boodow-gold"
                />
              </div>

              {message && (
                <div className={`p-4 rounded text-sm font-semibold ${message.includes('✓') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-boodow-navy text-white py-3 rounded font-semibold hover:bg-boodow-dark transition disabled:opacity-50"
              >
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-boodow-navy mb-12 text-center">
            Explore Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Handyman',
                description: 'Reparos e manutenção de residências e comerciais',
                link: '/servicos/handyman',
              },
              {
                title: 'Limpeza Residencial',
                description: 'Limpeza profunda e recorrente para sua casa',
                link: '/servicos/limpeza-residencial',
              },
              {
                title: 'Limpeza Comercial',
                description: 'Soluções de limpeza para estabelecimentos',
                link: '/servicos/limpeza-comercial',
              },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.link}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-boodow-gold hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-boodow-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-boodow-gold font-semibold">Ver mais →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
