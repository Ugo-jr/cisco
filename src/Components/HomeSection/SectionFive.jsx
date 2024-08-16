'use client'

import React from 'react'
import one from '../images/work1.png'
import two from '../images/work2.png'
import three from '../images/work3.png'
import four from '../images/Cisco.svg'
import five from '../images/wave.webp'
import Image from 'next/image'


const SectionFive = () => {
    return (
        <div className='px-28'>
            <div className='grid grid-cols-4  gap-7'>
                <div className='flex flex-col items-center justify-center h-[14rem] '>
                    <div className='w-24'>
                        <Image src={three} alt='' height={0} width={0} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='my-3 px-2 text-[10px] font-semibold rounded-full py-1 text-red-500 bg-red-100 w-fit'>Step 1</p>
                        <h3 className='py-3 text-[12px] font-bold'>Filter & Discover</h3>
                        <p className='text-center  text-[10px] text-gray-600 font-medium' >Smart filting and suggestions <br /> make it easy to find</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center h-[14rem]'>
                    <div className='w-24'>
                        <Image src={one} alt='' height={0} width={0} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='my-3 px-2 text-[10px] font-semibold rounded-full py-1 text-blue-500 bg-blue-100 w-fit'>Step 2</p>
                        <h3 className='py-3 text-[12px] font-bold'>Add to bag</h3>
                        <p className='text-center  text-[10px] text-gray-600 font-medium' >Smart filting and suggestions <br /> make it easy to find</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center h-[14rem] '>
                    <div className='w-16 '>
                        <Image src={two} alt='' height={0} width={0} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='my-3 mt-7 px-2 text-[10px] font-semibold rounded-full py-1 text-yellow-500 bg-yellow-100 w-fit'>Step 3</p>
                        <h3 className='py-3 text-[12px] font-bold'>Fast shipping</h3>
                        <p className='text-center  text-[10px] text-gray-600 font-medium' >Smart filting and suggestions <br /> make it easy to find</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center h-[14rem] '>
                    <div className='w-24'>
                        <Image src={one} alt='' height={0} width={0} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='my-3 px-2 text-[10px] font-semibold rounded-full py-1 text-purple-500 bg-purple-100 w-fit'>Step 4</p>
                        <h3 className='py-3 text-[12px] font-bold'>Enjoy the product</h3>
                        <p className='text-center  text-[10px] text-gray-600 font-medium' >Smart filting and suggestions <br /> make it easy to find</p>
                    </div>
                </div>
            </div>

            <hr className='mt-20' />

            <div className='flex items-center my-14'>
                <div className='w-full'>
                    <div className='w-[6rem] mb-10'>
                     <a href="#"> <Image src={four} alt='logo' className='cursor-pointer' width={0} height={0} /></a>
                    </div>
                    <div className='my-8'>
                        <h1 className='mb-3 text-5xl font-bold'>Earn free money <br /> with ciseco</h1>
                        <p className='text-gray-500 text-sm'>With ciseco you will get freeship & savings combo... </p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <button className='py-2 px-4  bg-neutral-800 hover:bg-neutral-700 text-white rounded-full'>Savings Combo</button>
                        <button className='py-2 px-4  bg-white hover:bg-neutral-50 text-black border-2  rounded-full'>Discover more</button>
                    </div>
                </div>
                <div className='ml-auto w-full'>
                    <Image src={five} alt='' height={0} width={0} />
                </div>
            </div>
        </div>
    )
}

export default SectionFive
