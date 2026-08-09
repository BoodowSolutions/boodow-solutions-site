'use client'

import { useState } from 'react'
import FormModal from '@/components/FormModal'

const residentialSteps = [
  {
    name: 'cleaningType',
    label: 'Tipo de limpeza',
    type: 'select',
    placeholder: '',
    options: [
      'Limpeza profunda',
      'Limpeza recorrente',
      'Pós-construção',
      'Mudança',
      'Outro',
    ],
  },
  {
    name: 'squareFootage',
    label: 'Metragem aproximada',
    type: 'text',
    placeholder: 'Ex: 150 m²',
  },
  {
    name: 'frequency',
    label: 'Frequência desejada',
    type: 'select',
    placeholder: '',
    options: [
      'Uma única vez',
      'Semanal',
      'Quinzenal',
      'Mensal',
    ],
  },
  {
    name: 'preferredDate',
    label: 'Data preferida',
    type: 'text',
    placeholder: 'Ex: Próxima segunda-feira',
  },
  {
    name: 'address',
    label: 'Endereço da propriedade',
    type: 'text',
    placeholder: 'Rua, bairro, Boca Raton...',
  },
  {
    name: 'name',
    label: 'Seu nome',
    type: 'text',
    placeholder: 'João Silva',
  },
  {
    name: 'phone',
    label: 'Telefone para contato',
    type: 'tel',
    placeholder: '(561) 555-0000',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'seu@email.com',
  },
]

export default function ResidentialCleaningPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-boodow-navy to-boodow-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Limpeza Residencial</h1>
          <p className="text-xl text-gray-200">
            Deixe sua casa impecável com nossos profissionais de limpeza
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none mb-12">
            <h2 className="text-3xl font-bold text-boodow-navy mb-6">
              Limpeza Profissional Para Sua Residência
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Nossos serviços de limpeza residencial oferecem a qualidade e confiabilidade que sua casa merece. Utilizamos produtos profissionais e técnicas eficazes para deixar seu lar impecável.
            </p>

            <h3 className="text-2xl font-bold text-boodow-navy mt-8 mb-4">
              Tipos de Limpeza
            </h3>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li><strong>Limpeza Profunda:</strong> Limpeza completa de todos os ambientes, incluindo áreas difíceis de alcançar</li>
              <li><strong>Limpeza Recorrente:</strong> Manutenção semanal, quinzenal ou mensal de sua casa</li>
              <li><strong>Pós-construção:</strong> Remoção de poeira e resíduos após reformas</li>
              <li><strong>Limpeza de Mudança:</strong> Preparação de imóvel antes de uma mudança</li>
            </ul>

            <h3 className="text-2xl font-bold text-boodow-navy mt-8 mb-4">
              O Que Está Incluído
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Limpeza de pisos, azulejos e carpete</li>
              <li>✓ Limpeza de cozinha e banheiros</li>
              <li>✓ Limpeza de vidros e espelhos</li>
              <li>✓ Limpeza de móveis</li>
              <li>✓ Remoção de lixo</li>
              <li>✓ Desinfecção com produtos de qualidade</li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-boodow-navy text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-boodow-dark transition"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      <FormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName="Limpeza Residencial"
        steps={residentialSteps}
      />
    </div>
  )
}
