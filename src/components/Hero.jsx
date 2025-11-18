import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid lg:grid-cols-2 items-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"/>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(59,130,246,0.15),transparent_40%)]"/>
      <div className="px-6 md:px-10 py-16">
        <div className="max-w-xl">
          <p className="text-sky-300/90 text-sm uppercase tracking-widest">Portfolio</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Sunny Kumar
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            B.Tech in ECE • Frontend & Backend Developer
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['HTML','CSS','JavaScript','Python','C','Node.js','React','MongoDB'].map(s => (
              <span key={s} className="px-3 py-1.5 rounded-full bg-slate-800/70 text-sky-300 border border-slate-700/60 text-sm">
                {s}
              </span>
            ))}
          </div>
          <a href="#projects" className="inline-block mt-10 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition">View Projects</a>
        </div>
      </div>
      <div className="h-[60vh] lg:h-[90vh]">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
      </div>
    </section>
  )
}
