export default function sitemap() {
  const base = 'https://www.boodowsolutions.com'
  const routes = ['', '/services', '/services/handyman', '/services/residential-cleaning', '/services/commercial-cleaning', '/products', '/products/boodow-clean', '/products/boodow-orders', '/about', '/contact', '/boodow-clean/terms', '/boodow-clean/privacy', '/boodow-orders/terms', '/boodow-orders/privacy']
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: route === '' ? 1 : 0.8 }))
}
