import React, { useEffect, useRef, useState } from 'react'
import logo from "../assets/logo.png"
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/vehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'


const Home = () => {

  const [pickup,setPickup] = useState('')
  const [destination,setDestination] = useState('')
  const [panel,setPanel] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen,setVehiclePanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const [confirmedRidePanel,setConfirmedRidePanel] = useState(false)
  const confirmedRidePanelRef = useRef(null)
  const [vehicleFound,setVehicelFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverdRef = useRef(null)
  const [waitingForDriver,setwaitingForDriver] = useState(false)




  const submitHandler = (e)=>{
    e.preventDefault();
  }

    useEffect(() => {
    if(panel){
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  }, [panel])

  useGSAP(function(){
   if(vehiclePanelOpen){
     gsap.to(vehiclePanelRef.current,{
      transform : 'translateY(0)'
    })
   }else{
    gsap.to(vehiclePanelRef.current,{
      transform : 'translateY(100%)'
    })
   }
  },[vehiclePanelOpen])

  useGSAP(function(){
   if(confirmedRidePanel){
     gsap.to(confirmedRidePanelRef.current,{
      transform : 'translateY(0)'
    })
   }else{
    gsap.to(confirmedRidePanelRef.current,{
      transform : 'translateY(100%)'
    })
   }
  },[confirmedRidePanel])


   useGSAP(function(){
   if(vehicleFound){
     gsap.to(vehicleFoundRef.current,{
      transform : 'translateY(0)'
    })
   }else{
    gsap.to(vehicleFoundRef.current,{
      transform : 'translateY(100%)'
    })
   }
  },[vehicleFound])


     useGSAP(function(){
   if(waitingForDriver){
     gsap.to(waitingForDriverdRef.current,{
      transform : 'translateY(0)'
    })
   }else{
    gsap.to(waitingForDriverdRef.current,{
      transform : 'translateY(100%)'
    })
   }
  },[waitingForDriver])
  
  return (


    <div className='h-screen relative overflow-hidden'>
      <img className='w-40 h-20 absolute' src={logo} alt="logo"/>
      <div  className='h-screen w-screen'> 
        <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif' alt=''></img>
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white'>
          <h5 ref={panelCloseRef}
          onClick={()=>{
            setPanel(false)
          }} 
           className='absolute top-6 right-3 text-3xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input 
          className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5'
           type="text" 
           onClick={()=>{
            setPanel(true)
           }}
           value={pickup}
           onChange={(e)=>{
            setPickup(e.target.value)
           }}
           placeholder='Add a pickup location'
            />
          <input
           className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5'
            type="text" 
            onClick={()=>{
            setPanel(true)
           }}
           value={destination}
           onChange={(e)=>{
            setDestination(e.target.value)
           }}
            placeholder='Enter your destination'
             />
        </form>
        </div>
        <div ref={panelRef} className=' bg-white  h-0'>
          <LocationSearchPanel setPanel={setPanel} setVehiclePanelOpen = {setVehiclePanelOpen}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10'>
      <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={confirmedRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3  py-6'>
      <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicelFound={setVehicelFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3  py-6'>
      <LookingForDriver setVehicelFound={setVehicelFound} />
      </div>
      <div ref={waitingForDriverdRef} className='fixed w-full z-10 bottom-0  bg-white px-3  py-6'>
      <WaitingForDriver  waitingForDriver={waitingForDriver}/>
      </div>
    </div>
  ) 
}

export default Home
