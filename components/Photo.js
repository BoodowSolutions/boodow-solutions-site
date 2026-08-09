import fs from 'fs'
import path from 'path'

/**
 * Server component: renders the photo if it exists in /public,
 * otherwise renders an elegant branded placeholder.
 * Drop the real photo into public/images/ with the exact filename and redeploy — it appears automatically.
 */
export default function Photo({ src, alt, className = '' }) {
  const exists = fs.existsSync(path.join(process.cwd(), 'public', src))

  if (exists) {
    return <img src={src} alt={alt} className={`object-cover ${className}`} />
  }

  return (
    <div className={`relative bg-gradient-to-br from-boodow-navy via-boodow-dark to-boodow-navy flex items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, #FEDD00 0%, transparent 40%)' }} />
      <div className="text-center px-6">
        <svg className="w-10 h-10 mx-auto mb-3 text-boodow-gold opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="text-white/40 text-xs font-medium">{alt}</p>
      </div>
    </div>
  )
}
