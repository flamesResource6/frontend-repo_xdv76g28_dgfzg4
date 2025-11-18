import React from 'react'
import Navbar from '../components/Navbar'
import AdminPanel from '../components/AdminPanel'

export default function Admin(){
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <AdminPanel />
    </div>
  )
}
