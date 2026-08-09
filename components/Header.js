'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo-horizontal.png" alt="Boodow Solutions" width={180} height={56} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <Link href="/services" className="text-gray-700 font-medium hover:text-boodow-navy transition py-2">
              Services
            </Link>
            <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/services/handyman" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-boodow-navy">Handyman Services</Link>
              <Link href="/services/residential-cleaning" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-boodow-navy">Residential Cleaning</Link>
              <Link href="/services/commercial-cleaning" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-boodow-navy">Commercial Cleaning</Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/products" className="text-gray-700 font-medium hover:text-boodow-navy transition py-2">
              Products
            </Link>
            <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/products/boodow-clean" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-boodow-navy">Boodow Clean</Link>
              <Link href="/products/boodow-orders" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-boodow-navy">Boodow Orders</Link>
            </div>
          </div>
          <Link href="/about" className="text-gray-700 font-medium hover:text-boodow-navy transition">
            About
          </Link>
          <Link href="/contact" className="bg-boodow-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-boodow-dark transition shadow-sm">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2" aria-label="Toggle menu">
          <svg className="w-6 h-6 text-boodow-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex justify-between items-center py-2.5 text-gray-700 font-medium">
            Services
            <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {servicesOpen && (
            <div className="pl-4 space-y-1">
              <Link href="/services/handyman" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Handyman Services</Link>
              <Link href="/services/residential-cleaning" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Residential Cleaning</Link>
              <Link href="/services/commercial-cleaning" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Commercial Cleaning</Link>
            </div>
          )}
          <button onClick={() => setProductsOpen(!productsOpen)} className="w-full flex justify-between items-center py-2.5 text-gray-700 font-medium">
            Products
            <svg className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {productsOpen && (
            <div className="pl-4 space-y-1">
              <Link href="/products/boodow-clean" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Boodow Clean</Link>
              <Link href="/products/boodow-orders" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600">Boodow Orders</Link>
            </div>
          )}
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2.5 text-gray-700 font-medium">About</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block bg-boodow-navy text-white text-center font-semibold px-5 py-3 rounded-lg mt-2">Contact Us</Link>
        </div>
      )}
    </header>
  )
}
