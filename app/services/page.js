import Link from 'next/link'

export const metadata = {
  title: 'Our Services | Boodow Solutions',
  description: 'Handyman, residential cleaning, and commercial cleaning services in South Florida.',
}

const services = [
  {
    href: '/services/handyman',
    title: 'Handyman Services',
    desc: 'Repairs, installations, painting, plumbing, electrical, and general maintenance for homes and businesses.',
    items: ['General repairs', 'Installations', 'Painting', 'Plumbing & electrical'],
  },
  {
    href: '/services/residential-cleaning',
    title: 'Residential Cleaning',
    desc: 'Deep cleaning, recurring service, move-in/move-out, and post-construction cleaning for your home.',
    items: ['Deep cleaning', 'Recurring plans', 'Move-in / move-out', 'Post-construction'],
  },
  {
    href: '/services/commercial-cleaning',
    title: 'Commercial Cleaning',
    desc: 'Cleaning programs for offices, retail, restaurants, and condominiums — on your schedule.',
    items: ['Offices', 'Retail & restaurants', 'Condominiums', 'Custom programs'],
  },
]

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional solutions for your home and business, delivered by verified experts across South Florida.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <h2 className="text-xl font-bold text-boodow-navy mb-3">{s.title}</h2>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-boodow-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {i}
                  </li>
                ))}
              </ul>
              <span className="text-boodow-navy font-semibold text-sm inline-flex items-center gap-1">
                View details
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-boodow-navy mb-4">Not sure what you need?</h2>
          <p className="text-gray-600 mb-7">Reach out and we'll help you figure out the best solution.</p>
          <Link href="/contact" className="inline-block bg-boodow-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-boodow-dark transition shadow-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
