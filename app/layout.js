import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Boodow Solutions | Home Services & Coordination Tools',
  description: 'Handyman, residential cleaning, and commercial cleaning services in South Florida. Boodow Clean and Boodow Orders coordination tools.',
  keywords: 'handyman, cleaning, services, South Florida, Boca Raton',
  openGraph: {
    title: 'Boodow Solutions',
    description: 'Professional home and commercial services',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
