'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import one from '../images/10.png'
import two from '../images/8.png'
import three from '../images/20.png'
import four from '../images/21.png'
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaStar } from "react-icons/fa";


const SectionThree = () => {

    const [like, setLike] = useState(false)
    const [likeTwo, setLikeTwo] = useState(false)
    const [likeThree, setLikeThree] = useState(false)
    const [likeFour, setLikeFour] = useState(false)

    const handleLike = () => {
        setLike(!like)
    }

    const handleLikeTwo = () => {
        setLikeTwo(!likeTwo)
    }

    const handleLikeThree = () => {
        setLikeThree(!likeThree)
    }

    const handleLikeFour = () => {
        setLikeFour(!likeFour)
    }


    return (
        <div className='px-28 my-28'>
            <div className='flex items-center gap-1 relative mb-10' >
                <h1 className='font-bold text-[22px]'>New Arrivals.</h1>
                <h2 className='font-bold text-[22px] text-slate-400'>REY backpacks & bags</h2>
            </div>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex flex-col items-center cursor-pointer '>
                            <div className='bg-neutral-50  relative rounded-xl  p-3 py-5 group '>
                                <p className='absolute top-3 right-3 p-2 bg-white rounded-full'>
                                    {like === true ?
                                        <FcLike onClick={handleLike} /> :
                                        <FaRegHeart onClick={handleLike} />
                                    }
                                </p>
                                <div className=''>
                                    <Image src={one} alt='' width={0} height={0} />
                                </div>
                                <div className=' hidden items-center justify-center group-hover:block  pb-2 bottom-0 right-0 left-0 gap-2 cursor-pointer absolute '>
                                    <div data-aos="fade-up" data-aos-duration="3000" className='flex  items-center justify-center   pb-2 bottom-0 right-0 left-0 gap-2 cursor-pointer'>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>XS</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>S</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>M</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>L</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>XL</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center p-2 gap-2 w-[70%]'>
                                    <p className='duration-300 hover:transition-all hover:ease-in-out bg-gradient-to-r from-slate-500 to-slate-800 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='duration-300 hover:transition-all hover:ease-in-out bg-gradient-to-tr from-pink-50 via-violet-600 to-red-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='duration-300 hover:transition-all hover:ease-in-out bg-gradient-to-bl from-fuchsia-100 via-violet-600 to-red-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='duration-300 hover:transition-all hover:ease-in-out bg-gradient-to-br from-rose-300 via-violet-600 to-teal-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='duration-300 hover:transition-all hover:ease-in-out bg-gradient-to-r from-slate-500 to-slate-800 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                </div>
                                <h3 className='text-left px-2 text-[13px] font-bold'>Leather Gloves</h3>
                                <p className='text-left px-2 text-[10px] text-gray-500'>Perfect mint green</p>
                            </div>
                            <div className='flex  justify-between h-fit w-full px-1 py-2'>
                                <p className='p-1 px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600 mr-auto ' >$14</p>
                                <p className='flex text-[12px] items-center ml-auto gap-1'><FaStar className='text-yellow-400 ml-auto' />4.9(98 reviews)</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col items-center cursor-pointer '>
                            <div className='bg-neutral-50  relative rounded-xl  w-full  justify-center flex items-center p-3 py-12 group '>
                                <p className='absolute top-3 right-3 p-2 bg-white rounded-full'>
                                    {likeTwo === true ?
                                        <FcLike onClick={handleLikeTwo} /> :
                                        <FaRegHeart onClick={handleLikeTwo} />
                                    }
                                </p>
                                <div className='w-fit'>
                                    <Image src={three} alt='' width={0} height={0} />
                                </div>
                                <div className=' hidden items-center justify-center group-hover:block  pb-2 bottom-0 right-0 left-0 gap-2 cursor-pointer absolute '>
                                    <div data-aos="fade-up" data-aos-duration="3000" className='flex  items-center justify-center   pb-2 bottom-0 right-0 left-0 gap-2 cursor-pointer'>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>XS</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>S</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>M</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>L</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>XL</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center p-2 gap-2 w-[70%]'>
                                    <p className='bg-gradient-to-r from-slate-500 to-slate-800 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-tr from-pink-50 via-violet-600 to-red-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-bl from-fuchsia-100 via-violet-600 to-red-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-br from-rose-300 via-violet-600 to-teal-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-r from-slate-500 to-slate-800 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                </div>
                                <h3 className='text-left px-2 text-[13px] font-bold'>Jump Rope Kids</h3>
                                <p className='text-left px-2 text-[10px] text-gray-500'>Classic green</p>
                            </div>
                            <div className='flex  justify-between h-fit w-full px-1 py-2'>
                                <p className='p-1 px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600 mr-auto ' >$82</p>
                                <p className='flex text-[12px] items-center ml-auto gap-1'><FaStar className='text-yellow-400 ml-auto' />4.9(98 reviews)</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col items-center cursor-pointer '>
                            <div className='bg-neutral-50  relative rounded-xl  p-3 py-5 group '>
                                <p className='absolute top-3 right-3 p-2 bg-white rounded-full'>
                                    {likeThree === true ?
                                        <FcLike onClick={handleLikeThree} /> :
                                        <FaRegHeart onClick={handleLikeThree} />
                                    }
                                </p>
                                <div className=''>
                                    <Image src={two} alt='' width={0} height={0} />
                                </div>
                                <div className=' hidden items-center justify-center group-hover:block  pb-2 bottom-0 right-0 left-0 gap-2 cursor-pointer absolute '>
                                    <div data-aos="fade-up" data-aos-duration="3000" className='flex  items-center justify-center   pb-2 bottom-0 right-0 left-0 gap-2 cursor-pointer'>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>XS</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>S</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>M</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>L</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>XL</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center p-2 gap-2 w-[70%]'>
                                    <p className='bg-gradient-to-r from-slate-500 to-slate-800 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-tr from-pink-50 via-violet-600 to-red-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-bl from-fuchsia-100 via-violet-600 to-red-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-br from-rose-300 via-violet-600 to-teal-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-r from-slate-500 to-slate-800 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                </div>
                                <h3 className='text-left px-2 text-[13px] font-bold'>Ella Leather Tote</h3>
                                <p className='text-left px-2 text-[10px] text-gray-500'>Cream Pink</p>
                            </div>
                            <div className='flex  justify-between h-fit w-full px-1 py-2'>
                                <p className='p-1 px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600 mr-auto ' >$140</p>
                                <p className='flex text-[12px] items-center ml-auto gap-1'><FaStar className='text-yellow-400 ml-auto' />4.9(98 reviews)</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col items-center cursor-pointer '>
                            <div className='bg-neutral-50  relative rounded-xl w-full  justify-center flex items-center p-3 py-[73px] group '>
                                <p className='absolute top-3 right-3 p-2 bg-white rounded-full'>
                                    {likeFour === true ?
                                        <FcLike onClick={handleLikeFour} /> :
                                        <FaRegHeart onClick={handleLikeFour} />
                                    }
                                </p>
                                <div className=''>
                                    <Image src={four} alt='' width={0} height={0} />
                                </div>
                                <div className=' hidden items-center justify-center group-hover:block  pb-2 bottom-0 right-0 left-0 gap-2 cursor-pointer absolute '>
                                    <div data-aos="fade-up" data-aos-duration="3000" className='flex  items-center justify-center   pb-2 bottom-0 right-0 left-0 gap-2 cursor-pointer'>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>XS</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>S</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>M</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>L</p>
                                        <p className='p-2 bg-white text-[10px] font-bold rounded-md hover:bg-black hover:text-white cursor-pointer hover:transition-all hover:ease-linear '>XL</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center p-2 gap-2 w-[70%]'>
                                    <p className='bg-gradient-to-r from-slate-500 to-slate-800 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-tr from-pink-50 via-violet-600 to-red-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-bl from-fuchsia-100 via-violet-600 to-red-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-br from-rose-300 via-violet-600 to-teal-500 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                    <p className='bg-gradient-to-r from-slate-500 to-slate-800 w-10  rounded-lg h-3 hover:border-2 p-1 cursor-pointer hover:border-black'></p>
                                </div>
                                <h3 className='text-left px-2 text-[13px] font-bold'>Manhattan Toy WRT</h3>
                                <p className='text-left px-2 text-[10px] text-gray-500'>New design 2023</p>
                            </div>
                            <div className='flex  justify-between h-fit w-full px-1 py-2'>
                                <p className='p-1 px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600 mr-auto ' >$70</p>
                                <p className='flex text-[12px] items-center ml-auto gap-1'><FaStar className='text-yellow-400 ml-auto' />4.9(98 reviews)</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>

            <hr className='mt-20' />
        </div>
    )
}

export default SectionThree
