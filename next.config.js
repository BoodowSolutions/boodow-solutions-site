/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/servicos', destination: '/services', permanent: true },
      { source: '/servicos/handyman', destination: '/services/handyman', permanent: true },
      { source: '/servicos/limpeza-residencial', destination: '/services/residential-cleaning', permanent: true },
      { source: '/servicos/limpeza-comercial', destination: '/services/commercial-cleaning', permanent: true },
      { source: '/produtos', destination: '/products', permanent: true },
      { source: '/produtos/boodow-clean', destination: '/products/boodow-clean', permanent: true },
      { source: '/produtos/boodow-orders', destination: '/products/boodow-orders', permanent: true },
      { source: '/sobre', destination: '/about', permanent: true },
      { source: '/contato', destination: '/contact', permanent: true },
      { source: '/boodowclean-terms', destination: '/boodow-clean/terms', permanent: true },
      { source: '/boodow-clean-privacy', destination: '/boodow-clean/privacy', permanent: true },
      { source: '/boodow-orders-terms', destination: '/boodow-orders/terms', permanent: true },
      { source: '/boodow-orders-privacy', destination: '/boodow-orders/privacy', permanent: true },
      { source: '/boodow-clean-confirmed', destination: '/boodow-clean/confirmed', permanent: true },
    ]
  },
}

module.exports = nextConfig
