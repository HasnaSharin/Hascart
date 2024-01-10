import React, { useState } from 'react'

import Button from '../../components/shared/button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

function SignUp() {
    const [isVisible,setIsVisible]=useState(false)
    const [name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');
    const [cpassword,setCpassword]=useState('')
    const toggleVisibility=()=>{
        setIsVisible(prev=>!prev)
    }
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col gap-10'>
      <form action="" className='flex flex-col w-[300px] h-auto justify-center items-center border-2 border-gray-500 rounded-lg gap-8 p-5'>
        <h3 className='text-3xl font-bold text-emerald-500'>Login</h3>
        <input type="text" onChange={(e)=>(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2' placeholder='Enter Your Name'/>
        <input type="text" onChange={(e)=>(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2' placeholder='Enter Your Mobile Number'/>



        <input type="email" onChange={(e)=>(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2' placeholder='Enter Your Email'/>
        <div className='relative w-full'>
         <input type={isVisible ? "text":"password"} onChange={(e)=>setPassword(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2' placeholder='Enter Your Password'/>
        {isVisible ? <VisibilityOffIcon onClick={toggleVisibility} className='absolute right-2 top-2 text-zinc-600'/>:
        <VisibilityIcon onClick={toggleVisibility} className='absolute right-2 top-2 text-zinc-600'/>}

        </div>
        <div className='relative w-full'>
         <input type={isVisible ? "text":"password"} onChange={(e)=>setPassword(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2' placeholder='Conform Your Password'/>
        {isVisible ? <VisibilityOffIcon onClick={toggleVisibility} className='absolute right-2 top-2 text-zinc-600'/>:
        <VisibilityIcon onClick={toggleVisibility} className='absolute right-2 top-2 text-zinc-600'/>}

        </div>
        
        <Button btnType="SignUp"/>
        <p>already a user? <Link to={'/login'} >  <span> login here </span></Link></p>


      </form>
    </div>
  )
}

export default SignUp;
