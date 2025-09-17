import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 
       className='p-1 w-[90%] text-center absolute top-0'
       onClick={()=>{
        props.waitingForDriver(false)
       }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
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
  )
}

export default WaitingForDriver
