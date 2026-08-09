import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-boodow-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Image src="/logo-horizontal-white.png" alt="Boodow Solutions" width={170} height={53} className="h-10 w-auto mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Professional home and business services in South Florida. Quality you can trust.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-boodow-gold mb-4 uppercase text-sm tracking-wider">Services</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li><Link href="/services/handyman" className="hover:text-boodow-gold transition">Handyman Services</Link></li>
            <li><Link href="/services/residential-cleaning" className="hover:text-boodow-gold transition">Residential Cleaning</Link></li>
            <li><Link href="/services/commercial-cleaning" className="hover:text-boodow-gold transition">Commercial Cleaning</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-boodow-gold mb-4 uppercase text-sm tracking-wider">Products</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li><Link href="/products/boodow-clean" className="hover:text-boodow-gold transition">Boodow Clean</Link></li>
            <li><Link href="/products/boodow-orders" className="hover:text-boodow-gold transition">Boodow Orders</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-boodow-gold mb-4 uppercase text-sm tracking-wider">Company</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-boodow-gold transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-boodow-gold transition">Contact</Link></li>
            <li><Link href="/boodow-clean/terms" className="hover:text-boodow-gold transition">Boodow Clean Terms</Link></li>
            <li><Link href="/boodow-clean/privacy" className="hover:text-boodow-gold transition">Boodow Clean Privacy</Link></li>
            <li><Link href="/boodow-orders/terms" className="hover:text-boodow-gold transition">Boodow Orders Terms</Link></li>
            <li><Link href="/boodow-orders/privacy" className="hover:text-boodow-gold transition">Boodow Orders Privacy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Boodow General Services Corp. All rights reserved.</p>
          <p>Boca Raton, FL · info@boodowsolutions.com</p>
        </div>
      </div>
    </footer>
  )
}
