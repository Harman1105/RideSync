import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
      <h5 
       className='p-1 w-[90%] text-center absolute top-0'
       onClick={()=>{
        props.setRidePopUpPanel(false)
       }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3  className='text-2xl font-semibold mb-5'>New Ride Available!!</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center justify-between gap-3 '>
                <img className='h-10 w-10 rounded-full object-cover' 
                src='https://i.pinimg.com/1200x/f9/b0/6e/f9b06eea4f4f576ca92fa2f35e6206f7.jpg' 
                alt=''></img>
                <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " "+ props.ride?.user.fullname.lastname}</h2>
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
        <button onClick={()=>{
            props.setConfirmRidePopUpPanel(true)
            props.confirmRide();
          
        }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>
          Accept
        </button>
        <button onClick={()=>{
            props.setRidePopUpPanel(false)
        }} className='w-full mt-1 bg-gray-200 text-gray-700 font-semibold p-2 rounded-lg'>
          Ignore
        </button>
        </div>
    </div>
  )
}

export default RidePopUp
