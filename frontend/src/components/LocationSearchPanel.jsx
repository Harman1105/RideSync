import React from 'react'

const LocationSearchPanel = (props) => {
  return (
    <div>
      {
        props.suggestions.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => {
              if (props.activeField === 'pickup') {
                props.setPickup(elem)
                props.setPanelOpen(true)
              } else {
                props.setDestination(elem)
              props.setPanelOpen(false)
              props.setVehiclePanel(true)
              }
              
            }}
            className='flex items-center border-2 p-3 border-gray-100 active:border-black rounded-xl justify-start gap-4 my-2'
          >
            <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'>
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className='text-lg font-medium'>{elem}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default LocationSearchPanel
