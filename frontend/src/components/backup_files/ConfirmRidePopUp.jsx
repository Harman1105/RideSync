import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

  const[otp,setOtp] = useState('')
  const navigate = useNavigate()

      const submitHandler = async (e) => {
        e.preventDefault()

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopUpPanel(false)
            props.setRidePopUpPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }


    }

  return (
    <div>
    <h5 
     className='p-1 w-[90%] text-center absolute top-0'
     onClick={()=>{
      props.setRidePopUpPanel(false)
     }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3  className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>
      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
          <div className='flex items-center justify-between gap-3 '>
              <img className='h-10 w-10 rounded-full object-cover' 
              src='https://i.pinimg.com/1200x/f9/b0/6e/f9b06eea4f4f576ca92fa2f35e6206f7.jpg' 
              alt=''></img>
              <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2>
          </div>
          {/* <h5 className='text-lg font-semibold'>2.2 km</h5> */}
      </div>
      <div className='flex gap-2 justify-between items-center flex-col'>
      
      <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-2 border-b-2'>
                <i className=" text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h3 className='text-lg font-medium '>Pickup</h3>
                  <p className='text- text-gray-600'>{props.ride?.pickup}</p>
                </div>
          </div>
          <div className='flex items-center gap-5 p-2 border-b-2'>
                <i className="ri-map-pin-range-fill"></i>
                <div>
                  <h3 className='text-lg font-medium '>Destination</h3>
                  <p className='text- text-gray-600'>{props.ride?.destination}</p>
                </div>
          </div>
          <div className='flex items-center gap-5 p-2'>
                <i className="ri-money-rupee-circle-fill"></i>
                <div>
                  <h3 className='text-lg font-medium '>Fare</h3>
                  <p className='text- text-gray-600'>₹{props.ride?.fare}</p>
                </div>
          </div>
      </div>
      
      <div className='mt-6 w-full'>
          <form onSubmit={submitHandler}>
            <input type="text" placeholder='Enter OTP' 
            className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5 font-mono'
            value={otp}
            onChange={(e)=>{
               setOtp(e.target.value)
            }} />
          <button  className='w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg'>
        Confirm
      </button>
      <button onClick={()=>{
          props.setConfirmRidePopUpPanel(false)
          props.setRidePopUpPanel(false)
      }} className='w-full mt-1 bg-red-500 text-white font-semibold p-2 rounded-lg'>
        Cancel
      </button>
          </form>
      </div>
      </div>
  </div>
  )
}

export default ConfirmRidePopUp
