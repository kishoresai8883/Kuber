import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ userData, setUserData ] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className='w-16 pb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="logo" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 w-full px-4 py-2 rounded border text-lg placeholder: text-base"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input 
            type="password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" 
            className="bg-[#eeeeee] mb-7 rounded w-full px-4 py-2 text-lg placeholder: text-base" 
          />
          <button className="bg-[#111] text-white font-semibold w-full mb-7 rounded-lg px-4 py-2 text-lg placeholder: text-base">
            Login
          </button>
        </form>
        <p className="text-center">New here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login'
          className='bg-[#10b461] w-full px-4 py-2 mb-5 flex items-center justify-center text-white font-semibold rounded-lg text- placeholder: text-base'>
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
