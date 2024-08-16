'use client'


import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";
import one from '../images/7.png';
import two from '../images/promo2.png';
import logo from '../images/Cisco.svg';
import { FaStar } from "react-icons/fa";

const SectionSeven = () => {
    const [like, setLike] = useState(false)
    const [likeTwo, setLikeTwo] = useState(false)
    const [likeThree, setLikeThree] = useState(false)
    const [likeFour, setLikeFour] = useState(false)
    const [likeFive, setLikeFive] = useState(false)

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

    const handleLikeFive = () => {
        setLikeFive(!likeFive)
    }

    return (
        <div className='px-28 my-9'>
            <div>
                <div className='flex py-6 gap-1'>
                    <h2 className='text-[24px] font-bold'>Best Sellers.</h2><p className='text-[24px] font-bold text-neutral-600'>Best selling of the month</p>
                </div>

                <>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}

                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                        navigation={true}
                    >
                        <SwiperSlide>
                            <div className='cursor-pointer'>
                                <div className='bg-gray-50 h-[50%] pt-6 w-full rounded-2xl relative'>
                                    <div>
                                        <Image src={one} alt='' width={0} height={0} />
                                    </div>

                                    <p onClick={handleLike} className='absolute top-3 p-2 rounded-full bg-white right-3 '>{like === true ? <IoIosHeart className='text-red-600 text-2xl' /> : <CiHeart className='text-2xl' />}</p>
                                    <p className='absolute top-3 left-3 text-[10px] px-2 py-1 bg-white rounded-full'>⨸ Sold out</p>

                                </div>

                                <div className='my-2'>
                                    <ul className='flex items-center '>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                    </ul>

                                    <h3 className='text-left text-[12px] font-bold'>Travel Pet Carrier</h3>
                                    <p className='text-left text-[10px] text-gray-500'>Dark Pink 2023</p>
                                </div>

                                <div className='flex  h-fit w-full  py-3'>
                                    <p className='p-1 cursor-pointer px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600  ' >$14</p>
                                    <p className='flex text-[12px] items-center ml-auto gap-1'><FaStar className='text-yellow-400 ml-auto' />4.9(98 reviews)</p>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='cursor-pointer'>
                                <div className='bg-gray-50 h-[50%] pt-6 w-full rounded-2xl relative'>
                                    <div>
                                        <Image src={one} alt='' width={0} height={0} />
                                    </div>

                                    <p onClick={handleLikeTwo} className='absolute top-3 p-2 rounded-full bg-white right-3 '>{likeTwo === true ? <IoIosHeart className='text-red-600 text-2xl' /> : <CiHeart className='text-2xl' />}</p>
                                    <p className='absolute top-3 left-3 text-[10px] px-2 py-1 bg-white rounded-full'>⨸ Sold out</p>

                                </div>

                                <div className='my-2'>
                                    <ul className='flex items-center '>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                    </ul>

                                    <h3 className='text-left text-[12px] font-bold'>Travel Pet Carrier</h3>
                                    <p className='text-left text-[10px] text-gray-500'>Dark Pink 2023</p>
                                </div>

                                <div className='flex  h-fit w-full  py-3'>
                                    <p className='p-1 cursor-pointer px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600  ' >$14</p>
                                    <p className='flex text-[12px] items-center ml-auto gap-1'><FaStar className='text-yellow-400 ml-auto' />4.9(98 reviews)</p>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='cursor-pointer'>
                                <div className='bg-gray-50 h-[50%] pt-6 w-full rounded-2xl relative'>
                                    <div>
                                        <Image src={one} alt='' width={0} height={0} />
                                    </div>

                                    <p onClick={handleLikeThree} className='absolute top-3 p-2 rounded-full bg-white right-3 '>{likeThree === true ? <IoIosHeart className='text-red-600 text-2xl' /> : <CiHeart className='text-2xl' />}</p>
                                    <p className='absolute top-3 left-3 text-[10px] px-2 py-1 bg-white rounded-full'>⨸ Sold out</p>

                                </div>

                                <div className='my-2'>
                                    <ul className='flex items-center '>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                    </ul>

                                    <h3 className='text-left text-[12px] font-bold'>Travel Pet Carrier</h3>
                                    <p className='text-left text-[10px] text-gray-500'>Dark Pink 2023</p>
                                </div>

                                <div className='flex  h-fit w-full  py-3'>
                                    <p className='p-1 cursor-pointer px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600  ' >$14</p>
                                    <p className='flex text-[12px] items-center ml-auto gap-1'><FaStar className='text-yellow-400 ml-auto' />4.9(98 reviews)</p>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='cursor-pointer'>
                                <div className='bg-gray-50 h-[50%] pt-6 w-full rounded-2xl relative'>
                                    <div>
                                        <Image src={one} alt='' width={0} height={0} />
                                    </div>

                                    <p onClick={handleLikeFour} className='absolute top-3 p-2 rounded-full bg-white right-3 '>{likeFour === true ? <IoIosHeart className='text-red-600 text-2xl' /> : <CiHeart className='text-2xl' />}</p>
                                    <p className='absolute top-3 left-3 text-[10px] px-2 py-1 bg-white rounded-full'>⨸ Sold out</p>

                                </div>

                                <div className='my-2'>
                                    <ul className='flex items-center '>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                    </ul>

                                    <h3 className='text-left text-[12px] font-bold'>Travel Pet Carrier</h3>
                                    <p className='text-left text-[10px] text-gray-500'>Dark Pink 2023</p>
                                </div>

                                <div className='flex  h-fit w-full  py-3'>
                                    <p className='p-1 cursor-pointer px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600  ' >$14</p>
                                    <p className='flex text-[12px] items-center ml-auto gap-1'><FaStar className='text-yellow-400 ml-auto' />4.9(98 reviews)</p>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='cursor-pointer'>
                                <div className='bg-gray-50 h-[50%] pt-6 w-full rounded-2xl relative'>
                                    <div>
                                        <Image src={one} alt='' width={0} height={0} />
                                    </div>

                                    <p onClick={handleLikeFive} className='absolute top-3 p-2 rounded-full bg-white right-3 '>{likeFive === true ? <IoIosHeart className='text-red-600 text-2xl' /> : <CiHeart className='text-2xl' />}</p>
                                    <p className='absolute top-3 left-3 text-[10px] px-2 py-1 bg-white rounded-full'>⨸ Sold out</p>

                                </div>

                                <div className='my-2'>
                                    <ul className='flex items-center '>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                        <li className='p-[8px] cursor-pointer rounded-full hover:border-2 hover:border-black'> <p className='p-[7px] rounded-full cursor-pointer bg-black w-2'></p></li>
                                    </ul>

                                    <h3 className='text-left text-[12px] font-bold'>Travel Pet Carrier</h3>
                                    <p className='text-left text-[10px] text-gray-500'>Dark Pink 2023</p>
                                </div>

                                <div className='flex  h-fit w-full  py-3'>
                                    <p className='p-1 cursor-pointer px-2 rounded-xl text-[12px] border-[1.5px] border-green-400 text-green-400 hover:border-green-600 hover:text-green-600  ' >$14</p>
                                    <p className='flex text-[12px] items-center ml-auto gap-1'><FaStar className='text-yellow-400 ml-auto' />4.9(98 reviews)</p>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>

            <div className='bg-yellow-50 my-[15%] mb-[10%] h-[75vh] rounded-2xl flex relative '>
                <div className='h-fit w-[50%] absolute bottom-0  '>
                    <Image src={two} alt='' width={0} height={0} />
                </div>
                <div className='w-full ml-[50%]'>
                    <div className='w-fit my-[10%] mt-[15%]'>
                        <a href="#"><Image src={logo} className='w-[60%]' alt='' width={0} height={0} /></a>
                    </div>

                    <h3 className='font-bold text-5xl mb-3'>Special offer <br /> in kids products</h3>
                    <p className='text-neutral-500 text-sm mb-14'>Fashion is a form of self-expression and autonomy at a particular period and place.</p>

                    <button className='py-2 px-4 bg-neutral-950 hover:bg-neutral-800 text-white rounded-full text-sm'>Discover more</button>
                </div>
            </div>

        </div>
    )
}

export default SectionSeven
