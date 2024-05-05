import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
// import Admin from '../Custom/Admin'
import {useState} from 'react'
function Login() {
const navigate = useNavigate()
const [users,setUser] = useState({
    user: "",
    password: ""
})
const handleChange = (e)=>{
    const {name,value} = e.target;
    setUser((prevState)=>{
        return {
            ...prevState,
            [name]:value
        }
    })
}

const handleSubmit = (e)=>{
    e.preventDefault()
    const {user,password} = users;
    if(user == "" || password == ""){
        alert("input field must not be empty")
    }
    else if(user == "admin" && password == "admin"){
        navigate('/Home')
    }
    else{
        alert('Incorrect Username or Password')
    }
}
  return (
    <div className="h-screen flex items-center justify-center font-semibold">
        <form onSubmit={handleSubmit} className="h-1/2 w-1/4 bg-slate-900 flex flex-col justify-center items-center gap-y-5">
            <h2 className="text-3xl text-white font-bold">Login</h2>
            <div className="  flex justify-center gap-x-2">
                <label className="text-white">Username</label>
                <input type="text" placeholder="Input Username" name="user" onChange={handleChange}/>
            </div>
            <div className="  flex justify-center gap-x-3">
                <label className="text-white">Password</label>
                <input type="password" placeholder="Input Password" name="password" onChange={handleChange}/>
            </div>
            <div>
                <button type="submit" className="py-2 px-10 rounded-full text-white hover:opacity-50 bg-red-500">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login;
