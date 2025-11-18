import React from 'react'

const projects = [
  { title: 'Study Care Park Website', desc: 'Educational portal with modern UI and resources.', link: '#'},
  { title: 'Tech Wave Shree Website', desc: 'Tech service site with responsive pages and forms.', link: '#'},
]

export default function Projects(){
  return (
    <section id="projects" className="relative py-16 md:py-24 px-6 md:px-10 bg-slate-950 border-t border-slate-800/60">
      <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
      <p className="text-slate-300 mt-2">A selection of work showcasing design and development.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {projects.map((p) => (
          <div key={p.title} className="group rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 hover:border-sky-500/50 transition">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <span className="text-xs text-sky-300/80">Website</span>
            </div>
            <p className="text-slate-300 mt-3">{p.desc}</p>
            <a href={p.link} className="mt-5 inline-block text-sky-400 hover:text-sky-300">View</a>
          </div>
        ))}
      </div>
    </section>
  )
}
