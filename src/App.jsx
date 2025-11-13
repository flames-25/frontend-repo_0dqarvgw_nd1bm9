import { useState } from 'react'

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#sustainability', label: 'Sustainability' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/90 grid place-items-center text-white font-bold">S</div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight">Satyacraft Shop</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 transition-colors shadow-sm">
              Shop with Us
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-emerald-600 text-white text-center hover:bg-emerald-700">
                Shop with Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-200/40 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-amber-200/40 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs tracking-wider uppercase font-semibold text-emerald-700 bg-emerald-100 rounded-full px-3 py-1">Handcrafted with love</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Recycled Bags & Baskets, made by hand for everyday living
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-xl">
              Satyacraft Shop crafts beautiful, durable pieces from upcycled materials. Sustainable by design, made in small batches, and finished with care.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#products" className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 transition-colors shadow-sm">
                Explore Collection
              </a>
              <a href="#about" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-800 font-medium hover:bg-gray-50">
                Our Story
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"/>Eco-friendly</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"/>Fair trade</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-500"/>Handmade</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1610397898938-e697a0e62b7e?q=80&w=1600&auto=format&fit=crop"
                alt="Handwoven baskets and recycled bags"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-4 w-64">
              <p className="text-sm text-gray-700">Each piece diverts plastic from landfills and supports artisan livelihoods.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Products() {
  const items = [
    {
      title: 'Market Tote',
      price: '$28',
      image: 'https://images.unsplash.com/photo-1692689386358-910e46764d20?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXJrZXQlMjBUb3RlfGVufDB8MHx8fDE3NjMwMTgwNzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      desc: 'Roomy recycled-plastic tote with reinforced handles.'
    },
    {
      title: 'Storage Basket',
      price: '$22',
      image: 'https://images.unsplash.com/photo-1616690710400-a16d146927c5?q=80&w=1600&auto=format&fit=crop',
      desc: 'Handwoven basket for plants, toys, or laundry.'
    },
    {
      title: 'Mini Carry Bag',
      price: '$18',
      image: 'https://images.unsplash.com/photo-1683833329973-e2d6cb9ca861?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pJTIwQ2FycnklMjBCYWd8ZW58MHwwfHx8MTc2MzAxODA3NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      desc: 'Compact everyday bag, surprisingly sturdy.'
    },
    {
      title: 'Picnic Basket',
      price: '$35',
      image: 'https://images.unsplash.com/photo-1596241913274-fd9f65e3a2b5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQaWNuaWMlMjBCYXNrZXR8ZW58MHwwfHx8MTc2MzAxODA3NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      desc: 'Classic weave, sustainable materials, timeless look.'
    },
  ]

  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Featured Products</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Thoughtfully designed pieces made from responsibly sourced recycled materials.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black transition-colors">Custom Order</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p, i) => (
            <article key={i} className="group rounded-xl overflow-hidden ring-1 ring-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"/>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{p.title}</h3>
                  <span className="text-emerald-700 font-medium">{p.price}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <button className="mt-3 w-full rounded-md bg-emerald-600 text-white py-2 text-sm font-medium hover:bg-emerald-700">Enquire</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-700">
            Satyacraft Shop began with a simple idea: turn waste into beauty while creating fair, dignified work. We partner with local artisans who transform recycled plastic into durable, modern designs.
          </p>
          <p className="mt-3 text-gray-700">
            Each purchase supports sustainable livelihoods and helps keep our environment clean. Small variations are part of the charm—no two pieces are exactly alike.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="text-2xl font-extrabold text-emerald-700">5k+</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Bottles Upcycled</div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="text-2xl font-extrabold text-emerald-700">30+</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Artisans</div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="text-2xl font-extrabold text-emerald-700">100%</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Handmade</div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1561117468-1b1d3d1b47a2?q=80&w=1600&auto=format&fit=crop"
                alt="Artisan weaving recycled materials"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-4 w-64">
              <p className="text-sm text-gray-700">Ethically made in small community workshops. Fair wages, safer materials.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Sustainability() {
  const points = [
    {
      title: 'Recycled Materials',
      text: 'We primarily use post-consumer plastic and reclaimed fibers.'
    },
    {
      title: 'Low-Impact Production',
      text: 'Small-batch handcrafting uses minimal energy and water.'
    },
    {
      title: 'Circular Mindset',
      text: 'Designed for longevity and easy repair to reduce waste.'
    }
  ]

  return (
    <section id="sustainability" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Sustainability at Heart</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">From materials to packaging, we make thoughtful choices that are kinder to the planet and people.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div key={i} className="rounded-xl bg-gradient-to-b from-emerald-50 to-white p-6 ring-1 ring-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/10 text-emerald-700 grid place-items-center font-bold">{i+1}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-tr from-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get in touch</h2>
          <p className="mt-3 text-gray-600">Wholesale, custom sizes, or a simple hello—we’d love to hear from you.</p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p><span className="font-semibold">Email:</span> hello@satyacraft.shop</p>
            <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
            <p><span className="font-semibold">Hours:</span> Mon–Sat, 9am–6pm IST</p>
          </div>

          <div className="mt-8 flex gap-3">
            <a href="mailto:hello@satyacraft.shop" className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700">Email Us</a>
            <a href="#products" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-800 font-medium hover:bg-gray-50">Browse Products</a>
          </div>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Your name"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="you@example.com"/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Tell us what you need..."/>
            </div>
          </div>
          <button className="mt-4 w-full rounded-md bg-gray-900 text-white py-2.5 font-medium hover:bg-black">Send Message</button>
          <p className="mt-2 text-xs text-gray-500">This demo form doesn’t send data. Replace with your preferred form tool.</p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white text-gray-900 grid place-items-center font-bold">S</div>
          <p className="text-sm">© {new Date().getFullYear()} Satyacraft Shop. All rights reserved.</p>
        </div>
        <div className="text-sm flex items-center gap-4">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#sustainability">Sustainability</a>
          <a className="hover:text-white" href="#contact">Contact</a>
          <a className="hover:text-white" href="/test">System Test</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Nav />
      <Hero />
      <Products />
      <About />
      <Sustainability />
      <Contact />
      <Footer />
    </div>
  )
}
