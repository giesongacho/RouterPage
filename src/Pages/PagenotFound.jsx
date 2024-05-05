import React from 'react'
import {Link} from 'react-router-dom'
function PagenotFound() {
  return (
    <div className="h-screen">
        <div className="h-[10vh] flex justify-end items-center bg-slate-900 text-white ">
            <Link to="home"><span className="hover:underline cursor-pointer mr-5 font-semibold">Back to Home Page</span></Link>
        </div>
        <h2 className="flex items-center justify-center h-[90vh] font-bold">Page Not Found...</h2>
    </div>
  )
}

export default PagenotFound