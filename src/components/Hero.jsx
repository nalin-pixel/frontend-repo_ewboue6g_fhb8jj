import Spline from '@splinetool/react-spline'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-xl">
          <Star className="h-4 w-4 text-yellow-300" />
          <span className="text-sm text-white/90">Interactive 3D experience</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Craft stunning experiences with a modern, vibrant touch
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          A sleek, glassy interface paired with an interactive 3D card that responds to your cursor. Perfect for showcasing products, apps, and creative work.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-gray-900 shadow hover:shadow-lg"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#showreel"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-xl hover:bg-white/20"
          >
            Watch Showreel
          </a>
        </div>
      </div>
    </section>
  )
}
