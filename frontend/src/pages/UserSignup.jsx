import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'


const UserSignup = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [userData, setUserData] = useState({})

  const navigate = useNavigate();
  const {user,setUser} = useContext(UserDataContext);
  

  const submitHandler = async(e)=>{
      e.preventDefault();

      const newUser = {
        fullname : {
          lastname : lastName,
          firstname : firstName
        },
        email : email,
        password : password, 
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register` , newUser)

      if(response.status == 200){
          const data = response.data;

          setUser(data.user);
          localStorage.setItem('token',data.token)
          navigate('/home')
      }

      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');

  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
          <img className='w-80 h-30 ml-8  ' src={logo} alt="" />
      
      <form onSubmit = {
        (e)=>{
          submitHandler(e)
        }
      } >

        <h3 className='text-lg font-medium mb-2 '>Please Enter Your Name</h3>
        <div className='flex gap-2 mb-4'>
          <input className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
               type='text' 
               required 
               value={firstName}
               onChange={(e)=>{
                setFirstName(e.target.value)
               }} 
               placeholder='first name'></input>
          <input className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
               type='text' 
               required  
               value={lastName}
               onChange={(e)=>{
                setLastName(e.target.value)
               }}
               placeholder='last name'></input>
        </div>

        <h3 className='text-lg font-medium mb-5 '>Please Enter Your Email</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
               type='email' 
               required  
               value={email}
               onChange={(e)=>{
                setEmail(e.target.value)
               }}
               placeholder='email@example.com'></input>

        <h3 className='text-lg font-medium mb-5'>Enter your password</h3>
        <input className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type='password'
              required 
              value={password}
              onChange={(e)=>{
              setPassword(e.target.value)
              }}
         placeholder='password'></input>

        <button 
        className='bg-[#111] mb-5 mt-7 text-white rounded px-4 py-2 border w-full text-lg font-medium placeholder:text-base'>
        Create New Account</button>
        <p className="text-center">Already have an Account? <Link to="/login"className="text-blue-600">Login Here</Link></p>
      </form> 
      </div>
       <div>
        <Link to="/captain-login" className="bg-[#10b461] mb-5 mt-7 flex items-center justify-center text-white rounded px-4 py-2 border w-full text-lg font-medium placeholder:text-base">Sign in as Driver</Link>
      </div>

    </div>
  )
}

export default UserSignup
