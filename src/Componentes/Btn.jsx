import React from 'react'

const Btn = ({children}) => {
  return (
    <button className='py-3.5 px-6 bg-primary font-bold text-white rounded-full'>
      {children}
    </button>
  )
}

export default Btn
