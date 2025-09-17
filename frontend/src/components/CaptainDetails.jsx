import React , {useContext}from 'react'
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext)
  
  return (
    <div>
       <div className='flex items-center justify-between mb-5'>
                <div className='flex items-center justify-start gap-3 '>
                  <img className='h-12 w-12 rounded-full object-cover' src='https://i.pinimg.com/736x/25/d3/8d/25d38dfa0adeadd525c3b53ffb61e8c1.jpg' alt=''></img>
                  <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
                </div>
                <div>
                  <h4 className='text-xl font-semibold'>₹0</h4>
                  <p className='text-sm font-medium text-gray-600'>Earned</p>
                </div>
              </div> 
              <div className='flex bg-gray-100 rounded-xl mt-13 p-5  justify-center gap-5 items-start'>
              <div className='text-center p-2'>
                <i className="text-2xl font-thin ri-time-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>hours online</p>
              </div>
              <div className='text-center p-2'>
                <i className="text-2xl font-thin ri-speed-up-line"></i>
                <h5 className='text-lg font-medium'>410</h5>
                <p className='text-sm text-gray-600'>km travelled</p>
                </div>        
              </div>
    </div>
  )
}

export default CaptainDetails
