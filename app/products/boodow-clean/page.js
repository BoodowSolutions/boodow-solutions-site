import Photo from '@/components/Photo'

export const metadata = {
  title: 'Boodow Clean | Cleaning Services Marketplace App for South Florida',
  description: 'Boodow Clean connects clients with professional cleaning companies in South Florida. Cleaning businesses publish their services; clients browse, compare, and contact them directly. Free for clients.',
  keywords: 'cleaning app, find house cleaner, cleaning services marketplace, cleaning business app, Boca Raton cleaning, South Florida cleaners',
}

export default function BoodowCleanPage() {
  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-boodow-gold/20 text-boodow-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">Available on Google Play · Free for clients</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Boodow Clean</h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              The cleaning services marketplace for South Florida. Cleaning companies publish their services and reach new clients — clients browse real profiles, compare reviews, and contact professionals directly. No middleman, no hidden fees.
            </p>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg">
              Download on Google Play
            </a>
          </div>
          <div className="flex justify-center">
            <Photo src="/images/boodow-clean-app.png" alt="Boodow Clean app — feed of cleaning professionals" className="w-64 md:w-72 h-[480px] rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">One App, Two Sides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-9 border border-gray-100 shadow-sm">
              <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">For Clients — Free</span>
              <h3 className="text-xl font-bold text-boodow-navy mb-5">Find Your Cleaning Professional</h3>
              <ul className="space-y-3">
                {['Browse cleaning companies near you in South Florida', 'See real profiles, photos, and verified reviews', 'Compare services: deep cleaning, move-out, Airbnb turnover, and more', 'Contact professionals directly — no middleman', 'Completely free to browse and contact'].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-9 border border-gray-100 shadow-sm">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">For Cleaning Businesses</span>
              <h3 className="text-xl font-bold text-boodow-navy mb-5">Grow Your Cleaning Business</h3>
              <ul className="space-y-3">
                {['Publish your services and reach new local clients', 'Free registration — subscribe to keep your posts active', 'Founding members get a 90-day free trial', 'Build your reputation with reviews and a verified profile', 'Manage everything from your phone'].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">Cleaning Services on the App</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {['Standard Cleaning', 'Deep Cleaning', 'Move-In / Move-Out', 'Post-Construction', 'Airbnb Turnover', 'Window Cleaning'].map((s) => (
              <div key={s} className="bg-gray-50 rounded-xl p-5 text-center font-semibold text-boodow-navy border border-gray-100">{s}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Is Boodow Clean free for clients?', a: 'Yes — browsing professionals, comparing reviews, and contacting cleaning companies is completely free for clients.' },
              { q: 'How much does it cost for cleaning businesses?', a: 'Registration is free. To keep your service posts active and visible in the feed, businesses subscribe for $19.90/month. Founding members currently get a 90-day free trial.' },
              { q: 'What areas does Boodow Clean cover?', a: 'Boodow Clean launched in South Florida, covering Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, and surrounding communities.' },
              { q: 'Is it available on iPhone?', a: 'Boodow Clean is available on Google Play today. The iOS version for iPhone is coming soon to the App Store.' },
            ].map((f) => (
              <div key={f.q} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-boodow-navy mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-boodow-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Get Boodow Clean today</h2>
          <p className="text-gray-300 mb-7">Join the marketplace making cleaning services simple in South Florida — as a client or as a founding business member.</p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition shadow-lg">
            Download on Google Play
          </a>
        </div>
      </section>
    </main>
  )
}
