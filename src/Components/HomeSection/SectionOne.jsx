'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import first from '../images/hero-right.png'
import second from '../images/hero-right-2.png'
import third from '../images/hero-right-3.png'
import { CiSearch } from "react-icons/ci";
import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";




const SectionOne = () => {
    const [divOne, setDivOne] = useState(true)
    const [divTwo, setDivTwo] = useState(false)
    const [divThree, setDivThree] = useState(false)

    const handleDivOne = () => {
        setDivOne(true)
        setDivTwo(false)
        setDivThree(false)
    }

    const handleDivTwo = () => {
        setDivOne(false)
        setDivTwo(true)
        setDivThree(false)
    }

    const handleDivThree = () => {
        setDivOne(false)
        setDivTwo(false)
        setDivThree(true)
    }

    return (
        <div className='relative pt-16'>


            <p onClick={handleDivTwo} className='absolute right-5 bg-neutral-100 p-3 rounded-full top-[45vh] cursor-pointer' >< PiGreaterThanLight className='w-5' /></p>
            {divTwo === true &&
                <p onClick={handleDivThree} className='absolute right-5 bg-neutral-100 p-3 rounded-full top-[45vh] cursor-pointer' >< PiGreaterThanLight className='w-5' /></p>
            }
            <p onClick={handleDivOne} className='absolute left-5 bg-neutral-100 p-3 rounded-full top-[45vh]  cursor-pointer' >< PiLessThanLight className='w-5' /></p>
            {divOne &&
                <p onClick={handleDivThree} className='absolute left-5 bg-neutral-100 p-3 rounded-full top-[45vh]  cursor-pointer' >< PiLessThanLight className='w-5' /></p>
            }
            {divThree &&
                <p onClick={handleDivTwo} className='absolute left-5 bg-neutral-100 p-3 rounded-full top-[45vh]  cursor-pointer' >< PiLessThanLight className='w-5' /></p>
            }

            <div className='absolute flex items-center justify-center gap-3 bottom-5 left-0 right-0 m-auto z-40'>
                <p onClick={handleDivOne} className={`h-1 w-14 rounded-full cursor-pointer  ${divOne === true ? 'bg-black' : 'bg-white'}`}></p>
                <p onClick={handleDivTwo} className={`h-1 w-14 rounded-full cursor-pointer  ${divTwo === true ? 'bg-black' : 'bg-white'}`}></p>
                <p onClick={handleDivThree} className={`h-1 w-14 rounded-full  cursor-pointer ${divThree === true ? 'bg-black' : 'bg-white'}`}></p>
            </div>


            {divOne &&
                <section className='px-28 flex h-[80vh] items-center bg-green-100 '>
                    <div className='w-[100%]'>
                        <p className='font-bold '>In this season, find the best 🔥</p>
                        <h1 className='text-5xl py-8 font-bold '>Exclusive collection <br />for everyone</h1>
                        <button className='bg-gray-900 py-3 px-6 rounded-full text-white flex items-center gap-1'>Explore Now<CiSearch /></button>
                    </div>

                    <div data-aos="zoom-in-right" data-aos-duration="3000" className='ml-auto z-10 '>
                        <Image src={first} className='w-[70rem]' alt='image' height={0} width={0} />
                    </div>
                </section>
            }

            {divTwo &&
                <section className='px-28 h-[80vh] flex items-center bg-green-100 py- '>
                    <div className='w-[90%]'>
                        <p className='font-bold '>In this season, find the best 🔥</p>
                        <h1 className='text-5xl py-8 font-bold '>Exclusive collection <br />for everyone</h1>
                        <button className='bg-gray-900 py-3 px-6 rounded-full text-white flex items-center gap-1'>Explore Now<CiSearch /></button>
                    </div>


                    <div data-aos="zoom-in-right" data-aos-duration="3000" className='ml-auto z-10 '>
                        <Image src={second} className='w-[50rem]' alt='image' height={0} width={0} />
                    </div>
                </section>
            }

            {divThree &&
                <section className='px-28 flex h-[80vh] items-center bg-green-100 py-  '>
                    <div className='w-[90%]'>
                        <p className='font-bold '>In this season, find the best 🔥</p>
                        <h1 className='text-5xl py-8 font-bold '>Exclusive collection <br />for everyone</h1>
                        <button className='bg-gray-900 py-3 px-6 rounded-full text-white flex items-center gap-1'>Explore Now<CiSearch /></button>
                    </div>

                    <div data-aos="zoom-in-right" data-aos-duration="3000" className='ml-auto z-10 '>
                        <Image src={third} className='w-[50rem]' alt='image' height={0} width={0} />
                    </div>
                </section>
            }

        </div>
    )
}

export default SectionOne
