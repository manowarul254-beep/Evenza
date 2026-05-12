import React, { useState } from 'react'


const Accordian = () => {
    const [open,setOpen] = useState(1)

    const handleOpen = (id) => {
    setOpen(open === id ? 0 : id)

    }
  return (
     <div className='w-[830px] mx-auto mt-20 space-y-4'>

      {/* Accordion 1 */}
      <div className='overflow-hidden'>

        <button
          onClick={() => handleOpen(1)}
          className='w-full flex justify-between bg-[#F6F6F7] p-4'
        >
          <span className='text-[18px] font-semibold leading-6'>1. How does the complete event register process actually work?</span>
          <span className='w-6 h-6 rounded-full border border-[#734BDF] flex items-center justify-center text-xl text-[#734BDF]'>{open === 1 ? "-" : "+"}</span>
        </button>

        {
          open === 1 && (
            <div className='p-7 bg-gray-100 text-[18px] font-semibold leading-6 text-[#737681]'>
              React is a JavaScript library.
            </div>
          )
        }

      </div>

      {/* Accordion 2 */}
      <div className='overflow-hidden py-7.5'>

        <button
          onClick={() => handleOpen(2)}
          className='w-full flex justify-between bg-[#F6F6F7] p-4'
        >
          <span className='text-[18px] font-semibold leading-6'>2. Where is the main event venue located precisely?</span>
          <span className='w-6 h-6 rounded-full border border-[#734BDF] flex items-center justify-center text-xl text-[#734BDF]'>{open === 2 ? "-" : "+"}</span>
        </button>

        {
          open === 2 && (
            <div className='p-7 bg-gray-100 text-[18px] font-semibold leading-6 text-[#737681]'>
              Tailwind is a utility-first CSS framework.
            </div>
          )
        }

      </div>

      {/* Accordion 3 */}
      <div className='overflow-hidden'>

        <button
          onClick={() => handleOpen(3)}
          className='w-full flex justify-between bg-[#F6F6F7] p-4'
        >
          <span className='text-[18px] font-semibold leading-6'>3. Can attendees freely switch between sessions and tracks?</span>
          <span className='w-6 h-6 rounded-full border border-[#734BDF] flex items-center justify-center text-xl text-[#734BDF]'>{open === 3 ? "-" : "+"}</span>
        </button>

        {
          open === 3 && (
            <div className='p-7 bg-gray-100 text-[18px] font-semibold leading-6 text-[#737681]'>
             Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.
            </div>
          )
        }
        {/* Accordion 4 */}

      </div>
      <div className='overflow-hidden py-7.5'>

        <button
          onClick={() => handleOpen(4)}
          className='w-full flex justify-between bg-[#F6F6F7] p-4'
        >
          <span className='text-[18px] font-semibold leading-6'>4. Does the event provide virtual participation options online?</span>
          <span className='w-6 h-6 rounded-full border border-[#734BDF] flex items-center justify-center text-xl text-[#734BDF]'>{open === 4 ? "-" : "+"}</span>
        </button>

        {
          open === 4 && (
            <div className='p-7 bg-gray-100 text-[18px] font-semibold leading-6 text-[#737681]'>
              Vite is a frontend build tool.
            </div>
          )
        }

        {/* Accordion 5 */}

      </div>
      <div className='overflow-hidden'>

        <button
          onClick={() => handleOpen(5)}
          className='w-full flex justify-between bg-[#F6F6F7] p-4'
        >
          <span className='text-[18px] font-semibold leading-6'>5. What is the event refund and cancellation policy?</span>
          <span className='w-6 h-6 rounded-full border border-[#734BDF] flex items-center justify-center text-xl text-[#734BDF]'>{open === 5 ? "-" : "+"}</span>
        </button>

        {
          open === 5 && (
            <div className='p-7 bg-gray-100 text-[18px] font-semibold leading-6 text-[#737681]'>
              Vite is a frontend build tool.
            </div>
          )
        }

      </div>

    </div>
  )
}

export default Accordian
