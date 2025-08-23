
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import BgImage from "../assets/background-home.jpeg"

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-80 h-30 ml-8' src={logo} alt="" />
        <div className='bg-gray-500 pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold text-center '>Welcome to RideSync</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
   
  )
}

export default Start