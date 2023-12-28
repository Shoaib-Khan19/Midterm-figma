import React, { useState } from 'react'
import logo from '../assets/images/Storefront.png'
import { MdOutlineSubject } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [sticky, setSticky] = useState(false)
    const menuLinks = [
        { name: "Marketplace", link: "#market" },
        { name: "Rankings", link: "#rank" },
        { name: "Connect to a Wallet", link: "#wallet" }
    ];

    return (
        <div className='flex p-4 justify-between items-center'>
            <div className='flex'>
                <a href="#" className='block flex '><img src={logo} alt="logo" />
                    <div className='text-white ml-2'>NFT Marketplace</div>
                </a>
            </div>
            <div className='flex hidden lg:block'>
                <ul className={`flex text-base items-center gap-2 font-xl px-6 py-2${sticky ? "bg-white/0 text-white" : "bg-white"}`}>
                    {
                        menuLinks.map((items, i) => (
                            <li key={i} className="px-6 hover:text-[#A259FF]">
                                <a href={items.link}> {items.name}</a>
                            </li>
                        ))
                    }
                <button type='submit' className='hover:bg-slate-100 hover:text-gray-900 w-full md:w-fit py-[12px] px-[20px] md:rounded-xl bg-[#A259FF] text-white rounded-full flex gap-2 text-center items-center justify-center'><FaRegUser />Sign Up</button>
                </ul>
            </div>


            <div className={`${isOpen ? "text-[#A259FF] z-10" : "text-white"} lg:hidden cursor-pointer text-2xl`} onClick={() => { setIsOpen(!isOpen) }}>
            <MdOutlineSubject />

            </div>
            <div className=
                {`${isOpen ? 'right-0' : 'right-[-100%] w-0'} ease-in-out top-0 fixed w-3/4 h-full duration-500 bg-slate-200 lg:hidden`}>
                <ul className="flex flex-col text-gray-900 items-center text-lg gap-4 p-6">
                    {
                        menuLinks.map((items, i) => (
                            <li key={i} className="px-6 hover:text-[#A259FF]">
                                <a href={items.link}> {items.name}</a>
                            </li>
                        ))
                    }


                </ul>

            </div>

        </div>
    )
}

export default NavBar