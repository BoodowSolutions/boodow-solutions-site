'use client'

import Link from 'next/link'

export default function ServicosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-boodow-navy to-boodow-dark text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Soluções profissionais de handyman, limpeza residencial e comercial em toda South Florida
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔧',
                title: 'Handyman',
                description: 'Reparos profissionais, instalações e manutenção para residências e comerciais',
                features: [
                  'Reparos gerais',
                  'Instalações diversas',
                  'Manutenção preventiva',
                  'Pintura',
                  'Serviços hidráulicos e elétricos',
                  'Montagem de móveis',
                ],
                link: '/servicos/handyman',
                color: 'from-blue-50 to-cyan-50',
              },
              {
                icon: '🏠',
                title: 'Limpeza Residencial',
                description: 'Limpeza profunda, recorrente e especializada para sua casa',
                features: [
                  'Limpeza profunda completa',
                  'Limpeza recorrente (semanal/quinzenal/mensal)',
                  'Pós-construção',
                  'Limpeza de mudança',
                  'Limpeza de carpete e tapetes',
                  'Limpeza de vidros',
                ],
                link: '/servicos/limpeza-residencial',
                color: 'from-emerald-50 to-teal-50',
              },
              {
                icon: '🏢',
                title: 'Limpeza Comercial',
                description: 'Soluções de limpeza profissional para empresas e estabelecimentos',
                features: [
                  'Limpeza de escritórios',
                  'Limpeza de lojas e varejo',
                  'Limpeza de restaurantes e cafés',
                  'Limpeza de condomínios',
                  'Desinfecção especializada',
                  'Serviços recorrentes customizados',
                ],
                link: '/servicos/limpeza-comercial',
                color: 'from-purple-50 to-pink-50',
              },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.link}
                className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-boodow-gold transition group cursor-pointer`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h2 className="text-2xl font-bold text-boodow-navy mb-3">{service.title}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex gap-2 text-gray-700">
                      <span className="text-boodow-gold font-bold">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-boodow-navy text-white py-3 rounded-lg font-bold group-hover:bg-boodow-dark transition">
                  Ver Detalhes e Solicitar Orçamento
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            Por Que Escolher Boodow?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: '⭐',
                title: 'Profissionais Qualificados',
                description: 'Todos os profissionais são verificados e com experiência comprovada',
              },
              {
                icon: '💰',
                title: 'Preços Transparentes',
                description: 'Orçamentos claros sem surpresas ou taxas ocultas',
              },
              {
                icon: '📅',
                title: 'Agendamento Fácil',
                description: 'Agende pelo app em segundos, receba confirmação instantânea',
              },
              {
                icon: '🛡️',
                title: 'Garantia de Qualidade',
                description: 'Profissionais segurados, garantia de satisfação ou reembolso',
              },
              {
                icon: '📱',
                title: 'Rastreamento em Tempo Real',
                description: 'Acompanhe o trabalho pelo app com atualizações ao vivo',
              },
              {
                icon: '💬',
                title: 'Suporte Dedicado',
                description: 'Chat com profissional antes e durante o serviço',
              },
              {
                icon: '⚡',
                title: 'Serviço Rápido',
                description: 'Resposta rápida a solicitações, atendimento em 24-48h',
              },
              {
                icon: '🌟',
                title: 'Avaliações Verificadas',
                description: 'Veja avaliações reais de clientes satisfeitos',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-boodow-navy mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            Áreas de Atendimento
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-boodow-navy mb-6">South Florida & Arredores</h3>
              <ul className="space-y-3">
                {[
                  'Boca Raton',
                  'West Palm Beach',
                  'Miami',
                  'Fort Lauderdale',
                  'Miami Gardens',
                  'Pompano Beach',
                  'Coral Springs',
                  'Plantation',
                  'Sunrise',
                  'Deerfield Beach',
                ].map((city, i) => (
                  <li key={i} className="flex gap-2 text-gray-700">
                    <span className="text-boodow-gold">📍</span>
                    <span>{city}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-boodow-navy to-boodow-dark text-white rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Sua Cidade Não Está na Lista?</h3>
              <p className="mb-6 opacity-95">
                Expandimos constantemente. Entre em contato para saber se atendemos sua área ou para solicitar serviço.
              </p>
              <button className="bg-boodow-gold text-boodow-navy py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
                Contatar Boodow
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-boodow-navy to-boodow-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Escolha seu serviço e faça uma solicitação agora
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/servicos/handyman"
              className="bg-boodow-gold text-boodow-navy px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Handyman
            </Link>
            <Link
              href="/servicos/limpeza-residencial"
              className="border-2 border-boodow-gold text-boodow-gold px-8 py-4 rounded-lg font-bold hover:bg-boodow-gold hover:text-boodow-navy transition"
            >
              Limpeza Residencial
            </Link>
            <Link
              href="/servicos/limpeza-comercial"
              className="border-2 border-boodow-gold text-boodow-gold px-8 py-4 rounded-lg font-bold hover:bg-boodow-gold hover:text-boodow-navy transition"
            >
              Limpeza Comercial
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
