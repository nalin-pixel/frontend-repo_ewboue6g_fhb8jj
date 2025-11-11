import { Code2, Gauge, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Modern Aesthetics',
    desc: 'Glassmorphism, gradients, and interactive visuals for a premium look.'
  },
  {
    icon: Gauge,
    title: 'Fast Performance',
    desc: 'Optimized assets and lightweight UI for smooth interactions.'
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    desc: 'Clean structure ready to extend into a full product.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    desc: 'Best practices baked in for a safe foundation.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative z-10 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need to make it pop</h2>
          <p className="mt-3 text-white/70">A carefully crafted starter that blends cutting-edge visuals with practical components.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
