'use client'

import { useState } from 'react'
import FormModal from '@/components/FormModal'

const handymanSteps = [
  {
    name: 'serviceType',
    label: 'Tipo de trabalho',
    type: 'select',
    placeholder: '',
    options: [
      'Reparos gerais',
      'Instalações',
      'Manutenção',
      'Pintura',
      'Hidráulica',
      'Elétrica',
      'Outro',
    ],
  },
  {
    name: 'urgency',
    label: 'Urgência',
    type: 'select',
    placeholder: '',
    options: ['Hoje', 'Esta semana', 'Próximas 2 semanas', 'Sem pressa'],
  },
  {
    name: 'description',
    label: 'Descreva o trabalho necessário',
    type: 'textarea',
    placeholder: 'Detalhe o que precisa ser feito...',
  },
  {
    name: 'address',
    label: 'Endereço do trabalho',
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

export default function HandymanPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-boodow-navy to-boodow-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Serviços Handyman</h1>
          <p className="text-xl text-gray-200">
            Reparos profissionais, instalações e manutenção para sua casa ou empresa
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none mb-12">
            <h2 className="text-3xl font-bold text-boodow-navy mb-6">
              Soluções Profissionais de Handyman
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Nossos profissionais estão preparados para resolver qualquer problema de manutenção e reparo em sua propriedade. Desde pequenas instalações até grandes projetos, trabalhamos com qualidade e atenção aos detalhes.
            </p>

            <h3 className="text-2xl font-bold text-boodow-navy mt-8 mb-4">
              Serviços Oferecidos
            </h3>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li>✓ Reparos gerais de residências e comerciais</li>
              <li>✓ Instalações de acessórios e equipamentos</li>
              <li>✓ Manutenção preventiva e corretiva</li>
              <li>✓ Serviços de pintura</li>
              <li>✓ Reparos hidráulicos e elétricos básicos</li>
              <li>✓ Montagem de móveis e estruturas</li>
            </ul>

            <h3 className="text-2xl font-bold text-boodow-navy mt-8 mb-4">
              Por Que Escolher Nosso Handyman?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Profissionais experientes e confiáveis</li>
              <li>✓ Atendimento rápido e eficiente</li>
              <li>✓ Preços competitivos</li>
              <li>✓ Cobertura em toda South Florida</li>
              <li>✓ Garantia de qualidade no trabalho</li>
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
        serviceName="Handyman"
        steps={handymanSteps}
      />
    </div>
  )
}
