'use client'

import React from 'react'
import Image from 'next/image'
import img from '../images/17.png'
import img2 from '../images/depart3.webp'
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const SectionEight = () => {
    return (
        <div className='px-28'>
            <div>
                <h3 className='font-bold text-3xl my-6'>Chosen by your experts</h3>

                <div className='grid grid-cols-3 gap-4'>
                    <div className='cursor-pointer'>
                        <div className='gap-2 flex flex-col w-full cursor-pointer'>
                            <div className='w-full h-[15rem] flex justify-center items-center bg-neutral-100  rounded-2xl'>
                                <Image src={img} className='w-[50%]' alt='' width={0} height={0} />
                            </div>

                            <div className='grid grid-cols-3 gap-2'>
                                <div className='w-full bg-neutral-100 rounded-2xl'>
                                    <Image src={img} alt='' width={0} height={0} />
                                </div>
                                <div className='w-full bg-neutral-100 rounded-2xl'>
                                    <Image src={img} alt='' width={0} height={0} />
                                </div>
                                <div className='w-full bg-neutral-100 rounded-2xl'>
                                    <Image src={img} alt='' width={0} height={0} />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center my-5'>
                            <div>
                                <h2 className='font-bold my-2'>Suede Bomber Jacket</h2>
                                <p className='flex items-center text-sm'><p> Orange |</p><FaStar className='text-yellow-400 mx-1' />4.9(298reviews) </p>
                            </div>
                            <p className='p-1 px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600 w-fit ml-auto ' >$82</p>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='gap-2 flex flex-col w-full cursor-pointer  '>
                            <div className='w-full h-[15rem] flex justify-center items-center bg-neutral-100  rounded-2xl'>
                                <Image src={img} className='w-[50%]' alt='' width={0} height={0} />
                            </div>

                            <div className='grid grid-cols-3 gap-2'>
                                <div className='w-full bg-neutral-100 rounded-2xl'>
                                    <Image src={img} alt='' width={0} height={0} />
                                </div>
                                <div className='w-full bg-neutral-100 rounded-2xl'>
                                    <Image src={img} alt='' width={0} height={0} />
                                </div>
                                <div className='w-full bg-neutral-100 rounded-2xl'>
                                    <Image src={img} alt='' width={0} height={0} />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center my-5'>
                            <div>
                                <h2 className='font-bold my-2'>Suede Bomber Jacket</h2>
                                <p className='flex items-center text-sm'><p> Orange |</p><FaStar className='text-yellow-400 mx-1' />4.9(298reviews) </p>
                            </div>
                            <p className='p-1 px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600 w-fit ml-auto ' >$82</p>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='gap-2 flex flex-col w-full cursor-pointer  '>
                            <div className='w-full h-[15rem] flex justify-center items-center bg-neutral-100  rounded-2xl'>
                                <Image src={img} className='w-[50%]' alt='' width={0} height={0} />
                            </div>

                            <div className='grid grid-cols-3 gap-2'>
                                <div className='w-full  bg-neutral-100 rounded-2xl'>
                                    <Image src={img} alt='' width={0} height={0} />
                                </div>
                                <div className='w-full bg-neutral-100 rounded-2xl'>
                                    <Image src={img} alt='' width={0} height={0} />
                                </div>
                                <div className='w-full bg-neutral-100 rounded-2xl'>
                                    <Image src={img} alt='' width={0} height={0} />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center my-5'>
                            <div>
                                <h2 className='font-bold my-2'>Suede Bomber Jacket</h2>
                                <p className='flex items-center text-sm'><p> Orange |</p><FaStar className='text-yellow-400 mx-1' />4.9(298reviews) </p>
                            </div>
                            <p className='p-1 px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600 w-fit ml-auto ' >$82</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-[10%]'>
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <div className='w-[100%] bg-blue-50 rounded-2xl h-[15rem] group cursor-pointer'>
                                    <Image src={img2} className='w-20' alt='' width={0} height={0} />
                                    <span className='h-[15rem] opacity-0 group-hover:opacity-100 bg-black bg-opacity-10 inset-0 absolute rounded-2xl'></span>
                                </div>
                                <div className='text-center my-5'>
                                    <h2 className='text-[13px] font-bold'> Sport Kits</h2>
                                    <p className='text-[10px] text-neutral-500 font-semibold'>50+ Categories</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='w-[100%] bg-blue-50 rounded-2xl h-[15rem] group cursor-pointer'>
                                    <Image src={img2} alt='' width={0} height={0} />
                                    <span className='h-[15rem] opacity-0 group-hover:opacity-100 bg-black bg-opacity-10 inset-0 absolute rounded-2xl'></span>
                                </div>
                                <div className='text-center my-5'>
                                    <h2 className='text-[13px] font-bold'> Sport Kits</h2>
                                    <p className='text-[10px] text-neutral-500 font-semibold'>50+ Categories</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='w-[100%] bg-blue-50 rounded-2xl h-[15rem] group cursor-pointer'>
                                    <Image src={img2} alt='' width={0} height={0} />
                                    <span className='h-[15rem] opacity-0 group-hover:opacity-100 bg-black bg-opacity-10 inset-0 absolute rounded-2xl'></span>
                                </div>
                                <div className='text-center my-5'>
                                    <h2 className='text-[13px] font-bold'> Sport Kits</h2>
                                    <p className='text-[10px] text-neutral-500 font-semibold'>50+ Categories</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='w-[100%] bg-blue-50 rounded-2xl h-[15rem] group cursor-pointer'>
                                    <Image src={img2} alt='' width={0} height={0} />
                                    <span className='h-[15rem] opacity-0 group-hover:opacity-100 bg-black bg-opacity-10 inset-0 absolute rounded-2xl'></span>
                                </div>
                                <div className='text-center my-5'>
                                    <h2 className='text-[13px] font-bold'> Sport Kits</h2>
                                    <p className='text-[10px] text-neutral-500 font-semibold'>50+ Categories</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='w-[100%] bg-blue-50 rounded-2xl h-[15rem] group cursor-pointer'>
                                    <Image src={img2} alt='' width={0} height={0} />
                                    <a href='https://chatgpt.com/c/3544b188-09c5-492b-a998-67e206e05092' className='h-[15rem] opacity-0 group-hover:opacity-100 bg-black bg-opacity-10 inset-0 absolute rounded-2xl'></a>
                                </div>
                                <div className='text-center my-5'>
                                    <h2 className='text-[13px] font-bold'> Sport Kits</h2>
                                    <p className='text-[10px] text-neutral-500 font-semibold'>50+ Categories</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    )
}

export default SectionEight
