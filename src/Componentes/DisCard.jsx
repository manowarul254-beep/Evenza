import React from 'react'
import icon20 from '../assets/Background (17).png'
import icon21 from '../assets/Symbol.png'

const DisCard = () => {
  return (
    <div>
      <div>
                      <div className='w-117.5 shadow-2xl py-10 pl-10 pr-10 rounded-3xl bg-[#7376811c]'>
                          <div className=' pl-5'>
                              <div className=''>
                              <div className='flex '>
                              <img src={icon20} alt="" />
                           <div className='pl-3.5'>
                              <h1 className='text-[20px] font-bold'>Basic Package</h1>
                              <p>Perfect for first-time attend</p>
                            </div>
                          </div>
                      </div>
                      <h1 className='text-[48px] pt-10'>$49 <span className='text-[16px]'> /One-Time</span></h1>
                          </div>
                      <div className=' bg-white rounded-2xl w-100 pl-5'>
                          <h1 className='text-[20px] font-bold pt-10'>What's Included:</h1>
                          <p>It could relate to a subscription</p>
                          <div className='flex pt-20 gap-2.5'>
                              <img src={icon21} alt="" />
                              <p>Entry to all standard sessions</p>
                          </div>
                          <div className='flex gap-2.5'>
                              <img src={icon21} alt="" />
                              <p>Reserved seating in select session</p>
                          </div>
                          <div className='flex gap-2.5'>
                              <img src={icon21} alt="" />
                              <p>Meet & greet with speakers</p>
                          </div>
                          <div className='flex gap-2.5 pb-10'>
                              <img src={icon21} alt="" />
                              <p>Premium networking lounge</p>
                          </div>
                          <div className='pb-15'>
                              <button className='bg-primary text-white px-30 py-3 rounded-full'>Get Standard Pass</button>
                          </div>
                      </div>
                      
                      </div>
                  </div>
    </div>
  )
}

export default DisCard
