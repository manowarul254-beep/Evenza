import React from 'react'
import Logo from "../assets/Logo (2).png"
import Flex from './Flex'
import Btn from './Btn'
import Container from './Container'



const NavBar = () => {
  return (
    <>
    <nav className='absolute top-0 left-0 w-full bg-[#ffffff10] backdrop-blur-[20px]'>
        <Container className="py-6.25 text-white">
           <Flex className="justify-between items-center">
            <div>
                <img src={Logo} alt="" />
            </div>
            <ul className='flex gap-12.5'>
                <li>Home</li>
                <li>About Us</li>
                <li>Schedule</li>
                <li>Blog</li>
                <li>Pages</li>
                <li>Contact Us</li>
            </ul>  
            <div>
                <Btn>Join the Conference</Btn>
            </div>            
         </Flex> 
        </Container>
        </nav> 
    </>
  )
}

export default NavBar
