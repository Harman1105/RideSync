import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
       <div className='flex items-center justify-between mb-5'>
                <div className='flex items-center justify-start gap-3 '>
                  <img className='h-10 w-10 rounded-full object-cover' src='https://imgs.search.brave.com/RRDMpJrj5FMN9T-jjOXakLKIOgV-4-f35VsXWmgfXlc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0LzY1LzQ2Lzcy/LzM2MF9GXzE0NjU0/NjcyMTFfZGdiOTd0/RU1zQTFhbjNGQUVq/ekZyQU00MUJvWUxP/QzQuanBn' alt=''></img>
                  <h4 className='text-lg font-medium'>Harsh Patel</h4>
                </div>
                <div>
                  <h4 className='text-xl font-semibold'>Rs.295 </h4>
                  <p className='text-sm font-medium text-gray-600'>Earned</p>
                </div>
              </div> 
              <div className='flex bg-gray-100 rounded-xl justify-center gap-5 items-start'>
              <div className='text-center'>
                <i className="text-2xl font-thin ri-time-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>hours online</p>
              </div>
              <div className='text-center'>
                <i className="text-2xl font-thin ri-speed-up-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>hours online</p>
                </div>
              <div className='text-center'>
                <i className="text-2xl font-thin ri-article-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>hours online</p>
                </div>
        
              </div>
    </div>
  )
}

export default CaptainDetails
