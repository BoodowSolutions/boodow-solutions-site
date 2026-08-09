import Image from 'next/image'

export const metadata = {
  title: 'Boodow Orders | Work Order Coordination for Service Businesses',
  description: 'Boodow Orders helps service businesses manage work orders, track revenue, and coordinate with partners.',
}

const features = [
  { title: 'Real-Time Insights', desc: 'Open orders, pending revenue, completion rates, and trends — visible at a glance.' },
  { title: 'Work Order Management', desc: 'Create, assign, track, and complete orders with a clean, intuitive flow.' },
  { title: 'Revenue Tracking', desc: 'Know exactly what is pending, completed, and paid across all your work.' },
  { title: 'Partner Network', desc: 'Coordinate jobs with partner companies and keep everyone in sync.' },
  { title: 'Performance Analytics', desc: 'Monthly, quarterly, and yearly views of your business performance.' },
  { title: 'Real-Time Notifications', desc: 'Instant alerts for new orders and status changes.' },
]

export default function BoodowOrdersPage() {
  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-boodow-gold/20 text-boodow-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">Available on Google Play · 30-day free trial</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Boodow Orders</h1>
            <p className="text-lg text-gray-300 mb-8">
              Coordinate work orders, track revenue in real time, and collaborate with partner companies — built for service businesses that want clarity.
            </p>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg">
              Download on Google Play
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <Image src="/boodow-orders-screenshot-straight.png" alt="Boodow Orders insights dashboard" width={280} height={580} className="w-56 md:w-64 drop-shadow-2xl"/>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">Everything Your Operation Needs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-boodow-navy mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">Who It's For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Independent Providers', desc: 'Keep every job organized and never lose track of payments.' },
              { title: 'Small Businesses', desc: 'Manage your team\'s workload and revenue from one dashboard.' },
              { title: 'Partner Networks', desc: 'Coordinate work seamlessly across partner companies.' },
            ].map((u) => (
              <div key={u.title} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
                <h3 className="font-bold text-boodow-navy mb-2">{u.title}</h3>
                <p className="text-sm text-gray-600">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-boodow-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start your 30-day free trial</h2>
          <p className="text-gray-300 mb-7">No commitment. See how much clearer your operation can be.</p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition shadow-lg">
            Download on Google Play
          </a>
        </div>
      </section>
    </main>
  )
}
