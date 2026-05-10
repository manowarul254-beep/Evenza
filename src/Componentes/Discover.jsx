import React from 'react'
import { GoDotFill } from "react-icons/go";
import Container from './Container';
import Flex from './Flex';
import icon20 from '../assets/Background (17).png'
import icon21 from '../assets/Symbol.png'
import Btn from './Btn'
import DisCard from './DisCard';

const Discover = () => {
  return (
    <div>
       <Container>
         <div className='w-200 text-center mx-auto pt-25 pb-20'>
            <div className='flex text-[14px] font-semibold w-45 mx-auto'>
               <GoDotFill />
               <p>Pricing Plan</p>
            </div>
                 <h1 className='text-[48px] font-semibold leading-13'>Discover our flexible pricing plans for attendees</h1>
          </div>
          <Flex className='gap-7.5'>
            <DisCard/>
            <DisCard/>
            <DisCard/>
            
          </Flex>
       </Container>
    </div>
  )
}

export default Discover
