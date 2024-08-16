'use client'

import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import Img from '../images/promo3.webp'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoResizeSharp } from "react-icons/io5";
import { MdOutlineCrisisAlert } from "react-icons/md";
import { RiArrowDropUpLine } from "react-icons/ri";

const SectionNine = () => {
    const [allItems, setAllItems] = useState(true)
    const [women, setWomen] = useState(false)
    const [men, setMen] = useState(false)
    const [kids, setkids] = useState(false)
    const [jewels, setjewels] = useState(false)
    const [filter, setFilter] = useState(false)
    const [dollar, setDollar] = useState(true)
    const [category, setCategory] = useState(false)
    const [colors, setColor] = useState(false)
    const [size, setSize] = useState(false)
    const [order, setOrder] = useState(false)


    const handleALlItems = () => {
        setAllItems(true)
        setWomen(false)
        setMen(false)
        setkids(false)
        setjewels(false)
    }

    const handleWomen = () => {
        setAllItems(false)
        setWomen(true)
        setMen(false)
        setkids(false)
        setjewels(false)
    }

    const handleMen = () => {
        setAllItems(false)
        setWomen(false)
        setMen(true)
        setkids(false)
        setjewels(false)
    }

    const handleKids = () => {
        setAllItems(false)
        setWomen(false)
        setMen(false)
        setkids(true)
        setjewels(false)
    }

    const handleJewels = () => {
        setAllItems(false)
        setWomen(false)
        setMen(false)
        setkids(false)
        setjewels(true)
    }

    const handleFilter = () => {
        setFilter(!filter)
    }

    const handleDollar = () => {
        setDollar(true)
        setCategory(false)
        setColor(false)
        setSize(false)
        setOrder(false)
    }

    const handleCategory = () => {
        setCategory(true)
        setDollar(false)
        setColor(false)
        setSize(false)
        setOrder(false)
    }

    const handleColor = () => {
        setColor(true)
        setCategory(false)
        setDollar(false)
        setSize(false)
        setOrder(false)
    }

    const handleSize = () => {
        setSize(true)
        setCategory(false)
        setColor(false)
        setDollar(false)
        setOrder(false)
    }

    const handleOrder = () => {
        setOrder(true)
        setCategory(false)
        setColor(false)
        setSize(false)
        setDollar(false)
    }

    return (
        <div className='px-28'>
            <div className='flex bg-gray-50 h-[70vh] rounded-2xl relative '>
                <p className='w-7 h-7 absolute rounded-full bg-green-400 bottom-3 right-3'></p>
                <p className='w-7 h-7 absolute rounded-full bg-green-400 top-7 right-9 '></p>
                <p className='w-7 h-7 absolute rounded-full bg-green-400 top-3 left-8'></p>
                <p className='w-7 h-7 absolute rounded-full bg-green-400 bottom-6 left-12'></p>
                <div className='w-full py-14 pl-20 mb-[12rem]'>
                    <h2 className='text-4xl font-bold tracking-wide'>Don't miss out on <br /> special offers</h2>
                    <p className='my-4 text-sm text-gray-500 font-medium'>Register to receive about the latest, saving combos,<br /> discount codes... </p>
                    <ol className='flex flex-col gap-3 my-6'>
                        <li className='flex items-center gap-2 text-[10px] font-medium'>
                            <p className='p-1 rounded-full bg-pink-200 text-pink-900 px-2'>01</p>
                            <p className='font-bold'>Savings Combos</p>
                        </li>
                        <li className='flex items-center gap-2 text-[10px] font-medium'>
                            <p className='p-1 rounded-full bg-pink-200 text-pink-900 px-2'>02</p>
                            <p className='font-bold'>Freeship</p>
                        </li>
                        <li className='flex items-center gap-2 text-[10px] font-medium'>
                            <p className='p-1 rounded-full bg-pink-200 text-pink-900 px-2'>03</p>
                            <p className='font-bold'>Premium magazines</p>
                        </li>
                    </ol>
                    <form action="" className='relative z-30 w-fit'>
                        <input type="email" required className='py-2  px-2 w-[350px] rounded-full' placeholder='Enter your email' />
                        <button className='p-1 px-3 absolute bottom-[6.5px] right-[8px] rounded-full bg-black text-white'><FaArrowRight /></button>
                    </form>
                </div>
                <div className='w-full z-10 absolute bottom-0 flex items-center justify-end'>
                    <Image src={Img} className='w-[28rem]' alt='Image' width={0} height={0} />
                </div>
            </div>

            <div className='mt-[6rem]'>
                <div>
                    <h1 className='text-4xl font-bold my-3'>What's trending now</h1>
                    <p className='text-sm font-normal text-gray-500'>Discover the most trending products in Ciseco</p>
                </div>
                <div className='flex items-center mt-[2rem]'>
                    <ul className='flex items-center gap-3'>
                        <li onClick={handleALlItems} className={allItems === true ? ' py-1 px-4 bg-blue-950 text-white rounded-full cursor-pointer font-normal' : 'cursor-pointer py-1 px-4 text-gray-500 font-normal '}>All items</li>
                        <li onClick={handleWomen} className={women === true ? ' py-1 px-4 bg-blue-950 text-white rounded-full cursor-pointer font-normal' : 'cursor-pointer py-1 px-4 text-gray-500 font-normal '}>Women</li>
                        <li onClick={handleMen} className={men === true ? ' py-1 px-4 bg-blue-950 text-white rounded-full cursor-pointer font-normal' : 'cursor-pointer py-1 px-4 text-gray-500 font-normal '}>Men</li>
                        <li onClick={handleKids} className={kids === true ? ' py-1 px-4 bg-blue-950 text-white rounded-full cursor-pointer font-normal' : 'cursor-pointer py-1 px-4 text-gray-500 font-normal '}>Kids</li>
                        <li onClick={handleJewels} className={jewels === true ? ' py-1 px-4 bg-blue-950 text-white rounded-full cursor-pointer font-normal' : 'cursor-pointer py-1 px-4 text-gray-500 font-normal '}>Jewels</li>
                    </ul>

                    <button onClick={handleFilter} className='ml-auto py-1 px-4 bg-blue-950 text-white rounded-full cursor-pointer hover:bg-blue-900 flex items-center gap-1'><FaFilter /><span>Filter</span>{filter === true ? <RiArrowDropUpLine className='text-2xl' /> : <RiArrowDropDownLine className='text-2xl' />}</button>
                </div>
                {filter === true ?
                    <div className='my-6'>
                        <hr />
                        <div className='my-5 flex items-end'>
                            <ul className='flex items-center gap-3'>
                                <li onClick={handleDollar} className={dollar === true ? 'hover:border-gray-500 flex cursor-pointer items-center gap-1 p-1 px-3 border-2 bg-gray-900 text-white text-sm rounded-full' : 'hover:border-gray-500 flex cursor-pointer items-center gap-1 p-1 px-3 border-2 border-gray-700 bg-gray-50 text-gray-900 text-sm rounded-full'}>
                                    <CiDollar />
                                    <p>1$-500$</p>
                                </li>
                                <li onClick={handleCategory} className={category === true ? 'hover:border-gray-500 flex cursor-pointer items-center gap-1 p-1 px-3 border-2 bg-gray-900 text-white text-sm rounded-full' : 'hover:border-gray-500 flex cursor-pointer items-center gap-1 p-1 px-3 border-2 border-gray-700 bg-gray-50 text-gray-900 text-sm rounded-full'}>
                                    <BiCategoryAlt />
                                    <p>Category</p>
                                </li>
                                <li onClick={handleColor} className={colors === true ? 'hover:border-gray-500 flex cursor-pointer items-center gap-1 p-1 px-3 border-2 bg-gray-900 text-white text-sm rounded-full' : 'hover:border-gray-500 flex cursor-pointer items-center gap-1 p-1 px-3 border-2 border-gray-700 bg-gray-50 text-gray-900 text-sm rounded-full'}>
                                    <IoColorPaletteOutline />
                                    <p>Colors</p>
                                </li>
                                <li onClick={handleSize} className={size === true ? 'hover:border-gray-500 flex cursor-pointer items-center gap-1 p-1 px-3 border-2 bg-gray-900 text-white text-sm rounded-full' : 'hover:border-gray-500 flex cursor-pointer items-center gap-1 p-1 px-3 border-2 border-gray-700 bg-gray-50 text-gray-900 text-sm rounded-full'}>
                                    <IoResizeSharp />
                                    <p>Sizes</p>
                                </li>
                                <li onClick={handleOrder} className={order === true ? 'hover:border-gray-500 flex cursor-pointer items-center gap-1 p-1 px-3 border-2 bg-gray-900 text-white text-sm rounded-full' : 'hover:border-gray-500 flex cursor-pointer items-center gap-1 p-1 px-3 border-2 border-gray-700 bg-gray-50 text-gray-900 text-sm rounded-full'}>
                                    <MdOutlineCrisisAlert />
                                    <p>On Sale</p>
                                </li>
                            </ul>

                            <button className='ml-auto flex cursor-pointer items-center gap-1 p-1 px-3 border-2 border-gray-700 bg-gray-900 text-white rounded-full'>
                                <p >Sort Order</p>
                            </button>
                        </div>
                    </div> : ''
                }
            </div>
        </div>
    )
}

export default SectionNine
