import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
       <h5 
       className='p-1 w-[90%] text-center absolute top-0'
       onClick={()=>{
        props.setVehiclePanelOpen(false)
       }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3  className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
        }}
        className='flex w-full active:border-2 mb-2 border-black  rounded-xl p-3 items-center justify-between'>
          <img className="h-12 m-2 "src='https://imgs.search.brave.com/bBRNRyxRXdi9U502745vfAPCB9LTOWTwQ3EjdIEfIsw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi95ZWxs/b3ctdGF4aS1jYXIt/aXNvbGF0ZWQtd2hp/dGUtYmFja2dyb3Vu/ZC1zdHVkaW8tc2hv/dC0zNzkyNjgyOTUu/anBn'></img>
           <div className=' w-1/2'>
              <h4 className='font-medium text-base'>RideSyncGO <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='text-xs font-normal text-gray-600 '>Affordable, compact rides</p>
           </div>
           <h2 className='text-xl font-semibold'>ruppess xxx </h2>
        </div>
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
        }} className='flex w-full active:border-2 mb-2 border-black rounded-xl p-3 items-center justify-between'>
          <img className="h-12 m-2 "src='https://imgs.search.brave.com/AEnQsgddaNCr4Dltr6z8MKyUBMvQQCYueSPHykVzqtA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NjQzMDk1L3Bob3Rv/L3JlZC1hbmQtYmxh/Y2stbW90b3JjeWNs/ZS1vbi1hLXdoaXRl/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWVLMmxvcFJ2ZEh5/STUzS1dlXzhCSkhj/U3p1Z3JTbWZQd1hh/WTdwanB0ckU9'></img>
           <div className=' w-1/2'>
              <h4 className='font-medium text-base'>Motorcycle <span><i class="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='text-xs font-normal text-gray-600 '>Affordable, motor rides</p>
           </div>
           <h2 className='text-xl font-semibold'>ruppess xxx </h2>
        </div>
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
        }} className='flex w-full active:border-2 mb-2 border-black rounded-xl p-3 items-center justify-between'>
          <img className="h-12 m-2 "src='https://imgs.search.brave.com/6jC_H3Y6OEentFAJl6bWOeYiMitwqYrIsIRMK2MCPc0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/OTEwMDQ1OS9waG90/by8zZC1yZW5kZXIt/b2YtYXV0b3JpY2tz/aGF3LWlzb2xhdGVk/LW9uLXdoaXRlLWJh/Y2tncm91bmQuanBn/P2I9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1zeFQ1Y0VSbV9u/SDhhRWJBRVBhX0t1/U3pkb3hKakQyaDdZ/QkY4MWRZcUdjPQ '></img>
           <div className=' w-1/2'>
              <h4 className='font-medium text-base'>Auto <span><i class="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>5 mins away</h5>
              <p className='text-xs font-normal text-gray-600 '>Affordable, rickshaw rides</p>
           </div>
           <h2 className='text-xl font-semibold'>ruppess xxx </h2>
        </div>
    </div>
  )
}

export default VehiclePanel
