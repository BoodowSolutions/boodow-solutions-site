import Photo from '@/components/Photo'
import QuoteButton from '@/components/QuoteButton'
import { residentialSteps } from '@/lib/formSteps'

export const metadata = {
  title: 'Residential Cleaning Services in Boca Raton & South Florida | Boodow Solutions',
  description: 'Professional house cleaning in Boca Raton: deep cleaning, recurring service, move-in/move-out, post-construction, and Airbnb turnover. Trusted cleaners, free quotes.',
  keywords: 'house cleaning Boca Raton, residential cleaning South Florida, deep cleaning, maid service, move out cleaning, Airbnb cleaning',
}

const services = [
  { title: 'Standard Cleaning', desc: 'Regular upkeep — dusting, vacuuming, mopping, bathrooms, and kitchen — to keep your home consistently fresh.' },
  { title: 'Deep Cleaning', desc: 'A meticulous, top-to-bottom clean: baseboards, inside appliances, grout, fixtures, and every overlooked corner.' },
  { title: 'Move-In / Move-Out', desc: 'Start fresh in your new home or leave the old one spotless for inspection and deposit return.' },
  { title: 'Post-Construction', desc: 'Fine dust and debris removal after renovations, remodels, or new construction — ready to live in.' },
  { title: 'Airbnb Turnover', desc: 'Fast, hotel-standard turnovers between guests, with attention to the details that earn 5-star reviews.' },
  { title: 'Recurring Service', desc: 'Weekly, bi-weekly, or monthly plans with the same trusted cleaner and priority scheduling.' },
]

const faqs = [
  { q: 'How much does house cleaning cost in Boca Raton?', a: 'It depends on your home size, cleaning type, and frequency. Recurring plans cost less per visit than one-time cleanings. Request a free quote with your details and we will reply with clear pricing.' },
  { q: 'Do I need to provide cleaning supplies?', a: 'No — our professionals arrive with all equipment and professional-grade products. If you prefer specific products (e.g., eco-friendly), just let us know.' },
  { q: 'Are your cleaners background-checked?', a: 'Yes. Every Boodow professional is vetted, background-checked, and trained to our quality standard before entering any home.' },
  { q: 'What if I am not satisfied with the cleaning?', a: 'Your satisfaction is guaranteed. If anything was missed, tell us within 24 hours and we will make it right at no extra cost.' },
]

const btnGold = 'bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg'
const btnNavy = 'bg-boodow-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-boodow-dark transition shadow-lg'

export default function ResidentialCleaningPage() {
  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Residential Cleaning in South Florida</h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              A cleaner, healthier home without lifting a finger. Boodow's trusted cleaning professionals bring hotel-standard results to houses, apartments, and vacation rentals across Boca Raton and beyond.
            </p>
            <QuoteButton serviceName="Residential Cleaning" steps={residentialSteps} label="Request a Free Quote" className={btnGold} />
          </div>
          <Photo src="/images/residential-hero.jpg" alt="Boodow cleaning professional in uniform cleaning a bright modern kitchen" className="w-full h-80 md:h-96 rounded-3xl shadow-2xl" />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-4">Our Cleaning Services</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">From weekly upkeep to once-a-year deep cleans — choose the service that fits your home and routine.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-boodow-navy mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '1', t: 'Request Your Quote', d: 'Tell us about your home, the type of cleaning, and how often — it takes two minutes.' },
              { n: '2', t: 'Get Matched & Scheduled', d: 'We confirm your price and schedule a time that works for you, with the right team for the job.' },
              { n: '3', t: 'Enjoy a Spotless Home', d: 'Our uniformed professional arrives with all supplies and leaves your home shining.' },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-boodow-gold text-boodow-navy font-extrabold text-xl rounded-full flex items-center justify-center">{s.n}</div>
                <h3 className="font-bold text-boodow-navy mb-2">{s.t}</h3>
                <p className="text-sm text-gray-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-boodow-navy mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-boodow-navy mb-4">Ready for a spotless home?</h2>
          <p className="text-gray-600 mb-7">Answer a few quick questions and we'll send you a personalized quote — usually within one business day.</p>
          <QuoteButton serviceName="Residential Cleaning" steps={residentialSteps} label="Get Started" className={btnNavy} />
        </div>
      </section>
    </main>
  )
}
