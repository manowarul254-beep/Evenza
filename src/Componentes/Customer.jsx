import React from 'react'
import Container from './Container'
import CustomerImg from '../assets/Group 9.png'
import Flex from './Flex'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


const Customer = () => {
  return (
    
    <div>
      <Container>
        <Flex>
            <div>
                <img src={CustomerImg} alt="" />
            </div>
            <div>
                <div>
                    <p>FAQ's</p>
                    <h2>What our customers say about their experience</h2>
                </div>
                
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Customer
