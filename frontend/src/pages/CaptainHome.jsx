import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"


const CaptainHome = () => {
  return (
       <div className='h-screen'>
        <div className='fixed p-3 top-0 flex justify-between w-screen'>
          <img className='w-40 h-14' src={logo}></img>
           <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link >
        </div>
        <div className='h-1/2'>
        <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif' alt=''></img>            
        </div>
        <div className='h-1/2 p-4'>
               <div className='flex items-center justify-between ' >
        <img className="h-10" src='https://imgs.search.brave.com/bBRNRyxRXdi9U502745vfAPCB9LTOWTwQ3EjdIEfIsw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi95ZWxs/b3ctdGF4aS1jYXIt/aXNvbGF0ZWQtd2hp/dGUtYmFja2dyb3Vu/ZC1zdHVkaW8tc2hv/dC0zNzkyNjgyOTUu/anBn'></img>
        <div className='text-right'>
            <h2 className='text-lg font-medium'>Anuj Singh</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP 04 AB 1234</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
        </div>
        
        <div className='flex gap-2 justify-between items-center flex-col'>
        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-2 border-b-2'>
                  <i className=" text-lg ri-map-pin-2-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium '>Location</h3>
                    <p className='text- text-gray-600'>Landmark</p>
                  </div>
            </div>
            <div className='flex items-center gap-5 p-2 border-b-2'>
                  <i className="ri-map-pin-range-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium '>Location</h3>
                    <p className='text- text-gray-600'>Landmark</p>
                  </div>
            </div>
            <div className='flex items-center gap-5 p-2'>
                  <i className="ri-money-rupee-circle-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium '>XXX /-</h3>
                    <p className='text- text-gray-600'>Cash </p>
                  </div>
            </div>
        </div>
        </div>                
        </div>
    </div>
  )
}

export default CaptainHome  
