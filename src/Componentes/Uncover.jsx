import React from 'react'
import Flex from './Flex'
import Container from './Container'
import uncover from '../assets/Uncover1.png'
import uncover2 from '../assets/Uncover.png'

const Uncover = () => {
  return (
   <>
   <Container>
    <Flex>
        <div>
            <img src={uncover} alt="" />
            <div className='w-88 items-center'>
                <img src={uncover2} alt="" />
                <h1>“Institute for Professional Achievement Awards 2025”</h1>
                <p>by-Nisha Trivedi</p>
                <h2>Celebrating Achievement with Pride</h2>

            </div>
        </div>
    </Flex>
   </Container>
   
   </>
  )
}

export default Uncover
