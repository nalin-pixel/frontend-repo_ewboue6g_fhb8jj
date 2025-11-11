import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
                <Sparkles size={18} />
              </span>
              <span className="text-lg font-semibold text-white/90 drop-shadow">Vibe</span>
            </a>

            <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="rounded-xl bg-white text-gray-900 px-4 py-2 font-medium shadow hover:shadow-md transition-shadow"
              >
                Get Started
              </a>
            </nav>

            <button
              aria-label="Toggle Menu"
              className="md:hidden rounded-lg p-2 text-white/90 hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <nav className="flex flex-col gap-2 py-3 text-white/80">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-lg px-2 py-2 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#get-started"
                  className="mt-2 rounded-xl bg-white text-gray-900 px-4 py-2 font-medium text-center shadow"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
