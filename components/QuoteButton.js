'use client'

import { useState } from 'react'
import FormModal from './FormModal'

export default function QuoteButton({ serviceName, steps, label, className }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>{label}</button>
      <FormModal isOpen={open} onClose={() => setOpen(false)} serviceName={serviceName} steps={steps} />
    </>
  )
}
