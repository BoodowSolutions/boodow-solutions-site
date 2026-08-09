import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Boodow Solutions | Home & Business Services in South Florida',
  description: 'Professional handyman, residential and commercial cleaning services in South Florida, plus powerful apps for service businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
