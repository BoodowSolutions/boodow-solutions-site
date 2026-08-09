'use client'

import { useState } from 'react'
import FormModal from '@/components/FormModal'

const commercialSteps = [
  {
    name: 'businessType',
    label: 'Tipo de estabelecimento',
    type: 'select',
    placeholder: '',
    options: [
      'Escritório',
      'Loja',
      'Restaurante/Café',
      'Clínica/Consultório',
      'Condomínio',
      'Outro',
    ],
  },
  {
    name: 'squareFootage',
    label: 'Metragem aproximada',
    type: 'text',
    placeholder: 'Ex: 500 m²',
  },
  {
    name: 'frequency',
    label: 'Frequência desejada',
    type: 'select',
    placeholder: '',
    options: [
      'Diária',
      'Três vezes por semana',
      'Duas vezes por semana',
      'Semanal',
      'Mensal',
    ],
  },
  {
    name: 'specialNeeds',
    label: 'Necessidades especiais',
    type: 'textarea',
    placeholder: 'Desinfecção, limpeza de carpete, vidros, etc...',
  },
  {
    name: 'address',
    label: 'Endereço do estabelecimento',
    type: 'text',
    placeholder: 'Rua, bairro, Boca Raton...',
  },
  {
    name: 'name',
    label: 'Seu nome / Responsável',
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

export default function CommercialCleaningPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-boodow-navy to-boodow-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Limpeza Comercial</h1>
          <p className="text-xl text-gray-200">
            Mantenha seu negócio limpo, profissional e higiênico
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none mb-12">
            <h2 className="text-3xl font-bold text-boodow-navy mb-6">
              Soluções de Limpeza Para Seu Negócio
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Um ambiente limpo e bem mantido reflete profissionalismo e cuidado com seus clientes e funcionários. Oferecemos serviços de limpeza comercial personalizados para sua empresa.
            </p>

            <h3 className="text-2xl font-bold text-boodow-navy mt-8 mb-4">
              Para Quem Oferecemos
            </h3>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li>✓ Escritórios e espaços de trabalho</li>
              <li>✓ Lojas e estabelecimentos de varejo</li>
              <li>✓ Restaurantes e cafés</li>
              <li>✓ Clínicas e consultórios</li>
              <li>✓ Condomínios e áreas comuns</li>
              <li>✓ Espaços industriais</li>
            </ul>

            <h3 className="text-2xl font-bold text-boodow-navy mt-8 mb-4">
              Nossos Serviços
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Limpeza diária ou conforme programação</li>
              <li>✓ Desinfecção de ambientes e superfícies</li>
              <li>✓ Limpeza de pisos, carpete e vidros</li>
              <li>✓ Organização e retirada de lixo</li>
              <li>✓ Serviços de limpeza especializada</li>
              <li>✓ Atendimento flexível e confiável</li>
            </ul>

            <h3 className="text-2xl font-bold text-boodow-navy mt-8 mb-4">
              Por Que Escolher Boodow Cleaning?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Equipe profissional e qualificada</li>
              <li>✓ Produtos de limpeza de alto padrão</li>
              <li>✓ Agendamento flexível e confiável</li>
              <li>✓ Atenção aos detalhes e qualidade</li>
              <li>✓ Preços competitivos e transparentes</li>
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
        serviceName="Limpeza Comercial"
        steps={commercialSteps}
      />
    </div>
  )
}
