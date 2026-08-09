'use client'

import Link from 'next/link'

export default function BoodowCleanPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-boodow-navy text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Limpeza Profissional <span className="text-boodow-gold">ao Seu Alcance</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Encontre e contrate profissionais de limpeza qualificados em South Florida. Avaliações verificadas, preços transparentes e garantia de qualidade.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  className="bg-boodow-gold text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105"
                >
                  Download Google Play
                </Link>
                <button className="border-2 border-boodow-gold text-boodow-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-boodow-gold hover:text-white transition">
                  Solicitar Demonstração
                </button>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl overflow-hidden flex items-end justify-center">
              <div className="text-center pb-12">
                <div className="text-6xl mb-4">✓</div>
                <p className="text-emerald-800 font-bold text-lg">Profissionais Verificados</p>
                <p className="text-emerald-600 text-sm">Avaliações autênticas de clientes reais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: '5000+', label: 'Clientes Ativos' },
            { number: '800+', label: 'Profissionais' },
            { number: '4.8★', label: 'Avaliação Média' },
            { number: '100%', label: 'Satisfação' },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold text-boodow-navy mb-2">{stat.number}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Customers */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-4">
            Para Clientes
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Encontre o profissional certo para sua casa
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Busque Facilmente',
                description: 'Encontre profissionais de limpeza perto de você. Filtre por serviço, avaliação e preço.',
              },
              {
                icon: '⭐',
                title: 'Avaliações Verificadas',
                description: 'Veja avaliações reais de clientes anteriores. Transparência total sobre qualidade.',
              },
              {
                icon: '📅',
                title: 'Agende com Facilidade',
                description: 'Escolha data e hora que funciona para você. Confirmação instantânea no app.',
              },
              {
                icon: '💰',
                title: 'Preços Justos',
                description: 'Orçamento transparente. Sem surpresas ou taxas ocultas no final.',
              },
              {
                icon: '🛡️',
                title: 'Proteção Garantida',
                description: 'Todos os profissionais são verificados e segurados. Garantia de qualidade.',
              },
              {
                icon: '📱',
                title: 'Suporte 24/7',
                description: 'Chat com profissional antes de agendar. Suporte disponível a qualquer momento.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-boodow-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            Tipos de Limpeza Disponíveis
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Limpeza Residencial',
                services: [
                  'Limpeza profunda completa',
                  'Limpeza recorrente (semanal/quinzenal/mensal)',
                  'Pós-construção',
                  'Limpeza de mudança',
                  'Limpeza de carpete',
                  'Limpeza de vidros',
                ],
                color: 'from-blue-50 to-cyan-50',
              },
              {
                title: 'Serviços Especializados',
                services: [
                  'Desinfecção e sanitização',
                  'Limpeza de organização',
                  'Limpeza de condominios',
                  'Window cleaning profissional',
                  'Limpeza pós-evento',
                  'Limpeza de áreas comuns',
                ],
                color: 'from-emerald-50 to-teal-50',
              },
            ].map((category, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 border border-gray-200`}>
                <h3 className="text-2xl font-bold text-boodow-navy mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Professionals */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-4">
            Para Profissionais de Limpeza
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Cresça seu negócio encontrando mais clientes
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-boodow-navy mb-6">
                Por que se juntar ao Boodow Clean?
              </h3>
              <ul className="space-y-4">
                {[
                  'Encontre mais clientes facilmente',
                  'Gerencie seu calendário e agendamentos',
                  'Receba pagamentos de forma segura',
                  'Construa sua reputação com avaliações',
                  'Ferramentas gratuitas de gestão',
                  'Sem taxas escondidas',
                  'Suporte dedicado',
                  'Crescimento garantido',
                ].map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-12 text-center">
              <div className="text-6xl mb-4">📈</div>
              <h4 className="text-2xl font-bold text-emerald-800 mb-2">Cresça Seu Negócio</h4>
              <p className="text-emerald-700 mb-6">
                Profissionais ganham 30% mais clientes em seu primeiro mês no Boodow Clean
              </p>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition">
                Começar como Profissional
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-boodow-navy mb-4">
            Planos de Assinatura
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Acesso ao marketplace de limpeza profissional
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Cliente',
                price: 'Gratuito',
                period: '',
                features: [
                  'Buscar profissionais',
                  'Fazer avaliações',
                  'Agendar serviços',
                  'Chat com profissional',
                  'Histórico de serviços',
                ],
                highlighted: false,
              },
              {
                name: 'Premium',
                price: '$19.90',
                period: '/mês',
                features: [
                  'Tudo de Cliente',
                  'Desconto de 10% em serviços',
                  'Prioridade de agendamento',
                  'Programa de pontos',
                  'Acesso a serviços exclusivos',
                  '90 dias grátis no cadastro',
                ],
                highlighted: true,
              },
              {
                name: 'Profissional',
                price: '$9.90',
                period: '/mês',
                features: [
                  'Lista seu perfil',
                  'Receba leads qualificados',
                  'Gerencie agendamentos',
                  'Ferramentas de gestão',
                  'Perfil profissional completo',
                ],
                highlighted: false,
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 transition ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-2xl scale-105'
                    : 'bg-gray-50 border border-gray-200 text-boodow-navy'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-75">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-boodow-gold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold transition ${
                    plan.highlighted
                      ? 'bg-boodow-gold text-emerald-700 hover:bg-yellow-300'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            O Que Nossos Usuários Dizem
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marina L.',
                role: 'Cliente',
                text: 'Achei super fácil usar o app. Em 5 minutos agendei a limpeza da minha casa. O profissional chegou no horário e fez um trabalho impecável!',
                rating: 5,
              },
              {
                name: 'Carlos R.',
                role: 'Profissional',
                text: 'Desde que me registrei no Boodow Clean, meu negócio cresceu 40%. Recebo leads qualificados todos os dias e os clientes já vêm satisfeitos.',
                rating: 5,
              },
              {
                name: 'Ana S.',
                role: 'Cliente',
                text: 'Uso Boodow Clean há 6 meses para limpeza recorrente. Profissionalismo, qualidade e confiança. Recomendo para todas as minhas amigas!',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-boodow-navy">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            Dúvidas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Como encontro um profissional na minha área?',
                a: 'Abra o app, digite seu endereço e escolha o tipo de limpeza. Você verá todos os profissionais disponíveis com avaliações e preços.',
              },
              {
                q: 'Os profissionais são verificados?',
                a: 'Sim! Todos os profissionais passam por verificação de identidade, histórico e referências antes de serem listados no app.',
              },
              {
                q: 'Qual é a política de cancelamento?',
                a: 'Você pode cancelar agendamentos com 24 horas de antecedência sem custo. Cancelamentos com menos de 24h podem ter taxa.',
              },
              {
                q: 'Como é garantida a qualidade do trabalho?',
                a: 'Se não estiver satisfeito, oferecemos reembolso de 100%. Além disso, você avalia o profissional após cada serviço.',
              },
              {
                q: 'Como são feitos os pagamentos?',
                a: 'Os pagamentos são processados pelo app de forma segura. Você paga após a conclusão do serviço.',
              },
              {
                q: 'Sou profissional, como me registro?',
                a: 'Baixe o app e preencha seu perfil. Após verificação (1-2 dias), você já começará a receber clientes.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-emerald-600 transition">
                <h3 className="font-bold text-boodow-navy text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Encontre Limpeza Profissional Hoje
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Junte-se a 5000+ clientes satisfeitos no South Florida
          </p>
          <Link
            href="https://play.google.com/store"
            target="_blank"
            className="inline-block bg-boodow-gold text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Download Boodow Clean Agora
          </Link>
        </div>
      </section>

      {/* Legal */}
      <section className="py-12 px-4 bg-gray-50 text-center text-sm text-gray-600">
        <Link href="/boodow-clean/terms" className="hover:text-boodow-navy mr-4">
          Terms
        </Link>
        <Link href="/boodow-clean/privacy" className="hover:text-boodow-navy">
          Privacy
        </Link>
      </section>
    </div>
  )
}
