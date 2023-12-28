import React from 'react'
import logo from '../assets/images/Storefront.png'
import { PiDiscordLogo } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
    return (
        <div className='bg-[#3B3B3B]  lg:px-[195px]'>

            <div className='flex flex-col lg:flex-row gap-4 lg:gap-8  px-[20px] py-[40px] text-[#ccc]'>
                <div className='flex flex-col gap-3'>
                    <a href="#" className='block flex'><img src={logo} alt="logo" />
                        <div className='text-white ml-2'>NFT Marketplace</div>
                    </a>
                    <div className='text-sm font-normal'>
                        <p>NFT marketplace UI created with Anima for Figma.</p>
                        <p className='pt-[20px] pb-[15px]'>Join Community</p>
                        <div className='flex gap-2 text-xl'>
                            <a href="#" className='hover:text-[#A259FF]'><PiDiscordLogo /></a>
                            <a href="#" className='hover:text-[#A259FF]'><AiOutlineYoutube /></a>
                            <a href="#" className='hover:text-[#A259FF]'><RxTwitterLogo /></a>
                            <a href="#"  className='hover:text-[#A259FF]'><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-white font-bold pb-[20px]'>Explore</h3>
                    <div className='flex flex-col gap-2 text-sm'>
                        <a href="#" className='hover:text-[#A259FF]'>Marketplce</a>
                        <a href="#" className='hover:text-[#A259FF]'>Ranking</a>
                        <a href="#"  className='hover:text-[#A259FF]'>Connect to wallet</a>

                    </div>
                </div>
                <div>
                    <h3 className='text-white font-bold pb-[20px]'>Join Our Weekly Digest</h3>
                    <p className='text-sm'>Get exclusive promotions & updates straight to your inbox.</p>

                    <div className='pt-[20px] pb-6 text-[#2B2B2B] font-semibold flex justify-center'>

                        <form action="#" className='flex flex-col md:flex-row text-sm gap-4 md:gap-0 w-full'>
                            <div className='py-[12px] px-[20px] bg-slate-50 rounded-full md:rounded-xl'><input type="text" name="email" placeholder='Enter Your Email Here' className=' text-center w-full outline-none bg-slate-50' /></div>
                            <button type='submit' className='hover:bg-slate-100 hover:text-gray-900 w-full md:w-fit md:ml-[-20px] py-[12px] px-[20px] md:rounded-xl bg-[#A259FF] text-white rounded-full flex gap-2 text-center items-center justify-center'><MdOutlineEmail />Subscribe</button>
                        </form>
                    </div>
                </div>


            </div>
            <div className='border-t-2 text-sm text-gray-400 border-gray-400'>
                <p className='pt-4'>Ⓒ NFT Market. Use this template freely.</p>

            </div>

        </div>
    )
}

export default Footer