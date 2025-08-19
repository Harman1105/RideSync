import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {

  const navigate = useNavigate();
  const {user,setUser} = useContext(UserDataContext);

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = async(e) =>{
        e.preventDefault();

        const userData = {
          email : email,
          password : password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)

        if(response.status == 200){

          const data = response.data;
          setUser(data);
          localStorage.setItem('token',data.token)
          navigate('/home')
          
        }

        setEmail(' ');
        setPassword(' ');

      }
  
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
          <img className='w-80 h-30 ml-8 mb-10 ' src={logo} alt="" />
      
      <form onSubmit = {
        (e)=>{
          submitHandler(e)
        }
      } >
        <h3 className='text-lg font-medium mb-2 '>Please Enter Your Email</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
               type='email' 
               required 
               value={email}
               onChange={(e)=>{
                setEmail(e.target.value)
               }}
               placeholder='email@example.com'></input>

        <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         type='password'
         required 
         value={password}
         onChange={(e)=>{
            setPassword(e.target.value)
         }}
         placeholder='password'></input>

        <button 
        className='bg-[#111] mb-3 mt-7 text-white rounded px-4 py-2 border w-full text-lg font-medium placeholder:text-base'>
        Login</button>
        <p className="text-center">New Here?<Link to="/signup"className="text-blue-600"> Create New Account</Link></p>
      </form> 
      </div>
      <div>
        <Link to="/captain-login" className="bg-[#10b461] mb-7 mt-7 flex items-center justify-center text-white rounded px-4 py-2 border w-full text-lg font-medium placeholder:text-base">Sign in as Driver</Link>
      </div>
    </div>
  )
} 

export default UserLogin
