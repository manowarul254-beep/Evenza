import React from 'react'
import Play from '../assets/Container (1).png'
import Container from './Container'
import { FaPlay } from "react-icons/fa";

const PlayPart = () => {
  return (
    <Container>
        <div className='relative mt-25 mb-25'>
            <img src={Play} alt="" />
            <div className='absolute top-75 left-170 text-white px-5 py-5 rounded-full bg-primary border-4'>
                 <FaPlay />
            </div>
       </div>
    </Container>
  )
}

export default PlayPart
