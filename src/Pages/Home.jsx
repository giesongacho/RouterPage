import React from 'react'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Instagram from './Instagram'
function Home() {
    const [category,setCategory] = useState(false)
    const navigate = useNavigate()
    const logout = ()=>{
        alert("Are you sure you want to logout...")
        navigate("/")
    }
  return (
    <div className="h-screen">
        <nav className="h-[10vh] bg-slate-900 text-white flex items-center justify-end">
            <ul className="flex items-center justify-center gap-x-5 w-[25rem]">
                <li onClick={()=>setCategory(!category)} className="hover:opacity-50 cursor-pointer text-1xl">Show Category</li>
                <li><span className="text-[0.9rem]">Profile</span>|<span>Anonymous</span></li>
                <li className="hover:opacity-50 cursor-pointer" onClick={logout}>Logout</li>
            </ul>
        </nav>
        <div>
            {category && (
                <nav className="h-[8vh] bg-slate-300 flex justify-start items-center cursor-pointer font-semibold text-[1.2rem]">
                    <ul className="flex gap-x-5 ml-5">
                        <Link to="/facebook">Facebook</Link>
                        <Link to="/instagram">Instragram</Link>
                        <Link to="/skype">Skype</Link>
                    </ul>
                </nav>
            )}
        </div>
    </div>
  )
}

export default Home