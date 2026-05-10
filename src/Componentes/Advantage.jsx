import React from 'react'
import Container from './Container'
import Flex from './Flex'
import icon4 from '../assets/Background (8).png'
import icon5 from '../assets/Background (9).png'
import { GoDotFill } from "react-icons/go";
import Btn from './Btn'
import icon2 from '../assets/Background (15).png'
import image from '../assets/image-1.jpg (1).png'
import image2 from '../assets/image-2.jpg (1).png'
import image1 from '../assets/Image (3).png'
import image4 from '../assets/Image (4).png'

const Advantage = () => {
  return (
    
      <Container className='mt-25 mb-25'>
        <Flex className='gap-15'>
               <div>
                 <div className='flex'>
                  <GoDotFill />
                  <p>Key Benefits</p>
                 </div>
                 <h1 className="text-[48px] font-semibold w-154 pb-20">Key advantages that ensure your events stand out</h1>
                 
                  <div className='flex items-center pb-11'>
                    <div><img src={icon4} alt="" /></div>
                    <div className="w-152.25 pl-5">
                    <h1 className="text-[20px] font-bold">Expert-Led Keynote Sessions</h1>
                    <p className='leading-6.25'>Experience inspiring keynote sessions led by industry experts who share valuable insights, trends, and strategies to help you grow personally and professionally.</p>
                    </div>
                 </div>
                 <div className="flex items-center">
                   <div><img className="pr-5" src={icon5} alt="" /></div>
                   <div className="w-152.25">
                    <h1 className="text-[20px] font-bold">Advanced Event Technology</h1>
                    <p className='leading-6.25'>Experience inspiring keynote sessions led by industry experts who share valuable insights, trends, and strategies to help you grow personally and professionally.</p>
                 </div>
                </div>
                <div className='flex mt-20'>
                    <Btn>View Our Schedule</Btn>
                    <img className='pl-7.5' src={icon2} alt="" />
                     <div className='pl-5'>
                       <h1>Call Now!</h1>
                        <p>+00 123 456 789</p>
                    </div>
                </div>
               </div> 
              <div className=''>
                <div className='flex items-start gap-26'>
                  <div><img src={image} alt="" /></div>
                  <div><img src={image1} alt="" /></div>
                </div>
                <div className='flex items-baseline gap-16.5 pl-30 mt-[-200px]'>                  
                  <div><img src={image4} alt="" /></div>
                  <div><img src={image2} alt="" /></div>
                </div>


              </div>
        </Flex>
      </Container>
    
  )
}

export default Advantage
