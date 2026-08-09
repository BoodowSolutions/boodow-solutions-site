export const metadata = {
  title: 'Boodow Orders | Work Order Management App for Service Businesses',
  description: 'Boodow Orders is a B2B work order coordination platform: manage orders between companies, track revenue in real time, and collaborate with partners. 30-day free trial on Google Play.',
  keywords: 'work order app, work order management, service business software, field service coordination, B2B service app',
}

const features = [
  { title: 'Real-Time Insights', desc: 'Open orders, pending revenue, completion rates, and performance trends — all visible at a glance on your dashboard.' },
  { title: 'Work Order Management', desc: 'Create, assign, track, and complete orders between companies with a clean, intuitive workflow.' },
  { title: 'Revenue Tracking', desc: 'Know exactly what is pending, completed, and paid — across every partner and every job.' },
  { title: 'Partner Network', desc: 'Invite partner companies by email and coordinate jobs seamlessly across organizations.' },
  { title: 'Performance Analytics', desc: 'Monthly, quarterly, and yearly views of orders and revenue to guide your business decisions.' },
  { title: 'Real-Time Notifications', desc: 'Instant alerts for new orders, status changes, and completions — nothing slips through.' },
]

export default function BoodowOrdersPage() {
  return (
    <main>
      <section className="bg-boodow-navy text-white py-20 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-boodow-gold/20 text-boodow-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">Available on Google Play · 30-day free trial</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Boodow Orders</h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              The work order coordination platform for service businesses. Manage orders between companies, track revenue in real time, and keep every partner in sync — from one clear dashboard.
            </p>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-boodow-gold text-boodow-navy font-bold px-8 py-4 rounded-xl hover:brightness-105 transition text-lg shadow-lg">
              Download on Google Play
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <img src="/boodow-orders-screenshot.png" alt="Boodow Orders insights dashboard with real-time metrics" className="w-52 md:w-60 drop-shadow-2xl"/>
            <img src="/boodow-orders-screenshot-straight.png" alt="Boodow Orders app showing orders by status" className="w-52 md:w-60 drop-shadow-2xl hidden lg:block"/>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-4">Everything Your Operation Needs</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Built from real service industry experience — every feature answers a real coordination problem.</p>
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
              { title: 'Independent Providers', desc: 'Keep every job organized, never lose track of payments, and look professional with your partners.' },
              { title: 'Small Businesses', desc: 'Manage your team workload and revenue from one dashboard, with clear visibility into every order.' },
              { title: 'Partner Networks', desc: 'Coordinate work seamlessly across partner companies — everyone sees the same status, always.' },
            ].map((u) => (
              <div key={u.title} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
                <h3 className="font-bold text-boodow-navy mb-2">{u.title}</h3>
                <p className="text-sm text-gray-600">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-boodow-navy text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How much does Boodow Orders cost?', a: 'Boodow Orders is $6.99/month or $69.99/year, with a 30-day free trial. No credit card tricks — try everything before you decide.' },
              { q: 'How do team members join?', a: 'Users join by email invitation only. You invite your team and partner companies directly from the app — keeping your workspace private and secure.' },
              { q: 'Can I coordinate with other companies?', a: 'Yes — that is the core of Boodow Orders. Create work orders, assign them to partner companies, and track status and revenue across your entire network.' },
              { q: 'Is it available on iPhone?', a: 'Boodow Orders is available on Google Play today. The iOS version for iPhone is coming soon to the App Store.' },
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
