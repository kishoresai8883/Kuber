import React from 'react'
import  { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/empty-asphalt-road-through-modern-city-china_1127-3581.jpg?t=st=1735226961~exp=1735230561~hmac=b8eb8847d3b3bed136913012ec9637c49bd02363c938e691b603c1b024968038&w=1060)] h-screen pt-8 w-full flex flex-col justify-between">
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
        <div className='bg-white pb-7 px-4 py-4'>
          <h2 className='text-3xl font-bold'>Get Started with Kuber</h2>
          <Link to='/login' className='bg-black text-white flex justify-center items-center w-full py-3 mt-5 rounded'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start

