'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BoodowOrdersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-boodow-navy via-boodow-dark to-purple-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Gerencie Trabalhos com <span className="text-boodow-gold">Inteligência</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Coordene ordens de serviço, rastreie progresso em tempo real e aumente a produtividade da sua equipe com a plataforma Boodow Orders.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  className="bg-boodow-gold text-boodow-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105"
                >
                  Download Google Play
                </Link>
                <button className="border-2 border-boodow-gold text-boodow-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-boodow-gold hover:text-boodow-navy transition">
                  Ver Demo
                </button>
              </div>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/boodow-orders-screenshot.png"
                  alt="Boodow Orders - Tela Insights"
                  width={400}
                  height={800}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            Funcionalidades Poderosas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Dashboard em Tempo Real',
                description: 'Visualize insights importantes: ordens abertas, receita pendente, status de conclusão e histórico de projetos.',
              },
              {
                icon: '📋',
                title: 'Gerenciamento de Ordens',
                description: 'Crie, acompanhe e conclua ordens de serviço. Organize tudo em um só lugar com interface intuitiva.',
              },
              {
                icon: '👥',
                title: 'Gestão de Parceiros',
                description: 'Conecte-se com empresas e parceiros. Coordene trabalhos colaborativamente e aumente receita.',
              },
              {
                icon: '💰',
                title: 'Rastreamento de Receita',
                description: 'Acompanhe valores pendentes, completados e histórico. Entenda o desempenho do seu negócio.',
              },
              {
                icon: '⚡',
                title: 'Performance & Analytics',
                description: 'Métricas detalhadas de trabalhos por status. Identifique tendências e oportunidades.',
              },
              {
                icon: '🔔',
                title: 'Notificações em Tempo Real',
                description: 'Receba alerts sobre novas ordens, mudanças de status e updates importantes.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-boodow-gold transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-boodow-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            Interface Profissional
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-boodow-navy mb-6">
                Insights Detalhados
              </h3>
              <ul className="space-y-4">
                {[
                  'Visualize ordens pendentes e receita em aberto',
                  'Acompanhe parceiros mais ativos',
                  'Análise de status por categoria',
                  'Gráficos de receita mensal, trimestral e anual',
                  'Métricas de conclusão de trabalhos',
                  'Histórico completo de operações',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-boodow-gold font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/boodow-orders-screenshot-straight.png"
                  alt="Boodow Orders - Vista Frontal"
                  width={400}
                  height={800}
                  className="drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            Para Quem é Perfeito
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Prestadores de Serviço',
                description: 'Gerencie múltiplas ordens simultâneas, rastreie receita e mantenha histórico profissional de trabalhos.',
                examples: ['Limpeza', 'Handyman', 'Manutenção'],
              },
              {
                title: 'Pequenas Empresas',
                description: 'Coordene sua equipe, organize projetos e aumente eficiência com dashboards intuitivos.',
                examples: ['Construtoras', 'Serviços', 'Facilities'],
              },
              {
                title: 'Redes de Parceiros',
                description: 'Conecte múltiplas empresas, coordene trabalhos e monetize através da plataforma.',
                examples: ['Marketplaces', 'Franquias', 'Cooperativas'],
              },
            ].map((usecase, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-boodow-navy mb-3">{usecase.title}</h3>
                <p className="text-gray-700 mb-4">{usecase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {usecase.examples.map((ex, i) => (
                    <span key={i} className="bg-boodow-navy text-white text-sm px-3 py-1 rounded-full">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-boodow-navy mb-4">
            Planos Simples e Transparentes
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Escolha o plano certo para seu negócio
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Básico',
                price: '$9.90',
                period: '/mês',
                features: [
                  'Até 5 ordens ativas',
                  'Dashboard básico',
                  '1 usuário',
                  'Suporte email',
                ],
                highlighted: false,
              },
              {
                name: 'Profissional',
                price: '$19.90',
                period: '/mês',
                features: [
                  'Ordens ilimitadas',
                  'Dashboard completo',
                  'Até 3 usuários',
                  'Analytics detalhado',
                  'Suporte prioritário',
                  '30 dias teste grátis',
                ],
                highlighted: true,
              },
              {
                name: 'Empresa',
                price: 'Customizado',
                period: '',
                features: [
                  'Tudo do Profissional',
                  'Usuários ilimitados',
                  'API integração',
                  'Suporte dedicado',
                  'Relatórios customizados',
                ],
                highlighted: false,
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 transition ${
                  plan.highlighted
                    ? 'bg-boodow-navy text-white shadow-2xl scale-105'
                    : 'bg-white border border-gray-200 text-boodow-navy'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-75">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-boodow-gold">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold transition ${
                    plan.highlighted
                      ? 'bg-boodow-gold text-boodow-navy hover:bg-yellow-300'
                      : 'bg-boodow-navy text-white hover:bg-boodow-dark'
                  }`}
                >
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Como começo a usar Boodow Orders?',
                a: 'Baixe o app na Google Play Store, crie sua conta, adicione sua empresa e comece a criar ordens. O primeiro mês inclui teste gratuito de 30 dias do plano Profissional.',
              },
              {
                q: 'Posso integrar Boodow Orders com meu sistema?',
                a: 'Sim! Oferecemos API RESTful para integração com seus sistemas existentes. Entre em contato com nossa equipe para detalhes.',
              },
              {
                q: 'Quantos usuários posso adicionar?',
                a: 'Plano Básico: 1 usuário. Profissional: até 3. Empresa: ilimitados com suporte dedicado.',
              },
              {
                q: 'Qual é o custo para cancelar?',
                a: 'Sem contratos de longo prazo! Cancele quando quiser. Sem multas ou taxas adicionais.',
              },
              {
                q: 'Oferece suporte ao cliente?',
                a: 'Sim! Email (todos os planos), chat (Profissional) e suporte dedicado (Empresa).',
              },
              {
                q: 'Meus dados estão seguros?',
                a: 'Seus dados são criptografados em trânsito e em repouso. Cumprimos LGPD e padrões internacionais de segurança.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-boodow-gold transition">
                <h3 className="font-bold text-boodow-navy text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-boodow-navy to-boodow-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Transformar Seus Serviços?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Comece seu teste de 30 dias sem cartão de crédito
          </p>
          <Link
            href="https://play.google.com/store"
            target="_blank"
            className="inline-block bg-boodow-gold text-boodow-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Download Boodow Orders Agora
          </Link>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-12 px-4 bg-gray-50 text-center text-sm text-gray-600">
        <Link href="/boodow-orders/terms" className="hover:text-boodow-navy mr-4">
          Terms
        </Link>
        <Link href="/boodow-orders/privacy" className="hover:text-boodow-navy">
          Privacy
        </Link>
      </section>
    </div>
  )
}
