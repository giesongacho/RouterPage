import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from '../Pages/login';
import Home from '../Pages/Home';
import Facebook from "../Pages/Facebook";
import Instagram from "../Pages/Instagram";
import Skype from "../Pages/Skype";
import PagenotFound from '../Pages/PagenotFound';
function Routing() {
  return (
   <Routes >
        <Route path="/" element={<Login />}/>
        <Route path="home" element={<Home />}/>
        <Route path="facebook" element={<Facebook />}/>
        <Route path="instagram" element={<Instagram />}/>
        <Route path="skype" element={<Skype />}/>
        <Route path="*" element={<PagenotFound />}/>
   </Routes>
  )
}

export default Routing