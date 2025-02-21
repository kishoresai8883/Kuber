import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault()
    const captain = {
      email: email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className='w-20 pb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="logo" />
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
        <p className="text-center">Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>
      <div>
        <Link to='/login'
          className='bg-[#d5622d] w-full px-4 py-2 mb-5 flex items-center justify-center text-white font-semibold rounded-lg text- placeholder: text-base'>
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin

