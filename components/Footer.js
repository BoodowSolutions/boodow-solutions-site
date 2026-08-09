import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-boodow-navy text-white mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-boodow-gold">Boodow</h3>
            <p className="text-sm text-gray-300">
              Soluções de serviços para residências e empresas em South Florida.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/servicos/handyman" className="hover:text-boodow-gold transition">Handyman</Link></li>
              <li><Link href="/servicos/limpeza-residencial" className="hover:text-boodow-gold transition">Limpeza Residencial</Link></li>
              <li><Link href="/servicos/limpeza-comercial" className="hover:text-boodow-gold transition">Limpeza Comercial</Link></li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/produtos/boodow-clean" className="hover:text-boodow-gold transition">Boodow Clean</Link></li>
              <li><Link href="/produtos/boodow-orders" className="hover:text-boodow-gold transition">Boodow Orders</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/boodow-clean/terms" className="hover:text-boodow-gold transition">Clean Terms</Link></li>
              <li><Link href="/boodow-clean/privacy" className="hover:text-boodow-gold transition">Clean Privacy</Link></li>
              <li><Link href="/boodow-orders/terms" className="hover:text-boodow-gold transition">Orders Terms</Link></li>
              <li><Link href="/boodow-orders/privacy" className="hover:text-boodow-gold transition">Orders Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Boodow General Services Corp. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="mailto:info@boodowsolutions.com" className="hover:text-boodow-gold transition">
              info@boodowsolutions.com
            </a>
            <span>20423 State Road 7, Suite 357, Boca Raton, FL 33498</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
