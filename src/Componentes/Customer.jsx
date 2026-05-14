import React from 'react'
import Container from './Container'
import CustomerImg from '../assets/Group 9.png'
import Flex from './Flex'
import Accordian from './Accordian'


const Customer = () => {
  return (
    
    <div className='mb-20'>
      <Container>
        <Flex className='gap-11.75'>
            <div>
                <img src={CustomerImg} alt="" />
            </div>
            <div>
                <div>
                    <p className='pb-3'>FAQ's</p>
                    <h2 className='w-197.5 text-[48px] font-semibold leading-13'>What our customers say about their experience</h2>
                </div>
                <div className='pb-10'>
                  <Accordian/>
                </div>
                
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Customer
