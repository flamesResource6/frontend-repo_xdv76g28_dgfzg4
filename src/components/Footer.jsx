export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Sunny Kumar. All rights reserved.</p>
        <div className="flex items-center gap-3 text-slate-300 text-sm">
          <a href="mailto:sunny@example.com" className="hover:text-white">Email</a>
          <span className="opacity-30">•</span>
          <a href="#admin" className="hover:text-white">Admin</a>
        </div>
      </div>
    </footer>
  )
}
