import React from 'react'

const Btn = ({Tagname="button",children,...props}) => {
  return (
    <Tagname className='py-3.5 px-6 bg-primary font-bold text-white rounded-full {...props}'>
      {children}
    </Tagname>
  )
}

export default Btn
