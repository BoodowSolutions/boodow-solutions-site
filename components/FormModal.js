'use client'

import { useState } from 'react'
import axios from 'axios'

export default function FormModal({ isOpen, onClose, serviceName, steps }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const currentStepData = steps[currentStep]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // Send to API route which will use Resend
      await axios.post('/api/submit-form', {
        serviceName,
        formData,
        timestamp: new Date().toISOString(),
      })

      setMessage('✓ Request sent successfully! We will get back to you soon.')
      setTimeout(() => {
        setCurrentStep(0)
        setFormData({})
        onClose()
      }, 2000)
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const isLastStep = currentStep === steps.length - 1

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-boodow-navy text-white p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold">{serviceName}</h2>
          <button
            onClick={onClose}
            className="text-white hover:opacity-70"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Step {currentStep + 1}</span>
              <span>{currentStep + 1} of {steps.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-boodow-gold h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-boodow-navy mb-2">
                {currentStepData.label}
              </label>

              {currentStepData.type === 'select' ? (
                <select
                  name={currentStepData.name}
                  value={formData[currentStepData.name] || ''}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-boodow-gold"
                >
                  <option value="">Select an option</option>
                  {currentStepData.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : currentStepData.type === 'textarea' ? (
                <textarea
                  name={currentStepData.name}
                  value={formData[currentStepData.name] || ''}
                  onChange={handleChange}
                  placeholder={currentStepData.placeholder}
                  rows="4"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-boodow-gold"
                />
              ) : (
                <input
                  type={currentStepData.type}
                  name={currentStepData.name}
                  value={formData[currentStepData.name] || ''}
                  onChange={handleChange}
                  placeholder={currentStepData.placeholder}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-boodow-gold"
                />
              )}
            </div>

            {message && (
              <div className={`mb-4 p-3 rounded text-sm ${message.includes('✓') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition"
                >
                  ← Back
                </button>
              )}

              {!isLastStep ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 px-4 py-2 bg-boodow-gold text-boodow-navy rounded font-semibold hover:bg-yellow-400 transition"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-boodow-navy text-white rounded font-semibold hover:bg-boodow-dark transition disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Submit Request'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
