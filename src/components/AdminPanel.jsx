import React, { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AdminPanel(){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const fetchPortfolio = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API}/api/portfolio`)
      if(!res.ok) throw new Error('Failed to fetch portfolio')
      const json = await res.json()
      setData(json)
    } catch(e){
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchPortfolio() }, [])

  const updateField = (path, value) => {
    setData((prev) => {
      const next = { ...prev }
      const keys = path.split('.')
      let cur = next
      for(let i=0; i<keys.length-1; i++) cur = cur[keys[i]]
      cur[keys[keys.length-1]] = value
      return next
    })
  }

  const save = async () => {
    try {
      setSaving(true)
      setError('')
      const payload = {
        name: data?.name,
        tagline: data?.tagline,
        education: data?.education,
        projects: data?.projects,
        skills: data?.skills,
        email: data?.email,
        phone: data?.phone,
        location: data?.location,
      }
      const res = await fetch(`${API}/api/portfolio`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Failed to save')
      await fetchPortfolio()
    } catch(e){
      setError(e.message)
    } finally {
      setSaving(false)
    }
  }

  if(loading) return <div className="p-6 text-slate-300">Loading...</div>
  if(error) return <div className="p-6 text-red-400">{error}</div>
  if(!data) return <div className="p-6 text-slate-300">No data</div>

  return (
    <section className="py-12 px-6 md:px-10 bg-slate-950 min-h-[60vh]">
      <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
      <p className="text-slate-300 mb-6">Edit your portfolio content and save.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-slate-300 text-sm">Name</label>
            <input value={data.name||''} onChange={e=>updateField('name', e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"/>
          </div>
          <div>
            <label className="block text-slate-300 text-sm">Tagline</label>
            <input value={data.tagline||''} onChange={e=>updateField('tagline', e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"/>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm">Degree</label>
              <input value={data.education?.degree||''} onChange={e=>updateField('education.degree', e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"/>
            </div>
            <div>
              <label className="block text-slate-300 text-sm">Branch</label>
              <input value={data.education?.branch||''} onChange={e=>updateField('education.branch', e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-slate-300 text-sm">College</label>
              <input value={data.education?.college||''} onChange={e=>updateField('education.college', e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-slate-300 text-sm">Location</label>
              <input value={data.education?.location||''} onChange={e=>updateField('education.location', e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"/>
            </div>
          </div>
          <div>
            <label className="block text-slate-300 text-sm">Skills (comma separated)</label>
            <input value={(data.skills||[]).join(', ')} onChange={e=>updateField('skills', e.target.value.split(',').map(s=>s.trim()).filter(Boolean))} className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"/>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3">
            <h3 className="text-white font-semibold">Projects</h3>
            {(data.projects||[]).map((p, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-slate-700 bg-slate-900">
                <input value={p.title} onChange={e=>{
                  const next = [...data.projects]; next[idx] = { ...p, title: e.target.value }; setData({ ...data, projects: next });
                }} className="w-full mb-2 px-3 py-2 rounded bg-slate-950 border border-slate-700 text-white" placeholder="Title"/>
                <input value={p.description||''} onChange={e=>{
                  const next = [...data.projects]; next[idx] = { ...p, description: e.target.value }; setData({ ...data, projects: next });
                }} className="w-full mb-2 px-3 py-2 rounded bg-slate-950 border border-slate-700 text-white" placeholder="Description"/>
                <input value={p.link||''} onChange={e=>{
                  const next = [...data.projects]; next[idx] = { ...p, link: e.target.value }; setData({ ...data, projects: next });
                }} className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-white" placeholder="Link"/>
              </div>
            ))}
            <button onClick={() => setData({ ...data, projects: [...(data.projects||[]), { title: '', description: '', link: '' }] })} className="px-3 py-2 rounded-lg bg-slate-800 text-sky-300 border border-slate-700">+ Add Project</button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm">Email</label>
              <input value={data.email||''} onChange={e=>updateField('email', e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"/>
            </div>
            <div>
              <label className="block text-slate-300 text-sm">Phone</label>
              <input value={data.phone||''} onChange={e=>updateField('phone', e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-slate-300 text-sm">Location</label>
              <input value={data.location||''} onChange={e=>updateField('location', e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"/>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button onClick={save} disabled={saving} className="px-5 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 disabled:opacity-60">{saving ? 'Saving...' : 'Save Changes'}</button>
        <button onClick={fetchPortfolio} className="px-5 py-3 rounded-xl bg-slate-800 text-sky-300 border border-slate-700">Refresh</button>
      </div>
    </section>
  )
}
