export const metadata = {
  title: 'Email Confirmed | Boodow Clean',
  description: 'Your Boodow Clean account has been confirmed',
}

export default function EmailConfirmedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-boodow-navy to-boodow-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Email Confirmed!
        </h1>

        <p className="text-xl text-gray-100 mb-2">
          Your <strong className="text-boodow-gold">Boodow Clean</strong> account is ready.
        </p>

        <p className="text-gray-300 mb-8">
          Open the Boodow Clean app on your phone and log in with your email and password to get started.
        </p>

        {/* Next Steps */}
        <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
          <h2 className="text-sm font-semibold text-boodow-gold mb-4 uppercase">
            Next Steps
          </h2>
          <ol className="text-gray-200 space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="font-bold text-boodow-gold">1.</span>
              <span>Download Boodow Clean from Google Play Store</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-boodow-gold">2.</span>
              <span>Open the app and log in with your email</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-boodow-gold">3.</span>
              <span>Browse services and get started</span>
            </li>
          </ol>
        </div>

        {/* Help Link */}
        <p className="text-sm text-gray-300">
          Need help?{' '}
          <a href="mailto:info@boodowsolutions.com" className="text-boodow-gold font-semibold hover:underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  )
}
