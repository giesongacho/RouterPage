import React from 'react'
import {useNavigate} from 'react-router-dom'
function Instagram() {
  const navigate = useNavigate()
  return (
    <div className="h-screen bg-slate-900 text-white font-bold">
      <nav className="h-[10vh] flex items-center justify-end mr-5">
        <button onClick={()=>navigate(-1)} className="hover:outline hover:outline-2 hover:opacity-50 bg-slate-700 py-3 px-10 rounded-full">Back</button>
      </nav>
      <h2 className="h-[90vh] flex items-center justify-center font-bold text-3xl">Instagram Page</h2>
    </div>
  )
}

export default Instagram