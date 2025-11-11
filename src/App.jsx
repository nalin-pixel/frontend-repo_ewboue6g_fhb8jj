import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />

      <footer className="bg-slate-950/95 py-10 text-white/70">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">© {new Date().getFullYear()} Vibe — All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-white">Privacy</a>
              <span className="text-white/30">•</span>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
