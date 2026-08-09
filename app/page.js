import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Boodow Solutions | Home & Business Services in South Florida',
  description: 'Professional handyman, residential and commercial cleaning services in South Florida. Plus powerful apps for service businesses.',
}

function HandymanIllustration() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#0A2342"/>
      <circle cx="330" cy="50" r="90" fill="#16406E" opacity="0.5"/>
      <circle cx="60" cy="200" r="70" fill="#16406E" opacity="0.4"/>
      <g transform="translate(120 50)">
        <rect x="20" y="60" width="120" height="80" rx="6" fill="#FEDD00"/>
        <polygon points="10,64 80,14 150,64" fill="#FEDD00" stroke="#0A2342" strokeWidth="6" strokeLinejoin="round"/>
        <rect x="65" y="95" width="30" height="45" rx="3" fill="#0A2342"/>
        <rect x="34" y="78" width="22" height="22" rx="3" fill="#0A2342"/>
        <rect x="104" y="78" width="22" height="22" rx="3" fill="#0A2342"/>
      </g>
      <g transform="translate(240 130) rotate(35)">
        <rect x="-8" y="-45" width="16" height="60" rx="4" fill="#FEDD00"/>
        <path d="M-20 -45 Q-20 -70 0 -70 Q20 -70 20 -45 L12 -45 L12 -55 L-12 -55 L-12 -45 Z" fill="#FEDD00"/>
      </g>
      <g transform="translate(105 155) rotate(-30)">
        <rect x="-5" y="-30" width="10" height="55" rx="3" fill="#FEDD00"/>
        <circle cx="0" cy="-38" r="14" fill="none" stroke="#FEDD00" strokeWidth="9"/>
      </g>
    </svg>
  )
}

function ResidentialIllustration() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#0A2342"/>
      <circle cx="70" cy="40" r="80" fill="#16406E" opacity="0.5"/>
      <circle cx="340" cy="210" r="80" fill="#16406E" opacity="0.4"/>
      <g transform="translate(90 45)">
        <rect x="0" y="30" width="150" height="110" rx="8" fill="#ffffff" opacity="0.95"/>
        <rect x="0" y="30" width="150" height="26" rx="8" fill="#FEDD00"/>
        <circle cx="16" cy="43" r="5" fill="#0A2342"/>
        <circle cx="34" cy="43" r="5" fill="#0A2342"/>
        <rect x="18" y="72" width="50" height="8" rx="4" fill="#0A2342" opacity="0.25"/>
        <rect x="18" y="90" width="90" height="8" rx="4" fill="#0A2342" opacity="0.18"/>
        <rect x="18" y="108" width="70" height="8" rx="4" fill="#0A2342" opacity="0.12"/>
      </g>
      <g transform="translate(265 75)">
        <rect x="-6" y="0" width="12" height="90" rx="4" fill="#FEDD00"/>
        <path d="M-28 90 Q-28 68 0 68 Q28 68 28 90 L28 110 L-28 110 Z" fill="#FEDD00"/>
        <line x1="-18" y1="82" x2="-18" y2="105" stroke="#0A2342" strokeWidth="4"/>
        <line x1="0" y1="78" x2="0" y2="105" stroke="#0A2342" strokeWidth="4"/>
        <line x1="18" y1="82" x2="18" y2="105" stroke="#0A2342" strokeWidth="4"/>
      </g>
      <g fill="#FEDD00">
        <circle cx="80" cy="180" r="6" opacity="0.9"/>
        <circle cx="100" cy="200" r="4" opacity="0.7"/>
        <circle cx="320" cy="60" r="5" opacity="0.8"/>
        <circle cx="300" cy="40" r="3" opacity="0.6"/>
      </g>
    </svg>
  )
}

function CommercialIllustration() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#0A2342"/>
      <circle cx="350" cy="40" r="80" fill="#16406E" opacity="0.5"/>
      <circle cx="40" cy="210" r="70" fill="#16406E" opacity="0.4"/>
      <g transform="translate(95 40)">
        <rect x="0" y="20" width="90" height="140" rx="6" fill="#ffffff" opacity="0.95"/>
        <rect x="105" y="55" width="70" height="105" rx="6" fill="#FEDD00"/>
        {[0,1,2,3].map(row => (
          <g key={row}>
            <rect x="14" y={38 + row*30} width="18" height="16" rx="2" fill="#0A2342" opacity="0.25"/>
            <rect x="42" y={38 + row*30} width="18" height="16" rx="2" fill="#0A2342" opacity="0.25"/>
          </g>
        ))}
        {[0,1,2].map(row => (
          <g key={row}>
            <rect x="117" y={70 + row*28} width="16" height="14" rx="2" fill="#0A2342" opacity="0.7"/>
            <rect x="143" y={70 + row*28} width="16" height="14" rx="2" fill="#0A2342" opacity="0.7"/>
          </g>
        ))}
      </g>
      <g transform="translate(300 150)">
        <path d="M0 40 L14 -30 L26 -30 L18 40 Z" fill="#FEDD00"/>
        <rect x="-16" y="34" width="48" height="14" rx="7" fill="#FEDD00"/>
      </g>
    </svg>
  )
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-boodow-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 80% 20%, #16406E 0%, transparent 50%), radial-gradient(circle at 10% 90%, #16406E 0%, transparent 40%)'}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-boodow-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Serving South Florida
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Professional Services for<br className="hidden md:block"/> Your <span className="text-boodow-gold">Home & Business</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Trusted handyman and cleaning services, delivered by verified professionals. Backed by technology that makes everything easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg shadow-boodow-gold/20">
              Explore Our Services
            </Link>
            <Link href="/contact" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition text-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-boodow-navy mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">From quick fixes to spotless spaces — our team has you covered.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/handyman" className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <HandymanIllustration/>
              <div className="p-7">
                <h3 className="text-xl font-bold text-boodow-navy mb-2 group-hover:text-boodow-dark">Handyman Services</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Repairs, installations, painting, and general maintenance done right the first time.</p>
                <span className="text-boodow-navy font-semibold text-sm inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>

            <Link href="/services/residential-cleaning" className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <ResidentialIllustration/>
              <div className="p-7">
                <h3 className="text-xl font-bold text-boodow-navy mb-2 group-hover:text-boodow-dark">Residential Cleaning</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Deep cleaning, recurring service, move-in/move-out, and post-construction cleaning for your home.</p>
                <span className="text-boodow-navy font-semibold text-sm inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>

            <Link href="/services/commercial-cleaning" className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CommercialIllustration/>
              <div className="p-7">
                <h3 className="text-xl font-bold text-boodow-navy mb-2 group-hover:text-boodow-dark">Commercial Cleaning</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Reliable cleaning solutions for offices, retail stores, restaurants, and condominiums.</p>
                <span className="text-boodow-navy font-semibold text-sm inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-boodow-navy mb-4">Why Choose Boodow</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Verified Professionals', desc: 'Every team member is vetted and experienced.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
              { title: 'Transparent Pricing', desc: 'Clear quotes with no hidden fees, ever.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: 'Easy Scheduling', desc: 'Book online or through our apps in minutes.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
              { title: 'Satisfaction Guaranteed', desc: "We're not done until you're happy.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /> },
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

      {/* APPS */}
      <section className="py-20 md:py-28 bg-boodow-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-boodow-gold/20 text-boodow-gold text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              Built by Boodow
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Technology That Powers Service Businesses</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We don't just deliver services — we build the tools behind them. Boodow Clean connects clients with cleaning professionals, and Boodow Orders helps businesses coordinate work orders effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products/boodow-clean" className="bg-boodow-gold text-boodow-navy font-bold px-6 py-3.5 rounded-xl hover:brightness-105 transition text-center">
                Discover Boodow Clean
              </Link>
              <Link href="/products/boodow-orders" className="border-2 border-white/40 font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition text-center">
                Discover Boodow Orders
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/boodow-orders-screenshot.png" alt="Boodow Orders app" width={300} height={620} className="w-64 md:w-72 drop-shadow-2xl"/>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-boodow-navy mb-5">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">Tell us what you need and we'll get back to you with a free quote.</p>
          <Link href="/contact" className="inline-block bg-boodow-navy text-white font-bold px-10 py-4 rounded-xl hover:bg-boodow-dark transition text-lg shadow-lg">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
