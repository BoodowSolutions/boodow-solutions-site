import Link from 'next/link'
import Photo from '@/components/Photo'
import QuoteButton from '@/components/QuoteButton'
import { handymanSteps } from '@/lib/formSteps'

export const metadata = {
  title: 'Handyman Services in Boca Raton & South Florida | Boodow Solutions',
  description: 'Professional handyman services in Boca Raton: repairs, installations, painting, plumbing, electrical, and furniture assembly. Licensed, insured, and reliable. Free quotes.',
  keywords: 'handyman Boca Raton, handyman services South Florida, home repairs, TV mounting, furniture assembly, painting services, plumbing repairs',
}

const services = [
  { title: 'General Repairs', desc: 'Drywall patching, door adjustments, window repairs, caulking, and all the small fixes that keep your home in shape.' },
  { title: 'Installations', desc: 'TV mounting, ceiling fans, light fixtures, shelving, curtain rods, smart home devices, and appliance installation.' },
  { title: 'Painting', desc: 'Interior and exterior painting with careful prep work, clean lines, and premium finishes that last.' },
  { title: 'Plumbing', desc: 'Faucet replacement, garbage disposals, leak repairs, toilet repairs, and other minor plumbing work.' },
  { title: 'Electrical', desc: 'Outlet and switch replacement, light fixtures, dimmers, and small electrical jobs done safely.' },
  { title: 'Furniture Assembly', desc: 'Fast, careful assembly of furniture from any brand — beds, desks, wardrobes, patio sets, and more.' },
]

const faqs = [
  { q: 'How much do handyman services cost in Boca Raton?', a: 'Pricing depends on the type and scope of work. We provide free, transparent quotes before any job starts — no hidden fees, no surprises. Small repairs may take under an hour, while larger projects are quoted per project.' },
  { q: 'Are you licensed and insured?', a: 'Yes. Boodow Solutions operates as a registered Florida company and our professionals are vetted, experienced, and insured for your peace of mind.' },
  { q: 'How quickly can you come out?', a: 'For urgent repairs we often have same-week availability, and many jobs can be scheduled within a few days. Tell us your timeline in the quote form and we will do our best to accommodate it.' },
  { q: 'What areas do you serve?', a: 'We serve Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, Pompano Beach, and surrounding South Florida communities.' },
]

const btnGold = 'bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg'
const btnNavy = 'bg-boodow-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-boodow-dark transition shadow-lg'

export default function HandymanPage() {
  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Handyman Services in South Florida</h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From small repairs to full installation projects, Boodow Solutions sends skilled, background-checked professionals to your home or business — on time, with the right tools, and with quality you can see.
            </p>
            <QuoteButton serviceName="Handyman Services" steps={handymanSteps} label="Request a Free Quote" className={btnGold} />
          </div>
          <Photo src="/images/handyman-hero.jpg" alt="Boodow handyman in uniform installing a light fixture" className="w-full h-80 md:h-96 rounded-3xl shadow-2xl" />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-4">What We Can Help With</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">One reliable team for every task on your to-do list. If you don't see your project here, just ask — we probably do it.</p>
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
              { n: '1', t: 'Tell Us What You Need', d: 'Fill out our quick quote form with the details of your project — it takes less than two minutes.' },
              { n: '2', t: 'Get Your Free Quote', d: 'We review your request and reply with a clear, transparent quote and available time slots.' },
              { n: '3', t: 'We Get It Done', d: 'Our professional arrives on time, in uniform, with the right tools — and leaves everything clean.' },
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-boodow-navy mb-4">Have a project in mind?</h2>
          <p className="text-gray-600 mb-7">Answer a few quick questions and we'll get back to you with a free quote — usually within one business day.</p>
          <QuoteButton serviceName="Handyman Services" steps={handymanSteps} label="Get Started" className={btnNavy} />
        </div>
      </section>
    </main>
  )
}
