import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
    <h5 
     className='p-1 w-[90%] text-center absolute top-0'
     onClick={()=>{
      props.setFinishRidePanel(false)
     }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3  className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
          <div className='flex items-center justify-between gap-3 '>
              <img className='h-10 w-10 rounded-full object-cover' 
              src='https://imgs.search.brave.com/2tMIA42V7WXeLfTEHOGJZZCWK6mN45DHf9wFQ7aTPzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2VuZXJhdGVk/LnBob3Rvcy9jcFUy/VzBFX0p5WUdCLU1a/MHF5c2xGeGRiVm9m/R1BYVGlqdlhRWS1Q/Vm9JL2c6bm8vcnM6/ZmlsbDoyNTY6Mzg0/L2N6TTZMeTluY0do/dmRHOXovTFhCeWIy/UXRhSFZ0WVc0dC9a/MkZzYkdWeWVTODFP/RGd2L1lqVTJNalJo/WkRVdFpEUTQvTUMw/ME1qRXdMVGd3T1RZ/dC9NVFUwTWpFek5E/ZG1Zek15L0xURXVh/bkJuLmpwZw' 
              alt=''></img>
              <h2 className='text-lg font-medium'>Harsh Patel</h2>
          </div>
          <h5 className='text-lg font-semibold'>2.2 km</h5>
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
      
      <div className='mt-6 w-full'>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
          <Link to='/captain-riding' className='w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg'>
        Finish Ride
      </Link>
          </form>
      </div>
      </div>
  </div>
  )
}

export default FinishRide
