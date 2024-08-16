'use client'




import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import one from '../images/1.png'
import two from '../images/5.png'
import three from '../images/4.png'
import four from '../images/3.png'
import Image from 'next/image';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const SectionTwo = () => {
    return (
        <div className='px-28 my-12 relative'>
            <div className='flex items-center gap-1 relative mb-10' >
                <h1 className='font-bold text-[22px]'>Discover More.</h1>
                <h2 className='font-bold text-[22px] text-slate-400'>Good things are waiting for you</h2>
            </div>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={15}

                    modules={[Pagination, Navigation]}
                    navigation={true}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className='flex p-2 py-5 ga rounded-lg bg-neutral-100 cursor-pointer '>
                            <div className='w-[100%] text-left'>
                                <p className='text-sm '>Explore new Arrivals</p>
                                <h2 className='text-xl font-bold py-3 '>Shop the latest <br />from top brands</h2>
                                <button className='mt-5 text-[10px] font-bold hover:bg-pink-500 hover:text-white p-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white rounded-full'>Show me all</button>
                            </div>
                            <div className='w-[100%]'>
                                <Image src={one} alt='' width={0} height={0} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex p-3 py-5  rounded-lg bg-blue-100 hover:bg-blue-100 cursor-pointer'>
                            <div className='w-[100%] text-left'>
                                <p className='text-sm '>Digital gift cards</p>
                                <h2 className='text-xl font-bold py-3 '>Give the gift<br />of choice</h2>
                                <button className='mt-5 text-[10px] font-bold hover:bg-pink-500 hover:text-white p-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white rounded-full'>Show me all</button>
                            </div>
                            <div className='w-[100%]'>
                                <Image src={two} alt='' width={0} height={0} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex p-3 py-5  rounded-lg bg-red-50 cursor-pointer '>
                            <div className='w-[100%] text-left'>
                                <p className='text-sm '>Sell collection</p>
                                <h2 className='text-xl font-bold py-3 '>Up to <br />80% off retail</h2>
                                <button className='mt-5 text-[10px] font-bold hover:bg-pink-500 hover:text-white p-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white rounded-full'>Show me all</button>
                            </div>
                            <div className='w-[100%]'>
                                <Image src={three} alt='' width={0} height={0} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex p-2 py-5  rounded-lg bg-green-50 cursor-pointer '>
                            <div className='w-[100%] text-left'>
                                <p className='text-sm '>Sell collection</p>
                                <h2 className='text-xl font-bold py-3 '>Up to <br />80% off retail</h2>
                                <button className='mt-5 text-[10px] font-bold hover:bg-pink-500 hover:text-white p-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white rounded-full'>Show me all</button>
                            </div>
                            <div className='w-[100%]'>
                                <Image src={four} alt='' width={0} height={0} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    )
}

export default SectionTwo
