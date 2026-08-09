import Photo from '@/components/Photo'
import QuoteButton from '@/components/QuoteButton'
import { commercialSteps } from '@/lib/formSteps'

export const metadata = {
  title: 'Commercial Cleaning Services in Boca Raton & South Florida | Boodow Solutions',
  description: 'Commercial cleaning for offices, retail, restaurants, and condominiums in Boca Raton and South Florida. Flexible schedules, insured teams, free quotes.',
  keywords: 'commercial cleaning Boca Raton, office cleaning South Florida, janitorial services, restaurant cleaning, condominium cleaning, retail store cleaning',
}

const services = [
  { title: 'Office Cleaning', desc: 'Desks, common areas, restrooms, and kitchens — a clean workspace your team and clients will notice.' },
  { title: 'Retail Stores', desc: 'Spotless floors, displays, and entrances that keep your storefront inviting for every customer.' },
  { title: 'Restaurants & Cafés', desc: 'Sanitary, health-code-ready cleaning for dining areas, kitchens, and restrooms.' },
  { title: 'Condominiums & HOAs', desc: 'Reliable common area maintenance for lobbies, hallways, gyms, and amenities.' },
  { title: 'Specialized Disinfection', desc: 'Deep sanitization programs for high-touch environments and medical-adjacent spaces.' },
  { title: 'Custom Programs', desc: 'Daily, weekly, or after-hours cleaning plans tailored to your business schedule and budget.' },
]

const faqs = [
  { q: 'Can you clean after business hours?', a: 'Yes — most of our commercial clients prefer evening or early-morning cleaning so operations are never disrupted. We build the schedule around your business.' },
  { q: 'Do you offer contracts or one-time cleanings?', a: 'Both. We offer recurring programs (daily, weekly, bi-weekly, monthly) as well as one-time deep cleans and post-construction cleanups.' },
  { q: 'Are your teams insured?', a: 'Yes. Boodow Solutions is a registered Florida company and our commercial teams are insured and trained for professional environments.' },
  { q: 'How do you price commercial cleaning?', a: 'Pricing is based on square footage, frequency, and scope. Request a quote with your space details and we will reply with a clear proposal — free site visits available for larger spaces.' },
]

const btnGold = 'bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg'
const btnNavy = 'bg-boodow-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-boodow-dark transition shadow-lg'

export default function CommercialCleaningPage() {
  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Commercial Cleaning in South Florida</h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Professional cleaning programs for offices, stores, restaurants, and residential communities. Flexible schedules, consistent quality, and one accountable partner for your facility.
            </p>
            <QuoteButton serviceName="Commercial Cleaning" steps={commercialSteps} label="Request a Free Quote" className={btnGold} />
          </div>
          <Photo src="/images/commercial-hero.jpg" alt="Boodow commercial cleaning team in uniform servicing a modern office" className="w-full h-80 md:h-96 rounded-3xl shadow-2xl" />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-4">Solutions for Every Business</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">From single offices to multi-site programs — we keep commercial spaces clean, healthy, and presentable.</p>
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
              { n: '1', t: 'Tell Us About Your Space', d: 'Business type, size, and how often you need cleaning — two minutes is all it takes.' },
              { n: '2', t: 'Receive a Custom Proposal', d: 'We build a cleaning program and price around your schedule, with a free site visit for larger spaces.' },
              { n: '3', t: 'Consistent, Reliable Service', d: 'The same trained team, a clear checklist, and quality checks — every single visit.' },
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-boodow-navy mb-4">Let's talk about your space</h2>
          <p className="text-gray-600 mb-7">Answer a few quick questions and we'll build a cleaning plan around your business.</p>
          <QuoteButton serviceName="Commercial Cleaning" steps={commercialSteps} label="Get Started" className={btnNavy} />
        </div>
      </section>
    </main>
  )
}
