'use client'

import React, { useState } from 'react'
import MockData from '../MockData'
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const SectionTen = () => {
    const [favouriteData, setFavouriteData] = useState([MockData])

    const toggleFavourites = (productId) => {

        setFavouriteData((prevFavourites) => {
            if (prevFavourites.includes(productId)) {
                return prevFavourites.filter((id) => id !== productId)
            }
            else {
                [...prevFavourites, productId];
            }
        })

    }

    // const toggleFavourites = (productId) => {
    //     setFavouriteData((prevFavourites) => {
    //         prevFavourites.includes(productId)
    //             ? prevFavourites.filter((id) => id !== productId)
    //             : [...favouriteData, productId];
    //     })
    // }


    return (
        <div className='px-28 my-20'>


            <div className='grid grid-cols-4 items-center gap-10 '>
                {MockData.map((data) => (
                    <div className='col-span-1'>
                        <div className='bg-slate-100 h-[12rem] justify-center items-center relative  flex rounded-xl cursor-pointer group'>
                            <span className='absolute inset-0 opacity-0 group-hover:opacity-100 h-[12rem] w-full bg-black bg-opacity-10 rounded-xl'></span>
                            <Image className='w-[50%]' src={data.img} alt='' width={0} height={0} />

                            <div onClick={() => toggleFavourites(data.id)} className='absolute top-3 right-3'>
                                {favouriteData.includes(data.id)
                                    ? <p><FaHeart /></p>
                                    : <p> <FaRegHeart /></p>
                                }
                            </div>
                        </div>

                        {data?.colour === 1 && (
                            <div className='flex items-center gap-2'>
                                <p className='h-3 w-5 bg-yellow-500 rounded-full my-3'></p>
                                <p className='h-3 w-5 bg-yellow-500 rounded-full my-3'></p>
                                <p className='h-3 w-5 bg-yellow-500 rounded-full my-3'></p>
                                <p className='h-3 w-5 bg-yellow-500 rounded-full my-3'></p>
                            </div>
                        )}

                        {data?.colour === 2 && (
                            <div className='flex items-center gap-2'>
                                <p className='h-3 w-3 bg-yellow-500 rounded-full my-3'></p>
                                <p className='h-3 w-3 bg-yellow-500 rounded-full my-3'></p>
                                <p className='h-3 w-3 bg-yellow-500 rounded-full my-3'></p>
                                <p className='h-3 w-3 bg-yellow-500 rounded-full my-3'></p>
                            </div>
                        )}

                        <p className='text-[12px] font-bold'>{data.name}</p>
                        <p className='text-[10px] my-1'>{data.description}</p>

                        <div className='flex items-center '>
                            <p className='border-2 border-green-500 text-green-500 p-1 rounded-full text-sm'>{data.price}</p>
                            <p className='ml-auto text-[10px]'>{data.review}</p>
                        </div>
                    </div>
                ))
                }

            </div>
        </div>
    )
}

export default SectionTen
