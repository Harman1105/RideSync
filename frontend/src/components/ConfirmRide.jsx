import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 
       className='p-1 w-[90%] text-center absolute top-0'
       onClick={()=>{
        props.setVehiclePanel(false)
       }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3  className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
        <div className='flex gap-2 justify-between items-center flex-col'>
        <img className="h-20"
        src='https://imgs.search.brave.com/bBRNRyxRXdi9U502745vfAPCB9LTOWTwQ3EjdIEfIsw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi95ZWxs/b3ctdGF4aS1jYXIt/aXNvbGF0ZWQtd2hp/dGUtYmFja2dyb3Vu/ZC1zdHVkaW8tc2hv/dC0zNzkyNjgyOTUu/anBn'></img>
        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-2 border-b-2'>
                  <i className=" text-lg ri-map-pin-2-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium '>Starting Location</h3>
                    <p className='text- text-gray-600'>{props.pickup}</p>
                  </div>
            </div>
            <div className='flex items-center gap-5 p-2 border-b-2'>
                  <i className="ri-map-pin-range-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium '>Destination</h3>
                    <p className='text- text-gray-600'>{props.destination}</p>
                  </div>
            </div>
            <div className='flex items-center gap-5 p-2'>
                  <i className="ri-money-rupee-circle-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium '>Fare</h3>
                    <p className='text- text-gray-600'>{props.fare[props.vehicleType]}</p>
                  </div>
            </div>
        </div>
        <button onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
          props.createRide()
        }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>
          Confirm
        </button>
        </div>
    </div>
  )
}

export default ConfirmRide
