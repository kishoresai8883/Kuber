import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const navigate = useNavigate()

  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/login')
    }

    setFirstName('')
    setLastName('')
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
          <h3 className="text-base font-medium mb-2">What's your Name</h3>
          <div className="flex gap-4">
            <input 
              type="text" 
              required
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 mb-7 w-full px-4 py-2 rounded border text-lg placeholder: text-base"
            />
            <input 
              type="text" 
              required
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 mb-7 w-full px-4 py-2 rounded border text-lg placeholder: text-base"
            />
          </div>
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
          <button className="bg-[#111] text-white font-semibold w-full mb-5 rounded-lg px-4 py-2 text-lg placeholder: text-base">
            Create Account
          </button>
        </form>
        <p className="text-center">Already have an Account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup

