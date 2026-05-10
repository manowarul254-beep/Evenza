import React from 'react'
import content from '../assets/Background (7).png'
import Container from './Container'
import Flex from './Flex'
import content1 from '../assets/Star.png'

const Content = () => {
  return (
    <>
        <div className="bg-[#2f3555] mt-25">
            <Container>
                <div className="pt-25">
                <p className="text-white w-25 mx-auto">Core Feature</p>
                <h1 className="text-[48px] text-white font-semibold w-[640px] mx-auto">Core features that power our exceptional services</h1>
             </div>
             <Flex className='mt-18.75 gap-7'>
                
                <div className="w-86 text-white bg-[#FFFFFF1A] px-10 pt-10 rounded-[20px] hover:bg-[#734BDF] transition-1.3s">
                   <img className="pb-25 hover:bg-white" src={content} alt="" />

                    <h1 className="text-[20px] font-bold pb-3">Event Planning Manage</h1>
                    <p className="pb-8">Deliver seamless virtual experience with high-quality streaming and interactive tools.</p>
                    <button className="text-[16px] font-bold pb-10 pt-8">Read More</button>

                </div>
                <div className="w-86 text-white bg-[#FFFFFF1A] px-10 pt-10 rounded-[20px] hover:bg-[#734BDF]">
                   <img className="pb-25" src={content}alt="" />

                    <h1 className="text-[20px] font-bold pb-3">Event Planning Manage</h1>
                    <p className="pb-8">Deliver seamless virtual experience with high-quality streaming and interactive tools.</p>
                    <button className="text-[16px] font-bold pb-10 pt-8">Read More</button>

                </div>
                <div className="w-86 text-white bg-[#FFFFFF1A] px-10 pt-10 rounded-[20px] hover:bg-[#734BDF]">
                   <img className="pb-25" src={content} alt="" />

                    <h1 className="text-[20px] font-bold pb-3">Event Planning Manage</h1>
                    <p className="pb-8">Deliver seamless virtual experience with high-quality streaming and interactive tools.</p>
                    <button className="text-[16px] font-bold pb-10 pt-8">Read More</button>

                </div>
                <div className="w-86 text-white bg-[#FFFFFF1A] px-10 pt-10 rounded-[20px] hover:bg-[#734BDF]">
                   <img className="pb-25" src={content} alt="" />

                    <h1 className="text-[20px] font-bold pb-3">Event Planning Manage</h1>
                    <p className="pb-8">Deliver seamless virtual experience with high-quality streaming and interactive tools.</p>
                    <button className="text-[16px] font-bold pb-10 pt-8">Read More</button>
                
             </div>
             </Flex>
             <p className='text-white w-155.5 mx-auto pt-15.5 pb-5.5'>Join our team and help weave innovation, quality, and success together worldwide.</p>
             <div className='flex gap-4 w-130 items-center mx-auto text-center text-white pb-25'>
                <p className='text-[20px] '>4.9/5</p>
                <img src={content1} alt="" />
                <img src={content1} alt="" />
                <img src={content1} alt="" />
                <img src={content1} alt="" />
                <img src={content1} alt="" />
                <p className='text-[20px]'>Our 4200 Review</p>

             </div>
            </Container>    
        </div>
        </>
  )
}

export default Content
