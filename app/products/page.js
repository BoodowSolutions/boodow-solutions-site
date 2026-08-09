import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Our Products | Boodow Solutions',
  description: 'Boodow Clean and Boodow Orders — apps built by Boodow Solutions for the service industry.',
}

export default function ProductsPage() {
  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Our Products</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Apps built from real service industry experience — designed to make work simpler for clients, professionals, and businesses.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-9 border border-gray-100 shadow-sm flex flex-col">
            <span className="inline-block self-start bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Marketplace</span>
            <h2 className="text-2xl font-extrabold text-boodow-navy mb-3">Boodow Clean</h2>
            <p className="text-gray-600 leading-relaxed mb-6 flex-1">
              A cleaning services marketplace connecting clients with verified professionals in South Florida. Browse profiles, compare reviews, and book with confidence.
            </p>
            <ul className="space-y-2.5 mb-8">
              {['Find verified cleaning professionals', 'Real reviews and transparent pricing', 'Easy booking and scheduling', 'Grow your cleaning business'].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-boodow-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {i}
                </li>
              ))}
            </ul>
            <Link href="/products/boodow-clean" className="bg-boodow-navy text-white text-center font-bold px-6 py-3.5 rounded-xl hover:bg-boodow-dark transition">
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-9 border border-gray-100 shadow-sm flex flex-col">
            <span className="inline-block self-start bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">B2B Tool</span>
            <h2 className="text-2xl font-extrabold text-boodow-navy mb-3">Boodow Orders</h2>
            <p className="text-gray-600 leading-relaxed mb-6 flex-1">
              A work order coordination platform for service businesses. Manage orders, track revenue, and collaborate with partner companies — all in one place.
            </p>
            <ul className="space-y-2.5 mb-8">
              {['Real-time insights dashboard', 'Work order management', 'Revenue tracking', 'Partner network coordination'].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-boodow-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {i}
                </li>
              ))}
            </ul>
            <Link href="/products/boodow-orders" className="bg-boodow-navy text-white text-center font-bold px-6 py-3.5 rounded-xl hover:bg-boodow-dark transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
