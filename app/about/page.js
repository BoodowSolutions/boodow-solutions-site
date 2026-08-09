import Link from 'next/link'

export const metadata = {
  title: 'About Us | Boodow Solutions',
  description: 'Boodow Solutions delivers professional home and business services in South Florida, backed by technology built in-house.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">About Boodow Solutions</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Where hands-on service experience meets modern technology.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Boodow Solutions was born in South Florida with a simple mission: make quality home and business services easy to find, easy to book, and easy to trust.
          </p>
          <p>
            We started as a hands-on services company — handyman work, residential cleaning, and commercial cleaning — serving families and businesses across Boca Raton and the surrounding areas. That daily, on-the-ground experience taught us exactly where the industry falls short: unreliable scheduling, unclear pricing, and poor communication.
          </p>
          <p>
            So we decided to fix it — not just for our own clients, but for the entire industry. That's why we build our own technology. <strong>Boodow Clean</strong> connects clients with verified cleaning professionals, and <strong>Boodow Orders</strong> helps service businesses coordinate work orders with their partners and teams.
          </p>
          <p>
            Today, Boodow Solutions is both a services company and a technology company. Everything we build is shaped by real experience in the field — because we don't just write software for service businesses, we are one.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Local Roots', desc: 'Proudly based in Boca Raton, serving South Florida.' },
            { title: 'Real Experience', desc: 'Technology shaped by years of hands-on service work.' },
            { title: 'Quality First', desc: 'Verified professionals and satisfaction guaranteed.' },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-boodow-navy mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-boodow-navy mb-4">Work with us</h2>
          <p className="text-gray-600 mb-7">Whether you need a service or want to learn about our apps, we're here.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-boodow-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-boodow-dark transition shadow-lg">Our Services</Link>
            <Link href="/contact" className="border-2 border-boodow-navy text-boodow-navy font-bold px-8 py-4 rounded-xl hover:bg-boodow-navy hover:text-white transition">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
