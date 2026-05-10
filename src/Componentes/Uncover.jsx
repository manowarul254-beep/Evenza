import React from 'react'
import Flex from './Flex'
import Container from './Container'
import uncover from '../assets/Uncover1.png'
import uncover1 from '../assets/premium.png'
import uncover2 from '../assets/Group 4.png'
import { GoDotFill } from "react-icons/go";
import icons from '../assets/Background (13).png'
import icon1 from '../assets/Background (14).png'
import Btn from './Btn'
import icon2 from '../assets/Background (15).png'

const Uncover = () => {
  return (
   <>
   <Container>
    <Flex className='gap-50 mt-25'>
        <div>
            <div className='relative'>
            <img src={uncover} alt="" />  
            <img className='absolute top-20 left-63 w-full' src={uncover1} alt="" />               
            <img className='mt-10 ml-28' src={uncover2} alt="" />
            </div>
        </div>
        <div>
           <div className='flex items-center'>
            <GoDotFill />
            <p>About Us</p>
           </div>
            <h1 className='w-170.75 text-[48px] font-semibold leading-12.75 pt-2.5 pb-4'>Uncover our mission & purpose behind this event</h1>
            <p className='w-165.75 leading-6.75 text-[#737681]'>Discover the vision that drives this event—a commitment to bringing together innovators,leaders, and changemakers to share knowledge, spark inspiration, and create meaningfulconnections.</p>
          <div className='flex justify-around rounded-[20px] mt-10.5 py-2 w-180 bg-[#F6F6F7] items-center'>
            <p>Our Mission</p>
            <div className='py-4 bg-white px-7 rounded-full'><p className=''>Our Vision</p></div>
            <p>Our Goal</p>
          </div>
          <p className='mt-10.5 w-178.75 text-[#737681]'>Our vision is to build a global community where collaboration fuels innovation we aim encourage fresh thinking, spark inspiring dialogues, and create a space.</p>
          <div className='flex gap-7.5 items-center mt-10.5 text-[#161A2D] text[20px] font-bold leading-5.5'>
            <div className='flex w-86.25 gap-3.75'>
                <img src={icons} alt="" />
                <h1 className='w-56.75'>Receive real-time event updates.</h1>
            </div>
            <div className='flex w-86.25 gap-3.75'>
                <img src={icon1} alt="" />
                <h1 className='w-56.75'>Receive real-time event updates.</h1>
            </div>
          </div>
           <div className='flex mt-20'>
            <Btn>Learn More About</Btn>
            <img className='pl-7.5' src={icon2} alt="" />
            <div className=''>
                <h1>Call Now!</h1>
                <p>+00 123 456 789</p>
            </div>
           </div>
        </div>
    </Flex>
   </Container>
   
   </>
  )
}

export default Uncover
