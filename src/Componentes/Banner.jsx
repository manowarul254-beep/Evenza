import React from 'react'
import Container from './Container'
import Logo1 from '../assets/Logo 1.png'
import Logo2 from '../assets/Logo2.png'
import Logo3 from '../assets/Border.png'
import Btn from './Btn'
import link from'../assets/link.png'

const Banner = () => {
  return (
    <div className="bg-[url(./assets/Background.png)] bg-cover bg-center bg-no-repeat py-37.5 text-white">
        <Container>
            <div className='py-37.5 w-250 text-center mx-auto'>
              <div className='flex w-60.5 bg-[#ffffff10] backdrop-blur-[20px] py-2.5 text-[14px] font-semibold rounded-full mx-auto'>
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <p>Ideas that spark change.</p>
              </div>
                <h1 className='text-[76px] leading-20.5 font-extrabold w-245.75 py-5 '>Connecting Minds to Shape Tomorrow's Big Ideas</h1>
                <p className='leading-6.25 w-183.25 mx-auto pb-10'>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—exchanging ideas that spark growth, innovation, and meaningful change.</p>
                <div className='flex items-center mx-auto text-center ml-80'>
                  <Btn>Explore Schedule</Btn>
                  <img className='pl-10 pr-5' src={link} alt="" />
                  <p>Watch Video</p>
                </div>               
            </div>            
             <div>
              <div>
                <h1 className='text-[20px] font-bold leading-5.75 w-110 mx-auto'>Upcoming Speaker Reveal - Don't Miss Out</h1>              
              </div>
              <div className="flex gap-20 mt-10 w-180 mx-auto">
                <div className="w-31 h-29.75 rounded-2xl bg-gray-600 text-center pt-3">
                <h1 className="text-[40px] font-bold">202</h1>
                <p>Days</p>
                </div>
            <div className="w-31 h-29.75 rounded-2xl bg-gray-600 text-center pt-3">
                <h1 className="text-[40px] font-bold">08</h1>
                <p>Hours</p>
            </div>
            <div className="w-31 h-29.75 rounded-2xl bg-gray-600 text-center pt-3">
                <h1 className="text-[40px] font-bold">13</h1>
                <p>Minutes</p>
            </div>
            <div className="w-31 h-29.75 rounded-2xl bg-gray-600 text-center pt-3">
                <h1 className="text-[40px] font-bold">14</h1>
                <p>Seconds</p>
            </div>
            </div>

              </div>
                      
        </Container>
      
    </div>
  )
}

export default Banner
