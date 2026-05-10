import React from 'react'
import Container from './Container';


const Pannel = () => {
  return (

    <div className="bg-[url(./assets/Backroundd.png)] bg-cover bg-center bg-no-repeat">
      <Container className=' text-white flex justify-between bg-[#ffffff10]'>
        <div className='w-80 hover:bg-[#ffffff10]'>
        <p className='pt-170.75'>Panels</p>
        <h1 className='pb-17.5 text-[20px] font-bold leading-5.5'>Interactive Panel Discussions</h1>
      </div>
      <div className='w-80 hover:bg-[#ffffff10]'>
        <p className='pt-170.75'>Panels</p>
        <h1 className='pb-17.5 text-[20px] font-bold'>Interactive Panel Discussions</h1>
      </div>
      <div className='w-80 hover:bg-[#ffffff10]'>
        <p className='pt-170.75'>Panels</p>
        <h1 className='pb-17.5 text-[20px] font-bold'>Interactive Panel Discussions</h1>
      </div>
      <div className='w-80 hover:bg-[#ffffff10]'>
        <p className='pt-170.75'>Panels</p>
        <h1 className='pb-17.5 text-[20px] font-bold'>Interactive Panel Discussions</h1>
      </div>
      </Container>
    </div>
  )
}

export default Pannel
