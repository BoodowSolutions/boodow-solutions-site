import Link from 'next/link'

export const metadata = {
  title: 'Boodow Clean | Cleaning Services Marketplace',
  description: 'Boodow Clean connects clients with verified cleaning professionals in South Florida.',
}

export default function BoodowCleanPage() {
  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-boodow-gold/20 text-boodow-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">Available on Google Play</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Boodow Clean</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            The cleaning services marketplace for South Florida. Find trusted professionals or grow your cleaning business — all in one app.
          </p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg">
            Download on Google Play
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-9 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-boodow-navy mb-5">For Clients</h2>
            <ul className="space-y-3">
              {['Find cleaning professionals near you', 'Compare verified reviews and ratings', 'Transparent pricing, no surprises', 'Book and schedule in minutes', 'Multiple cleaning types available'].map((i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-9 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-boodow-navy mb-5">For Professionals</h2>
            <ul className="space-y-3">
              {['Reach more clients in your area', 'Build your reputation with reviews', 'Manage bookings in one place', 'Showcase your business profile', 'Founding member benefits available'].map((i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">Cleaning Services Available</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {['Standard Cleaning', 'Deep Cleaning', 'Move-In / Move-Out', 'Post-Construction', 'Window Cleaning', 'Airbnb Turnover'].map((s) => (
              <div key={s} className="bg-gray-50 rounded-xl p-5 text-center font-semibold text-boodow-navy border border-gray-100">{s}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-boodow-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Get Boodow Clean today</h2>
          <p className="text-gray-300 mb-7">Join the marketplace that's making cleaning services simple in South Florida.</p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition shadow-lg">
            Download on Google Play
          </a>
        </div>
      </section>
    </main>
  )
}
