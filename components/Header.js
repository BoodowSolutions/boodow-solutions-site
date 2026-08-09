'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-boodow-navy to-boodow-dark rounded flex items-center justify-center">
            <span className="text-boodow-gold font-bold text-sm">B</span>
          </div>
          <span className="text-lg font-bold text-boodow-navy">Boodow</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/servicos" className="text-gray-700 hover:text-boodow-navy transition">
            Serviços
          </Link>
          <Link href="/produtos" className="text-gray-700 hover:text-boodow-navy transition">
            Produtos
          </Link>
          <Link href="/sobre" className="text-gray-700 hover:text-boodow-navy transition">
            Sobre
          </Link>
          <Link href="/contato" className="text-gray-700 hover:text-boodow-navy transition">
            Contato
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/servicos" className="text-gray-700 hover:text-boodow-navy">
              Serviços
            </Link>
            <Link href="/produtos" className="text-gray-700 hover:text-boodow-navy">
              Produtos
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-boodow-navy">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-boodow-navy">
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
