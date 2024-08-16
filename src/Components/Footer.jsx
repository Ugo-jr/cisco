'use client'

import React from 'react'
import Image from 'next/image'
import logo from '../Components/images/Cisco.svg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='px-28'>
            <hr />

            <div className='grid grid-cols-5 py-20'>

                <div>
                    <div className='w-fit pb-3'>
                       <a href="#"><Image src={logo} className='w-[60%] cursor-pointer' alt='cisco logo' width={0} height={0} /></a> 
                    </div>
                    <ul className='flex flex-col  gap-2'>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800 flex gap-1 items-center'><FaFacebook className='text-blue-700 text-[14px]'/>Facebook</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800 flex gap-1 items-center'><FaTelegram className='text-blue-700 text-[14px]'/>Telegram</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800 flex gap-1 items-center'><FaYoutube className='text-red-700 text-[14px]'/>Youtube</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800 flex gap-1 items-center'><FaTwitter className='text-blue-700 text-[14px]'/>Twitter</li>
                    </ul>
                </div >

                <div>
                    <ul className='flex flex-col gap-2 '>
                        <h3 className='font-bold text-[12px]'>Getting Started</h3>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Release Notes</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Upgrade Guide</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Browser Support</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Dark Mode</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col gap-2 '>
                        <h3 className='font-bold text-[12px]'>Explore</h3>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Prototyping</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Design systems</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Pricing</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Security</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col gap-2 '>
                        <h3 className='font-bold text-[12px]'>Resources</h3>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Best practices</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Support</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Developers</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Learn design</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col gap-2 '>
                        <h3 className='font-bold text-[12px]'>Community</h3>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Discussion Forums</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Code of Conduct</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Contributing</li>
                        <li className='text-[11px] cursor-pointer font-normal text-neutral-800'>Contributing</li>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default Footer
