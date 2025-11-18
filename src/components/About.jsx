import React from 'react'

export default function About(){
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-10 bg-slate-900">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
        <p className="text-slate-300 mt-4 leading-relaxed">
          I am Sunny Kumar, a B.Tech student in Electronics & Communication Engineering from
          Gandhi Institute for Education and Technology, Bhubaneswar (Bainitang), Odisha. I enjoy
          building interactive, modern web experiences across the stack.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-800/60 bg-slate-950/60 p-5">
            <h3 className="text-white font-semibold">Education</h3>
            <p className="text-slate-300 mt-2">B.Tech in ECE</p>
            <p className="text-slate-400">Gandhi Institute for Education and Technology</p>
            <p className="text-slate-500">Bhubaneswar, Bainitang, Odisha</p>
          </div>
          <div className="rounded-xl border border-slate-800/60 bg-slate-950/60 p-5">
            <h3 className="text-white font-semibold">Focus</h3>
            <p className="text-slate-300 mt-2">Frontend, backend, and databases with a love for clean UI.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
