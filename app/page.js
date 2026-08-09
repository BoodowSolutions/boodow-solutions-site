import Link from 'next/link'
import Photo from '@/components/Photo'

export const metadata = {
  title: 'Boodow Solutions | Handyman & Cleaning Services in Boca Raton, South Florida',
  description: 'Boodow Solutions provides professional handyman, residential cleaning, and commercial cleaning services in Boca Raton and South Florida — and builds apps for the service industry: Boodow Clean and Boodow Orders.',
  keywords: 'handyman Boca Raton, residential cleaning South Florida, commercial cleaning Boca Raton, house cleaning services, cleaning app, work order management',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Boodow Solutions',
  description: 'Professional handyman, residential and commercial cleaning services in South Florida.',
  address: { '@type': 'PostalAddress', streetAddress: '20423 State Road 7, Suite 357', addressLocality: 'Boca Raton', addressRegion: 'FL', postalCode: '33498', addressCountry: 'US' },
  email: 'info@boodowsolutions.com',
  url: 'https://www.boodowsolutions.com',
  areaServed: ['Boca Raton', 'Delray Beach', 'Boynton Beach', 'Deerfield Beach', 'Pompano Beach', 'West Palm Beach'],
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative bg-boodow-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 80% 20%, #16406E 0%, transparent 50%), radial-gradient(circle at 10% 90%, #16406E 0%, transparent 40%)'}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/10 border border-white/20 text-boodow-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Proudly serving South Florida
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Home & Business Services <span className="text-boodow-gold">Done Right</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Boodow Solutions delivers professional handyman, residential cleaning, and commercial cleaning services in Boca Raton and across South Florida — with verified professionals, transparent pricing, and technology that makes everything easier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg text-center shadow-lg shadow-boodow-gold/20">
                Explore Our Services
              </Link>
              <Link href="/contact" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition text-lg text-center">
                Get a Free Quote
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Photo src="/images/hero-team.jpg" alt="Boodow Solutions team — handyman and cleaning professionals in uniform" className="w-full h-[420px] rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* WHAT WE DO — SERVICES */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-boodow-navy">What We Do</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            We are a service company <strong>and</strong> a technology company. Our own teams deliver handyman and cleaning services across South Florida — and we build the apps that power the service industry.
          </p>

          <h3 className="text-xl font-bold text-boodow-navy mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-boodow-gold rounded-full inline-block"></span>
            Services We Deliver
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { href: '/services/handyman', img: '/images/handyman.jpg', alt: 'Boodow handyman fixing a kitchen cabinet', title: 'Handyman Services', desc: 'Repairs, installations, painting, plumbing, electrical, and general maintenance — done right the first time by skilled professionals.' },
              { href: '/services/residential-cleaning', img: '/images/residential-cleaning.jpg', alt: 'Boodow professional cleaning a bright living room', title: 'Residential Cleaning', desc: 'Deep cleaning, recurring service, move-in/move-out, and post-construction cleaning that leaves your home spotless.' },
              { href: '/services/commercial-cleaning', img: '/images/commercial-cleaning.jpg', alt: 'Boodow team cleaning a modern office space', title: 'Commercial Cleaning', desc: 'Reliable cleaning programs for offices, retail stores, restaurants, and condominiums — on your schedule.' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Photo src={s.img} alt={s.alt} className="w-full h-52" />
                <div className="p-7">
                  <h4 className="text-xl font-bold text-boodow-navy mb-2">{s.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-boodow-navy font-semibold text-sm inline-flex items-center gap-1">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <h3 className="text-xl font-bold text-boodow-navy mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-boodow-gold rounded-full inline-block"></span>
            Products We Build
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-6">
                <span className="text-emerald-100 text-xs font-semibold uppercase tracking-wider">Marketplace App</span>
                <h4 className="text-2xl font-extrabold text-white mt-1">Boodow Clean</h4>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  A cleaning services marketplace where cleaning companies publish their services and clients find and contact them directly. Verified profiles, real reviews, and a 90-day free trial for founding members.
                </p>
                <div className="flex gap-3">
                  <Link href="/products/boodow-clean" className="flex-1 bg-boodow-navy text-white text-center font-bold px-5 py-3 rounded-xl hover:bg-boodow-dark transition text-sm">Learn More</Link>
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-boodow-navy text-boodow-navy text-center font-bold px-5 py-3 rounded-xl hover:bg-boodow-navy hover:text-white transition text-sm">Google Play</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-boodow-navy to-boodow-dark px-8 py-6">
                <span className="text-blue-200 text-xs font-semibold uppercase tracking-wider">B2B App</span>
                <h4 className="text-2xl font-extrabold text-white mt-1">Boodow Orders</h4>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  A work order coordination platform that helps service businesses manage orders between companies — with real-time insights, revenue tracking, and partner collaboration. 30-day free trial.
                </p>
                <div className="flex gap-3">
                  <Link href="/products/boodow-orders" className="flex-1 bg-boodow-navy text-white text-center font-bold px-5 py-3 rounded-xl hover:bg-boodow-dark transition text-sm">Learn More</Link>
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-boodow-navy text-boodow-navy text-center font-bold px-5 py-3 rounded-xl hover:bg-boodow-navy hover:text-white transition text-sm">Google Play</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-boodow-navy mb-4">Why Choose Boodow Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We built our reputation one job at a time — here's what you can expect from every service.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Verified Professionals', desc: 'Every team member is vetted, trained, and experienced.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
              { title: 'Transparent Pricing', desc: 'Clear, upfront quotes with no hidden fees — ever.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: 'Easy Scheduling', desc: 'Request a quote online in minutes — we reply fast.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
              { title: 'Satisfaction Guaranteed', desc: "We're not done until you're completely happy.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /> },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition">
                <div className="w-14 h-14 mx-auto mb-5 bg-boodow-gold/15 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-boodow-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <h3 className="font-bold text-boodow-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS — SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-boodow-navy mb-5">Serving South Florida</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Boodow Solutions provides handyman services, residential cleaning, and commercial cleaning throughout Palm Beach and Broward counties, including:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Boca Raton', 'Delray Beach', 'Boynton Beach', 'Deerfield Beach', 'Pompano Beach', 'Coral Springs', 'Parkland', 'West Palm Beach'].map((city) => (
              <span key={city} className="bg-white border border-gray-200 text-boodow-navy font-medium px-5 py-2 rounded-full text-sm shadow-sm">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-boodow-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">Tell us what you need and we'll get back to you with a free, no-obligation quote.</p>
          <Link href="/contact" className="inline-block bg-boodow-gold text-boodow-navy font-bold px-10 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
