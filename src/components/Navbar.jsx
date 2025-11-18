import React from 'react'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold tracking-tight">Sunny Kumar</Link>
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <Link to="/admin" className="px-3 py-1.5 rounded-lg bg-sky-500 text-white hover:bg-sky-400">Admin</Link>
        </nav>
        <button className="md:hidden text-slate-300"><Menu size={22}/></button>
      </div>
    </header>
  )
}
