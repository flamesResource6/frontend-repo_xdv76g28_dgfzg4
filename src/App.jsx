import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Projects />
      <footer className="px-6 md:px-10 py-10 border-t border-slate-800 bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p>© {new Date().getFullYear()} Sunny Kumar</p>
          <a href="/admin" className="text-sky-400 hover:text-sky-300">Admin Panel</a>
        </div>
      </footer>
    </div>
  )
}

export default App
