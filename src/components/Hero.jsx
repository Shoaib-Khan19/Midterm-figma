import React from 'react'
import head_img from '../assets/images/Image Placeholder.png'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";

function Hero() {
  return (
    <div className='flex flex-col md:flex-row md:gap-4 lg:gap-10'>
      <div className='flex'>
        <img src={head_img} alt="heri" className='object-contain w-full md:w-[397px] lg:w-[616px]'/>
        </div>

      <div className='flex flex-col py-[30px] px-8 md:px-0 md:w-2/5 lg:w-2/6'>
        <h2 className='font-bold text-2xl pb-[20px] lg:text-[51px]'>
          Create Account
        </h2>
        <p className='text-base lg:text-[22px]'>Welcome! enter your details and start creating, collecting and selling NFTs.</p>


        <div className='pt-[20px] text-[#2B2B2B] font-semibold flex justify-center md:justify-normal'>

          <form action="#" className='flex flex-col gap-4 w-full md:w-full lg:w-2/3'>
            <div className='flex gap-2 items-center py-[12px] px-[20px] bg-slate-50 rounded-full'><FaRegUser /><input type="text" name="username" placeholder='Username' className='outline-none bg-slate-50' /></div>
            <div className='flex gap-2 items-center py-[12px] px-[20px] bg-slate-50 rounded-full'><MdOutlineEmail /><input type="text" name="email" placeholder='Email Address' className='outline-none bg-slate-50' /></div>
            <div className='flex gap-2 items-center py-[12px] px-[20px] bg-slate-50 rounded-full'><MdLockOutline /><input type="text" name="Password" placeholder='Password' className='outline-none bg-slate-50' /></div>
            <div className='flex gap-2 items-center py-[12px] px-[20px] bg-slate-50 rounded-full'><MdLockOutline /><input type="text" name="Password" placeholder='Confirm Password' className='outline-none bg-slate-50' /></div>
            <div className='py-[12px] px-[20px] bg-[#A259FF] hover:bg-slate-100 hover:text-gray-900 text-white text-center rounded-full'><button type='submit'>Create Account</button></div>
          </form>
        </div>
      </div>

    </div>

  )
}

export default Hero