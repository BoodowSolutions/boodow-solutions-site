'use client'

import Link from 'next/link'

export default function ProdutosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-boodow-navy to-boodow-dark text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nossos Produtos
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Apps inteligentes para conectar profissionais com clientes e coordenar serviços
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Boodow Clean */}
            <Link
              href="/produtos/boodow-clean"
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-3xl p-12 hover:shadow-2xl transition h-full flex flex-col">
                <div className="text-6xl mb-6">🧹</div>
                <h2 className="text-3xl font-bold mb-3">Boodow Clean</h2>
                <p className="text-lg opacity-95 mb-8 flex-1">
                  Marketplace de serviços de limpeza profissional. Encontre profissionais qualificados, faça agendamentos e mantenha sua casa impecável.
                </p>

                <div className="space-y-3 mb-8 border-t border-white border-opacity-30 pt-6">
                  <div className="flex gap-2">
                    <span className="text-xl">✓</span>
                    <span>Busque profissionais perto de você</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xl">✓</span>
                    <span>Avaliações verificadas de clientes reais</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xl">✓</span>
                    <span>Agende com facilidade pelo app</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xl">✓</span>
                    <span>Preços transparentes sem surpresas</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xl">✓</span>
                    <span>Pagamento seguro e protegido</span>
                  </div>
                </div>

                <div className="flex gap-3 flex-col sm:flex-row">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-emerald-700 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition"
                  >
                    Baixar Play Store
                  </a>
                  <span className="text-center py-3 opacity-75">Ver Mais →</span>
                </div>
              </div>
            </Link>

            {/* Boodow Orders */}
            <Link
              href="/produtos/boodow-orders"
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white rounded-3xl p-12 hover:shadow-2xl transition h-full flex flex-col">
                <div className="text-6xl mb-6">📊</div>
                <h2 className="text-3xl font-bold mb-3">Boodow Orders</h2>
                <p className="text-lg opacity-95 mb-8 flex-1">
                  Plataforma B2B de coordenação de serviços. Gerencie ordens, rastreie receita e aumente a produtividade da sua equipe.
                </p>

                <div className="space-y-3 mb-8 border-t border-white border-opacity-30 pt-6">
                  <div className="flex gap-2">
                    <span className="text-xl">✓</span>
                    <span>Dashboard completo com insights em tempo real</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xl">✓</span>
                    <span>Gerencie múltiplas ordens de serviço</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xl">✓</span>
                    <span>Rastreamento de receita e analytics</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xl">✓</span>
                    <span>Coordene com parceiros e equipes</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xl">✓</span>
                    <span>Teste grátis de 30 dias</span>
                  </div>
                </div>

                <div className="flex gap-3 flex-col sm:flex-row">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-indigo-700 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition"
                  >
                    Baixar Play Store
                  </a>
                  <span className="text-center py-3 opacity-75">Ver Mais →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            Qual Produto é Ideal Para Você?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-boodow-gold">
                  <th className="py-4 px-4 font-bold text-boodow-navy">Funcionalidade</th>
                  <th className="py-4 px-4 text-center font-bold text-emerald-700">Boodow Clean</th>
                  <th className="py-4 px-4 text-center font-bold text-indigo-700">Boodow Orders</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Para Clientes / B2C', clean: '✓', orders: '✗' },
                  { feature: 'Para Profissionais / B2B', clean: '✓', orders: '✓' },
                  { feature: 'Marketplace de Serviços', clean: '✓', orders: '✗' },
                  { feature: 'Gerenciamento de Ordens', clean: '✓', orders: '✓' },
                  { feature: 'Dashboard com Insights', clean: '✓', orders: '✓' },
                  { feature: 'Rastreamento de Receita', clean: '✓', orders: '✓' },
                  { feature: 'Avaliações de Clientes', clean: '✓', orders: '✗' },
                  { feature: 'Coordenação de Equipe', clean: '✗', orders: '✓' },
                  { feature: 'Integração com Parceiros', clean: '✓', orders: '✓' },
                  { feature: 'Agendamento Integrado', clean: '✓', orders: '✓' },
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-yellow-50`}>
                    <td className="py-4 px-4 font-semibold text-boodow-navy">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-xl">
                      <span className={row.clean === '✓' ? 'text-emerald-600' : 'text-gray-400'}>
                        {row.clean}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-xl">
                      <span className={row.orders === '✓' ? 'text-indigo-600' : 'text-gray-400'}>
                        {row.orders}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Escolha Boodow Clean Se:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">→</span>
                  <span>Você busca profissionais de limpeza qualificados</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">→</span>
                  <span>Quer marcar serviços pelo celular com facilidade</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">→</span>
                  <span>Você é um prestador de serviço buscando mais clientes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">→</span>
                  <span>Precisa de marketplace confiável com avaliações</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Escolha Boodow Orders Se:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">→</span>
                  <span>Seu negócio precisa coordenar múltiplas ordens</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">→</span>
                  <span>Quer rastrear receita e performance em tempo real</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">→</span>
                  <span>Você gerencia uma equipe ou rede de parceiros</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">→</span>
                  <span>Precisa de analytics detalhado sobre seu negócio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-boodow-navy mb-16">
            Ambos os Produtos Oferecem
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📱',
                title: 'Apps Nativos',
                description: 'Desenvolvidos para iOS e Android com melhor desempenho e usabilidade',
              },
              {
                icon: '🔒',
                title: 'Segurança Premium',
                description: 'Criptografia de dados, compliance LGPD e padrões internacionais',
              },
              {
                icon: '⚡',
                title: 'Performance',
                description: 'Interface rápida e responsiva, otimizado para qualquer conexão',
              },
              {
                icon: '💰',
                title: 'Pagamentos Seguros',
                description: 'Integração com Stripe e processamento seguro de transações',
              },
              {
                icon: '🌐',
                title: 'Sempre Sincronizado',
                description: 'Dados sincronizados em tempo real entre app e servidor',
              },
              {
                icon: '📞',
                title: 'Suporte 24/7',
                description: 'Chat, email e telefone disponível para dúvidas e problemas',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-boodow-navy mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-boodow-navy to-boodow-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Comece Agora
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Escolha um ou ambos os produtos para potencializar seu negócio
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/produtos/boodow-clean"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition"
            >
              Explorar Boodow Clean
            </Link>
            <Link
              href="/produtos/boodow-orders"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-700 transition"
            >
              Explorar Boodow Orders
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
