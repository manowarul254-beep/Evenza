import React from 'react'
import { GoDotFill } from "react-icons/go";
import Container from './Container';
import expert from '../assets/expart.png'
import expert1 from '../assets/expert.png'
import expert2 from '../assets/Link (4).png'
import expert3 from '../assets/Link (5).png'
import Flex from './Flex';

const Expert = () => {
  return (
    <div>
        <Container>
            <div className='w-200 text-center mx-auto pt-25'>
                <div className='flex text-[14px] font-semibold w-45 mx-auto'>
                  <GoDotFill />
                  <p>Our Speakers</p>
                </div>
                <h1 className='text-[48px] font-semibold leading-13'>Introducing the expert speakers joining our event</h1>
            </div>
            <Flex className='mt-20 gap-10'>
                <div className='bg-[#F6F6F7] rounded-[20px]'>
                    <img src={expert} alt="" />
                    <div className='flex justify-between items-center w-105 mt-10'>
                        <div>
                            <h1 className='text-[20px] font-bold leading-5 pb-5'>Sophia Rodrigues</h1>
                            <p className='text-[#737681]'>Global Marketing Director</p>
                        </div>
                        <div><img src={expert3} alt="" /></div>
                    </div>                    
                </div>
                <div className='bg-[#F6F6F7] rounded-[20px]'>
                    <img src={expert1} alt="" />
                    <div className='flex justify-between w-105 mt-10 items-center mb-5'>
                        <div>
                            <h1 className='text-[20px] font-bold leading-5 pb-5'>Jacob Jones</h1>
                            <p className='text-[#737681]'>Lead AI Research Scientist</p>
                        </div>
                        <div><img src={expert3} alt="" /></div>
                    </div> 
                </div>
                <div className='bg-[#F6F6F7] rounded-[20px]'>
                    <img src={expert2} alt="" />
                    <div className='flex justify-between mt-10 items-center'>
                        <div>
                            <h1 className='text-[20px] font-bold leading-5 pb-5'>Arlene McCoy</h1>
                            <p className='text-[#737681]'>Innovation Strategy Expert</p>
                        </div>
                        <div><img src={expert3} alt="" /></div>
                    </div> 
                </div>
            </Flex>   
            <div>
                <p className='w-161 mx-auto my-20'>Join our speaker and help weave innovation, quality, and success together worldwide.</p>
            </div>        
        </Container>
      
    </div>
  )
}

export default Expert
