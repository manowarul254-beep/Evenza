import React from 'react'
import Container from './Container'
import { GoDotFill } from "react-icons/go";
import icon10 from '../assets/Icon.png'
import icon11 from '../assets/Border (1).png'

const Schedule = () => {
  return (
    <div className='bg-[#161A2D]'>
        <Container>
        <div className='w-200 text-white text-center mx-auto pt-25'>
            <div className='flex text-[14px] font-semibold w-45 mx-auto'>
                <GoDotFill />
                <p>Our Event Schedule</p>
            </div>
            <h1 className='text-[48px] font-semibold leading-13'>Explore the complete schedule for our event</h1>
        </div>
        <div className='text-white flex py-2 bg-[#ffffff10] rounded-[20px] w-125 justify-evenly items-center mx-auto mt-20'>
            <p>Day 01</p>
            <div className='rounded-full bg-white text-black py-4 px-10'>Day 02</div>
            <p>Day 03</p>
        </div>
        <div className='text-white mt-25'>
            <div className='flex w-313.25 items-center mx-auto'>
                <div><img src={icon10} alt="" /></div>
                <div className='pl-7.5'>
                    <h1 className='text-[20px] font-bold leading-5.5'>9:00 AM - 5:30 PM</h1>
                    <p>22 March 2025</p>
                </div>
                <div className='w-136.25 pl-16'>
                    <h1 className='text-[20px] font-bold leading-5.5 pb-2.75'>Professional Skills Development Workshop</h1>
                    <p>Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
                </div>
                <div className='flex pl-20'>
                    <div className=''><img src={icon11} alt="" /></div>
                    <p className='w-40 pl-2'>Street, Block 12 Sector 4, Ipsum City</p>
                </div>
            </div>
            <div className='flex w-313.25 items-center mx-auto my-10'>
                <div><img src={icon10} alt="" /></div>
                <div className='pl-7.5'>
                    <h1 className='text-[20px] font-bold leading-5.5'>9:00 AM - 5:30 PM</h1>
                    <p>22 March 2025</p>
                </div>
                <div className='w-136.25 pl-16'>
                    <h1 className='text-[20px] font-bold leading-5.5 pb-2.75'>Professional Skills Development Workshop</h1>
                    <p>Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
                </div>
                <div className='flex pl-20'>
                    <div className=''><img src={icon11} alt="" /></div>
                    <p className='w-40 pl-2'>Street, Block 12 Sector 4, Ipsum City</p>
                </div>
            </div>
            <div className='flex w-313.25 items-center mx-auto'>
                <div><img src={icon10} alt="" /></div>
                <div className='pl-7.5'>
                    <h1 className='text-[20px] font-bold leading-5.5'>9:00 AM - 5:30 PM</h1>
                    <p>22 March 2025</p>
                </div>
                <div className='w-136.25 pl-16'>
                    <h1 className='text-[20px] font-bold leading-5.5 pb-2.75'>Professional Skills Development Workshop</h1>
                    <p>Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
                </div>
                <div className='flex pl-20'>
                    <div className=''><img src={icon11} alt="" /></div>
                    <p className='w-40 pl-2'>Street, Block 12 Sector 4, Ipsum City</p>
                </div>
            </div>
            <div className='flex w-313.25 items-center mx-auto my-10 pb-20 border-top-2'>
                <div><img src={icon10} alt="" /></div>
                <div className='pl-7.5'>
                    <h1 className='text-[20px] font-bold leading-5.5'>9:00 AM - 5:30 PM</h1>
                    <p>22 March 2025</p>
                </div>
                <div className='w-136.25 pl-16'>
                    <h1 className='text-[20px] font-bold leading-5.5 pb-2.75'>Professional Skills Development Workshop</h1>
                    <p>Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
                </div>
                <div className='flex pl-20'>
                    <div className=''><img src={icon11} alt="" /></div>
                    <p className='w-40 pl-2'>Street, Block 12 Sector 4, Ipsum City</p>
                </div>
            </div>
        </div>
    </Container>
    



    </div>
  )
}

export default Schedule
