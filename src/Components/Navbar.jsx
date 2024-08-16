'use client'


import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../Components/images/Cisco.svg'
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { SlBasket } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import polo from '../Components/images/IMG.png';
import profile from '../Components/images/profile.webp'
import { IoHelpBuoyOutline, IoPersonCircleOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { IoMdHelpBuoy } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import Link from 'next/link';

AOS.init();


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [templateDropDown, setTemplateDropDown] = useState(false)
    const [showDropDownTwo, setShowDropDownTwo] = useState(false);
    const [showDropDownThree, setShowDropDownThree] = useState(false);
    const [showDropDownFour, setShowDropDownFour] = useState(false);
    const [showDropDownFive, setShowDropDownFive] = useState(false);
    const [showDropDownSix, setShowDropDownSix] = useState(false);
    const [search, setSearch] = useState(false)
    const [count, setCount] = useState(0);



    const handleDropDown = () => {
        setShowDropDown(!showDropDown);
        setShowDropDownTwo(false)
        setShowDropDownFour(false)
        setShowDropDownFive(false)
        setTemplateDropDown(false)
        setShowDropDownSix(false)
    }

    const handleDropDownTwo = () => {
        setShowDropDownTwo(!showDropDownTwo)
        setShowDropDownThree(false)
        setShowDropDownFour(false)
        setShowDropDownFive(false)
        setShowDropDownSix(false)
    }

    const handleDropDownThree = () => {
        setShowDropDownThree(!showDropDownThree)
        setShowDropDownTwo(false)
        setShowDropDownFour(false)
        setShowDropDownFive(false)
        setShowDropDownSix(false)
    }

    const handleDropDownFour = () => {
        setShowDropDownFour(!showDropDownFour)
        setShowDropDownTwo(false)
        setShowDropDownThree(false)
        setShowDropDownFive(false)
        setShowDropDownSix(false)
    }

    const handleDropDownFive = () => {
        setShowDropDownFive(!showDropDownFive)
        setShowDropDownTwo(false)
        setShowDropDownThree(false)
        setShowDropDownFour(false)
        setShowDropDownSix(false)
    }

    const handleDropDownSix = () => {
        setShowDropDownSix(!showDropDownSix)
        setShowDropDownFive(false)
        setShowDropDownTwo(false)
        setShowDropDownThree(false)
        setShowDropDownFour(false)
        setShowDropDown(false)
    }

    const handleTemplateDropDown = () => {
        setTemplateDropDown(!templateDropDown)
        setShowDropDown(false)
    }

    const add = () => {
        setCount(count + 1)
    }

    const handleSearch = () => {
        setSearch(!search)
    }

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }





    return (
        <div className={`${darkMode && 'dark'}`} >
            <nav className='justify-between z-50 bg-white dark:bg-black text-black dark:text-white fixed w-full flex items-center px-28 py-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                <Link href={'/'}>
                    <div>
                        <Image className='w-32 cursor-pointer' src={logo} alt='logo' width={0} height={0} />
                    </div>
                </Link>
                <div className='flex items-center'>
                    {search === true ?
                        <input type="text" required placeholder='Search for anything.....' className='border w-[500px] bg-slate-100 rounded-md py-2 px-2 outline-none' /> :
                        <ul className='flex items-center gap-3 relative text-sm'>
                            <Link href={'/product'} >
                                <li onClick={handleDarkMode} className='hover:bg-neutral-200 px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Men</li>
                            </Link>
                            <li className='hover:bg-neutral-200 px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Women</li>
                            <li className='hover:bg-neutral-200 px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Beauty</li>
                            <li className='hover:bg-neutral-200 px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Sport</li>
                            <li className='hover:bg-neutral-200 px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear rounded-full flex items-center' onClick={handleTemplateDropDown}>Templates<RiArrowDropDownLine className='text-2xl' /></li>

                            {templateDropDown === true ?
                                <section className='bg-white absolute bottom-[-23.5rem]  right-[-23.5rem]  px-32 w-screen gap-10  h-fit flex items-center py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <div className='flex items-center  gap-9 w-[100%] '>
                                        <ul className='flex flex-col  text-gray-400 '>
                                            <h3 className='font-bold text-sm text-gray-500 py-1'>Home Page</h3>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Home 1</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Home 2</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Header 1</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Header 2</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Coming Soon</li>
                                        </ul>

                                        <ul className='flex flex-col  text-gray-400'>
                                            <h3 className='font-bold text-sm text-gray-500 py-1'>Shop Pages</h3>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Category Page 1</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Category Page 2</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Product Page 1</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Product Page 2</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Chart Page</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Checkout Page</li>
                                        </ul>

                                        <ul className='flex flex-col  text-gray-400'>
                                            <h3 className='font-bold text-sm text-gray-500 py-1'>Other Pages</h3>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Checkout Page</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Search Page </li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Chart Page</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Account Page</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Order Page</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Subcription</li>
                                        </ul>

                                        <ul className='flex flex-col  text-gray-400'>
                                            <h3 className='font-bold text-sm text-gray-500 py-1'>Blog Page</h3>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Blog Page</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Blog page</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>About Page</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Contact Page</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Login</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Signup</li>
                                            <li className='hover:bg-neutral-200 w-fit py-2 px-[5px] cursor-pointer hover:transition-all hover:ease-linear rounded-full'>Forgot Password</li>
                                        </ul>
                                    </div>

                                    <div className='bg-gray-200 hover:bg-gray-100 ml-auto w-[60%] gap-3  flex  rounded-3xl p-5 '>

                                        <div>
                                            <p className='font-semibold text-sm'>Sale Collection</p>
                                            <h2 className='font-bold text-2xl pt-2 pb-8 '>
                                                Up to <br /> 80% off retail
                                            </h2>
                                            <button className='p-3 bg-white hover:bg-gray-50 rounded-full'>Show me all</button>
                                        </div>
                                        <div className='ml-auto w-fit'>
                                            <Image src={polo} alt='' className='w-[10rem]' width={0} height={0} />
                                        </div>


                                    </div>
                                </section>
                                : ''
                            }


                            <li onClick={handleDropDown} className='hover:bg-neutral-200 px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear rounded-full flex items-center'>
                                Explore<RiArrowDropDownLine className='text-2xl' />
                            </li>
                            {showDropDown === true ?
                                <ul data-aos="fade-up" data-aos-duration="1000" className='absolute top-14 right-[-3rem] bg-white p-3 w-fit flex flex-col  rounded-lg text-xs shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <li className='cursor-pointer hover:bg-neutral-200 px-1 py-2 rounded-lg  hover:transition-all hover:ease-linear'>Home Demo 1</li>
                                    <li className='cursor-pointer hover:bg-neutral-200 px-1 py-2 rounded-lg hover:transition-all hover:ease-linear'>Home Demo 2</li>
                                    <li onClick={handleDropDownTwo} className='relative cursor-pointer hover:bg-neutral-200 px-1 py-1 rounded-lg hover:transition-all hover:ease-linear flex items-center'>Category pages <RiArrowDropDownLine className='text-2xl' /></li>
                                    {showDropDownTwo === true ?
                                        <ul data-aos="fade-right" data-aos-duration="2000" className='absolute right-[-6rem] bottom-[60%] bg-neutral-50 px-1 py-2 rounded-lg flex flex-col gap-1'>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>Category 1</li>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>Category 2</li>
                                        </ul>
                                        : ''
                                    }
                                    <li onClick={handleDropDownThree} className='cursor-pointer hover:bg-neutral-200 px-1 py-1 rounded-lg hover:transition-all hover:ease-linear flex items-center  '>Products Pages<RiArrowDropDownLine className='text-2xl' /></li>
                                    {showDropDownThree === true ?
                                        <ul data-aos="fade-right" data-aos-duration="3000" className='absolute bottom-[52%] right-[-8rem] px-1 py-2 bg-neutral-50 rounded-lg gap-1 flex flex-col'>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>Product Detail 1</li>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>Product Detail 2</li>
                                        </ul> : ''
                                    }

                                    <li className='cursor-pointer hover:bg-neutral-200 px-1 py-2 rounded-lg hover:transition-all hover:ease-linear'>Cart Page</li>
                                    <li className='cursor-pointer hover:bg-neutral-200 px-1 py-2 rounded-lg hover:transition-all hover:ease-linear'>Checkout Page</li>
                                    <li className='cursor-pointer hover:bg-neutral-200 px-1 py-2 rounded-lg hover:transition-all hover:ease-linear'>Search Page</li>
                                    <li className='cursor-pointer hover:bg-neutral-200 px-1 py-2 rounded-lg hover:transition-all hover:ease-linear'>Account Page</li>
                                    <li onClick={handleDropDownFour} className='cursor-pointer hover:bg-neutral-200 px-1 py-1 rounded-lg hover:transition-all hover:ease-linear flex items-center'>Other pages<RiArrowDropDownLine className='text-2xl' /></li>
                                    {showDropDownFour === true ?
                                        <ul data-aos="fade-right" data-aos-duration="3000" className='absolute bottom-[-9rem] right-[-9rem] px-3 py-2 bg-neutral-50 rounded-lg gap-1 flex flex-col'>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>About</li>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>Contact Us</li>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>Login</li>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>SignUp</li>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>Subcription</li>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>Forgot Password</li>
                                        </ul> : ''
                                    }
                                    <li onClick={handleDropDownFive} className='cursor-pointer hover:bg-neutral-200 px-1 py-1 rounded-lg hover:transition-all hover:ease-linear flex items-center'>Blog page<RiArrowDropDownLine className='text-2xl' /></li>
                                    {showDropDownFive === true ?
                                        <ul data-aos="fade-right" data-aos-duration="3000" className='absolute bottom-[-2rem] right-[-7rem] px-3 py-2 bg-neutral-50 rounded-lg gap-1 flex flex-col'>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>Blog Page</li>
                                            <li className='hover:bg-neutral-200 px-2 py-2 rounded-lg cursor-pointer'>Blog Single</li>
                                        </ul> : ''
                                    }
                                </ul> : ''
                            }
                        </ul>
                    }
                </div>

                <div className='flex items-center text-xl '>
                    <p onClick={handleSearch} className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear'><CiSearch /></p>
                    <p onClick={handleDropDownSix} className='hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear'><GoPerson /></p>
                    {showDropDownSix === true ?
                        <div className='absolute bottom-[-420%] rounded-2xl w-fit right-20 bg-white dark:bg-black dark:text-white p-3'>
                            <div className='flex items-center py-1'>
                                <div className='w-fit'>
                                    <Image src={profile} alt='profile pics' className='rounded-full w-[85%]' width={0} height={0} />
                                </div>
                                <div className='w-full'>
                                    <h3 className='font-bold text-base'>Eden Smith</h3>
                                    <p className='font-normal text-sm'>Benin Republic</p>
                                </div>
                            </div>
                            <hr className='py-[2px]' />
                            <ul>
                                <li className='flex items-center dark:text-white text-neutral-800 gap-1 py-1 hover:bg-neutral-200 px-3 cursor-pointer hover:transition-all hover:ease-linear rounded-full'><IoPersonCircleOutline className='text-[20px]' /><p className='text-[10px] font-bold'>My Account</p></li>
                                <li className='flex items-center dark:text-white text-neutral-800 gap-1 py-1 hover:bg-neutral-200 px-3 cursor-pointer hover:transition-all hover:ease-linear rounded-full'><HiOutlineClipboardList className='text-[20px]' /><p className='text-[10px] font-bold'>My Order</p></li>
                                <li className='flex items-center dark:text-white text-neutral-800 gap-1 py-1 hover:bg-neutral-200 px-3 cursor-pointer hover:transition-all hover:ease-linear rounded-full'><CiHeart className='text-[20px]' /><p className='text-[10px] font-bold'>Wishlist</p></li>
                            </ul>
                            <hr className='py-[2px]' />
                            <ul>
                                <li className='flex items-center dark:text-white text-neutral-800 gap-1 py-1 hover:bg-neutral-200 px-3 cursor-pointer hover:transition-all hover:ease-linear rounded-full'><IoBulbOutline className='text-[20px]' /><p className='text-[10px] font-bold'>Dark Mode</p> <input
                                    type="checkbox" className="toggle ml-auto w-[38px] h-[1rem] border-none bg-white [--tglbg:green] hover:bg-white " defaultChecked />
                                </li>
                                <li className='flex items-center dark:text-white text-neutral-800 gap-1 py-1 hover:bg-neutral-200 px-3 cursor-pointer hover:transition-all hover:ease-linear rounded-full'><IoMdHelpBuoy className='text-[20px]' /><p className='text-[10px] font-bold'>Help</p></li>
                                <li className='flex items-center dark:text-white text-neutral-800 gap-1 py-1 hover:bg-neutral-200 px-3 cursor-pointer hover:transition-all hover:ease-linear rounded-full'><RiLogoutBoxLine className='text-[20px]' /><p className='text-[10px] font-bold'>Log Out</p></li>
                            </ul>
                        </div> : ''
                    }

                    <p className='relative hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition-all hover:ease-linear' onClick={add}><SlBasket />
                        <span className='absolute bg-blue-400 dark:bg-red-600 text-white w-fit text-xs top-0 right-1 border-solid border border-white px-1 py-0 rounded-full  items-center flex justify-center'>{count}</span>
                    </p>
                </div>

            </nav >
        </div >
    )
}

export default Navbar
