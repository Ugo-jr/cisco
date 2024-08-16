'use client'

import React, { useState } from 'react'
import { BsGenderFemale } from "react-icons/bs";
import { BsGenderMale } from "react-icons/bs";
import { GiBabyFace } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";
import { GiImperialCrown } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import one from '../images/2.png'
import two from '../images/Alpha.svg'

const SectionSix = () => {
    const [women, setWomen] = useState(true)
    const [men, setMen] = useState(false)
    const [kids, setKids] = useState(false)
    const [sports, setSports] = useState(false)
    const [beauty, setBeauty] = useState(false)
    const [jewelry, setJewelry] = useState(false)


    const handleWomen = () => {
        setWomen(true)
        setMen(false)
        setKids(false)
        setSports(false)
        setBeauty(false)
        setJewelry(false)
    }

    const handleMen = () => {
        setMen(true)
        setWomen(false)
        setKids(false)
        setSports(false)
        setBeauty(false)
        setJewelry(false)
    }

    const handleKids = () => {
        setKids(true)
        setWomen(false)
        setMen(false)
        setSports(false)
        setBeauty(false)
        setJewelry(false)
    }

    const handleSport = () => {
        setSports(true)
        setWomen(false)
        setMen(false)
        setKids(false)
        setBeauty(false)
        setJewelry(false)
    }

    const handleBeauty = () => {
        setBeauty(true)
        setWomen(false)
        setMen(false)
        setKids(false)
        setSports(false)
        setJewelry(false)
    }

    const handleJewelry = () => {
        setJewelry(true)
        setWomen(false)
        setMen(false)
        setKids(false)
        setSports(false)
        setBeauty(false)
    }

    return (
        <div className='px-28 my-32'>
            <div className='bg-gray-100 h-fit p-10 rounded-2xl'>
                <h1 className='text-center text-3xl my-5 mb-10  font-bold'>Start exploring.</h1>
                <ul className='flex items-center gap-2 p-1 rounded-full m-auto w-fit bg-white  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <li onClick={handleWomen} className={`${women === true ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-2 text-sm rounded-full cursor-pointer flex items-center gap-2`}><BsGenderFemale />Women</li>
                    <li onClick={handleMen} className={`${men === true ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-2 text-sm rounded-full cursor-pointer flex items-center gap-2`}><BsGenderMale />Men</li>
                    <li onClick={handleKids} className={`${kids === true ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-2 text-sm rounded-full cursor-pointer flex items-center gap-2`}><GiBabyFace />Kids</li>
                    <li onClick={handleSport} className={`${sports === true ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-2 text-sm rounded-full cursor-pointer flex items-center gap-2`}><IoMdFootball />Sports</li>
                    <li onClick={handleBeauty} className={`${beauty === true ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-2 text-sm rounded-full cursor-pointer flex items-center gap-2`}><GiImperialCrown />Beauty</li>
                    <li onClick={handleJewelry} className={`${jewelry === true ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-2 text-sm rounded-full cursor-pointer flex items-center gap-2`}><IoDiamond />Jewelry</li>
                </ul>

                {women === true || jewelry === true ?
                    <div className='grid grid-cols-3 gap-4 my-10'>
                        <div className='bg-white cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-5'>
                            <div className='flex items-center '>
                                <div className='w-fit p-1  bg-gray-100 rounded-full'>
                                    <Image src={one} className='w-[3rem]' alt='bag' width={0} height={0} />
                                </div>
                                <p className='ml-auto text-[10px] font-semibold'>155 products</p>
                            </div>
                            <div className='flex items-center relative mt-20'>
                                <div>
                                    <p className='text-[10px] text-neutral-700'>Manufacturar</p>
                                    <h2 className='text-2xl font-bold'>Backpack</h2>
                                    <p className='flex items-center gap-2 mt-16 cursor-pointer hover:text-blue-700 text-[12px]'>See collection <FaArrowRightLong /></p>
                                </div>
                                <div className='absolute bottom-[-15px] right-[-15px] w-[90%]'>
                                    <Image src={two} alt='' width={0} height={0} />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-5'>
                            <div className='flex items-center '>
                                <div className='w-fit p-1  bg-gray-100 rounded-full'>
                                    <Image src={one} className='w-[3rem]' alt='bag' width={0} height={0} />
                                </div>
                                <p className='ml-auto text-[10px] font-semibold'>155 products</p>
                            </div>
                            <div className='flex items-center relative mt-20'>
                                <div>
                                    <p className='text-[10px] text-neutral-700'>Manufacturar</p>
                                    <h2 className='text-2xl font-bold'>Backpack</h2>
                                    <p className='flex items-center gap-2 mt-16 cursor-pointer hover:text-blue-700 text-[12px]'>See collection <FaArrowRightLong /></p>
                                </div>
                                <div className='absolute bottom-[-15px] right-[-15px] w-[90%]'>
                                    <Image src={two} alt='' width={0} height={0} />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-5'>
                            <div className='flex items-center '>
                                <div className='w-fit p-1  bg-gray-100 rounded-full'>
                                    <Image src={one} className='w-[3rem]' alt='bag' width={0} height={0} />
                                </div>
                                <p className='ml-auto text-[10px] font-semibold'>155 products</p>
                            </div>
                            <div className='flex items-center relative mt-20'>
                                <div>
                                    <p className='text-[10px] text-neutral-700'>Manufacturar</p>
                                    <h2 className='text-2xl font-bold'>Backpack</h2>
                                    <p className='flex items-center gap-2 mt-16 cursor-pointer hover:text-blue-700 text-[12px]'>See collection <FaArrowRightLong /></p>
                                </div>
                                <div className='absolute bottom-[-15px] right-[-15px] w-[90%]'>
                                    <Image src={two} alt='' width={0} height={0} />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-5'>
                            <div className='flex items-center '>
                                <div className='w-fit p-1  bg-gray-100 rounded-full'>
                                    <Image src={one} className='w-[3rem]' alt='bag' width={0} height={0} />
                                </div>
                                <p className='ml-auto text-[10px] font-semibold'>155 products</p>
                            </div>
                            <div className='flex items-center relative mt-20'>
                                <div>
                                    <p className='text-[10px] text-neutral-700'>Manufacturar</p>
                                    <h2 className='text-2xl font-bold'>Backpack</h2>
                                    <p className='flex items-center gap-2 mt-16 cursor-pointer hover:text-blue-700 text-[12px]'>See collection <FaArrowRightLong /></p>
                                </div>
                                <div className='absolute bottom-[-15px] right-[-15px] w-[90%]'>
                                    <Image src={two} alt='' width={0} height={0} />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-5'>
                            <div className='flex items-center '>
                                <div className='w-fit p-1  bg-gray-100 rounded-full'>
                                    <Image src={one} className='w-[3rem]' alt='bag' width={0} height={0} />
                                </div>
                                <p className='ml-auto text-[10px] font-semibold'>155 products</p>
                            </div>
                            <div className='flex items-center relative mt-20'>
                                <div>
                                    <p className='text-[10px] text-neutral-700'>Manufacturar</p>
                                    <h2 className='text-2xl font-bold'>Backpack</h2>
                                    <p className='flex items-center gap-2 mt-16 cursor-pointer hover:text-blue-700 text-[12px]'>See collection <FaArrowRightLong /></p>
                                </div>
                                <div className='absolute bottom-[-15px] right-[-15px] w-[90%]'>
                                    <Image src={two} alt='' width={0} height={0} />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-5'>
                            <div className='flex items-center '>
                                <div className='w-fit p-1  bg-gray-100 rounded-full'>
                                    <Image src={one} className='w-[3rem]' alt='bag' width={0} height={0} />
                                </div>
                                <p className='ml-auto text-[10px] font-semibold'>155 products</p>
                            </div>
                            <div className='flex items-center relative mt-20'>
                                <div>
                                    <p className='text-[10px] text-neutral-700'>Manufacturar</p>
                                    <h2 className='text-2xl font-bold'>Backpack</h2>
                                    <p className='flex items-center gap-2 mt-16 cursor-pointer hover:text-blue-700 text-[12px]'>See collection <FaArrowRightLong /></p>
                                </div>
                                <div className='absolute bottom-[-15px] right-[-15px] w-[90%]'>
                                    <Image src={two} alt='' width={0} height={0} />
                                </div>
                            </div>
                        </div>
                    </div> :''
                }
            </div>


            
        </div>
    )
}

export default SectionSix
